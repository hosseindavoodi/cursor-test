import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { AxiosError, AxiosInstance } from "axios";
import { omitEmpty } from "@sana/utilities/omit.empty";
import { WalletBalanceResponse, WalletBalanceRequestKeys, WalletIncreaseResponse, WalletIncreaseRequest } from "@sana/types/wallet/wallet";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
export interface WalletServices {
  useWalletBalance: (
    options: UseQueryOptions<WalletBalanceResponse, AxiosError, WalletBalanceResponse, [WalletBalanceRequestKeys]>
  ) => UseQueryResult<WalletBalanceResponse, AxiosError>;

  useWalletIncrease: (
    options?: UseMutationOptions<WalletIncreaseResponse, AxiosError, WalletIncreaseRequest, WalletBalanceResponse>
  ) => UseMutationResult<WalletIncreaseResponse, AxiosError, WalletIncreaseRequest>;
}

export const constructWalletServices = (client: AxiosInstance): WalletServices => ({
  useWalletBalance: (options) => {
    return useQuery({
      ...options,
      queryFn: async ({ queryKey }) => {
        return {
          balance: rialToTomanConvertor(
            (await client.get<{ balance: number }>("/wallets/balance", { params: omitEmpty(queryKey[0]) })).data.balance
          ),
        };
      },
    });
  },

  useWalletIncrease: (options) => {
    return useMutation({ ...options, mutationFn: async (payload) => (await client.post(`/payments/wallet/charge`, payload)).data });
  },
});
