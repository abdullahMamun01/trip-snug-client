import { Button } from "@nextui-org/button"
import { Card } from "@nextui-org/card"
import { Heart, Search, ChevronLeft, ChevronRight, Waves, PenTool } from "lucide-react"
import Image from "next/image"
import HotelImage from '@/assests/popular-hotel.jpg'

export default function HotelsCard() {
  return (
    <div className="flex-1 space-y-4">
    {[
      {
        name: "Brasada Ranch",
        location: "Powell Butte",
        rating: 9.4,
        reviews: 235,
        price: 205,
        originalPrice: 279,
        discount: 147,
        amenities: ["Pool", "Hot tub"],
        image: "/placeholder.svg?height=200&width=300",
        earn: 8.22,
      },
      {
        name: "Cabin 75 Brasada Ranch+ Hot Tub and Golf",
        location: "Powell Butte",
        type: "Entire home",
        details: "Sleeps 5, 2 bedrooms, 2 bathrooms",
        price: 317,
        totalPrice: 1119,
        amenities: ["Pool", "Kitchen", "Washer and dryer"],
        image: "/placeholder.svg?height=200&width=300",
        earn: 12.68,
      },
      {
        name: "Family Friendly, luxurious cabin on the golf course",
        location: "Powell Butte",
        type: "Entire home",
        details: "Sleeps 6, 2 bedrooms, 2 bathrooms",
        rating: 10,
        reviews: 70,
        price: 206,
        totalPrice: 792,
        amenities: ["Pool", "Kitchen", "Washer and dryer"],
        image: "/placeholder.svg?height=200&width=300",
        earn: 8.24,
      },
      {
        name: "Family Friendly, luxurious cabin on the golf course",
        location: "Powell Butte",
        type: "Entire home",
        details: "Sleeps 6, 2 bedrooms, 2 bathrooms",
        rating: 10,
        reviews: 70,
        price: 206,
        totalPrice: 792,
        amenities: ["Pool", "Kitchen", "Washer and dryer"],
        image: "/placeholder.svg?height=200&width=300",
        earn: 8.24,
      },
      {
        name: "Family Friendly, luxurious cabin on the golf course",
        location: "Powell Butte",
        type: "Entire home",
        details: "Sleeps 6, 2 bedrooms, 2 bathrooms",
        rating: 10,
        reviews: 70,
        price: 206,
        totalPrice: 792,
        amenities: ["Pool", "Kitchen", "Washer and dryer"],
        image: "/placeholder.svg?height=200&width=300",
        earn: 8.24,
      },
        {
        name: "Family Friendly, luxurious cabin on the golf course",
        location: "Powell Butte",
        type: "Entire home",
        details: "Sleeps 6, 2 bedrooms, 2 bathrooms",
        rating: 10,
        reviews: 70,
        price: 206,
        totalPrice: 792,
        amenities: ["Pool", "Kitchen", "Washer and dryer"],
        image: "/placeholder.svg?height=200&width=300",
        earn: 8.24,
      },
    ].map((property) => (
      <Card key={property.name} className="overflow-hidden border border-gray-200 shadow-none">
        <div className="grid md:grid-cols-[320px_1fr]">
          <div className="relative">
            <Image
              alt={property.name}
              className="object-cover w-full h-full"
              src={HotelImage}
            />
            <Button
              isIconOnly
              className="absolute top-2 right-2 bg-white/90 border-none"
              radius="full"
              size="sm"
            >
              <Heart className="w-5 h-5" />
            </Button>
            <div className="absolute bottom-2 left-2 right-2 flex justify-between">
              <Button isIconOnly size="sm" variant="flat" className="bg-black/40 text-white">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button isIconOnly size="sm" variant="flat" className="bg-black/40 text-white">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{property.name}</h3>
                <p className="text-sm">{property.location}</p>
                {property.type && (
                  <>
                    <p className="text-sm">{property.type}</p>
                    <p className="text-sm">{property.details}</p>
                  </>
                )}
                
                <div className="flex gap-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-1 text-sm">
                      {amenity === "Pool" && <PenTool className="w-4 h-4" />}
                      {amenity === "Kitchen" && <PenTool className="w-4 h-4" />}
                      {amenity === "Hot tub" && <Waves className="w-4 h-4" />}
                      {amenity}
                    </div>
                  ))}
                </div>

                {property.rating && (
                  <div className="inline-flex items-center bg-green-100 rounded px-2 py-1">
                    <span className="font-semibold text-green-700">{property.rating}</span>
                    <span className="mx-1 text-green-700">•</span>
                    <span className="text-green-700">Exceptional</span>
                    <span className="ml-1 text-sm text-gray-600">{property.reviews} reviews</span>
                  </div>
                )}

                <div>
                  <p className="text-green-600">Fully refundable</p>
                  <p className="text-sm">Earn ${property.earn} in OneKeyCash</p>
                </div>
              </div>

              <div className="text-right">
                {property.discount && (
                  <span className="inline-block bg-green-700 text-white text-sm px-2 py-1 rounded mb-1">
                    ${property.discount} off
                  </span>
                )}
                {property.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">${property.originalPrice}</p>
                )}
                <p className="text-2xl font-bold">${property.price}</p>
                <p className="text-sm text-gray-500">
                  ${property.totalPrice || property.price * 2.5} total
                </p>
                <p className="text-xs text-gray-500">includes taxes & fees</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    ))}
  </div>
  )
}
