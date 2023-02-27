import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '../../styles/constants';

export const Container = styled.div`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
`;

export const HeaderText = styled.h3`
  width: 100%;
  max-width: 80px;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 7px;
`;

export const ProgressBar = styled.nav`
  border: 1px solid ${COLORS.bg};
  width: 100%;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

const increaseProgressBar =  keyframes`
  0% {
    width: 0%;
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 100%;
  }
`


interface ProgressProps {
  maxWidth: number;
}

export const Progress = styled.nav<ProgressProps>`
  width: 20%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(90deg, #0ABB87 6.77%, #6FD466 93.23%);
  animation: ${increaseProgressBar} 1.5s forwards;
  ${props => (
    css`
    max-width: ${props.maxWidth}%;
    `
  )}
`;

export const Text = styled.div`
  font-size: 12px;
  color: ${COLORS.light};
`;
