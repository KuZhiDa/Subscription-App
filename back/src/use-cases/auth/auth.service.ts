import { BadRequestException, Injectable } from '@nestjs/common';
import { IAuthService } from './auth.service.interface.js';
import {
  LoginDto,
  RegisterDto,
  ReturnLoginDto,
} from '../../presentation/dto/auth.dto.js';
import { db } from '../../prisma/db.js';
import type { User } from '../../prisma/type.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService implements IAuthService {
  async registerUser(data: RegisterDto): Promise<User> {
    const user = await db.orm.public.User.first({ email: data.email });
    if (user) {
      throw new BadRequestException('Такой пользователь уже есть в системе.');
    }

    const { password, ...result } = data;

    const passwordHash = await bcrypt.hash(password, 10);

    return db.orm.public.User.create({
      ...result,
      password: passwordHash,
    });
  }

  async loginUser(data: LoginDto): Promise<ReturnLoginDto> {
    const user = await db.orm.public.User.firstOrThrow({ email: data.email });

    const { password, ...result } = user;

    if (await bcrypt.compare(data.password, password)) {
      throw new BadRequestException('Неверный пароль.');
    }

    return { accessToken: '' };
  }
}
