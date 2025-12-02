import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class WalletService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async getOrCreateWallet(userId: string, currency: string) {
    const existing = await this.prisma.wallet.findUnique({
      where: { userId_currency: { userId: userId, currency: currency } },
    });
    if (existing) return existing;
    return this.prisma.wallet.create({ data: { userId, currency, status: 'ACTIVE' } });
  }

  async balance(userId: string, currency: string) {
    const w = await this.getOrCreateWallet(userId, currency)
    if (!w) throw new NotFoundException('wallet not found');
    return { currency: w.currency, balance: w.cachedBalance };
  }

  async chargeWallet(userId: string, currency: string, amount: number) {
    const wallet = await this.getOrCreateWallet(userId, currency);

    const updated = await this.prisma.wallet.update({
      where: { id: wallet.id },
      data: { cachedBalance: { increment: amount } },
    });
    return { walletId: updated.id, currency: updated.currency, balance: updated.cachedBalance };
  }
}
