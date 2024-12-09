import {
  TLoginResponse,
  TLoginType,
  TRegisterSchemaType,
} from "@/types/auth.type";
import apiClient from "./axios";

import { TUser } from "@/types/user.type";
import ApiResponse from "@/types/apiResponse.types";

const loginUser = async (payload: TLoginType) => {
  const response = await apiClient.post<TLoginResponse<TUser>>(
    "/auth/signin",
    payload,
  );
  const data = response.data;
  return data;
};

const registerUser = async (payload: TLoginType) => {
  const response = await apiClient.post<ApiResponse<TRegisterSchemaType>>(
    "/auth/signup",
    payload,
  );
  const data = response.data;
  return data;
};

export { loginUser, registerUser };
