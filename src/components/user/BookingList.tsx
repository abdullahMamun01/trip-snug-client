"use client";
import { use, useState } from "react";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";

import useAuth from "@/stores/auth.store";
import { useQuery } from "@tanstack/react-query";
import { myBookings } from "@/services/bookint.service";
import Loader from "../Dashboard/common/Loader";
import { bookingStatus, isTimeOver } from "@/lib/date";
import ReviewHotelForm from "../form/ReviewHotelForm";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { MdCancel } from "react-icons/md";
import CancelBookingModal from "../booking/CancelBookingModal";
import { useSearchParams } from "next/navigation";
import PaginationComponent from "../PaginationComponent";

const getStatusStyles = (status: string) => {
  switch (status) {
    case "upcoming":
      return "bg-blue-100 text-blue-800";
    case "running":
      return "bg-green-100 text-green-800";
    case "completed":
      return "bg-gray-100 text-gray-800";
  }
};

export default function BookingList() {
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
  const [hotelId , setHotelId] = useState('')
  const { token, user } = useAuth();
  const queryParams  = useSearchParams()
  const { data, isLoading } = useQuery({
    queryKey: ["bookings", user?.id , queryParams.toString()],
    queryFn: async () => await myBookings( queryParams.toString(),token as string),
  });

  if (isLoading) {
    return <Loader />;
  }

  console.log(data?.data)

  const handleReviewModal = (hotelId:string) => {
    setHotelId(hotelId)
    onOpen()
  }
  
  const bookings  = data?.data.bookings || [];
  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Booking History</h1>
          </div>
          <Button color="primary">Book New Room</Button>
        </div>

      {/* user reivew modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Write a Review 
                </ModalHeader>
                <ModalBody>
                  <ReviewHotelForm onClose={onClose} hotelId={hotelId}/>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>

        <Table aria-label="Bookings table" className="mt-4">
          <TableHeader>
            <TableColumn>ROOM NAME</TableColumn>
            <TableColumn>PER NIGHT</TableColumn>
            <TableColumn>PRICE</TableColumn>
            <TableColumn>NO. DAYS BOOKED</TableColumn>
            <TableColumn>TIME UNTIL CHECK-IN</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.room.title}</TableCell>
                <TableCell>${booking.totalPrice}</TableCell>
                <TableCell>${booking.totalPrice}</TableCell>
                <TableCell className="text-center">
                  {booking.duration}
                </TableCell>
                <TableCell>
                  <span
                    className={`rounded-md p-0.5 px-1 text-default-400 ${getStatusStyles(bookingStatus(booking.checkInDate, booking.checkOutDate))}`}
                  >
                    {bookingStatus(booking.checkInDate, booking.checkOutDate)}
                  </span>
                </TableCell>
                <TableCell>
                  {bookingStatus(booking.checkInDate, booking.checkOutDate) ===
                  "upcoming" ? (
                    <CancelBookingModal bookingId={booking.id} />
                  ) : (
                    <Button onClick={() => handleReviewModal(booking.hotel)} size="sm" color="primary" variant="flat">
                      review
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-6 w-full flex items-center justify-center">
        <PaginationComponent totalPage={data?.data.totalPage as number || 1}/>
      </div>
    </div>
  );
}
