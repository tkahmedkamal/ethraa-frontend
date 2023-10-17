import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { IForgotPassword } from "../../../interfaces";
import { forgotPasswordApi } from "../../../services/authApi";

const useForgotPassword = () => {
  const { mutate: forgotPassword, isLoading } = useMutation({
    mutationFn: (data: IForgotPassword) => forgotPasswordApi(data),

    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    forgotPassword,
    isLoading,
  };
};

export default useForgotPassword;
