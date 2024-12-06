import React from "react"

import { ChevronRight } from "lucide-react"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import Image from "next/image"
import { Button } from "@nextui-org/button"
import ResortImage from "@/assests/resort.avif"
import { fetchRecentHotels } from "@/services/hotel.service"
export default async function DiscoverSection() {
  const hotels = await fetchRecentHotels()

  return (
    <section className="py-12 px-4 md:px-6  min-h-[50vh] bg-sky-50 dark:bg-boxdark-2 dark:text-bodydark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8  dark:text-bodydark">
          Discover your new favorite stay
        </h2>
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide ">
            {hotels.slice(5).map((item) => (
              <Card
                key={item.id}
                isPressable
                className="w-[300px] h-[300px]"
              >
                <CardBody className="p-0">
                  <Image
                
                    alt={item.title}
                    className="z-0 w-full h-full object-cover"
                    src={item.image}
                    width={1000}
                    height={1000}
                  />
                </CardBody>
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">Discover</p>
                      <p className="text-small text-white">{item.title}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button
            isIconOnly
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-md hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}