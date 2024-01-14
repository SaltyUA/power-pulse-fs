import { StyledBackdrop, StyledModal } from "./AddProductModal.styled";
import { createPortal } from 'react-dom';
import { useEffect } from "react";
const modal = document.querySelector('#add-product-modal');
export const AddProductModal = ({data, closeModal, showModal}) => {
    console.log(showModal)

    useEffect(() => {
    if (!showModal) return;
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
    }, [closeModal, showModal]);
    
    const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
    return createPortal(
        <StyledBackdrop
            onClick={handleBackdropClick}
            showModal={showModal}
            className={`${showModal ? '' : 'is-hidden'}`}>
            <StyledModal showModal={showModal} className='modal'>
                <p>{data.title}</p>
            </StyledModal>
        </StyledBackdrop>, modal
    )
}