import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { updateMePasswordApi } from "../services/userApi";
import { IUpdatePassword } from "../interfaces";
import { useAuthCtx } from ".";

const useUpdateMePassword = () => {
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: (data: IUpdatePassword) => updateMePasswordApi(data, lang),

    onSuccess: ({ message }) => {
      toast.success(message);
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
    updatePassword,
    isLoading,
  };
};

export default useUpdateMePassword;
