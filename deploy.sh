#!/bin/bash

echo "🚀 Starting deployment process..."

# Create logs directory if it doesn't exist
mkdir -p logs

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

# Stop existing PM2 process if running
echo "🛑 Stopping existing PM2 process..."
pm2 stop integrationsnow-web 2>/dev/null || true

# Start the application with PM2
echo "▶️  Starting application with PM2..."
pm2 start ecosystem.config.cjs --env production

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

echo "✅ Deployment completed! Application is running on port 4002"
echo "📊 Check status with: pm2 status"
echo "📋 View logs with: pm2 logs integrationsnow-web" 