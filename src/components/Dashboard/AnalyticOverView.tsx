"use client";
import dynamic from "next/dynamic";
import React, { use } from "react";
import CardDataStats from "../CardDataStats";

import { Book, LucideShoppingCart } from "lucide-react";
import { FaHotel, FaUser } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { fetchAnalyticsOverview } from "@/services/analytic.service";
import AnalyticOverviewSkeleton from "../ui/skeleton/AnalyticOverviewSkeleton";
import RevenueChart from "./Charts/RevenueChart";
import BookingChart from "./Charts/BookingChart";


const MapOne = dynamic(() => import("@/components/Dashboard/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(
  () => import("@/components/Dashboard/Charts/ChartThree"),
  {
    ssr: false,
  },
);
// const BookingChart = dynamic(
//   () => import("./Charts/BookingChart"),
//   {
//     ssr: false,
//   },
// );

const AnalyticOverView: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["analytics-overview"],
    queryFn: async () => await fetchAnalyticsOverview(),
  });

  const overView = data?.data || null;

  return (
    <>
      {isLoading ? (
        <AnalyticOverviewSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats
            title="Total Booking"
            total={`${overView?.totalBookings}`}
            rate="0%"
            levelUp
          >
            <Book className="h-6 w-6" />
          </CardDataStats>
          <CardDataStats
            title="Total Profit"
            total={`${overView?.totalRevenue}`}
            rate="4.35%"
            levelUp
          >
            <LucideShoppingCart className="h-6 w-6" />
          </CardDataStats>
          <CardDataStats
            title="Total Hotel"
            total={`${overView?.totalHotels}`}
            rate=""
            levelUp
          >
            <FaHotel className="h-6 w-6" />
          </CardDataStats>
          <CardDataStats
            title="Total Users"
            total={`${overView?.totalUsers}`}
            rate="0.95%"
            levelDown
          >
            <FaUser className="h-6 w-6" />
          </CardDataStats>
        </div>
      )}

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

        <RevenueChart />
        <BookingChart />

      </div>
    </>
  );
};

export default AnalyticOverView;
