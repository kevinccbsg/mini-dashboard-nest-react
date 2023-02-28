import Paginate from '../../components/Paginate/Paginate';
import useUserStore from '../../store/userStore';


const UserPaginate = () => {
  const [fetchPage, currentPage, totalPages] = useUserStore(state => [
    state.fetchPage,
    state.currentPage,
    state.totalPages,
  ]);

  return (
    <Paginate
      currentPage={currentPage}
      totalPages={totalPages}
      handleNextPageClick={fetchPage}
      handlePrevPageClick={fetchPage}
    />
  );
};

export default UserPaginate;
