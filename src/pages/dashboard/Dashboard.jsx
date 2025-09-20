import React from "react";
import MetricsCards from "./modules/MetricsCards";

const Dashboard = () => (
  <div className="space-y-7">
    <div className="px-2 py-1 font-semibold text-text-md">eCommerce</div>
    <div className="flex">
      <div className="w-full lg:w-1/2">
        <MetricsCards />
      </div>
      <div></div>
    </div>
  </div>
);

export default Dashboard;
