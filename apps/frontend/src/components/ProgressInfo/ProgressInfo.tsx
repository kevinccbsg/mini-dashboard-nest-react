import { Container, HeaderText, ProgressBar, Progress, Text } from './ProgressInfo.styled';

const ProgressInfo = () => (
  <Container>
    <HeaderText>Curso 01</HeaderText>
    <ProgressBar>
      <Progress maxWidth={20} />
    </ProgressBar>
    <Text>Fecha de inscripción: 01-09-2022</Text>
  </Container>
);

export default ProgressInfo;
