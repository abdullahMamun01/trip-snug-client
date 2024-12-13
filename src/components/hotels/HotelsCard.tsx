import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import {
  Heart,
  Search,
  ChevronLeft,
  ChevronRight,
  Waves,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import HotelImage from "@/assests/popular-hotel.jpg";
import { IHotel } from "@/types/hotel.types";
import { getAmenityIcon } from "@/lib/amenities";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HotelsCard({ hotel }: { hotel: IHotel }) {
  const {
    id,
    title,
    rating,
    reviews,
    amenities,
    availableRooms,
    currency,
    description,
    images,
    location,
    pricePerNight,
    tags,
    classification,
    policies,
    discount,
  } = hotel;
  const discountedPrice = Math.floor(
    (discount.percentage / 100) * pricePerNight,
  );
  const searhParams = useSearchParams()

  return (
    <Card className="w overflow-hidden rounded-sm border border-gray-200 shadow-none">
      <div className="grid md:grid-cols-[320px_1fr] ">
        <div className="relative">
          <Image
            alt={title}
            className="h-[250px] w-full object-cover"
            width={1000}
            height={1000}
            src={images[0]}
          />
          <Button
            isIconOnly
            className="absolute right-2 top-2 border-none bg-white/90"
            radius="full"
            size="sm"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <div className="absolute bottom-2 left-2 right-2 flex justify-between">
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              className="bg-black/40 text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              className="bg-black/40 text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Link href={{pathname: `/hotels/${id}` , query:searhParams.toString()}}>
          <div className="p-4">
            <div className="flex justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-500 line-clamp-1">{title}</h3>
                <p className="text-sm">{location.address}</p>
                {policies && (
                  <>
                    <p className="text-sm">{}</p>
                    <p className="text-sm">{policies.cancellationPolicy}</p>
                  </>
                )}

                <div className="flex gap-4">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-1 text-sm"
                    >
                      {getAmenityIcon(amenity)}
                    </div>
                  ))}
                </div>

                {rating && (
                  <div className="inline-flex items-center rounded bg-green-100 px-2 py-1">
                    <span className="font-semibold text-green-700">
                      {rating}
                    </span>
                    <span className="mx-1 text-green-700">•</span>
                    <span className="text-green-700">Exceptional</span>
                    <span className="ml-1 text-sm text-gray-600">
                      {reviews} reviews
                    </span>
                  </div>
                )}

                <div>
                  <p className="text-orange-600">Not refundable</p>

                </div>
              </div>

              <div className="text-right">
                <div className="w-[300px] max-sm:hidden"></div>
                {discount && (
                  <div className="mb-1 inline-block rounded bg-green-700 px-2 py-1 text-sm text-white">
                    ${pricePerNight - discountedPrice} off
                  </div>
                )}
                {pricePerNight && (
                  <p className="text-sm text-gray-500 line-through">
                    ${pricePerNight}
                  </p>
                )}
                <p className="text-2xl font-bold">${pricePerNight}</p>
                {/* <p className="text-sm text-gray-500">
                    ${property.totalPrice || property.price * 2.5} total
                  </p> */}
                <p className="text-xs text-gray-500">includes taxes & fees</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Card>
  );
}
