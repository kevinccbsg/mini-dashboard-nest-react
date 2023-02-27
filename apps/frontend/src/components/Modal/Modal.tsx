import ReactDOM from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={() => onClose()}>
      <ModalStyled onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalStyled>
    </Overlay>,
    document.body
  );
};

export default Modal
