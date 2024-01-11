import styled from 'styled-components';
import { styleGuide } from '../../helpers/styleGuide';
import { Link } from 'react-router-dom';

export const FullfilledButton = styled(Link)`
  padding: 16px 60px;
  color: ${styleGuide.whiteColor};
  background-color: ${styleGuide.orangeColor};
  border-radius: 12px;
  transition: color ${styleGuide.animation};

  &:is(:hover, .base-btn:focus) {
    background-color: ${styleGuide.orange2Color};
    outline: none;
  }

  &.disabled {
    color: #efede899;
  }
`;

export const TransparentButton = styled.button`
  padding: 16px 60px;
  color: ${styleGuide.whiteColor};
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: color ${styleGuide.animation};

  &:is(:hover, .base-btn:focus) {
    border-color: ${styleGuide.orangeColor};
    outline: none;
  }

  &.disabled {
    color: #efede899;
  }
`;
