import { ICreatePost, IUpdatePost } from "../interfaces";
import { create, fetch, remove, update } from "./refactorApis";

export const createPostApi = async (postData: ICreatePost, lang: string) => {
  return await create("/posts", postData, lang);
};

export const getPostsForUsersApi = async (page: number, lang: string) => {
  return await fetch(`/posts/for-users?limit=3&page=${page}`, lang);
};

export const getPostsForUserApi = async (
  username: string,
  page: number,
  lang: string,
) => {
  return await fetch(`/posts/for-user/${username}?limit=3&page=${page}`, lang);
};

export const updatePostApi = async (postData: IUpdatePost, lang: string) => {
  const { postId, quote, quoteFor, isPublic } = postData;
  return await update(`/posts/${postId}`, { quote, quoteFor, isPublic }, lang);
};

export const getFollowingPostsApi = async (page: number, lang: string) => {
  return await fetch(`/posts/following-posts?limit=3&page=${page}`, lang);
};

export const getPopularPostsApi = async (page: number, lang: string) => {
  return await fetch(`/posts/top-ten-posts?limit=3&page=${page}`, lang);
};

export const deletePostApi = async (postId: string, lang: string) => {
  return await remove(`/posts/${postId}`, lang);
};

export const likePostApi = async (postId: string, lang: string) => {
  return await update(`/posts/like/${postId}`, {}, lang, false);
};

export const dislikePostApi = async (postId: string, lang: string) => {
  return await update(`/posts/dislike/${postId}`, {}, lang, false);
};
