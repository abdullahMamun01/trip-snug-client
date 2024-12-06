import ApiResponse from "@/types/apiResponse.types";
import { IHotel } from "@/types/hotel.types";
import fetchData from "./api.service";

const fetchHotel = async () => {
  const hotels = await fetchData<IHotel>("/hotels");
};
const fetchRecentHotels = async () => {
    const hotels = await fetchData<IHotel[]>("/hotels/recent");
    return hotels.data.map(hotel => ({id:hotel.id ,title:hotel.title, image:hotel.images[0] , description:hotel.description ,}))
  };
// const fetchRecentHotels  = async
const fetchTopRatedHotel = async () => {
    const hotels = await fetchData<IHotel[]>("/hotels/top-rated");
    return hotels
  };
export {
    fetchHotel ,
    fetchRecentHotels,
    fetchTopRatedHotel
}
