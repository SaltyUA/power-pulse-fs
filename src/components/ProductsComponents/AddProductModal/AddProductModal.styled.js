import styled from 'styled-components';
import { styleGuide } from '../../../constants/styleGuide';

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const StyledCloseSvg = styled.svg`
stroke: ${styleGuide.whiteColor};
width: 26px;
height: 26px;
  transition:
    stroke ${styleGuide.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    ${StyledCloseButton}:hover & {
            stroke: ${styleGuide.orangeColor};
        }
    ${StyledCloseButton}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`;

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

   opacity: 1;
  visibility: visible;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.hide-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
      }

  &.hide-hidden .modal {
    transform: scale(0.5);
  }
`;

export const StyledModal = styled.div`
  padding-top: 48px;
  padding-left: 24px;
  position: relative;
  width: 335px;
  height: 280px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
 transform:  scale(1);
  

  @media screen and (min-width: 768px) {
    width: 479px;
height: 286px;
  }
`;
