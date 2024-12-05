import Image from 'next/image'
import HotelImage1 from '@/assests/resort.avif'
import HotelImage2 from '@/assests/resort-feature.jpg'
import HotelImage3 from '@/assests/popular-hotel.jpg'

const hotelImages = [HotelImage1, HotelImage2, HotelImage3]

export default function BookingImages() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      {hotelImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Hotel room ${index + 1}`}
          width={500}
          height={500}
          className="object-cover rounded-lg w-90 h-64"
        />
      ))}
    </div>
  )
}
