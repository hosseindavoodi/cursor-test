import { IsString, IsOptional, IsArray } from 'class-validator';

export class AddPermissionDto {
  @IsString()
  action: string; // 'create', 'read', 'update', 'delete', 'manage'

  @IsString()
  subject: string; // 'User', 'Post', 'Comment', 'all'

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  conditions?: any; // JSON conditions for attribute-based access

  @IsOptional()
  @IsString()
  reason?: string; // optional reason for the permission
}