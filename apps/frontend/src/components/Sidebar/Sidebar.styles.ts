import styled from 'styled-components';
import { DEVICES, COLORS } from '../../styles/constants';

export const Container = styled.div`
  @media ${DEVICES.tablet} {
    display: flex;
  }
`;

export const Content = styled.div`
  margin: 35px 30px;
`;

export const Aside = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid ${COLORS.bg};
  padding: 20px;
  @media ${DEVICES.tablet} {
    position: relative;
    padding: 22px;
    border: none;
  }
`;
