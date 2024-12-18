import { createHotelAction, deleteHotelAction } from "@/actions/hotel.action";
import { catchError } from "@/lib/catchError";
import { setBearerToken } from "@/lib/setBearerToken";
import apiClient from "@/services/axios";
import useAuth from "@/stores/auth.store";
import ApiResponse from "@/types/apiResponse.types";
import { IHotel, IHotelBase } from "@/types/hotel.types";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



const useDeletedHotel = () => {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteHotelAction,
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
      queryClient.invalidateQueries({queryKey : ['dashbaord-hotels']})
    },
    onError: (error) => {
      console.log(error, "from");
      catchError(error);
    },
  });
};

export default useDeletedHotel;
