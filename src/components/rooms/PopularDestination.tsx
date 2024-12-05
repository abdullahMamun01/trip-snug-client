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

interface Hotel {
  id: number;
  name: string;
  address: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  status: "BESTSELLER" | "FEATURED" | "POPULAR";
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "The Millennium Hilton New York",
    address: "124 E Huron St, New york",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.4,
    reviews: 30,
    price: 88.0,
    status: "BESTSELLER",
  },
  {
    id: 2,
    name: "Best Western Grant Park Hotel",
    address: "124 E Huron St, Chicago",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.4,
    reviews: 30,
    price: 58.0,
    status: "FEATURED",
  },
  {
    id: 3,
    name: "Hyatt Regency Maui Resort & Spa",
    address: "200 Nohea Kai Dr, Lahaina, HI",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.4,
    reviews: 30,
    price: 88.0,
    status: "FEATURED",
  },
  {
    id: 4,
    name: "Four Seasons Resort Maui at Wailea",
    address: "3900 Wailea Alanui Drive, Kihei, HI",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.4,
    reviews: 30,
    price: 88.0,
    status: "POPULAR",
  },
  {
    id: 4,
    name: "Four Seasons Resort Maui at Wailea",
    address: "3900 Wailea Alanui Drive, Kihei, HI",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.4,
    reviews: 30,
    price: 88.0,
    status: "POPULAR",
  },
  {
    id: 4,
    name: "Four Seasons Resort Maui at Wailea",
    address: "3900 Wailea Alanui Drive, Kihei, HI",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.4,
    reviews: 30,
    price: 88.0,
    status: "POPULAR",
  },
];

export default function PopularDestination() {
  return (
    <section className="container mx-auto  py-12">
      <div className="mb-10 text-center px-4">
        <h2 className="text-3xl font-bold text-[#1e2022]">
          Most Popular Hotel Destinations
        </h2>
      </div>

      <div className="relative px-4">
        <Carousel>
          <CarouselContent className="gap-3">
            {hotels.map((hotel) => (
              <CarouselItem key={hotel.id} className=" lg:basis-1/4 py-4">
                <Card
                  key={hotel.id}
                  className="group overflow-hidden bg-white shadow-md"
                >
                  <div className="relative">
                    <Image
                      src={PopularRoom}
                      alt={hotel.name}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <Button
                      variant="faded"
                      className="absolute right-3 top-3 h-8 w-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Badge
                      className={`absolute left-3 top-3 text-[12px] font-medium text-gray-100 ${
                        hotel.status === "BESTSELLER"
                          ? "bg-[#82ce34]"
                          : hotel.status === "FEATURED"
                            ? "rounded-md  bg-[#82ce34]"
                            : "bg-[#82ce34]"
                      } hover:${
                        hotel.status === "BESTSELLER"
                          ? "bg-[#74b92e]"
                          : hotel.status === "FEATURED"
                            ? "bg-[#74b92e]"
                            : "bg-[#74b92e]"
                      }`}
                    >
                      {hotel.status}
                    </Badge>
                  </div>
                  <CardBody className="p-5">
                    <h3 className="mb-1 line-clamp-1 text-lg font-semibold text-[#1e2022]">
                      {hotel.name}
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {hotel.address}
                    </p>
                    <div className="mb-3 flex items-center gap-2">
                      <Badge className="bg-[#ffc107] text-white hover:bg-[#ffc107]">
                        {hotel.rating}/5
                      </Badge>
                      <span className="text-sm text-orange-300">Average</span>
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
                          ${hotel.price.toFixed(2)}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          Per night
                        </div>
                      </div>
                      <Button
                        variant="solid"
                        className="text-primary hover:text-primary/90"
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
            className='absolute  left-auto top-50 w-full justify-end gap-2'
            classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
            alwaysShow
          />
        </Carousel>
      </div>
      {/* <Button className="absolute -left-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-white shadow-md md:flex">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-white shadow-md md:flex">
          <ChevronRight className="h-4 w-4" />
        </Button> */}
    </section>
  );
}
