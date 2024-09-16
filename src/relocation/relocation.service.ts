// src/relocation/relocation.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relocation } from './relocation.entity';
import { CreateRelocationDto } from './dto/create-relocation.dto';

@Injectable()
export class RelocationService {
  constructor(
    @InjectRepository(Relocation)
    private relocationRepository: Repository<Relocation>,
  ) {}

  async create(createRelocationDto: CreateRelocationDto): Promise<Relocation> {
    const relocation = this.relocationRepository.create(createRelocationDto);
    return this.relocationRepository.save(relocation);
  }

  async findAll(): Promise<Relocation[]> {
    return this.relocationRepository.find();
  }
}