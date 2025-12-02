import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/services/prisma.service';
import { UsersController } from './users.controller';
import { PoliciesGuard } from 'src/auth/guards/policies.guard';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [CaslModule],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
