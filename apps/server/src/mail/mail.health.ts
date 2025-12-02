import { Injectable } from '@nestjs/common';
import { HealthIndicatorService } from '@nestjs/terminus';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { HealthServiceType } from '../modules/health/interfaces/health.interface';

@Injectable()
export class SmtpHealthIndicator {
    constructor(
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService,
        private readonly healthIndicatorService: HealthIndicatorService,
    ) { }
}
