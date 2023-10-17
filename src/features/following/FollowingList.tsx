import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { LoadMoreData, UserItem, UserItemSkeleton } from "../../ui";
import useFollowing from "./useFollowing";
import { IUser } from "../../interfaces";
import { Size } from "../../enums";

const FollowingList: React.FC = () => {
  const { username } = useParams();
  const {
    followers,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useFollowing(username);

  const isFollowersData = followers?.pages[0].data.length > 0;

  return (
    <div className="space-y-3">
      {isLoading &&
        Array(10)
          .fill(0)
          .map((_, index) => (
            <UserItemSkeleton key={index} size={Size.LARGE} />
          ))}

      {!isLoading && (
        <>
          <ul className="space-y-6">
            {followers?.pages.map((page, index: number) => (
              <Fragment key={index}>
                {page?.data?.map((user: IUser) => (
                  <UserItem key={user._id} {...user} size={Size.LARGE} />
                ))}
              </Fragment>
            ))}
          </ul>

          <LoadMoreData
            hasNextPage={hasNextPage}
            isData={isFollowersData}
            isFetchingNextPage={isFetchingNextPage}
            message="global.noResults"
            fetchNextPage={fetchNextPage}
          />
        </>
      )}
    </div>
  );
};

export default FollowingList;
