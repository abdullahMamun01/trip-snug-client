
import { profileAction } from "@/actions/user.action";
import { catchError } from "@/lib/catchError";
import useAuth from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useProfileMutation = () => {
  const router = useRouter();
  const { login } = useAuth();

  return useMutation({
    mutationFn: profileAction,
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
      login({ user: data.data });
    },
    onError: (error) => {
      catchError(error);
      console.log(error)
    },
  });
};

export default useProfileMutation;
