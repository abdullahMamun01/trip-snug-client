interface IHotel {
  id: string;
  title: string;
  description: string;
  images: string[];
  rating:number ,
  reviews: number,
  location: {
    country: string;
    city: string;
    zipCode: string; 
    address: string;
    latitude?: number;
    longitude?: number;
  };
  contactInfo: string;
  pricePerNight: number; 
  availableRooms: number; 
  amenities: string[];
  tags: string[];
  currency: string;
  policies: {
    checkIn: string;
    checkOut: string;
    cancellationPolicy: string;
  };
}


export type {
    IHotel
}