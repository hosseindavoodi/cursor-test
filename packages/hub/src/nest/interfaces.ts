import type { MicrotravelClientOptions } from '../client.js';

export interface MicrotravelModuleOptions extends MicrotravelClientOptions {
  apiKey?: string;
  apiSecret?: string;
  autoLogin?: boolean; // default true if apiKey/apiSecret provided
}

export interface MicrotravelModuleAsyncOptions {
  useFactory: (...args: any[]) => Promise<MicrotravelModuleOptions> | MicrotravelModuleOptions;
  inject?: any[];
}
