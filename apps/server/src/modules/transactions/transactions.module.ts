// src/modules/transactions/transactions.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { TransactionsService } from './transactions.service';

@Module({
  providers: [PrismaService, TransactionsService],
  exports: [TransactionsService],
})
export class TransactionsModule { }
