export interface IUserReview {
    rating: number;
    review: string;
  }
  

  export interface IReview extends IUserReview {
    id: string;
    hotel: string;
    user: {
      firstName: string ,
      lastName: string
    } | null;
    createdAt: string; 
    updatedAt: string; 
  };
  