// src/auth/local.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.entity';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    userRepository: any;
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  // Dentro de authService
async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
  
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
  
    return null;  // O `undefined`, dependiendo de tu lógica
  }  
}