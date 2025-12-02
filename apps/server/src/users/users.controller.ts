import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { PoliciesGuard } from 'src/auth/guards/policies.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserListDTO } from './dto/list-users.dto';
import { PaginationDto } from 'src/common/dto/common.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @UseGuards(PoliciesGuard)
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User created successfully.',
  })
  createUser(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(PoliciesGuard)
  @Get('list')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of users retrieved successfully.',
  })
  listUsers(@Query() userListDTO: UserListDTO) {
    return this.userService.listUsers(userListDTO);
  }


  @UseGuards(PoliciesGuard)
  @Get('/:userId')
  @HttpCode(HttpStatus.OK)
  getUser(@Param('userId') userId: string) {
    return this.userService.get(userId);
  }
}
