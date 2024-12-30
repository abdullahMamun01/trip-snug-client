import ApiResponse from "@/types/apiResponse.types";
import apiClient from "./axios";
import { IBookingsWithPagination, IReservation } from "@/types/booking.type";
import { setBearerToken } from "@/lib/setBearerToken";

const myBookings = async (
  query:string ,
  token: string,
): Promise<ApiResponse<IBookingsWithPagination>> => {
  const response = await apiClient.get(`/bookings/user?${query}&limit=5`, setBearerToken(token));
  return response.data;
};

export { myBookings };
