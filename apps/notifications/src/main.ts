import { NestFactory } from '@nestjs/core';
import {
  MicroserviceOptions,
  Transport,
  RedisStatus,
} from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.REDIS,
      options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: +(process.env.REDIS_PORT || 6379),
        retryAttempts: 0,
        retryDelay: 0,
        wildcards: true,
        retryStrategy: (times: number) => Math.min(times * 100, 2000),
      },
    });

  microservice.status.subscribe((s: RedisStatus) => {
    console.log('[notifications] server status:', s);
  });

  microservice.on('error', (err) => {
    console.error('[notifications] microservice error:', err);
  });

  await microservice.listen();
}
bootstrap();
