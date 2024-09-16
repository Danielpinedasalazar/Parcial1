// src/quality-assurance/qualityAssurance.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { QualityAssuranceService } from './qualityAssurance.service';
import { QualityAssurance } from './qualityAssurance.entity';

@Controller('quality-assurance')
export class QualityAssuranceController {
  constructor(private readonly qualityAssuranceService: QualityAssuranceService) {}

  @Post()
  async create(@Body() qualityAssurance: QualityAssurance): Promise<QualityAssurance> {
    return this.qualityAssuranceService.create(qualityAssurance);
  }

  @Get()
  async findAll(): Promise<QualityAssurance[]> {
    return this.qualityAssuranceService.findAll();
  }
}