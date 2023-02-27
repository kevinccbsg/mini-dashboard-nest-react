import { ButtonStyled } from './Button.styled';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  theme?: 'primary' | 'secondary'
}

const Button = ({ children, theme, onClick }: ButtonProps) => (
  <ButtonStyled theme={theme} onClick={onClick}>
    {children}
  </ButtonStyled>
);

export default Button;