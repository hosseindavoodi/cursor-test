import { Module } from "@nestjs/common";
import { ResidancyService } from "./residency.service";
import { ResidencyPublicController } from "./public/public.controller";
import { ResidencyPrivateController } from "./private/private.controller";
import { PrismaService } from "src/services/prisma.service";
import { MinioService } from "src/modules/assets/minio.service";
import { AssetsModule } from "../assets/assets.module";
import { AssetsServices } from "../assets/assets.service";

@Module({
  controllers: [ResidencyPublicController, ResidencyPrivateController],
  providers: [ResidancyService, PrismaService, MinioService, AssetsServices],
  imports: [AssetsModule],
})
export class ResidencyModule {}
