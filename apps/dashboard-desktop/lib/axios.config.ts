import axios from "axios";
import { RetrieveTokens } from "../app/_api/auth/auth.actions";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const tokens = await RetrieveTokens();

  if (tokens.accessToken) {
    config.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }

  return config;
});

export const client = axiosInstance;
