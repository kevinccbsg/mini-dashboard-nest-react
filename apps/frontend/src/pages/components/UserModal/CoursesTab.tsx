import ProgressInfo from '../../../components/ProgressInfo/ProgressInfo';
import userStore from '../../../store/userStore';
import { Container } from './CoursesTab.styled';

const CoursesTab = () => {
  const userSelected = userStore(state => state.selectedUser);
  return (
    <Container>
      {userSelected?.courses.map(course => (
        <ProgressInfo
          key={course._id}
          header={course.title}
          progress={course.percentCompleted}
          initDate={course.inscriptionDate}
        />
      ))}
    </Container>
  );
};


export default CoursesTab;
