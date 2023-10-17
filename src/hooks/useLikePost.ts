import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { likePostApi } from "../services/postApi";
import { useAuthCtx } from ".";

const useLikePost = () => {
  const queryClient = useQueryClient();

  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: like, isLoading } = useMutation({
    mutationFn: (postId: string) => likePostApi(postId, lang),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    like,
    isLoading,
  };
};

export default useLikePost;
