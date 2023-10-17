import { PeopleYouMayKnowList } from "../features/youMayKnow";
import PageTitle from "../ui/PageTitle";

const PeopleYouMayKnowPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageTitle label="global.peopleYouMayKnowPage" />
      <div className="space-y-6">
        <PeopleYouMayKnowList />
      </div>
    </div>
  );
};

export default PeopleYouMayKnowPage;
