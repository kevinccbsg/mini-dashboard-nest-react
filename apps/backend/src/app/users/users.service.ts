import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginateUser } from './dto/paginate-users.dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel({
      ...createCatDto,
      courses: [],
    });
    return createdCat.save();
  }

  async findAll(page: number, pageSize: number): Promise<PaginateUser> {
    const skips = pageSize * (page - 1);
    const total = await this.userModel.countDocuments();
    const data = await this.userModel.find()
      .select({ _id: 0, __v: 0 })
      .skip(skips)
      .limit(pageSize)
      .exec();
    const pagination = {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    };
    return { data, pagination };
  }
}
