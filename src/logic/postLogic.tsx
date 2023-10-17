import { useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { formatTimeDifference } from "../helpers";
import { useAuthCtx, useDislikePost, useLikePost } from "../hooks";
import { IPost } from "../interfaces";

const usePostLogic = ({ _id, user, createdAt, likes, dislikes }: IPost) => {
  const [searchParam] = useSearchParams();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { pathname } = useLocation();
  const { user: loggedInUser } = useAuthCtx();
  const { like, isLoading: isLoadingLike } = useLikePost();
  const { dislike, isLoading: isLoadingDislike } = useDislikePost();

  const isPopular = searchParam.get("posts") === "popular";
  const userData = isPopular && Array.isArray(user) ? user[0] : user;
  const time = formatTimeDifference(createdAt);

  const isLoggedInLike = likes
    .reduce((likes, like) => {
      if (like._id === loggedInUser?._id) {
        likes.push(_id as never);
      }

      return likes;
    }, [])
    .includes(_id as never);

  const isLoggedInDislike = dislikes
    .reduce((dislikes, dislike) => {
      if (dislike._id === loggedInUser?._id) {
        dislikes.push(_id as never);
      }

      return dislikes;
    }, [])
    .includes(_id as never);

  const likeDislikeSound = () => {
    if (audioRef.current !== null) {
      audioRef.current.play();
    }
  };

  const handleLike = () => {
    like(_id as string);
    !isLoggedInLike && likeDislikeSound();
  };

  const handleDislike = () => {
    dislike(_id as string);
  };

  return {
    pathname,
    loggedInUser,
    userData,
    time,
    isLoadingLike,
    isLoadingDislike,
    isLoggedInLike,
    isLoggedInDislike,
    audioRef,
    handleLike,
    handleDislike,
  };
};

export default usePostLogic;
