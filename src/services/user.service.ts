import { IUserWithPagination, TProfile, TUser } from "@/types/user.type";
import apiClient from "./axios";
import { AxiosResponse } from "axios";
import ApiResponse from "@/types/apiResponse.types";
import { setBearerToken } from "@/lib/setBearerToken";

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

const fetchAllUser  = async ( query: string,token: string) : Promise<ApiResponse<IUserWithPagination>> => {
  console.log(token)
  const response = await apiClient.get(`/users?${query}&limit=5` , setBearerToken(token))
  return response.data
}

const updateUserRole  = async (payload: {role:string , userId:string} ,token:string):Promise<ApiResponse<TUser>> => {

  const response = await apiClient.patch(`/users/${payload.userId}/role` , {role: payload.role} , setBearerToken(token))
  return response.data
} 

const updateProfileImage = async (payload: FormData , token: string) : Promise<ApiResponse<TUser>> =>{
  const response = await apiClient.patch("/users/profile", payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

/* select('firstName lastName email role country phone'); */
export {
    updateProfile ,
    fetchAllUser,
    updateUserRole,
    updateProfileImage
}
