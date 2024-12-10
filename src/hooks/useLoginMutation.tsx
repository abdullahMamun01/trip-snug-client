import { loginAction } from "@/actions/auth.action";
import { catchError } from "@/lib/catchError";
import useAuth from "@/stores/hotels/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLoginMutation = () => {
    const router = useRouter();
    const { login ,token } = useAuth();
    console.log(token) 
  return useMutation({
    mutationFn: loginAction,
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
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
