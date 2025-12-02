import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PassengersService } from './passengers.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CreatePassengerDto, QueryPassengerDto, UpdatePassengerDto } from './passengers.dto';

export type ReqUser = { id: string; roles?: string[] };

@ApiTags('Passengers')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('passengers')
export class PassengersController {
    constructor(private readonly passengers: PassengersService) { }

    @Post()
    async create(@CurrentUser() user: ReqUser, @Body() dto: CreatePassengerDto) {
        return this.passengers.createForUser(user.id, dto);
    }

    @Get()
    async list(@CurrentUser() user: ReqUser, @Query() query: QueryPassengerDto) {
        return this.passengers.listForUser(user.id, query);
    }

    @Get(':id')
    async get(@CurrentUser() user: ReqUser, @Param('id') id: string) {
        return this.passengers.getForUser(user.id, id);
    }

    @Patch(':id')
    async update(
        @CurrentUser() user: ReqUser,
        @Param('id') id: string,
        @Body() dto: UpdatePassengerDto,
    ) {
        return this.passengers.updateForUser(user.id, id, dto);
    }

    @Delete(':id')
    async remove(@CurrentUser() user: ReqUser, @Param('id') id: string) {
        return this.passengers.removeForUser(user.id, id);
    }
}
