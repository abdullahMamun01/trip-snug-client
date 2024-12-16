import { IReview, IUserReview } from "@/types/review.type";
import apiClient from "./axios";
import { setBearerToken } from "@/lib/setBearerToken";
import ApiResponse from "@/types/apiResponse.types";
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

export { makeReview,fetchHotelReviews };
