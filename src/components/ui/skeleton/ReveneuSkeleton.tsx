import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function ReveneuSkeleton() {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5 mb-3">
          <div className="flex min-w-47.5">
            <Skeleton className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary" />
            <div className="w-full">
              <Skeleton className="h-5 w-full rounded-md" />
              <Skeleton className="mt-2 h-4 w-3/4 rounded-md" />
            </div>
          </div>
          <div className="flex min-w-47.5">
            <Skeleton className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary" />
            <div className="w-full">
              <Skeleton className="h-5 w-full rounded-md" />
              <Skeleton className="mt-2 h-4 w-3/4 rounded-md" />
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <Skeleton className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark" />
            <Skeleton className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark" />
            <Skeleton className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark" />
          </div>
        </div>
      </div>
      <div>
        <div id="chartOne" className="mx-4">
          <Skeleton className="h-[350px] w-full" />
        </div>
      </div>
    </div>
  );
}
