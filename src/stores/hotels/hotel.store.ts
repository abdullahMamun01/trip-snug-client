import { IHotelUpdate } from "@/types/hotel.types";
import { create } from "zustand";

interface IHotelState {
  selectedHotel: IHotelUpdate | null;
  selectedHotelId: string | null;
  setSelectedHotel: (hotel: IHotelUpdate) => void;
  setSelectedHotelId: (hotelId: string) => void;
  clearSelectedHotel: () => void;
  clearSelectedHotelId: () => void;
}

export const useHotelStore = create<IHotelState>((set) => ({
  selectedHotel: null,
  selectedHotelId: null,

  setSelectedHotel: (hotel: IHotelUpdate) =>
    set(() => ({
      selectedHotel: hotel,
    })),

  setSelectedHotelId: (hotelId: string) =>
    set(() => ({
      selectedHotelId: hotelId,
    })),


  clearSelectedHotel: () =>
    set(() => ({
      selectedHotel: null,
    })),

  clearSelectedHotelId: () =>
    set(() => ({
      selectedHotelId: null,
    })),
}));
