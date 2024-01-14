import styled from '@emotion/styled';
import { styleGuide } from '../../constants/styleGuide';

export const FormTitle = styled.h2`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 14px;
  color: ${styleGuide.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.38;
    margin-bottom: 16px;
  }
`;

export const AuthText = styled.p`
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 496px;
  }
`;

export const FormContainer = styled.div`
  padding: 90px 20px 0;

  @media screen and (min-width: 768px) {
    padding: 140px 32px 0px;
  }

  @media screen and (min-width: 1440px) {
    padding: 151px 96px 0;
  }
`;

export const FormWrapper = styled.form`
  margin-top: 28px;

  & button {
    margin-top: 28px;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
      margin-top: 64px;
    }
  }

  & a {
    color: ${styleGuide.whiteColor};
    text-decoration: underline;
  }
`;

export const RedirectText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
