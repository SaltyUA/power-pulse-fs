import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const StyledInput = styled.input`
  padding: 14px;

  color: ${styleGuide.whiteColor};

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  background-color: transparent;

  position: relative;

  &:is(:hover) {
    border-color: ${styleGuide.orangeColor};
    outline: none;
  }

  &.success {
    border-color: ${styleGuide.successColor};
  }

  &.error {
    border-color: ${styleGuide.errorColor};

    & ::before {
      content: ${(props) => props.message};
      color: ${styleGuide.errorColor};
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }
`;
