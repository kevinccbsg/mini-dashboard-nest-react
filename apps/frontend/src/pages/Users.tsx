import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

const Users = () => (
  <>
    <Button theme="primary">Nuevo usuario</Button>
    <Table />
    <Modal isOpen onClose={() => console.log('close')}>
      <Button theme="primary">Nuevo usuario</Button>
    </Modal>
  </>
);

export default Users;
