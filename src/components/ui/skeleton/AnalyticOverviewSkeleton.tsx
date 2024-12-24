import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

const AnalyticOverviewSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {[...new Array(4)].map((_, index) => (
      <Card
        key={index}
        className="rounded-sm border border-default bg-white dark:bg-background shadow-lg p-6"
      >
        {/* Circular Skeleton for Icon/Avatar */}
        <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
          <Skeleton className="h-full w-full rounded-full" />
        </div>

        {/* Title and Rate Section */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            {/* Title Placeholder */}
            <Skeleton className="h-5 w-16 rounded-md" />

            {/* Subtitle Placeholder */}
            <Skeleton className="h-4 w-12 rounded-sm mt-1" />
          </div>

          {/* Rate Placeholder */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-8 rounded-sm" />
            <Skeleton className="h-4 w-4 rounded-full" />
          </div>
        </div>
      </Card>
    ))}
  </div>
  );
};

export default AnalyticOverviewSkeleton;
