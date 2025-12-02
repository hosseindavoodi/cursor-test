import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const setAccessTokenContract: Partial<ResponseCookie> = {
  // secure: process.env.NODE_ENV === "production",
  expires: new Date(Date.now() + 60 * 60 * 1000 * 24), // 1 hour from now
};

export const setRefreshTokenContract: Partial<ResponseCookie> = {
  // secure: process.env.NODE_ENV === "production",
  expires: new Date(Date.now() + 60 * 60 * 1000 * 24 * 7), // 7 days from now
};
