"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";
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
import { Delete, Edit, Plus } from "lucide-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { fetchHotels } from "@/services/hotel.service";
import TableLoadingSkeleton from "@/components/ui/skeleton/TableLoadingSkeleton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useHotelStore } from "@/stores/hotels/hotel.store";
import { IHotelUpdate } from "@/types/hotel.types";
import DeleteHotelDialog from "@/components/hotels/DeleteHotelDialog";
import { Pagination } from "@nextui-org/pagination";
import { Button } from "@nextui-org/button";

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
  const router = useRouter();
  const { setSelectedHotel, setSelectedHotelId } = useHotelStore();
  const [pageNumber,setPageNumber] = useState(1)
  const { data, isLoading } = useQuery({
    queryKey: ["dashbaord-hotels" ,pageNumber],
    queryFn: async () => await fetchHotels(`page=${pageNumber.toString()}`),
  });


  console.log(data)
  const hanldeEditHote = (hotel: IHotelUpdate) => {
    router.push("/dashboard/hotels/manage");
    setSelectedHotel(hotel);
  };
  const handleSelectHotelId = (hotelId: string) => {
    setSelectedHotelId(hotelId);
  };

  const handlePageChange  = (value:Number) => {
    setPageNumber(value as number)
  }

  const hotels = data?.hotels || [];

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Hotels" />
      </div>
      <div className="my-4 grid grid-cols-12 gap-4">
        <Input
          placeholder="hotel search"
          className="w-full col-span-10"
          variant="faded"
          classNames={{}}
        />
        <div className="w-full col-span-2">
          <Button onClick={() => router.push('/dashboard/hotels/manage')} className="bg-blue-600 text-white"> <Plus/> Add Hotel</Button>
        </div>
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
                    src={hotel.images[0]}
                    width="100"
                    height="1000"
                    alt={hotel.title}
                    className="h-15 w-15 rounded-md object-contain"
                  />
                </TableCell>
                <TableCell className="font-semibold text-gray-700">
                  {hotel.title}
                </TableCell>

                <TableCell className="font-medium">
                  {hotel.location.country}
                </TableCell>
                <TableCell className="text-center font-medium">
                  {hotel.pricePerNight}
                </TableCell>
                <TableCell className="text-center font-medium">
                  {hotel.totalRooms}
                </TableCell>
                <TableCell className="font-medium">
                  {hotel.contactInfo}
                </TableCell>
                <TableCell>
                  <button onClick={() => hanldeEditHote(hotel)}>
                    <MdEdit className="h-6 w-6 text-blue-500" />
                  </button>
                </TableCell>
                <TableCell>
                  <DeleteHotelDialog>
                    <button onClick={() => handleSelectHotelId(hotel.id)}>
                      <MdDelete className="h-6 w-6 text-red-500" />
                    </button>
                  </DeleteHotelDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-center py-4">
          {data?.hotels && (
            <Pagination
              isCompact
              showControls
              total={data?.totalPage as number}
              initialPage={1}
              className="p-4"
              onChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
