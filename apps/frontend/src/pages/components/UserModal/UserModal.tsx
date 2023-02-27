import Modal from '../../../layouts/Modal/Modal';
import Tabs from '../../../components/Tabs/Tabs';
import CoursesTab from './CoursesTab';
import ProfileTab from './ProfileTab';

const Users = () => {
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
    </Modal>
  );
};


export default Users;
