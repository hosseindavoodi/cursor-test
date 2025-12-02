import { ModuleMetadata } from "@nestjs/common";

export interface KavenegarModuleOptions {
  /** Your REST API key from Kavenegar panel */
  apiKey: string;
  /** Base URL for Kavenegar REST API. Defaults to https://api.kavenegar.com */
  baseUrl?: string;
  /** Optional: default sender line (e.g., 3000xxxxx). */
  defaultSender?: string;
  /** Optional: default timeout in ms for HTTP requests (axios). */
  timeoutMs?: number;
}

export interface KavenegarModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args: any[]) => Promise<KavenegarModuleOptions> | KavenegarModuleOptions;
  inject?: any[];
}