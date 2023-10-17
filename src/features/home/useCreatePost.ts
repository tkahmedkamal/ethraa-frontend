import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { createPostApi } from "../../services/postApi";
import { ICreatePost } from "../../interfaces";
import { useAuthCtx } from "../../hooks";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: (postData: ICreatePost) => createPostApi(postData, lang),

    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
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
    createPost,
    isLoading,
  };
};

export default useCreatePost;
