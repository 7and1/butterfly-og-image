import type { TemplateProps } from "@/types";

/**
 * Banner Template
 *
 * A wide horizontal banner style design.
 * Perfect for headers, cover images, and wide format displays.
 *
 * Features:
 * - Horizontal layout
 * - Icon on left, title centered
 * - Band/stripe decoration
 */
export function BannerTemplate({
  title,
  description,
  icon,
  backgroundColor,
  textColor,
  accentColor,
}: TemplateProps): React.ReactElement {
  const titleFontSize = title.length > 50 ? 42 : title.length > 35 ? 50 : 58;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        background: backgroundColor,
        fontFamily: "Inter",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top and bottom bands */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}50 50%, ${accentColor} 100%)`,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 8,
          background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}50 50%, ${accentColor} 100%)`,
          display: "flex",
        }}
      />

      {/* Left section with icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 280,
          height: "100%",
          background: `linear-gradient(180deg, ${accentColor}20 0%, ${accentColor}05 100%)`,
          borderRight: `1px solid ${accentColor}30`,
          position: "relative",
        }}
      >
        {/* Icon container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}80 100%)`,
            boxShadow: `0 10px 30px ${accentColor}40`,
          }}
        >
          <span style={{ fontSize: 60, display: "flex" }}>{icon}</span>
        </div>

        {/* Vertical decorative line */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 60,
            bottom: 60,
            width: 1,
            background: `linear-gradient(180deg, transparent 0%, ${accentColor} 50%, transparent 100%)`,
            display: "flex",
          }}
        />
      </div>

      {/* Center content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flex: 1,
          padding: "60px 70px",
        }}
      >
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

        {/* Description as tagline */}
        {description && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 24,
            }}
          >
            <div
              style={{
                width: 40,
                height: 3,
                background: accentColor,
                borderRadius: 2,
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 20,
                color: accentColor,
                fontWeight: 500,
                display: "flex",
              }}
            >
              {description}
            </span>
          </div>
        )}
      </div>

      {/* Right decoration */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          padding: "0 50px",
        }}
      >
        <div style={{ width: 8, height: 40, borderRadius: 4, background: accentColor, opacity: 1, display: "flex" }} />
        <div style={{ width: 8, height: 40, borderRadius: 4, background: accentColor, opacity: 0.7, display: "flex" }} />
        <div style={{ width: 8, height: 40, borderRadius: 4, background: accentColor, opacity: 0.4, display: "flex" }} />
        <div style={{ width: 8, height: 40, borderRadius: 4, background: accentColor, opacity: 0.7, display: "flex" }} />
        <div style={{ width: 8, height: 40, borderRadius: 4, background: accentColor, opacity: 1, display: "flex" }} />
      </div>
    </div>
  );
}

export default BannerTemplate;
