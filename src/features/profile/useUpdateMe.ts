import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { IUser } from "../../interfaces";
import { updateMeApi } from "../../services/userApi";
import { useAuthCtx } from "../../hooks";

const useUpdateMe = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: updateMe, isLoading } = useMutation({
    mutationFn: (data: IUser) => updateMeApi(data, lang),

    onSuccess: ({ message }) => {
      queryClient.invalidateQueries(["user"]);
      queryClient.invalidateQueries(["posts", user?.username]);
      queryClient.invalidateQueries(["most-influential"]);

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
    updateMe,
    isLoading,
  };
};

export default useUpdateMe;
