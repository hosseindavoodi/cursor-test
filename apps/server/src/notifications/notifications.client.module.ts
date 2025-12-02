import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotificationsClient } from './notifications.client';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'NOTIFY_CLIENT',
                transport: Transport.REDIS,
                options: {
                    host: process.env.REDIS_HOST || 'localhost',
                    port: +(process.env.REDIS_PORT || 6379),
                    wildcards: true,
                },
            },
        ]),
    ],
    providers: [NotificationsClient],
    exports: [NotificationsClient],
})
export class NotificationsClientModule { }
