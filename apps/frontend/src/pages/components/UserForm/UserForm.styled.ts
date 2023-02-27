import styled, { css } from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { COLORS } from '../../../styles/constants';

interface InputContainerProps {
  width?: number;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  ${props => (
    props.width ? css`width: ${props.width}%;` : css`width: 100%;`
  )}
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  margin-bottom: 10px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.inputBorder};
  border-radius: 5px;
  padding: 10px 5px;
`;

export const DoubleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormStyled = styled(Form)`
  font-family: 'Montserrat', sans-serif;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: ${COLORS.error};
`;