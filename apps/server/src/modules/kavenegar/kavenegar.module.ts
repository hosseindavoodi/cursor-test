// src/kavenegar/kavenegar.module.ts
import { Module, Global, Logger, DynamicModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { KavenegarService } from './kavenegar.service';
import { KavenegarModuleOptions, KavenegarModuleAsyncOptions } from './kavenegar.options';
import {
  KAVENEGAR_HTTP_TIMEOUT_MS,
  KAVENEGAR_OPTIONS,
} from './kavenegar.consts';

@Global()
@Module({})
export class KavenegarModule {
  static forRoot(options: KavenegarModuleOptions): DynamicModule {
    return {
      module: KavenegarModule,
      imports: [
        HttpModule.register({
          timeout: options.timeoutMs || KAVENEGAR_HTTP_TIMEOUT_MS,
          maxRedirects: 0,
        }),
      ],
      providers: [
        {
          provide: KAVENEGAR_OPTIONS,
          useValue: options,
        },
        KavenegarService,
        Logger,
      ],
      exports: [KavenegarService],
    };
  }

  static forRootAsync(options: KavenegarModuleAsyncOptions): DynamicModule {
    return {
      module: KavenegarModule,
      imports: [
        ...(options.imports || []),
        HttpModule.register({
          timeout: KAVENEGAR_HTTP_TIMEOUT_MS,
          maxRedirects: 0,
        }),
      ],
      providers: [
        {
          provide: KAVENEGAR_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        KavenegarService,
        Logger,
      ],
      exports: [KavenegarService],
    };
  }
}