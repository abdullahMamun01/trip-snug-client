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
} from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";
import PaginationComponent from "@/components/PaginationComponent";
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/stores/auth.store";
import { fetchALlPayment } from "@/services/payment.service";
import { useSearchParams } from "next/navigation";
import TableLoadingSkeleton from "@/components/ui/skeleton/TableLoadingSkeleton";
import { format } from "path";
import { formatDate } from "@/lib/date";
import { Chip } from "@nextui-org/chip";

// Dummy payment data
const dummyPayments = [
  {
    id: 1,
    user: "John Doe",
    booking: "Booking #1",
    paymentStatus: "Completed",
    method: "Credit Card",
    amount: 150,
    currency: "USD",
    paymentDate: "2023-01-15",
  },
  {
    id: 2,
    user: "Jane Smith",
    booking: "Booking #2",
    paymentStatus: "Pending",
    method: "PayPal",
    amount: 200,
    currency: "USD",
    paymentDate: "2023-02-20",
  },
  {
    id: 3,
    user: "Bob Johnson",
    booking: "Booking #3",
    paymentStatus: "Failed",
    method: "Bank Transfer",
    amount: 300,
    currency: "USD",
    paymentDate: "2023-03-10",
  },
];

const columns = [
  { key: "user", label: "User" },
  { key: "hotel", label: "Hotel" },
  { key: "paymentStatus", label: "Status" },
  { key: "method", label: "Method" },
  { key: "amount", label: "Amount" },
  { key: "currency", label: "Currency" },
  { key: "paymentDate", label: "Payment Date" },
];

export default function PaymentListPage() {
  const queryParams = useSearchParams();
  const { token } = useAuth();
  const {data ,isLoading} = useQuery({
    queryKey: ["dashboard-payments", queryParams.toString()],
    queryFn: async () =>
      await fetchALlPayment(queryParams.toString(), token as string),
  });

  const payments = data?.data.payments || [];
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Payments" />
      </div>
      <div className="my-4">
        {isLoading && <TableLoadingSkeleton />}
        <Table aria-label="Payment List Table">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-lg">{payment?.user?.firstName} {payment?.user?.lastName}</TableCell>
                <TableCell className="font-lg line-clamp-1">{payment.hotel.title}</TableCell>
                <TableCell className="font-lg">
                  <Chip
                    color={
                      payment.paymentStatus.toLowerCase() === "completed"
                        ? "success"
                        : payment.paymentStatus.toLowerCase() === "pending"
                        ? "warning"
                        : "default"
                    }
                  >
                    {payment.paymentStatus}
                  </Chip>
                </TableCell>
                <TableCell className="font-lg">{payment.method}</TableCell>
                <TableCell className="font-lg">{payment.amount}</TableCell>
                <TableCell className="font-lg">{payment.currency}</TableCell>
                <TableCell className="font-lg">{formatDate(new Date(payment.paymentDate))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-center py-4">
          <PaginationComponent totalPage={data?.data?.totalPage as number || 1} />
        </div>
      </div>
    </DefaultLayout>
  );
}
