import HotelDetails from "@/components/hotels/hotelDetails/HotelDetails";
import RoomList from "@/components/rooms/RoomList";
import getDateWithOffset from "@/lib/date";

import { fetchHotel } from "@/services/hotel.service";
import { fetchHotelRooms } from "@/services/room.service";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import React from "react";

interface IHotelProps {
  params: { hotelId: string };

  searchParams: {
    [key: string]: string;
  };
}

export default async function HotelDetailsPage({
  params: { hotelId },
  searchParams,
}: IHotelProps) {
  const queryParams = new URLSearchParams(searchParams);
  const chekIn = searchParams.checkIn as string;
  const checkout = searchParams.checkOut as string;
  // if(!chekIn || !checkout) {
  //   redirect(`/hotels/${hotelId}?checkIn=${getDateWithOffset()}&checkOut=${getDateWithOffset(1)}`)
  // }
  

  queryParams.delete("adults");

  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["hotels", hotelId],
      queryFn: async () => await fetchHotel(hotelId),
    }),
    queryClient.prefetchQuery({
      queryKey: ["rooms", { hotelId, queryParams: queryParams.toString() }],
      queryFn: async () =>
        await fetchHotelRooms(hotelId, queryParams.toString()),
    }),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">

      <HydrationBoundary state={dehydrate(queryClient)}>
        <HotelDetails hotelId={hotelId} />
      </HydrationBoundary>
    </div>
  );
}
