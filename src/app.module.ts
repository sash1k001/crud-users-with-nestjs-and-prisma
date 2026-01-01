import { Module } from '@nestjs/common';
// import { AppService } from './app.service.js';
// import { AppController } from './app.controller.js';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class AppModule {}
