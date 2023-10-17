import { Fragment } from "react";
import { LoadMoreData, UserItem, UserItemSkeleton } from "../../ui";
import { IUser } from "../../interfaces";
import usePeopleYouMayKnow from "./usePeopleYouMayKnow";
import { Size } from "../../enums";

const PeopleYouMayKnowList: React.FC = () => {
  const { users, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    usePeopleYouMayKnow(20);

  const isFollowersData = users?.pages[0].data.length > 0;

  return (
    <div className="space-y-3">
      {isLoading &&
        Array(3)
          .fill(0)
          .map((_, index) => (
            <UserItemSkeleton key={index} size={Size.LARGE} />
          ))}

      {!isLoading && (
        <>
          <div className="space-y-6">
            {users?.pages.map((page, index: number) => (
              <Fragment key={index}>
                {page?.data?.map((user: IUser) => (
                  <UserItem key={user._id} {...user} size={Size.LARGE} />
                ))}
              </Fragment>
            ))}
          </div>

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

export default PeopleYouMayKnowList;
