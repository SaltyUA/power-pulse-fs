import styled from 'styled-components';
import { styleGuide } from '../../constants/styleGuide';

export const StyledInput = styled.input`
  padding: 14px;
  width: 100%;
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
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }
`;

export const ValidationMessage = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  bottom: -14px;

  &.error {
    color: ${styleGuide.errorColor};
  }

  &.success {
    color: ${styleGuide.successColor};
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    bottom: -18px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ValidationIcon = styled.svg`
  fill: currentColor;
  margin-right: 4px;
  width: 10px;
  height: 10px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
