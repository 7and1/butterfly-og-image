"use client";

import { Input } from "@/components/ui";
import type { TemplateId } from "@/types";

interface TemplateInputsProps {
  template: TemplateId;
  content: {
    date?: string;
    location?: string;
    episodeNumber?: string;
    duration?: string;
    showName?: string;
    author?: string;
    readTime?: string;
    category?: string;
    imageUrl?: string;
    tag?: string;
    handle?: string;
    platform?: string;
    tagline?: string;
  };
  setContent: (content: Partial<TemplateInputsProps["content"]>) => void;
}

/**
 * Event Template Inputs
 * Fields: date, location
 */
function EventInputs({
  content,
  setContent,
}: Pick<TemplateInputsProps, "content" | "setContent">) {
  return (
    <div className="space-y-4">
      <Input
        label="Event Date"
        placeholder="March 15, 2024"
        value={content.date || ""}
        onChange={(e) => setContent({ date: e.target.value })}
        hint="e.g., March 15, 2024 or 2024-03-15"
      />
      <Input
        label="Location"
        placeholder="San Francisco, CA"
        value={content.location || ""}
        onChange={(e) => setContent({ location: e.target.value })}
        hint="Event venue or city"
      />
    </div>
  );
}

/**
 * Podcast Template Inputs
 * Fields: episodeNumber, duration, showName
 */
function PodcastInputs({
  content,
  setContent,
}: Pick<TemplateInputsProps, "content" | "setContent">) {
  return (
    <div className="space-y-4">
      <Input
        label="Episode Number"
        placeholder="Episode 42"
        value={content.episodeNumber || ""}
        onChange={(e) => setContent({ episodeNumber: e.target.value })}
        hint="e.g., Episode 42 or Ep. 42"
      />
      <Input
        label="Duration"
        placeholder="32:15"
        value={content.duration || ""}
        onChange={(e) => setContent({ duration: e.target.value })}
        hint="Episode length in minutes"
      />
      <Input
        label="Show Name"
        placeholder="The Tech Podcast"
        value={content.showName || ""}
        onChange={(e) => setContent({ showName: e.target.value })}
        hint="Your podcast name"
      />
    </div>
  );
}

/**
 * Blog Template Inputs
 * Fields: author, readTime, category
 */
function BlogInputs({
  content,
  setContent,
}: Pick<TemplateInputsProps, "content" | "setContent">) {
  return (
    <div className="space-y-4">
      <Input
        label="Author"
        placeholder="John Doe"
        value={content.author || ""}
        onChange={(e) => setContent({ author: e.target.value })}
        hint="Author name"
      />
      <Input
        label="Read Time"
        placeholder="5 min read"
        value={content.readTime || ""}
        onChange={(e) => setContent({ readTime: e.target.value })}
        hint="Estimated reading time"
      />
      <Input
        label="Category"
        placeholder="Technology"
        value={content.category || ""}
        onChange={(e) => setContent({ category: e.target.value })}
        hint="Article category or topic"
      />
    </div>
  );
}

/**
 * ImageRight Template Inputs
 * Fields: imageUrl, tag
 */
function ImageRightInputs({
  content,
  setContent,
}: Pick<TemplateInputsProps, "content" | "setContent">) {
  return (
    <div className="space-y-4">
      <Input
        label="Image URL"
        placeholder="https://example.com/image.png"
        value={content.imageUrl || ""}
        onChange={(e) => setContent({ imageUrl: e.target.value })}
        hint="URL to a product or feature image"
      />
      <Input
        label="Tag"
        placeholder="New Feature"
        value={content.tag || ""}
        onChange={(e) => setContent({ tag: e.target.value })}
        hint="Category or feature badge"
      />
    </div>
  );
}

/**
 * Social Template Inputs
 * Fields: handle, platform
 */
function SocialInputs({
  content,
  setContent,
}: Pick<TemplateInputsProps, "content" | "setContent">) {
  return (
    <div className="space-y-4">
      <Input
        label="Handle"
        placeholder="@username"
        value={content.handle || ""}
        onChange={(e) => setContent({ handle: e.target.value })}
        hint="Your social media handle"
      />
      <Input
        label="Platform"
        placeholder="Twitter"
        value={content.platform || ""}
        onChange={(e) => setContent({ platform: e.target.value })}
        hint="Social platform name"
      />
    </div>
  );
}

/**
 * Logos Template Inputs
 * Fields: tagline
 */
function LogosInputs({
  content,
  setContent,
}: Pick<TemplateInputsProps, "content" | "setContent">) {
  return (
    <div className="space-y-4">
      <Input
        label="Tagline"
        placeholder="Works with your favorite tools"
        value={content.tagline || ""}
        onChange={(e) => setContent({ tagline: e.target.value })}
        hint="A catchy tagline for your integration"
      />
    </div>
  );
}

/**
 * Hero Template Inputs
 * Fields: tag (for the pill badge)
 */
function HeroInputs({
  content,
  setContent,
}: Pick<TemplateInputsProps, "content" | "setContent">) {
  return (
    <div className="space-y-4">
      <Input
        label="Badge Text"
        placeholder="New Feature"
        value={content.tag || ""}
        onChange={(e) => setContent({ tag: e.target.value })}
        hint="Text shown in the badge/pill"
      />
    </div>
  );
}

/**
 * Notice Template Inputs
 * Fields: tag (for notice type)
 */
function NoticeInputs({
  content,
  setContent,
}: Pick<TemplateInputsProps, "content" | "setContent">) {
  return (
    <div className="space-y-4">
      <Input
        label="Notice Type"
        placeholder="Important Update"
        value={content.tag || ""}
        onChange={(e) => setContent({ tag: e.target.value })}
        hint="e.g., Maintenance, Update, Alert"
      />
    </div>
  );
}

/**
 * Templates that have specific inputs
 */
const templatesWithInputs: TemplateId[] = [
  "event",
  "podcast",
  "blog",
  "imageRight",
  "social",
  "logos",
  "hero",
  "notice",
];

/**
 * Check if a template has additional inputs
 */
export function hasTemplateInputs(template: TemplateId): boolean {
  return templatesWithInputs.includes(template);
}

/**
 * Main TemplateInputs component
 * Renders the appropriate inputs based on the selected template
 */
export function TemplateInputs({
  template,
  content,
  setContent,
}: TemplateInputsProps) {
  switch (template) {
    case "event":
      return <EventInputs content={content} setContent={setContent} />;
    case "podcast":
      return <PodcastInputs content={content} setContent={setContent} />;
    case "blog":
      return <BlogInputs content={content} setContent={setContent} />;
    case "imageRight":
      return <ImageRightInputs content={content} setContent={setContent} />;
    case "social":
      return <SocialInputs content={content} setContent={setContent} />;
    case "logos":
      return <LogosInputs content={content} setContent={setContent} />;
    case "hero":
      return <HeroInputs content={content} setContent={setContent} />;
    case "notice":
      return <NoticeInputs content={content} setContent={setContent} />;
    default:
      return null;
  }
}

export default TemplateInputs;
