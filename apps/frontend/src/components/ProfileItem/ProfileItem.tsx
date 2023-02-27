import Icon from '../Icon/Icon';
import { Container, Content, Header, Text } from './ProfileItem.styled';

interface ProfileItemProps {
  header: string;
  text: string;
  icon?: 'user' | 'calendar' | 'email' | 'phone';
}

const ProfileItem = (props: ProfileItemProps) => {
  return (
    <Container>
      <Icon icon={props.icon} />
      <Content>
        <Header>{props.header}</Header>
        <Text>{props.text}</Text>
      </Content>
    </Container>
  );
};


export default ProfileItem;
