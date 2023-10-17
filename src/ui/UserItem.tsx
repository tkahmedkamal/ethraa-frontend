import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FollowButton, UserTooltip } from ".";
import { IUserItem } from "../interfaces";
import { Size } from "../enums";
import { AvatarPlaceholder } from "../assets";
import { useAuthCtx } from "../hooks";

const UserItem: React.FC<IUserItem> = ({
  size = Size.SMALL,
  name,
  username,
  avatar,
  bio,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const { t } = useTranslation();
  const { user } = useAuthCtx();

  const variants = {
    image: size === Size.SMALL ? "h-10 w-10" : "h-12 w-12",
    imageWith: size === Size.SMALL ? 40 : 48,
    text: size === Size.SMALL ? "text-sm" : "text-base",
  };

  return (
    <li
      className="relative flex justify-between"
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Link
        to={`/${username}`}
        className="flex gap-2"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <div className={`overflow-hidden rounded-full ${variants.image}`}>
          <img
            src={avatar !== "avatar-placeholder" ? avatar : AvatarPlaceholder}
            alt="title"
            width={variants.imageWith}
            height={variants.imageWith}
          />
        </div>
        <div className="space-y-1">
          <h5
            className={`font-bold text-light-title dark:text-dark-title ${variants.text}`}
          >
            {name}
          </h5>
          <p
            className={`font-normal text-light-text dark:text-dark-text ${variants.text}`}
          >
            {username}
          </p>
        </div>
      </Link>
      {username !== user?.username &&
        (size === Size.SMALL ? (
          <FollowButton username={username} />
        ) : (
          <FollowButton username={username} size={Size.LARGE} />
        ))}
      {size === Size.SMALL && username === user?.username && (
        <p className="flex items-center gap-1 self-start rounded-full bg-common-success/5 px-3.5 py-1 text-xs font-bold text-common-success">
          <span className="material-icons-outlined text-sm">gpp_good</span>
          {t("global.influential")}
        </p>
      )}
      <UserTooltip
        name={name}
        username={username}
        avatar={avatar}
        bio={bio}
        show={showTooltip}
      />
    </li>
  );
};

export default UserItem;
