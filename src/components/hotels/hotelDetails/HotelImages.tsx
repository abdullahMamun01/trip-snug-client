import { Button } from "@nextui-org/button"
import Image from "next/image"
import HotelImage from '@/assests/popular-hotel.jpg'
export default function HotelImages() {
  return (
    <div className="grid grid-cols-4 gap-2 mb-8">
      <div className="col-span-2 row-span-2">
        <Image
          src={HotelImage}
          alt="Main interior view"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className={`relative ${i === 3 ? "group" : ""}`}>
          <Image
             src={HotelImage}
            alt={`Property view ${i + 2}`}
            className={`w-full h-full object-cover ${
              i === 1 ? "rounded-tr-xl" : ""
            } ${i === 3 ? "rounded-br-xl" : ""}`}
          />
          {i === 3 && (
            <Button
              className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm"
              variant="flat"
            >
              31+ photos
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}