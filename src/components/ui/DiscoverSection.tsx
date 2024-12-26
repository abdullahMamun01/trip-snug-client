import React from "react";

import { ChevronRight } from "lucide-react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import ResortImage from "@/assests/resort.avif";
import { fetchRecentHotels } from "@/services/hotel.service";
import Link from "next/link";
export default async function DiscoverSection(): Promise<JSX.Element> {
  const hotels = await fetchRecentHotels();

  return (
    <section className="min-h-[50vh] bg-sky-50 px-4  py-12 dark:bg-boxdark-2 dark:text-bodydark md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-bodydark max-sm:text-center  md:text-3xl">
          Discover your new favorite stay
        </h2>
        <div className="relative">
          <div className="flex w-full flex-col items-center gap-2 space-x-4 overflow-x-auto pb-4 scrollbar-hide md:flex-row ">
            {hotels.slice(5).map((item) => (
              <Card key={item.id} isPressable className="h-[300px] w-[300px]">
                
                  <CardBody className="p-0">
                    <Image
                      alt={item.title}
                      className="z-0 h-full w-full object-cover"
                      src={item.image}
                      width={1000}
                      height={1000}
                    />
                  </CardBody>
            
                  <Link href={`/hotels/${item.id}`} className="">
                  <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 b dark:border-default-100">
                    <div className="flex flex-grow items-center gap-2">
                      <div className="flex flex-col">
                        <p className="text-tiny text-white/60">Discover</p>
                        <p className="text-small text-white">{item.title}</p>
                      </div>
                    </div>
                  </CardFooter>
                  </Link>
              </Card>
            ))}
          </div>
          <Button
            isIconOnly
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 bg-white/50 backdrop-blur-md md:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
