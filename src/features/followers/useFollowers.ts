import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import { getUserFollowersApi } from "../../services/userApi";
import { useAuthCtx } from "../../hooks";

const useFollowers = (username: string | undefined) => {
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const {
    data: followers,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["followers", username],
    queryFn: ({ pageParam = 1 }) =>
      getUserFollowersApi(pageParam, username, lang),
    getNextPageParam: (lastPage) => lastPage.pagination.next,

    onError: ({ message }) => {
      toast.error(message);
    },
  });

  return {
    followers,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useFollowers;
