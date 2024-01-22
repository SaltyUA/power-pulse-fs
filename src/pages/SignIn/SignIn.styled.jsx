import styled from '@emotion/styled';
import { styleGuide } from '../../constants/styleGuide';
import bgImageMob from '../../assets/images/side-view-people-training-gym-1x.jpg';
import bgImageTab from '../../assets/images/side-view-people-training-gym-2x.jpg';
import bgImageDesk from '../../assets/images/side-view-people-training-gym-3x.jpg';

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

export const FormContainer = styled.div``;

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

export const SignWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 121px;

  padding: 90px 20px 0;

  background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${bgImageMob});
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (min-width: 768px) {
    padding: 140px 32px 0;

    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${bgImageTab});
    background-repeat: no-repeat;
    background-position: right bottom;
  }

  @media screen and (min-width: 1440px) {
    padding: 151px 96px 0;
    flex-direction: row;
    gap: 172px;
    background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${bgImageDesk});
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`;
