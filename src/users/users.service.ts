import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/User.dto';
import { UserModel } from 'src/models/types';

@Injectable()
export class UsersService {
  private Users: UserModel[] = [
    {
      username: 'Ivan test',
      password: 'ivan test',
      email: 'ivan@test.com',
      age: 19,
      firstName: 'ivan',
      lastName: 'Bongiovanni',
    },
  ];
  getAllUsers() {
    return this.Users;
  }
  createUser(createFields: UserModel) {
    const newUser = { ...createFields };

    this.Users.push(newUser);
    return newUser;
  }

  getUserById(id: string): UserModel {
    return this.Users.find((t) => t?.id === id);
  }

  updateUser(id: string, updateFiels: UpdateUserDto): UserModel {
    const User = this.getUserById(id);
    const UserUpdate = Object.assign(User, updateFiels);

    this.Users = this.Users.map((t) => (t.id == id ? UserUpdate : { ...t }));

    return UserUpdate;
  }

  deleteUser(id: string): UserModel[] {
    const UsersFilter = this.Users.filter((t) => t.id !== id);
    this.Users = UsersFilter;
    return this.Users;
  }
}
