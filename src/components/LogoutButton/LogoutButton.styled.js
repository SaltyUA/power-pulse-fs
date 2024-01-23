import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const LogoutIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${styleGuide.orangeColor};
  fill: none;
  transition: all ${styleGuide.animation};
`;

export const LogoutWrap = styled.button`
  color: ${styleGuide.whiteColor};
  display: flex;
  align-items: center;
  gap: 8px;

  transition: all ${styleGuide.animation};
  &:hover {
    color: ${styleGuide.orangeColor};
  }

  &:hover > svg {
    stroke: ${styleGuide.orange2Color};
  }
`;
