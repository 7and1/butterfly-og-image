import type { TemplateProps } from "@/types";

/**
 * Social Template
 *
 * A clean centered design optimized for social sharing.
 * Perfect for Twitter, LinkedIn, and other social platforms.
 *
 * Features:
 * - Large centered icon
 * - Title below icon
 * - Minimal, impactful design
 */
export function SocialTemplate({
  title,
  description,
  icon,
  backgroundColor,
  textColor,
  accentColor,
  handle,
  platform,
}: TemplateProps): React.ReactElement {
  const titleFontSize = title.length > 50 ? 44 : title.length > 35 ? 52 : 60;
  const displayHandle = handle || "@handle";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: backgroundColor,
        fontFamily: "Inter",
        padding: 60,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at center, ${accentColor}10 0%, transparent 70%)`,
          display: "flex",
        }}
      />

      {/* Ring decoration around icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: `3px solid ${accentColor}30`,
          marginBottom: 40,
          position: "relative",
        }}
      >
        {/* Inner ring */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: `${accentColor}15`,
          }}
        >
          <span style={{ fontSize: 80, display: "flex" }}>{icon}</span>
        </div>

        {/* Accent dots on ring */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: accentColor,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: accentColor,
            display: "flex",
          }}
        />
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: titleFontSize,
          fontWeight: 700,
          color: textColor,
          textAlign: "center",
          lineHeight: 1.2,
          maxWidth: "85%",
          display: "flex",
        }}
      >
        {title}
      </div>

      {/* Description */}
      {description && (
        <div
          style={{
            fontSize: 22,
            color: textColor,
            opacity: 0.6,
            marginTop: 20,
            textAlign: "center",
            maxWidth: "70%",
            display: "flex",
          }}
        >
          {description}
        </div>
      )}

      {/* Bottom handle/tag style */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 20px",
          borderRadius: 100,
          background: `${textColor}10`,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: accentColor,
            display: "flex",
          }}
        />
        <span
          style={{
            fontSize: 14,
            color: textColor,
            opacity: 0.6,
            display: "flex",
          }}
        >
          {displayHandle}
        </span>
      </div>
    </div>
  );
}

export default SocialTemplate;
