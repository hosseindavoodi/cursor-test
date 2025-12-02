import { IsNumber, IsString, Length } from 'class-validator';

export class UpdateGroupDto {
  @IsNumber()
  startAge: number;
  @IsNumber()
  endAge: number;
  @IsString()
  title: string;
}
