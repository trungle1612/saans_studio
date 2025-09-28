#!/bin/sh

# Exit on any error
set -e

echo "Starting Rails application setup..."

# Clean up any existing PID file
rm -f /app/tmp/pids/server.pid

# Wait for MySQL to be ready
echo "Waiting for MySQL to be ready..."
until mysqladmin ping -h"$DATABASE_HOST" -u"$DATABASE_USERNAME" -p"$DATABASE_PASSWORD" --silent; do
  echo "MySQL is unavailable - sleeping"
  sleep 2
done

echo "MySQL is ready!"

# Install gems (in case they changed) - skip if already installed
echo "Checking gems..."
bundle check || bundle install

# Precompile assets for production only
if [ "$RAILS_ENV" = "production" ]; then
  echo "Precompiling assets..."
  bundle exec rails assets:precompile
else
  echo "Skipping asset precompilation for development environment"
fi

# Run database migrations
echo "Running database migrations..."
bundle exec rails db:migrate

# Seed database (optional - uncomment if you want to seed)
# echo "Seeding database..."
# bundle exec rails db:seed

echo "Setup complete! Starting Rails server..."

# Start the Rails server
exec bundle exec rails server -b 0.0.0.0