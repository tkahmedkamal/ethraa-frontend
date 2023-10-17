import { useInfiniteQuery } from "react-query";
import toast from "react-hot-toast";
import { getPostsForUserApi } from "../../services/postApi";
import { useAuthCtx, usePostCtx } from "../../hooks";
import { IPost } from "../../interfaces";

const useUserPosts = (username: string) => {
  const { setPosts } = usePostCtx();
  const { user } = useAuthCtx();

  const lang = <string>user?.language;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["posts", username],
      queryFn: ({ pageParam = 1 }) =>
        getPostsForUserApi(username, pageParam, lang),
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

export default useUserPosts;
