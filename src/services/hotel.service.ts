import ApiResponse from "@/types/apiResponse.types";
import { HotelPaginationResponse, IHotel, PaginatedResponse } from "@/types/hotel.types";
import fetchData from "./api.service";

const fetchHotels = async (params: string) => {
  const hotels = await fetchData<HotelPaginationResponse>(`/hotels?${params}`);
  return hotels.data
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
export { fetchHotels, fetchRecentHotels, fetchTopRatedHotel };
