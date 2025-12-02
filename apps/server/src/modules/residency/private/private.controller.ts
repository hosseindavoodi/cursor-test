import { Body, Controller, Get, Patch, Post, Query } from "@nestjs/common";
import { CreateResidencyConutryRequestDto, CreateResidencyConutryResponseDto } from "../dto/create.residancy.country.dto";
import { ResidancyService } from "../residency.service";
import { ApiTags } from "@nestjs/swagger";
import { GetResidencyCountryListRequestDto, GetResidencyCountryListResponseDto } from "../dto/get.residancy.country.dto";

@ApiTags("Backoffice Residency")
@Controller("private")
export class ResidencyPrivateController {
  constructor(readonly residancyService: ResidancyService) {}

  @Post("residency/country/create")
  async createResidencyCountry(@Body() dto: CreateResidencyConutryRequestDto): Promise<CreateResidencyConutryResponseDto> {
    return await this.residancyService.createCountry(dto);
  }

  @Get("residency/country/list")
  async getCountryLists(@Query() query: GetResidencyCountryListRequestDto): Promise<GetResidencyCountryListResponseDto> {
    return await this.residancyService.getCountryList(query);
  }

  @Patch("residency/country/update/:countryId")
  async updateCountry() {}
}
