import styled from '@emotion/styled';
import { styleGuide } from '../../constants/styleGuide';

export const FormTitle = styled.h2`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 14px;
  color: ${styleGuide.whiteColor};
`;

export const FormContainer = styled.div`
  padding: 90px 20px 0px;
`;

export const FormWrapper = styled.form`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  & button {
    margin-top: 28px;
    margin-bottom: 12px;
  }

  & a {
    color: ${styleGuide.whiteColor};
    text-decoration: underline;
  }

  & p {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(239, 237, 232, 0r6);
  }
`;
