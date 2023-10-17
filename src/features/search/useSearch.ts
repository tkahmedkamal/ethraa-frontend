import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import { getUsersApi } from "../../services/userApi";
import { useAuthCtx } from "../../hooks";

const useSearch = (term: string) => {
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const {
    data: users,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["users", term],
    queryFn: ({ pageParam = 1 }) => getUsersApi(pageParam, term, lang),
    getNextPageParam: (lastPage) => lastPage.pagination.next,

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    users,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useSearch;
