import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { MicrotravelModule } from '../microtravel/microtravel.module';
import { AirportsModule } from '../airports/airport.module';

@Module({
    imports: [MicrotravelModule, AirportsModule],
    controllers: [FlightController],
    providers: [FlightService],
    exports: [FlightService],
})
export class FlightModule { }
