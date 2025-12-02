import { AxiosError, AxiosInstance } from "axios";
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import {
  VisaCreateCountryResponse,
  VisaCreateCountryPayload,
  VisaCreateGroupPayload,
  VisaCreateGroupResponse,
  VisaDetailResponse,
  VisaCreatePricesPayload,
  VisaCountryListResponse,
  VisaCountryListQueries,
  RequestVisaOrderPayload,
  RequestVisaOrderResponse,
  VisaCountryPartialUpdatePayload,
} from "@sana/types/visa/visa";
import { CommonResult } from "@sana/types/common/common";
import { omitEmpty } from "@sana/utilities/omit.empty";
import { VisaConfirmPayload, VisaConfirmResponse, VisaRequestPaymentPayload, VisaRequestPaymentResponse } from "@sana/types/order/visa";

export interface VisaServices {
  useCreateVisaCountry: (
    options?: UseMutationOptions<VisaCreateCountryResponse, AxiosError, VisaCreateCountryPayload>
  ) => UseMutationResult<VisaCreateCountryResponse, AxiosError, VisaCreateCountryPayload>;

  useVisaCountryList: (
    options: UseQueryOptions<VisaCountryListResponse, AxiosError, VisaCountryListResponse, [VisaCountryListQueries, string]>
  ) => UseQueryResult<VisaCountryListResponse, AxiosError>;

  useCreateVisaGroup: (
    countryId: string,
    options?: UseMutationOptions<VisaCreateGroupResponse, AxiosError, VisaCreateGroupPayload>
  ) => UseMutationResult<VisaCreateGroupResponse, AxiosError, VisaCreateGroupPayload>;

  useRetrieveVisaDetails: (
    options?: UseQueryOptions<VisaDetailResponse, AxiosError, VisaDetailResponse, [{ countryId: string }]>
  ) => UseQueryResult<VisaDetailResponse, AxiosError>;

  useVisaConfirmOrder: (
    options?: UseMutationOptions<VisaConfirmResponse, AxiosError, VisaConfirmPayload, VisaConfirmResponse>
  ) => UseMutationResult<VisaConfirmResponse, AxiosError, VisaConfirmPayload>;

  useCreateVisaPrice: (
    options?: UseMutationOptions<CommonResult, AxiosError, VisaCreatePricesPayload>
  ) => UseMutationResult<CommonResult, AxiosError, VisaCreatePricesPayload>;

  useRequestVisaOrder: (
    options?: UseMutationOptions<RequestVisaOrderResponse, AxiosError, RequestVisaOrderPayload, RequestVisaOrderResponse>
  ) => UseMutationResult<RequestVisaOrderResponse, AxiosError, RequestVisaOrderPayload>;

  useVisaPayment: (
    options?: UseMutationOptions<VisaRequestPaymentResponse, AxiosError, VisaRequestPaymentPayload, RequestVisaOrderResponse>
  ) => UseMutationResult<VisaRequestPaymentResponse, AxiosError, VisaRequestPaymentPayload>;
  useVisaCountryUpdate: (
    countryId: string,
    options?: UseMutationOptions<VisaCountryPartialUpdatePayload, AxiosError, VisaCountryPartialUpdatePayload>
  ) => UseMutationResult<VisaCountryPartialUpdatePayload, AxiosError, VisaCountryPartialUpdatePayload>
}

export const constructVisaServices = (client: AxiosInstance): VisaServices => ({
  useCreateVisaCountry: (options) =>
    useMutation({
      ...options,
      mutationFn: async (payload) => (await client.post("/private/visa/country/create", payload)).data,
    }),

  useVisaCountryList: (options) =>
    useQuery({
      ...options,
      queryKey: [options.queryKey[0], "visa"],
      queryFn: async ({ queryKey }) => (await client.get("/visa/country/list", { params: omitEmpty(queryKey[0]) })).data,
    }),

  useCreateVisaGroup: (countryId, options) =>
    useMutation({
      ...options,
      mutationFn: (payload) => client.post(`/private/visa/country/groups/add/${countryId}`, payload),
    }),

  useRetrieveVisaDetails: (options) => {
    return useQuery({
      ...options,
      queryKey: options?.queryKey!,
      queryFn: async ({ queryKey }) => (await client.get(`/private/visa/country/detail/${queryKey[0].countryId}`)).data,
    });
  },

  useRequestVisaOrder: (options) => {
    return useMutation({
      ...options,
      mutationFn: async (payload) => (await client.post(`/order/visa/request`, payload)).data,
    });
  },

  useVisaConfirmOrder: (options) => {
    return useMutation({
      ...options,
      mutationFn: async (payload) => (await client.post(`/order/visa/confirm`, payload)).data,
    });
  },

  useCreateVisaPrice: (options) =>
    useMutation({
      ...options,
      mutationFn: async (payload) => await client.post(`/private/visa/country/prices/bulk_add`, payload),
    }),

  useVisaPayment: (options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.post(`/order/visa/pay`, payload)).data }),
  useVisaCountryUpdate: (countryId, options) =>
    useMutation({
      ...options,
      mutationFn: async (payload) => await client.patch(`/private/visa/country/update/${countryId}`, payload),
    }),
});
