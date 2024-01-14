import { StyledBackdrop, StyledModal, StyledCloseSvg, StyledCloseButton } from "./AddProductModal.styled";
import { createPortal } from 'react-dom';
import { useEffect } from "react";
import { AddProductFrom } from "../AddProductFrom/AddProductForm";

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
            className={ showModal ? '' : 'hide-hidden'}>
        <StyledModal className='modal'>
          <StyledCloseButton onClick={closeModal} type='button'><StyledCloseSvg/></StyledCloseButton>
                <AddProductFrom data={data} closeModal={closeModal} />
            </StyledModal>
        </StyledBackdrop>, modal
    )
}