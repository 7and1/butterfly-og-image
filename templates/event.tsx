import type { TemplateProps } from "@/types";

/**
 * Event Template
 *
 * An event/conference announcement style design.
 * Perfect for conferences, meetups, and event promotions.
 *
 * Features:
 * - Date-style badge
 * - Ticket corner decorations
 * - Bold, attention-grabbing layout
 */
export function EventTemplate({
  title,
  description,
  icon,
  backgroundColor,
  textColor,
  accentColor,
  date,
  location,
}: TemplateProps): React.ReactElement {
  const titleFontSize = title.length > 50 ? 44 : title.length > 35 ? 52 : 60;
  // Use date/location if provided, otherwise fall back to description
  const displayDate = date || description;
  const displayLocation = location;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background: backgroundColor,
        fontFamily: "Inter",
        padding: 70,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ticket corner decorations */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          width: 40,
          height: 40,
          borderTop: `4px solid ${accentColor}`,
          borderLeft: `4px solid ${accentColor}`,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 30,
          right: 30,
          width: 40,
          height: 40,
          borderTop: `4px solid ${accentColor}`,
          borderRight: `4px solid ${accentColor}`,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 30,
          width: 40,
          height: 40,
          borderBottom: `4px solid ${accentColor}`,
          borderLeft: `4px solid ${accentColor}`,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          width: 40,
          height: 40,
          borderBottom: `4px solid ${accentColor}`,
          borderRight: `4px solid ${accentColor}`,
          display: "flex",
        }}
      />

      {/* Decorative diagonal lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 200,
          width: 300,
          height: "100%",
          background: `repeating-linear-gradient(-45deg, transparent, transparent 20px, ${accentColor}08 20px, ${accentColor}08 40px)`,
          display: "flex",
        }}
      />

      {/* Icon and date badge row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 16,
            background: accentColor,
          }}
        >
          <span style={{ fontSize: 40, display: "flex" }}>{icon}</span>
        </div>

        {/* Date/location badge */}
        {(displayDate || displayLocation) && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px 24px",
              borderRadius: 12,
              background: `${textColor}10`,
              border: `2px solid ${textColor}20`,
            }}
          >
            {displayDate && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: accentColor,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "flex",
                  }}
                >
                  Date
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: textColor,
                    marginTop: 4,
                    display: "flex",
                  }}
                >
                  {displayDate}
                </span>
              </div>
            )}
            {displayLocation && (
              <div style={{ display: "flex", flexDirection: "column", marginTop: displayDate ? 8 : 0 }}>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: accentColor,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "flex",
                  }}
                >
                  Location
                </span>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: textColor,
                    opacity: 0.9,
                    marginTop: 2,
                    display: "flex",
                  }}
                >
                  {displayLocation}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: titleFontSize,
          fontWeight: 800,
          color: textColor,
          lineHeight: 1.1,
          maxWidth: "90%",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          display: "flex",
        }}
      >
        {title}
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 40,
        }}
      >
        <div
          style={{
            width: 100,
            height: 6,
            borderRadius: 3,
            background: accentColor,
            display: "flex",
          }}
        />
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: accentColor,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          Save the Date
        </span>
      </div>
    </div>
  );
}

export default EventTemplate;
