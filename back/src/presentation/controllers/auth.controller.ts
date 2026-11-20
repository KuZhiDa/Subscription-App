import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AUTH_SERVICE_SYMBOL } from '../../common/simbol.js';
import { IAuthService } from '../../use-cases/auth/auth.service.interface.js';
import { RegisterDto } from '../dto/auth.dto.js';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_SYMBOL) private readonly authService: IAuthService,
  ) {}

  @ApiOperation({ summary: 'Регистрация пользователя.' })
  @ApiBody({
    description: 'Данные пользователя при регистрации.',
    type: RegisterDto,
  })
  @Post('register')
  async registerUser(@Body() data: RegisterDto) {
    return await this.authService.registerUser(data);
  }
}
