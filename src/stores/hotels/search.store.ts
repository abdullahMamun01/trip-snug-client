import { create } from "zustand";

interface HotelSearchState {
  location: string | null;
  checkIn: string | null;
  checkOut: string | null;
  adults: number | null;
  children: number | null;
  search: string | null;
  setSearchState: (state: Partial<HotelSearchState>) => void;
}

export const useHotelSearchStore = create<HotelSearchState>((set) => ({
  location: null,
  checkIn: null,
  checkOut: null,
  adults: null,
  children: null,
  search: null,
  setSearchState: (newState) =>
    set((state) => ({
      ...newState,
      ...state
    })),
}));
