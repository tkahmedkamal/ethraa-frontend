import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { deactivateAccountApi } from "../../../services/userApi";
import { useAuthCtx, useLogout } from "../../../hooks";

const useDeactivate = () => {
  const { logout } = useLogout();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: deactivate, isLoading } = useMutation({
    mutationFn: () => deactivateAccountApi(lang),

    onSuccess: ({ message }) => {
      toast.success(message);
      setTimeout(() => logout(), 3000);
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    deactivate,
    isLoading,
  };
};

export default useDeactivate;
