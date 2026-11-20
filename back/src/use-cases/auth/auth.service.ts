import { Injectable } from '@nestjs/common';
import { IAuthService } from './auth.service.interface.js';
import { RegisterDto } from '../../presentation/dto/auth.dto.js';
import { db } from '../../prisma/db.js';
import { PasswordHasher } from '@nestjs/authentication';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly passwordHasher: PasswordHasher) {}

  async registerUser(data: RegisterDto): Promise<any> {
    const user = await db.orm.public.User.first({ email: data.email });
    if (user) {
      throw new Error('Такой пользователь уже существует.');
    }

    const { password, ...result } = data;
    const passwordHash = await this.passwordHasher.hash(password); // Assign the hashed password to the variable
    return await db.orm.public.User.create({
      ...result,
      password: passwordHash,
    });
  }
}
