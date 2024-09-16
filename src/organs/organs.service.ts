// src/organs/organs.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organ } from './organ.entity';
import { CreateOrganDto } from './dto/create-organs.dto';

@Injectable()
export class OrgansService {
  constructor(
    @InjectRepository(Organ)
    private organsRepository: Repository<Organ>,
  ) {}

  async create(createOrganDto: CreateOrganDto): Promise<Organ> {
    const organ = this.organsRepository.create(createOrganDto);
    return this.organsRepository.save(organ);
  }

  async findAll(): Promise<Organ[]> {
    return this.organsRepository.find();
  }
}