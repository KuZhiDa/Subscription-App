import { ForbiddenException, Injectable } from '@nestjs/common';
import { IAuthService } from './auth.service.interface.js';
import { db } from '../../prisma/db.js';

@Injectable()
export class AuthService implements IAuthService {
  async registerUser(data: any): Promise<any> {
    return { name: 'sds' };
  }
}
