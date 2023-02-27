interface Course {
  _id: string;
  title: string;
  description: string;
  percentCompleted: number;
  inscriptionDate: string;
}

interface User {
  _id: string;
  isOnline: boolean;
  name: string;
  avatar: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  inscriptionDate: string;
  courses: Course[]
}

interface PaginationDetails {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface PaginateUser {
  // TODO: improve docs
  data: User[];
  pagination: PaginationDetails;
}