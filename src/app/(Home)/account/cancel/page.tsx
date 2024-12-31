"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableLoadingSkeleton from "@/components/ui/skeleton/TableLoadingSkeleton";
import UserAvatar from "@/components/user/UserAvatar";
import useUserRoleUpdate from "@/hooks/useUserRoleUpdate";
import { formatDate } from "@/lib/date";
import { fetchBookings, fetchCancelBookings, myCancelBookings } from "@/services/booking.service";
import { fetchAllUser } from "@/services/user.service";
import useAuth from "@/stores/auth.store";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";
const columns = [
  {
    key: "hotel",
    label: "HotelName",
  },
  {
    key: "room",
    label: "Room Type",
  },
  {
    key: "check In",
    label: "Check In",
  },
  {
    key: "check Out",
    label: "Check Out",
  },
  {
    key: "amount",
    label: "Total Pay",
  },
  {
    key: "status",
    label: "Booking status",
  },
];
export default function DashboardCancelBookingsPage() {
  const queryParams = useSearchParams;
  const { token ,user} = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["cancel-bookings",user?.id, queryParams.toString()],
    queryFn: async () =>
      await myCancelBookings(queryParams.toString(), token as string),
  });
  console.log(data)
  const bookings =
    data?.data?.bookings.map((booking) => ({
      id: booking.id,
      hotel: booking.hotel.title,
      user: booking.user,
      room: booking.room.title,
      status: booking.status,
      amount: booking.totalPrice,
      totalRooms: booking.roomsAllocated,
      checkin: booking.checkInDate,
      checkout: booking.checkOutDate,
    })) || [];

  return (
    <>
      <div className="min-h-screen">
        <div className="my-2">
          <div>
            <h1 className="text-2xl font-bold text-primary">Cancel Booking History</h1>
          </div>
        </div>
        {isLoading ? (
          <TableLoadingSkeleton />
        ) : (
          <Table aria-label="Example table with dynamic content ">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-md text-gray-500">
                    {booking.hotel}
                  </TableCell>
                  <TableCell className="font-md text-gray-500">
                    {booking.room}
                  </TableCell>
                  <TableCell className="font-md text-gray-500">
                    {formatDate(new Date(booking.checkin))}
                  </TableCell>
                  <TableCell className="font-md text-gray-500">
                    {formatDate(new Date(booking.checkout))}
                  </TableCell>
                  <TableCell className="font-md text-gray-500">
                    {booking.amount}
                  </TableCell>
                  <TableCell className="font-md text-gray-500">
                    <Chip color="warning">{booking.status}</Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
}
