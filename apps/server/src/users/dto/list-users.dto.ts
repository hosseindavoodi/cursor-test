import { Optional } from "@nestjs/common";
import { IsString } from "class-validator";
import { PaginationDto } from "src/common/dto/common.dto";

export class UserListDTO extends PaginationDto {
    @Optional()
    @IsString()
    userRole: string
}