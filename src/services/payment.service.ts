import {
  IPaymentBody,
  IPaymentConfirm,
  IPaymentResponse,
} from "@/types/payment.type";
import apiClient from "./axios";
import ApiResponse from "@/types/apiResponse.types";
import { setBearerToken } from "@/lib/setBearerToken";

const sendPaymentRequest = async (
  payload: IPaymentBody,
  token: string,
): Promise<ApiResponse<string>> => {
  const response = await apiClient.post(
    "/payments/stripe/create-payment-intent",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

const confirmStripePayment = async (
  session_id: string,
  token: string,
): Promise<ApiResponse<IPaymentConfirm>> => {
  console.log(token)
  const response = await apiClient.post(
    "/payments/stripe/confirm",
    {
      session_id,
    },
    {
      headers: {
        Authorization : `Bearer ${token}`
      }
    },
  );
  
  return response.data;
};

export { sendPaymentRequest, confirmStripePayment };
