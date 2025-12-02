import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { JsonExceptionFilter } from "./common/filters/json-exception-filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, validateCustomDecorators: true }));

  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS.split(","), // Allows all origins
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // Allowed HTTP methods
    allowedHeaders: "*", // Allows all headers
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    optionsSuccessStatus: 204,
  });
  console.log("NODE_ENV =>", process.env.NODE_ENV);

  const config = new DocumentBuilder()
    .setTitle("SanaSeir API")
    .setDescription("Api for SanaSeir backend application")
    .setVersion("1.0")
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "Authorization",
        in: "header",
      },
      "access-token"
    )
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, documentFactory);

  app.useGlobalFilters(new JsonExceptionFilter());
  await app.listen(process.env.SERVER_PORT ?? 3000);
}
bootstrap();
