import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IHotelBooking {
  hotelName?: string;
  hotel: string;
  roomName: string;
  room: string;
  images?: string[];
  checkIn: string;
  checkOut: string;
  guest: {
    adults: number;
    children: number;
  };
  roomType: string;
  totalPrice: number;
  pricePerNight: number;
  currency?: string
}

interface IHotelBookingState {
  booking: IHotelBooking | null;
  saveBooking: (payload: IHotelBooking) => void;
  clearBooking: () => void;
}
const useBookingStore = create<IHotelBookingState>()(
  persist(
    (set) => ({
      booking: null,
      saveBooking: (payload: IHotelBooking) => set({ booking: payload }),
      clearBooking: () => set({ booking: null }),
    }),
    {
      name: "booking-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useBookingStore;
