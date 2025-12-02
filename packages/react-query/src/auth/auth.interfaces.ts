import { AxiosError, AxiosInstance } from "axios";
import { useMutation, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";

import {
  AuthLoginByPasswordResponse,
  AuthLoginRequest,
  AuthLoginResponse,
  AuthLogoutResponse,
  AuthProfileResponse,
  AuthVerifyRequest,
  AuthVerifyResponse,
} from "@sana/types/auth/auth";

export interface AuthServices {
  useLogin: (
    options: UseMutationOptions<AuthLoginResponse, AxiosError, AuthLoginRequest>
  ) => UseMutationResult<AuthLoginResponse, AxiosError, AuthLoginRequest>;

  useLoginByPassword: (
    options: UseMutationOptions<AuthLoginByPasswordResponse, AxiosError, AuthLoginRequest>
  ) => UseMutationResult<AuthLoginByPasswordResponse, AxiosError, AuthLoginRequest>;

  useAuthVerify: (
    options: UseMutationOptions<AuthVerifyResponse, AxiosError, AuthVerifyRequest>
  ) => UseMutationResult<AuthVerifyResponse, AxiosError, AuthVerifyRequest>;

  useLogout: (
    options: UseMutationOptions<AuthLogoutResponse, AxiosError, undefined>
  ) => UseMutationResult<AuthLogoutResponse, AxiosError, undefined>;

  // useAuthForgotPassword: (
  //   options: UseMutationOptions<AuthVerifyResponse, AxiosError, AuthVerifyRequest>
  // ) => UseMutationResult<AuthVerifyResponse, AxiosError, AuthVerifyRequest>;

  // useAuthResetPassword: (
  //   options: UseMutationOptions<AuthVerifyResponse, AxiosError, AuthVerifyRequest>
  // ) => UseMutationResult<AuthVerifyResponse, AxiosError, AuthVerifyRequest>;

  // useAuthChangePassword: (
  //   options: UseMutationOptions<AuthVerifyResponse, AxiosError, AuthVerifyRequest>
  // ) => UseMutationResult<AuthVerifyResponse, AxiosError, AuthVerifyRequest>;
}

export const constructAuthServices = (client: AxiosInstance): AuthServices => ({
  useLogin: (options) =>
    useMutation({
      ...options,
      mutationFn: async (payload) => (await client.post("/auth/login", payload)).data,
    }),

  useLoginByPassword: (options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.post("/auth/login", payload)).data }),

  useAuthVerify: (options) => useMutation({ ...options, mutationFn: async (payload) => (await client.post("/auth/verify", payload)).data }),

  useLogout: (options) => useMutation({ ...options, mutationFn: async (payload) => (await client.post("/auth/logout")).data }),
});
