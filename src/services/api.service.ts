import ApiResponse from "@/types/apiResponse.types";
import apiClient from "./axios";

const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
  const response = await apiClient.get(url);
  const data = response.data;
  return data;
};



export default fetchData