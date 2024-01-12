import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

const { animation, orangeColor, orange2Color } = styleGuide;
export const StyledButton = styled.button`
  padding: 12px 40px;
  width: ${(props) => props.$width};

  color: ${styleGuide.whiteColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  border-radius: 12px;

  border: ${(props) =>
    props.$transparent
      ? '1px solid rgba(239, 237, 232, 0.3);'
      : `1px solid ${orangeColor}`};

  background-color: ${(props) =>
    props.$transparent ? 'transparent' : orangeColor};

  transition: ${(props) =>
    props.$transparent ? `border-color ${animation}` : `color ${animation}`};

  &:is(:hover, :focus) {
    ${(props) =>
      props.$transparent
        ? `border-color: ${orange2Color}`
        : `background-color: ${orange2Color}`};
    outline: none;
  }

  &.disabled {
    color: #efede899;
  }
`;
