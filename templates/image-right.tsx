import type { TemplateProps } from "@/types";

/**
 * Image Right Template
 *
 * A split layout with content on left, decorative area on right.
 * Perfect for product showcases and feature highlights.
 *
 * Features:
 * - 50/50 split layout
 * - Tag badge
 * - Decorative gradient/shape area on right
 */
export function ImageRightTemplate({
  title,
  description,
  icon,
  backgroundColor,
  textColor,
  accentColor,
  imageUrl,
  tag,
}: TemplateProps): React.ReactElement {
  const titleFontSize = title.length > 50 ? 38 : title.length > 35 ? 46 : 54;
  // Use tag if provided, otherwise use description
  const displayTag = tag || description;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        background: backgroundColor,
        fontFamily: "Inter",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left content area */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "55%",
          padding: "60px 50px 60px 70px",
        }}
      >
        {/* Icon */}
        <div
          style={{
            fontSize: 48,
            marginBottom: 24,
            display: "flex",
          }}
        >
          {icon}
        </div>

        {/* Tag badge */}
        {displayTag && (
          <div
            style={{
              display: "flex",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: accentColor,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "8px 16px",
                borderRadius: 6,
                background: `${accentColor}15`,
                border: `1px solid ${accentColor}30`,
                display: "flex",
              }}
            >
              {displayTag.slice(0, 30)}
            </span>
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: titleFontSize,
            fontWeight: 700,
            color: textColor,
            lineHeight: 1.15,
            display: "flex",
          }}
        >
          {title}
        </div>
      </div>

      {/* Right decorative area */}
      <div
        style={{
          display: "flex",
          width: "45%",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Gradient background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${accentColor}40 0%, ${accentColor}10 100%)`,
            display: "flex",
          }}
        />

        {/* Show image if URL provided, otherwise show decorative circles */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            style={{
              width: "80%",
              height: "80%",
              objectFit: "contain",
              borderRadius: 16,
            }}
          />
        ) : (
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: `3px solid ${textColor}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                border: `3px solid ${textColor}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: `${textColor}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                }}
              >
                {icon}
              </div>
            </div>
          </div>
        )}

        {/* Corner decoration */}
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 30,
            width: 60,
            height: 60,
            borderTop: `3px solid ${textColor}30`,
            borderRight: `3px solid ${textColor}30`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 30,
            width: 60,
            height: 60,
            borderBottom: `3px solid ${textColor}30`,
            borderLeft: `3px solid ${textColor}30`,
            display: "flex",
          }}
        />
      </div>
    </div>
  );
}

export default ImageRightTemplate;
