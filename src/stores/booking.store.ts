import { create } from "zustand";

interface IHotelBooking {
  hotel: string;
  room: string;
  hotelName: string;
  images: string[];
  checkIn: string;
  checkOut: string;
  guest: {
    adults: number;
    children: number;
  };
  currency: string;
}

interface IHotelBookingState {
  booking: IHotelBooking | null;
  saveBooking: (payload: IHotelBooking) => void;
  clearBooking: () => void
}
const useBookingStore = create<IHotelBookingState>((set) => ({
  booking: null,
  saveBooking: (payload: IHotelBooking) => set({ booking: payload }),
  clearBooking : () => set({booking:null})
}));


export default useBookingStore