// src/roles/roles.service.ts
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Prisma } from '@sana/db/generated/prisma/client';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  // Helpers
  private roleInclude = { Permission: true } as const;

  private async ensureRoleExists(id: string) {
    const role = await this.prisma.role.findUnique({
      where: { id },
      include: this.roleInclude,
    });
    if (!role) throw new NotFoundException(`Role ${id} not found`);
    return role;
  }

  // List all roles
  async findAll() {
    return this.prisma.role.findMany({
      orderBy: { createdAt: 'desc' },
      include: this.roleInclude,
    });
  }

  // Get one role by id
  async findById(id: string) {
    return this.ensureRoleExists(id);
  }

  // Get one role by name
  async findByName(name: string) {
    const role = await this.prisma.role.findUnique({
      where: { name },
      include: this.roleInclude,
    });
    if (!role)
      throw new NotFoundException(`Role with name "${name}" not found`);
    return role;
  }

  // Create a role (optionally with permissions)
  async create(data: CreateRoleDto) {
    const { name, description, permissionIds } = data;

    try {
      return await this.prisma.role.create({
        data: {
          name,
          description: description ?? null,
          ...(permissionIds?.length
            ? {
                permissions: {
                  connect: permissionIds.map((id) => ({ id })),
                },
              }
            : {}),
        },
        include: this.roleInclude,
      });
    } catch (e: any) {
      // Handle unique constraint on role.name if present
      if (e?.code === 'P2002') {
        throw new ConflictException(`Role with name "${name}" already exists`);
      }
      throw e;
    }
  }

  // Update role details; if permissionIds provided, replace the set
  async update(id: string, data: UpdateRoleDto) {
    await this.ensureRoleExists(id);

    // Prepare permission set replacement if provided

    try {
      return await this.prisma.role.update({
        where: { id },
        data: {
          name: data.name,
          description: data.description ?? undefined,
        },
        include: this.roleInclude,
      });
    } catch (e: any) {
      if (e?.code === 'P2002' && data.name) {
        throw new ConflictException(
          `Role with name "${data.name}" already exists`,
        );
      }
      throw e;
    }
  }

  async remove(id: string) {
    await this.ensureRoleExists(id);
    return this.prisma.role.delete({
      where: { id },
      include: this.roleInclude,
    });
  }

  // Attach a permission to a role (no-op if already attached)
  async addPermissionToRole(roleId: string, permissionId: string) {
    await this.ensureRoleExists(roleId);

    return this.prisma.role.update({
      where: { id: roleId },
      data: {
        Permission: {
          connect: { id: permissionId },
        },
      },
      include: this.roleInclude,
    });
  }

  // Detach a permission from a role (no-op if not attached)
  async removePermissionFromRole(roleId: string, permissionId: string) {
    await this.ensureRoleExists(roleId);

    return this.prisma.role.update({
      where: { id: roleId },
      data: {
        Permission: {
          disconnect: { id: permissionId },
        },
      },
      include: this.roleInclude,
    });
  }
}
