import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { templateIds, getTemplate, type TemplateId } from "@/templates";
import { getTemplateContent } from "@/lib/template-content";
import TemplateEditor from "./TemplateEditor";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return templateIds.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug as TemplateId);
  const content = getTemplateContent(slug as TemplateId);

  if (!template) {
    return {
      title: "Template Not Found | og-image.org",
    };
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://og-image.org/templates/${slug}`,
      siteName: "og-image.org",
      type: "website",
      images: [
        {
          url: `https://og-image.org/og-templates/${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${template.name} OG Image Template Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: [`https://og-image.org/og-templates/${slug}.png`],
    },
    alternates: {
      canonical: `https://og-image.org/templates/${slug}`,
    },
  };
}

function TemplateEditorLoading() {
  return (
    <div className="min-h-[calc(100vh-112px)] bg-neutral-950 px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 animate-pulse">
          <div className="h-4 w-32 bg-neutral-800 rounded mb-2" />
          <div className="h-8 w-64 bg-neutral-800 rounded mt-2" />
          <div className="h-4 w-48 bg-neutral-800 rounded mt-2" />
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-[1200/630] bg-neutral-800 rounded-lg animate-pulse" />
          <div className="space-y-6">
            <div className="h-48 bg-neutral-800 rounded-lg animate-pulse" />
            <div className="h-64 bg-neutral-800 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function TemplatePage({ params }: Props) {
  const { slug } = await params;

  // Validate template exists
  if (!templateIds.includes(slug as TemplateId)) {
    notFound();
  }

  return (
    <Suspense fallback={<TemplateEditorLoading />}>
      <TemplateEditor slug={slug} />
    </Suspense>
  );
}
