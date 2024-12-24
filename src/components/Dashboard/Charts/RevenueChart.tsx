"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { fetchRevenueAnalytics } from "@/services/analytic.service";
import { IRevenueAnalytics } from "@/types/analytics.type";
import {apextOptions} from "@/lib/apexOption";
import ReveneuSkeleton from "@/components/ui/skeleton/ReveneuSkeleton";



const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}
const transformMonthlyData = (data: IRevenueAnalytics) => {
  return {
    series: {
      name: "Revenue",
      data: data.monthly.map((item) => item.amount) as number[],
    },
    months: data.monthly.map((item) => item.monthName),
  };
};

const RevenueChart: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["revenue-chart"],
    queryFn: async () => await fetchRevenueAnalytics(),
  });
 
  const apexData = data ? transformMonthlyData(data.data) : null;
  const series = apexData ? apexData.series : [];

// console.log(series)
  console.log()
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Total Revenue</p>
              <p className="text-sm font-medium">01.01.2024 - 31.12.2024</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Books</p>
              <p className="text-sm font-medium">01.01.2024 - 31.12.2024</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Monthly
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Weekly
            </button>
       
          </div>
        </div>
      </div>

      <div>
        {isLoading ? (
          <ReveneuSkeleton />
        ) : (
          <div id="chartOne" className="-ml-5">
            <ReactApexChart
              options={apextOptions()}
              series={[series] as ApexAxisChartSeries | ApexNonAxisChartSeries | undefined}
              type="area"
              height={350}
              width={"100%"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueChart;
