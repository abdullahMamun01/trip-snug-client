"use client";

import { useQuery } from "@tanstack/react-query";
import RoomCard from "./RoomCard";
import { fetchHotelRooms } from "@/services/room.service";
import Loader from "../Dashboard/common/Loader";
import { useSearchParams } from "next/navigation";


export default function RoomList({ hotelId }: { hotelId: string }) {
  const queryParams = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["rooms", { hotelId, queryParams: queryParams.toString() }],
    queryFn: async () => await fetchHotelRooms(hotelId, queryParams.toString()),
  });
  

  if (isLoading) {
    return <Loader />;
  }
  const rooms = data?.data;
  return (
    <>
      <div>
        <div >
          <div className="mb-6 rounded-lg bg-white shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-blue-800">
              Choose your room
            </h2>
            <div className="space-y-4">
              {rooms?.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
