import { Module } from '@nestjs/common';
import { MicrotravelFlightService } from '../microtravel/microtravel.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [MicrotravelFlightService],
    exports: [MicrotravelFlightService],
})
export class MicrotravelModule {

}
