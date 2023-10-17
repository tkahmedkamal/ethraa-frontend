import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { deletePostApi } from "../services/postApi";
import { useAuthCtx } from ".";

const useDeletePost = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: (postId: string) => deletePostApi(postId, lang),

    onSuccess: ({ message }) => {
      queryClient.invalidateQueries(["posts"]);
      queryClient.invalidateQueries(["user"]);

      toast.success(message);
    },

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    deletePost,
    isLoading,
  };
};

export default useDeletePost;
