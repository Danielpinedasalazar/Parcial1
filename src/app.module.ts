
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersModule } from './providers/providers.module';
import { ClientModule } from './clients/clients.module';
import { OrgansModule } from './organs/organs.module';
import { AuthModule } from './auth/auth.module';  
import { QualityAssuranceModule } from './quality-assurance/quality-assurance.module';
import { RelocationModule } from './relocation/relocation.module';
import { Provider } from './providers/provider.entity';
import { Client } from './clients/clients.entity';
import { Organ } from './organs/organ.entity';
import { QualityAssurance } from './quality-assurance/qualityAssurance.entity';
import { Relocation } from './relocation/relocation.entity';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: 'Dani1908',
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dani1908',
      database: 'parcial',
      entities: [Provider, Client, Organ, QualityAssurance, Relocation, User],
      synchronize: true,
    }),
    ProvidersModule,
    ClientModule,
    AuthModule,
    OrgansModule,
    QualityAssuranceModule,
    RelocationModule,
    UsersModule,
  ],
})
export class AppModule {}