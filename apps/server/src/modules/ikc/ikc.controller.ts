import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { IkcService } from './ikc.service';
import { MakeTokenDto } from './dto/tokenization.dto';
import { ConfirmDto } from './dto/confirm.dto';
import { InquiryDto } from './dto/inquiry.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('payments/ikc')
export class IkcController {
    constructor(private readonly svc: IkcService) { }

    @Post('token')
    async makeToken(@Body() body: MakeTokenDto) {
        return this.svc.makeToken(body);
    }

    @Post('confirm/purchase')
    @ApiBearerAuth('access-token')
    async confirmPurchase(@Body() body: ConfirmDto) {
        return this.svc.confirmPurchase(body);
    }

    @Post('reverse')
    @ApiBearerAuth('access-token')
    async reversePurchase(@Body() body: ConfirmDto) {
        return this.svc.reversePurchase(body);
    }

    @Post('inquiry')
    @ApiBearerAuth('access-token')
    async inquiry(@Body() body: InquiryDto) {
        return this.svc.inquirySingle(body);
    }
}
