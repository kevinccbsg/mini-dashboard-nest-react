import axios from 'axios';
import { PaginateUser } from './user.models';

const API_URL = process.env['NX_API_URL'] || 'http://localhost:3333';

const getUsers = async (page: number): Promise<PaginateUser> => {
  const { data } = await axios.get<PaginateUser>(`${API_URL}/api/users?page=${page}&pageSize=10`);
  return data;
};

export {
  getUsers
};