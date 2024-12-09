import ApiResponse from "./apiResponse.types";

export type TRegisterSchemaType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
};

export type TLoginType = {
  email: string;
  password: string;
};

export interface TLoginResponse<T> extends ApiResponse<T> {
  token: string ,
}
