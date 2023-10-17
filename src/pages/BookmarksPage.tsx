import { Bookmarks } from "../features/bookmark";
import PageTitle from "../ui/PageTitle";

const BookmarksPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageTitle label="sidebar.bookmarks" />
      <Bookmarks />
    </div>
  );
};

export default BookmarksPage;
