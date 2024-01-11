import styled from 'styled-components';
import { styleGuide } from '../../helpers/styleGuide';

export const StyledInput = styled.input`
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: ${styleGuide.whiteColor};
  background-color: transparent;

  &:is(:hover, :focus) {
    border-color: ${styleGuide.orangeColor};
  }

  &.success {
    border-color: ${styleGuide.successColor};
  }

  &.error {
    border-color: ${styleGuide.errorColor};
  }
`;
