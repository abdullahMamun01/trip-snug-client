import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const HotelCardSkeleton = () => {
  const fakeHotels = new Array(6).fill(null); // Fake array for 6 hotels

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {fakeHotels.map((_, index) => (
        <Card
          key={index}
          className="overflow-hidden border border-gray-200 shadow-none"
        >
          <div className="grid md:grid-cols-[320px_1fr]">
            {/* Left side image and buttons */}
            <div className="relative">
              <Skeleton className="rounded-lg">
                <div className="h-[200px] w-full rounded-lg bg-default-300"></div>{" "}
                {/* Image placeholder */}
              </Skeleton>
              <Button
                isIconOnly
                className="absolute right-2 top-2 border-none bg-white/90"
                radius="full"
                size="sm"
                disabled
              >
                <Heart className="h-5 w-5" />
              </Button>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between">
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  className="bg-black/40 text-white"
                  disabled
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  isIconOnly
                  size="sm"
                  variant="flat"
                  className="bg-black/40 text-white"
                  disabled
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right side text and pricing */}
            <div className="p-4">
              <div className="flex justify-between">
                <div className="space-y-2">
                  {/* Hotel Name */}
                  <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                  </Skeleton>

                  {/* Location */}
                  <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                  </Skeleton>

                  {/* Type and details */}
                  <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                  </Skeleton>

                  {/* Amenities */}
                  <div className="flex gap-4">
                    <Skeleton className="w-10 rounded-lg">
                      <div className="h-3 w-10 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-10 rounded-lg">
                      <div className="h-3 w-10 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-10 rounded-lg">
                      <div className="h-3 w-10 rounded-lg bg-default-200"></div>
                    </Skeleton>
                  </div>

                  {/* Rating */}
                  <Skeleton className="w-16 rounded-lg">
                    <div className="h-3 w-16 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-10 rounded-lg">
                    <div className="h-3 w-10 rounded-lg bg-default-200"></div>
                  </Skeleton>

                  {/* Refundable and Cash */}
                  <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                </div>

                {/* Price and Discount */}
                <div className="space-y-2 text-right">
                  <Skeleton className="w-20 rounded-lg">
                    <div className="h-3 w-20 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-10 rounded-lg">
                    <div className="h-3 w-10 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-16 rounded-lg">
                    <div className="h-6 w-16 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-10 rounded-lg">
                    <div className="h-3 w-10 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-12 rounded-lg">
                    <div className="h-3 w-12 rounded-lg bg-default-200"></div>
                  </Skeleton>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HotelCardSkeleton;
