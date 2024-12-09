"use client";

import { InfoIcon, Wifi, Coffee, Tv, Bath } from "lucide-react";

interface RoomOption {
  type: string;
  price: number;
  totalPrice: number;
  nights: number;
  extras?: {
    title: string;
    info?: string;
  };
  points: number;
  amenities: string[];
}

export default function RoomCard({ room }: { room: RoomOption }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">{room.type}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {room.amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 text-xs text-gray-600"
                >
                  {amenity === "Wifi" && <Wifi size={14} />}
                  {amenity === "Breakfast" && <Coffee size={14} />}
                  {amenity === "TV" && <Tv size={14} />}
                  {amenity === "Private bathroom" && <Bath size={14} />}
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-blue-800">
            <span className="text-sm font-medium">Accommodation only</span>
            <span className="rounded bg-blue-100 px-2 py-0.5 text-xs">
              bargain!
            </span>
          </div>

          <div className="flex items-center gap-2 text-amber-600">
            <InfoIcon size={16} />
            <span className="text-sm">Non-refundable</span>
          </div>

          {room.extras && (
            <div className="space-y-1 rounded-md bg-green-50 p-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-green-800">
                  Extra included:
                </span>
                <span className="text-sm text-green-700">
                  {room.extras.title}
                </span>
              </div>
              {room.extras.info && (
                <button className="text-sm text-green-700 hover:underline">
                  {room.extras.info}
                </button>
              )}
            </div>
          )}
        </div>

        <div className="min-w-[140px] space-y-3 text-right">
          <div className="text-sm text-gray-500">{room.nights} nights</div>
          <div>
            <div className="text-2xl font-bold text-blue-800">
              {room.price} €
            </div>
            <div className="text-sm text-gray-500">
              {room.totalPrice} €/Total
            </div>
          </div>
          <button className="mt-2 rounded bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700">
            Reserve
          </button>
          <div className="flex items-center justify-end gap-1 text-sm text-blue-600">
            <span>Earn</span>
            <span className="font-semibold">{room.points} €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
