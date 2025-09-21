import React, { useEffect, useState } from "react";
import SectionCard from "../../../components/common/SectionCard";
import WorldMap from "../../../components/maps/WorldMap";
import { revenueLocations } from "../../../utils/data";

const RevenueByLocation = () => {
  const revenueData = revenueLocations;

  const [mapHeight, setMapHeight] = useState(() => (typeof window !== "undefined" && window.innerWidth < 1024 ? 120 : 220));

  useEffect(() => {
    const onResize = () => setMapHeight(window.innerWidth < 1024 ? 200 : 220);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <SectionCard title="Revenue by Location" className="space-y-4 pb-6">
      {/* Map Section */}
      <WorldMap className="mb-6" height={mapHeight} markers={revenueData.map((r) => ({ key: r.name, coordinates: r.coordinates }))} />

      {/* Location List with Revenue Bars */}
      <div className="space-y-4">
        {revenueData.map(({ name, revenue }) => {
          const percentage = (revenue / 100) * 100;

          return (
            <div key={name} className="flex items-center justify-between text-text-sm text-black-new-100 dark:text-white-new-100">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="">{name}</span>
                  <span className="">{revenue}K</span>
                </div>
                <div className="w-full bg-[#A8C5DA80] rounded-full h-1">
                  <div className="bg-[#A8C5DA] h-1 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
};

export default RevenueByLocation;
