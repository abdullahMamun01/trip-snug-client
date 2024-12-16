"use client";
import BookingConfirmation from "@/components/booking/BookingConfirm";
import BookingLoadingState from "@/components/booking/BookingLoadingState";
import ErrorPaymentCard from "@/components/payment/ErrorPaymentCard";
import useConfirmStripePayment from "@/hooks/useConfirmStripePayment";

import React, { useEffect, useRef, useState } from "react";

interface IProps {
  searchParams: {
    session_id: string;
  };
}

export default function ConfrimPaymentPage({ searchParams }: IProps) {
  const { mutateAsync, isPending, isSuccess ,isError, error } =
    useConfirmStripePayment();
  const session_id = searchParams?.session_id;
  const [showErrorCard, setShwoErrorCard] = useState(false);
  useEffect(() => {
    async function bookingConfirm() {
      await mutateAsync(session_id as string);
    }
    if (session_id) {
      bookingConfirm();
    }
  }, [session_id]);

  const handleClick = async () => {
    await mutateAsync(session_id as string);
  };
  return (
    <div>
      {isPending ? <BookingLoadingState /> : <div></div>}
      {isSuccess && <BookingConfirmation />}
      <div>{isError && <ErrorPaymentCard/>}</div>
    </div>
  );
}
