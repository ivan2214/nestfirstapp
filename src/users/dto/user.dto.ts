import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsStrongPassword,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  userName: string;

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

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @MinLength(3)
  @IsNotEmpty()
  age: number;
}

export class UpdateUserDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  userName: string;

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

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;
}
