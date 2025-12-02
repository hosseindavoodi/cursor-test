import { forwardRef, Module } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";
import { WalletService } from "./wallet.service";
import { WalletController } from "./wallet.controller";

@Module({
  controllers: [WalletController],
  providers: [PrismaService, WalletService],
  exports: [WalletService],
})
export class WalletModule {}
