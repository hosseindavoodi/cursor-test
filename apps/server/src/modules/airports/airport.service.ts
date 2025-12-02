import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/services/prisma.service';
import { AirportDto, LocationType } from './airport.dto';

@Injectable()
export class AirportsService {
    constructor(
        private readonly prisma: PrismaService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) { }

    async getAirportsByLocation(
        locationCode: string,
        locationType: LocationType,
    ): Promise<AirportDto[]> {
        const cacheKey = `airports:${locationType}:${locationCode}`;

        const cachedAirports = await this.cacheManager.get<AirportDto[]>(cacheKey);
        if (cachedAirports) {
            return cachedAirports;
        }

        let airports: AirportDto[];

        if (locationType === LocationType.COUNTRY) {
            airports = await this.getAirportsByCountry(locationCode);
        } else if (locationType === LocationType.CITY) {
            airports = await this.getAirportsByCity(locationCode);
        }
        else if (locationType === LocationType.AIRPORT) {
            const airport = await this.getAirport(locationCode)
            airports = [airport]
        }
        else {
            throw new NotFoundException(
                `Invalid location type: ${locationType}`,
            );
        }

        await this.cacheManager.set(cacheKey, airports);

        return airports;
    }

    private async getAirportsByCountry(
        countryCode: string,
    ): Promise<AirportDto[]> {
        const country = await this.prisma.country.findUnique({
            where: { code: countryCode },
        });

        if (!country) {
            throw new NotFoundException(
                `Country with code '${countryCode}' not found`,
            );
        }

        const airports = await this.prisma.airport.findMany({
            where: { countriesAirports: country.id },
            include: {
                city: true,
                country: true,
            },
            orderBy: [
                { priority: 'desc' },
                { nameEn: 'asc' },
            ],
        });

        return airports.map(this.mapToDto);
    }

    private async getAirportsByCity(cityCode: string): Promise<AirportDto[]> {
        const city = await this.prisma.city.findUnique({
            where: { code: cityCode },
        });

        if (!city) {
            throw new NotFoundException(
                `City with code '${cityCode}' not found`,
            );
        }

        const airports = await this.prisma.airport.findMany({
            where: { citiesAirports: city.id },
            include: {
                city: true,
                country: true,
            },
            orderBy: [
                { priority: 'desc' },
                { nameEn: 'asc' },
            ],
        });

        return airports.map(this.mapToDto);
    }

    async getAirport(airportCode: string): Promise<AirportDto> {
        const airport = await this.prisma.airport.findUnique({
            where: { code: airportCode },
            include: {
                city: true,
                country: true,
            },
        });

        if (!airport) {
            throw new NotFoundException(
                `City with code '${airportCode}' not found`,
            );
        }

        return this.mapToDto(airport)
    }

    private mapToDto(airport: any): AirportDto {
        return {
            id: airport.id,
            code: airport.code,
            nameEn: airport.nameEn,
            nameFa: airport.nameFa,
            timeZone: airport.timeZone,
            priority: airport.priority,
            city: {
                id: airport.city.id,
                code: airport.city.code,
                nameEn: airport.city.nameEn,
                nameFa: airport.city.nameFa,
            },
            country: {
                id: airport.country.id,
                code: airport.country.code,
                nameEn: airport.country.nameEn,
                nameFa: airport.country.nameFa,
            },
        };
    }

    async clearCache(locationCode?: string, locationType?: LocationType): Promise<void> {
        if (locationCode && locationType) {
            const cacheKey = `airports:${locationType}:${locationCode}`;
            await this.cacheManager.del(cacheKey);
        } else {
            await this.cacheManager.clear();
        }
    }
}
