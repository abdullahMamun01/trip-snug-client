import { Card } from "@nextui-org/card";
import { Bell, Shield, Snowflake, Car } from "lucide-react";
import React from "react";


export default function HomeFeature() {
  return (
    <div className=" w-full md:mt-[-60px] container mx-auto bg-sky-50 min-h-[250px] py-4">
      <Card className="rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur-sm container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group flex cursor-pointer flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 bg-sky-100 p-6 rounded-md">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 shadow-md transition-shadow group-hover:shadow-lg">
              <Car className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Airport transfer
            </h3>
          </div>
          <div className="group flex cursor-pointer flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 bg-sky-100 p-6 rounded-md">
            <div className="bg-sky-100rounded-full mb-4 flex h-16 w-16 items-center justify-center shadow-md transition-shadow group-hover:shadow-lg">
              <Bell className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              All inclusive
            </h3>
          </div>
          <div className="group flex cursor-pointer flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 bg-sky-100 p-6 rounded-md">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 shadow-md transition-shadow group-hover:shadow-lg">
              <Snowflake className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Air-conditioned
            </h3>
          </div>
          <div className="group flex cursor-pointer flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 bg-sky-100 p-6 rounded-md">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 shadow-md transition-shadow group-hover:shadow-lg">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Under protection
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
}
