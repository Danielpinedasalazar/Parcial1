// src/organs/organs.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgansController } from './organs.controller';
import { OrgansService } from './organs.service';
import { Organ } from './organ.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organ])],
  controllers: [OrgansController],
  providers: [OrgansService],
})
export class OrgansModule {}