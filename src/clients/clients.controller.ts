import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() client: Client): Promise<Client> {
    return this.clientsService.create(client);
  }

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }
}