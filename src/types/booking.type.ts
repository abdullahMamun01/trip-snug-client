export interface  IReservation {
    id: string;
    room: {
      title: string;
    };
    hotel:string;
    checkInDate: string; 
    checkOutDate: string; 
    totalPrice: number;
    currency: string;
    roomsAllocated: number;
    duration: number;
    status: "confirmed" | "pending" | "cancelled"; 
    guest: {
      children: number;
      adults: number;
    };
  };
  
  export interface IBookings {
    id: string
    hotel: Hotel
    user: User
    room: Room
    checkInDate: string
    checkOutDate: string
    totalPrice: number
    currency: string
    roomsAllocated: number
    duration: number
    status: string
  }
  
  export interface Hotel {
    title: string
  }
  
  export interface User {
    firstName: string
    lastName: string
  }
  
  export interface Room {
    title: string
  }