import styled from 'styled-components';
import { DEVICES, COLORS } from '../../styles/constants';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 80vh;
  width: 100%;
  max-width: 480px;
  background: #FFFFFF;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: auto;
  padding: 20px 35px;
  @media ${DEVICES.tablet} { 
    position: relative;
    min-height: 611px;
  }
`;

