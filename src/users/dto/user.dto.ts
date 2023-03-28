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

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  lastName: string;

  @IsNumber()
  @MinLength(3)
  @IsNotEmpty()
  age: string;
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
  age: string;
}
