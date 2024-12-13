export interface IRoom {
  id: string;
  hotel: string;
  title: string;
  description: string;
  roomType: string;
  roomNo: string;
  pricePerNight: number;
  maxGuest: number;
  amenities: string[];
  totalNight:number ;
  status: string ;
  totalPrice:number
}


/* 

"status": "available",
      "totalNight": 5,
      "totalPrice": 1875
*/