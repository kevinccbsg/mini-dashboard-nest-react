import Button from '../Button/Button';
import { Container, List, ListItem } from './Paginate.styled';

type Props = {
  totalPages: number;
  currentPage: number;
  handlePrevPageClick: (currentPage: number) => void;
  handleNextPageClick: (currentPage: number) => void
};

const Paginate: React.FC<Props> = ({
  totalPages,
  currentPage,
  handlePrevPageClick,
  handleNextPageClick,
}) => (
  <Container>
    <List>
      <ListItem>
        Page {currentPage} of {totalPages}
      </ListItem>
      {!(currentPage === 1) && (
        <ListItem>
          <Button
            onClick={() => handlePrevPageClick(currentPage - 1)}
          >
            Prev
          </Button>
        </ListItem>
      )}
      {!(currentPage === totalPages) && (
        <ListItem>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => handleNextPageClick(currentPage + 1)}
          >
            Next
          </Button>
        </ListItem>
      )}
    </List>
  </Container>
);

export default Paginate;
