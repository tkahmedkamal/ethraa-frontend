import React, { Fragment } from "react";
import useSearch from "./useSearch";
import { useSearchParams } from "react-router-dom";
import { LoadMoreData, UserItem, UserItemSkeleton } from "../../ui";
import { IUser } from "../../interfaces";
import { Size } from "../../enums";

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { users, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSearch(searchParams.get("search") || "");

  const isSearchData = users?.pages[0].data.length > 0;

  return (
    <div className="space-y-3">
      {isLoading &&
        searchParams.get("search") &&
        Array(1)
          .fill(0)
          .map((_, index) => (
            <UserItemSkeleton key={index} size={Size.LARGE} />
          ))}

      {!isLoading && (
        <>
          <ul className="space-y-6">
            {users?.pages.map((page, index: number) => (
              <Fragment key={index}>
                {page?.data?.map((user: IUser) => (
                  <UserItem key={user._id} {...user} size={Size.LARGE} />
                ))}
              </Fragment>
            ))}
          </ul>

          <LoadMoreData
            hasNextPage={hasNextPage}
            isData={isSearchData}
            isFetchingNextPage={isFetchingNextPage}
            message="search.noResults"
            fetchNextPage={fetchNextPage}
          />
        </>
      )}
    </div>
  );
};

export default SearchResults;
