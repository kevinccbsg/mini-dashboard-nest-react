import { User } from '../entities/User.entity';

interface PaginationDetails {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface PaginateUser {
  data: User[];
  pagination: PaginationDetails;
}