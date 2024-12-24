"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { fetchBookingAnalytics } from "@/services/analytic.service";
import { apexBarChartOptions } from "@/lib/apexOption";
import BookingChartSkeleton from "@/components/ui/skeleton/BookingChartSkeleton";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BookingChart: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["booking-chart"],
    queryFn: async () => await fetchBookingAnalytics(),
  });

  // Safely extract months and series data
  const months = data?.data?.monthly?.map((item) => item.monthName) || [];
  const series = data && 
    data?.data?.monthly?.length > 0
      ? [
          {
            name: "Bookings",
            data: data.data.monthly.map((item) => item.amount),
          },
        ]
      : [];

  console.log("Months:", months);
  console.log("Series:", series);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Booking this Year
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-mb-9 -ml-5">
          {isLoading && <BookingChartSkeleton />}
          {isError && <p className="text-red-500">Failed to load data.</p>}
          {series.length > 0 ? (
            <ReactApexChart
              options={apexBarChartOptions(months.reverse())}
              series={series.reverse() as ApexAxisChartSeries | ApexNonAxisChartSeries | undefined}
              type="bar"
              height={350}
              width="100%"
            />
          ) : (
            <p className="text-gray-500">No data available for the chart.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingChart;
