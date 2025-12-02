import { QueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { AuthServices, constructAuthServices } from "./auth/auth.interfaces";
import { constructOrderServices, OrderServices } from "./order/order.interfaces";
import { constructUserServices, UserServices } from "./user/user.interfaces";
import { constructVisaServices, VisaServices } from "./visa/visa.interfaces";
import { AssetServices, constructAssetServices } from "./assets/assets.interface";
import { constructWalletServices, WalletServices } from "./wallet/wallet.interface";
import { constructResidencyServices, ResidencyServices } from "./residency/residency.interfaces";
import { constructFlightServices, FlightServices } from "./flight/flight.interfaces";

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
}

export class Services {
  private client: AxiosInstance;
  private static servicesInstance: Services;

  private authQueries: AuthServices;
  private orderQueries: OrderServices;
  private userQueries: UserServices;
  private flightQueries: FlightServices;
  private visaQueries: VisaServices;
  private assetQueries: AssetServices;
  private walletQueries: WalletServices;
  private residencyQueries: ResidencyServices;

  constructor(axiosClient: AxiosInstance) {
    this.client = axiosClient;
    this.authQueries = constructAuthServices(axiosClient);
    this.orderQueries = constructOrderServices(axiosClient);
    this.userQueries = constructUserServices(axiosClient);
    this.visaQueries = constructVisaServices(axiosClient);
    this.assetQueries = constructAssetServices(axiosClient);
    this.walletQueries = constructWalletServices(axiosClient);
    this.residencyQueries = constructResidencyServices(axiosClient);
    this.flightQueries = constructFlightServices(axiosClient);
  }

  public static getInstance(client: AxiosInstance) {
    if (!Services.servicesInstance) {
      Services.servicesInstance = new Services(client);
    }
    return this.servicesInstance;
  }

  public get auth() {
    return this.authQueries;
  }
  public get orders() {
    return this.orderQueries;
  }
  public get user() {
    return this.userQueries;
  }
  public get visa() {
    return this.visaQueries;
  }
  public get asset() {
    return this.assetQueries;
  }
  public get wallet() {
    return this.walletQueries;
  }
  public get residency() {
    return this.residencyQueries;
  }

  public get flight() {
    return this.flightQueries;
  }
}
