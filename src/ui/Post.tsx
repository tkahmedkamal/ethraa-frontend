import { Badge, Card, LoadingIcon, PostHeadActions, PostUserInfo } from ".";
import { Size } from "../enums";
import { IPost } from "../interfaces";
import usePostLogic from "../logic/postLogic";

const Post: React.FC<IPost> = ({
  _id,
  user,
  quote,
  quoteFor,
  likes,
  dislikes,
  createdAt,
}) => {
  const {
    pathname,
    userData,
    time,
    isLoggedInLike,
    isLoggedInDislike,
    isLoadingDislike,
    audioRef,
    loggedInUser,
    handleLike,
    handleDislike,
  } = usePostLogic({ _id, user, createdAt, likes, dislikes } as IPost);

  return (
    <>
      <Card>
        <div className="flex justify-between">
          <PostUserInfo {...userData} datetime={time} size={Size.SMALL} />

          <div className="relative" key={_id}>
            <PostHeadActions postId={_id} userId={userData?._id} />
          </div>
        </div>

        <p className="py-5 font-extrabold leading-loose text-light-title dark:text-dark-title">
          {quote}
        </p>

        <div className="flex items-center justify-between">
          <Badge label={quoteFor} />

          {pathname !== "/bookmarks" && (
            <div className="flex items-center gap-2">
              <div
                className={`reaction h-[34px] ${
                  isLoggedInLike
                    ? "!border-common-accent/10 bg-common-accent/5 !text-common-accent"
                    : null
                }`}
                onClick={handleLike}
              >
                <div
                  className={`heart ${
                    isLoggedInLike
                      ? `is_animating ${
                          loggedInUser?.language === "ar"
                            ? "bg-right"
                            : "bg-left"
                        }`
                      : null
                  } h-[50px] w-[50px] cursor-pointer bg-over  bg-no-repeat  ${
                    loggedInUser?.language === "ar"
                      ? "bg-left hover:bg-right"
                      : "-bg-left hover:bg-left"
                  }`}
                />
                <span className="relative -right-4 left-4">
                  {likes?.length}
                </span>
              </div>

              <div className="reaction" onClick={handleDislike}>
                {isLoadingDislike ? (
                  <LoadingIcon />
                ) : (
                  <span
                    className={`${
                      isLoggedInDislike
                        ? "material-icons text-primary-primary"
                        : "material-icons-outlined"
                    } block text-base`}
                  >
                    thumb_down_alt
                  </span>
                )}
                {dislikes?.length}
              </div>
            </div>
          )}
        </div>
      </Card>

      <audio ref={audioRef}>
        <source src="like-dislike-sound.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};

export default Post;
