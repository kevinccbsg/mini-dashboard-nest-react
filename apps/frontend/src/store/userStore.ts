import { create } from 'zustand'
import { User } from './models/user.model';
import { getUsers } from '../api/users';

interface UIState {
  selectedUser: User | null;
  paginateUsers: User[];
  currentPage: number;
  setSelectedUser: (userEmail: string | null) => void;
  fetchPage: (page: number) => void;
}

const useBearStore = create<UIState>()((set) => ({
  paginateUsers: [],
  selectedUser: null,
  currentPage: 1,
  setSelectedUser: (userEmail) => set((state) => ({
    selectedUser: state.paginateUsers.find(user => user.email === userEmail),
  })),
  fetchPage: async (page) => {
    const users = await getUsers(page)
    set({
      paginateUsers: users.data,
      currentPage: users.pagination.page,
    })
  },
}))

export default useBearStore;
