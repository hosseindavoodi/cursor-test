import { PaginatedResult } from "../common/common";
import { VisaType } from "../visa/visa";
import { ResidencyDetail } from "./residency";
import { VisaDetails, VisaOrderStatus } from "./visa";
import { Asset } from "../assets/assets";

export type Order = {
  id: string;
  orderNumber: number;
  product: ProductType;
  totalBaseAmount: number;
  totalTaxAmount: number;
  totalMarkupAmount: number;
  totalPriceAmount: number;
  createdAt: string;
  visa?: VisaDetails;
  residency?: ResidencyDetail;
  status: OrderStatus;
};

export type OrdersOrderIdRequestKeys = {
  orderId: string;
};

export type OrdersOrderResponse = Order;

export type OrdersListRequestKeys = {
  page: number;
  perPage: number;
  orderNumber?: string;
  productType?: ProductType | "ALL";
  fromDate?: string;
  toDate?: string;
};

export type OrdersListResponse = {
  orders: Order[];
} & PaginatedResult;

export enum ProductType {
  VISA = "VISA",
  FLIGHT = "FLIGHT",
  HOTEL = "HOTEL",
  RESIDENCY = "RESIDENCY",
  GROUP_TOUR = "GROUP_TOUR",
  INDIVIDUAL_TOUR = "INDIVIDUAL_TOUR",
}

export enum OrderStatus {
  IN_PROGRESS = "IN_PROGRESS",
  FULFILLED = "FULFILLED",
  FAILED = "FAILED",
  PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
  UNKNOWN = "UNKNOWN",
}


