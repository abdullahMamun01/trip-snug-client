"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { Input } from "@nextui-org/input";
import { Delete, Edit } from "lucide-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { fetchHotels } from "@/services/hotel.service";
import TableLoadingSkeleton from "@/components/ui/skeleton/TableLoadingSkeleton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useHotelStore } from "@/stores/hotels/hotel.store";


const columns = [
  {
    key: "image",
    label: "IMAGE",
  },
  {
    key: "name",
    label: "Hotel",
  },
  {
    key: "country",
    label: "Country",
  },
  {
    key: "price",
    label: "Price Per Night",
  },
  {
    key: "rooms",
    label: "rooms",
  },
  {
    key: "contact",
    label: "Contact info",
  },
  {
    key: "edit",
    label: "Edit",
  },
  {
    key: "delet",
    label: "Delete",
  },
];
export default function HotelsDashboardPage() {
  const router = useRouter()
  const {setHotel} = useHotelStore()
  const { data, isLoading } = useQuery({
    queryKey: ["dashbaord-hotels"],
    queryFn: async () => await fetchHotels(""),
  });

  const hanldeEditHote = () => {
    router.push('/dashboard/hotels/manage')
    setHotel('hello i am from hotel list')
  }
  const hotels =
    data?.hotels.map((hotel) => ({
      id: hotel.id,
      name: hotel.title,
      image: hotel.images[0],
      country: hotel.location.country,
      contact: hotel.contactInfo,
      price: hotel.pricePerNight,
      room: hotel.availableRooms,
    })) || [];
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Hotels" />
      </div>
      <div className="my-4">
        <Input
          placeholder="hotel search"
          className="w-3/4 "
          variant="faded"
          classNames={{}}
        />
      </div>
      <div>
        <div>{isLoading && <TableLoadingSkeleton />}</div>
        <Table aria-label="Example table with dynamic content ">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>

          <TableBody className="">
            {hotels.map((hotel) => (
              <TableRow key={hotel.id} className="divide-y">
                <TableCell>
                  <Image
                    src={hotel.image}
                    width="100"
                    height="1000"
                    alt={hotel.name}
                    className="h-15 w-15 rounded-md object-contain"
                  />
                </TableCell>
                <TableCell className="text-gray-700 font-semibold">{hotel.name}</TableCell>

                <TableCell className="font-medium">{hotel.country}</TableCell>
                <TableCell className="text-center font-medium">{hotel.price}</TableCell>
                <TableCell className="text-center font-medium">{hotel.room}</TableCell>
                <TableCell className="font-medium">{hotel.contact}</TableCell>
                <TableCell>
                  <button onClick={hanldeEditHote}>
                    <MdEdit className="h-6 w-6 text-blue-500" />
                  </button>
                </TableCell>
                <TableCell>
                  <button>
                    <MdDelete className="h-6 w-6 text-red-500" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DefaultLayout>
  );
}
