import { TProfile } from "@/types/user.type";
import apiClient from "./axios";
import { AxiosResponse } from "axios";
import ApiResponse from "@/types/apiResponse.types";

const updateProfile = async <T>(
  payload: TProfile,
  token: string,
): Promise<ApiResponse<T>> => {
  const response = await apiClient.patch("/users/profile", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};


export {
    updateProfile
}
