import { Fragment } from "react";
import { useParams } from "react-router-dom";
import useUserPosts from "./useUserPosts";
import { LoadMoreData, PostSkeleton, Post } from "../../ui";
import { IPost } from "../../interfaces";

const UserPosts: React.FC = () => {
  const { username } = useParams();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useUserPosts(username as string);

  const isPostsData = data?.pages[0].data.length > 0;

  return (
    <div className="space-y-3">
      {isLoading &&
        Array(3)
          .fill(0)
          .map((_, index) => <PostSkeleton key={index} />)}

      {!isLoading && (
        <>
          {data?.pages.map((page, index: number) => (
            <Fragment key={index}>
              {page?.data?.map((post: IPost) => (
                <Post {...post} key={post._id} />
              ))}
            </Fragment>
          ))}

          <LoadMoreData
            hasNextPage={hasNextPage}
            isData={isPostsData}
            isFetchingNextPage={isFetchingNextPage}
            message="global.noUserPosts"
            fetchNextPage={fetchNextPage}
          />
        </>
      )}
    </div>
  );
};

export default UserPosts;
