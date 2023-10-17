import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import { getBookmarksForUserApi } from "../../services/bookmarksApi";
import { useAuthCtx } from "../../hooks";

const useBookmarks = () => {
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const {
    data: bookmarks,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["bookmarks"],
    queryFn: ({ pageParam = 1 }) => getBookmarksForUserApi(pageParam, lang),
    getNextPageParam: (lastPage) => lastPage.pagination.next,

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    bookmarks,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useBookmarks;
