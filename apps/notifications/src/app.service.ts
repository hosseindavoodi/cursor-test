import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  private readonly log = new Logger('NotificationsService');

  async dispatch(channel: string, payload: any) {
    this.log.debug(`Dispatch ${channel}`);
    if (channel === 'notify.email') {
      return this.sendEmail(payload);
    }
    if (channel === 'notify.sms') {
      return this.sendSms(payload);
    }
  }

  async sendEmail(dto: {
    to: string;
    subject: string;
    html?: string;
    text?: string;
  }) {
    this.log.log(`Email -> ${dto.to} | ${dto.subject}`);
  }

  async sendSms(dto: { phoneNumber: string; text: string }) {
    this.log.log(`Sms -> ${dto.phoneNumber}: ${dto.text}`);
  }
}
