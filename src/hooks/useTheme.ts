import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { updateThemeApi } from "../services/userApi";
import { useAuthCtx } from ".";

const useTheme = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: updateTheme, isLoading } = useMutation({
    mutationFn: (isDarkMode: boolean) => updateThemeApi(isDarkMode, lang),

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    updateTheme,
    isLoading,
  };
};

export default useTheme;
