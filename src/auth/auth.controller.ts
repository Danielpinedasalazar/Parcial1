// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')  // Asegúrate de que la ruta base sea correcta
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')  // Asegúrate de que la ruta sea correcta
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}