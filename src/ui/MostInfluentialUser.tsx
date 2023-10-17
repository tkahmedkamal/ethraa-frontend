import { Message, UserItem, UserItemSkeleton } from ".";
import { useMostInfluentialUser } from "../hooks";
import { IMostInfluentialUser } from "../interfaces";

const MostInfluentialUser: React.FC = () => {
  const { users, isLoading } = useMostInfluentialUser();

  const isUserData = users?.data.length > 0;

  const userItems = users?.data.map((data: IMostInfluentialUser) => (
    <UserItem key={data._id} {...data.user} />
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

export default MostInfluentialUser;
