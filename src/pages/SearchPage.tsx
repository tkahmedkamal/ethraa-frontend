import { SearchForm, SearchResults } from "../features/search";
import PageTitle from "../ui/PageTitle";

const SearchPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageTitle label="sidebar.search" />
      <div className="space-y-6">
        <SearchForm />
        <SearchResults />
      </div>
    </div>
  );
};

export default SearchPage;
