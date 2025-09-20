import React from "react";
import MetricsCards from "./modules/MetricsCards";
import RevenueByLocation from "../../components/RevenueByLocation";

const Dashboard = () => (
  <div className="space-y-7">
    <div className="px-2 py-1 font-semibold text-text-md">eCommerce</div>
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/2">
        <MetricsCards />
      </div>
      <div className="w-full lg:w-1/2">
        <RevenueByLocation />
      </div>
    </div>
  </div>
);

export default Dashboard;
