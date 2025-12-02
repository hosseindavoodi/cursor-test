import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<Record<string, number>> {
    let totalUsers = await this.prisma.user.count();
    return {
      users: totalUsers,
    };
  }
}
