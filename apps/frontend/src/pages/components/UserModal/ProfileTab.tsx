import { useState } from 'react';
import UserProfile from '../../../components/UserProfile/UserProfile';
import UserForm from '../UserForm/UserForm';
import Button from '../../../components/Button/Button';
import userStore from '../../../store/userStore';
import { ButtonContainer, SubmitButton } from './ProfileTab.styled';

const Users = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [userSelected, editUser] = userStore(state => [
    state.selectedUser,
    state.editUser,
  ]);
  if (!userSelected) return null;
  if (!editMode) {
    return (
      <>
        <ButtonContainer>
          <Button
            theme="secondary"
            dataCy="profile-edit-user"
            onClick={() => setEditMode(true)}
          >
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
        <Button onClick={() => setEditMode(false)} dataCy="profile-cancel-edit">
          cancelar edición
        </Button>
        <SubmitButton
          data-cy="profile-submit-edit-user"
          type="submit"
          form="editUser"
        />
      </ButtonContainer>
      <UserForm
        hideSubmit
        id="editUser"
        firstName={userSelected.name}
        lastName={userSelected.lastName}
        email={userSelected.email}
        username={userSelected.username}
        phone={userSelected.phone}
        onSubmit={(payload) => {
          editUser(userSelected._id, payload);
          setEditMode(false);
        }}
      />
    </>
  );
};

export default Users;
