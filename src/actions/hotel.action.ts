"use server";

import {IHotelBase as IHotelFormData } from "@/types/hotel.types";
import { getCurrentUser } from "./auth.action";
import { createHotel } from "@/services/hotel.service";

const createHotelAction = async (payload: IHotelFormData) => {
  const currectUser = await getCurrentUser();
  const response = await createHotel(payload, currectUser?.token as string);
  return response
};


const updateHotelAction = async (payload: Partial<IHotelFormData>) => {
    // const currectUser = await getCurrentUser();
    // const response = await createHotel(payload, currectUser?.token as string);
    // return response
  };
  const deleteHotelAction = async (hotelId:string) => {
    // const currectUser = await getCurrentUser();
    // const response = await createHotel(payload, currectUser?.token as string);
    // return response
  };

export {
    createHotel ,
    updateHotelAction ,
    createHotelAction
}
