// src/organs/organs.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrgansService } from './organs.service';
import { Organ } from './organ.entity';
import { CreateOrganDto } from './dto/create-organs.dto';

@Controller('organs')
export class OrgansController {
  constructor(private readonly organsService: OrgansService) {}

  @Post()
  async create(@Body() createOrganDto: CreateOrganDto): Promise<Organ> {
    return this.organsService.create(createOrganDto);
  }

  @Get()
  async findAll(): Promise<Organ[]> {
    return this.organsService.findAll();
  }
}