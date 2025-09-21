import React, { useMemo } from "react";
import CustomPieChart from "../../../components/charts/DonutChart";
import { useTheme } from "../../../context/ThemeContext";
import SectionCard from "../../../components/common/SectionCard";

const TotalSales = () => {
  const { theme } = useTheme();

  // const totalSales = 638.72;

  const salesData = useMemo(
    () => [
      { name: "Direct", value: 300.56, percentage: 47.1, color: theme === "light" ? "#1C1C1C" : "#C6C7F8" },
      { name: "Affiliate", value: 135.18, percentage: 21.2, color: "#BAEDBD" },
      { name: "Sponsored", value: 154.02, percentage: 24.1, color: "#95A4FC" },
      { name: "E-mail", value: 48.96, percentage: 7.7, color: "#B1E3FF" },
    ],
    [theme]
  );

  return (
    <SectionCard title="Total Sales" className="w-full h-[348px] lg:h-full flex flex-col">
      {/* Pie Chart */}
      <div className="flex justify-center items-center flex-1 pb-6">
        <CustomPieChart data={salesData} />
      </div>
    </SectionCard>
  );
};

export default TotalSales;
