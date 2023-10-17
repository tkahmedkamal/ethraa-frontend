import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Size } from "../enums";
import { useAuthCtx, useFollow } from "../hooks";
import { IFollowButton } from "../interfaces";
import { LoadingIcon } from ".";

const FollowButton: React.FC<IFollowButton> = ({
  size = Size.SMALL,
  username,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { t } = useTranslation();
  const { follow, isLoading } = useFollow();
  const { user } = useAuthCtx();

  const isFollowing = user?.following?.find(
    (user) => user.username === username,
  );

  const variants = {
    size: size === Size.LARGE ? "px-6 py-2 text-sm" : "px-3.5 py-1.5 text-xs",
    isFollowing: isFollowing
      ? `border dark:border-dark-divider border-light-divider bg-transparent text-light-title dark:text-dark-title ${
          isHover
            ? "border-light-danger/10 text-light-danger hover:bg-light-danger/10 dark:border-dark-danger/10 dark:text-dark-danger dark:hover:bg-dark-danger/10"
            : ""
        }`
      : "",
  };

  return (
    <>
      <button
        className={`follow-btn ${variants.size} ${variants.isFollowing}`}
        onClick={() => follow(username)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isLoading && <LoadingIcon />}
        {t(
          isFollowing
            ? !isHover
              ? "global.following"
              : "button.unfollow"
            : "button.follow",
        )}
      </button>
    </>
  );
};

export default FollowButton;
