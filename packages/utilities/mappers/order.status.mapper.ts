export const orderStatusMapper: Partial<Record<string, { fa: string; className: string; mainColor: string }>> = {
  FULFILLED: {
    fa: "سفارش تکمیل شده",
    className: "bg-green-100 text-green-900",
    mainColor: "bg-green-500",
  },
  FAILED: {
    fa: "سفارش ناموفق",
    className: "bg-red-100 text-red-900",
    mainColor: "bg-red-500",
  },
  PARTIALLY_FULFILLED: {
    fa: "سفارش ناقص",
    className: "bg-yellow-100 text-red-900",
    mainColor: "bg-yellow-500",
  },
  UNKNOWN: {
    fa: "نامشخص",
    className: "bg-gray-100 text-gray-900",
    mainColor: "bg-gray-500",
  },
};

export const visaOrderStatusMapper: Partial<Record<string, { fa: string; className: string; mainColor: string }>> = {
  REQUESTED: {
    fa: "درخواست شده",
    className: "bg-blue-100 text-blue-900",
    mainColor: "bg-blue-500",
  },
  CONFIRMED: {
    fa: "ثبت مسافرین",
    className: "bg-teal-100 text-teal-900",
    mainColor: "bg-teal-500",
  },
  PAYMENT_FAILED: {
    fa: "پرداخت ناموفق",
    className: "bg-red-100 text-red-900",
    mainColor: "bg-red-500",
  },
  PAYMENT_SUCCESSFUL: {
    fa: "پرداخت موفق",
    className: "bg-emerald-100 text-emerald-900",
    mainColor: "bg-emerald-500",
  },
  PENDING_REFUND: {
    fa: "در انتظار استرداد",
    className: "bg-yellow-100 text-yellow-900",
    mainColor: "bg-yellow-500",
  },
  REFUNDED: {
    fa: "استرداد شده",
    className: "bg-sky-100 text-sky-900",
    mainColor: "bg-sky-500",
  },
  DOCUMENTS_REJECTED: {
    fa: "مدارک مورد تایید نیست",
    className: "bg-red-100 text-red-900",
    mainColor: "bg-red-500",
  },
  DOCUMENTS_ACCEPTED: {
    fa: "مدارک تایید شده",
    className: "bg-green-100 text-green-900",
    mainColor: "bg-green-500",
  },
  IN_PROGRESS: {
    fa: "در حال انجام",
    className: "bg-emerald-100 text-emerald-900",
    mainColor: "bg-emerald-500",
  },
  VISA_ISSUED: {
    fa: "ویزا صادر شده",
    className: "bg-green-100 text-green-900",
    mainColor: "bg-green-500",
  },
};

export const residencyOrderStatusMapper: Partial<Record<string, { fa: string; className: string; mainColor: string }>> = {
  REQUESTED: {
    className: "bg-blue-100 text-blue-900",
    fa: "درخواست شده",
    mainColor: "bg-blue-500",
  },
  IN_PROGRESS: {
    className: "bg-emerald-100 text-emerald-900",
    fa: "در حال انجام",
    mainColor: "bg-emerald-900",
  },
  REJECTED: {
    className: "bg-red-100 text-red-900",
    fa: "رد شده",
    mainColor: "bg-red-500",
  },
  CANCELED: {
    className: "bg-gray-100 text-gray-900",
    fa: "کنسل شده",
    mainColor: "bg-gray-900",
  },
  DONE: {
    className: "bg-green-100 text-green-900",
    fa: "اقامت صادر شده",
    mainColor: "bg-green-900",
  },
};
// REQUESTED CONFIRMED PENDING_PAYMENT PAYMENT_SUCCESSFUL PAYMENT_FAILED PENDING_REFUND REFUNDED RESERVED ISSUED DONE UNKNOWN
