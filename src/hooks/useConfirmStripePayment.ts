
import { confirmPaymentAction } from "@/actions/payment.action";
import { catchError } from "@/lib/catchError";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useConfirmStripePayment = () => {

  return useMutation({
    mutationFn: confirmPaymentAction,
    retry: false ,
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
    },
    onError: (error) => {
      catchError(error);
    },
  });
};

export default useConfirmStripePayment;
