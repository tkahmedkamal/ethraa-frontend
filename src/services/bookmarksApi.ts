import { create, fetch } from "./refactorApis";

export const getBookmarksForUserApi = async (page: number, lang: string) => {
  return await fetch(`/bookmarks/find-for-user?limit=4&page=${page}`, lang);
};

export const createBookmarkApi = async (postId: string, lang: string) => {
  return await create(`/bookmarks`, { post: postId }, lang, false);
};
