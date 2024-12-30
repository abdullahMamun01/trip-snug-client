import { cancelBookingAction } from "@/actions/booking.action";
import { catchError } from "@/lib/catchError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import exp from "constants";
import toast from "react-hot-toast";

const useCancelBookings = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cancelBookingAction,
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => {
      catchError(error);
    },
  });
};

export default useCancelBookings;
