"use server";

import { cookies } from "next/headers";
import { setAccessTokenContract, setRefreshTokenContract } from "../../../../client-desktop/contracts/auth.contracts";
import { client } from "../../../../client-desktop/lib/axios.config";
import { AxiosResponse } from "axios";

export const SignInAction = async ({ accessToken, refreshToken }: { accessToken: string; refreshToken: string }) => {
  console.log({ accessToken, refreshToken });

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

export const SignOutAction = async () => {
  const cookiesStore = await cookies();

  cookiesStore.delete("accessToken");
  cookiesStore.delete("refreshToken");
};

export const accessCheck = async (): Promise<boolean> => {
  const cookiesStore = await cookies();

  const access = cookiesStore.get("refreshToken");

  return access?.value ? true : false;
};
