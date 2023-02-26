import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/User.entity';

class PaginationDetails {
  @ApiProperty({ description: 'Page total' })
  total: number;
  @ApiProperty({ description: 'current page' })
  page: number;
  @ApiProperty({ description: 'Page size' })
  pageSize: number;
  @ApiProperty({ description: 'Total pages' })
  totalPages: number;
}

export class PaginateUser {
  // TODO: improve docs
  @ApiProperty({ description: 'Users' })
  data: User[];
  @ApiProperty({ description: 'Paginate info' })
  pagination: PaginationDetails;
}