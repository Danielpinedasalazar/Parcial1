// src/providers/providers.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provider } from './provider.entity';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectRepository(Provider)
    private providersRepository: Repository<Provider>, // Asegúrate de que este sea el repositorio correcto
  ) {}

  async create(provider: Provider): Promise<Provider> {
    return this.providersRepository.save(provider);
  }

  async findAll(): Promise<Provider[]> {
    return this.providersRepository.find();
  }
}