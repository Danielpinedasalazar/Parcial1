// src/relocation/relocation.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelocationController } from './relocation.controller';
import { RelocationService } from './relocation.service';
import { Relocation } from './relocation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Relocation])],
  controllers: [RelocationController],
  providers: [RelocationService],
})
export class RelocationModule {}