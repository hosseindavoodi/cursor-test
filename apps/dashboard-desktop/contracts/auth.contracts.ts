import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const setAccessTokenContract: Partial<ResponseCookie> = {
  maxAge: 60 * 60 * 24,
  httpOnly: true,
  path: "/",
};

export const setRefreshTokenContract: Partial<ResponseCookie> = {
  maxAge: 60 * 60 * 24 * 7,
  httpOnly: true,
  path: "/",
};
