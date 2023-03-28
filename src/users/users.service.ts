import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/User.dto';
import { User } from './user.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUser(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createUser(createFields: CreateUserDto) {
    const userFound = this.usersRepository.findOne({
      where: {
        userName: createFields.userName,
      },
    });

    if (userFound) {
      return new HttpException('User aldready exists', HttpStatus.CONFLICT);
    }

    const newUser = this.usersRepository.create(createFields);
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: string, updateFields: UpdateUserDto) {
    const userFound = await this.usersRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      return new HttpException('User not found', HttpStatus.CONFLICT);
    }

    const updateUser = Object.assign(userFound, updateFields);
    return await this.usersRepository.save(updateUser);
  }

  async remove(id: string) {
    const result = await this.usersRepository.delete({
      id,
    });

    if (result.affected === 0) {
      return new HttpException('User no exists', HttpStatus.CONFLICT);
    }
    return result;
  }

  async createRandomUsers(): Promise<void> {
    for (let i = 0; i < 10; i++) {
      const newUser = this.usersRepository.create({
        age: parseInt(faker.random.numeric()),
        userName: faker.internet.userName(),
        password: faker.internet.password(8, true),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      });

      await this.usersRepository.save(newUser);
    }

    console.log('Users created successfully!');
  }
}
