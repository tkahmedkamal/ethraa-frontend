import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { createBookmarkApi } from "../../services/bookmarksApi";
import { useAuthCtx } from "../../hooks";

const useCreateBookmark = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { mutate: createBookmark, isLoading } = useMutation({
    mutationFn: (postId: string) => createBookmarkApi(postId, lang),

    onSuccess: ({ message }) => {
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
      toast.success(message);
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    createBookmark,
    isLoading,
  };
};

export default useCreateBookmark;
