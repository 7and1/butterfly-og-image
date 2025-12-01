# Deployment Guide - og-image.org

## 🎯 Project Overview

**og-image.org** is a zero-cost, privacy-first, client-side Open Graph image generator. All rendering happens in the browser using Satori/Resvg WASM. No data is ever uploaded to servers.

**Architecture:** Next.js 14 (App Router) + Static Export + Cloudflare Pages

## 🚀 Deployment Options

### Option 1: GitHub + Cloudflare Pages (Recommended)
- **Security:** Uses encrypted secrets, no tokens in code
- **Automation:** Automatic deployments on git push
- **Backup:** GitHub serves as code backup
- **Zero Cost:** Both GitHub and Cloudflare Pages free tiers

### Option 2: Direct Cloudflare Pages
- **Simplicity:** Direct upload without GitHub
- **No Automation:** Manual builds required
- **Backup:** Local backup only

## 🔐 Security Setup

### Step 1: Generate Fresh Tokens

⚠️ **IMPORTANT:** Generate new tokens after reviewing any existing ones for security.

#### GitHub Personal Access Token
1. Visit: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: `og-image-deploy`
4. Scopes: `repo`, `workflow`
5. Generate and copy immediately (shown only once)

#### Cloudflare API Token
1. Visit: https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use "Custom token" template
4. Permissions:
   - **Account:** `Cloudflare Pages:Edit`
   - **Zone:** `Zone:Read` (for custom domain)
5. Zone Resources: `All zones`
6. Generate and copy immediately

### Step 2: Update Environment Variables

Update `.env.local` with your new tokens:

```env
# GitHub Personal Access Token
GITHUB_TOKEN=ghp_YOUR_NEW_TOKEN_HERE

# Cloudflare API Token
CLOUDFLARE_API_TOKEN=YOUR_NEW_CF_TOKEN_HERE
CLOUDFLARE_ACCOUNT_ID=YOUR_ACCOUNT_ID

# Project Configuration
CLOUDFLARE_PROJECT_NAME=og-image
DOMAIN=og-image.org
```

## 📋 Option 1: GitHub + Cloudflare Pages

### Step 1: Initialize Git Repository
```bash
# Already done locally, just add remote
git remote add origin https://github.com/YOUR_USERNAME/og-image.git
git push -u origin main
```

### Step 2: Create GitHub Repository
```bash
# Using GitHub CLI (recommended)
gh repo create og-image \
  --public \
  --description "Zero-cost, privacy-first Open Graph image generator" \
  --clone=false \
  --push=false

# Or create manually at: https://github.com/new
```

### Step 3: Configure GitHub Secrets

Using GitHub CLI (requires GITHUB_TOKEN in .env.local):

```bash
#!/bin/bash
set -e

# Load environment variables
source .env.local

# Add secrets to GitHub repository
gh secret set CLOUDFLARE_API_TOKEN --body "$CLOUDFLARE_API_TOKEN"
gh secret set CLOUDFLARE_ACCOUNT_ID --body "$CLOUDFLARE_ACCOUNT_ID"
echo "✅ GitHub secrets configured"
```

Or manually in GitHub:
1. Go to: https://github.com/YOUR_USERNAME/og-image/settings/secrets
2. Add "Repository secrets":
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

### Step 4: Create GitHub Actions Workflow

The workflow is already configured in `.github/workflows/deploy.yml`

### Step 5: Configure Cloudflare Pages

1. Visit: https://dash.cloudflare.com/pages
2. Click "Create a project"
3. Connect to GitHub
4. Select `og-image` repository
5. Build Settings:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `out`
6. Environment Variables:
   - Add any required variables (none needed for static export)

### Step 6: Deploy!

```bash
# The workflow will trigger automatically on push to main
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

## 📋 Option 2: Direct Cloudflare Pages

### Step 1: Build Project
```bash
npm run build
```

### Step 2: Deploy via Wrangler (Cloudflare CLI)

First install Wrangler:
```bash
npm install -g wrangler
```

Login to Cloudflare:
```bash
wrangler login
```

Deploy:
```bash
# Create Pages project
wrangler pages project create og-image --production-branch main

# Deploy
wrangler pages deploy out --project-name og-image --commit-hash="manual"
```

### Step 3: Configure Custom Domain (Optional)

```bash
# Add custom domain
wrangler pages domain create og-image.org --project-name og-image

# Follow DNS instructions provided
```

## 🧪 Testing Deployment

### Pre-Deployment Checklist
- [ ] `npm run build` completes without errors
- [ ] `/out` directory contains all static files
- [ ] `resvg.wasm` is present in `/out` directory
- [ ] Fonts are loaded correctly in `/out/fonts/`
- [ ] All pages load correctly locally: `npm run start`

### Post-Deployment Tests

#### 1. Homepage Tests
- [ ] Page loads at https://og-image.org
- [ ] Template selector works
- [ ] Real-time preview updates
- [ ] Download functionality works
- [ ] Code export works

#### 2. Template Pages
Test a few templates:
- [ ] `/templates/gradient` - Basic gradient template
- [ ] `/templates/minimal` - Minimal design
- [ ] `/templates/modern` - Modern template
- [ ] `/templates/social` - Social media template

#### 3. Special Functionality
- [ ] Validator tool works: `/validator`
- [ ] Meta tags tool works: `/meta-tags`
- [ ] Site auditor works: `/audit`
- [ ] Documentation pages load: `/docs`

#### 4. Static Assets
- [ ] WASM file loads: Check Network tab for `resvg.wasm`
- [ ] Fonts load correctly
- [ ] Images display properly
- [ ] No 404 errors in console

## 🔍 Debugging

### Common Issues

#### WASM Fails to Load
```bash
# Check if resvg.wasm exists
ls -la public/resvg.wasm out/resvg.wasm

# Check MIME type in Cloudflare
curl -I https://og-image.org/resvg.wasm
# Should return: Content-Type: application/wasm
```

#### Fonts Not Rendering
```bash
# Check font files
ls -la public/fonts/
ls -la out/fonts/

# Test font loading in browser console
fetch('/fonts/Inter-Bold.ttf').then(r => r.blob()).then(console.log)
```

#### Build Errors
```bash
# Clean build
rm -rf .next out
npm run build

# Check TypeScript errors
npx tsc --noEmit
```

#### Deployment Failures
```bash
# Check GitHub Actions logs
gh run list
gh run view <run-id>

# Check Cloudflare Pages logs
wrangler pages deployment list --project-name og-image
```

### Performance Optimization

#### Lighthouse Checklist
- [ ] Performance > 95
- [ ] Accessibility > 95
- [ ] Best Practices > 95
- [ ] SEO > 95

#### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

## 🔒 Security Considerations

### ✅ Implemented Security
- Client-side rendering (no server data exposure)
- No API keys in client code
- Static files only (no server-side processing)
- CSP headers configured
- HTTPS only on Cloudflare

### 🔐 Must Maintain
- Never commit `.env.local` to git
- Use GitHub secrets for deployment tokens
- Regularly rotate API tokens
- Monitor for unauthorized usage

## 📈 Monitoring & Analytics

### Cloudflare Analytics
1. Visit Cloudflare dashboard
2. Go to "Analytics & Logs"
3. Monitor:
   - Page views and unique visitors
   - Geographic distribution
   - Device and browser stats

### Google Search Console
1. Add property: https://og-image.org
2. Submit sitemap: https://og-image.org/sitemap.xml
3. Monitor:
   - Indexing status
   - Search performance
   - Mobile usability

### Error Monitoring
- Set up Cloudflare error pages
- Monitor GitHub Actions failures
- Track JavaScript errors in production

## 🚀 Scaling Considerations

### Current Limitations
- Single-user client-side rendering
- Browser memory constraints
- No caching of generated images

### Future Enhancements
- Edge rendering for faster generation
- Template gallery with user submissions
- API for programmatic image generation
- Advanced image editing features

## 🎉 Success Metrics

### Technical
- [ ] Build time < 30 seconds
- [ ] Page load < 2 seconds
- [ ] Lighthouse score > 90
- [ ] Zero JavaScript errors
- [ ] All templates functional

### Business (Track after launch)
- [ ] Daily active users
- [ ] Images generated per day
- [ ] Most popular templates
- [ ] User satisfaction ratings
- [ ] Social media mentions

## 📞 Support & Resources

### Documentation
- Project repo: https://github.com/YOUR_USERNAME/og-image
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Next.js: https://nextjs.org/docs
- Satori: https://github.com/vercel/satori
- Resvg: https://github.com/RazrFalcon/resvg-js

### Key Files
- `lib/engine.ts` - Core rendering engine
- `store/useStore.ts` - State management
- `templates/index.ts` - Template registry
- `.github/workflows/deploy.yml` - Deployment automation

---

## Ready to Deploy! 🚀

Your og-image.org project is production-ready with:
- ✅ Client-side privacy-first architecture
- ✅ 15+ professional templates
- ✅ Real-time preview and editing
- ✅ Code export functionality
- ✅ Comprehensive documentation
- ✅ Automated deployment pipeline

Follow the steps above and you'll be live in minutes!