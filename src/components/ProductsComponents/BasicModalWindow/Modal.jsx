import { useToggle } from '../../hooks/useToggle';

export const ModalState = () => {
  const { isOpen, open, close } = useToggle(true);

  return (
    <>
      <button onClick={open}></button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

export const Modal = () => {
  return (
    <div
      className="modal"
      style={{ display: 'block', backdropFilter: 'blur(5px)' }}
    >
      <div className="modal-wraper">
        <div className="modal-content">
          <button
            type="button"
            className="button-close-modal"
            aria-label="Close"
          >
            X
          </button>
          <div>
            <input className="input-product-name"></input>
            <input className="input-product-grams"></input>
            <span className="info-calories"></span>
          </div>
          <button
            type="button"
            className="add-to-diary"
            aria-label="Add to diary"
          >
            Add to diary
          </button>
          <button type="button" className="cancel" aria-label="Cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
