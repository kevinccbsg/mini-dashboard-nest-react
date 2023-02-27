import axios from 'axios';
import { PaginateUser, NewUserRequest, NewUserResponse } from './user.models';

const API_URL = process.env['NX_API_URL'] || 'http://localhost:3333';

const getUsers = async (page: number): Promise<PaginateUser> => {
  const { data } = await axios.get<PaginateUser>(`${API_URL}/api/users?page=${page}&pageSize=10`);
  return data;
};

const saveUser = async (payload: NewUserRequest) => (
  axios.post<NewUserResponse>(`${API_URL}/api/users`, payload)
);

const editUser = async (id: string, payload: NewUserRequest) => (
  axios.put<NewUserResponse>(`${API_URL}/api/users/${id}`, payload)
);

export {
  getUsers,
  saveUser,
  editUser,
};