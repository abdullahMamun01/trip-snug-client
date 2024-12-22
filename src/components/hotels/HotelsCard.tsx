import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import {
  Heart,
  Search,
  ChevronLeft,
  ChevronRight,
  Waves,
  PenTool,
  Star,
} from "lucide-react";
import Image from "next/image";

import { IHotel } from "@/types/hotel.types";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Chip } from "@nextui-org/chip";
import { MdLocationOn } from "react-icons/md";
import { HotelRating } from "./HotelRating";

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
  const discountedPrice =
    discount && Math.floor((discount?.percentage / 100) * pricePerNight);
  const searhParams = useSearchParams();

  return (
    <Card className="w-full p-2" isPressable as={Link} href="#">
      <CardBody className="p-0">
        <div className="flex gap-2 max-sm:h-[182px]  md:h-[180px]">
          <Image
            alt={title}
            width={1000}
            height={1000}
            className="h-auto w-[110px] md:w-[172px] rounded-l-lg object-cover"
            src={images[0]}
          />
          <div className="grid w-full grid-cols-12">
            <div className="col-span-12 p-2 md:col-span-10">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="line-clamp-1 md:text-lg font-bold">
                    {title}
                  </h3>
                  <div className=" ">
                    <HotelRating classification={classification} rating={rating} totalReviews={reviews} />
                  </div>
                  <p className="mt-0.5  flex gap-1 text-xs md:text-sm text-default-500 ">
                    <span>
                      <MdLocationOn className="h-4 w-4 text-blue-600" />
                    </span>{" "}
                    <span className="line-clamp-1">{location.address} , {location.country}</span>
                  </p>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 max-sm:line-clamp-1">
                {amenities.slice(0, 3).map((amenity, index) => (
                  <Chip
                    key={index}
                    size="sm"
                    variant="flat"
                    className="bg-default-100 text-xs"
                  >
                    {amenity}
                  </Chip>
                ))}
              </div>
              <div>
                <p className="mt-2 line-clamp-2 text-sm text-default-500">
                  {tags.join(", ")}
                </p>
              </div>
           
            </div>
            <div className="col-span-12 md:flex h-full flex-col items-center justify-center rounded-lg md:bg-sky-100  md:col-span-2">
              <div className="max-sm:flex gap-2 px-2 md:px-0 text-center">
                <p className="text-md text-default-400 line-through">
                  ${pricePerNight}
                </p>
                <p className="text-md md:text-2xl font-bold text-primary">
                  ${discountedPrice && pricePerNight - discountedPrice}
                </p>
                <p className="text-xs text-default-400">per night</p>
              </div>
              <div className="md:visible hidden md:flex w-full items-center justify-center">
                <Button color="primary" size="sm" className="mt-2">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
