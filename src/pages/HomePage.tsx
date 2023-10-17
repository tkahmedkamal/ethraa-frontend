import { CreatePostForm, Posts } from "../features/home";
import { useAuthCtx } from "../hooks";
import { Tabs, PageTitle } from "../ui";

const tabItems = [
  {
    dataset: "all",
    label: "global.all",
  },
  {
    dataset: "following",
    label: "global.following",
  },
  {
    dataset: "popular",
    label: "global.popular",
  },
];

const HomePage: React.FC = () => {
  const { user } = useAuthCtx();

  return (
    <>
      <PageTitle label="sidebar.home" />
      <div className="space-y-4">
        {user?.isActiveAccount && <CreatePostForm />}
        <Tabs tabs={tabItems} />
        <Posts />
      </div>
    </>
  );
};

export default HomePage;
