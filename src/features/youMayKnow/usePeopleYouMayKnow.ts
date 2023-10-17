import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import { getPeopleYouMayKnowApi } from "../../services/userApi";
import { useAuthCtx } from "../../hooks";

const usePeopleYouMayKnow = (limit: number) => {
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const {
    data: users,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["peopleYouMayKnow"],
    queryFn: ({ pageParam = 1 }) =>
      getPeopleYouMayKnowApi(pageParam, limit, lang),
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

export default usePeopleYouMayKnow;
