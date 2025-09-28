#!/bin/bash

# Script to copy SSH keys to container and run Capistrano deployment
# Usage: ./copy_ssh_and_deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
CONTAINER_NAME="saans_studio_web"

echo "🔑 Copying SSH keys to container and deploying to $ENVIRONMENT..."

# Check if SSH keys exist
if [ ! -f ~/.ssh/id_rsa ]; then
    echo "❌ SSH private key not found at ~/.ssh/id_rsa"
    echo "   Please ensure your SSH key is set up first."
    exit 1
fi

# Check if container is running
if ! docker ps | grep -q $CONTAINER_NAME; then
    echo "❌ Container $CONTAINER_NAME is not running."
    echo "   Please start your containers first: docker-compose up -d"
    exit 1
fi

echo "📋 Copying SSH keys to container..."

# Copy SSH private key
docker cp ~/.ssh/id_rsa $CONTAINER_NAME:/home/app/.ssh/id_rsa

# Copy SSH public key
docker cp ~/.ssh/id_rsa.pub $CONTAINER_NAME:/home/app/.ssh/id_rsa.pub

# Copy known_hosts if it exists
if [ -f ~/.ssh/known_hosts ]; then
    docker cp ~/.ssh/known_hosts $CONTAINER_NAME:/home/app/.ssh/known_hosts
fi

echo "🔐 Setting SSH permissions in container..."

# Set proper permissions
docker exec $CONTAINER_NAME chmod 700 /home/app/.ssh
docker exec $CONTAINER_NAME chmod 600 /home/app/.ssh/id_rsa
docker exec $CONTAINER_NAME chmod 644 /home/app/.ssh/id_rsa.pub
if [ -f ~/.ssh/known_hosts ]; then
    docker exec $CONTAINER_NAME chmod 644 /home/app/.ssh/known_hosts
fi

echo "🔍 Testing SSH connection..."

# Test SSH connection
docker exec $CONTAINER_NAME ssh -o ConnectTimeout=10 -o BatchMode=yes -o StrictHostKeyChecking=no ubuntu@139.99.61.48 "echo 'SSH connection successful'" || {
    echo "⚠️  SSH connection test failed, but continuing with deployment..."
}

echo "🚀 Running Capistrano deployment..."

# Run Capistrano deployment
docker exec $CONTAINER_NAME bundle exec cap $ENVIRONMENT deploy

echo "🧹 Cleaning up SSH keys from container..."

# Remove SSH keys from container for security
docker exec $CONTAINER_NAME rm -f /home/app/.ssh/id_rsa /home/app/.ssh/id_rsa.pub /home/app/.ssh/known_hosts

echo "✅ Deployment completed successfully!"
echo "🔒 SSH keys have been removed from container for security."
