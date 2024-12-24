"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "./RevenueChart";
import ChartTwo from "./BookingChart";


const ChartThree = dynamic(() => import("./ChartThree"), {
  ssr: false,
});

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree/>

      </div>
    </>
  );
};

export default Chart;
