import { IsNumber } from 'class-validator';

export class UpdateDurationRequestDto {
  @IsNumber()
  durationInDays: number;
}
