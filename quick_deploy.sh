#!/bin/bash

# Quick deployment script with SSH key copying
# Usage: ./quick_deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
CONTAINER_NAME="saans_studio_web"

echo "🚀 Quick Deploy to $ENVIRONMENT"

# Copy SSH keys and run deployment in one go
docker cp ~/.ssh/id_rsa $CONTAINER_NAME:/home/app/.ssh/id_rsa && \
docker cp ~/.ssh/id_rsa.pub $CONTAINER_NAME:/home/app/.ssh/id_rsa.pub && \
docker exec $CONTAINER_NAME chmod 700 /home/app/.ssh && \
docker exec $CONTAINER_NAME chmod 600 /home/app/.ssh/id_rsa && \
docker exec $CONTAINER_NAME chmod 644 /home/app/.ssh/id_rsa.pub && \
docker exec $CONTAINER_NAME bundle exec cap $ENVIRONMENT deploy && \
docker exec $CONTAINER_NAME rm -f /home/app/.ssh/id_rsa /home/app/.ssh/id_rsa.pub

echo "✅ Deployment completed and SSH keys cleaned up!"
