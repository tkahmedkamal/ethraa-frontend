import {
  CardTitled,
  MostInfluentialUser,
  PeopleYouMayKnowSuggestion,
} from "../ui";

const SidebarStats: React.FC = () => {
  return (
    <aside className="hidden w-[30%] space-y-4 p-[18px] lg:block">
      <CardTitled label="you-know-them" to="/people-you-may-know">
        <PeopleYouMayKnowSuggestion />
      </CardTitled>
      <CardTitled label="most-influential">
        <MostInfluentialUser />
      </CardTitled>
    </aside>
  );
};

export default SidebarStats;
