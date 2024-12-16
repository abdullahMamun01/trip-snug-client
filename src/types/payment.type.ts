

export interface IPaymentBody {
    hotel: string; 
    room: string; 
    currency: string; 
    checkin: string;
    checkout: string; 
    guest: {
      adults: number; 
      children: number; 
    };
    roomsAllocated: number;
  }
  

export interface IPaymentResponse {
    session_id: string ;
    session_url: string ;
}

export interface IPaymentConfirm {
    id: string; 
    userId: string; 
    hotelId: string; 
    payment: string;
    method: string;
    transactionId: string; // Unique transaction ID
    amount: number; 
    currency: string;
    paymentDate: string; 

  };
  