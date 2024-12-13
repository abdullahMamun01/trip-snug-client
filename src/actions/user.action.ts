'use server'
import apiClient from "@/services/axios";
import { TProfile, TUser } from "@/types/user.type";
import { cookies } from "next/headers";
import { getCurrentUser } from "./auth.action";
import { updateProfile } from "@/services/user.service";

const profileAction = async (payload: TProfile) => {
  const user = await getCurrentUser();
  console.log(user?.role)
  const response = await updateProfile<TUser>(payload, user?.token as string);
  return response;
};

export { profileAction };
