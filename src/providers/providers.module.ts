// src/providers/providers.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersController } from './providers.controller';
import { ProvidersService } from './providers.service';
import { Provider } from './provider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Provider])], // Asegúrate de que el repositorio esté aquí
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}