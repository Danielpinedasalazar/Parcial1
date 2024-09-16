// src/providers/providers.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { Provider } from './provider.entity';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  create(@Body() provider: Provider): Promise<Provider> {
    return this.providersService.create(provider);
  }

  @Get()
  findAll(): Promise<Provider[]> {
    return this.providersService.findAll();
  }
}