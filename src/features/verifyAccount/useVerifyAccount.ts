import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { activeAccountApi } from "../../services/userApi";
import { useAuthCtx } from "../../hooks";

const useVerifyAccount = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: activeAccount, isLoading } = useMutation({
    mutationFn: (token: string | undefined) => activeAccountApi(token, lang),

    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      toast.success(message);
      navigate("/", { replace: true });
    },

    onError: ({ message }) => {
      toast.error(message);
      navigate("/", { replace: true });
    },
  });

  return {
    activeAccount,
    isLoading,
  };
};

export default useVerifyAccount;
