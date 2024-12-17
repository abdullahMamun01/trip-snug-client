import { createHotelAction } from "@/actions/hotel.action";
import { catchError } from "@/lib/catchError";
import { setBearerToken } from "@/lib/setBearerToken";
import apiClient from "@/services/axios";
import useAuth from "@/stores/auth.store";
import ApiResponse from "@/types/apiResponse.types";
import { IHotel, IHotelBase } from "@/types/hotel.types";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const createHotel = async (
  payload: FormData,
  token: string,
): Promise<ApiResponse<IHotel>> => {
  const response = await apiClient.post(
    "/hotels",
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
    },
  );
  return response.data;
};

const useCreateHotel = () => {
  const { token } = useAuth();
  return useMutation({
    mutationFn: async (payload: FormData) =>
      await createHotel(payload, token as string),
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
    },
    onError: (error) => {
      console.log(error, "from");
      catchError(error);
    },
  });
};

export default useCreateHotel;
