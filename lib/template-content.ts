import type { TemplateId } from "@/types";

export interface TemplateContentData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heading: string;
  subheading: string;
  useCases: string[];
  bestFor: string[];
  tips: string[];
  exampleTitles: string[];
  exampleDescriptions: string[];
}

export const templateContent: Record<TemplateId, TemplateContentData> = {
  gradient: {
    metaTitle: "Gradient OG Image Template - Beautiful Color Backgrounds | og-image.org",
    metaDescription: "Create stunning Open Graph images with beautiful gradient backgrounds. Perfect for startup landing pages, product announcements, and social media. Free, instant preview, no signup required.",
    keywords: ["gradient og image", "colorful social preview", "gradient background", "open graph generator"],
    heading: "Gradient Template",
    subheading: "Beautiful gradient backgrounds that make your content pop on social media",
    useCases: [
      "Startup landing pages",
      "Product launch announcements",
      "Blog post previews",
      "Newsletter promotions",
    ],
    bestFor: ["Startups", "SaaS products", "Creative agencies", "Personal brands"],
    tips: [
      "Use complementary colors for the gradient",
      "Keep text short and impactful",
      "Choose an emoji that represents your content",
      "Test how it looks on different platforms",
    ],
    exampleTitles: ["Build Faster with AI", "Launch Your Product Today", "The Future of Web Development"],
    exampleDescriptions: ["Transform your workflow", "Join 10,000+ users", "Next-gen technology"],
  },

  minimal: {
    metaTitle: "Minimal OG Image Template - Clean & Simple Design | og-image.org",
    metaDescription: "Create clean, professional Open Graph images with minimal design. Perfect for corporate brands, documentation, and professional content. Free to use.",
    keywords: ["minimal og image", "clean design", "professional social preview", "simple og generator"],
    heading: "Minimal Template",
    subheading: "Clean and simple design with lots of whitespace for professional content",
    useCases: [
      "Corporate websites",
      "Documentation pages",
      "Professional portfolios",
      "Business announcements",
    ],
    bestFor: ["Enterprises", "Professional services", "Documentation", "Corporate blogs"],
    tips: [
      "Less is more - keep text minimal",
      "Use high-contrast colors for readability",
      "Perfect for longer titles",
      "Works great with company logos as icons",
    ],
    exampleTitles: ["API Documentation v2.0", "Annual Report 2024", "Company Guidelines"],
    exampleDescriptions: ["Complete reference guide", "Financial highlights", "Best practices"],
  },

  modern: {
    metaTitle: "Modern OG Image Template - Sleek Dark Design | og-image.org",
    metaDescription: "Create sleek, modern Open Graph images with dark backgrounds and neon accents. Perfect for tech products and SaaS applications. Free online generator.",
    keywords: ["modern og image", "dark mode og", "tech social preview", "neon accent design"],
    heading: "Modern Template",
    subheading: "Sleek dark design with neon accent colors for tech-forward brands",
    useCases: [
      "Tech product launches",
      "Developer tools",
      "SaaS applications",
      "Gaming content",
    ],
    bestFor: ["Tech startups", "Developer tools", "Gaming companies", "Crypto projects"],
    tips: [
      "Neon colors pop on dark backgrounds",
      "Great for night-mode friendly content",
      "Use tech-related emojis for best effect",
      "Perfect for developer-focused content",
    ],
    exampleTitles: ["Ship Faster with CI/CD", "Next-Gen Database", "Secure by Default"],
    exampleDescriptions: ["Built for developers", "10x faster queries", "Enterprise security"],
  },

  bold: {
    metaTitle: "Bold OG Image Template - High Impact Design | og-image.org",
    metaDescription: "Create attention-grabbing Open Graph images with bold colors and high contrast. Perfect for events, sales, and urgent announcements. Free generator.",
    keywords: ["bold og image", "high contrast design", "attention grabbing", "urgent announcement"],
    heading: "Bold Template",
    subheading: "High contrast, attention-grabbing design that demands clicks",
    useCases: [
      "Flash sales",
      "Event announcements",
      "Breaking news",
      "Limited time offers",
    ],
    bestFor: ["E-commerce", "Event organizers", "News sites", "Marketing campaigns"],
    tips: [
      "Use urgent language in titles",
      "Red backgrounds create urgency",
      "Keep descriptions action-oriented",
      "Perfect for time-sensitive content",
    ],
    exampleTitles: ["50% Off Everything", "Event Starts Tomorrow", "Breaking: Major Update"],
    exampleDescriptions: ["Limited time only", "Don't miss out", "Read now"],
  },

  split: {
    metaTitle: "Split Layout OG Image Template - Two Column Design | og-image.org",
    metaDescription: "Create professional split-layout Open Graph images with icon on one side and text on the other. Perfect for product features and comparisons. Free.",
    keywords: ["split layout og", "two column design", "icon layout", "product showcase"],
    heading: "Split Template",
    subheading: "Two-column layout with icon on one side for balanced visual impact",
    useCases: [
      "Product feature highlights",
      "Before/after comparisons",
      "Service offerings",
      "Category pages",
    ],
    bestFor: ["Product pages", "Feature showcases", "Service businesses", "Comparisons"],
    tips: [
      "Choose icons that represent your main feature",
      "Use the split to create visual balance",
      "Great for technical product descriptions",
      "Perfect for showcasing one key feature",
    ],
    exampleTitles: ["Lightning Fast Performance", "Secure Data Storage", "Smart Analytics"],
    exampleDescriptions: ["Built for speed", "Enterprise-grade security", "Real-time insights"],
  },

  glass: {
    metaTitle: "Glass OG Image Template - Glassmorphism Design | og-image.org",
    metaDescription: "Create beautiful glassmorphism-style Open Graph images with frosted glass effects. Modern, trendy design for contemporary brands. Free generator.",
    keywords: ["glassmorphism og", "frosted glass design", "modern ui style", "glass effect"],
    heading: "Glass Template",
    subheading: "Glassmorphism-inspired design with beautiful frosted effects",
    useCases: [
      "Modern app launches",
      "Design portfolios",
      "Creative agencies",
      "Lifestyle brands",
    ],
    bestFor: ["Design agencies", "Modern apps", "Creative portfolios", "Fashion brands"],
    tips: [
      "Works best with gradient backgrounds",
      "Light text on blurred backgrounds",
      "Perfect for trendy, modern content",
      "Great for design-focused brands",
    ],
    exampleTitles: ["Design System 2.0", "Creative Portfolio", "Modern UI Kit"],
    exampleDescriptions: ["Beautifully crafted", "Award-winning designs", "Premium components"],
  },

  startup: {
    metaTitle: "Startup OG Image Template - Clean Professional Style | og-image.org",
    metaDescription: "Create clean, professional Open Graph images perfect for startups. Subtle branding with a tech-forward aesthetic. Free to use, instant preview.",
    keywords: ["startup og image", "professional design", "tech startup", "clean branding"],
    heading: "Startup Template",
    subheading: "Clean, professional startup vibe with subtle branding elements",
    useCases: [
      "Company announcements",
      "Product launches",
      "Hiring posts",
      "Investor updates",
    ],
    bestFor: ["Startups", "Tech companies", "Venture capital", "Product teams"],
    tips: [
      "Keep branding subtle but consistent",
      "Use your brand colors",
      "Great for professional announcements",
      "Perfect for LinkedIn sharing",
    ],
    exampleTitles: ["We're Hiring Engineers", "Series A Announcement", "Product Hunt Launch"],
    exampleDescriptions: ["Join our team", "$10M raised", "We're live!"],
  },

  blog: {
    metaTitle: "Blog OG Image Template - Article Preview Design | og-image.org",
    metaDescription: "Create beautiful blog post preview images for Open Graph. Reading-focused design with author sections. Perfect for content creators and publishers.",
    keywords: ["blog og image", "article preview", "content creator", "reading design"],
    heading: "Blog Template",
    subheading: "Clean reading-focused design optimized for articles and blog posts",
    useCases: [
      "Blog posts",
      "News articles",
      "Medium stories",
      "Newsletter issues",
    ],
    bestFor: ["Bloggers", "News sites", "Content creators", "Publishers"],
    tips: [
      "Use article titles that spark curiosity",
      "Keep descriptions informative",
      "Category badges help with organization",
      "Great for content-heavy sites",
    ],
    exampleTitles: ["10 Tips for Better Code", "The Future of AI", "How We Scaled to 1M Users"],
    exampleDescriptions: ["A developer's guide", "Industry insights", "Behind the scenes"],
  },

  hero: {
    metaTitle: "Hero OG Image Template - Landing Page Style | og-image.org",
    metaDescription: "Create stunning hero-style Open Graph images with pill badges and gradient effects. Perfect for product launches and feature announcements. Free.",
    keywords: ["hero og image", "landing page style", "pill badge", "product launch"],
    heading: "Hero Template",
    subheading: "Startup landing page style with tag badges for maximum impact",
    useCases: [
      "Product launches",
      "Feature announcements",
      "Landing pages",
      "Campaign promotions",
    ],
    bestFor: ["Product launches", "Marketing campaigns", "SaaS products", "App stores"],
    tips: [
      "Use description as a catchy tagline",
      "Tag badges create visual hierarchy",
      "Perfect for launch announcements",
      "Works great with action words",
    ],
    exampleTitles: ["Introducing Our New Feature", "The Fastest Way to Build", "Your All-in-One Solution"],
    exampleDescriptions: ["Now Available", "New in 2024", "Try it Free"],
  },

  notice: {
    metaTitle: "Notice OG Image Template - Announcement Style | og-image.org",
    metaDescription: "Create attention-grabbing announcement Open Graph images. Large icon layout perfect for alerts, updates, and important notices. Free generator.",
    keywords: ["notice og image", "announcement style", "alert design", "update notice"],
    heading: "Notice Template",
    subheading: "Announcement-style layout with prominent icon for important updates",
    useCases: [
      "System updates",
      "Important announcements",
      "Policy changes",
      "Service notices",
    ],
    bestFor: ["System admins", "Service providers", "Government", "Organizations"],
    tips: [
      "Use clear, direct language",
      "Choose icons that match the message type",
      "Great for official communications",
      "Red accent for urgent notices",
    ],
    exampleTitles: ["Scheduled Maintenance", "Important Update", "New Policy Effective"],
    exampleDescriptions: ["Planned downtime this weekend", "Please read carefully", "Starting January 1st"],
  },

  imageRight: {
    metaTitle: "Image Right OG Template - Split Layout Design | og-image.org",
    metaDescription: "Create professional split-layout Open Graph images with content on left and decorative elements on right. Perfect for product showcases. Free.",
    keywords: ["split layout og", "image right design", "product showcase", "feature highlight"],
    heading: "Image Right Template",
    subheading: "Split layout with content left and decorative area right",
    useCases: [
      "Product showcases",
      "Feature highlights",
      "Service pages",
      "Portfolio items",
    ],
    bestFor: ["E-commerce", "Product teams", "Service businesses", "Portfolios"],
    tips: [
      "Use tag badges for categories",
      "The decorative area adds visual interest",
      "Great for product-focused content",
      "Perfect for showcasing features",
    ],
    exampleTitles: ["Premium Dashboard", "Advanced Analytics", "Smart Automation"],
    exampleDescriptions: ["Enterprise Edition", "Real-time Data", "AI Powered"],
  },

  logos: {
    metaTitle: "Logos OG Image Template - Tech Company Style | og-image.org",
    metaDescription: "Create tech company style Open Graph images with grid patterns and decorative logo elements. Perfect for integrations and partnerships. Free.",
    keywords: ["tech og image", "logo showcase", "integration design", "partnership announcement"],
    heading: "Logos Template",
    subheading: "Tech company style with decorative elements for professional look",
    useCases: [
      "Integration announcements",
      "Partnership reveals",
      "Tech stack showcases",
      "Platform launches",
    ],
    bestFor: ["Tech companies", "API providers", "Integration platforms", "Developer tools"],
    tips: [
      "Great for showing integrations",
      "Use for platform announcements",
      "Grid pattern adds tech feel",
      "Perfect for developer content",
    ],
    exampleTitles: ["New Integration Available", "Connect Your Tools", "Platform Update"],
    exampleDescriptions: ["Works with 100+ apps", "Seamless sync", "More power"],
  },

  podcast: {
    metaTitle: "Podcast OG Image Template - Audio Episode Style | og-image.org",
    metaDescription: "Create podcast episode style Open Graph images with waveform decorations and play button design. Perfect for podcasters and audio content. Free.",
    keywords: ["podcast og image", "audio design", "episode preview", "waveform style"],
    heading: "Podcast Template",
    subheading: "Audio episode style with waveform decoration for podcasts",
    useCases: [
      "Podcast episodes",
      "Audio content",
      "Music releases",
      "Interview promotions",
    ],
    bestFor: ["Podcasters", "Musicians", "Audio creators", "Interview shows"],
    tips: [
      "Use episode numbers in description",
      "Great for audio content promotion",
      "Waveform adds audio feel",
      "Perfect for podcast sharing",
    ],
    exampleTitles: ["Building in Public", "Tech Talk Live", "The Creative Hour"],
    exampleDescriptions: ["Episode 42", "Weekly Show", "New Episode Out Now"],
  },

  event: {
    metaTitle: "Event OG Image Template - Conference Style | og-image.org",
    metaDescription: "Create eye-catching event and conference Open Graph images with ticket-style decorations. Perfect for meetups, conferences, and webinars. Free.",
    keywords: ["event og image", "conference design", "ticket style", "meetup announcement"],
    heading: "Event Template",
    subheading: "Conference and event style with ticket corner decorations",
    useCases: [
      "Conferences",
      "Meetups",
      "Webinars",
      "Virtual events",
    ],
    bestFor: ["Event organizers", "Conference hosts", "Community managers", "Webinar creators"],
    tips: [
      "Include date in description",
      "Use location or online info",
      "Ticket corners add event feel",
      "Great for RSVP promotions",
    ],
    exampleTitles: ["DevConf 2024", "Community Meetup", "Product Workshop"],
    exampleDescriptions: ["March 15-17, 2024", "San Francisco, CA", "Free Registration"],
  },

  social: {
    metaTitle: "Social OG Image Template - Clean Centered Design | og-image.org",
    metaDescription: "Create clean, centered Open Graph images optimized for social media sharing. Large icon with minimal text. Perfect for profiles and handles. Free.",
    keywords: ["social og image", "centered design", "profile image", "handle style"],
    heading: "Social Template",
    subheading: "Clean centered design optimized for social media platforms",
    useCases: [
      "Social profiles",
      "Handle announcements",
      "Brand awareness",
      "Personal branding",
    ],
    bestFor: ["Influencers", "Personal brands", "Social media managers", "Creators"],
    tips: [
      "Perfect for profile-style content",
      "Large icon creates strong impression",
      "Minimal text for quick recognition",
      "Great for handle/username promotion",
    ],
    exampleTitles: ["Follow for Updates", "Join the Community", "Let's Connect"],
    exampleDescriptions: ["@yourhandle", "100K Followers", "Daily Content"],
  },

  banner: {
    metaTitle: "Banner OG Image Template - Wide Horizontal Style | og-image.org",
    metaDescription: "Create wide horizontal banner style Open Graph images. Perfect for headers, cover images, and wide format displays. Professional band design. Free.",
    keywords: ["banner og image", "wide design", "header style", "horizontal layout"],
    heading: "Banner Template",
    subheading: "Wide horizontal banner style perfect for headers and covers",
    useCases: [
      "Twitter headers",
      "LinkedIn banners",
      "YouTube thumbnails",
      "Website headers",
    ],
    bestFor: ["Social media headers", "Channel branding", "Website banners", "Email headers"],
    tips: [
      "Horizontal layout works for headers",
      "Great for branding consistency",
      "Icon on left creates visual anchor",
      "Perfect for channel/page covers",
    ],
    exampleTitles: ["Welcome to Our Channel", "Official Page", "Brand Headquarters"],
    exampleDescriptions: ["Subscribe for updates", "Your trusted source", "Since 2020"],
  },
};

export function getTemplateContent(templateId: TemplateId): TemplateContentData {
  return templateContent[templateId];
}

export default templateContent;
