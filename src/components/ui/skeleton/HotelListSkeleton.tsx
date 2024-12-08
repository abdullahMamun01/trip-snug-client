export default function HotelListSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex animate-pulse items-center gap-4 border-b pb-4"
        >
          {/* Image Skeleton */}
          <div className="h-24 w-24 rounded-md bg-gray-300"></div>
          {/* Details Skeleton */}
          <div className="flex-1 space-y-3">
            <div className="h-5 w-3/4 rounded bg-gray-300"></div>
            <div className="h-4 w-1/2 rounded bg-gray-300"></div>
            <div className="h-4 w-1/3 rounded bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
