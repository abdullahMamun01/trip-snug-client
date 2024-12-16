"use server";

import { IUserReview } from "@/types/review.type";
import { getCurrentUser } from "./auth.action";
import { makeReview } from "@/services/review.service";

const reviewAction = async (payload: IUserReview, hotelId: string) => {
  const currentUser = await getCurrentUser();
  const response = await makeReview({
    ...payload,
    hotelId,
    token: currentUser?.token as string,
  });
  return response;
};


export {
    reviewAction
}
