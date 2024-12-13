import ApiResponse from "@/types/apiResponse.types";
import apiClient from "./axios";
import { IRoom } from "@/types/room.types";

const fetchHotelRooms = async (hotelId: string , query:string): Promise<ApiResponse<IRoom[]>> => {
  const response = await apiClient.get(`/hotels/${hotelId}/rooms?${query}`);
  return response.data;
};

export { fetchHotelRooms };
