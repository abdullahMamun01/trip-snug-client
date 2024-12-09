import HotelDetails from "@/components/hotels/hotelDetails/HotelDetails";
import RoomList from "@/components/rooms/RoomList";

import { fetchHotel } from "@/services/hotel.service";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
interface IHotelProps {
  params: { hotelId: string };
}

export default async function HotelDetailsPage({
  params: { hotelId },
}: IHotelProps) {
  console.log(hotelId);
  const hotelQueryClient = new QueryClient();
  await hotelQueryClient.prefetchQuery({
    queryKey: ["hotels", hotelId],
    queryFn: async () => await fetchHotel(hotelId),
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* <Header /> */}
      <HydrationBoundary state={dehydrate(hotelQueryClient)}>
        <HotelDetails hotelId={hotelId} />
      </HydrationBoundary>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="col-span-1 md:col-span-3">
          <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-blue-800">
              Choose your room
            </h2>
            <RoomList />
          </div>
        </div>
      </div>
    </div>
  );
}
