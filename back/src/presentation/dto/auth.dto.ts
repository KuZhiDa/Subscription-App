import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  Length,
  Matches,
} from 'class-validator';

class UserDto {
  @ApiProperty({
    description: 'Email пользователя.',
    example: 'dimad@yandex.ru',
  })
  @IsNotEmpty({ message: 'Почта должна быть заполнена!' })
  @IsEmail({}, { message: 'Не верно введена почта!' })
  email: string;

  @ApiProperty({
    description: 'Пароль пользователя.',
    example: 'Dima222@',
  })
  @IsNotEmpty({ message: 'Пароль не должен быть пустым!' })
  @Length(8, 16, { message: 'Пароль должен содержат от 8 до 16 символов' })
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
    message:
      'Пароль не соответствует требованиям: нужна хотя бы одна заглавная буква, одна строчная, одна цифра и один спецсимвол!',
  })
  password: string;
}

export class RegisterDto extends UserDto {
  @ApiProperty({
    description: 'Username пользователя.',
    example: 'Dimulia',
  })
  @IsNotEmpty({ message: 'Поле username должно быть заполнено!' })
  @Length(4, 16, { message: 'Username содержит от 4 до 16 символов' })
  username: string;

  @ApiProperty({
    description: 'Флаг двухфакторной аутентификации.',
    example: true,
  })
  @IsBoolean()
  twoFaAuth: boolean = false;
}

export class LoginDto extends UserDto {}

export class ReturnLoginDto {
  accessToken: string;
}
