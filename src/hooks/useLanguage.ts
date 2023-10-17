import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { updateLanguageApi } from "../services/userApi";
import { useAuthCtx } from ".";

const useLanguage = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const { mutate: updateLanguage, isLoading } = useMutation({
    mutationFn: (language: string) =>
      updateLanguageApi(language, user?.language),

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    updateLanguage,
    isLoading,
  };
};

export default useLanguage;
