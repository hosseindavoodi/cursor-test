import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthenticatedUser, CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/users/interfaces/user.interface';
import { RolesModule } from 'src/roles/roles.module';
import { CanRead } from 'src/casl/decorators/policies.decorator';

@Controller('wallets')
export class WalletController {
    constructor(private readonly wallet: WalletService) { }

    @Get('balance')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    async balance(@AuthenticatedUser() user: User, @Query('currency') currency: string) {
        return this.wallet.balance(user.id, currency);
    }

    @Get('')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    async getOrCreate(@Query('ownerId') ownerId: string, @Query('currency') currency: string) {
        return this.wallet.getOrCreateWallet(ownerId, currency);
    }
}
