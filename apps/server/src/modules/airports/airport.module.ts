import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { PrismaService } from 'src/services/prisma.service';
import { AirportsController } from './airport.controller';
import { AirportsService } from './airport.service';

@Module({
    imports: [],
    controllers: [AirportsController],
    providers: [AirportsService, PrismaService],
    exports: [AirportsService],
})
export class AirportsModule { }
