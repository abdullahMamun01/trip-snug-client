import React from 'react'

export default function BookingChartSkeleton() {
  return (
  <div className="animate-pulse h-full w-full rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
    <div className="mb-4 flex justify-between gap-4 sm:flex">
      <div className="h-6 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
      <div className="relative z-20 inline-block">
        <div className="h-6 w-28 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
        <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
              fill="#637381"
            />
          </svg>
        </span>
      </div>
    </div>
    <div className="h-96 w-full rounded-sm bg-gray-200 dark:bg-gray-700"></div>
  </div>
  )
}
