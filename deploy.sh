#!/bin/bash

# Deploy script for og-image.org to Cloudflare Pages
# This script automates the deployment process

set -e

echo "🚀 Starting deployment of og-image.org..."

# Load environment variables
if [ -f .env.local ]; then
    echo "📝 Loading environment variables..."
    source .env.local
else
    echo "❌ .env.local file not found. Please create it with your Cloudflare credentials."
    exit 1
fi

# Check required variables
if [ -z "$CLOUDFLARE_API_TOKEN" ] || [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    echo "❌ Missing required environment variables. Please check your .env.local file."
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ ! -d "out" ]; then
    echo "❌ Build failed - out directory not found"
    exit 1
fi

# Check for critical files
echo "🔍 Checking critical files..."
if [ ! -f "out/resvg.wasm" ]; then
    echo "❌ resvg.wasm not found in build output"
    exit 1
fi

if [ ! -d "out/fonts" ]; then
    echo "❌ fonts directory not found in build output"
    exit 1
fi

echo "✅ All critical files found in build output"

# Deploy using Wrangler (if available)
if command -v wrangler &> /dev/null; then
    echo "🌐 Deploying to Cloudflare Pages..."

    # Create project if it doesn't exist
    echo "📁 Creating/Updating Pages project..."
    wrangler pages project create og-image --production-branch main || true

    # Deploy the files
    echo "📤 Uploading files..."
    wrangler pages deploy out --project-name og-image --commit-hash="manual-$(date +%s)"

    echo "✅ Deployment completed!"
    echo "🌐 Check your Cloudflare dashboard for the live URL"

else
    echo "❌ Wrangler CLI not found. Please install it with: npm install -g wrangler"
    echo "📖 Or deploy manually via Cloudflare dashboard:"
    echo "   1. Go to https://dash.cloudflare.com/pages"
    echo "   2. Create a new project"
    echo "   3. Upload the 'out' directory"
    echo "   4. Configure your custom domain if needed"
    exit 1
fi

# Optional: Configure custom domain
if [ ! -z "$DOMAIN" ]; then
    echo "🌍 Configuring custom domain: $DOMAIN"
    wrangler pages domain create "$DOMAIN" --project-name og-image || echo "⚠️  Domain may already be configured or needs manual setup"
fi

echo "🎉 Deployment process completed!"
echo "📊 Next steps:"
echo "   1. Visit Cloudflare dashboard to see your deployment"
echo "   2. Test your live site"
echo "   3. Configure custom domain DNS if needed"
echo "   4. Set up analytics and monitoring"