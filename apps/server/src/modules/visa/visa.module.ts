import { Global, Module } from "@nestjs/common";
import { PrivateVisaController } from "./private.visa.controller";
import { VisaServices } from "./visa.service";
import { CaslModule } from "src/casl/casl.module";
import { PrismaService } from "src/services/prisma.service";
import { I18nService } from "src/common/services/i18n.service";
import { PublicVisaController } from "./public.visa.controller";
import { MinioService } from "src/modules/assets/minio.service";
import { AssetsModule } from "../assets/assets.module";
import { AssetsServices } from "../assets/assets.service";

@Module({
  controllers: [PrivateVisaController, PublicVisaController],
  imports: [CaslModule, AssetsModule],
  exports: [VisaServices],
  providers: [VisaServices, PrismaService, I18nService, MinioService, AssetsServices],
})
export class VisaModule {}
