I’m working on a Ruby on Rails app that I want to containerize using Docker and Docker Compose for local development. The app uses Ruby 2.7.1, Rails 6.1.4, and MySQL 8.0,

### Goal
Containerize the app with Docker and Docker Compose, running Rails and MySQL as separate services, suitable for local development.

### Tech Stack
- Ruby 2.7.1
- Rails 6.1.4
- MySQL 5.7
- Gems: from my Gemfile
- Environment variables:
  - AWS_ACCESS_KEY_ID
  - AWS_HOST_NAME
  - AWS_REGION
  - AWS_SECRET_ACCESS_KEY
  - GMAIL_PASSWORD
  - GMAIL_USERNAME
  - LANG: en_US.UTF-8
  - NEW_RELIC_LICENSE_KEY
  - NEW_RELIC_LOG
  - RAILS_LOG_TO_STDOUT
  - RAILS_SERVE_STATIC_FILES
  - S3_BUCKET_NAME
  - SECRET_KEY_BASE
  - SENDGRID_API_KEY
  - SENDGRID_PASSWORD
  - SENDGRID_USERNAME
  - MYSQL_USERNAME: root
  - MYSQL_PASSWORD: root1234
  - SAAN_USERNAME: username
  - SAAN_PASSWORD: password
  - RAILS_ENV: production
  - IMGUR_CLIENT_ID
  - IMGUR_CLIENT_SECRET
  - IMGUR_ACCESS_TOKEN
  - IMGUR_REFRESH_TOKEN
  - IMGUR_USE_SSL
  - ROLLBAR_ACCESS_TOKEN
  - QUOTAGUARDSTATIC_URL
  - IMGBB_API_TOKEN

### TODO
1. Create a `Dockerfile` for the Rails app:
   - Use `ruby:2.7.1` as the base image.
   - Install dependencies (e.g., `build-essential`, `libmysqlclient-dev` for `mysql2` gem).
   - Copy the app, install gems with `bundle install`, and set up the entrypoint to run `rails server`.
   - Expose port 3000.
2. Create a `docker-compose.yml` for two services:
   - `web`: The Rails app, built from the `Dockerfile`, mapping port 3000 to the host.
   - `db`: MySQL 5.7, with a persistent volume for data, environment variables for database setup (`DATABASE_USERNAME`, `DATABASE_PASSWORD`, `DATABASE_NAME`).
   - Ensure the `web` service depends on `db` and waits for MySQL to be ready.
3. Provide a `.env.example` file for environment variables:
   - Include `IMGBB_API_KEY` and MySQL credentials (`DATABASE_HOST`, `DATABASE_USERNAME`, etc.).
4. Create an entrypoint script (`entrypoint.sh`) to:
   - Run `bundle install` (in case gems change).
   - Run database migrations (`rails db:migrate`).
   - Start the Rails server (`rails s -b 0.0.0.0`).
5. Provide setup instructions in a `README.md` snippet:
   - How to build and run the containers (`docker-compose up`).
   - How to set up `.env` with the ImgBB API key and MySQL credentials.
   - How to access the app (e.g., `http://localhost:3000`).

### Constraints
- Optimize for local development (no production optimizations like multi-stage builds).
- Use `mysql2` gem for MySQL connectivity.
- Store MySQL data in a Docker volume for persistence.
- Load environment variables from `.env` using `gem figaro`.
- Include comments in files for clarity, as I’m new to Docker and vibe-coding.
- Assume a standard Rails folder structure.

### Output
- Generate:
  - `Dockerfile` for the Rails app.
  - `docker-compose.yml` for Rails and MySQL services.
  - `entrypoint.sh` for the Rails container.
  - `.env.example` for environment variables.
  - `README.md` snippet with setup instructions.
- Use standard Rails/Docker folder structure.
- Include comments explaining key steps.
- Don’t run the code—just provide it for review.
- Note any assumptions (e.g., database name, default ports).

Please avoid hardcoding sensitive data (e.g., `IMGBB_API_KEY`) and use Ruby 2.7.1/Rails 6.1.4 conventions.