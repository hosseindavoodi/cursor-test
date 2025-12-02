export interface KavenegarReturn {
  status: number; // 200 => OK, otherwise error (per provider spec)
  message: string;
}

export interface KavenegarResponse<T = any> {
  return: KavenegarReturn;
  entries: T;
  metadata?: any;
}

export type UnixTime = number; // seconds since epoch

export interface SmsEntry {
  messageid: number;
  message: string;
  status: number;
  statustext: string;
  sender: string;
  receptor: string;
  date: UnixTime;
  cost?: number;
}

export interface SendParams {
  receptor: string; // CSV allowed
  message: string;
  sender?: string;
  date?: UnixTime;
  type?: string; // only for some lines (3000)
  localid?: number | string;
  hide?: 0 | 1;
  tag?: string;
}

export interface SendArrayParams {
  receptor: string[];
  sender: string[];
  message: string[];
  date?: UnixTime[] | UnixTime;
  type?: number[];
  localmessageids?: (number | string)[];
  hide?: 0 | 1;
  tag?: string;
}

export interface StatusParams { messageid: number | string | Array<number | string>; }
export interface StatusLocalParams { localid: number | string | Array<number | string>; }
export interface StatusByReceptorParams {
  receptor: string;
  startdate: UnixTime; // enddate optional
  enddate?: UnixTime;
}
export interface SelectParams { messageid: number | string | Array<number | string>; }
export interface SelectOutboxParams {
  startdate: UnixTime;
  enddate?: UnixTime;
  sender?: string;
}
export interface LatestOutboxParams { pagesize?: number; sender?: string; }
export interface CountOutboxParams { startdate: UnixTime; enddate?: UnixTime; status?: number; }
export interface CancelParams { messageid: number | string | Array<number | string>; }
export interface ReceiveParams { linenumber: string; isread: 0 | 1; }
export interface InboxPagedParams extends ReceiveParams { startdate?: UnixTime; enddate?: UnixTime; pagenumber?: number; }
export interface BlockedListParams { linenumber: string; blockreason?: number; startdate?: UnixTime; pagenumber?: number; }
export interface CountInboxParams { startdate: UnixTime; enddate?: UnixTime; linenumber?: string; isread?: 0 | 1; }
export interface LookupParams {
  receptor: string;
  template: string;
  token: string;
  token2?: string; token3?: string; token10?: string; token20?: string;
  type?: 'sms' | 'call';
  tag?: string;
}
export interface TtsParams { receptor: string; message: string; date?: UnixTime; localid?: string; tag?: string; }
