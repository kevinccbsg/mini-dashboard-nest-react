import { ICONS } from './icons';
import { IconStyled, Image } from './Icon.styled';

interface IconProps {
  icon?: 'user' | 'calendar' | 'email' | 'phone' | 'info';
}

const Icon = (props: IconProps) => {
  return (
    <IconStyled>
      {props.icon && (
        <Image src={ICONS[props.icon]} alt="user icon" />
      )}
    </IconStyled>
  );
};


export default Icon;
