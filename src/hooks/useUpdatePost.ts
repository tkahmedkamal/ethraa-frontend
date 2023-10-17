import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { updatePostApi } from "../services/postApi";
import { IUpdatePost } from "../interfaces";
import { useAuthCtx } from ".";

const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: updatePost, isLoading } = useMutation({
    mutationFn: (postData: IUpdatePost) => updatePostApi(postData, lang),

    onSuccess: ({ message }) => {
      queryClient.invalidateQueries(["posts"]);
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
    updatePost,
    isLoading,
  };
};

export default useUpdatePost;
