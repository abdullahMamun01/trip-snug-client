"use server";

import { IPaymentBody, IPaymentConfirm } from "@/types/payment.type";
import { getCurrentUser } from "./auth.action";
import {
  confirmStripePayment,
  sendPaymentRequest,
} from "@/services/payment.service";

const paymentAction = async (payload: IPaymentBody) => {
  const currentUser = await getCurrentUser();
  const response = await sendPaymentRequest(
    payload,
    currentUser?.token as string,
  );
  return response;
};

const confirmPaymentAction = async (sesssion_id: string) => {
  const currentUser = await getCurrentUser();
  const response = await confirmStripePayment(
    sesssion_id,
    currentUser?.token as string,
  );
  return response;
};

export { paymentAction ,confirmPaymentAction};
