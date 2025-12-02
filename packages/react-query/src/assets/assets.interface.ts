import { AxiosError, AxiosInstance } from "axios";
import {
    useMutation, UseMutationOptions, UseMutationResult,
    useQuery, UseQueryOptions, UseQueryResult
} from "@tanstack/react-query";
import { CreateAssetResponse, CreateAssetPayload } from "@sana/types/assets/assets"

export interface AssetServices {
    useCreatePrivateAssets: (
        options?: UseMutationOptions<CreateAssetResponse, AxiosError, CreateAssetPayload>
    ) => UseMutationResult<CreateAssetResponse, AxiosError, CreateAssetPayload>

    useCreatePublicAssets: (
        options?: UseMutationOptions<CreateAssetResponse, AxiosError, CreateAssetPayload>
    ) => UseMutationResult<CreateAssetResponse, AxiosError, CreateAssetPayload>

}

export const constructAssetServices = (client: AxiosInstance): AssetServices => ({
    useCreatePrivateAssets: (options) => useMutation({
        ...options,
        mutationFn: async (payload) => (await client.post(`/assets/private/create`, payload)).data
    }),

    useCreatePublicAssets: (options) => useMutation({
        ...options,
        mutationFn: async (payload) => (await client.post(`/assets/public/create`, payload)).data
    })
});