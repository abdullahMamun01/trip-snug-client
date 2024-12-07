import { create } from "zustand";

export interface HotelSearch {
  location: string | null;
  checkIn: string | null;
  checkOut: string | null;
  adults: number | null;
  children: number | null;
}

interface HotelSearchState {
  searchState: HotelSearch;
  setSearchState: (state: Partial<HotelSearch>) => void; // Accept partial updates
}

export const useHotelSearchStore = create<HotelSearchState>((set) => ({
  searchState: {
    location: null,
    checkIn: null,
    checkOut: null,
    adults: null,
    children: null,
  },
  setSearchState: (newState) =>
    set((state) => ({
      searchState: { ...state.searchState, ...newState },
    })),
}));
