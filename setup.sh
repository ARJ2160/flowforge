#!/bin/bash
# FlowForge Monorepo Setup Script

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "Bun is not installed. Please install Bun first:"
    echo "curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

# Check bun version
BUN_VERSION=$(bun --version)
echo "Found Bun version $BUN_VERSION"

# Install dependencies
echo "Installing dependencies for all workspaces..."
bun install

# Build shared packages first
echo "Building shared packages..."
bun run build --filter=@flowforge/shared-utils

# Setup environment variables for the backend
if [ ! -f "apps/backend/.env" ]; then
    echo "Creating .env file for backend..."
    cp apps/backend/.env.example apps/backend/.env
fi

# Build all projects
echo "Building all projects..."
bun run build

echo "Setup complete! You can now run the project with:"
echo "bun dev       # Run all workspaces"
echo "bun dev --filter=@flowforge/frontend  # Run only frontend"
echo "bun dev --filter=@flowforge/backend   # Run only backend"
