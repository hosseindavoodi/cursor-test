import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaService } from "./services/prisma.service";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";
import { CacheModule } from "@nestjs/cache-manager";
import { KavenegarModule } from "./modules/kavenegar/kavenegar.module";
import { MailModule } from "./mail/mail.module";

import { VisaModule } from "./modules/visa/visa.module";
import { OrderModule } from "./modules/order/order.module";
import { UserContextMiddleware } from "./common/middlewares/user-context.middleware";
import { AcceptLanguageResolver, HeaderResolver, I18nModule, QueryResolver } from "nestjs-i18n";
import { join } from "path";
import { PaymentModule } from "./modules/payment/payment.module";
import { PassengersModule } from "./modules/passengers/passengers.module";
import KeyvRedis from "@keyv/redis";
import { KeyvAdapter } from "cache-manager";
import { AssetsModule } from "./modules/assets/assets.module";
import { ProfileModule } from "./modules/profile/profile.module";
import { ResidencyModule } from "./modules/residency/residency.module";
import { IkcModule } from "./modules/ikc/ikc.module";
import { FlightModule } from "./modules/flight/flight.module";
import { AirportsModule } from "./modules/airports/airport.module";

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: "en",
      loaderOptions: {
        path: join(__dirname, "/i18n/"),
        watch: true,
      },
      resolvers: [{ use: QueryResolver, options: ["lang"] }, AcceptLanguageResolver, new HeaderResolver(["x-lang"])],
      typesOutputPath: join(__dirname, "../src/generated/i18n.generated.ts"),
    }),
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    CacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        stores: [
          new KeyvRedis<KeyvAdapter>(
            `redis://${config.get("REDIS_USER", "default")}@${config.get("REDIS_HOST", "localhost")}:${config.get("REDIS_PORT", 6379)}/${config.get("REDIS_DB_CACHE", 0)}`
          ),
        ],
      }),
      isGlobal: true,
    }),
    KavenegarModule.forRoot({
      apiKey: process.env.KAVENEGAR_API_KEY,
      baseUrl: process.env.KAVENEGAR_BASE_URL,
      defaultSender: process.env.KAVENEGAR_DEFAULT_SENDER,
      timeoutMs: 8000,
    }),
    AuthModule,
    AirportsModule,
    AdminModule,
    MailModule,
    VisaModule,
    PaymentModule,
    OrderModule,
    PassengersModule,
    AssetsModule,
    ProfileModule,
    ResidencyModule,
    FlightModule,
    IkcModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        baseUrl: cfg.getOrThrow('IKC_BASE_URL'),
        terminalId: cfg.getOrThrow('IKC_TERMINAL_ID'),
        acceptorId: cfg.getOrThrow('IKC_ACCEPTOR_ID'),
        passPhrase: cfg.getOrThrow('IKC_PASSPHRASE'),
        // aesKeyHex: cfg.getOrThrow('IKC_AES_KEY_HEX'),
        // aesIvHex: cfg.getOrThrow('IKC_AES_IV_HEX'),
        rsaPublicKeyPem: cfg.getOrThrow('IKC_RSA_PUBLIC_KEY_PEM'),
        enforceRevertHost: cfg.get('IKC_REVERT_HOST'),
        defaultHeaders: {},
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserContextMiddleware).forRoutes("*"); // Apply to all routes, or specify specific routes/controllers
  }
}
