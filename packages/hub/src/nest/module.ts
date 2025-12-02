import { DynamicModule, Module } from '@nestjs/common';
import { MicrotravelService } from './service.js';
import { createMicrotravelProviders } from './providers.js';
import type { MicrotravelModuleAsyncOptions, MicrotravelModuleOptions } from './interfaces.js';

@Module({})
export class MicrotravelModule {
  static register(options: MicrotravelModuleOptions): DynamicModule {
    return {
      module: MicrotravelModule,
      providers: [...createMicrotravelProviders(options), MicrotravelService],
      exports: [MicrotravelService],
    };
  }

  static registerAsync(options: MicrotravelModuleAsyncOptions): DynamicModule {
    return {
      module: MicrotravelModule,
      providers: [
        {
          provide: 'ASYNC_OPTS',
          useFactory: options.useFactory,
          inject: options.inject ?? [],
        },
        ...createMicrotravelProviders as any,
        MicrotravelService,
      ],
      exports: [MicrotravelService],
    } as any;
  }
}
