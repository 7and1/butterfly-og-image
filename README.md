# og-image.org

Zero-cost, privacy-first Open Graph image generator. All heavy lifting (Satori/Resvg WASM) happens in the browser. No data is ever uploaded to servers.

## 🌐 Live Demo

**Latest Deployment:** https://c69f0fdc.og-image-2fo.pages.dev

## ✨ Features

- **🎨 15+ Professional Templates** - Gradient, Minimal, Modern, Social, Blog, and more
- **⚡ Real-time Preview** - See changes instantly as you type
- **🔒 Privacy-first** - All processing happens client-side, no data uploads
- **📱 Responsive Design** - Works on all devices and screen sizes
- **🛠️ Code Export** - Export templates as React/Vue/Next.js components
- **✅ OG Validator** - Test your images on Facebook, Twitter, LinkedIn
- **🔍 Site Auditor** - Crawl sitemaps and validate multiple pages
- **📊 Meta Tags Tool** - Generate complete meta tag sets
- **🎯 Zero Dependencies** - No server-side processing required

## 🚀 Quick Start

1. **Visit**: https://c69f0fdc.og-image-2fo.pages.dev
2. **Choose Template**: Pick from 15+ professional designs
3. **Customize**: Edit text, colors, and layout in real-time
4. **Preview**: See your OG image update instantly
5. **Export**: Download PNG or export code for your project

## 🛠️ Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Rendering**: Satori + Resvg WASM (client-side)
- **State**: Zustand
- **Deployment**: Cloudflare Pages (static export)
- **Fonts**: Inter (Google Fonts)
- **No API Keys Required**: Everything runs in the browser

## 📁 Project Structure

```
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Homepage
│   ├── templates/      # Template gallery and editors
│   ├── validator/      # OG validation tool
│   └── docs/           # Documentation
├── components/         # React components
│   ├── editor/         # Template editing UI
│   ├── preview/        # Real-time preview
│   └── export/         # Code export functionality
├── lib/               # Core utilities
│   ├── engine.ts       # WASM rendering engine
│   └── code-gen.ts     # Code generation
├── store/             # Zustand state management
├── templates/         # OG image templates
└── public/            # Static assets (WASM, fonts)
```

## 🎨 Templates

All templates are:
- **1200×630px** (OG image standard)
- **Flexbox-based** (Satori compatible)
- **Client-side renderable** (no server required)
- **Fully customizable** (text, colors, layout)

### Available Templates
- `gradient` - Modern gradient backgrounds
- `minimal` - Clean and simple design
- `modern` - Contemporary style
- `social` - Social media optimized
- `blog` - Blog post headers
- `podcast` - Audio content
- `event` - Event announcements
- `startup` - Tech company style
- `hero` - Landing page headers
- `split` - Two-column layouts
- `banner` - Wide format banners
- `logos` - Brand showcases
- `glass` - Glassmorphism effects
- `bold` - High-impact typography
- `notice` - Announcement style
- `image-right` - Image + text layout

## 🔧 Development

### Prerequisites
- Node.js 20+ (required for Next.js 16)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/7and1/butterfly-og-image.git
cd butterfly-og-image

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server (local test)
npm run start
```

### Environment Variables
Create `.env.local` (already git-ignored):
```env
# Cloudflare deployment (optional for manual deploy)
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id
```

## 🚀 Deployment

### Automated (Recommended)
The project uses GitHub Actions for automatic deployment to Cloudflare Pages:

1. **Push to main**: `git push origin main`
2. **Automatic Build**: GitHub Actions builds and deploys
3. **Live URL**: Get deployment URL from Actions or Cloudflare

### Manual Deployment
```bash
# Build project
npm run build

# Deploy to Cloudflare Pages
./deploy.sh
```

## 🔒 Security

- ✅ **Client-side rendering** - No server data exposure
- ✅ **No API keys** in client code
- ✅ **Static files only** - No server processing
- ✅ **CSP headers** - Content Security Policy configured
- ✅ **HTTPS only** - Automatic on Cloudflare

## 🧪 Testing

### Pre-deployment
```bash
# Run build
npm run build

# Check critical files
ls -la out/resvg.wasm out/fonts/

# Test locally
npm run start
```

### Post-deployment
- [ ] Homepage loads correctly
- [ ] Template editor works
- [ ] Real-time preview updates
- [ ] WASM file loads (`resvg.wasm`)
- [ ] Fonts render correctly
- [ ] Download functionality works
- [ ] Code export works
- [ ] Validator tool functions
- [ ] All template pages load

## 📊 Performance

### Core Web Vitals Targets
- **LCP**: < 2.5s ✓
- **FID**: < 100ms ✓
- **CLS**: < 0.1 ✓

### Optimization
- **Static Export**: All pages pre-built
- **WASM Caching**: Resvg loaded once
- **Font Optimization**: Inter-Bold only
- **Image Compression**: PNG output optimized
- **CDN Delivery**: Cloudflare edge network

## 📈 Architecture

### Rendering Pipeline
```
React Element → Satori (SVG) → Resvg WASM (PNG) → Blob URL → Download
```

### State Management
Single Zustand store manages:
- Template selection and properties
- User customization (text, colors)
- UI state (preview, errors)
- Browser persistence (localStorage)

### WASM Engine
- **Singleton Pattern**: Initialize once, reuse
- **Font Loading**: ArrayBuffer for performance
- **Blob Management**: Automatic cleanup
- **Error Handling**: Graceful degradation

## 🔧 Customization

### Adding New Templates
1. Create in `templates/` directory
2. Export as default: `export default function MyTemplate()`
3. Use inline styles only (Satori limitation)
4. Return single React element
5. Add to `templates/index.ts` registry

### Template Requirements
```tsx
export function MyTemplate(props: TemplateProps): React.ReactElement {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      // ... inline styles only
    }}>
      {/* Template content */}
    </div>
  );
}
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-template`
3. **Commit** changes: `git commit -m 'Add amazing template'`
4. **Push** to branch: `git push origin feature/amazing-template`
5. **Open** Pull Request

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Attribution

- **[Satori](https://github.com/vercel/satori)** - SVG generation
- **[Resvg](https://github.com/RazrFalcon/resvg-js)** - WASM rendering
- **[Next.js](https://nextjs.org/)** - React framework
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Hosting

## 📞 Support

- **Issues**: https://github.com/7and1/butterfly-og-image/issues
- **Documentation**: https://github.com/7and1/butterfly-og-image/tree/main/docs
- **Live Site**: https://c69f0fdc.og-image-2fo.pages.dev

---

## 🎉 Ready to Use

Your og-image.org is production-ready with:
- ✅ 15+ professional templates
- ✅ Real-time editing and preview
- ✅ Code export functionality
- ✅ Privacy-first architecture
- ✅ Zero server costs
- ✅ Automatic deployment
- ✅ Global CDN delivery

**Start creating beautiful OG images in seconds! 🚀**
