import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { ILogin } from "../../../interfaces";
import { loginApi } from "../../../services/authApi";
import { useAuthCtx } from "../../../hooks";

const useLogin = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuthCtx();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (data: ILogin) => loginApi(data),

    onSuccess: ({ data, message }) => {
      toast.success(message);

      setUser(data);
      setIsAuthenticated(true);
      navigate("/", { replace: true });
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    login,
    isLoading,
  };
};

export default useLogin;
