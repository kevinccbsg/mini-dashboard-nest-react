import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
// import UserProfile from '../components/UserProfile/UserProfile';
import UserForm from './components/UserForm/UserForm';
import ProgressInfo from '../components/ProgressInfo/ProgressInfo';
import Tabs from '../components/Tabs/Tabs';
import Icon from '../components/Icon/Icon';

const INIT_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  phone: '',
};

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

const Users = () => (
  <>
    <Button theme="primary">Nuevo usuario</Button>
    <Table items={fakeUsers} columnHeaders={fakeHeaders} />
    <Tabs tabs={
      [{
        label: 'Perfil',
        content: <UserForm {...INIT_VALUES} />
      }, {
        label: 'Cursos',
        content: <ProgressInfo />
      }]}
    />
    {/* <UserProfile
      email="Dovie_Howell79@gmail.com"
      avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg"
      inscriptionDate="02/06/2022"
      name="Maurine Harber"
      phone="+34 6782 828 121"
      username="Clementine.Boyle"
    /> */}
    <Modal isOpen={false} onClose={() => console.log('close')}>
      <Button theme="primary">Nuevo usuario</Button>
    </Modal>
  </>
);

export default Users;
