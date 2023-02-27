import styled, { css } from 'styled-components';
import { DEVICES, COLORS } from '../../styles/constants';

export const ButtonStyled = styled.button`
  border: 0 none;
  border-radius: 8px;
  color: ${COLORS.black};
  font-size: 13px;
  outline: 0 none;
  text-decoration: none;
  line-height: inherit;
  padding: 16px 14px;
  ${props => {
    if (props.theme === 'primary') {
      return css`
        background-color: ${COLORS.primary};
        color: ${COLORS.white};
      `
    }
    if (props.theme === 'secondary') {
      return css`
        background-color: ${COLORS.secondary};
        color: ${COLORS.white};
      `
    }
    return css`
      background-color: ${COLORS.white};
      color: ${COLORS.black};
    `}
  }
  @media ${DEVICES.laptop} { 
    cursor: pointer;
  }
`;

