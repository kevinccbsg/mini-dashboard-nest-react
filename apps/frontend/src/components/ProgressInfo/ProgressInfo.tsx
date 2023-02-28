import { Container, HeaderText, ProgressBar, Progress, Text } from './ProgressInfo.styled';

interface ProgressInfoProps {
  header: string;
  progress: number;
  initDate: string;
}

const ProgressInfo = (props: ProgressInfoProps) => (
  <Container data-cy="progress-info-bar">
    <HeaderText>{props.header}</HeaderText>
    <ProgressBar>
      <Progress maxWidth={props.progress} />
    </ProgressBar>
    <Text>Fecha de inscripción: {props.initDate}</Text>
  </Container>
);

export default ProgressInfo;
