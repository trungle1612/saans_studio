module Admin
  class PortfolioDetailsController < Admin::ApplicationController
    # Overwrite any of the RESTful controller actions to implement custom behavior
    # For example, you may want to send an email after a foo is updated.
    #
    def create
      if params[:portfolio_detail][:photo].present?
        handle_photo_upload
      end
      super
    end

    def update
      if params[:portfolio_detail][:photo].present?
        handle_photo_upload
      end
      super
    end

    private

    def handle_photo_upload
      uploaded_file = params[:portfolio_detail][:photo]
      
      # Create a temporary file
      temp_file = Tempfile.new(['portfolio_detail_photo', File.extname(uploaded_file.original_filename)])
      temp_file.binmode
      temp_file.write(uploaded_file.read)
      temp_file.rewind
      
      begin
        # Upload to ImgBB
        result = ImgbbUploader.upload(temp_file.path)
        
        # Update the portfolio detail with the URLs
        if @requested_resource
          @requested_resource.update!(
            photo_origin_url: result[:origin_url],
            photo_medium_url: result[:medium_url],
            delete_url: result[:delete_url]
          )
        else
          # For new records, we'll store the URLs in instance variables
          # and handle them in the create method
          @photo_origin_url = result[:origin_url]
          @photo_medium_url = result[:medium_url]
          @delete_url = result[:delete_url]
        end
        
        # Remove the photo parameter to avoid Paperclip processing
        params[:portfolio_detail].delete(:photo)
        
      rescue => e
        Rails.logger.error "Failed to upload photo to ImgBB: #{e.message}"
        flash[:alert] = "Failed to upload photo: #{e.message}"
      ensure
        temp_file.close
        temp_file.unlink
      end
    end

    # Override this method to specify custom lookup behavior.
    # This will be used to set the resource for the `show`, `edit`, and `update`
    # actions.
    #
    # def find_resource(param)
    #   Foo.find_by!(slug: param)
    # end

    # The result of this lookup will be available as `requested_resource`

    # Override this if you have certain roles that require a subset
    # this will be used to set the records shown on the `index` action.
    #
    # def scoped_resource
    #   if current_user.super_admin?
    #     resource_class
    #   else
    #     resource_class.with_less_stuff
    #   end
    # end

    # Override `resource_params` if you want to transform the submitted
    # data before it's persisted. For example, the following would turn all
    # empty values into nil values. It uses other APIs such as `resource_class`
    # and `dashboard`:
    #
    def resource_params
      permitted_params = params.require(resource_class.model_name.param_key).
        permit(dashboard.permitted_attributes)
      
      # Add photo URLs if they were uploaded
      if @photo_origin_url.present?
        permitted_params[:photo_origin_url] = @photo_origin_url
        permitted_params[:photo_medium_url] = @photo_medium_url
        permitted_params[:delete_url] = @delete_url
      end
      
      permitted_params.transform_values { |value| value == "" ? nil : value }
    end

    # See https://administrate-prototype.herokuapp.com/customizing_controller_actions
    # for more information
  end
end
