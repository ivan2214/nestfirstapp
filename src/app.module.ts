import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'ivan2214',
      port: 7777,
      database: 'nestdb',
      // carga todas las clases que terminen en .entity que sean {ts o js}
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],

      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
