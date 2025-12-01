import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";
import type {
  TemplateId,
  FontFamily,
  FontSize,
  Layout,
  ExportTab,
} from "@/types";

/**
 * Extended content fields for template-specific inputs
 */
interface ExtendedContentFields {
  // Event template
  date?: string;
  location?: string;

  // Podcast template
  episodeNumber?: string;
  duration?: string;
  showName?: string;

  // Blog template
  author?: string;
  readTime?: string;
  category?: string;

  // ImageRight template
  imageUrl?: string;
  tag?: string;

  // Social template
  handle?: string;
  platform?: string;

  // Logos template
  tagline?: string;
}

/**
 * Main application state interface
 */
interface OGState extends ExtendedContentFields {
  // === Content ===
  title: string;
  description: string;
  icon: string;

  // === Styling ===
  template: TemplateId;
  backgroundColor: string;
  textColor: string;
  accentColor: string;

  // === Advanced Options ===
  fontFamily: FontFamily;
  fontSize: FontSize;
  layout: Layout;

  // === UI State ===
  isGenerating: boolean;
  previewUrl: string | null;
  error: string | null;
  activeExportTab: ExportTab;
  isAdvancedOpen: boolean;

  // === Actions ===
  setContent: (
    content: Partial<Pick<OGState, "title" | "description" | "icon"> & ExtendedContentFields>
  ) => void;
  setStyling: (
    styling: Partial<
      Pick<OGState, "template" | "backgroundColor" | "textColor" | "accentColor">
    >
  ) => void;
  setAdvanced: (
    advanced: Partial<Pick<OGState, "fontFamily" | "fontSize" | "layout">>
  ) => void;
  setUI: (
    ui: Partial<
      Pick<
        OGState,
        "isGenerating" | "previewUrl" | "error" | "activeExportTab" | "isAdvancedOpen"
      >
    >
  ) => void;
  reset: () => void;
  loadTemplate: (templateId: TemplateId) => void;
}

/**
 * Default state values
 */
const defaultState = {
  // Content
  title: "Build faster with Next.js",
  description: "The React Framework for Production",
  icon: "⚡",

  // Styling
  template: "gradient" as TemplateId,
  backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  textColor: "#ffffff",
  accentColor: "#3b82f6",

  // Advanced
  fontFamily: "inter" as FontFamily,
  fontSize: "medium" as FontSize,
  layout: "center" as Layout,

  // UI State
  isGenerating: false,
  previewUrl: null,
  error: null,
  activeExportTab: "nextjs" as ExportTab,
  isAdvancedOpen: false,
};

/**
 * Template presets for quick styling
 */
const templatePresets: Record<TemplateId, Partial<OGState>> = {
  gradient: {
    backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textColor: "#ffffff",
    accentColor: "#fbbf24",
  },
  minimal: {
    backgroundColor: "#ffffff",
    textColor: "#171717",
    accentColor: "#3b82f6",
  },
  modern: {
    backgroundColor: "#0f172a",
    textColor: "#f8fafc",
    accentColor: "#38bdf8",
  },
  bold: {
    backgroundColor: "#dc2626",
    textColor: "#ffffff",
    accentColor: "#fbbf24",
  },
  split: {
    backgroundColor: "#000000",
    textColor: "#ffffff",
    accentColor: "#22c55e",
    layout: "split" as Layout,
  },
  glass: {
    backgroundColor: "linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%)",
    textColor: "#ffffff",
    accentColor: "#60a5fa",
  },
  startup: {
    backgroundColor: "#000000",
    textColor: "#ffffff",
    accentColor: "#22c55e",
  },
  blog: {
    backgroundColor: "#fafafa",
    textColor: "#171717",
    accentColor: "#8b5cf6",
  },
  hero: {
    backgroundColor: "#0f172a",
    textColor: "#f8fafc",
    accentColor: "#fbbf24",
  },
  notice: {
    backgroundColor: "#ffffff",
    textColor: "#171717",
    accentColor: "#dc2626",
  },
  imageRight: {
    backgroundColor: "#1e293b",
    textColor: "#f8fafc",
    accentColor: "#38bdf8",
  },
  logos: {
    backgroundColor: "#000000",
    textColor: "#ffffff",
    accentColor: "#a855f7",
  },
  podcast: {
    backgroundColor: "#18181b",
    textColor: "#f4f4f5",
    accentColor: "#f97316",
  },
  event: {
    backgroundColor: "#7c3aed",
    textColor: "#ffffff",
    accentColor: "#fbbf24",
  },
  social: {
    backgroundColor: "#000000",
    textColor: "#ffffff",
    accentColor: "#1d9bf0",
  },
  banner: {
    backgroundColor: "#15202b",
    textColor: "#ffffff",
    accentColor: "#1d9bf0",
  },
};

/**
 * Main Zustand store with persistence
 */
export const useStore = create<OGState>()(
  devtools(
    persist(
      (set) => ({
        ...defaultState,

        setContent: (content) =>
          set((state) => ({ ...state, ...content }), false, "setContent"),

        setStyling: (styling) =>
          set((state) => ({ ...state, ...styling }), false, "setStyling"),

        setAdvanced: (advanced) =>
          set((state) => ({ ...state, ...advanced }), false, "setAdvanced"),

        setUI: (ui) => set((state) => ({ ...state, ...ui }), false, "setUI"),

        reset: () => set(defaultState, false, "reset"),

        loadTemplate: (templateId) =>
          set(
            (state) => ({
              ...state,
              template: templateId,
              ...templatePresets[templateId],
            }),
            false,
            "loadTemplate"
          ),
      }),
      {
        name: "og-generator-storage",
        // Only persist user content and styling, not UI state
        partialize: (state) => ({
          title: state.title,
          description: state.description,
          icon: state.icon,
          template: state.template,
          backgroundColor: state.backgroundColor,
          textColor: state.textColor,
          accentColor: state.accentColor,
          fontFamily: state.fontFamily,
          fontSize: state.fontSize,
          layout: state.layout,
          // Extended fields
          date: state.date,
          location: state.location,
          episodeNumber: state.episodeNumber,
          duration: state.duration,
          showName: state.showName,
          author: state.author,
          readTime: state.readTime,
          category: state.category,
          imageUrl: state.imageUrl,
          tag: state.tag,
          handle: state.handle,
          platform: state.platform,
          tagline: state.tagline,
        }),
      }
    ),
    { name: "og-store" }
  )
);

/**
 * Selector hooks for optimized re-renders
 * Using useShallow to prevent infinite loops in SSR/hydration
 */

// Content selector (includes extended fields)
export const useContent = () =>
  useStore(
    useShallow((state) => ({
      title: state.title,
      description: state.description,
      icon: state.icon,
      // Extended fields
      date: state.date,
      location: state.location,
      episodeNumber: state.episodeNumber,
      duration: state.duration,
      showName: state.showName,
      author: state.author,
      readTime: state.readTime,
      category: state.category,
      imageUrl: state.imageUrl,
      tag: state.tag,
      handle: state.handle,
      platform: state.platform,
      tagline: state.tagline,
    }))
  );

// Styling selector
export const useStyling = () =>
  useStore(
    useShallow((state) => ({
      template: state.template,
      backgroundColor: state.backgroundColor,
      textColor: state.textColor,
      accentColor: state.accentColor,
    }))
  );

// Advanced options selector
export const useAdvanced = () =>
  useStore(
    useShallow((state) => ({
      fontFamily: state.fontFamily,
      fontSize: state.fontSize,
      layout: state.layout,
    }))
  );

// UI state selector
export const useUIState = () =>
  useStore(
    useShallow((state) => ({
      isGenerating: state.isGenerating,
      previewUrl: state.previewUrl,
      error: state.error,
      activeExportTab: state.activeExportTab,
      isAdvancedOpen: state.isAdvancedOpen,
    }))
  );

// Actions selector
export const useActions = () =>
  useStore(
    useShallow((state) => ({
      setContent: state.setContent,
      setStyling: state.setStyling,
      setAdvanced: state.setAdvanced,
      setUI: state.setUI,
      reset: state.reset,
      loadTemplate: state.loadTemplate,
    }))
  );
