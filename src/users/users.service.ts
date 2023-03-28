import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { v4 as uuid } from 'uuid';
import { UpdateUserDto } from './dto/User.dto';

@Injectable()
export class UsersService {
  private Users: User[] = [
    {
      id: '1',
      username: 'Ivan test',
      password: 'ivan test',
      email: 'ivan@test.com',
    },
  ];
  getAllUsers() {
    return this.Users;
  }
  createUser(username: string, email: string, password: string) {
    const newUser = {
      id: uuid(),
      username,
      email,
      password,
    };

    this.Users.push(newUser);
    return newUser;
  }

  getUserById(id: string): User {
    return this.Users.find((t) => t.id === id);
  }

  updateUser(id: string, updateFiels: UpdateUserDto): User {
    const User = this.getUserById(id);
    const UserUpdate = Object.assign(User, updateFiels);

    this.Users = this.Users.map((t) => (t.id == id ? UserUpdate : { ...t }));

    return UserUpdate;
  }

  deleteUser(id: string): User[] {
    const UsersFilter = this.Users.filter((t) => t.id !== id);
    this.Users = UsersFilter;
    return this.Users;
  }
}
