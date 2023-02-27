import styled from 'styled-components';
import { COLORS } from '../../styles/constants';

export const Container = styled.div`
  overflow-x: auto;
`;

export const TableStyle = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
  border-bottom: 2px solid ${COLORS.bg};
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

export const Td = styled.th`
  padding: 15px 10px;
  text-align: left;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${COLORS.border};
`;

