import { AxiosError } from "axios";
import { axiosConfig } from "../config";
import { IForgotPassword, ILogin, IResetPasswordApi } from "../interfaces";

export const loginApi = async (data: ILogin) => {
  try {
    const res = await axiosConfig.post("/auth/login", data);
    localStorage.setItem("access_token", res.data.access_token);

    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const { response } = err;
      throw new Error(response?.data.errors);
    }
  }
};

export const signupApi = async (data: ILogin) => {
  try {
    const res = await axiosConfig.post("/auth/signup", data);
    localStorage.setItem("access_token", res.data.access_token);

    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const { response } = err;
      const errors = !Array.isArray(response?.data?.errors)
        ? response?.data.errors
        : JSON.stringify(response?.data?.errors);

      throw new Error(errors);
    }
  }
};

export const forgotPasswordApi = async (data: IForgotPassword) => {
  try {
    const res = await axiosConfig.post("/auth/forgot-password", data);
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const { response } = err;
      throw new Error(response?.data.errors);
    }
  }
};

export const resetPasswordApi = async (data: IResetPasswordApi) => {
  const { token, values } = data;

  try {
    const res = await axiosConfig.patch(
      `/auth/reset-password?token=${token}`,
      values,
    );
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      const { response } = err;
      const errors = !Array.isArray(response?.data?.errors)
        ? response?.data.errors
        : JSON.stringify(response?.data?.errors);

      throw new Error(errors);
    }
  }
};
