import { useParams } from "react-router-dom";
import { useAuthCtx, useUser } from "../../hooks";
import { IUser } from "../../interfaces";
import { FollowCountButton, Modal, UserInfoSkeleton } from "../../ui";
import UserInfoAvatar from "./UserInfoAvatar";
import UserInfoDetails from "./UserInfoDetails";
import EditUserInfoForm from "./EditUserInfoForm";
import FollowButton from "../../ui/FollowButton";
import { Size } from "../../enums";

const UserInfo: React.FC = () => {
  const { username } = useParams();
  const { user: isLoggedInUser } = useAuthCtx();
  const { user, isLoading } = useUser(username as string);

  const {
    name,
    avatar,
    bio,
    followers,
    following,
    quoteCount,
    facebook,
    twitter,
  } = user?.data || ({} as IUser);

  return (
    <>
      {isLoading && <UserInfoSkeleton />}
      {!isLoading && (
        <div className="space-y-8">
          <div className="!mt-8 flex flex-wrap items-center gap-6">
            <UserInfoAvatar alt={name} avatar={avatar} />

            <div className="flex flex-1 justify-between">
              <div className="w-full space-y-4">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-light-title dark:text-dark-title">
                      {name}
                    </h4>
                    <p className="font-semibold text-light-text dark:text-dark-text">
                      {username}
                    </p>
                  </div>
                  {username !== isLoggedInUser?.username && (
                    <div className="self-start">
                      <FollowButton size={Size.LARGE} username={username} />
                    </div>
                  )}
                </div>
                <p className="font-semibold text-light-text dark:text-dark-text">
                  {bio}
                </p>
                <div className="flex items-center gap-3">
                  <FollowCountButton
                    to={`/${username}/followers`}
                    count={followers?.length as number}
                    label="global.followers"
                  />
                  <FollowCountButton
                    to={`/${username}/following`}
                    count={following?.length as number}
                    label="global.following"
                  />
                </div>
              </div>
              {username === isLoggedInUser?.username && (
                <Modal>
                  <Modal.Open label="update-me">
                    <div className="h-12 w-12 cursor-pointer rounded-full text-light-title transition-colors duration-500 hover:bg-light-paper hover:!text-primary-primary dark:text-dark-title hover:dark:bg-dark-paper">
                      <span className="material-icons-outlined flex h-12 w-12 items-center justify-center rounded-full border border-light-divider dark:border-dark-divider">
                        drive_file_rename_outline
                      </span>
                    </div>
                  </Modal.Open>

                  <Modal.Content label="update-me">
                    <EditUserInfoForm />
                  </Modal.Content>
                </Modal>
              )}
            </div>
          </div>

          <UserInfoDetails
            quoteCount={quoteCount}
            facebook={facebook}
            twitter={twitter}
          />
        </div>
      )}
    </>
  );
};

export default UserInfo;
