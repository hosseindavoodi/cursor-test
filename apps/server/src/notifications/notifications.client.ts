import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, RedisStatus } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';

@Injectable()
export class NotificationsClient implements OnModuleInit {
    constructor(@Inject('NOTIFY_CLIENT') private readonly client: ClientProxy) { }

    onModuleInit() {
        this.client.status.subscribe((s: RedisStatus) => {
            console.log('[api] notify client status:', s);
        });
    }

    async notifyEmail(dto: { to: string; subject: string; html?: string; text?: string }) {
        try {
            return await firstValueFrom(this.client.emit('notify.email', dto));
        } catch (err) {
            console.error('[api] notify client error:', err);
        }
    }

    async notifySms(dto: { chatId: string; text: string }) {
        try {
            return await firstValueFrom(this.client.emit('notify.telegram', dto));
        } catch (err) {
            console.error('[api] notify client error:', err);
        }
    }

    async ping(): Promise<string> {
        try {
            const res$ = this.client.send<string>('notify.ping', {});
            return await firstValueFrom(res$.pipe(timeout(3000)));
        } catch (err) {
            console.error('[api] notify client error:', err);
        }
    }
}
