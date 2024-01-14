import styled from 'styled-components';

export const StyledBackdrop = styled.div`
 overflow-y: hidden;
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ showModal }) => (showModal ? '1' : '0')};
  visibility: ${({ showModal }) => (showModal ? 'visible' : 'hidden')};
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 500ms cubic-bezier(0.4, 0, 0.2, 1);

//    &.is-hidden {
//     opacity: 0;
//     pointer-events: none;
//     visibility: hidden;
//       }

//   &.is-hidden .modal {
//     transform: scale(0.5);
//   }
`

export const StyledModal = styled.div`
position: relative;
width: 335px;
height: 280px;
border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background: #10100F;
  transform: scale(${({ showModal }) => (showModal ? '1' : '0.5')});
// transform:  scale(1);
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
`