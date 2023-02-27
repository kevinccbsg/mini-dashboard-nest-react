import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import UserModal from './components/UserModal/UserModal';
import Icon from '../components/Icon/Icon';
import uiStore from '../store/uiStore';

const fakeUsers = [
  {
    isOnline: 'Offline',
    name: 'Estudiante 01',
    username: 'Est01',
    email: 'estudiante01@gmail.com',
    phone: '603578200',
    icon: <Icon icon='calendar' />,
  },
  {
    isOnline: 'Offline',
    name: 'Estudiante 02',
    username: 'Est01',
    email: 'estudiante02@gmail.com',
    phone: '603578200',
    icon: 'icon',
  },
  {
    isOnline: 'Offline',
    name: 'Estudiante 03',
    username: 'Est01',
    email: 'estudiante03@gmail.com',
    phone: '603578200',
    icon: 'icon',
  },
]

const fakeHeaders = [
  {
    Header: 'Conexión',
    accessor: 'isOnline', // accessor is the "key" in the data
  },
  {
    Header: 'Nombre y apellidos',
    accessor: 'name',
  },
  {
    Header: 'Username',
    accessor: 'username',
  },
  {
    Header: 'email',
    accessor: 'email',
  },
  {
    Header: 'phone',
    accessor: 'phone',
  },
  {
    Header: '',
    accessor: 'icon',
  },
]

const Users = () => {
  const setModal = uiStore(state => state.setModal);
  return (
    <>
      <Button
        theme="primary"
        onClick={() => setModal('detail-modal')}
      >
        Nuevo usuario
      </Button>
      <Table items={fakeUsers} columnHeaders={fakeHeaders} />
      <UserModal />
    </>
  );
};


export default Users;
