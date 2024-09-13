import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Accept-Language": "ar",
    "Content-Type": "application/json",
  },
});
