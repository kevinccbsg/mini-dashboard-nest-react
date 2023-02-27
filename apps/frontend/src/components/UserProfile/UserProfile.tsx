import ProfileItem from '../ProfileItem/ProfileItem';
import { Image, ImageContainer } from './UserProfile.styled';

interface UserProfileProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  inscriptionDate: string;
  avatar: string;
}

const UserProfile = (props: UserProfileProps) => (
  <div>
    <ImageContainer>
      <Image src={props.avatar} alt={props.name} />
    </ImageContainer>
    <ProfileItem
      header="Nombre y apellidos"
      text={props.name}
      icon="user"
    />
    <ProfileItem
      header="username"
      text={props.username}
    />
    <ProfileItem
      header="Email"
      text={props.email}
      icon="email"
    />
    <ProfileItem
      header="Móvil"
      text={props.phone}
      icon="phone"
    />
    <ProfileItem
      header="Fecha de inscripción"
      text={props.inscriptionDate}
      icon="calendar"
    />
  </div>
);

export default UserProfile;
