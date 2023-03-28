import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from './dto/User.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
  @Get('create-random')
  async createRandomUsers(): Promise<User[] | void> {
    return await this.usersService.createRandomUsers();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.getUser(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  @Post()
  async createUser(
    @Body() fieldCreateUser: CreateUserDto,
  ): Promise<User | Error> {
    const { userName, email, lastName, firstName, password, age } =
      fieldCreateUser;
    const newUser = {
      userName,
      email,
      lastName,
      firstName,
      password,
      age,
    };
    return this.usersService.createUser(newUser);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateFields: UpdateUserDto,
  ): Promise<User | Error> {
    return await this.usersService.updateUser(id, updateFields);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.usersService.remove(id);
    return { message: `User with id ${id} deleted` };
  }
}
