import styled from '@emotion/styled';
import { styleGuide } from '../../constants/styleGuide';

export const TitlePage = styled.h1`
  color: ${styleGuide.whiteColor};
  line-height: 1;
`;

export const ProfilerWrapper = styled.div`
  padding-top: 40px;
  @media screen and (min-width: 375px) {
    padding-top: 40px;
    padding-bottom: 66px;
    width: 100%;

    @media screen and (min-width: 768px) {
      padding-top: 72px;
      padding-bottom: 54px;
    }

    @media screen and (min-width: 1440px) {
      padding-bottom: 44px;
      padding-right: 64px;
      padding-left: 64px;
    }
  }
`;

export const WrapperContent = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 50px;
  }
`;

export const WrapperForm = styled.div`
  padding-block: 20px 66px;

  @media screen and (min-width: 768px) {
    padding-block: 40px 54px;
  }

  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-block: 32px 44px;
    padding-right: 64px;
  }
`;
