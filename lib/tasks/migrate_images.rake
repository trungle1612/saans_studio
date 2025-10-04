namespace :migrate_images do
  desc "Migrate images from Imgur to ImgBB for Portfolio and PortfolioDetail models"
  task :to_imgbb => :environment do
    puts "Starting image migration from Imgur to ImgBB..."
    puts "This process will migrate images in batches to avoid memory issues."
    puts "=" * 60
    
    # Check if IMGBB_API_KEY is set
    unless ENV['IMGBB_API_KEY'].present?
      puts "ERROR: IMGBB_API_KEY environment variable is not set!"
      puts "Please set your ImgBB API key in the .env file or environment."
      exit 1
    end
    
    # Migrate Portfolio records
    migrate_portfolios
    
    # Migrate PortfolioDetail records (if table exists)
    migrate_portfolio_details if table_exists?('portfolio_details')
    
    puts "=" * 60
    puts "Image migration completed!"
  end
  
  private
  
  # Migrate Portfolio records
  def migrate_portfolios
    puts "\n📸 Migrating Portfolio images..."
    
    # Find portfolios with photos that haven't been migrated yet
    portfolios_to_migrate = Portfolio.all
    
    total_count = portfolios_to_migrate.count
    puts "Found #{total_count} Portfolio records to migrate"
    
    if total_count == 0
      puts "No Portfolio records need migration."
      return
    end
    
    migrated_count = 0
    failed_count = 0
    
    # Process in batches to avoid memory issues
    portfolios_to_migrate.find_each(batch_size: 10) do |portfolio|
      begin
        # Skip if already migrated (idempotent check)
        if portfolio.photo_origin_url.present?
          puts "⏭️  Skipping Portfolio ##{portfolio.id} - already migrated"
          next
        end
        
        # Get the Imgur URL from the photo attachment
        imgur_url = portfolio.photo.url
        next if imgur_url.blank? || imgur_url.include?('missing.png')
        
        puts "🔄 Migrating Portfolio ##{portfolio.id} from #{imgur_url}"
        
        # Migrate the image
        result = ImgbbUploader.migrate_from_url(imgur_url)
        
        # Update the portfolio with ImgBB URLs
        portfolio.update!(
          photo_origin_url: result[:origin_url],
          photo_medium_url: result[:medium_url],
          delete_url: result[:delete_url]
        )
        
        migrated_count += 1
        puts "✅ Migrated Portfolio ##{portfolio.id} successfully"
        Rails.logger.info "Migrated Portfolio ##{portfolio.id}"
        
      rescue => e
        failed_count += 1
        error_msg = "Failed to migrate Portfolio ##{portfolio.id}: #{e.message}"
        puts "❌ #{error_msg}"
        Rails.logger.error error_msg
      end
    end
    
    puts "\nPortfolio migration summary:"
    puts "  ✅ Successfully migrated: #{migrated_count}"
    puts "  ❌ Failed: #{failed_count}"
    puts "  📊 Total processed: #{migrated_count + failed_count}"
  end
  
  # Migrate PortfolioDetail records
  def migrate_portfolio_details
    puts "\n📸 Migrating PortfolioDetail images..."
    
    # Find portfolio details with photos that haven't been migrated yet
    details_to_migrate = PortfolioDetail.all
    
    total_count = details_to_migrate.count
    puts "Found #{total_count} PortfolioDetail records to migrate"
    
    if total_count == 0
      puts "No PortfolioDetail records need migration."
      return
    end
    
    migrated_count = 0
    failed_count = 0
    
    # Process in batches to avoid memory issues
    details_to_migrate.find_each(batch_size: 10) do |detail|
      begin
        # Skip if already migrated (idempotent check)
        if detail.photo_origin_url.present?
          puts "⏭️  Skipping PortfolioDetail ##{detail.id} - already migrated"
          next
        end
        
        # Get the Imgur URL from the photo attachment
        imgur_url = detail.photo.url
        next if imgur_url.blank? || imgur_url.include?('missing.png')
        
        puts "🔄 Migrating PortfolioDetail ##{detail.id} from #{imgur_url}"
        
        # Migrate the image
        result = ImgbbUploader.migrate_from_url(imgur_url)
        
        # Update the portfolio detail with ImgBB URLs
        detail.update!(
          photo_origin_url: result[:origin_url],
          photo_medium_url: result[:medium_url],
          delete_url: result[:delete_url]
        )
        
        migrated_count += 1
        puts "✅ Migrated PortfolioDetail ##{detail.id} successfully"
        Rails.logger.info "Migrated PortfolioDetail ##{detail.id}"
        
      rescue => e
        failed_count += 1
        error_msg = "Failed to migrate PortfolioDetail ##{detail.id}: #{e.message}"
        puts "❌ #{error_msg}"
        Rails.logger.error error_msg
      end
    end
    
    puts "\nPortfolioDetail migration summary:"
    puts "  ✅ Successfully migrated: #{migrated_count}"
    puts "  ❌ Failed: #{failed_count}"
    puts "  📊 Total processed: #{migrated_count + failed_count}"
  end
  
  # Check if a table exists in the database
  def table_exists?(table_name)
    ActiveRecord::Base.connection.table_exists?(table_name)
  end
end

# Create a simple task alias for easier execution
desc "Migrate images from Imgur to ImgBB"
task :migrate_images => 'migrate_images:to_imgbb'
