import { Body, Controller, Get, Patch, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { UpdateBankDto, UpdatePassportDto, UpdateProfileDto } from './dto/profile.dto';
import { Profile } from './domain/profile.interface';
import { AuthenticatedUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/users/interfaces/user.interface';

@ApiTags('Profile')
@ApiBearerAuth('access-token')
@Controller('profile')
export class ProfileController {
  constructor(private readonly service: ProfileService) { }

  @Get()
  async me(@AuthenticatedUser() user: User): Promise<Profile> {
    const prof = await this.service.getMe(user.id);
    return prof;
  }

  @Patch()
  async update(@AuthenticatedUser() user: User, @Body() dto: UpdateProfileDto): Promise<Profile> {
    const prof = await this.service.updateProfile(user.id, dto);
    return prof;
  }

  @Patch('passport')
  async updatePassport(@AuthenticatedUser() user: User, @Body() dto: UpdatePassportDto): Promise<Profile> {
    const prof = await this.service.updatePassport(user.id, dto);
    return prof;
  }

  @Patch('bank')
  async updateBank(@AuthenticatedUser() user: User, @Body() dto: UpdateBankDto): Promise<Profile> {
    const prof = await this.service.updateBank(user.id, dto);
    return prof;
  }
}
