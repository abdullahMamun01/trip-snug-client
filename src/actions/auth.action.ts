"use server";
import { loginUser, registerUser } from "@/services/auth.service";
import { TLoginType, TRegisterSchemaType } from "@/types/auth.type";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

const loginAction = async (payload: TLoginType) => {
  const response = await loginUser(payload);
  const cookieStore = await cookies();
  cookieStore.set("accessToken", response.token, { maxAge: 60 * 60 * 24 * 7  ,httpOnly:true});
  return response;
};

const registerAction = async (payload: TRegisterSchemaType) => {
  const respose = await registerUser(payload);
  return respose;
};

const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      userId: decodedToken.userId,
      firstName: decodedToken.firstName,
      lastName: decodedToken.lastName,
      email: decodedToken.email,
      role: decodedToken.role,
      token: accessToken,
    };
  }

  return decodedToken;
};

const logoutAction = async () => {
  await cookies().delete('accessToken')
}
export { loginAction, getCurrentUser, registerAction ,logoutAction};
