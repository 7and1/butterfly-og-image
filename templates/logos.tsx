import type { TemplateProps } from "@/types";

/**
 * Logos Template
 *
 * A tech-style design with decorative elements below title.
 * Perfect for tech companies and integration showcases.
 *
 * Features:
 * - Large centered icon
 * - Title below icon
 * - Row of decorative elements
 */
export function LogosTemplate({
  title,
  description,
  icon,
  backgroundColor,
  textColor,
  accentColor,
  tagline,
}: TemplateProps): React.ReactElement {
  const titleFontSize = title.length > 50 ? 44 : title.length > 35 ? 52 : 60;
  // Use tagline if provided, otherwise use description
  const displayTagline = tagline || description;

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
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${accentColor}20 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          display: "flex",
        }}
      />

      {/* Main icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 120,
          height: 120,
          borderRadius: 24,
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}80 100%)`,
          marginBottom: 32,
          boxShadow: `0 20px 40px ${accentColor}40`,
        }}
      >
        <span style={{ fontSize: 64, display: "flex", filter: "grayscale(1) brightness(10)" }}>{icon}</span>
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

      {/* Tagline/Description as subtitle */}
      {displayTagline && (
        <div
          style={{
            fontSize: 22,
            color: textColor,
            opacity: 0.6,
            marginTop: 16,
            textAlign: "center",
            display: "flex",
          }}
        >
          {displayTagline}
        </div>
      )}

      {/* Decorative logo row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginTop: 48,
        }}
      >
        <div style={{ width: 48, height: 48, borderRadius: 12, background: accentColor, opacity: 0.4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: textColor, opacity: 0.3, display: "flex" }} />
        </div>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: accentColor, opacity: 0.6, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: textColor, opacity: 0.3, display: "flex" }} />
        </div>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: accentColor, opacity: 0.8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: textColor, opacity: 0.3, display: "flex" }} />
        </div>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: accentColor, opacity: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: textColor, opacity: 0.3, display: "flex" }} />
        </div>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: accentColor, opacity: 0.8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: textColor, opacity: 0.3, display: "flex" }} />
        </div>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: accentColor, opacity: 0.6, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: textColor, opacity: 0.3, display: "flex" }} />
        </div>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: accentColor, opacity: 0.4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, background: textColor, opacity: 0.3, display: "flex" }} />
        </div>
      </div>
    </div>
  );
}

export default LogosTemplate;
