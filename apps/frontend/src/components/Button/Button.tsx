import { ButtonStyled } from './Button.styled';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: 'primary' | 'secondary';
  dataCy?: string;
}

const Button = ({ children, theme, onClick, dataCy }: ButtonProps) => (
  <ButtonStyled theme={theme} onClick={onClick} data-cy={dataCy}>
    {children}
  </ButtonStyled>
);

export default Button;