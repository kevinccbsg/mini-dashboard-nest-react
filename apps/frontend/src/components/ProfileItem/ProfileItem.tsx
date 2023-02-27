import { ICONS } from './icons';
import { Container, Icon, Content, Header, Text, Image } from './ProfileItem.styled';

interface ProfileItemProps {
  header: string;
  text: string;
  icon?: 'user' | 'calendar' | 'email' | 'phone';
}

const ProfileItem = (props: ProfileItemProps) => {
  return (
    <Container>
      <Icon>
        {props.icon && (
          <Image src={ICONS[props.icon]} alt="user icon" />
        )}
      </Icon>
      <Content>
        <Header>{props.header}</Header>
        <Text>{props.text}</Text>
      </Content>
    </Container>
  );
};


export default ProfileItem;
