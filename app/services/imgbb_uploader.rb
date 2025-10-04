require 'httparty'
require 'open-uri'

class ImgbbUploader
  include HTTParty
  
  # Base URL for ImgBB API
  BASE_URL = 'https://api.imgbb.com/1/upload'
  
  # Maximum file size in bytes (32 MB)
  MAX_FILE_SIZE = 32 * 1024 * 1024
  
  # Allowed image types
  ALLOWED_TYPES = %w[image/jpeg image/jpg image/png image/gif].freeze
  
  # Imgur domain patterns for validation
  IMGUR_DOMAINS = %w[imgur.com i.imgur.com].freeze
  
  class << self
    # Upload a file directly to ImgBB
    # @param file_path [String] Path to the file to upload
    # @return [Hash] Hash containing origin_url, medium_url, and delete_url
    def upload(file_path)
      raise ArgumentError, "File not found: #{file_path}" unless File.exist?(file_path)
      
      # Validate file size
      file_size = File.size(file_path)
      raise ArgumentError, "File too large: #{file_size} bytes (max: #{MAX_FILE_SIZE})" if file_size > MAX_FILE_SIZE
      
      # Validate file type
      content_type = `file --mime-type -b "#{file_path}"`.strip
      raise ArgumentError, "Invalid file type: #{content_type}" unless ALLOWED_TYPES.include?(content_type)
      
      # Read file and encode as base64
      file_data = File.read(file_path)
      base64_data = Base64.encode64(file_data)
      
      # Make API request
      response = post(BASE_URL, body: {
        key: api_key,
        image: base64_data
      })
      
      handle_response(response)
    end
    
    # Migrate an image from Imgur URL to ImgBB
    # @param img_url [String] Imgur URL to migrate
    # @return [Hash] Hash containing origin_url, medium_url, and delete_url
    def migrate_from_url(img_url)
      raise ArgumentError, "URL cannot be blank" if img_url.blank?
      
      # Validate Imgur URL
      unless valid_imgur_url?(img_url)
        raise ArgumentError, "Invalid Imgur URL: #{img_url}"
      end
      
      # Download image from Imgur
      Rails.logger.info "Downloading image from Imgur: #{img_url}"
      downloaded_file = download_image(img_url, ENV['QUOTAGUARDSTATIC_URL'])
      
      begin
        # Upload to ImgBB
        Rails.logger.info "Uploading image to ImgBB: #{downloaded_file.path}"
        result = upload(downloaded_file.path)
        result
      ensure
        # Clean up temporary file
        Rails.logger.info "Deleting temporary file"
        File.delete(downloaded_file.path) if downloaded_file && File.exist?(downloaded_file.path)
      end
    rescue => e
      Rails.logger.error "Failed to migrate image from #{img_url}: #{e.message}"
      raise e
    end
    
    private
    
    # Get API key from environment
    def api_key
      ENV['IMGBB_API_KEY'].tap do |key|
        raise "IMGBB_API_KEY environment variable not set" if key.blank?
      end
    end
    
    # Validate if URL is a valid Imgur URL
    def valid_imgur_url?(url)
      return false if url.blank?
      
      begin
        uri = URI.parse(url)
        IMGUR_DOMAINS.any? { |domain| uri.host&.include?(domain) }
      rescue URI::InvalidURIError
        false
      end
    end
    
    # Download image from URL and return temporary file
    def download_image(url, proxy)
      # Create temporary file
      temp_file = Tempfile.new(['imgbb_migration', '.jpg'])
      
      begin
        # Download the image
        if proxy
          Rails.logger.info "Downloading image from URL with proxy"
          proxy_uri, proxy_user, proxy_password = parse_proxy(proxy)
          URI.open(url, proxy_http_basic_authentication: [proxy_uri, proxy_user, proxy_password]) do |image_data|
            File.open(temp_file.path, "wb") do |file|
              # Write the image data to the local file
              file.write(image_data.read)
            end
          end
        else
          Rails.logger.info "Downloading image from URL without proxy"
          URI.open(url) do |image_data|
            File.open(temp_file.path, "wb") do |file|
              # Write the image data to the local file
              file.write(image_data.read)
            end
          end
        end
        
        File.open(temp_file.path, "rb")
      rescue => e
        temp_file.close
        temp_file.unlink
        raise e
      end
    end
    
    # Handle API response and extract URLs
    def handle_response(response)
      if response.success?
        data = response.parsed_response['data']
        
        if data && data['url'] && data['medium'] && data['delete_url']
          {
            origin_url: data['url'],
            medium_url: data['medium']['url'],
            delete_url: data['delete_url']
          }
        else
          raise "Invalid response format from ImgBB API"
        end
      else
        error_message = response.parsed_response&.dig('error', 'message') || 'Unknown error'
        raise "ImgBB API error: #{error_message}"
      end
    end

    def parse_proxy(proxy)
      return [] if proxy.blank?
      res = proxy.split('@')

      proxy_uri = "http://#{res[1]}"
      proxy_user = res[0].split(':')[0]
      proxy_password = res[0].split(':')[1]

      [proxy_uri, proxy_user, proxy_password]
    end
  end
end
