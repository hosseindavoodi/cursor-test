// src/modules/payment/payment.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TransactionsModule } from '../transactions/transactions.module';
import { WalletModule } from '../wallet/wallet.module';
import { IkcModule } from '../ikc/ikc.module';
import { IKCAdapter } from './adaptors/ikc.adaptor';
import { IkcService } from '../ikc/ikc.service';
import { WalletService } from '../wallet/wallet.service';

@Module({
  imports: [
    TransactionsModule,
    WalletModule,
    forwardRef(() => IkcModule),
  ],
  controllers: [PaymentController],
  providers: [
    PrismaService,
    {
      provide: IKCAdapter,
      useFactory: (ikcService: IkcService) => {
        return new IKCAdapter(ikcService);
      },
      inject: [IkcService],
    },
    PaymentService,
  ],
  exports: [PaymentService, IKCAdapter],
})
export class PaymentModule { }
