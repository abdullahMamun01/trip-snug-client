'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@nextui-org/button"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table"
import { Avatar } from "@nextui-org/avatar"

interface Booking {
  id: number
  roomName: string
  unitPrice: number
  price: number
  discount: number
  daysBooked: number
  daysLeft: number
  checkIn: string
  image: string
}

interface TimeLeft {
  [key: number]: string
}


const bookings: Booking[] = [
    {
      id: 1,
      roomName: "Executive Room",
      unitPrice: 200,
      price: 184,
      discount: 8,
      daysBooked: 1,
      daysLeft: 5,
      checkIn: "2024-02-20",
      image: "/placeholder.svg?height=32&width=32"
    },
    {
      id: 2,
      roomName: "Luxury Villa",
      unitPrice: 500,
      price: 400,
      discount: 20,
      daysBooked: 1,
      daysLeft: 12,
      checkIn: "2024-03-01",
      image: "/placeholder.svg?height=32&width=32"
    },
    {
      id: 3,
      roomName: "Deluxe Suite",
      unitPrice: 100,
      price: 552,
      discount: 8,
      daysBooked: 6,
      daysLeft: 0,
      checkIn: "2024-01-15",
      image: "/placeholder.svg?height=32&width=32"
    }
  ]
export default function BookingList() {
  const [activeTab, setActiveTab] = useState<string>("bookings")
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({})



  useEffect(() => {
    const calculateTimeLeft = () => {
      const times: TimeLeft = {}
      bookings.forEach(booking => {
        const difference = new Date(booking.checkIn).getTime() - new Date().getTime()
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
          const minutes = Math.floor((difference / 1000 / 60) % 60)
          times[booking.id] = `${days}d ${hours}h ${minutes}m`
        }
      })
      setTimeLeft(times)
    }

    const timer = setInterval(calculateTimeLeft, 60000)
    calculateTimeLeft()

    return () => clearInterval(timer)
  }, [bookings])

  const totalSpent = bookings.reduce((sum, booking) => sum + booking.price, 0)

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Booking History</h1>
            
          </div>
          <Button color="primary">Book New Room</Button>
        </div>

        <Table aria-label="Bookings table" className="mt-4">
          <TableHeader>
            <TableColumn>ROOM NAME</TableColumn>
            <TableColumn>UNIT PRICE</TableColumn>
            <TableColumn>PRICE</TableColumn>
            <TableColumn>DISCOUNT</TableColumn>
            <TableColumn>NO. DAYS BOOKED</TableColumn>
            <TableColumn>TIME UNTIL CHECK-IN</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <Avatar
                    name={booking.roomName}
                  />
                </TableCell>
                <TableCell>${booking.unitPrice}</TableCell>
                <TableCell>${booking.price}</TableCell>
                <TableCell>${booking.discount}</TableCell>
                <TableCell>{booking.daysBooked}</TableCell>
                <TableCell>
                  {timeLeft[booking.id] ? (
                    <div className="text-primary font-medium">{timeLeft[booking.id]}</div>
                  ) : (
                    <span className="text-default-400">Completed</span>
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    color="primary"
                    variant="flat"
                    disabled={!timeLeft[booking.id]}
                  >
                    {timeLeft[booking.id] ? "Cancel" : "Rate"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
