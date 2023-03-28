import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserModel } from 'src/models/types';
import { CreateUserDto, UpdateUserDto } from './dto/User.dto';
import { UsersService } from './users.service';

@Controller('Users')
export class UsersController {
  constructor(private UsersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.UsersService.getAllUsers();
  }

  @Post()
  createUser(@Body() newUser: UserModel) {
    const { username, password, email, lastName, age, firstName } = newUser;
    const createFields = {
      username,
      password,
      email,
      lastName,
      age,
      firstName,
    };
    return this.UsersService.createUser(createFields);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateFieldsBody: UpdateUserDto) {
    const { password, email, username, firstName, lastName, age } =
      updateFieldsBody;
    const updateFields = {
      password,
      email,
      username,
      firstName,
      lastName,
      age,
    };
    return this.UsersService.updateUser(id, updateFields);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.UsersService.deleteUser(id);
  }
}
