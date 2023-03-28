import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  username: string;
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  username: string;
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
