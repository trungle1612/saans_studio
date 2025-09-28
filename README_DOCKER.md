# Saans Studio - Docker Setup

This document provides instructions for running the Saans Studio Rails application using Docker and Docker Compose for local development.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Quick Start

1. **Clone the repository and navigate to the project directory**
   ```bash
   cd saans_studio
   ```

2. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit the .env file with your actual values
   nano .env  # or use your preferred editor
   ```

3. **Build and start the services**
   ```bash
   # Build the Docker images and start all services
   docker-compose up --build
   
   # Or run in detached mode (background)
   docker-compose up -d --build
   ```

4. **Access the application**
   - Rails application: http://localhost:3000
   - MySQL database: localhost:3306

## Environment Variables

The application requires several environment variables to function properly. Copy `.env.example` to `.env` and fill in the required values:

### Required Variables

- `SECRET_KEY_BASE`: Rails secret key (generate with `rails secret`)
- `DATABASE_PASSWORD`: MySQL root password (default: root1234)
- `MYSQL_PASSWORD`: MySQL root password (default: root1234)

### Optional Variables

- AWS credentials for S3 storage
- Email service credentials (Gmail, SendGrid)
- Imgur/ImgBB API tokens for image hosting
- Monitoring service tokens (New Relic, Rollbar)

## Docker Services

### Web Service (Rails App)
- **Image**: Built from local Dockerfile
- **Port**: 3000 (mapped to host)
- **Dependencies**: MySQL database
- **Features**: 
  - Automatic database migrations
  - Asset precompilation
  - Health checks

### Database Service (MySQL 5.7)
- **Image**: mysql:5.7
- **Port**: 3306 (mapped to host)
- **Features**:
  - Persistent data storage
  - Health checks
  - Custom configuration support

## Development Commands

### Start services
```bash
docker-compose up
```

### Start in background
```bash
docker-compose up -d
```

### Stop services
```bash
docker-compose down
```

### View logs
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs web
docker-compose logs db
```

### Run Rails commands
```bash
# Rails console
docker-compose exec web rails console

# Database migrations
docker-compose exec web rails db:migrate

# Database seeding
docker-compose exec web rails db:seed

# Generate secret key
docker-compose exec web rails secret
```

### Database operations
```bash
# Access MySQL console
docker-compose exec db mysql -u root -p

# Backup database
docker-compose exec db mysqldump -u root -p saans_studio_development > backup.sql

# Restore database
docker-compose exec -T db mysql -u root -p saans_studio_development < backup.sql
```

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using port 3000
   lsof -i :3000
   
   # Kill the process or change the port in docker-compose.yml
   ```

2. **Database connection issues**
   ```bash
   # Check if MySQL is running
   docker-compose ps
   
   # View database logs
   docker-compose logs db
   ```

3. **Permission issues**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   ```

4. **Clean rebuild**
   ```bash
   # Stop and remove all containers, networks, and volumes
   docker-compose down -v
   
   # Remove the Docker image
   docker rmi saans_studio_web
   
   # Rebuild from scratch
   docker-compose up --build
   ```

### Reset Everything

If you need to start completely fresh:

```bash
# Stop all services and remove volumes
docker-compose down -v

# Remove all Docker images for this project
docker rmi $(docker images | grep saans_studio | awk '{print $3}')

# Rebuild and start
docker-compose up --build
```

## Production Considerations

This setup is optimized for local development. For production deployment:

1. Remove the volume mount for the application code
2. Use multi-stage builds for smaller images
3. Set up proper secrets management
4. Configure reverse proxy (nginx)
5. Set up SSL certificates
6. Use external database services

## File Structure

```
saans_studio/
├── Dockerfile              # Rails app container definition
├── docker-compose.yml      # Multi-service orchestration
├── entrypoint.sh          # Container startup script
├── .env.example           # Environment variables template
├── .env                   # Your actual environment variables (gitignored)
└── README_DOCKER.md       # This file
```

## Support

If you encounter issues:

1. Check the logs: `docker-compose logs`
2. Verify environment variables are set correctly
3. Ensure all required services are running: `docker-compose ps`
4. Try a clean rebuild as described in troubleshooting

For additional help, refer to the Docker and Docker Compose documentation.