// src/quality-assurance/qualityAssurance.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QualityAssuranceController } from './qualityAssurance.controller';
import { QualityAssuranceService } from './qualityAssurance.service';
import { QualityAssurance } from './qualityAssurance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QualityAssurance])],
  controllers: [QualityAssuranceController],
  providers: [QualityAssuranceService],
})
export class QualityAssuranceModule {}