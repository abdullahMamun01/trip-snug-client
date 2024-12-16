"use client";
import getDateWithOffset, {
  calculateDayDifference,
  formatDate,
} from "@/lib/date";
import useAuth from "@/stores/auth.store";
import useBookingStore from "@/stores/booking.store";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Calendar, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
interface IPorps {
  price: number;
}

export default function HotelPricingCard({ price = 20 }: IPorps) {
  const { user } = useAuth();
  const { booking } = useBookingStore();
  const queryParams = useSearchParams();
  const checkIn = new Date(queryParams.get("checkIn") as string);
  const checkOut = new Date(queryParams.get("checkOut") as string);
  return (
    <div className="sticky top-10 w-full border-l p-4 lg:w-[400px] lg:p-6">
      <Card>
        <CardBody className="p-6">
          <div className="mb-6 flex items-center gap-2">
            {booking && (
              <h2 className="line-clamp-1 text-lg font-semibold text-blue-500">
                {booking.roomName}{" "}
                <span className="text-sm text-orange-500">
                  ({booking.roomType})
                </span>
              </h2>
            )}
          </div>
          <div className="space-y-6 border-t py-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <div>
                <div>
                  {formatDate(checkIn)}{" "}
                  <ArrowRight className="inline h-4 w-4" />{" "}
                  {formatDate(checkOut)}
                </div>
                <div className="text-sm">
                  {calculateDayDifference(checkIn, checkOut)} night
                </div>
              </div>
            </div>

            {booking && (
              <>
                <div className="flex items-center gap-2 border-t py-3 text-gray-600 ">
                  <User className="h-5 w-5" />
                  {booking?.guest?.adults && (
                    <span>{booking.guest.adults} adult</span>
                  )}
                  {booking?.guest?.children && (
                    <span>{booking?.guest.children} children</span>
                  )}
                </div>
                <div className="space-y-2 text-sm text-gray-600 ">
                  <div className="flex items-center justify-between">
                    <span className="uppercase text-gray-600"> Per Night</span>
                    <span className="font-semibold">
                      {booking?.pricePerNight}$
                    </span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-semibold">TOTAL</span>
                    <span className="text-xl font-bold">
                      {booking?.totalPrice}$
                    </span>
                  </div>
                  {/* <div className="text-right text-sm text-gray-500">
                i.e. 20176,82$
              </div> */}
                </div>
                <Link href='/booking'>
                  <Button className="w-full bg-blue-700 text-gray-50 hover:bg-blue-600">
                    Continue
                  </Button>
                </Link>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
