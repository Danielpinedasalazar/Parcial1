// src/relocation/relocation.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { RelocationService } from './relocation.service';
import { Relocation } from './relocation.entity';
import { CreateRelocationDto } from './dto/create-relocation.dto';

@Controller('relocation')
export class RelocationController {
  constructor(private readonly relocationService: RelocationService) {}

  @Post()
  async create(@Body() createRelocationDto: CreateRelocationDto): Promise<Relocation> {
    return this.relocationService.create(createRelocationDto);
  }

  @Get()
  async findAll(): Promise<Relocation[]> {
    return this.relocationService.findAll();
  }
}