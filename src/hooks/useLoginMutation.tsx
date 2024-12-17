import { loginAction } from "@/actions/auth.action";
import { catchError } from "@/lib/catchError";
import useAuth from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLoginMutation = () => {
    const router = useRouter();
    const { login ,token } = useAuth();

  return useMutation({
    mutationFn: loginAction,
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
      console.log(data.data)
      login({ token: data.token, user: data.data });
      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      catchError(error);
    },
  });
};

export default useLoginMutation;