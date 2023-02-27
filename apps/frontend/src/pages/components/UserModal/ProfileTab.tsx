import { useState } from 'react';
import UserProfile from '../../../components/UserProfile/UserProfile';
import UserForm from '../UserForm/UserForm';
import Button from '../../../components/Button/Button';
import userStore from '../../../store/userStore';

const Users = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const userSelected = userStore(state => state.selectedUser);
  if (!userSelected) return null;
  if (!editMode) {
    return (
      <>
        <Button theme="primary" onClick={() => setEditMode(true)}>
          Editar usuario
        </Button>
        <UserProfile
          email={userSelected.email}
          avatar={userSelected.avatar}
          inscriptionDate={userSelected.inscriptionDate}
          name={`${userSelected.name} ${userSelected.lastName}`}
          phone={userSelected.phone}
          username={userSelected.username}
        />
      </>
    );
  }
  return (
    <>
      <Button theme="primary" onClick={() => setEditMode(false)}>
        cancelar edición
      </Button>
      <UserForm
        firstName={userSelected.name}
        lastName={userSelected.lastName}
        email={userSelected.email}
        username={userSelected.username}
        phone={userSelected.phone}
      />
    </>
  );
};

export default Users;
