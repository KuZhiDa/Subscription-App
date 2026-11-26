import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth.module.js';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from './config/jwt.config.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PassportModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: JwtConfig,
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
