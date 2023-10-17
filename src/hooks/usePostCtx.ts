import { useContext } from "react";
import { PostContext } from "../context/postContext";

export const usePostCtx = () => {
  const { posts, setPosts, getPost } = useContext(PostContext);

  return {
    posts,
    setPosts,
    getPost,
  };
};

export default usePostCtx;
