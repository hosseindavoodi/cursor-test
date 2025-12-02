import { Asset } from "../assets/assets";
import { PaginatedResult } from "../common/common";
import { VisaType } from "../visa/visa";
import { OrderStatus } from "./order";

export type VisaGroup = {
  startAge: number;
  endAge: number;
  title: string;
};

export type VisaAsset = {
  fileName: string;
  previewUrl: string;
  assetId: string;
  type: string | null;
};

export type VisaPrice = {
  totalBaseAmount: number;
  totalMarkupAmount: number;
  totalTaxAmount: number;
  totalPriceAmount: number;
};

export type VisaPassenger = {
  id: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  email: string | null;
  gender: string;
  birthdate: string;
  group: VisaGroup;
  passportNumber: string;
  passportExpireDate: string;
  nationalityCode: string;
  price: VisaPrice;
  assets: VisaAsset[];
};

export type VisaCountry = {
  countryCode: string;
  countryEnName: string;
  countryFaName: string;
  isValidForDays: number;
  processTime: string;
  types: string[];
  assets: VisaAsset[];
  requireOrderAssetTypes: RequireVisaCountryAssetTypes[];
};

export type RequireVisaCountryAssetTypes = {
  type: string;
  desc: string;
};

export type VisaPassengerAssets = {
  type: string;
  visaPassengerId: string;
  assetId?: string;
  file?: File;
};

export enum VisaOrderStatus {
  REQUESTED = "REQUESTED",
  CONFIRMED = "CONFIRMED",
  PAYMENT_SUCCESSFUL = "PAYMENT_SUCCESSFUL",
  PAYMENT_FAILED = "PAYMENT_FAILED",
  PENDING_REFUND = "PENDING_REFUND",
  REFUNDED = "REFUNDED",
  VISA_ISSUED = "VISA_ISSUED",
  DOCUMENTS_REJECTED = "DOCUMENTS_REJECTED",
  DOCUMENTS_ACCEPTED = "DOCUMENTS_ACCEPTED",
  REJECTED = "REJECTED",
  IN_PROGRESS = "IN_PROGRESS",
}

export type VisaDetails = {
  country: VisaCountry;
  type: string;
  durationInDays: number;
  totalBaseAmount: number;
  totalMarkupAmount: number;
  totalTaxAmount: number;
  totalPriceAmount: number;
  priceUnit: string;
  status: VisaOrderStatus;
  passengers: VisaPassenger[];
};

export type VisaConfirmPayload = {
  passengers: VisaConfirmPassengers[];
  orderId: string;
};

export type VisaConfirmResponse = {
  message: string;
  orderId: string;
  requirePayment: boolean;
};

export type VisaConfirmPassengers = {
  birthdate: string;
  passportExpireDate: string;
  passengerId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  passportNumber: string;
  nationalityCode: string;
  gender: string;
  documents: { fileName: string }[];

  group: {
    startAge: number;
    endAge: number;
    title: string;
  };
};

export type VisaRequestPaymentPayload = {
  wallet: boolean;
  orderId: string;
};

export type VisaRequestPaymentResponse = {
  body: object;
  redirectUrl: string;
};

export type PrivateVisaOrderListQueries = {
  page: number;
  perPage: number;
  orderNumber?: string;
  countryId?: string;
  status?: string;
  from?: string;
  to?: string;
};

export type PrivateVisaOrderListResponse = {
  orders: {
    id: string;
    customer: {
      firstName: string;
      lastName: string;
      phone: string;
      nationalCode: string;
      id: string;
    };
    status: OrderStatus;
    createdAt: string;
    orderNumber: number;
    product: string;
    totalBaseAmount: number;
    totalTaxAmount: number;
    totalMarkupAmount: number;
    totalPriceAmount: number;
    visa: {
      id: string;
      type: VisaType;
      durationInDays: number;
      totalBaseAmount: number;
      totalMarkupAmount: number;
      totalPriceAmount: number;
      priceUnit: string;
      status: VisaOrderStatus;
      country: {
        countryEnName: string;
        countryFaName: string;
        countryCode: string;
        proccessTime: string;
        isValidForDays: number;
        types: VisaType[];
        requiredOrderAssetTypes: { type: string; desc: string }[];
        assets: Asset[];
      };
      passengers: {
        id: string;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        gender: string;
        birthdate: string;
        passportNumber: string;
        passportExpireDate: string;
        nationalityCode: string;
        group: {
          startAge: number;
          endAge: number;
          title: string;
        };
        prices: {
          totalBaseAmount: number;
          totalMarkupAmount: number;
          totalTaxAmount: number;
          totalPriceAmount: number;
        };

        assets: Asset[];
      }[];
    };
  }[];
} & PaginatedResult;

export type PrivateChangeVisaOrderStatusRequest = {
  status: string;
  orderId: string;
};

export type PrivateChangeVisaOrderStatusResponse = {
  message: string;
  status: string;
};
