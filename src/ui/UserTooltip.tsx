import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, FollowButton } from ".";
import { IUserTooltip } from "../interfaces";
import { opacityVariants } from "../helpers/motion.js";
import { AvatarPlaceholder } from "../assets";
import useAuthCtx from "../hooks/useAuthCtx.js";

const UserTooltip: React.FC<IUserTooltip> = ({
  name,
  username,
  bio,
  avatar,
  show,
}) => {
  const { user } = useAuthCtx();

  return (
    <AnimatePresence>
      {show && username !== user?.username && (
        <motion.div
          variants={opacityVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key="tooltip"
          className="absolute top-6 z-10 w-[283px] drop-shadow-xl"
        >
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <Link
                to={`/${username}`}
                className="h-12 w-12 overflow-hidden rounded-full"
              >
                <img
                  src={
                    avatar !== "avatar-placeholder" ? avatar : AvatarPlaceholder
                  }
                  alt="title"
                  width={48}
                  height={48}
                />
              </Link>
              <FollowButton username={username} />
            </div>
            <div className="space-y-4">
              <Link to={`/${username}`} className="space-y-0.5">
                <h3 className="text-xl font-bold text-light-title dark:text-dark-title">
                  {name}
                </h3>
                <p className="font-normal text-light-text dark:text-dark-text">
                  {username}
                </p>
              </Link>
              <p className="font-normal text-light-text dark:text-dark-text">
                {bio}
              </p>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserTooltip;
