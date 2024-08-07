import { Module } from '@nestjs/common';
import { LocalityService } from './locality.service';
import { LocalityController } from './locality.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locality } from './entities/locality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Locality])],
  controllers: [LocalityController],
  providers: [LocalityService],
})
export class LocalityModule {}
