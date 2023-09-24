import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { InjectRepository } from '@nestjs/typeorm';
import { Users as UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(UserEntity)
    private authService: AuthService,
  ) {}
}
