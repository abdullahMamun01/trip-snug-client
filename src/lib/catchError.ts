import toast from "react-hot-toast";

export const catchError = (error: any) => {
  const err = error as Error;

  toast.error(err.message, {
    position: "top-right",
  });
};
