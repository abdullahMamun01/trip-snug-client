"use client";

import { getAmenityIcon } from "@/lib/amenities";
import { IRoom } from "@/types/room.types";
import { Button } from "@nextui-org/button";
import { InfoIcon, Wifi, Coffee, Tv, Bath } from "lucide-react";

export default function RoomCard({ room }: { room: IRoom }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              {room?.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {room?.amenities?.map((amenity, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 text-xs text-gray-600"
                >
                  {amenity === "Wifi" && <Wifi size={14} />}
                  {amenity === "Breakfast" && <Coffee size={14} />}
                  {amenity === "TV" && <Tv size={14} />}
                  {amenity === "Private bathroom" && <Bath size={14} />}
                  {amenity}
                  {getAmenityIcon(amenity)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-blue-800">
            <span className="text-sm font-medium">Room Type</span>
            <span className="rounded bg-blue-100 px-2 py-0.5 text-xs">
              {room.roomType}
            </span>
          </div>
          <div className="flex items-center gap-2 text-amber-600">
            <InfoIcon size={16} />
            <span className="text-sm">Non-refundable</span>
          </div>

          {room?.description && (
            <div className="space-y-1 rounded-md bg-gray-50 p-3">
              <div className="">
                <span className="mr-2 text-start text-sm font-medium text-blue-500">
                  Description:
                </span>
                <span className="text-sm text-gray-700">
                  {room.description}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="min-w-[140px] space-y-3 text-right">
          <div className="text-sm text-gray-500">{room.totalNight} nights</div>
          <div>
            <div className="text-2xl font-bold text-blue-800">
              {room.pricePerNight} $
            </div>
            <div className="text-sm text-gray-500">
              {room.totalPrice} $/Total
            </div>
          </div>

          {room.status === "soldout" ? (
            <div className="rounded-md bg-red-100 px-2 text-center py-2 font-semibold text-red-800">
              Sold Out
            </div>
          ) : (
            <Button className="mt-2 rounded bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700">
              Reserve
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
