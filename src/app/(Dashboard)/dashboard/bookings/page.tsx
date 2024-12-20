"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableLoadingSkeleton from "@/components/ui/skeleton/TableLoadingSkeleton";
import UserAvatar from "@/components/user/UserAvatar";
import useUserRoleUpdate from "@/hooks/useUserRoleUpdate";
import { formatDate } from "@/lib/date";
import { fetchBookings } from "@/services/booking.service";
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
import React from "react";
const columns = [
  {
    key: "user",
    label: "User",
  },
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
export default function DashboardBookingsPage() {
  const { token } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await fetchBookings(token as string),
  });
  const { mutateAsync, isPending } = useUserRoleUpdate();
  const bookings =
    data?.data.map((booking) => ({
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

  const statusColor = (status: string): React.JSX.Element => {
    switch (status.toLowerCase()) {
      case "pending":
        return <Chip className="text-gray-600"  size="sm">{status}</Chip>; //"bg-yellow-500 text-white"
      case "confirmed":
        return (
          <Chip color="primary" className="text-white"  size="sm">
            {status}
          </Chip>
        );
      case "inprogress":
        return (
          <Chip color="warning" className="text-gray-50"  size="sm">
            {status}
          </Chip>
        );
      case "completed":
        return (
          <Chip color="success" className="text-green-300"  size="sm">
            {status}
          </Chip>
        );
      default:
        return (
          <Chip color="primary" className="text-white">
            {status}
          </Chip>
        );
    }
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen">
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Bookings" />
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
                    {booking.user.firstName} {booking.user.lastName}
                  </TableCell>

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
                    {statusColor(booking.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </DefaultLayout>
  );
}
