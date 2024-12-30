import { IReview, IUserReview } from "@/types/review.type";
import apiClient from "./axios";
import { setBearerToken } from "@/lib/setBearerToken";
import ApiResponse from "@/types/apiResponse.types";
import { set } from "zod";
import { IReviews } from "@/types/review.types";
interface IReviewPayload extends IUserReview {
  hotelId: string;
  token: string;
}

const makeReview = async (payload: IReviewPayload) => {
  const response = await apiClient.post(
    `/hotels/${payload.hotelId}/reviews`,
    {
      review: payload.review,
      rating: payload.rating,
    },
    setBearerToken(payload.token),
  );
  return response.data;
};

const fetchHotelReviews = async (
  hotelId: string,
): Promise<ApiResponse<IReview[]>> => {
  const response = await apiClient.get(
    `/hotels/${hotelId}/reviews`,
  );
  console.log(response.data)
  return response.data;
};

const fetchAllReviews = async ( query:string,token:string): Promise<ApiResponse<IReviews>> => {
  const response = await apiClient.get(
    `/reviews?${query}`,
    setBearerToken(token),
  );

  return response.data;
};


export { makeReview,fetchHotelReviews,fetchAllReviews };
