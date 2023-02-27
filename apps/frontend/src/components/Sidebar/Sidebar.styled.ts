import styled from 'styled-components';
import { DEVICES, COLORS } from '../../styles/constants';

export const Container = styled.div`
  @media ${DEVICES.tablet} {
    display: flex;
  }
`;

export const Content = styled.div`
  margin: 35px 30px;
  margin-bottom: 150px;
  @media ${DEVICES.tablet} {
    width: 100%;
    max-width: 1079px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 14px;
`;

export const ListIconImage = styled.img`
  margin-right: 17px;
`;

export const Aside = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid ${COLORS.bg};
  background-color: ${COLORS.white};
  padding: 20px;
  @media ${DEVICES.tablet} {
    position: relative;
    padding: 22px;
    padding-top: 34px;
    border: none;
  }
`;
