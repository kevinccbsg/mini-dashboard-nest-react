import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.border};
  padding: 8px;
  font-family: 'Montserrat', sans-serif;
`;

export const Icon = styled.div`
  width: 15%;
  max-width: 50px;
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Header = styled.h3`
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const Image = styled.img`
  width: 20px;
`;
