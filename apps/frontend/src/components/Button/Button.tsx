import { ButtonStyled } from './Button.styled';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: 'primary' | 'secondary';
  dataCy?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, theme, onClick, dataCy, type }: ButtonProps) => (
  <ButtonStyled type={type} theme={theme} onClick={onClick} data-cy={dataCy}>
    {children}
  </ButtonStyled>
);

export default Button;