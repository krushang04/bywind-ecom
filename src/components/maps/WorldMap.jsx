import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useTheme } from "../../context/ThemeContext";

/**
 * WorldMap - reusable map with markers
 * Props:
 * - height: number (required) - pixel height for the map SVG
 * - width: number (optional) - defaults to 400; rendered responsive via style
 * - projection: string - default "geoEqualEarth"
 * - projectionConfig: object - default { scale: 90, center: [20, 20] }
 * - markers: Array<{ key?: string, coordinates: [number, number], r?: number, fill?: string, stroke?: string, strokeWidth?: number }>
 * - geographyUrl: string - topojson url for world map
 * - className: string
 */
export default function WorldMap({
  height,
  width = 400,
  projection = "geoEqualEarth",
  projectionConfig = { scale: 90, center: [20, 20] },
  markers = [],
  geographyUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
  className = "",
}) {
  const { theme } = useTheme();

  return (
    <div className={className} style={{ height }}>
      <ComposableMap
        projection={projection}
        projectionConfig={projectionConfig}
        width={width}
        height={height}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geographyUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#A8C5DA"
                stroke={theme === "dark" ? "#1C1C1C" : "#FFFFFF"}
                strokeWidth={0.3}
              />
            ))
          }
        </Geographies>

        {markers.map((m, idx) => (
          <Marker key={m.key || idx} coordinates={m.coordinates}>
            <circle
              r={m.r ?? 3.5}
              fill={m.fill ?? (theme === "dark" ? "#C6C7F8" : "#1F2937")}
              stroke={m.stroke ?? "#FFFFFF"}
              strokeWidth={m.strokeWidth ?? 1.5}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
