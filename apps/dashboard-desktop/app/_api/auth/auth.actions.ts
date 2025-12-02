"use server";

import { cookies } from "next/headers";
import { AxiosResponse } from "axios";
import { client } from "../../../lib/axios.config";
import { setAccessTokenContract, setRefreshTokenContract } from "../../../contracts/auth.contracts";

export const SignInAction = async ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
  const setAccessToken = (await cookies()).set("accessToken", accessToken, setAccessTokenContract);
  const setRefreshToken = (await cookies()).set("refreshToken", refreshToken, setRefreshTokenContract);
};

export const RefreshAction = async ({ refreshToken }: { refreshToken: string }): Promise<{ accessToken: string }> => {
  try {
    const newAccessToken: AxiosResponse<{ access_token: string }> = await client.post("/auth/refresh", {
      refresh_token: refreshToken,
    });

    return {
      accessToken: newAccessToken.data.access_token,
    };
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const RetrieveTokens = async (): Promise<{ accessToken?: string; refreshToken?: string }> => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = (await cookies()).get("refreshToken")?.value;

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};
