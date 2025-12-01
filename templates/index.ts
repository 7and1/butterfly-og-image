import type { TemplateId, TemplateConfig, TemplateProps } from "@/types";

// Re-export types for convenience
export type { TemplateId, TemplateConfig, TemplateProps };
import { GradientTemplate } from "./gradient";
import { MinimalTemplate } from "./minimal";
import { ModernTemplate } from "./modern";
import { BoldTemplate } from "./bold";
import { SplitTemplate } from "./split";
import { GlassTemplate } from "./glass";
import { StartupTemplate } from "./startup";
import { BlogTemplate } from "./blog";
import { HeroTemplate } from "./hero";
import { NoticeTemplate } from "./notice";
import { ImageRightTemplate } from "./image-right";
import { LogosTemplate } from "./logos";
import { PodcastTemplate } from "./podcast";
import { EventTemplate } from "./event";
import { SocialTemplate } from "./social";
import { BannerTemplate } from "./banner";

/**
 * Template registry with all available templates
 */
export const templates: Record<TemplateId, TemplateConfig> = {
  gradient: {
    id: "gradient",
    name: "Gradient",
    description: "Beautiful gradient backgrounds with centered content",
    category: "general",
    component: GradientTemplate,
    defaultProps: {
      backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      textColor: "#ffffff",
      accentColor: "#fbbf24",
    },
  },
  minimal: {
    id: "minimal",
    name: "Minimal",
    description: "Clean and simple design with lots of whitespace",
    category: "general",
    component: MinimalTemplate,
    defaultProps: {
      backgroundColor: "#ffffff",
      textColor: "#171717",
      accentColor: "#3b82f6",
    },
  },
  modern: {
    id: "modern",
    name: "Modern",
    description: "Sleek dark design with neon accent colors",
    category: "startup",
    component: ModernTemplate,
    defaultProps: {
      backgroundColor: "#0f172a",
      textColor: "#f8fafc",
      accentColor: "#38bdf8",
    },
  },
  bold: {
    id: "bold",
    name: "Bold",
    description: "High contrast, attention-grabbing design",
    category: "event",
    component: BoldTemplate,
    defaultProps: {
      backgroundColor: "#dc2626",
      textColor: "#ffffff",
      accentColor: "#fbbf24",
    },
  },
  split: {
    id: "split",
    name: "Split",
    description: "Two-column layout with icon on one side",
    category: "product",
    component: SplitTemplate,
    defaultProps: {
      backgroundColor: "#000000",
      textColor: "#ffffff",
      accentColor: "#22c55e",
    },
  },
  glass: {
    id: "glass",
    name: "Glass",
    description: "Glassmorphism-inspired design with frosted effect",
    category: "startup",
    component: GlassTemplate,
    defaultProps: {
      backgroundColor: "linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%)",
      textColor: "#ffffff",
      accentColor: "#60a5fa",
    },
  },
  startup: {
    id: "startup",
    name: "Startup",
    description: "Clean, professional startup vibe with subtle branding",
    category: "startup",
    component: StartupTemplate,
    defaultProps: {
      backgroundColor: "#000000",
      textColor: "#ffffff",
      accentColor: "#22c55e",
    },
  },
  blog: {
    id: "blog",
    name: "Blog",
    description: "Clean reading-focused design for articles",
    category: "blog",
    component: BlogTemplate,
    defaultProps: {
      backgroundColor: "#fafafa",
      textColor: "#171717",
      accentColor: "#8b5cf6",
    },
  },
  hero: {
    id: "hero",
    name: "Hero",
    description: "Startup landing page style with pill badge",
    category: "startup",
    component: HeroTemplate,
    defaultProps: {
      backgroundColor: "#0f172a",
      textColor: "#f8fafc",
      accentColor: "#fbbf24",
    },
  },
  notice: {
    id: "notice",
    name: "Notice",
    description: "Announcement style with prominent icon",
    category: "general",
    component: NoticeTemplate,
    defaultProps: {
      backgroundColor: "#ffffff",
      textColor: "#171717",
      accentColor: "#dc2626",
    },
  },
  imageRight: {
    id: "imageRight",
    name: "Image Right",
    description: "Split layout with decorative area",
    category: "product",
    component: ImageRightTemplate,
    defaultProps: {
      backgroundColor: "#1e293b",
      textColor: "#f8fafc",
      accentColor: "#38bdf8",
    },
  },
  logos: {
    id: "logos",
    name: "Logos",
    description: "Tech company style with decorative elements",
    category: "product",
    component: LogosTemplate,
    defaultProps: {
      backgroundColor: "#000000",
      textColor: "#ffffff",
      accentColor: "#a855f7",
    },
  },
  podcast: {
    id: "podcast",
    name: "Podcast",
    description: "Audio episode style with waveform",
    category: "social",
    component: PodcastTemplate,
    defaultProps: {
      backgroundColor: "#18181b",
      textColor: "#f4f4f5",
      accentColor: "#f97316",
    },
  },
  event: {
    id: "event",
    name: "Event",
    description: "Conference and event announcement style",
    category: "event",
    component: EventTemplate,
    defaultProps: {
      backgroundColor: "#7c3aed",
      textColor: "#ffffff",
      accentColor: "#fbbf24",
    },
  },
  social: {
    id: "social",
    name: "Social",
    description: "Clean centered design for social sharing",
    category: "social",
    component: SocialTemplate,
    defaultProps: {
      backgroundColor: "#000000",
      textColor: "#ffffff",
      accentColor: "#1d9bf0",
    },
  },
  banner: {
    id: "banner",
    name: "Banner",
    description: "Wide horizontal banner style",
    category: "social",
    component: BannerTemplate,
    defaultProps: {
      backgroundColor: "#15202b",
      textColor: "#ffffff",
      accentColor: "#1d9bf0",
    },
  },
};

/**
 * Get all templates as an array
 */
export const templateList = Object.values(templates);

/**
 * Get templates grouped by category
 */
export const templatesByCategory = templateList.reduce(
  (acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = [];
    }
    acc[template.category].push(template);
    return acc;
  },
  {} as Record<string, TemplateConfig[]>
);

/**
 * Get a specific template by ID
 */
export function getTemplate(id: TemplateId): TemplateConfig {
  return templates[id] || templates.gradient;
}

/**
 * Get the template component by ID
 */
export function getTemplateComponent(
  id: TemplateId
): React.FC<TemplateProps> {
  return templates[id]?.component || templates.gradient.component;
}

/**
 * Get all template IDs
 */
export const templateIds: TemplateId[] = Object.keys(templates) as TemplateId[];

/**
 * Category labels for UI
 */
export const categoryLabels: Record<string, string> = {
  general: "General",
  startup: "Startup",
  blog: "Blog",
  product: "Product",
  event: "Event",
  social: "Social",
};

export default templates;
