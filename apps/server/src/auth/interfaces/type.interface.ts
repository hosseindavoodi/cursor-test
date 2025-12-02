import { HttpException } from "@nestjs/common";
import { HealthServiceType } from "src/modules/health/interfaces/health.interface";

export enum Channel {
  MAIL = 'mail',
  WHATSAPP = 'whatsapp',
  SMS = 'sms',
  Password = 'password',
}

export function ChannelToServiceType(channel: Channel): HealthServiceType {
  switch (channel) {
    case Channel.MAIL:
      return HealthServiceType.MAIL;
    case Channel.WHATSAPP:
      return HealthServiceType.WHATSAPP;
    case Channel.SMS:
      return HealthServiceType.SMS;
    case Channel.Password:
        return HealthServiceType.DB;
    default:
      throw new HttpException('Invalid OTP channel', 400);
  }
}