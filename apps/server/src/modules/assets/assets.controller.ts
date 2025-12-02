import { Body, Controller, Get, HttpException, Param, Post, Query } from "@nestjs/common";
import { AssetsServices } from "./assets.service";
import { AssetDto, GetAssetsDto } from "./dto/list.assets.dto";
import { CreateAssetRequestDto, CreateAssetsResponseDto } from "./dto/create.asset.dto";
import { AssetTypesResponseDto } from "./dto/list.asset.type.dto";
import { RetrieveAssetsRequestDto, RetrieveAssetsResponseDto } from "./dto/retrieve.assets.dto";

@Controller("assets")
export class AssetsController {
  constructor(private readonly assetService: AssetsServices) {}

  // @Get()
  // async GetAssets(@Query() query: GetAssetsDto): Promise<AssetDto> {
  //   if (query.assetId) {
  //     return await this.assetService.getByAssetId(query.assetId);
  //   }
  //   // if (query.objectKey) {
  //   //   return await this.assetService.getByObjectKey(query.objectKey);
  //   // }

  //   throw new HttpException("one of ?assetId= or ?objectKey= should be provided", 400);
  // }

  @Post("/private/create")
  async createPrivateAssets(@Body() dto: CreateAssetRequestDto): Promise<CreateAssetsResponseDto> {
    return await this.assetService.createPrivateAssets(dto);
  }

  @Post("/public/create")
  async createPublicAssets(@Body() dto: CreateAssetRequestDto): Promise<CreateAssetsResponseDto> {
    return await this.assetService.createPublicAssets(dto);
  }

  @Get("/types")
  async getAssetTypes(): Promise<AssetTypesResponseDto> {
    return await this.assetService.listTypes();
  }

  @Post("/retrieve")
  async retrieveAssets(@Body() dto: RetrieveAssetsRequestDto): Promise<RetrieveAssetsResponseDto[]> {
    return await this.assetService.retrieveAssets(dto);
  }
}
