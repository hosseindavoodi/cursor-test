import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { PoliciesGuard } from '../auth/guards/policies.guard';
import { RolesService } from '../roles/roles.service';
import { UsersService } from '../users/users.service';
import { Role } from '../roles/interfaces/role.interface';
import { Permission } from '../roles/interfaces/permission.interface';
import {
  CanRead,
  CanCreate,
  CanUpdate,
  CanDelete,
  CheckPolicies,
} from '../casl/decorators/policies.decorator';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CreateRoleDto } from 'src/roles/dto/create-role.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AppAbility } from 'src/casl/types/app-ability.type';

@ApiTags('Admin')
@ApiBearerAuth('access-token')
@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(
    private roleService: RolesService,
    private userService: UsersService,
  ) {}

  @Get('roles')
  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, description: 'List of roles' })
  @UseGuards(PoliciesGuard)
  @CanRead('Role')
  async getAllRoles() {
    return this.roleService.findAll();
  }

  @Post('roles')
  @ApiOperation({ summary: 'Create a new role' })
  @ApiBody({
    type: 'object',
    schema: { example: { name: 'admin', permissions: [] } },
  })
  @ApiResponse({ status: 201, description: 'Role created successfully' })
  @UseGuards(PoliciesGuard)
  @CanCreate('Role')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Put('roles/:id')
  @ApiOperation({ summary: 'Update a role by ID' })
  @ApiParam({ name: 'id', required: true })
  @ApiBody({ type: 'object', schema: { example: { name: 'editor' } } })
  @ApiResponse({ status: 200, description: 'Role updated successfully' })
  @UseGuards(PoliciesGuard)
  @CanUpdate('Role')
  async updateRole(
    @Param('id') id: string,
    @Body() updateRoleDto: Partial<Role>,
  ) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete('roles/:id')
  @ApiOperation({ summary: 'Delete a role by ID' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({ status: 200, description: 'Role deleted successfully' })
  @UseGuards(PoliciesGuard)
  @CanDelete('Role')
  async deleteRole(@Param('id') id: string) {
    return this.roleService.remove(id);
  }

  @Post('roles/:roleId/permissions')
  @ApiOperation({ summary: 'Add a permission to a role' })
  @ApiParam({ name: 'roleId', required: true })
  @ApiBody({
    type: 'object',
    schema: { example: { action: 'read', subject: 'User' } },
  })
  @ApiResponse({ status: 200, description: 'Permission added to role' })
  @UseGuards(PoliciesGuard)
  @CanCreate('Permission')
  async addPermissionToRole(
    @Param('roleId') roleId: string,
    @Body() permission: Permission,
  ) {
    return this.roleService.addPermissionToRole(roleId, permission.id);
  }

  @Delete('roles/:roleId/permissions/:permissionId')
  @ApiOperation({ summary: 'Remove a permission from a role' })
  @ApiParam({ name: 'roleId' })
  @ApiParam({ name: 'permissionId' })
  @ApiResponse({ status: 200, description: 'Permission removed from role' })
  @UseGuards(PoliciesGuard)
  @CanDelete('Permission')
  async removePermissionFromRole(
    @Param('roleId') roleId: string,
    @Param('permissionId') permissionId: string,
  ) {
    return this.roleService.removePermissionFromRole(roleId, permissionId);
  }

  @Put('users/:userId/roles')
  @ApiOperation({ summary: 'Assign multiple roles to a user' })
  @ApiParam({ name: 'userId' })
  @ApiBody({
    type: 'object',
    schema: { example: { roleIds: ['admin', 'editor'] } },
  })
  @ApiResponse({ status: 200, description: 'Roles assigned to user' })
  @UseGuards(PoliciesGuard)
  @CanUpdate('User')
  async assignRolesToUser(
    @Param('userId') userId: string,
    @Body() body: { roleIds: string[] },
  ) {
    return this.userService.assignRoles(userId, body.roleIds);
  }

  @Post('users/:userId/roles/:roleId')
  @ApiOperation({ summary: 'Add a role to a user' })
  @ApiParam({ name: 'userId' })
  @ApiParam({ name: 'roleId' })
  @ApiResponse({ status: 200, description: 'Role added to user' })
  @UseGuards(PoliciesGuard)
  @CanCreate('Role')
  async addRoleToUser(
    @Param('userId') userId: string,
    @Param('roleId') roleId: string,
  ) {
    return this.userService.addRoleToUser(userId, roleId);
  }

  @Delete('users/:userId/roles/:roleId')
  @ApiOperation({ summary: 'Remove a role from a user' })
  @ApiParam({ name: 'userId' })
  @ApiParam({ name: 'roleId' })
  @ApiResponse({ status: 200, description: 'Role removed from user' })
  @UseGuards(PoliciesGuard)
  @CanDelete('Role')
  async removeRoleFromUser(
    @Param('userId') userId: string,
    @Param('roleId') roleId: string,
  ) {
    return this.userService.removeRoleFromUser(userId, roleId);
  }
}
