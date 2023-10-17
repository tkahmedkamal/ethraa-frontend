import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { LoadMoreData, PostSkeleton, Post } from "../../ui";
import { IBookmark } from "../../interfaces";
import useBookmarks from "./useBookmarks";

const Bookmarks: React.FC = () => {
  const { t } = useTranslation();
  const {
    bookmarks,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
  } = useBookmarks();

  const isBookmarksData = bookmarks?.pages[0].data.length > 0;

  return (
    <div className="space-y-3">
      <p className="mb-6 text-sm font-bold text-light-title dark:text-dark-title">
        {t("global.bookmarksCount")} ( {bookmarks?.pages[0].total_records} )
      </p>

      {isLoading &&
        Array(3)
          .fill(0)
          .map((_, index) => <PostSkeleton key={index} />)}

      {!isLoading && (
        <>
          {bookmarks?.pages.map((page, index: number) => (
            <Fragment key={index}>
              {page?.data?.map((bookmark: IBookmark) => (
                <Post {...bookmark?.post} key={bookmark._id} />
              ))}
            </Fragment>
          ))}

          <LoadMoreData
            hasNextPage={hasNextPage}
            isData={isBookmarksData}
            isFetchingNextPage={isFetchingNextPage}
            message="global.noBookmarksText"
            fetchNextPage={fetchNextPage}
          />
        </>
      )}
    </div>
  );
};

export default Bookmarks;
