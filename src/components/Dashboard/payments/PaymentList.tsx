"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Input } from "@nextui-org/input";
import { Delete, Edit, Plus } from "lucide-react";
import { MdDelete, MdEdit } from "react-icons/md";
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
    key: "user",
    label: "User",
  },
  {
    key: "rating",
    label: "Rating",
  },
  {
    key: "review",
    label: "Review",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "edit",
    label: "Edit",
  },
  {
    key: "delete",
    label: "Delete",
  },
];

const dummyReviews = [
  {
    id: 1,
    hotel: {
      id: 1,
      name: "Hotel 1",
      image: "https://picsum.photos/200/300",
    },
    user: {
      id: 1,
      name: "John Doe",
    },
    rating: 4,
    review: "This hotel is amazing",
    createdAt: new Date(),
  },
  {
    id: 2,
    hotel: {
      id: 2,
      name: "Hotel 2",
      image: "https://picsum.photos/200/301",
    },
    user: {
      id: 2,
      name: "Jane Doe",
    },
    rating: 3,
    review: "This hotel is good",
    createdAt: new Date(),
  },
  {
    id: 3,
    hotel: {
      id: 3,
      name: "Hotel 3",
      image: "https://picsum.photos/200/302",
    },
    user: {
      id: 3,
      name: "Bob Smith",
    },
    rating: 5,
    review: "This hotel is the best",
    createdAt: new Date(),
  },
];

export default function ReviewList() {
  const [pageNumber,setPageNumber] = useState(1)
  const reviews = dummyReviews;

  const handlePageChange  = (value:Number) => {
    setPageNumber(value as number)
  }

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Reviews" />
      </div>
      <div className="my-4 grid grid-cols-12 gap-4">
        <Input
          placeholder="review search"
          className="w-full col-span-10"
          variant="faded"
          classNames={{}}
        />
        <div className="w-full col-span-2">
          <Button className="bg-blue-600 text-white"> <Plus/> Add Review</Button>
        </div>
      </div>
      <div>
        <Table aria-label="Example table with dynamic content ">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>

          <TableBody className="">
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell>
                 test
                </TableCell>
                <TableCell>
                  <span className="font-bold">{review.hotel.name}</span>
                </TableCell>
                <TableCell>
                  <span className="font-bold">{review.user.name}</span>
                </TableCell>
                <TableCell>
                  <span className="font-bold">{review.rating}</span>
                </TableCell>
                <TableCell>
                  <span className="font-bold">{review.review}</span>
                </TableCell>
                <TableCell>
                  <span className="font-bold">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <Button className="bg-blue-600 text-white">
                    <Edit />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button className="bg-red-600 text-white">
                    <MdDelete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-center py-4">
          <Pagination
            isCompact
            showControls
            total={dummyReviews.length}
            initialPage={1}
            className="p-4"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}


