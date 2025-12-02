import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { Response } from 'express';

@Catch(HttpException)
export class I18nExceptionFilter implements ExceptionFilter {
  constructor(private readonly i18n: I18nService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest();
    const status = exception.getStatus();

    const message = this.i18n.translate('common.error.internal', {
      lang: req.language,
    });

    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
      message,
    });
  }
}