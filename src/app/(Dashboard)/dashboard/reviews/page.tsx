"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { use, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Input } from "@nextui-org/input";
import { Delete, Edit, Plus } from "lucide-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Pagination } from "@nextui-org/pagination";
import { Button } from "@nextui-org/button";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { fetchAllReviews } from "@/services/review.service";
import useAuth from "@/stores/auth.store";
import TableLoadingSkeleton from "@/components/ui/skeleton/TableLoadingSkeleton";
import Image from "next/image";
import useSetQueryParams from "@/hooks/useSetQueryParams";
import PaginationComponent from "@/components/PaginationComponent";

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

export default function DashboardPaymentsPage() {
  const { token } = useAuth();
  const queryParams = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-reviews", queryParams.toString()],
    queryFn: async () =>
      await fetchAllReviews(queryParams.toString(), token as string),
  });

  const reviews = data?.data.reviewList || [];

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Reviews" />
      </div>

      <div>
        {isLoading && <TableLoadingSkeleton />}
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
                  {review.hotel?.images && (
                    <Image
                      src={review.hotel?.images[0]}
                      width={100}
                      height={100}
                      alt="hotel image"
                      className="h-14 w-14 rounded-md object-contain"
                    />
                  )}
                </TableCell>
                <TableCell>
                  <span className="line-clamp-1 font-bold">
                    {review.hotel?.title}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-bold">
                    {review?.user?.firstName} {review?.user?.lastName}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-center font-bold">{review.rating}</span>
                </TableCell>
                <TableCell>
                  <span className="line-clamp-1 font-bold">
                    {review.review}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="font-bold">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-center py-4">
          {!isLoading && <PaginationComponent totalPage={data?.data.totalPage || 1} />}
        </div>
      </div>
    </DefaultLayout>
  );
}
