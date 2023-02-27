import ModalComponent from '../../components/Modal/Modal';
import uiStore from '../../store/uiStore';


interface ModalProps {
  children: React.ReactNode;
  id: string;
}

const Modal = ({ id, children }: ModalProps) => {
  const [modalId, setModal] = uiStore(
    state => [state.modalId, state.setModal],
  );
  return (
    <ModalComponent
      isOpen={id === modalId}
      onClose={() => setModal(null)}
    >
      {children}
    </ModalComponent>
  );
};

export default Modal;
