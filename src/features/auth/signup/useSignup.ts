import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { ISignup } from "../../../interfaces";
import { signupApi } from "../../../services/authApi";
import { useAuthCtx } from "../../../hooks";

const useSignup = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuthCtx();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (data: ISignup) => signupApi(data),

    onSuccess: ({ data, message }) => {
      toast.success(message);

      setUser(data);
      setIsAuthenticated(true);
      navigate("/", { replace: true });
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
    signup,
    isLoading,
  };
};

export default useSignup;
