import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const RevenueByLocation = () => {
  const revenueData = [
    { name: "New York", revenue: 72, coordinates: [-74.006, 40.7128] },
    { name: "San Francisco", revenue: 39, coordinates: [-122.4194, 37.7749] },
    { name: "Sydney", revenue: 25, coordinates: [151.2093, -33.8688] },
    { name: "Singapore", revenue: 61, coordinates: [103.8198, 1.3521] },
  ];

  return (
    <div className="rounded-xl p-6 shadow-sm bg-[#F7F9FB] space-y-4">
      {/* Title */}
      <div className="text-text-md font-semibold text-black-new-100 text-center">Revenue by Location</div>

      {/* Map Section */}
      <div className="mb-6">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 90,
            center: [0, 0],
          }}
          width={400}
          height={220}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#A8C5DA" stroke="#FFFFFF" strokeWidth={0.3} />)}
          </Geographies>

          {/* Markers for each location */}
          {revenueData.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={3.5} fill="#1F2937" stroke="#FFFFFF" strokeWidth={1.5} />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Location List with Revenue Bars */}
      <div className="space-y-4">
        {revenueData.map(({ name, revenue }) => {
          const percentage = (revenue / 100) * 100;

          return (
            <div key={name} className="flex items-center justify-between text-text-sm text-black-new-100">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="">{name}</span>
                  <span className="">{revenue}K</span>
                </div>
                <div className="w-full bg-white rounded-full h-1">
                  <div className="bg-[#A8C5DA] h-1 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueByLocation;
