import { Module } from "@nestjs/common";
import { MinioService } from "src/modules/assets/minio.service";
import { AssetsServices } from "./assets.service";
import { PrismaService } from "src/services/prisma.service";
import { AssetsController } from "./assets.controller";

@Module({
  controllers: [AssetsController],
  providers: [AssetsServices, MinioService, PrismaService, MinioService],
  exports: [AssetsServices, MinioService],
  imports: [],
})
export class AssetsModule {}
