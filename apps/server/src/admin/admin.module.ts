import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { RolesModule } from '../roles/roles.module';
import { UsersModule } from '../users/users.module';
import { CaslModule } from '../casl/casl.module';

import { RolesService } from 'src/roles/roles.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [RolesModule, UsersModule, CaslModule],
  providers: [RolesService, UsersService, PrismaService],
  controllers: [AdminController],
})
export class AdminModule { }
