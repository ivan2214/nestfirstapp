import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  createUser(@Body() newUser: CreateUserDto) {
    return this.UsersService.createUser(
      newUser.password,
      newUser.email,
      newUser.username,
    );
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateFieldsBody: UpdateUserDto) {
    const { password, email, username } = updateFieldsBody;
    const updateFields = {
      password,
      email,
      username,
    };
    return this.UsersService.updateUser(id, updateFields);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.UsersService.deleteUser(id);
  }
}
