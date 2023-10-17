import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import {
  getFollowingPostsApi,
  getPostsForUsersApi,
  getPopularPostsApi,
} from "../../services/postApi";
import { useAuthCtx, usePostCtx } from "../../hooks";
import { IPost } from "../../interfaces";

const usePosts = () => {
  const [searchParams] = useSearchParams();
  const { setPosts } = usePostCtx();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const search = searchParams.get("posts") || "all";

  const handler =
    search === "following"
      ? getFollowingPostsApi
      : search === "popular"
      ? getPopularPostsApi
      : getPostsForUsersApi;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["posts", search],
      queryFn: ({ pageParam = 1 }) => handler(pageParam, lang),
      getNextPageParam: (lastPage) => lastPage.pagination.next,

      onSuccess: ({ pages }) => {
        const posts: IPost[] = [];

        pages.map((page) => {
          posts.push(...page.data);
        });

        setPosts(posts);
      },
      onError: ({ message }) => {
        toast.error(message);
      },
    });

  return {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default usePosts;
