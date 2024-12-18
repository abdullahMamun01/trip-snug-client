import { loginAction } from "@/actions/auth.action";
import { catchError } from "@/lib/catchError";
import useAuth from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLoginMutation = () => {
  const router = useRouter();
  const { login, token } = useAuth();

  return useMutation({
    mutationFn: loginAction,
    onSuccess: (data) => {
      toast.success(data.message, { position: "top-right" });
      console.log(data.data);
      console.log(data.data.role)
      login({ token: data.token, user: data.data });
      if (data.data.role === "admin") {
        router.push("/dashboard");
      }
      else if(data.data.role === "user") {
        router.push("/");
        router.refresh()
      }
    },
    onError: (error) => {
      catchError(error);
    },
  });
};

export default useLoginMutation;
