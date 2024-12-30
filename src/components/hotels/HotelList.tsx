"use client";
import { fetchHotels } from "@/services/hotel.service";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import HotelsCard from "./HotelsCard";
import HotelListSkeleton from "../ui/skeleton/HotelListSkeleton";
import { useSearchParams } from "next/navigation";
import { Pagination } from "@nextui-org/pagination";
import NotFoundHotel from "./NotFoundHotel";
import useSetQueryParams from "@/hooks/useSetQueryParams";

export default function HotelList({ queries }: { queries: string }) {
  const searchParms = useSearchParams();
  const quries = new URLSearchParams(searchParms);
  const {setQueryParams , getQueryParams} = useSetQueryParams()
  

  const { data, isLoading , isFetching, isError, error } = useQuery({
    queryKey: ["hotels", queries.toString()],
    queryFn: async () => await fetchHotels(queries),
  });

  if (isLoading || isFetching) {
    return (
      <div className="w-full flex-1 space-y-4">
        <HotelListSkeleton />;
      </div>
    );
  }

  if (data?.hotels.length === 0) {
    return <NotFoundHotel />;
  }

  return (
    <div>
      <div className="w-full flex-1 space-y-4 gap-y-2">
        {data?.hotels.map((hotel) => (
          <HotelsCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <div className="mt-10 flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          total={data?.totalPage as number}
          onChange={(value) => {
            setQueryParams('page' , `${value}`)
          }}
          initialPage={Number(getQueryParams('page')) || 1}
          className="p-4"
        />
      </div>
    </div>
  );
}
