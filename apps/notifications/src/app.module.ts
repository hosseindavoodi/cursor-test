import { Module } from '@nestjs/common';
import { NotificationsController } from './app.controller';
import { NotificationsService } from './app.service';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class AppModule {}
