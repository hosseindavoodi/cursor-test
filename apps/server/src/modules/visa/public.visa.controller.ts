import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ListVisaCountriesResponseDto,
  VisaCountriesDto,
  VisaCountriesQueriesDto,
} from './dto/list.country.dto';

import { VisaServices } from './visa.service';


@Controller('visa')
export class PublicVisaController {
  constructor(private readonly visaService: VisaServices) {}

  @Get('/country/list')
  async findAll(
    @Query() listCountryDto: VisaCountriesQueriesDto,
  ): Promise<ListVisaCountriesResponseDto> {
    return await this.visaService.listVisaCountries(listCountryDto);
  }

  @Get('country/detail/:countryId')
  async getCountryDetailById(
    @Param('countryId') countryId: string,
  ): Promise<VisaCountriesDto> {
    return await this.visaService.getVisaCountryById(countryId);
  }


}
