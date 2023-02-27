import Modal from '../../../layouts/Modal/Modal';
import Button from '../../../components/Button/Button';
import Tabs from '../../../components/Tabs/Tabs';
import CoursesTab from './CoursesTab';
import ProfileTab from './ProfileTab';
import uiStore from '../../../store/uiStore';
import userStore from '../../../store/userStore';

const Users = () => {
  const setModal = uiStore(state => state.setModal);
  const setSelectedUser = userStore(state => state.setSelectedUser);
  return (
    <Modal id="detail-modal">
      <Tabs tabs={
        [{
          label: 'Perfil',
          content: <ProfileTab />
        }, {
          label: 'Cursos',
          content: <CoursesTab />
        }]}
      />
      <Button
        onClick={() => {
          setModal(null);
          setSelectedUser(null);
        }}
      >
        Cerrar
      </Button>
    </Modal>
  );
};


export default Users;
