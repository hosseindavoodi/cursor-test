import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { ProfileService } from "./profile.service";
import { PrismaService } from "src/services/prisma.service";
import { AssetsModule } from "../assets/assets.module";
import { AssetsServices } from "../assets/assets.service";

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, PrismaService, AssetsServices ],
  imports: [AssetsModule],
  exports: [ProfileService],
})
export class ProfileModule {}
