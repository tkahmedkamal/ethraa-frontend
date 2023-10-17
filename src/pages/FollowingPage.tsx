import { FollowingList } from "../features/following";
import PageTitle from "../ui/PageTitle";

const FollowingPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageTitle label="global.allFollowing" />
      <div className="space-y-6">
        <FollowingList />
      </div>
    </div>
  );
};

export default FollowingPage;
