import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AnalyticOverView from "@/components/Dashboard/AnalyticOverView";

import RecentPayments from "@/components/Dashboard/RecentPayments";
import RecentBookings from "@/components/Dashboard/RecentBookings";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function AdminPage() {
  return (
    <>
      <DefaultLayout>
        <AnalyticOverView />
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <RecentPayments />
          </div>
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <RecentBookings />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
