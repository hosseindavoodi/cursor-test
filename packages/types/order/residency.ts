import { PaginatedResult } from "../common/common";
import { OrderStatus } from "./order";

export type RequestOrderResidencyPayload = {
  countryId: string;
};

export type RequestOrderResidencyResponse = {
  message: string;
  status: string;
};

export enum ResidencyOrderStatus {
  REQUESTED = "REQUESTED",
  IN_PROGRESS = "IN_PROGRESS",
  REJECTED = "REJECTED",
  CANCELED = "CANCELED",
  DONE = "DONE",
}

export type ResidencyDetail = {
  id: string;
  totalBaseAmount: number;
  totalTaxAmount: number;
  totalMarkupAmount: number;
  totalPriceAmount: number;
  priceUnit: string;
  status: ResidencyOrderStatus;

  country: {
    countryFaName: string;
    countryEnName: string;
    countryCode: string;
    types: {
      name: string;
      desc: string;
      note?: string;
    }[];
  };
};

export type GetPrivateResidencyOrderListQueries = {
  page: number;
  perPage: number;
  orderNumber?: string;
  countryId?: string;
  status?: ResidencyOrderStatus;
  from?: string;
  to?: string;
};

export type GetPrivateResidencyOrderListResponse = {
  orders: PrivateResidencyOrder[];
} & PaginatedResult;

export type GetPrivateResidencyOrderDetailQueries = {
  orderId: string;
};

export type PrivateChangeResidencyOrderStatusRequest = {
  status: ResidencyOrderStatus;
  orderId: string;
};

export type PrivateChangeResidencyOrderStatusResponse = {
  message: string;
  status: string;
};

export type PrivateResidencyOrder = {
  id: string;
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    nationalCode: string;
    id: string;
  };
  status: OrderStatus;
  orderNumber: number;
  product: string;
  totalBaseAmount: number;
  totalTaxAmount: number;
  totalMarkupAmount: number;
  totalPriceAmount: number;
  createdAt: string;
  residency: {
    id: string;
    totalBaseAmount: number;
    totalMarkupAmount: number;
    totalTaxAmount: number;
    totalPriceAmount: number;
    priceUnit: string;
    status: ResidencyOrderStatus;
    country: {
      countryFaName: string;
      countryEnName: string;
      countryCode: string;
      id: string;
      types: Array<{
        name: string;
        description: string;
        note: string;
      }>;
    };
  };
};
