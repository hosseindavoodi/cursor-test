import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { AxiosError, AxiosInstance } from "axios";

import { omitEmpty } from "@sana/utilities/omit.empty";
import {
  ResidencyCountryListResponse,
  ResidencyCountryListQueryKeys,
  CreateResidencyCountryResponse,
  CreateResidencyCountryRequest,
} from "@sana/types/residency/residency";

import { RequestOrderResidencyPayload, RequestOrderResidencyResponse } from "@sana/types/order/residency";

export interface ResidencyServices {
  // useUserPassengers : (options : UseQueryOptions<>) => UseQueryResult<>
  useResiencyCountries: (
    options: UseQueryOptions<ResidencyCountryListResponse, AxiosError, ResidencyCountryListResponse, [ResidencyCountryListQueryKeys, string]>
  ) => UseQueryResult<ResidencyCountryListResponse, AxiosError>;

  useResiencyCountriesPrivate: (
    options: UseQueryOptions<ResidencyCountryListResponse, AxiosError, ResidencyCountryListResponse, [ResidencyCountryListQueryKeys, string]>
  ) => UseQueryResult<ResidencyCountryListResponse, AxiosError>;

  useResidencyCountryDetail: (
    options: UseQueryOptions<
      ResidencyCountryListResponse["countries"][1],
      AxiosError,
      ResidencyCountryListResponse["countries"][1],
      [{ countryId: string }]
    >
  ) => UseQueryResult<ResidencyCountryListResponse["countries"][1], AxiosError>;

  useResidencyCreateCountry: (
    options?: UseMutationOptions<CreateResidencyCountryResponse, AxiosError, CreateResidencyCountryRequest, CreateResidencyCountryResponse>
  ) => UseMutationResult<CreateResidencyCountryResponse, AxiosError, CreateResidencyCountryRequest, CreateResidencyCountryResponse>;

  useResidencyOrderRequest: (
    options?: UseMutationOptions<RequestOrderResidencyResponse, AxiosError, RequestOrderResidencyPayload>
  ) => UseMutationResult<RequestOrderResidencyResponse, AxiosError, RequestOrderResidencyPayload>;
}

export const constructResidencyServices = (client: AxiosInstance): ResidencyServices => ({
  useResiencyCountries: (options) =>
    useQuery({
      ...options,
      queryKey: [options.queryKey[0], "residency"],
      queryFn: async ({ queryKey }) => (await client.get(`residency/country/list`, { params: omitEmpty(queryKey[0]) })).data,
    }),

  useResiencyCountriesPrivate: (options) =>
    useQuery({
      ...options,
      queryKey: [options.queryKey[0], "residency"],
      queryFn: async ({ queryKey }) => (await client.get(`/private/residency/country/list`, { params: omitEmpty(queryKey[0]) })).data,
    }),

  useResidencyCountryDetail: (options) =>
    useQuery({ ...options, queryFn: async ({ queryKey }) => (await client.get(`residency/country/detail/${queryKey[0].countryId}`)).data }),

  useResidencyCreateCountry: (options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.post(`/private/residency/country/create`, payload)).data }),

  useResidencyOrderRequest: (options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.post(`/order/residency/request`, payload)).data }),
});
