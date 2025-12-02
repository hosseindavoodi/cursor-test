import { NextRequest, NextResponse } from "next/server";
import { setAccessTokenContract } from "./contracts/auth.contracts";
import { RefreshAction } from "./app/_api/auth/auth.actions";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (refreshToken && !accessToken) {
    try {
      const { accessToken: newAccessToken } = await RefreshAction({ refreshToken: refreshToken });

      const response = NextResponse.next();

      response.cookies.set("accessToken", newAccessToken, setAccessTokenContract);

      return response;
    } catch (error) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
