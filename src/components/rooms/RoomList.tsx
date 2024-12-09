'use client'

import RoomCard from "./RoomCard"


const roomOptions = [
  {
    type: "Classic Room",
    price: 237.43,
    totalPrice: 1424.59,
    nights: 6,
    points: 24.36,
    amenities: ['Wifi', 'TV', 'Private bathroom', 'Breakfast']
  },
  {
    type: "Classic Room with City View",
    price: 248.49,
    totalPrice: 1490.96,
    nights: 6,
    extras: {
      title: "Bangkok Street Art and Food - Half-Day Walking Tour",
      info: "More info"
    },
    points: 25.5,
    amenities: ['Wifi', 'TV', 'Private bathroom', 'Breakfast']
  },
  {
    type: "Deluxe Room",
    price: 251.24,
    totalPrice: 1507.42,
    nights: 6,
    extras: {
      title: "Cycle The Narrow Alleways of Chinatown",
      info: "More info"
    },
    points: 25.78,
    amenities: ['Wifi', 'TV', 'Private bathroom', 'Breakfast']
  }
]

export default function RoomList() {
  return (
    <div className="space-y-4">
      {roomOptions.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  )
}

