import {
  LoginDto,
  RegisterDto,
  ReturnLoginDto,
} from '../../presentation/dto/auth.dto';
import type { User } from '../../prisma/type';

export interface IAuthService {
  registerUser(data: RegisterDto): Promise<User>;

  loginUser(data: LoginDto): Promise<ReturnLoginDto>;
}
