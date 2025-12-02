import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Res,
    UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PassengersService } from './passengers.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreatePassengerDto, QueryPassengerDto, UpdatePassengerDto } from './passengers.dto';

@ApiTags('Backoffice Passengers')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@Controller('private/passengers')
export class PassengersAdminController {
    constructor(private readonly passengers: PassengersService) { }

    @Post()

    async create(@Body() dto: CreatePassengerDto & { userId: string }) {
        return this.passengers.createForAny(dto);
    }

    @Get()
    async list(@Query() query: QueryPassengerDto & { userId?: string }) {
        return this.passengers.listAll(query);
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.passengers.getAny(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdatePassengerDto) {
        return this.passengers.updateAny(id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.passengers.removeAny(id);
    }

    @Post('bulk-delete')
    async bulkDelete(@Body() body: { ids: string[] }) {
        return this.passengers.bulkDelete(body.ids);
    }

    @Post(':id/transfer-owner')
    async transferOwner(@Param('id') id: string, @Body() body: { newUserId: string }) {
        return this.passengers.transferOwner(id, body.newUserId);
    }

    @Get('export.csv')
    async exportCsv(@Res() res: Response, @Query() query: QueryPassengerDto & { userId?: string }) {
        const page = await this.passengers.listAll({ ...query, page: 1, pageSize: 100000 });
        const rows = [
            ['id', 'userId', 'firstName', 'lastName', 'gender', 'nationalCode', 'birthdate', 'passportFirstName', 'passportLastName', 'passportNumber', 'passportExpiryDate', 'nationalityCode', 'passportImage', 'createdAt', 'updatedAt'],
            ...page.items.map((p: any) => [
                p.id, p.userId, p.firstName, p.lastName, p.gender, p.nationalCode ?? '',
                p.birthdate ? new Date(p.birthdate).toISOString() : '',
                p.passportFirstName ?? '', p.passportLastName ?? '', p.passportNumber ?? '',
                p.passportExpiryDate ? new Date(p.passportExpiryDate).toISOString() : '',
                p.nationalityCode ?? '', p.passportImage ?? '',
                p.createdAt ? new Date(p.createdAt).toISOString() : '',
                p.updatedAt ? new Date(p.updatedAt).toISOString() : '',
            ]),
        ];

        const csv = rows.map(r => r.map(String).map(s => '"' + s.replace(/"/g, '""') + '"').join(',')).join('\n');
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="passengers.csv"');
        res.send(csv);
    }
}
