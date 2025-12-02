import {
    Controller,
    Get,
    Query,
    Delete,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { AirportsService } from './airport.service';
import { AirportDto, GetAirportsQueryDto } from './airport.dto';

@Controller('airports')
export class AirportsController {
    constructor(private readonly airportsService: AirportsService) { }

    @Get()
    async getAirports(
        @Query() query: GetAirportsQueryDto,
    ): Promise<AirportDto[]> {
        return this.airportsService.getAirportsByLocation(
            query.locationCode,
            query.locationType,
        );
    }

    @Delete('cache')
    @HttpCode(HttpStatus.NO_CONTENT)
    async clearCache(@Query() query: Partial<GetAirportsQueryDto>): Promise<void> {
        await this.airportsService.clearCache(
            query.locationCode,
            query.locationType,
        );
    }
}