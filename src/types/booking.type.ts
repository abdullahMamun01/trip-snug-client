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
  