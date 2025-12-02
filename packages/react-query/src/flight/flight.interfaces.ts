import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import {
  FlightSearchPayload,
  FlightSearchResponse,
  RetrieveFlightOfferQueries,
  RetrieveFlightOfferResponse,
  SaveFlightOfferPayload,
  SaveFlightOfferResponse,
} from "@sana/types/flight/flight";

import { SaveFlightPassengersPayload, SaveFlightPassengersResponse } from "@sana/types/flight/passengers";
import { AxiosError, AxiosInstance } from "axios";

export interface FlightServices {
  useFlightAvailable: (
    options: UseQueryOptions<FlightSearchResponse, AxiosError, FlightSearchResponse, [FlightSearchPayload]>
  ) => UseQueryResult<FlightSearchResponse, AxiosError>;

  useSaveFlightOffer: (
    options?: UseMutationOptions<SaveFlightOfferResponse, AxiosError, SaveFlightOfferPayload, SaveFlightOfferResponse>
  ) => UseMutationResult<SaveFlightOfferResponse, AxiosError, SaveFlightOfferPayload>;

  useSaveFlightRetrieveOffer: (
    options: UseQueryOptions<RetrieveFlightOfferResponse, AxiosError, RetrieveFlightOfferResponse, [RetrieveFlightOfferQueries]>
  ) => UseQueryResult<RetrieveFlightOfferResponse, AxiosError>;

  useSaveFlightPassengers: (
    offerId: string,
    options?: UseMutationOptions<SaveFlightPassengersResponse, AxiosError, SaveFlightPassengersPayload, SaveFlightPassengersResponse>
  ) => UseMutationResult<SaveFlightPassengersResponse, AxiosError, SaveFlightPassengersPayload, SaveFlightPassengersResponse>;
  // useUserPassengers : (options : UseQueryOptions<>) => UseQueryResult<>
}

export const constructFlightServices = (client: AxiosInstance): FlightServices => ({
  useFlightAvailable: (options) =>
    useQuery({ ...options, queryFn: async ({ queryKey }) => (await client.post(`/flights/search`, queryKey[0])).data }),

  useSaveFlightOffer: (options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.post(`/flights/offers`, payload)).data }),

  useSaveFlightRetrieveOffer: (options) =>
    useQuery({ ...options, queryFn: async ({ queryKey }) => (await client.get(`/flights/offers/${queryKey[0].id}`)).data }),

  useSaveFlightPassengers: (offerId, options) =>
    useMutation({ ...options, mutationFn: async (payload) => (await client.post(`/flights/offers/${offerId}/passengers`, payload)).data }),
});
