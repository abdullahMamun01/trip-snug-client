import ApiResponse from "@/types/apiResponse.types";
import {
  HotelPaginationResponse,
  IHotel,
  IHotelBase as  IHotelFormData,
} from "@/types/hotel.types";
import fetchData from "./api.service";
import apiClient from "./axios";
import { setBearerToken } from "@/lib/setBearerToken";

const fetchHotels = async (params: string) => {
  console.log(params)
  const hotels = await fetchData<HotelPaginationResponse>(`/hotels?${params}&limit=5`);
  return hotels.data;
};

const fetchHotel = async (hotelId: string) => {
  const hotels = await fetchData<IHotel>(`/hotels/${hotelId}`);
  return hotels.data;
};

const fetchRecentHotels = async () => {
  const hotels = await fetchData<IHotel[]>("/hotels/recent");
  return hotels.data.map((hotel) => ({
    id: hotel.id,
    title: hotel.title,
    image: hotel.images[0],
    description: hotel.description,
  }));
};
// const fetchRecentHotels  = async
const fetchTopRatedHotel = async () => {
  const hotels = await fetchData<IHotel[]>("/hotels/top-rated");
  return hotels;
};

const createHotel = async (
  payload: IHotelFormData,
  token: string,
): Promise<ApiResponse<IHotel>> => {
  const response = await apiClient.post(
    "/hotels",
    payload,
    setBearerToken(token),
  );
  return response.data;
};
const updateHotel = async (
  payload: FormData,
  hotelId: string,
  token: string,
): Promise<ApiResponse<IHotel>> => {
  const response = await apiClient.patch(
    `/hotels/${hotelId}`,
    payload,
    setBearerToken(token),
  );
  return response.data;
};

const deleteHotel = async (
  hotelId: string,
  token: string,
): Promise<ApiResponse<IHotel>> => {
  const response = await apiClient.delete(
    `/hotels/${hotelId}`,
    setBearerToken(token),
  );
  return response.data;
};

export {
  fetchHotels,
  fetchHotel,
  fetchRecentHotels,
  fetchTopRatedHotel,
  createHotel,
  updateHotel,
  deleteHotel
};
