import Modal from '../../../layouts/Modal/Modal';
import Tabs from '../../../components/Tabs/Tabs';
import CoursesTab from './CoursesTab';
import ProfileTab from './ProfileTab';
import userStore from '../../../store/userStore';

const UserModal = () => {
  const setSelectedUser = userStore(state => state.setSelectedUser);
  return (
    <Modal id="detail-modal" onClose={() => setSelectedUser(null)}>
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


export default UserModal;
