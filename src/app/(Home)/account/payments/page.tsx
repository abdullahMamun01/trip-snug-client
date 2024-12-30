'use client';
import React, { use } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/table';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/stores/auth.store';
import { useSearchParams } from 'next/navigation';
import { fetchUserPayment } from '@/services/payment.service';
import TableLoadingSkeleton from '@/components/ui/skeleton/TableLoadingSkeleton';
import { formatDate } from '@/lib/date';
import PaginationComponent from '@/components/PaginationComponent';

export default function PaymentListPage() {
  const { user, token } = useAuth()
 
const queryParams  = useSearchParams()
  const {data , isLoading} = useQuery({
    queryKey: ['user-payments' , user?.id , queryParams.toString()], 
    queryFn: async () => await fetchUserPayment(queryParams.toString() , token as string)
  })

  if(isLoading){
    return <TableLoadingSkeleton />
  }
  const payments = data?.data.payments || [];


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>
      <Table aria-label="Payments table">
        <TableHeader>
          <TableColumn>Hotel Name</TableColumn>
          <TableColumn>Amount</TableColumn>
          <TableColumn>Payment Type</TableColumn>
          <TableColumn>Payment Date</TableColumn>
          <TableColumn>Payment Status</TableColumn>
        </TableHeader>
        <TableBody>
          {payments.map((payment, index) => (
            <TableRow key={index}>
              <TableCell  className='line-clamp-1'>{payment.hotel.title.slice(0, 30)}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell>{formatDate(new Date(payment.paymentDate as string))}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-md ${
                    payment.paymentStatus === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : payment.paymentStatus === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {payment.paymentStatus}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='mt-4 flex justify-center'>
        <PaginationComponent totalPage={data?.data.totalPage || 1} />
      </div>
    </div>
  );
}

