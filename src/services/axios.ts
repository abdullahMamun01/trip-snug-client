

import { getCurrentUser } from "@/actions/auth.action";
import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});



apiClient.interceptors.response.use(

  async (response) => {
    const {token} = await getCurrentUser() || {}
    if(token){

      response.headers.Authorization = `Bearer ${token}`;
    }
    return response
  }, // Successful response
  (error) => {
    console.log(error.response.data)
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message;
      console.log(errorMessage)
      // throw new Error(errorMessage);
    }else {
      const errorMessage  = error.response.data
      console.log(errorMessage)
      // throw new Error(errorMessage);
    }
  }
);

export default apiClient;