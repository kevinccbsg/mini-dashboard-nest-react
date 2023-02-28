import { NavbarStyled, Logo } from './Navbar.styled';
import logo from '../../assets/logo.svg';

const Navbar = () => (
  <NavbarStyled>
    <Logo src={logo} alt="ucademy logo" data-cy="brand-logo" />
  </NavbarStyled>
);

export default Navbar;
