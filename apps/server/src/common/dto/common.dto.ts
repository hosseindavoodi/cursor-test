import { IsString } from 'class-validator';

export class PaginationDto {
  @IsString()
  page: string;
  @IsString()
  perPage: string;
}

export class PaginatedResponseDto {
  pagination: {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export class MessageDto {
  message: string;
  status: MessageStatus;
}

export enum MessageStatus {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  WARNING = 'WARNING',
}
