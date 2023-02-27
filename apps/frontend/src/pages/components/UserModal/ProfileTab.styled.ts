import { COLORS } from 'apps/frontend/src/styles/constants';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  right: 18px;
  top: 16px;
`;

export const SubmitButton = styled.input`
  border: 0 none;
  border-radius: 8px;
  font-size: 13px;
  outline: 0 none;
  text-decoration: none;
  line-height: inherit;
  padding: 16px 14px;
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
  margin-left: 8px;
`;

