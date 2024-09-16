// src/quality-assurance/qualityAssurance.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QualityAssurance } from './qualityAssurance.entity';

@Injectable()
export class QualityAssuranceService {
  constructor(
    @InjectRepository(QualityAssurance)
    private qualityAssuranceRepository: Repository<QualityAssurance>,
  ) {}

  async create(qualityAssurance: QualityAssurance): Promise<QualityAssurance> {
    return this.qualityAssuranceRepository.save(qualityAssurance);
  }

  async findAll(): Promise<QualityAssurance[]> {
    return this.qualityAssuranceRepository.find();
  }
}