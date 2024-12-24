import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import PopularRoom from "@/assests/popular-hotel.jpg";
import Badge from "../ui/Badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../ui/carousel/Carousel";
import { fetchTopRatedHotel } from "@/services/hotel.service";


export type RatingType = "Best" | "Better" | "Average" | "Poor";

export const getRatingType = (rating: number): RatingType => {
  if (rating === 5) {
    return "Best";
  } else if (rating === 4) {
    return "Better";
  } else if (rating === 3) {
    return "Average";
  } else {
    return "Poor";
  }
};


export default async function PopularDestination() {
  const hotels = await fetchTopRatedHotel();
  return (
    <section className=" mx-auto max-sm:container py-12">
      <div className="mb-10  text-center ">
        <h2 className="text-3xl font-bold text-[#1e2022] dark:text-gray-400">
          Most Popular Hotel Destinations
        </h2>
      </div>

      <div className="relative px-4 container mx-auto">
        <Carousel>
          <CarouselContent className="gap-3 ">

              {hotels.data.map((hotel) => (
                <CarouselItem key={hotel.id} className=" py-4 lg:basis-1/4">
                  <Card
                    
                    className="group overflow-hidden border-x dark:border dark:border-boxdark-2  dark:bg-boxdark-2 dark:text-bodydark  shadow-xl"
                  >
                    <div className="relative">
                      <Image
                        src={hotel?.images[0]}
                        alt={hotel.title}
                        width={500}
                        height={500}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <Button
                        variant="faded"
                        className="absolute right-3 top-3 h-8 w-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Badge
                      className={`absolute left-3 top-3 text-[12px] font-medium text-gray-100  ${
                        getRatingType(hotel.rating) === 'Best'
                          ? "bg-[#82ce34]"
                          : getRatingType(hotel.rating) === "Better"
                            ? "rounded-md  bg-[#82ce34]"
                            : "bg-[#82ce34]"
                      } hover:${
                        getRatingType(hotel.rating) === "Average"
                          ? "bg-[#74b92e]"
                          : getRatingType(hotel.rating)=== "Poor"
                            ? "bg-[#74b92e]"
                            : "bg-[#74b92e]"
                      }`}
                    >
                      {getRatingType(hotel.rating)}
                    </Badge>
                    </div>
                    <CardBody className="p-5">
                      <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-[#1e2022] dark:text-gray-200">
                        {hotel.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 text-sm">
                        {hotel.location.address}
                      </p>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge className="bg-[#ffc107] text-white hover:bg-[#ffc107]">
                          {hotel.rating}/5
                        </Badge>
                        <span className="text-sm text-orange-300">{getRatingType(hotel.rating)}</span>
                        <span className="text-muted-foreground text-sm">
                          ({hotel.reviews} Reviews)
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-muted-foreground text-sm">
                            From
                          </div>
                          <div className="text-lg font-semibold text-[#1e2022]">
                            ${hotel.pricePerNight.toFixed(2)}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            Per night
                          </div>
                        </div>
                        <Button
                          variant="solid"
                          className="text-primary hover:text-primary/90 dark:bg-[#1A222C] dark:border dark:border-gray-400"
                        >
                          See details
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </CarouselItem>
              ))}

          </CarouselContent>
          <CarouselNavigation
            className="absolute  left-auto top-50 w-full justify-end gap-2"
            classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
            alwaysShow
          />
        </Carousel>
      </div>
    </section>
  );
}
