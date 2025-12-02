import { AxiosError, AxiosInstance } from "axios";
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { omitEmpty } from "@sana/utilities/omit.empty";
import { OrdersListRequestKeys, OrdersListResponse, OrdersOrderIdRequestKeys, OrdersOrderResponse } from "@sana/types/order/order";
import {
  PrivateChangeVisaOrderStatusRequest,
  PrivateChangeVisaOrderStatusResponse,
  PrivateVisaOrderListQueries,
  PrivateVisaOrderListResponse,
} from "@sana/types/order/visa";
import {
  GetPrivateResidencyOrderListQueries,
  GetPrivateResidencyOrderListResponse,
  PrivateChangeResidencyOrderStatusRequest,
  PrivateChangeResidencyOrderStatusResponse,
} from "@sana/types/order/residency";

export interface OrderServices {
  useOrderDetail: (
    options: UseQueryOptions<OrdersOrderResponse, AxiosError, OrdersOrderResponse, [OrdersOrderIdRequestKeys]>
  ) => UseQueryResult<OrdersOrderResponse>;

  userOrders: (
    options: UseQueryOptions<OrdersListResponse, AxiosError, OrdersListResponse, [OrdersListRequestKeys]>
  ) => UseQueryResult<OrdersListResponse>;

  usePrivateVisaOrderList: (
    options: UseQueryOptions<
      PrivateVisaOrderListResponse,
      AxiosError,
      PrivateVisaOrderListResponse,
      [PrivateVisaOrderListQueries, "VISA_ORDER_LIST"]
    >
  ) => UseQueryResult<PrivateVisaOrderListResponse, AxiosError>;

  usePrivateVisaOrderDetail: (
    options: UseQueryOptions<
      PrivateVisaOrderListResponse["orders"][number],
      AxiosError,
      PrivateVisaOrderListResponse["orders"][number],
      [{ orderId: string }]
    >
  ) => UseQueryResult<PrivateVisaOrderListResponse["orders"][number], AxiosError>;

  usePrivateChangeVisaOrderStatus: (
    options?: UseMutationOptions<PrivateChangeVisaOrderStatusResponse, AxiosError, PrivateChangeVisaOrderStatusRequest>
  ) => UseMutationResult<PrivateChangeVisaOrderStatusResponse, AxiosError, PrivateChangeVisaOrderStatusRequest>;

  usePrivateResidencyOrderList: (
    options: UseQueryOptions<
      GetPrivateResidencyOrderListResponse,
      AxiosError,
      GetPrivateResidencyOrderListResponse,
      [GetPrivateResidencyOrderListQueries, "RESIDENCY_ORDER_LIST"]
    >
  ) => UseQueryResult<GetPrivateResidencyOrderListResponse, AxiosError>;

  usePrivateResidencyOrderDetail: (
    options: UseQueryOptions<
      GetPrivateResidencyOrderListResponse["orders"][number],
      AxiosError,
      GetPrivateResidencyOrderListResponse["orders"][number],
      [{ orderId: string }]
    >
  ) => UseQueryResult<GetPrivateResidencyOrderListResponse["orders"][number], AxiosError>;

  usePrivateChangeResidencyOrderStatus: (
    options: UseMutationOptions<PrivateChangeResidencyOrderStatusResponse, AxiosError, PrivateChangeResidencyOrderStatusRequest>
  ) => UseMutationResult<PrivateChangeResidencyOrderStatusResponse, AxiosError, PrivateChangeResidencyOrderStatusRequest>;
}

export const constructOrderServices = (client: AxiosInstance): OrderServices => ({
  useOrderDetail: (options) =>
    useQuery({ ...options, queryFn: async ({ queryKey }) => (await client.get(`/orders/order/${queryKey[0].orderId}`)).data }),

  userOrders: (options) =>
    useQuery({ ...options, queryFn: async ({ queryKey }) => (await client.get(`/orders/list`, { params: omitEmpty(queryKey[0]) })).data }),

  usePrivateVisaOrderList: (options) =>
    useQuery({
      ...options,
      queryFn: async ({ queryKey }) => (await client.get(`/private/order/visa/list`, { params: omitEmpty(queryKey[0]) })).data,
    }),

  usePrivateVisaOrderDetail: (options) =>
    useQuery({
      ...options,
      queryFn: async ({ queryKey }) => (await client.get(`/private/order/visa/detail/${queryKey[0].orderId}`)).data,
    }),

  usePrivateChangeVisaOrderStatus: (options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.put(`/private/order/visa/status/update`, payload)).data }),

  usePrivateResidencyOrderList: (options) =>
    useQuery({
      ...options,
      queryFn: async ({ queryKey }) => (await client.get(`/private/order/residency/list`, { params: omitEmpty(queryKey[0]) })).data,
    }),

  usePrivateResidencyOrderDetail: (options) =>
    useQuery({
      ...options,
      queryFn: async ({ queryKey }) => (await client.get(`/private/order/residency/detail/${queryKey[0].orderId}`)).data,
    }),

  usePrivateChangeResidencyOrderStatus: (options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.put(`/private/order/visa/status/update`, payload)).data }),
});
