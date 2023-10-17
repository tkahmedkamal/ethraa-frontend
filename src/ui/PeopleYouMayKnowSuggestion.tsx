import { Fragment } from "react";
import { Message, UserItem, UserItemSkeleton } from ".";
import { usePeopleYouMayKnow } from "../features/youMayKnow";
import { IUser } from "../interfaces";

const PeopleYouMayKnowSuggestion: React.FC = () => {
  const { users, isLoading } = usePeopleYouMayKnow(5);

  const isUserData = users?.pages[0].data.length > 0;

  const userItems = users?.pages.map((page, index: number) => (
    <Fragment key={index}>
      {page?.data.map((user: IUser) => <UserItem key={user._id} {...user} />)}
    </Fragment>
  ));

  return (
    <>
      {isLoading && (
        <div className="space-y-3">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <UserItemSkeleton key={index} />
            ))}
        </div>
      )}

      {!isLoading && isUserData && <ul className="space-y-3">{userItems}</ul>}
      {!isLoading && !isUserData && <Message message="global.noResults" />}
    </>
  );
};

export default PeopleYouMayKnowSuggestion;
