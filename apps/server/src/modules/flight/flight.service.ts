import {
    Injectable,
    Logger,
    HttpException,
    HttpStatus,
    Inject,
} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { createHash, randomUUID } from 'crypto';

import { LRUCache } from 'lru-cache';

import { MicrotravelFlightService } from '../microtravel/microtravel.service';
import { SearchFlightRequest, OriginDestination, Traveler } from '../microtravel/microtravel.dto';
import {
    CalendarRequestDto,
    CalendarResponseDto,
    FlightSearchRequestDto,
    FlightSearchResponseDto,
    LocationType,
    Cheapest,
    FlightOfferDto,
    SaveFlightOfferRequestDto,
    SaveFlightOfferResponseDto,
    GetFlightOfferResponseDto,
    FlightOfferCacheDto,
    PassengerDetailsDto,
    DocumentType,
    Gender,
    ContactInfoDto,
} from './flight.dto';
import { AirportsService } from '../airports/airport.service';

@Injectable()
export class FlightService {
    private readonly logger = new Logger(FlightService.name);

    private readonly inFlightRequests = new Map<
        string,
        Promise<FlightSearchResponseDto>
    >();

    private readonly MEMORY_FRESH_TTL_MS = 60_000;
    private readonly MEMORY_STALE_TTL_MS = 10_000;
    private readonly MEMORY_TOTAL_TTL_MS =
        this.MEMORY_FRESH_TTL_MS + this.MEMORY_STALE_TTL_MS;

    private readonly memoryCache = new LRUCache<string, FlightSearchResponseDto>({
        max: 1_000,
        ttl: this.MEMORY_TOTAL_TTL_MS,
        updateAgeOnGet: false,
        updateAgeOnHas: false,
        ttlAutopurge: true,
    });

    private metrics = {
        memoryHits: 0,
        redisHits: 0,
        inFlightWaits: 0,
        microtravelCalls: 0,
        microtravelErrors: 0,
        cacheSetFailures: 0,
        staleServed: 0,
        revalidationsTriggered: 0,
    };

    constructor(
        private readonly microtravel: MicrotravelFlightService,
        private readonly airportService: AirportsService,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ) { }

    private memoryGet(
        key: string,
    ): { value: FlightSearchResponseDto; isStale: boolean } | null {
        const remaining = this.memoryCache.getRemainingTTL(key);
        if (!remaining) return null;

        const isStale = remaining <= this.MEMORY_STALE_TTL_MS;

        const value = this.memoryCache.get(key, { updateAgeOnGet: !isStale });
        if (value === undefined) return null;

        return { value, isStale };
    }

    private memorySet(key: string, value: FlightSearchResponseDto): void {
        this.memoryCache.set(key, value, { ttl: this.MEMORY_TOTAL_TTL_MS });
    }

    private async cacheSetWithTtl(
        key: string,
        value: FlightSearchResponseDto,
        ttlMs: number,
    ): Promise<void> {
        try {
            const storeName = (this.cacheManager as any)?.store?.name ?? '';
            const looksRedis =
                /redis|ioredis|upstash/i.test(String(storeName)) ||
                typeof (this.cacheManager as any)?.store?.setex === 'function';

            const ttl = looksRedis ? Math.round(ttlMs / 1000) : ttlMs;

            await this.cacheManager.set(key, value, ttl as any);
            this.logger.log(
                `Cached result in ${looksRedis ? 'redis' : 'memory'} for ${key} (ttl=${ttl}${looksRedis ? 's' : 'ms'})`,
            );
        } catch (err: any) {
            this.metrics.cacheSetFailures++;
            this.logger.warn(
                `Failed to cache result for ${key}: ${err?.message ?? err}`,
            );
        }
    }

    private stableStringify(obj: any): string {
        const seen = new WeakSet<any>();

        const normalize = (value: any): any => {
            if (value === null || value === undefined) return value;
            if (value instanceof Date) return this.toISODate(value);
            if (typeof value !== 'object') return value;

            if (seen.has(value)) return undefined;
            seen.add(value);

            if (Array.isArray(value)) return value.map(normalize);

            const keys = Object.keys(value).sort();
            const out: Record<string, any> = {};
            for (const k of keys) out[k] = normalize(value[k]);
            return out;
        };

        return JSON.stringify(normalize(obj));
    }

    private toISODate(d: Date | string | number): string {
        const dt = new Date(d);
        if (Number.isNaN(dt.getTime())) {
            throw new HttpException(
                `Invalid date: ${String(d)}`,
                HttpStatus.BAD_REQUEST,
            );
        }
        return dt.toISOString().slice(0, 10);
    }

    private isDateOnlyBefore(a: Date | string | number, b: Date | string | number): boolean {
        return this.toISODate(a) < this.toISODate(b);
    }

    async searchFlights(
        request: FlightSearchRequestDto,
    ): Promise<FlightSearchResponseDto> {
        this.validateRequest(request);

        const firstSeg = request.segs?.[0];
        this.logger.log(
            `Searching flights ${firstSeg?.origin ?? '?'} -> ${firstSeg?.destination ?? '?'}`,
        );

        const normalized = this.stableStringify(request);
        const key =
            'flight_search:' + createHash('md5').update(normalized).digest('hex');

        const memEntry = this.memoryGet(key);
        if (memEntry && !memEntry.isStale) {
            this.metrics.memoryHits++;
            this.logger.log(`Memory cache hit (fresh) for ${key}`);
            return memEntry.value;
        }

        // Stale-While-Revalidate
        if (memEntry && memEntry.isStale) {
            this.metrics.staleServed++;
            this.logger.log(`Serving stale memory cache for ${key} while revalidating`);

            if (!this.inFlightRequests.get(key)) {
                this.metrics.revalidationsTriggered++;
                const bgPromise = (async () => {
                    try {
                        const microReq = await this.toMicrotravelRequest(request);
                        this.metrics.microtravelCalls++;
                        const fresh = await this.microtravel.searchFlight(microReq);
                        if (fresh) {
                            this.memorySet(key, fresh);
                            await this.cacheSetWithTtl(key, fresh, 60_000);

                            // Fire-and-forget cheapest cache persistence (batched when possible)
                            this.persistCheapestPrices(microReq, fresh).catch((err: any) => {
                                this.logger.warn(`Failed to persist cheapest prices (bg): ${err?.message ?? err}`);
                            });
                        }
                        return fresh;
                    } catch (err: any) {
                        this.metrics.microtravelErrors++;
                        this.logger.error(
                            `Background revalidation failed for ${key}: ${err?.message ?? err}`,
                        );
                        throw err;
                    } finally {
                        this.inFlightRequests.delete(key);
                    }
                })();

                this.inFlightRequests.set(key, bgPromise);
            }

            return memEntry.value;
        }

        try {
            const cached = await this.cacheManager.get<FlightSearchResponseDto>(key);
            if (cached) {
                this.metrics.redisHits++;
                this.logger.log(`Redis cache hit for ${key}`);
                this.memorySet(key, cached);
                return cached;
            }
        } catch (err: any) {
            this.logger.warn(
                `Cache read failed for ${key}: ${err?.message ?? err}`,
            );
        }

        const existingPromise = this.inFlightRequests.get(key);
        if (existingPromise) {
            this.metrics.inFlightWaits++;
            this.logger.log(`Awaiting in-flight request for ${key}`);
            return existingPromise;
        }

        const requestPromise = (async () => {
            this.metrics.microtravelCalls++;
            const microReq = await this.toMicrotravelRequest(request);
            let result = null;
            try {
                result = await this.microtravel.searchFlight(microReq);
            } catch (err: any) {
                this.metrics.microtravelErrors++;
                this.logger.error(
                    `Microtravel flight search failed for ${key}: ${err?.message ?? err}`,
                );
                throw new HttpException(
                    'Flight search failed',
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }

            if (result) {
                this.memorySet(key, result);
                await this.cacheSetWithTtl(key, result, 60_000);

                // Fire-and-forget cheapest cache persistence (batched when possible)
                this.persistCheapestPrices(microReq, result).catch((err: any) => {
                    this.logger.warn(`Failed to persist cheapest prices: ${err?.message ?? err}`);
                });
            }

            return result;
        })();

        this.inFlightRequests.set(key, requestPromise);

        try {
            return await requestPromise;
        } finally {
            this.inFlightRequests.delete(key);
        }
    }

    private parseDateLike(d: any): Date {
        const dt = new Date(d);
        if (Number.isNaN(dt.getTime())) {
            throw new HttpException('Invalid date', HttpStatus.BAD_REQUEST);
        }
        return dt;
    }

    private validateCountryCode(code: any, fieldName: string): string {
        if (typeof code !== 'string') {
            throw new HttpException(`${fieldName} must be a string`, HttpStatus.BAD_REQUEST);
        }
        const up = code.trim().toUpperCase();
        if (!/^[A-Z]{2,3}$/.test(up)) {
            throw new HttpException(`${fieldName} must be ISO alpha-2/3`, HttpStatus.BAD_REQUEST);
        }
        return up;
    }

    private ensureNonEmptyString(v: any, fieldName: string): string {
        if (typeof v !== 'string') {
            throw new HttpException(`${fieldName} must be a string`, HttpStatus.BAD_REQUEST);
        }
        const s = v.trim();
        if (!s) {
            throw new HttpException(`${fieldName} is required`, HttpStatus.BAD_REQUEST);
        }
        return s;
    }

    private validatePassengers(passengers: PassengerDetailsDto[], opts?: { travelDate?: Date; seatLimit?: number }): PassengerDetailsDto[] {
        if (!Array.isArray(passengers) || passengers.length === 0) {
            throw new HttpException('At least one passenger is required', HttpStatus.BAD_REQUEST);
        }

        const now = new Date();
        const minBirth = new Date();
        const maxAgeYears = 120;
        minBirth.setUTCFullYear(minBirth.getUTCFullYear() - maxAgeYears);

        const normalized = passengers.map((p, idx) => {
            const firstName = this.ensureNonEmptyString((p as any)?.firstName, `passengers[${idx}].firstName`);
            const lastName = this.ensureNonEmptyString((p as any)?.lastName, `passengers[${idx}].lastName`);

            if (!Object.values(Gender).includes((p as any)?.gender)) {
                throw new HttpException(`passengers[${idx}].gender is invalid`, HttpStatus.BAD_REQUEST);
            }
            const gender = (p as any).gender as Gender;

            const birthDate = this.parseDateLike((p as any)?.birthDate);
            if (birthDate.getTime() > now.getTime()) {
                throw new HttpException(`passengers[${idx}].birthDate cannot be in the future`, HttpStatus.BAD_REQUEST);
            }
            if (birthDate.getTime() < minBirth.getTime()) {
                throw new HttpException(`passengers[${idx}].birthDate is too old`, HttpStatus.BAD_REQUEST);
            }

            const nationality = this.validateCountryCode((p as any)?.nationality, `passengers[${idx}].nationality`);

            if (!Object.values(DocumentType).includes((p as any)?.documentType)) {
                throw new HttpException(`passengers[${idx}].documentType is invalid`, HttpStatus.BAD_REQUEST);
            }
            const documentType = p.documentType as DocumentType;

            let passport = p?.passport;
            let nationalCard = p?.nationalCard;

            if (documentType === DocumentType.PASSPORT) {
                if (!passport) {
                    throw new HttpException(`passengers[${idx}].passport is required`, HttpStatus.BAD_REQUEST);
                }
                const number = this.ensureNonEmptyString(passport.number, `passengers[${idx}].passport.number`);
                const expiryDate = this.parseDateLike(passport.expiryDate);
                if (expiryDate.getTime() <= now.getTime()) {
                    throw new HttpException(`passengers[${idx}].passport.expiryDate must be in the future`, HttpStatus.BAD_REQUEST);
                }
                const countryOfIssue = this.validateCountryCode(passport.countryOfIssue, `passengers[${idx}].passport.countryOfIssue`);
                passport = { number, expiryDate, countryOfIssue };
                nationalCard = undefined;
            } else if (documentType === DocumentType.NATIONAL_CARD) {
                if (!nationalCard) {
                    throw new HttpException(`passengers[${idx}].nationalCard is required`, HttpStatus.BAD_REQUEST);
                }
                const id = this.ensureNonEmptyString(nationalCard.id, `passengers[${idx}].nationalCard.id`);
                nationalCard = { id };
                passport = undefined;
            }

            return {
                firstName,
                lastName,
                gender,
                birthDate,
                nationality,
                documentType,
                passport,
                nationalCard,
            } as PassengerDetailsDto;
        });

        const travelDate = opts?.travelDate ?? new Date();
        const seatLimit = typeof opts?.seatLimit === 'number' && Number.isFinite(opts?.seatLimit) ? Math.max(0, Math.floor(opts!.seatLimit!)) : undefined;

        const { adults, children, infants } = this.countByTravelerType(normalized, travelDate);

        if (adults <= 0) {
            throw new HttpException('At least one adult is required', HttpStatus.BAD_REQUEST);
        }

        if (infants > adults) {
            throw new HttpException('Each infant must be accompanied by an adult', HttpStatus.BAD_REQUEST);
        }

        const childCap = infants > 0 ? adults * 2 : adults * 3;
        if (children > childCap) {
            throw new HttpException(`Too many children for number of adults. Allowed children: ${childCap}`, HttpStatus.BAD_REQUEST);
        }

        const maxInfants = adults * 1;
        if (infants > maxInfants) {
            throw new HttpException(`Too many infants for number of adults. Allowed infants: ${maxInfants}`, HttpStatus.BAD_REQUEST);
        }

        const total = normalized.length;
        const ABSOLUTE_MAX = 9;
        if (total > ABSOLUTE_MAX) {
            throw new HttpException(`Maximum passengers is ${ABSOLUTE_MAX}`, HttpStatus.BAD_REQUEST);
        }

        if (seatLimit != null && total > seatLimit) {
            throw new HttpException(`Selected offer has only ${seatLimit} seats available`, HttpStatus.BAD_REQUEST);
        }

        return normalized;
    }

    private countByTravelerType(passengers: PassengerDetailsDto[], travelDate: Date): { adults: number; children: number; infants: number } {
        let adults = 0, children = 0, infants = 0;
        for (const p of passengers) {
            const type = this.classifyTravelerType(p.birthDate, travelDate);
            if (type === 'ADULT') adults++;
            else if (type === 'CHILD') children++;
            else infants++;
        }
        return { adults, children, infants };
    }

    private classifyTravelerType(birthDate: Date, travelDate: Date): 'ADULT' | 'CHILD' | 'INFANT' {
        const ageYears = this.calcAgeYears(birthDate, travelDate);
        if (ageYears < 2) return 'INFANT';
        if (ageYears < 12) return 'CHILD';
        return 'ADULT';
    }

    private calcAgeYears(birthDate: Date, at: Date): number {
        const b = new Date(birthDate);
        const a = new Date(at);
        let years = a.getUTCFullYear() - b.getUTCFullYear();
        const m = a.getUTCMonth() - b.getUTCMonth();
        if (m < 0 || (m === 0 && a.getUTCDate() < b.getUTCDate())) years--;
        return years;
    }

    private getEarliestDeparture(offer?: FlightOfferDto | null): Date | null {
        try {
            if (!offer) return null;
            let earliest: Date | null = null;
            for (const itin of offer.itineraries || []) {
                for (const seg of itin?.segments || []) {
                    const at = new Date(seg?.departure?.at);
                    if (!Number.isNaN(at.getTime())) {
                        if (!earliest || at.getTime() < earliest.getTime()) earliest = at;
                    }
                }
            }
            return earliest;
        } catch {
            return null;
        }
    }

    async setPassengerDetails(params: { offerId: string; userId: string; passengers: PassengerDetailsDto[]; contactInfo: ContactInfoDto }) {
        const { offerId, userId, passengers, contactInfo } = params || ({} as any);
        if (!offerId) {
            throw new HttpException('Flight offer ID is required', HttpStatus.BAD_REQUEST);
        }
        if (!userId) {
            throw new HttpException('User ID is required', HttpStatus.BAD_REQUEST);
        }

        const key = this.buildFlightOfferKey(userId, offerId);
        const cacheData = await this.cacheManager.get<FlightOfferCacheDto>(key);
        if (!cacheData || !cacheData.offer) {
            throw new HttpException('Flight offer not found or access denied', HttpStatus.NOT_FOUND);
        }

        const travelDate = this.getEarliestDeparture(cacheData.offer) ?? new Date();
        const seatLimit = typeof cacheData.offer?.numberOfBookableSeats === 'number' ? cacheData.offer!.numberOfBookableSeats! : undefined;
        const normalizedPassengers = this.validatePassengers(passengers, { travelDate, seatLimit });
        const normalizedContact = contactInfo;

        const now = Date.now();
        const validToMs = Number(cacheData.validTo) || now;
        const remainingMs = Math.max(1, validToMs - now);
        const remainingSec = Math.round(remainingMs / 1000);

        const updated: FlightOfferCacheDto = { ...cacheData, passengers: normalizedPassengers, contactInfo: normalizedContact };
        try {
            const storeName = (this.cacheManager as any)?.store?.name ?? '';
            const looksRedis =
                /redis|ioredis|upstash/i.test(String(storeName)) ||
                typeof (this.cacheManager as any)?.store?.setex === 'function';
            const ttl = looksRedis ? remainingSec : remainingMs;
            await this.cacheManager.set(key, updated, ttl as any);
            return { id: offerId };
        } catch (err: any) {
            this.logger.error(`Failed to set passenger details for offer ${offerId}: ${err?.message ?? err}`);
            throw new HttpException('Failed to set passenger details', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private validateRequest(req: FlightSearchRequestDto): void {
        const adults = Number(req.adult ?? 0);
        const children = Number(req.child ?? 0);
        const infants = Number(req.infant ?? 0);

        if (adults + children + infants <= 0) {
            throw new HttpException(
                'At least one traveler is required',
                HttpStatus.BAD_REQUEST,
            );
        }
        if (adults === 0 && infants > 0) {
            throw new HttpException(
                'Infants must be accompanied by adults',
                HttpStatus.BAD_REQUEST,
            );
        }
        if (infants > adults) {
            throw new HttpException(
                'Number of infants cannot exceed number of adults',
                HttpStatus.BAD_REQUEST,
            );
        }

        if (!req.segs || req.segs.length === 0) {
            throw new HttpException('At least one seg is required', HttpStatus.BAD_REQUEST);
        }

        const nowISO = this.toISODate(new Date());

        for (const s of req.segs) {
            if (!s.origin || !s.destination) {
                throw new HttpException(
                    'Each seg requires origin and destination',
                    HttpStatus.BAD_REQUEST,
                );
            }
            if (s.origin === s.destination) {
                throw new HttpException(
                    'Origin and destination cannot be the same',
                    HttpStatus.BAD_REQUEST,
                );
            }
            if (this.isDateOnlyBefore(s.departureDate, nowISO)) {
                throw new HttpException(
                    'Departure date cannot be in the past',
                    HttpStatus.BAD_REQUEST,
                );
            }
        }

        switch (req.flightTypeName) {
            case 'one_way': {
                if (req.segs.length !== 1) {
                    throw new HttpException(
                        'one_way requests must contain exactly 1 seg',
                        HttpStatus.BAD_REQUEST,
                    );
                }
                break;
            }
            case 'round_trip': {
                if (req.segs.length !== 2) {
                    throw new HttpException(
                        'round_trip requests must contain exactly 2 segs',
                        HttpStatus.BAD_REQUEST,
                    );
                }
                const [out, ret] = req.segs;

                if (out.destination !== ret.origin) {
                    throw new HttpException(
                        'round_trip: return seg origin must equal outbound destination',
                        HttpStatus.BAD_REQUEST,
                    );
                }
                if (ret.destination !== out.origin) {
                    throw new HttpException(
                        'round_trip: return seg destination must equal outbound origin',
                        HttpStatus.BAD_REQUEST,
                    );
                }
                if (this.isDateOnlyBefore(ret.departureDate, out.departureDate)) {
                    throw new HttpException(
                        'round_trip: return date cannot be before outbound date',
                        HttpStatus.BAD_REQUEST,
                    );
                }
                break;
            }
            case 'multi_city': {
                if (req.segs.length >= 6) {
                    throw new HttpException(
                        'multi_city requests cant have more than 5 segments',
                        HttpStatus.BAD_REQUEST,
                    );
                }
                break;
            }
            default:
                throw new HttpException(
                    'Unsupported flight_type_name',
                    HttpStatus.BAD_REQUEST,
                );
        }
    }

    private async toMicrotravelRequest(
        req: FlightSearchRequestDto,
    ): Promise<SearchFlightRequest> {
        const originDestinations: NonNullable<SearchFlightRequest['originDestinations']> = [];

        for (let idx = 0; idx < (req.segs || []).length; idx++) {
            const s = req.segs[idx];

            const [originAirports, destinationAirports] = await Promise.all([
                this.airportService.getAirportsByLocation(s.origin, s.originLocationType),
                this.airportService.getAirportsByLocation(s.destination, s.destinationLocationType),
            ]);

            if (s.originLocationType !== LocationType.AIRPORT && (!originAirports || originAirports.length === 0)) {
                throw new HttpException(
                    `No airports found for origin "${s.origin}" (${s.originLocationType})`,
                    HttpStatus.BAD_REQUEST,
                );
            }
            if (s.destinationLocationType !== LocationType.AIRPORT && (!destinationAirports || destinationAirports.length === 0)) {
                throw new HttpException(
                    `No airports found for destination "${s.destination}" (${s.destinationLocationType})`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            let origin = s.originLocationType === LocationType.AIRPORT ? s.origin : originAirports?.[0]?.code;
            let dest = s.destinationLocationType === LocationType.AIRPORT ? s.destination : destinationAirports?.[0]?.code;

            let alternativeOrigins = (originAirports || []).map(a => a.code).filter(a => a !== origin);
            let alternativeDestinations = (destinationAirports || []).map(a => a.code).filter(a => a !== dest);

            if (!origin) {
                throw new HttpException(`Unable to resolve origin airport code for "${s.origin}"`, HttpStatus.BAD_REQUEST);
            }
            if (!dest) {
                throw new HttpException(`Unable to resolve destination airport code for "${s.destination}"`, HttpStatus.BAD_REQUEST);
            }

            const dateStr = this.toISODate(s.departureDate);

            this.logger.debug(
                `Seg ${idx + 1}: origin=${origin} (alts: ${alternativeOrigins.join(', ')}), `
                + `destination=${dest} (alts: ${alternativeDestinations.join(', ')}), date=${dateStr}`,
            );

            originDestinations.push({
                id: String(idx + 1),
                originLocationCode: origin,
                alternativeOriginsCodes: alternativeOrigins,
                destinationLocationCode: dest,
                alternativeDestinationsCodes: alternativeDestinations,
                departureDateTimeRange: { date: dateStr },
            } as any);
        }

        const travelers: NonNullable<SearchFlightRequest['travelers']> = [];
        let nextId = 1;

        const adultIds: string[] = [];
        for (let i = 0; i < (req.adult ?? 0); i++) {
            const id = String(nextId++);
            adultIds.push(id);
            travelers.push({ id, travelerType: 'ADULT' } as any);
        }
        for (let i = 0; i < (req.child ?? 0); i++) {
            travelers.push({ id: String(nextId++), travelerType: 'CHILD' } as any);
        }
        for (let i = 0; i < (req.infant ?? 0); i++) {
            const associatedAdultId = adultIds[i % Math.max(1, adultIds.length)] ?? adultIds[0];
            travelers.push({ id: String(nextId++), travelerType: 'INFANT', associatedAdultId } as any);
        }

        return {
            originDestinations,
            travelers,
            currencyCode: 'IRR',
        } as SearchFlightRequest;
    }


    async calendarFlights(data: CalendarRequestDto): Promise<CalendarResponseDto> {
        const todayISO = this.toISODate(new Date());
        const oneMonthLaterISO = this.toISODate(this.addMonthsUTC(new Date(), 1));

        const start = this.toISODate((data.startDate as any) ?? todayISO);
        const end = this.toISODate((data.endDate as any) ?? oneMonthLaterISO);

        if (start > end) {
            throw new HttpException('startDate cannot be after endDate', HttpStatus.BAD_REQUEST);
        }

        const out: Cheapest[] = [];

        for (const date of this.eachDateInclusive(start, end)) {
            const key = this.buildCheapestKey(data.origin, data.destination, date);
            const price = await this.cacheManager.get<number>(key);
            if (typeof price === 'number' && Number.isFinite(price)) {
                out.push({ departureDatetime: new Date(date), price });
            }
        }

        return { calendar: out };
    }

    private async persistCheapestPrices(microReq: SearchFlightRequest, result: FlightSearchResponseDto): Promise<void> {
        const minPrice = this.extractMinGrandTotal(result);
        if (minPrice == null) return;

        const ttlMs = 24 * 60 * 60 * 1000;
        const ttlSec = Math.round(ttlMs / 1000);
        const ods = microReq.originDestinations || [];
        const entries: Array<{ key: string; value: number }> = [];

        for (const od of ods) {
            const origin = od.originLocationCode as string | undefined;
            const dest = od.destinationLocationCode as string | undefined;
            const date = od.departureDateTimeRange?.date as string | undefined;
            if (!origin || !dest || !date) continue;
            const key = this.buildCheapestKey(origin, dest, date);
            entries.push({ key, value: minPrice });
        }

        if (entries.length === 0) return;

        const client = this.getRedisLikeClient();
        if (client) {
            try {
                const multi = typeof client.multi === 'function' ? client.multi() : (typeof client.pipeline === 'function' ? client.pipeline() : null);
                if (multi) {
                    for (const { key, value } of entries) {
                        if (typeof client.setex === 'function') {
                            multi.setex(key, ttlSec, String(value));
                        } else {
                            // ioredis common syntax: SET key value PX ttlMs
                            multi.set(key, String(value), 'EX', ttlSec);
                        }
                    }
                    await multi.exec();
                    return;
                }
            } catch (err: any) {
                this.logger.warn(`Redis pipeline set failed, falling back to individual sets: ${err?.message ?? err}`);
            }
        }

        await Promise.allSettled(
            entries.map(({ key, value }) => this.cacheManager.set(key, value, ttlSec as any)),
        );
    }

    private buildCheapestKey(origin: string, destination: string, dateISO: string): string {
        return `cheapest:${origin}:${destination}:${dateISO}`;
    }

    private extractMinGrandTotal(result: FlightSearchResponseDto): number | null {
        try {
            const offers: FlightOfferDto[] = (result?.data?.data as unknown as FlightOfferDto[]) || [];
            if (!Array.isArray(offers) || offers.length === 0) return null;
            let min: number | null = null;
            for (const off of offers) {
                const priceStr = off?.price?.grandTotal ?? off?.price?.total;
                const n = typeof priceStr === 'string' ? Number(priceStr.replace(/[\,\s]/g, '')) : (typeof priceStr === 'number' ? priceStr : NaN);
                if (!Number.isFinite(n)) continue;
                if (min == null || n < min) min = n;
            }
            return min;
        } catch {
            return null;
        }
    }

    private *eachDateInclusive(startISO: string, endISO: string): Generator<string> {
        const d = new Date(startISO + 'T00:00:00Z');
        const end = new Date(endISO + 'T00:00:00Z');
        while (d.getTime() <= end.getTime()) {
            yield d.toISOString().slice(0, 10);
            d.setUTCDate(d.getUTCDate() + 1);
        }
    }

    private addMonthsUTC(date: Date, months: number): Date {
        const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        d.setUTCMonth(d.getUTCMonth() + months);
        return d;
    }

    private getRedisLikeClient(): any | null {
        const store: any = (this.cacheManager as any)?.store;
        const client = store?.getClient?.() || store?.client || store?._redis || null;
        return client || null;
    }

    async confirmFlight(confirmFlight: any) {
        return this.microtravel.confirmPrice(confirmFlight);
    }

    async bookFlight(bookRequest: any) {
        return this.microtravel.bookFlight(bookRequest);
    }

    async issueTicket(params: { provider: string; pnrId?: string; requestedId?: string }) {
        return this.microtravel.issueTicket(params);
    }

    async refundFlight(params: any) {
        return this.microtravel.refundFlight(params);
    }

    async saveFlightOffer(
        request: SaveFlightOfferRequestDto,
        userId: string,
    ): Promise<SaveFlightOfferResponseDto> {
        const { offer } = request;

        if (!offer) {
            throw new HttpException(
                'Flight offer is required',
                HttpStatus.BAD_REQUEST,
            );
        }

        if (!offer.lastTicketingDate) {
            throw new HttpException(
                'Flight offer must have lastTicketingDate (validTo)',
                HttpStatus.BAD_REQUEST,
            );
        }

        if (!userId) {
            throw new HttpException(
                'User ID is required',
                HttpStatus.BAD_REQUEST,
            );
        }

        const id = randomUUID();
        const key = this.buildFlightOfferKey(userId, id);

        const ttlMs = 20 * 60 * 1000; // 20 minutes
        const ttlSec = Math.round(ttlMs / 1000);


        const cacheData: FlightOfferCacheDto = {
            offer,
            validTo: Date.now() + ttlMs + '',
            // Add other fields here as needed in the future
        };

        try {
            const storeName = (this.cacheManager as any)?.store?.name ?? '';
            const looksRedis =
                /redis|ioredis|upstash/i.test(String(storeName)) ||
                typeof (this.cacheManager as any)?.store?.setex === 'function';

            const ttl = looksRedis ? ttlSec : ttlMs;

            await this.cacheManager.set(key, cacheData, ttl as any);

            this.logger.log(
                `Saved flight offer with id ${id} for user ${userId} (validTo: ${offer.lastTicketingDate}) in ${looksRedis ? 'redis' : 'memory'}`,
            );
            return { id };
        } catch (err: any) {
            this.logger.error(
                `Failed to save flight offer with id ${id}: ${err?.message ?? err}`,
            );
            throw new HttpException(
                'Failed to save flight offer',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getFlightOffer(id: string, userId: string): Promise<GetFlightOfferResponseDto> {
        if (!id) {
            throw new HttpException(
                'Flight offer ID is required',
                HttpStatus.BAD_REQUEST,
            );
        }

        if (!userId) {
            throw new HttpException(
                'User ID is required',
                HttpStatus.BAD_REQUEST,
            );
        }

        const key = this.buildFlightOfferKey(userId, id);

        try {
            const cacheData = await this.cacheManager.get<FlightOfferCacheDto>(key);

            if (!cacheData || !cacheData.offer) {
                throw new HttpException(
                    'Flight offer not found or access denied',
                    HttpStatus.NOT_FOUND,
                );
            }

            return {
                offer: cacheData.offer,
                validTo: cacheData.validTo || cacheData.offer.lastTicketingDate || '',
            };
        } catch (err: any) {
            if (err instanceof HttpException) {
                throw err;
            }
            this.logger.error(
                `Failed to get flight offer with id ${id}: ${err?.message ?? err}`,
            );
            throw new HttpException(
                'Failed to retrieve flight offer',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    private buildFlightOfferKey(userId: string, id: string): string {
        return `flight_offer:${userId}:${id}`;
    }
}


// no cabin filtering is used; cheapest is assumed economy