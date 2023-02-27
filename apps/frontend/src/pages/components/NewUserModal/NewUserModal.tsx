import Modal from '../../../layouts/Modal/Modal';
import userStore from '../../../store/userStore';
import UserForm from '../UserForm/UserForm';
import { Header } from './NewUserModal.styled';

const NewUserModal = () => {
  const setSelectedUser = userStore(state => state.setSelectedUser);
  const saveUser = userStore(state => state.saveUser);
  return (
    <Modal id="new-user-modal" onClose={() => setSelectedUser(null)}>
      <Header>Nuevo usuario</Header>
      <UserForm
        id="newUserform"
        firstName=""
        lastName=""
        email=""
        username=""
        phone=""
        onSubmit={saveUser}
      />
    </Modal>
  );
};


export default NewUserModal;
