import { UserInfo, UserPosts } from "../features/profile";
import PageTitle from "../ui/PageTitle";

const ProfilePage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageTitle label="sidebar.profile" />
      <UserInfo />
      <UserPosts />
    </div>
  );
};

export default ProfilePage;
