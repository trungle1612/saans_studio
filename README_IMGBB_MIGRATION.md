# ImgBB Migration Setup Instructions

This document provides step-by-step instructions for migrating images from Imgur to ImgBB using Docker.

## Prerequisites

1. **ImgBB API Key**: Get your API key from [ImgBB](https://imgbb.com/)
2. **Docker and Docker Compose**: Ensure Docker is running on your system

## Setup Instructions

### 1. Environment Configuration

Create or update your `.env` file in the project root with your ImgBB API key:

```bash
# Add this line to your .env file
IMGBB_API_KEY=your_imgbb_api_key_here
```

**Important**: Replace `your_imgbb_api_key_here` with your actual ImgBB API key.

### 2. Install Dependencies

Run the following command to install the new gems (httparty and dotenv-rails):

```bash
docker-compose exec web bundle install
```

### 3. Run Database Migration

Execute the migration to add the new ImgBB fields to your database:

```bash
docker-compose exec web bundle exec rails db:migrate
```

This will add the following fields to both `portfolios` and `portfolio_details` tables:
- `photo_origin_url` - Stores the original image URL from ImgBB
- `photo_medium_url` - Stores the medium-sized image URL from ImgBB  
- `delete_url` - Stores the delete URL for managing the image on ImgBB

### 4. Run the Image Migration

Execute the rake task to migrate all images from Imgur to ImgBB:

```bash
docker-compose exec web bundle exec rake migrate_images
```

**What this does:**
- Scans all `Portfolio` records with photos
- Scans all `PortfolioDetail` records with photos (if the table exists)
- Downloads images from Imgur URLs
- Uploads them to ImgBB
- Updates the database with new ImgBB URLs
- Skips already migrated records (idempotent operation)
- Logs progress and errors

### 5. Verify Migration

After the migration completes, you can verify the results by:

1. **Check the logs**: The rake task provides detailed output showing successful and failed migrations
2. **Database inspection**: Check that the new fields are populated:
   ```bash
   docker-compose exec web bundle exec rails console
   ```
   Then in the Rails console:
   ```ruby
   # Check portfolios with ImgBB URLs
   Portfolio.where.not(photo_origin_url: nil).count
   
   # Check portfolio details with ImgBB URLs  
   PortfolioDetail.where.not(photo_origin_url: nil).count
   ```

## Migration Details

### What Gets Migrated

- **Portfolio records**: All portfolios with `photo_file_name` present
- **PortfolioDetail records**: All portfolio details with `photo_file_name` present
- **Idempotent**: Records already migrated (with `photo_origin_url` present) are skipped
- **Batch processing**: Records are processed in batches of 10 to avoid memory issues

### Error Handling

The migration includes comprehensive error handling:

- **Invalid URLs**: Skips records with invalid Imgur URLs
- **File size validation**: Rejects files larger than 32MB
- **File type validation**: Only processes JPG, PNG, and GIF files
- **API errors**: Logs and skips records that fail to upload to ImgBB
- **Network issues**: Handles download failures gracefully

### Logging

All migration activities are logged:

- **Progress**: Shows which records are being processed
- **Success**: Confirms successful migrations
- **Errors**: Details any failures with error messages
- **Summary**: Provides counts of successful and failed migrations

## Troubleshooting

### Common Issues

1. **Missing API Key**
   ```
   ERROR: IMGBB_API_KEY environment variable is not set!
   ```
   **Solution**: Add your ImgBB API key to the `.env` file

2. **File Too Large**
   ```
   File too large: X bytes (max: 33554432)
   ```
   **Solution**: The file exceeds ImgBB's 32MB limit. These files will be skipped.

3. **Invalid File Type**
   ```
   Invalid file type: application/pdf
   ```
   **Solution**: Only image files (JPG, PNG, GIF) are supported.

4. **Network Issues**
   ```
   Failed to migrate Portfolio #123: Net::ReadTimeout
   ```
   **Solution**: Check your internet connection and try again.

### Re-running the Migration

The migration is idempotent, meaning you can safely run it multiple times:

```bash
docker-compose exec web bundle exec rake migrate_images
```

Already migrated records will be skipped, and only new records will be processed.

## Post-Migration

After successful migration:

1. **Update your application code** to use the new ImgBB URLs instead of Imgur URLs
2. **Test the new URLs** to ensure images are loading correctly
3. **Consider removing old Imgur URLs** once you've verified everything works
4. **Monitor your ImgBB usage** to stay within API limits

## Support

If you encounter issues during migration:

1. Check the Rails logs: `docker-compose logs web`
2. Verify your ImgBB API key is correct
3. Ensure all dependencies are installed: `docker-compose exec web bundle install`
4. Check that the database migration ran successfully: `docker-compose exec web bundle exec rails db:migrate:status`
