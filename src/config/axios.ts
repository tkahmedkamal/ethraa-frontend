import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://ethraa-api.up.railway.app/api",
  headers: {
    "Accept-Language": "ar",
    "Content-Type": "application/json",
  },
});
