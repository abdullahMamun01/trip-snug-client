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
  classification: string;
  discount: {
    percentage: number;
    description: string;
    validUntil: string; // ISO date string
  };
  totalRooms: number
}

interface PaginatedResponse {
  totalPage: number;
  hasNextPage: number | null;
  prevPage: number | null;
  nextPage: number | null;
}

interface HotelPaginationResponse extends PaginatedResponse  {
  hotels: IHotel[]
}

export type {
    IHotel,
    PaginatedResponse,
    HotelPaginationResponse
}