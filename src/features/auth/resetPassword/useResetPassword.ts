import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { IResetPasswordApi } from "../../../interfaces";
import { resetPasswordApi } from "../../../services/authApi";

const useResetPassword = () => {
  const navigate = useNavigate();

  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn: (data: IResetPasswordApi) => resetPasswordApi(data),

    onSuccess: ({ message }) => {
      toast.success(message);
      navigate("/auth/login", { replace: true });
    },

    onError: ({ message }) => {
      if (message.startsWith("[") && message.endsWith("]")) {
        const errors = JSON.parse(message);
        errors.map((error: string) => toast.error(error));
        return;
      }

      toast.error(message);
    },
  });

  return {
    resetPassword,
    isLoading,
  };
};

export default useResetPassword;
