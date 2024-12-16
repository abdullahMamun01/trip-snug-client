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

export default function HotelDetails({ hotelId }: { hotelId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["hotels", hotelId],
    queryFn: async () => await fetchHotel(hotelId),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <HotelImages images={data?.images as string[]} />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
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
        <div className="col-span-4">
          <HotelPricingCard price={18}/>
        </div>
      </div>
    </>
  );
}
