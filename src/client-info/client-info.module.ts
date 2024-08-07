import { Module } from '@nestjs/common';
import { ClientInfoService } from './client-info.service';
import { ClientInfoController } from './client-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientInfo } from './entities/client-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientInfo])],

  controllers: [ClientInfoController],
  providers: [ClientInfoService],
})
export class ClientInfoModule {}
