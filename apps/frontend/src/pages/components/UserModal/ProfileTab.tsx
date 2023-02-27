import { useState } from 'react';
import UserProfile from '../../../components/UserProfile/UserProfile';
import UserForm from '../UserForm/UserForm';
import Button from '../../../components/Button/Button';

const Users = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  if (!editMode) {
    return (
      <>
        <Button theme="primary" onClick={() => setEditMode(true)}>
          Editar usuario
        </Button>
        <UserProfile
          email="Dovie_Howell79@gmail.com"
          avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/775.jpg"
          inscriptionDate="02/06/2022"
          name="Maurine Harber"
          phone="+34 6782 828 121"
          username="Clementine.Boyle"
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
        firstName="Maurine"
        lastName="Harber"
        email="Dovie_Howell79@gmail.com"
        username="Clementine.Boyle"
        phone="+34 6782 828 121"
      />
    </>
  );
};

export default Users;
