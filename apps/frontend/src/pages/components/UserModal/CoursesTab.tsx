import ProgressInfo from '../../../components/ProgressInfo/ProgressInfo';
import userStore from '../../../store/userStore';

const CoursesTab = () => {
  const userSelected = userStore(state => state.selectedUser);
  return (
    <div>
      {userSelected?.courses.map(course => (
        <ProgressInfo
          key={course._id}
          header={course.title}
          progress={course.percentCompleted}
          initDate={course.inscriptionDate}
        />
      ))}
    </div>
  );
};


export default CoursesTab;
