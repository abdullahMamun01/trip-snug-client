"use client";

import { Button } from "@nextui-org/button";
import { TableCell, TableRow } from "@nextui-org/table";
import { bookingStatus } from "@/lib/date";
import { IReservation } from "@/types/booking.type";

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

const BookingTableRow = ({ booking }: { booking: IReservation }) => {
  const status = bookingStatus(booking.checkInDate, booking.checkOutDate);
  return (
    <TableRow >
      <TableCell>{booking.room.title}</TableCell>
      <TableCell>${booking.totalPrice}</TableCell>
      <TableCell>${booking.totalPrice}</TableCell>
      <TableCell className="text-center">{booking.duration}</TableCell>
      <TableCell>
        <span
          className={`rounded-md p-0.5 px-1 text-default-400 ${getStatusStyles(
            status,
          )}`}
        >
          {status}
        </span>
      </TableCell>
      <TableCell>
        <Button size="sm" color="primary" variant="flat">
          cancel
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default BookingTableRow;
