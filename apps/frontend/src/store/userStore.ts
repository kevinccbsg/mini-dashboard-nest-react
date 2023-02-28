import { create } from 'zustand'
import { User } from './models/user.model';
import { getUsers, saveUser, editUser } from '../api/users';

interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
}
interface UIState {
  selectedUser: User | null;
  paginateUsers: User[];
  currentPage: number;
  total: number;
  totalPages: number;
  saveUser: (newUser: UserPayload) => void;
  editUser: (id: string, newUser: UserPayload) => void;
  setSelectedUser: (userEmail: string | null) => void;
  fetchPage: (page: number) => void;
}

const useUserStore = create<UIState>()((set) => ({
  paginateUsers: [],
  selectedUser: null,
  currentPage: 1,
  total: 0,
  totalPages: 0,
  setSelectedUser: (userEmail) => set((state) => ({
    selectedUser: state.paginateUsers.find(user => user.email === userEmail),
  })),
  fetchPage: async (page) => {
    const users = await getUsers(page);
    set({
      paginateUsers: users.data,
      currentPage: users.pagination.page,
      total: users.pagination.total,
      totalPages: users.pagination.totalPages,
    });
  },
  saveUser: async (user) => {
    await saveUser({
      email: user.email,
      lastName: user.lastName,
      name: user.firstName,
      phone: user.phone,
      username: user.username,
    });
    const users = await getUsers(1);
    set({
      paginateUsers: users.data,
      currentPage: users.pagination.page,
    });
  },
  editUser: async (id, payload) => {
    await editUser(id, {
      email: payload.email,
      lastName: payload.lastName,
      name: payload.firstName,
      phone: payload.phone,
      username: payload.username,
    });
    set(state => ({
      paginateUsers: state.paginateUsers.map(user => {
        if (user._id === id) {
          return { ...user, ...payload };
        }
        return { ...user };
      }),
    }));
  },
}))

export default useUserStore;
