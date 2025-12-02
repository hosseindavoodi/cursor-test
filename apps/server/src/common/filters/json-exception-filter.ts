import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class JsonExceptionFilter implements ExceptionFilter {


  catch(exception: unknown, host: ArgumentsHost) {
    const logger = new Logger('error-catch');

    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    // Access controller and handler directly from ArgumentsHost


    // Log incoming request data and destination controller/handler
    logger.error(
      `Error for request: ${req.method} ${req.url}`,
      {
        requestData: {
          body: req.body,
          query: req.query,
          params: req.params,
          headers: req.headers, // Optional: include headers if needed, but be cautious with sensitive info
        },

      },
    );

    logger.error('EXCEPTION =>', exception,)

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const response = exception.getResponse();
      return res.status(status).json({
        success: false,
        statusCode: status,
        path: req.url,
        error:
          typeof response === 'string'
            ? response
            : ((response as any)?.message ?? response),
        timestamp: new Date().toISOString(),
      });
    }

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      statusCode: 500,
      path: req.url,
      error: 'Internal server error',
      timestamp: new Date().toISOString(),
    });
  }
}