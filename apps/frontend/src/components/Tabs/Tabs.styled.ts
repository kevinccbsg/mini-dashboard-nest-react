import styled, { css } from 'styled-components';
import { DEVICES, COLORS } from '../../styles/constants';

export const Container = styled.div``;
export const TabMenu = styled.div``;
export const TabContent = styled.div`
  margin-top: 60px;
`;

interface TabButtonProps {
  selected: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  background: transparent;
  border: none;
  font-size: 13px;
  margin-right: 5px;
  ${props => (
    props.selected ? css`
    font-weight: 600;
    border-bottom: 5px solid ${COLORS.primary};
    ` : ''
  )}
  @media ${DEVICES.laptop} { 
    cursor: pointer;
  }
`;
