import { Module } from '@nestjs/common';
import { PassengersController } from './passengers.controller';
import { PassengersAdminController } from './passengers.admin.controller';
import { PassengersService } from './passengers.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [PassengersController, PassengersAdminController],
  providers: [PassengersService, PrismaService],
  exports: [PassengersService],
})
export class PassengersModule { }
