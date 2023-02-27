import styled from 'styled-components';
import { DEVICES, COLORS } from '../../styles/constants';

export const NavbarStyled = styled.nav`
  background: ${COLORS.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  @media ${DEVICES.tablet} { 
    padding: 30px 35px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 80px;
  @media ${DEVICES.tablet} { 
    max-width: 135px;
  }
`;
