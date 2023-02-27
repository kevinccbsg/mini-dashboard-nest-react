import {
  Controller, Get, Post, Body, HttpCode, Query, BadRequestException, Put, Param,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';
import { PaginateUser } from './dto/paginate-users.dto';
import { format } from 'date-fns';


@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @HttpCode(201)
  async create(@Body() createUser: CreateUserRequestDto) {
    await this.usersService.create({
      ...createUser,
      isOnline: false,
      inscriptionDate: format(new Date(), 'dd/MM/yyyy'),
      avatar: 'https://i.pravatar.cc/300',
      courses: [],
    });
    return { status: 201, data: 'success' };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edit user' })
  @HttpCode(202)
  async update(@Param('id') userId: string, @Body() createUser: UpdateUserRequestDto) {
    await this.usersService.editUser(userId, createUser);
    return { status: 202, data: 'success' };
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
