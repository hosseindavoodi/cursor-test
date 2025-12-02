import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/users/interfaces/user.interface';
import { FlightService } from './flight.service';
import {
    CalendarRequestDto,
    FlightSearchRequestDto,
    SaveFlightOfferRequestDto,
    SaveFlightOfferResponseDto,
    GetFlightOfferResponseDto,
    SetOfferPassengersRequestDto,
} from './flight.dto';

@Controller('flights')
export class FlightController {
    constructor(private readonly service: FlightService) { }

    @Post('search')
    async search(@Body() body: FlightSearchRequestDto) {
        return this.service.searchFlights(body);
    }

    @Post('calendar')
    async calendar(@Body() body: CalendarRequestDto) {
        return await this.service.calendarFlights(body)
    }

    @Post('offers')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    async saveOffer(
        @Body() body: SaveFlightOfferRequestDto,
        @CurrentUser() user: User,
    ): Promise<SaveFlightOfferResponseDto> {
        return await this.service.saveFlightOffer(body, user.id);
    }

    @Get('offers/:offerId')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    async getOffer(
        @Param('offerId') offerId: string,
        @CurrentUser() user: User,
    ): Promise<GetFlightOfferResponseDto> {
        return await this.service.getFlightOffer(offerId, user.id);
    }

    @Post('offers/:offerId/passengers')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('access-token')
    async setOfferPassengers(
        @Param('offerId') offerId: string,
        @Body() body: SetOfferPassengersRequestDto,
        @CurrentUser() user: User,
    ): Promise<SaveFlightOfferResponseDto> {
        return await this.service.setPassengerDetails({ offerId, userId: user.id, passengers: body.passengers, contactInfo: body.contactInfo });
    }
}
