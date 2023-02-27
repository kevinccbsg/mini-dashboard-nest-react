import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
// import UserProfile from '../components/UserProfile/UserProfile';
import UserForm from './components/UserForm/UserForm';
import ProgressInfo from '../components/ProgressInfo/ProgressInfo';

const INIT_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  phone: '',
};

const Users = () => (
  <>
    <Button theme="primary">Nuevo usuario</Button>
    <Table />
    <ProgressInfo />
    <UserForm {...INIT_VALUES} />
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
