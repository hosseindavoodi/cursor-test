import { Provider } from '@nestjs/common';
import { MICROTRAVEL_CLIENT, MICROTRAVEL_OPTIONS } from './constants.js';
import { MicrotravelClient } from '../client.js';
import type { MicrotravelModuleOptions } from './interfaces.js';

export const createMicrotravelProviders = (options: MicrotravelModuleOptions): Provider[] => [
  {
    provide: MICROTRAVEL_OPTIONS,
    useValue: options,
  },
  {
    provide: MICROTRAVEL_CLIENT,
    useFactory: async (opts: MicrotravelModuleOptions) => {
      const client = new MicrotravelClient(opts);
      if (opts.apiKey && opts.apiSecret && (opts.autoLogin ?? true)) {
        const res = await client.auth.token({ apiKey: opts.apiKey, apiSecret: opts.apiSecret });
        client.setTokensFromAuth(res);
      }
      return client;
    },
    inject: [MICROTRAVEL_OPTIONS],
  },
];
