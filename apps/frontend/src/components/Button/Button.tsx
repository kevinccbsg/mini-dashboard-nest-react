import { ButtonStyled } from './Button.styled';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  theme?: 'primary' | 'secondary'
}

const Button = ({ children, theme }: ButtonProps) => (
  <ButtonStyled theme={theme}>
    {children}
  </ButtonStyled>
);

export default Button;