// src/users/users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()  // Maneja las solicitudes GET a /users
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()  // Maneja las solicitudes POST a /users
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}