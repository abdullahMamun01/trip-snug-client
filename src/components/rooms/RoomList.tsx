"use client";

import { useQuery } from "@tanstack/react-query";
import RoomCard from "./RoomCard";
import { fetchHotelRooms } from "@/services/room.service";
import Loader from "../Dashboard/common/Loader";
import { useSearchParams } from "next/navigation";

const roomOptions = [
  {
    type: "Classic Room",
    price: 237.43,
    totalPrice: 1424.59,
    nights: 6,
    points: 24.36,
    amenities: ["Wifi", "TV", "Private bathroom", "Breakfast"],
  },
  {
    type: "Classic Room with City View",
    price: 248.49,
    totalPrice: 1490.96,
    nights: 6,
    extras: {
      title: "Bangkok Street Art and Food - Half-Day Walking Tour",
      info: "More info",
    },
    points: 25.5,
    amenities: ["Wifi", "TV", "Private bathroom", "Breakfast"],
  },
  {
    type: "Deluxe Room",
    price: 251.24,
    totalPrice: 1507.42,
    nights: 6,
    extras: {
      title: "Cycle The Narrow Alleways of Chinatown",
      info: "More info",
    },
    points: 25.78,
    amenities: ["Wifi", "TV", "Private bathroom", "Breakfast"],
  },
];

export default function RoomList({ hotelId }: { hotelId: string }) {
  const queryParams = useSearchParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["rooms", { hotelId, queryParams: queryParams.toString() }],
    queryFn: async () => await fetchHotelRooms(hotelId, queryParams.toString()),
  });
  console.log(data, " from server");
  if (isLoading) {
    return <Loader />;
  }
  const rooms = data?.data;

  console.log(data?.data);
  return (
    <>
      <div>
        <div >
          <div className="mb-6 rounded-lg bg-white shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-blue-800">
              Choose your room
            </h2>
            <div className="space-y-4">
              {rooms?.map((room, index) => (
                <RoomCard key={index} room={room} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
