"use client";
import useAuth from "@/stores/auth.store";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import {
  Info,
  Calendar,
  Check,
  Link,
  ArrowRight,
  MoveRight,
  User,
  Clock,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
interface IPorps {
  price: number;
}
export default function HotelPricingCard({ price = 20 }: IPorps) {
  const { user } = useAuth();
  const queryParams = useSearchParams();
  const adults = queryParams.get("adults");
  const children = queryParams.get("children");

  return (
    <div className="sticky top-10 w-full border-l p-4 lg:w-[400px] lg:p-6">
      <Card>
        <CardBody className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-lg font-semibold">Business Suite</h2>
          </div>
          <div className="space-y-6 border-t py-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <div>
                <div>
                  December 13, 2024 <ArrowRight className="inline h-4 w-4" />{" "}
                  December 14, 2024
                </div>
                <div className="text-sm">1 night</div>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t py-3 text-gray-600 ">
              <User className="h-5 w-5" />
              {adults && <span>{adults} adult</span>}
              {children && <span>{children} children</span>}
            </div>
            <div className="space-y-2 text-sm text-gray-600 ">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 uppercase"> Per Night</span>
                <span className="font-semibold">201,48$</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-semibold">TOTAL</span>
                <span className="text-xl font-bold">237,74$</span>
              </div>
              <div className="text-right text-sm text-gray-500">
                i.e. 20176,82$
              </div>
            </div>

            <Button className="w-full bg-blue-700 text-gray-50 hover:bg-blue-600">
              Continue
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
