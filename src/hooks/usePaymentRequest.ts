import { paymentAction } from "@/actions/payment.action";
import { catchError } from "@/lib/catchError";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export default function usePaymentRequest() {
  return useMutation({
    mutationFn: paymentAction,
    onError: (error) => {
      console.log(error, "from react hook form");
      catchError(error);
    },
  });
}
