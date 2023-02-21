import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'todo-project',
    username: 'postgres',
    password: '1234',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
    synchronize: true
  }), UserModule,
    TaskModule,
    AuthModule,
    JwtModule
  ],
  controllers: [AppController,
    // TaskController
  ],
  providers: [AppService, AuthService],
})
export class AppModule {}
