import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { CreateVisaCountryDto, CreateVisaCountryResponseDto } from "./dto/create.country.dto";
import { ListVisaCountriesResponseDto, VisaCountriesDto, VisaCountriesQueriesDto } from "./dto/list.country.dto";
import { UpdateCountryDto } from "./dto/update.country.dto";
import { UpdateGroupDto } from "./dto/update.group.dto";
import { UpdatePriceDto } from "./dto/update.price.dto";
import { AddPriceToGroupDto } from "./dto/add.price.dto";
import { VisaServices } from "./visa.service";
import { UpdateDurationRequestDto } from "./dto/update.duration.dto";
import { MessageDto } from "src/common/dto/common.dto";
import { ApiTags } from "@nestjs/swagger";
import { AddGroupsToCountryRequestDto } from "./dto/add.group.dto";
import { AddBulkVisaPricesDto } from "./dto/add.bulk.price.dto";
import { AddTypeToCountryDto } from "./dto/add.type.dto";

@ApiTags("Backoffice Visa")
@Controller("private")
export class PrivateVisaController {
  constructor(private readonly visaService: VisaServices) {}

  @Post("visa/country/create")
  // @CanCreate('visa')
  async create(@Body() dto: CreateVisaCountryDto): Promise<CreateVisaCountryResponseDto> {
    return await this.visaService.createVisaCountry(dto);
  }

  // @Post("visa/country/upload")
  // async getUploadUrl(@Body() dto: RequestVisaCountryImageUploadUrlDto): Promise<RequestVisaCountryImageUploadUrlResponseDto> {
  //   return await this.visaService.getVisaCountryImageUploadUrl(dto);
  // }

  @Delete("visa/country/require-asset-type/:typeId")
  async deleteRequireAssetType(@Param() typeId: string): Promise<MessageDto> {
    return await this.visaService.deleteAssetTypeFromCountry(typeId);
  }

  @Post("visa/country/require-asset-type/add/")
  async addRequireType(@Body() dto: AddTypeToCountryDto): Promise<MessageDto> {
    return await this.visaService.addAssetTypeToCountry(dto);
  }

  @Get("visa/country/list")
  async findAll(@Query() dto: VisaCountriesQueriesDto): Promise<ListVisaCountriesResponseDto> {
    return await this.visaService.listVisaCountries(dto);
  }

  @Get("visa/country/detail/:countryId")
  async getCountryDetailById(@Param("countryId") countryId: string): Promise<VisaCountriesDto> {
    return await this.visaService.getVisaCountryById(countryId);
  }

  @Patch("visa/country/update/:countryId")
  async updateConutry(@Param("countryId") countryId: string, @Body() dto: UpdateCountryDto): Promise<MessageDto> {
    return await this.visaService.updateVisaCountry(countryId, dto);
  }

  @Post("visa/country/prices/add/:groupId")
  async addPriceToGroup(@Param("groupId") groupId: string, @Body() dto: AddPriceToGroupDto): Promise<MessageDto> {
    return await this.visaService.addPrice(groupId, dto);
  }

  @Post("visa/country/prices/bulk_add")
  async addPricesToGroup(@Body() dto: AddBulkVisaPricesDto) {
    return await this.visaService.addBulkPrice(dto);
  }

  @Post("visa/country/groups/add/:countryId")
  async addGroupToCountry(@Param("countryId") countryId: string, @Body() dto: AddGroupsToCountryRequestDto) {
    return await this.visaService.addGroup(countryId, dto);
  }

  @Patch("visa/country/group/update/:groupId")
  async updateVisaGroup(@Param("groupId") groupId: string, @Body() dto: UpdateGroupDto): Promise<MessageDto> {
    return await this.visaService.updateVisaGroup(groupId, dto);
  }

  @Patch("visa/country/prices/update/:priceId")
  async updateVisaPrice(@Param("priceId") priceId: string, @Body() dto: UpdatePriceDto): Promise<MessageDto> {
    return await this.visaService.updateVisaPrice(priceId, dto);
  }

  @Put("visa/country/duration/update/:durationId")
  async updateDuration(@Param("durationId") durationId: string, @Body() dto: UpdateDurationRequestDto): Promise<MessageDto> {
    return await this.updateDuration(durationId, dto);
  }
}
