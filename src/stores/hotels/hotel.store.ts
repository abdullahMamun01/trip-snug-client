import { create } from "zustand";

interface HotelSearchState {
  hotel: string;
  setHotel: (hotel: string) => void;
}

export const useHotelStore = create<HotelSearchState>((set) => ({
  hotel: "",
  setHotel: (hotelName) =>
    set((state) => ({
      hotel: hotelName,
    })),
}));
