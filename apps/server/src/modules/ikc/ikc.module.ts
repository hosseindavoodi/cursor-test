import { Module, DynamicModule, NestModule, Global } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { IkcService } from './ikc.service';
import { IkcController } from './ikc.controller';
import { IKC_CONFIG, IkcConfig } from './ikc.tokens';

@Global()
@Module({
    imports: [HttpModule.register({ timeout: 15000 })],
    providers: [IkcService],
    exports: [IkcService],
    controllers: [IkcController],
})
export class IkcModule {
    static forRoot(config: IkcConfig): DynamicModule {
        return {
            module: IkcModule,
            providers: [
                IkcService,
                { provide: IKC_CONFIG, useValue: config },
            ],
            exports: [IkcService, IKC_CONFIG],
        };
    }
    static forRootAsync(options: {
        imports?: any[];
        useFactory: (...args: any[]) => Promise<IkcConfig> | IkcConfig;
        inject?: any[];
    }): DynamicModule {
        return {
            module: IkcModule,
            imports: [HttpModule.register({ timeout: 15000 }), ...(options.imports ?? [])],
            controllers: [IkcController],
            providers: [
                IkcService,
                { provide: IKC_CONFIG, useFactory: options.useFactory, inject: options.inject ?? [] },
            ],
            exports: [IkcService, IKC_CONFIG],
        };
    }
}