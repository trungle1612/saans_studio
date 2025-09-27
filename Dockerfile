# Use Ruby 2.7.1 as the base image (using a more recent base)
FROM ruby:2.7.1-alpine

# Set environment variables
ENV RAILS_ENV=development
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_LOG_TO_STDOUT=true
ENV LANG=en_US.UTF-8
ENV NODE_VER "v22.15.0"
ENV NODE_DIR /usr/local/lib/nodejs
ENV YARN_VER "1.22.17"
ARG ARCH="x64"

# Install system dependencies for Alpine Linux
# - build-base: for compiling native extensions
# - mariadb-dev: for mysql2 gem
# - nodejs: for webpacker
# - mariadb-client: for MySQL client tools
# - curl: for health checks
# - shared-mime-info: for mimemagic gem
# - gcompat: for glibc compatibility (needed for nokogiri on ARM64)
# - tzdata: for timezone data
# - yarn: for asset compilation
RUN apk add --no-cache \
    build-base \
    mariadb-dev \
    nodejs \
    mariadb-client \
    curl \
    shared-mime-info \
    gcompat \
    tzdata \
    yarn \
    git \
    openssh-client \
    socat

# Set working directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock first for better Docker layer caching
COPY Gemfile Gemfile.lock ./

# Install gems
RUN bundle config --global frozen 0 && \
    bundle install --without test

# Copy the rest of the application
COPY . .

# Set the entrypoint script (before switching users)
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

# Create a non-root user for security (Alpine Linux uses adduser)
RUN adduser -D -u 1000 app && \
    chown -R app:app /app && \
    chown -R app:app /usr/local/bundle
USER app

# Expose port 3000
EXPOSE 3000

# Use the entrypoint script
ENTRYPOINT ["/usr/bin/entrypoint.sh"]
