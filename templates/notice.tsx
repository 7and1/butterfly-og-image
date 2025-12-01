import type { TemplateProps } from "@/types";

/**
 * Notice Template
 *
 * An announcement-style layout with prominent icon.
 * Perfect for alerts, updates, and important notices.
 *
 * Features:
 * - Large icon on left
 * - Title + description on right
 * - Border accent for attention
 */
export function NoticeTemplate({
  title,
  description,
  icon,
  backgroundColor,
  textColor,
  accentColor,
  tag,
}: TemplateProps): React.ReactElement {
  const titleFontSize = title.length > 50 ? 40 : title.length > 35 ? 48 : 56;
  // Use tag for notice type label if provided
  const noticeType = tag;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        background: backgroundColor,
        fontFamily: "Inter",
        padding: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left accent border */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 8,
          background: accentColor,
          display: "flex",
        }}
      />

      {/* Icon container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 140,
          height: 140,
          borderRadius: 24,
          background: `${accentColor}15`,
          border: `2px solid ${accentColor}30`,
          marginRight: 48,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 72, display: "flex" }}>{icon}</span>
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          maxWidth: "70%",
        }}
      >
        {/* Notice type label */}
        {noticeType && (
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: accentColor,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 12,
              display: "flex",
            }}
          >
            {noticeType}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: titleFontSize,
            fontWeight: 700,
            color: textColor,
            lineHeight: 1.2,
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: 24,
              color: textColor,
              opacity: 0.7,
              marginTop: 16,
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            {description}
          </div>
        )}
      </div>

      {/* Decorative corner element */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          display: "flex",
          alignItems: "center",
          gap: 8,
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
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: accentColor,
            opacity: 0.6,
            display: "flex",
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: accentColor,
            opacity: 0.3,
            display: "flex",
          }}
        />
      </div>
    </div>
  );
}

export default NoticeTemplate;
