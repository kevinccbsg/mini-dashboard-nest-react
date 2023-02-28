import Modal from '../../../layouts/Modal/Modal';
import userStore from '../../../store/userStore';
import uiStore from '../../../store/uiStore';
import UserForm from '../UserForm/UserForm';
import { Header } from './NewUserModal.styled';

const NewUserModal = () => {
  const setModal = uiStore(state => state.setModal);
  const saveUser = userStore(state => state.saveUser);
  return (
    <Modal id="new-user-modal">
      <Header>Nuevo usuario</Header>
      <UserForm
        id="newUserform"
        firstName=""
        lastName=""
        email=""
        username=""
        phone=""
        onSubmit={(payload) => {
          saveUser(payload);
          setModal(null);
        }}
      />
    </Modal>
  );
};


export default NewUserModal;
