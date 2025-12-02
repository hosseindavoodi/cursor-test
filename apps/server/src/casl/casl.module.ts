import { Module } from '@nestjs/common';
import { CaslAbilityFactory } from './casl-ability.factory';
import { RolesModule } from '../roles/roles.module';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [RolesModule],
  providers: [CaslAbilityFactory, UsersService, PrismaService],
  exports: [CaslAbilityFactory],
})
export class CaslModule {}
