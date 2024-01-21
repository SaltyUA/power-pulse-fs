import styled, { keyframes } from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const StyledAddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledBtnSpan = styled.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${styleGuide.animation};
  @media screen and (min-width: 768px) {
    ${StyledAddBtn}:hover & {
      color: ${styleGuide.whiteColor};
      transform: scale(1.25);
    }
  }
`;

const moveRight = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`;

export const StyledArrowSvg23 = styled.svg`
width: 16px;
  height: 16px;
  stroke: ${styleGuide.orangeColor};
  @media screen and (min-width: 768px) {
    ${StyledAddBtn}:hover & {
      animation: ${moveRight} 1000ms linear infinite;
    stroke: ${styleGuide.whiteColor};
             }
  }
`