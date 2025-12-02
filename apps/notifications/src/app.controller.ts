import { Controller } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';
import { NotificationsService } from './app.service';

@Controller()
export class NotificationsController {
  constructor(private readonly svc: NotificationsService) {}

  @EventPattern('notify.*')
  async onNotify(@Payload() payload: any, @Ctx() ctx: RedisContext) {
    const channel = ctx.getChannel();
    await this.svc.dispatch(channel, payload);
  }

  @EventPattern('notify.email')
  async email(
    @Payload()
    dto: {
      to: string;
      subject: string;
      html?: string;
      text?: string;
    },
  ) {
    await this.svc.sendEmail(dto);
  }

  @EventPattern('notify.sms')
  async sms(@Payload() dto: { phoneNumber: string; text: string }) {
    await this.svc.sendSms(dto);
  }
}
