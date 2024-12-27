"use server";

import { IPaymentBody, IPaymentConfirm } from "@/types/payment.type";
import { getCurrentUser } from "./auth.action";
import {
  confirmStripePayment,
  sendPaymentRequest,
} from "@/services/payment.service";

const paymentAction = async (payload: IPaymentBody) => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.token) {
    throw new Error("User is not authenticated. Please log in.");
  }

  try {
    const response = await sendPaymentRequest(payload, currentUser.token);
    return response;
  } catch (error) {
    console.error("Payment request failed:", error);
    throw new Error("Failed to process payment. Please try again later.");
  }
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
