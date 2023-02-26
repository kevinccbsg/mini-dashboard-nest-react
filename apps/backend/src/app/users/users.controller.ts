import { Controller, Get, Post, Body, HttpCode, Query, BadRequestException } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginateUser } from './dto/paginate-users.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @HttpCode(201)
  async create(@Body() createUser: CreateUserDto) {
    await this.usersService.create(createUser);
    return { status: 201, data: 'success' };
  }

  @Get()
  @ApiOperation({ summary: 'Users list' })
  @ApiResponse({
    status: 200,
    description: 'Users list',
    type: PaginateUser,
  })
  getUsers(@Query('page') page: string, @Query('pageSize') pageSize: string) {
    if (!pageSize) {
      throw new BadRequestException('Page size is required');
    }
    return this.usersService.findAll(+page, +pageSize);
  }
}
