import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const BurgerContainer = styled.div`
  width: 200px;
  height: 100vh;
  padding: 44.5px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  overflow: auto;
  right: 0;
  top: 0;
  background-color: ${styleGuide.orangeColor};

  transition: transform ${styleGuide.animation};
  transform: translateX(0);

  &.isHidden {
    transform: translateX(100%);
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 19px;
  right: 20px;
  color: ${styleGuide.whiteColor};

  &:is(:hover, :focus) {
    outline: none;
    color: ${styleGuide.blackColor};
  }

  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;
export const CloseButtonIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: currentColor;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const BurgerLogout = styled.div`
  position: absolute;
  left: 32px;
  bottom: 32px;

  & > button > svg {
    stroke: currentColor;
  }
`;
