import type { TemplateProps } from "@/types";

/**
 * Podcast Template
 *
 * An audio/podcast episode style design.
 * Perfect for podcast episodes and audio content.
 *
 * Features:
 * - Episode-style badge
 * - Waveform decoration
 * - Play button style icon
 */
export function PodcastTemplate({
  title,
  description,
  icon,
  backgroundColor,
  textColor,
  accentColor,
  episodeNumber,
  duration,
  showName,
}: TemplateProps): React.ReactElement {
  const titleFontSize = title.length > 50 ? 40 : title.length > 35 ? 48 : 56;
  // Use episodeNumber if provided, otherwise fall back to description
  const displayEpisode = episodeNumber || description;
  const displayDuration = duration || "32:15";
  const displayShowName = showName;

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
        padding: 70,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Waveform background decoration - static bars */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 6,
          padding: "0 100px",
          opacity: 0.15,
        }}
      >
        <div style={{ width: 6, height: 50, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 62, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 75, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 85, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 90, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 85, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 75, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 62, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 50, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 40, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 55, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 70, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 82, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 88, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 82, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 70, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 55, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 45, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 58, background: accentColor, borderRadius: 3, display: "flex" }} />
        <div style={{ width: 6, height: 72, background: accentColor, borderRadius: 3, display: "flex" }} />
      </div>

      {/* Play button / Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
          marginRight: 50,
          flexShrink: 0,
          boxShadow: `0 20px 50px ${accentColor}50`,
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
        }}
      >
        {/* Episode badge and show name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          {displayEpisode && (
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: accentColor,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                padding: "10px 20px",
                borderRadius: 8,
                background: `${accentColor}20`,
                display: "flex",
              }}
            >
              {displayEpisode}
            </span>
          )}
          {displayShowName && (
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: textColor,
                opacity: 0.7,
                display: "flex",
              }}
            >
              {displayShowName}
            </span>
          )}
        </div>

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

        {/* Progress bar decoration */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 32,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 6,
              borderRadius: 3,
              background: `${textColor}20`,
              display: "flex",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "65%",
                height: "100%",
                background: accentColor,
                borderRadius: 3,
                display: "flex",
              }}
            />
          </div>
          <span
            style={{
              fontSize: 14,
              color: textColor,
              opacity: 0.5,
              display: "flex",
            }}
          >
            {displayDuration}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PodcastTemplate;
