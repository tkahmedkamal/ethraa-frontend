import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { followUnFollowApi } from "../services/userApi";
import { useAuthCtx } from ".";

const useFollow = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: follow, isLoading } = useMutation({
    mutationFn: (username: string | undefined) =>
      followUnFollowApi(username, lang),

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    follow,
    isLoading,
  };
};

export default useFollow;
