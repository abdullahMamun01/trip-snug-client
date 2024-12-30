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
import { Card } from "@nextui-org/card";

// Dummy payment data

const columns = [
  { key: "user", label: "User" },

  { key: "amount", label: "Amount" },
  { key: "paymentStatus", label: "Status" },
  { key: "date", label: "Date" },
];

export default function RecentPayments() {
  const queryParams = useSearchParams();
  const { token } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-payments", queryParams.toString()],
    queryFn: async () =>
      await fetchALlPayment('limit=5', token as string),
  });

  const payments = data?.data.payments || [];
  return (
    <>
      <Card className="my-4 p-2">
        <h1 className="text-2xl font-bold px-4 py-2">Recent Payments </h1>
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
                <TableCell className="font-lg">
                  {payment?.user?.firstName} {payment?.user?.lastName}
                </TableCell>
                <TableCell className="font-lg">${payment.amount}</TableCell>
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
                <TableCell className="font-lg">
                  {formatDate(new Date(payment.paymentDate))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
