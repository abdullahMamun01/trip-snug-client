"use server";

import { IHotelBase as IHotelFormData } from "@/types/hotel.types";
import { getCurrentUser } from "./auth.action";
import {
  createHotel,
  deleteHotel,
  updateHotel,
} from "@/services/hotel.service";

const createHotelAction = async (payload: IHotelFormData) => {
  const currectUser = await getCurrentUser();
  const response = await createHotel(payload, currectUser?.token as string);
  return response;
};

const updateHotelAction = async (
  payload: FormData,
  hotelId: string,
) => {
  console.log(hotelId)
  const currectUser = await getCurrentUser();
  const response = await updateHotel(
    payload,
    hotelId,
    currectUser?.token as string,
  );
  return response;
};
const deleteHotelAction = async (hotelId: string) => {
  const currectUser = await getCurrentUser();
  const response = await deleteHotel(hotelId, currectUser?.token as string);
  return response;
};

export { createHotel, updateHotelAction, createHotelAction ,deleteHotel,deleteHotelAction};
