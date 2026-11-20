import { RegisterDto } from '../../presentation/dto/auth.dto';

export class IAuthService {
  async registerUser(data: RegisterDto): Promise<any> {
    throw new Error('Method not implemented');
  }
}
