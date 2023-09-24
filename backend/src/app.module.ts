import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PdfsModule } from './pdfs/pdfs.module';
import { JwtService } from '@nestjs/jwt';
import { ReviewsModule } from './reviews/reviews.module';

const fs = require('fs');
let rawdata = fs.readFileSync('ormconfig.json');
let config = JSON.parse(rawdata);

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ReviewsModule,
    AuthModule,
    UsersModule,
    PdfsModule,
  ],
  controllers: [AppController],
  providers: [AuthService, UsersService, JwtService],
})
export class AppModule {}
