import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ResidancyService } from "../residency.service";
import {
  GetResidencyByIdResponseDto,
  GetResidencyCountryListRequestDto,
  GetResidencyCountryListResponseDto,
} from "../dto/get.residancy.country.dto";

@ApiTags("Residency")
@Controller("residency")
export class ResidencyPublicController {
  constructor(private residencyServices: ResidancyService) {}

  @Get("/country/list")
  async getCountryLists(@Query() query: GetResidencyCountryListRequestDto): Promise<GetResidencyCountryListResponseDto> {
    return await this.residencyServices.getCountryList(query);
  }

  @Get("/country/detail/:countryId")
  async getCountrById(@Param("countryId") countryId: string): Promise<GetResidencyByIdResponseDto> {
    return this.residencyServices.getCountryById(countryId);
  }
}
