import { useState } from 'react';
import UserProfile from '../../../components/UserProfile/UserProfile';
import UserForm from '../UserForm/UserForm';
import Button from '../../../components/Button/Button';
import userStore from '../../../store/userStore';
import { ButtonContainer, SubmitButton } from './ProfileTab.styled';

const Users = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const userSelected = userStore(state => state.selectedUser);
  if (!userSelected) return null;
  if (!editMode) {
    return (
      <>
        <ButtonContainer>
          <Button theme="secondary" onClick={() => setEditMode(true)}>
            Editar usuario
          </Button>
        </ButtonContainer>
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
      <ButtonContainer>
        <Button onClick={() => setEditMode(false)}>
          cancelar edición
        </Button>
        <SubmitButton type="submit" form="editUser" onClick={() => setEditMode(true)} />
      </ButtonContainer>
      <UserForm
        hideSubmit
        id="editUser"
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
