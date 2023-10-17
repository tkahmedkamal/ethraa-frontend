import { FollowersList } from "../features/followers";
import PageTitle from "../ui/PageTitle";

const FollowersPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageTitle label="global.allFollowers" />
      <div className="space-y-6">
        <FollowersList />
      </div>
    </div>
  );
};

export default FollowersPage;
