import React from "react";
import { Button, LoadingIcon, Message } from ".";
import { ILoadMoreData } from "../interfaces";
import { useTranslation } from "react-i18next";

const LoadMoreData: React.FC<ILoadMoreData> = ({
  hasNextPage,
  isFetchingNextPage,
  isData,
  message,
  fetchNextPage,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center py-6">
      {hasNextPage && (
        <Button
          handler={fetchNextPage}
          loading={!hasNextPage || isFetchingNextPage}
          withoutLoadingIcon
        >
          {isFetchingNextPage && <LoadingIcon />}
          {hasNextPage && t("global.loadMore")}
        </Button>
      )}

      {!hasNextPage && isData && (
        <Message message="global.noLoadMore" prefix="🔃" />
      )}

      {!isData && <Message message={message} prefix="📝" />}
    </div>
  );
};

export default LoadMoreData;
