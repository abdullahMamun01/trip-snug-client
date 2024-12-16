import ApiResponse from "@/types/apiResponse.types";
import apiClient from "./axios";
import { IReservation } from "@/types/booking.type";
import { setBearerToken } from "@/lib/setBearerToken";

const myBookings = async (
  token: string,
): Promise<ApiResponse<IReservation[]>> => {
  const response = await apiClient.get("/bookings/user", setBearerToken(token));
  return response.data;
};

export { myBookings };
