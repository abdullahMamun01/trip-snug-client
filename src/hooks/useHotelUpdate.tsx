import {  updateHotelAction } from "@/actions/hotel.action";
import { catchError } from "@/lib/catchError";

import useAuth from "@/stores/auth.store";


import { IHotelBase as IHotelFormData } from "@/types/hotel.types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface IHotelPayload {
    payload: FormData ,
    hotelId: string
}

const useHotelUpdate = () => {

  return useMutation({
    mutationFn: async(data:IHotelPayload) => await updateHotelAction(data.payload , data.hotelId),
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
    },
    onError: (error) => {
      console.log(error, "from");
      catchError(error);
    },
  });
};

export default useHotelUpdate;
