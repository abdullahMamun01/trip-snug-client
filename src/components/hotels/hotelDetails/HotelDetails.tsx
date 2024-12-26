"use client";
import React from "react";
import HotelImages from "./HotelImages";
import HotelDescription from "./HotelDescription";
import ReviewList from "../../review/ReviewList";
import HotelPricingCard from "./HotelPricingCard";
import HotelOverView from "./HotelOverView";
import { useQuery } from "@tanstack/react-query";
import { fetchHotel } from "@/services/hotel.service";
import Loader from "@/components/Dashboard/common/Loader";
import RoomList from "@/components/rooms/RoomList";
import RatingStar from "@/components/review/RatingStar";
import { Heart, Hotel, MapPin, Share2, Star } from "lucide-react";
import { HotelRating } from "../HotelRating";
import ShareButton from "@/components/social/ShareButton";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function HotelDetails({ hotelId }: { hotelId: string }) {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["hotels", hotelId],
    queryFn: async () => await fetchHotel(hotelId),
  });

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <div className="flex md:flex-row flex-col justify-between">
          <div className="max-sm:order-2 mb-2 flex  items-center gap-4">
            <h1 className="text-md font-semibold text-gray-900 md:text-2xl">
              {data?.title}
            </h1>
            <div className="flex gap-1">
              {[...Array(Math.floor(data?.rating as number))].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-current text-orange-400 md:h-3.5 md:w-3.5"
                />
              ))}
            </div>
          </div>
          <div className="max-sm:order-1 max-sm:pb-3">
            <div className="flex items-center justify-between space-x-2">
              <Link href="#room">
                <Button color="primary">Select Room</Button>
              </Link>
              <div className="flex gap-2">
                <button className="flex items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300  md:p-3">
                  <Heart className="h-4 w-4 text-red-500" />
                </button>
                {data && <ShareButton title={data?.title as string} />}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 space-x-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4 text-blue-500" />{" "}
            {data?.location?.address as string} ,{" "}
            {data?.location?.city as string} ,{" "}
            {data?.location?.country as string}
          </p>
        </div>
      </div>
      <div>
        <HotelImages images={data?.images as string[]} />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <div className="">
            <HotelOverView
              title={data?.title as string}
              description={data?.description as string}
              rating={data?.rating as number}
              amenities={data?.amenities as string[]}
            />
            <HotelDescription description={data?.description as string} />
          </div>

          <div>
            <RoomList hotelId={hotelId} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <HotelPricingCard price={18} />
        </div>
      </div>
    </>
  );
}
