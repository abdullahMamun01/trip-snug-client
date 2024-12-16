import { loginAction } from "@/actions/auth.action";
import { reviewAction } from "@/actions/review.action";
import { catchError } from "@/lib/catchError";
import useAuth from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useReviewHotel = () => {
  return useMutation({
    mutationFn: async ({
      review,
      rating,
      hotelId,
    }: {
      review: string;
      rating: number;
      hotelId: string;
    }) =>
      await reviewAction(
        {
          review,
          rating,
        },
        hotelId,
      ),
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
    },
    onError: (error) => {
      catchError(error);
    },
  });
};

export default useReviewHotel;
