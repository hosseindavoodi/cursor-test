import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { AxiosError, AxiosInstance } from "axios";

import {
  UserListRequest,
  UserListResponse,
  UserProfileResponse,
  UserProfileUpdatePassportRequest,
  UserProfileUpdateRequest,
} from "@sana/types/user/user";
import { UserPassengerQueries, UserPassengersResponse } from "@sana/types/user/passengers";
import { omitEmpty } from "@sana/utilities/omit.empty";

export interface UserServices {
  // useUserPassengers : (options : UseQueryOptions<>) => UseQueryResult<>
  useUserList: (
    options: UseQueryOptions<UserListResponse, AxiosError, UserListResponse, [UserListRequest]>
  ) => UseQueryResult<UserListResponse, AxiosError>;

  useUserProfile: (
    options: UseQueryOptions<UserProfileResponse, AxiosError, UserProfileResponse, ["USER_PROFILE"]>
  ) => UseQueryResult<UserProfileResponse, AxiosError>;

  useUpdateProfile: (
    options: UseMutationOptions<any, AxiosError, UserProfileUpdateRequest>
  ) => UseMutationResult<any, AxiosError, UserProfileUpdateRequest>;

  useUpdateProfilePassport: (
    options: UseMutationOptions<any, AxiosError, UserProfileUpdatePassportRequest>
  ) => UseMutationResult<any, AxiosError, UserProfileUpdatePassportRequest>;

  useUserPassengers: (
    options: UseQueryOptions<UserPassengersResponse, AxiosError, UserPassengersResponse, [UserPassengerQueries]>
  ) => UseQueryResult<UserPassengersResponse, AxiosError>;
}

export const constructUserServices = (client: AxiosInstance): UserServices => ({
  useUserList: (options) =>
    useQuery({ ...options, queryFn: async ({ queryKey }) => (await client.get(`/users/list`, { params: omitEmpty(queryKey[0]) })).data }),

  useUserProfile: (options) => useQuery({ ...options, queryFn: async ({ queryKey }) => (await client.get(`/profile`)).data }),

  useUpdateProfile: (options) => useMutation({ ...options, mutationFn: async (payload) => (await client.patch(`/profile`, payload)).data }),

  useUpdateProfilePassport: (options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.patch(`/profile/passport`, payload)).data }),

  useUserPassengers: (options) =>
    useQuery({ ...options, queryFn: async ({ queryKey }) => (await client.get("/passengers", { params: omitEmpty(queryKey[0]) })).data }),
});
