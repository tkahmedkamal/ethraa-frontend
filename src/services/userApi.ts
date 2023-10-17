import { IUpdatePassword, IUploadAvatar, IUser } from "../interfaces";
import { create, fetch, update } from "./refactorApis.ts";

export const getUsersApi = async (
  page: string,
  term: string,
  lang: string | undefined,
) => {
  const searchTerm = term.length > 0 ? term : null;
  return await fetch(`/users?page=${page}&limit=10&search=${searchTerm}`, lang);
};

export const getLoggedInUserApi = async (lang: string | undefined) => {
  return await fetch("/users/me", lang, true);
};

export const getUserApi = async (
  username: string,
  lang: string | undefined,
) => {
  return await fetch(`/users/for-users/${username}`, lang);
};

export const uploadUserAvatarApi = async (
  data: IUploadAvatar,
  lang: string | undefined,
) => {
  const { username, file } = data;
  return await update(
    `/users/upload-avatar/${username}`,
    { file },
    lang,
    false,
  );
};

export const updateMeApi = async (data: IUser, lang: string | undefined) => {
  return await update("/users/update-me", data, lang);
};

export const updateMePasswordApi = async (
  data: IUpdatePassword,
  lang: string | undefined,
) => {
  return await update("/users/update-me-password", data, lang);
};

export const followUnFollowApi = async (
  username: string | undefined,
  lang: string | undefined,
) => {
  return await update(`/users/follow/${username}`, {}, lang, false);
};

export const getUserFollowersApi = async (
  page: number,
  username: string | undefined,
  lang: string | undefined,
) => {
  return await fetch(
    `/users/user-followers/${username}?limit=10&page=${page}`,
    lang,
  );
};

export const getPeopleYouMayKnowApi = async (
  page: number,
  limit: number,
  lang: string | undefined,
) => {
  return await fetch(
    `/users/suggest-following?limit=${limit}&page=${page}`,
    lang,
  );
};

export const getMosInfluentialUserApi = async (lang: string | undefined) => {
  return await fetch("/users/top-liked-posts-users", lang);
};

export const getUserFollowingApi = async (
  page: number,
  username: string | undefined,
  lang: string | undefined,
) => {
  return await fetch(
    `/users/user-following/${username}?limit=10&page=${page}`,
    lang,
  );
};

export const verifyAccountTokenApi = async (lang: string | undefined) => {
  return await create("/auth/verify-account-token", {}, lang, false);
};

export const activeAccountApi = async (
  accountToken: string | undefined,
  lang: string | undefined,
) => {
  return await update(
    `/auth/activate-account?token=${accountToken}`,
    {},
    lang,
    false,
  );
};

export const deactivateAccountApi = async (lang: string | undefined) => {
  return await update("/users/deactivate", {}, lang, false);
};

export const updateThemeApi = async (
  isDarkMode: boolean,
  lang: string | undefined,
) => {
  return await update("/users/update-theme", { isDarkMode }, lang, false);
};

export const updateLanguageApi = async (
  language: string,
  lang: string | undefined,
) => {
  return await update("/users/update-language", { language }, lang, false);
};
