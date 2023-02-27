import { useEffect } from 'react';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import UserModal from './components/UserModal/UserModal';
import uiStore from '../store/uiStore';
import userStore from '../store/userStore';
import { User } from './../store/models/user.model';
import { TABLE_HEADERS } from '../constants/table';
import Icon from '../components/Icon/Icon';

const Users = () => {
  const setModal = uiStore(state => state.setModal);
  const [paginateUsers, fetchPage, currentPage, setSelectedUser] = userStore(state => [
    state.paginateUsers,
    state.fetchPage,
    state.currentPage,
    state.setSelectedUser,
  ]);

  const buildRows = (users: User[]) => {
    return users.map((user) => (
      {
        isOnline: user.isOnline ? 'Online' : 'Offline',
        name: `${user.name} ${user.lastName}`,
        username: user.username,
        email: user.email,
        phone: user.phone,
        icon: <Icon icon='info' />,
      }
    ))
  };
  useEffect(() => {
    fetchPage(currentPage);
  }, [fetchPage, currentPage]);

  return (
    <>
      <Button
        theme="primary"
        onClick={() => setModal('new-user-modal')}
      >
        Nuevo usuario
      </Button>
      <Table
        items={buildRows(paginateUsers)}
        columnHeaders={TABLE_HEADERS}
        rowClick={row => {
          if (row.original['email']) {
            setSelectedUser(row.original['email'] as string);
            setModal('detail-modal');
          }
        }}
      />
      <UserModal />
    </>
  );
};


export default Users;
