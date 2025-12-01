import type { TemplateProps } from "@/types";

/**
 * Hero Template
 *
 * A startup landing page style with pill badge at top.
 * Perfect for product launches and feature announcements.
 *
 * Features:
 * - Tag pill badge from description
 * - Large centered title
 * - Decorative gradient fade at bottom
 */
export function HeroTemplate({
  title,
  description,
  icon,
  backgroundColor,
  textColor,
  accentColor,
  tag,
}: TemplateProps): React.ReactElement {
  const titleFontSize = title.length > 50 ? 48 : title.length > 35 ? 56 : 64;
  // Use tag if provided, otherwise use description
  const displayBadge = tag || description;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: backgroundColor,
        fontFamily: "Inter",
        padding: 60,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient orb top right */}
      <div
        style={{
          position: "absolute",
          top: -150,
          right: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}30 0%, transparent 70%)`,
          display: "flex",
        }}
      />

      {/* Tag pill badge */}
      {displayBadge && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 40,
            padding: "12px 24px",
            borderRadius: 100,
            border: `2px solid ${accentColor}`,
            background: `${accentColor}15`,
          }}
        >
          <span style={{ fontSize: 20, display: "flex" }}>{icon}</span>
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: accentColor,
              display: "flex",
            }}
          >
            {displayBadge}
          </span>
        </div>
      )}

      {/* Title */}
      <div
        style={{
          fontSize: titleFontSize,
          fontWeight: 700,
          color: textColor,
          textAlign: "center",
          lineHeight: 1.15,
          maxWidth: "90%",
          marginTop: displayBadge ? 32 : 80,
          display: "flex",
        }}
      >
        {title}
      </div>

      {/* Bottom gradient fade decoration */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: `linear-gradient(to top, ${accentColor}20 0%, transparent 100%)`,
          display: "flex",
        }}
      />

      {/* Bottom decorative lines */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          display: "flex",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 60,
            height: 4,
            borderRadius: 2,
            background: accentColor,
            display: "flex",
          }}
        />
        <div
          style={{
            width: 60,
            height: 4,
            borderRadius: 2,
            background: accentColor,
            opacity: 0.5,
            display: "flex",
          }}
        />
        <div
          style={{
            width: 60,
            height: 4,
            borderRadius: 2,
            background: accentColor,
            opacity: 0.25,
            display: "flex",
          }}
        />
      </div>
    </div>
  );
}

export default HeroTemplate;
