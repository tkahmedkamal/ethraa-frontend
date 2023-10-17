import { createContext, useState, useMemo } from "react";
import { IChildren, IPost, IPostContext } from "../interfaces";

export const PostContext = createContext<IPostContext>({} as IPostContext);

const PostProvider: React.FC<IChildren> = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPost = (postId: string) => {
    return posts?.find(({ _id }) => _id === postId);
  };

  const memoValues = useMemo(
    () => ({
      posts,
    }),
    [posts],
  );

  return (
    <PostContext.Provider value={{ ...memoValues, setPosts, getPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
