import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const StyledInput = styled.input`
  padding: 14px;

  color: ${styleGuide.whiteColor};

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  background-color: transparent;

  &:is(:hover, :focus) {
    border-color: ${styleGuide.orangeColor};
    outline: none;
  }

  &.success {
    border-color: ${styleGuide.successColor};
  }

  &.error {
    border-color: ${styleGuide.errorColor};
  }
`;
