import { Body, Controller, Get, Param, Post, Query, Redirect, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthenticatedUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/users/interfaces/user.interface';
import { ChargeWalletDto } from './dto/charge-wallet.payment.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { PaymentStatus } from '@sana/db/generated/prisma';

@Controller("payments")
export class PaymentController {
  constructor(
    private readonly payments: PaymentService,
    private readonly config: ConfigService
  ) { }

  @Post("callback/:gwCode/:transId")
  @Redirect("", 302)
  async handle(@Param("gwCode") gwCode: string, @Param("transId") transId: number, @Body() body: any, @Res() res: Response) {
    const redirectUrl = await this.payments.handleGatewayCallback(gwCode, transId, body);

    return redirectUrl;
  }

  @Post("/wallet/charge")
  @ApiBearerAuth("access-token")
  async chargeWallet(@AuthenticatedUser() user: User, @Body() body: ChargeWalletDto) {
    return await this.payments.chargeWallet(user.id, "IRR", body.amount, body.gatewayCode);
  }

  @Get('/list')
  @ApiBearerAuth('access-token')
  async listMyPayments(
    @AuthenticatedUser() user: User,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('status') status?: PaymentStatus,
  ) {
    return await this.payments.listUserPayments(user.id, {
      page: page || 1,
      limit: limit || 10,
      status,
    });
  }

  @Get('/admin/list')
  @ApiBearerAuth('access-token')
  async listAllPayments(
    @AuthenticatedUser() user: User,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('status') status?: PaymentStatus,
    @Query('userId') userId?: number,
    @Query('gatewayCode') gatewayCode?: string,
  ) {
    return await this.payments.listAllPayments({
      page: page || 1,
      limit: limit || 10,
      status,
      userId,
      gatewayCode,
    });
  }

  @Get('/:paymentId')
  @ApiBearerAuth('access-token')
  async getPayment(
    @AuthenticatedUser() user: User,
    @Param('paymentId') paymentId: string,
  ) {
    const payment = await this.payments.getPayment(user.id, paymentId);
    return payment;
  }
}
