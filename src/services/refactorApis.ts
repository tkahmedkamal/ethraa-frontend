import { AxiosError } from "axios";
import { axiosConfig } from "../config";

const headers = (token: string | null, lang: string | undefined) => {
  return {
    Authorization: `Bearer ${token}`,
    "Accept-Language": lang || "ar",
  };
};

const handleError = (err: unknown, fromInput: boolean, removeToken = false) => {
  if (err instanceof AxiosError) {
    const { response } = err;

    if (fromInput) {
      const errors = !Array.isArray(response?.data?.errors)
        ? response?.data.errors
        : JSON.stringify(response?.data?.errors);

      throw new Error(errors);
    }

    if (removeToken) {
      localStorage.removeItem("access_token");
    }

    throw new Error(response?.data.errors);
  }
};

export const fetch = async (
  url: string,
  lang: string | undefined,
  removeToken = false,
) => {
  const token = localStorage.getItem("access_token");

  try {
    const res = await axiosConfig.get(url, {
      headers: headers(token, lang),
    });

    return res?.data;
  } catch (err: unknown) {
    handleError(err, false, removeToken);
  }
};

export const create = async (
  url: string,
  data: any,
  lang: string | undefined,
  fromInputs = true,
) => {
  const token = localStorage.getItem("access_token");

  try {
    const res = await axiosConfig.post(url, data, {
      headers: headers(token, lang),
    });

    return res?.data;
  } catch (err: unknown) {
    handleError(err, fromInputs);
  }
};

export const update = async (
  url: string,
  data: any,
  lang: string | undefined,
  fromInputs = true,
) => {
  const token = localStorage.getItem("access_token");

  try {
    const res = await axiosConfig.patch(url, data, {
      headers: headers(token, lang),
    });

    return res?.data;
  } catch (err: unknown) {
    handleError(err, fromInputs);
  }
};

export const remove = async (url: string, lang: string | undefined) => {
  const token = localStorage.getItem("access_token");

  try {
    const res = await axiosConfig.delete(url, {
      headers: headers(token, lang),
    });

    return res?.data;
  } catch (err: unknown) {
    handleError(err, false);
  }
};
