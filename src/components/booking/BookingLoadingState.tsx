import { Card } from "@nextui-org/card";
import { Spinner } from "@nextui-org/spinner";
import { Hotel } from "lucide-react";
import React from "react";

export default function BookingLoadingState() {
  return (
    <div className="min-h-10 flex justify-center w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">


    <Card className="w-full max-w-5xl rounded-xl  p-8 shadow-lg">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-100 opacity-20" />
          <Hotel className="relative z-10 h-16 w-16 text-blue-600" />
        </div>

        <Spinner />

        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Confirming Your Booking
          </h2>
          <p className="text-gray-600">
            Please wait while we secure your reservation...
          </p>
        </div>

        <div className="h-2 w-full max-w-[200px] overflow-hidden rounded-full bg-gray-100">
          <div className="animate-progress h-full rounded-full bg-blue-600" />
        </div>
      </div>
    </Card>
    </div>
  );
}
