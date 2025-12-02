import { HttpException, Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { HealthService } from '../modules/health/health.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HealthServiceType } from '../modules/health/interfaces/health.interface';


@Injectable()
export class MailService {
  constructor(
    private readonly mailer: MailerService,
    private readonly config: ConfigService,
    // private readonly healthService: HealthService,
  ) { }

  private readonly logger = new Logger(MailService.name)

  async sendOtp(
    to: string,
    otp: string,
    expiresInMinutes = 10,
  ): Promise<{ messageId: string }> {
    try {
      const res = await this.mailer.sendMail({
        to,
        subject: 'Your verification code',
        template: 'otp', // looks for src/module/mail/templates/otp.hbs
        context: {
          otp,
          expiresInMinutes,
          appName: this.config.get('APP_NAME') || 'Your App',
          year: new Date().getFullYear(),
        },
      });
      return { messageId: res.messageId as string };
    } catch (error) {
      this.logger.error(`Error sending OTP email to ${to}: ${error}`);
      throw new HttpException(`failed to send OTP email`, 500, { cause: error });
    }
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async isHealthy() {
    try {
      const isConnected = this.mailer.verifyAllTransporters()
      if (!isConnected) {
        // await this.healthService.setServiceHealthy(HealthServiceType.MAIL, false, "SMTP transporter not connected");
      }

      const testEmail = this.config.get<string>('HEALTH_CHECK_EMAIL');

      await this.mailer.sendMail({
        to: testEmail,
        subject: 'SMTP Health Check',
        text: 'This is an automated health check email.',
        headers: {
          'X-Health-Check': 'true',
        },
      })

      // await this.healthService.setServiceHealthy(HealthServiceType.MAIL, true, "healthy");
    } catch (error) {
      // await this.healthService.setServiceHealthy(HealthServiceType.MAIL, false, `unhealthy: ${error.message}`);
    }
  }
}
