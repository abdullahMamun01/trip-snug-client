
import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response, // Successful response
  (error) => {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message;
      console.log(errorMessage , ' from axios error')
      throw new Error(errorMessage);
    }else {
      const errorMessage  = error.response.data
      console.log(errorMessage , ' from withour axios error')
      throw new Error(errorMessage);
    }
  }
);

export default apiClient;