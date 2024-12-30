import { PaginatedResponse } from "./hotel.types"

 interface IReview {
    id: string
    hotel: Hotel | null
    user: User
    rating: number 
    review: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
  }

  export interface IReviews extends PaginatedResponse{
    reviewList: IReview[]
  }
  
   interface Hotel {
    title: string
    images: string[]
  }
  
   interface User {
    firstName: string
    lastName: string
  }