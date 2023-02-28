import ModalComponent from '../../components/Modal/Modal';
import { CloseButton } from './Modal.styled';
import uiStore from '../../store/uiStore';

interface ModalProps {
  children: React.ReactNode;
  id: string;
  onClose?: () => void;
}

const Modal = ({ id, children, onClose }: ModalProps) => {
  const [modalId, setModal] = uiStore(
    state => [state.modalId, state.setModal],
  );
  return (
    <ModalComponent
      isOpen={id === modalId}
      onClose={() => setModal(null)}
    >
      {children}
      <CloseButton
        onClick={() => {
          setModal(null);
          if (onClose) {
            onClose();
          }
        }}
      >
        Cerrar
      </CloseButton>
    </ModalComponent>
  );
};

export default Modal;
