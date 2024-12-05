import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import {
  Bath,
  Bed,
  Book,
  BookUser,
  ChevronLeft,
  ChevronRight,
  Grid2x2Check,
  MapPin,
  Save,
  Square,
  Tv,
  User,
  Users,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import Room from "@/assests/room-1.avif";
interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  adults: number;
  size: number;
  price: number;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe room",
    description:
      "Spacious and elegant room with modern amenities, perfect for families or groups.",
    image: "/placeholder.svg?height=300&width=400",
    adults: 4,
    size: 95,
    price: 49,
  },
  {
    id: 2,
    name: "Standard Room",
    description:
      "Comfortable and cozy room with essential amenities for a pleasant stay.",
    image: "/placeholder.svg?height=300&width=400",
    adults: 2,
    size: 50,
    price: 29,
  },
  {
    id: 3,
    name: "Double Room",
    description:
      "Well-appointed room with modern decor and all necessary amenities.",
    image: "/placeholder.svg?height=300&width=400",
    adults: 2,
    size: 35,
    price: 39,
  },
  {
    id: 3,
    name: "Double Room",
    description:
      "Well-appointed room with modern decor and all necessary amenities.",
    image: "/placeholder.svg?height=300&width=400",
    adults: 2,
    size: 35,
    price: 39,
  },
];

export default function FeatureRooms() {
  return (
    <div className="container mx-auto py-8 dark:bg-boxdark-2 dark:text-bodydark" >
      <div className="mb-12 text-center px-4">
        <h2 className="mb-4 text-3xl font-bold">Our Best Rooms</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Experience luxury and comfort in our carefully designed rooms. Each
          room is equipped with modern amenities to ensure a pleasant stay.
        </p>
        <Button variant="solid" className="mt-4 w-32 bg-blue-600 text-white rounded-s-full rounded-e-full">
          All rooms
        </Button>
      </div>
      <div className="relative px-1">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden bg-white dark:bg-boxdark-2 dark:text-bodydark">
              <div className="relative aspect-[4/3] ">
                <Image
                  src={Room}
                  alt={room.name}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <CardBody className="p-6">
                <div className="mb-4 flex items-center gap-4 rounded-md dark:shaodow-md bg-sky-100 p-2 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Adults:{room.adults}
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    Size: {room.size}ft²
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{room.name}</h3>
                <p className="mb-4 text-sm text-gray-500 ">
                  {room.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold text-[#4CAF50]">
                      €{room.price}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">
                      per night
                    </span>
                  </div>
                  <Button className="rounded-e-full rounded-s-full bg-[#4759E6] text-white hover:bg-[#4759E6]/90">
                    <Book className="" /> Book
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
