import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { dislikePostApi } from "../services/postApi";
import { useAuthCtx } from ".";

const useDislikePost = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: dislike, isLoading } = useMutation({
    mutationFn: (postId: string) => dislikePostApi(postId, lang),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    dislike,
    isLoading,
  };
};

export default useDislikePost;
