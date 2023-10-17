import { useState } from "react";
import { Link } from "react-router-dom";
import { IPostUserInfo } from "../interfaces";
import { UserTooltip } from ".";
import { AvatarPlaceholder } from "../assets";
import { Size } from "../enums";

const PostUserInfo: React.FC<IPostUserInfo> = ({
  name,
  username,
  bio,
  avatar,
  datetime,
  size = Size.SMALL,
  children,
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const variants = {
    avatar: size === Size.SMALL ? "h-10 w-10" : "h-12 w-12",
  };

  return (
    <div
      className="relative flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Link
        to={`/${username}`}
        className={`${variants.avatar} overflow-hidden rounded-full`}
      >
        <img
          src={
            avatar && avatar !== "avatar-placeholder"
              ? avatar
              : AvatarPlaceholder
          }
          alt={name}
        />
      </Link>
      <div className="space-y-1.5">
        <Link
          to={`/${username}`}
          className="text-sm font-bold text-light-title dark:text-dark-title"
        >
          {name}
        </Link>
        <div className="relative flex items-center gap-2">
          {datetime && (
            <p className="text-xs font-medium text-light-text dark:text-dark-text">
              {datetime}
            </p>
          )}
          {children}
        </div>
      </div>

      <UserTooltip
        name={name}
        username={username}
        avatar={avatar}
        bio={bio}
        show={showTooltip}
      />
    </div>
  );
};

export default PostUserInfo;
