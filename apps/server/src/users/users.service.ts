import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { PrismaService } from 'src/services/prisma.service';
import { Permission } from '@sana/db/generated/prisma';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { PaginationDto } from 'src/common/dto/common.dto';
import { UserListDTO } from './dto/list-users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async listUsers(userListDTO: UserListDTO): Promise<User[]> {
    const page = parseInt(userListDTO.page);
    const perPage = parseInt(userListDTO.perPage);

    const whereClause = {
      UserRole: {
        some: {
          Role: {
            name: userListDTO.userRole
          }
        }
      }
    }

    return this.prisma.user.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        isActive: true,
        updatedAt: new Date(),
      },
    });
  }

  async verifyUser(identifier: string, password: string): Promise<User> {
    const isEmail = (str: string): boolean => {
      return str.includes('@') && str.includes('.');
    };

    const whereClause = isEmail(identifier)
      ? { email: identifier }
      : { phoneNumber: identifier };

    const user = await this.prisma.user.findUnique({
      where: whereClause,
      include: {
        UserRole: {
          include: {
            Role: {
              include: {
                Permission: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('User account is inactive');
    }

    if (!user.password) {
      throw new UnauthorizedException('Password not set for this user');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.toDomainUser(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        UserRole: {
          include: {
            Role: {
              include: {
                Permission: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return null;
    }

    return this.toDomainUser(user);
  }

  async assignRoles(userId: string, roleIds: string[]): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.userRole.deleteMany({
        where: { userId },
      });

      if (roleIds.length > 0) {
        await tx.userRole.createMany({
          data: roleIds.map((roleId) => ({
            userId,
            roleId,
          })),
        });
      }
    });

    const updatedUser = await this.findById(userId);
    return updatedUser!;
  }

  async addRoleToUser(userId: string, roleId: string): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const existingUserRole = await this.prisma.userRole.findUnique({
      where: {
        userId_roleId: {
          userId,
          roleId,
        },
      },
    });

    if (!existingUserRole) {
      await this.prisma.userRole.create({
        data: {
          userId,
          roleId,
        },
      });
    }

    const updatedUser = await this.findById(userId);
    return updatedUser!;
  }

  async removeRoleFromUser(userId: string, roleId: string): Promise<User> {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    await this.prisma.userRole.deleteMany({
      where: {
        userId,
        roleId,
      },
    });

    const updatedUser = await this.findById(userId);
    return updatedUser!;
  }

  async isEmailTaken(email: string, excludeUserId?: string): Promise<boolean> {
    const whereClause = excludeUserId
      ? {
        email,
        id: { not: excludeUserId },
      }
      : { email };

    const user = await this.prisma.user.findFirst({
      where: whereClause,
    });
    return !!user;
  }

  async isPhoneTaken(phonenumber: string, excludeUserId?: string): Promise<boolean> {
    const whereClause = excludeUserId
      ? {
        phoneNumber: phonenumber,
        id: { not: excludeUserId },
      }
      : { phoneNumber: phonenumber };

    const user = await this.prisma.user.findFirst({
      where: whereClause,
    });
    return !!user;
  }

  async getOrCreateUser(identifier: string): Promise<User> {
    const isEmail = (str: string): boolean => {
      return str.includes('@') && str.includes('.');
    };

    const whereClause = isEmail(identifier)
      ? { email: identifier }
      : { phoneNumber: identifier };

    const existingUser = await this.prisma.user.findUnique({
      where: whereClause,
      include: {
        UserRole: {
          include: {
            Role: {
              include: {
                Permission: true,
              },
            },
          },
        },
      },
    });

    if (existingUser) {
      return this.toDomainUser(existingUser);
    }

    const createData = {
      ...(isEmail(identifier)
        ? { email: identifier }
        : { phoneNumber: identifier }),
      isActive: true,
      createdAt: new Date(),
    };

    const newUser = await this.prisma.user.create({
      data: {
        ...createData, updatedAt: new Date(), wallets: {
          create: {
            currency: 'IRR',
            status: 'ACTIVE',
            cachedBalance: 0,
            createdAt: new Date(),
          }
        }
      },
      include: {
        UserRole: {
          include: {
            Role: {
              include: {
                Permission: true,
              },
            },
          },
        },
      },
    });

    // Transform new user to domain model and return
    return this.toDomainUser(newUser);
  }

  // Helper method to transform Prisma model to domain model
  private toDomainUser(prismaUser: any): User {
    return {
      id: prismaUser.id,
      email: prismaUser.email,
      phoneNumber: prismaUser.phoneNumber || undefined,
      isEmailVerified: prismaUser.isEmailVerified,
      isPhoneNumberVerified: prismaUser.isPhoneNumberVerified,
      createdAt: prismaUser.createdAt,
      isActive: prismaUser.isActive,
      roles:
        prismaUser.userRoles?.map((userRole: any) => ({
          id: userRole.role.id,
          name: userRole.role.name,
          description: userRole.role.description,
          permissions:
            userRole.role.permissions?.map((permission: Permission) => ({
              id: permission.id,
              resource: permission.subject,
              action: permission.action,
              conditions: permission.conditions,
              inverted: permission.inverted,
            })) || [],
        })) || [],
    };
  }

  async get(userId: string) {
    const user = await this.prisma.user.findFirst(
      {
        where: {
          id: userId
        },
      }
    );

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return user;
  }
}
