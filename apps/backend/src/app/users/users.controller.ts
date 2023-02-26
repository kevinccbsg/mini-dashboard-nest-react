import { Controller, Get, Post, Body, HttpCode, Query, BadRequestException } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUser: CreateUserDto) {
    await this.usersService.create(createUser);
    return { status: 201, data: 'success' };
  }

  @Get()
  getUsers(@Query('page') page: string, @Query('pageSize') pageSize: string) {
    if (!pageSize) {
      throw new BadRequestException('Page size is required');
    }
    return this.usersService.findAll(+page, +pageSize);
  }
}
