// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
    };
  }

  private async validateUser(email: string, password: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOne(email);
    if (!user) {
      return null; // Usuario no encontrado
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null; // Contraseña incorrecta
    }

    // Devuelve el usuario sin la contraseña
    const { password: _, ...result } = user; // Usamos _ para ignorar la contraseña
    return result; // Aquí result es de tipo Omit<User, 'password'>
  }
}