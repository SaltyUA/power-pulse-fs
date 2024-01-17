import styled from '@emotion/styled';
import { styleGuide } from '../../constants/styleGuide';
import training from '../../assets/images/side-view-people-training-gym-1x.jpg';
import trainingTablet from '../../assets/images/side-view-people-training-gym-2x.jpg';
import trainingDesctop from '../../assets/images/side-view-people-training-gym-3x.jpg';

export const WelcomeContainer = styled.div`
  overflow: hidden;
  width: 320px;
  padding: 0px 20px;
  margin: 0 auto;
  background-image: url(${training});
  background-position: bottom right;
  background-repeat: no-repeat;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
    background-image: url(${trainingTablet});
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${trainingDesctop});
    padding: 0px 32px;
    width: 1440px;
    display: flex;
  }
`;

export const StatisticsContainer = styled.div`
  padding-bottom: 43px;

  @media screen and (min-width: 1440px) {
    width: 670px;
    padding-top: 335px;
  }
`;

export const ContainerWelcome = styled.div`
  padding-top: 91px;
  padding-bottom: 230px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 171px;
  }

  @media screen and (min-width: 1440px) {
    padding: 152px 85px 246px 59px;
  }
`;

export const Title = styled.h1`
  color: ${styleGuide.whiteColor};
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.11;
    width: 598px;
  }
`;

export const Svgline = styled.svg`
  stroke: ${styleGuide.orangeColor};
  position: absolute;
  stroke-width: 2px;
  top: 45px;
  left: 45%;
  transform: translateX(-50%);
  z-index: -1;

  @media screen and (min-width: 375px) {
    top: 44px;
    left: 12%;
  }

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 89px;
    left: 11%;
  }

  @media screen and (min-width: 1440px) {
    top: 86px;
    left: 13%;
  }
`;

export const SvgPlay = styled.svg`
  fill: ${styleGuide.whiteColor};
  align-items: center;
  margin-left: 2px;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
    margin-left: 4px;
  }
`;

export const SvgRunning = styled.svg`
  fill: ${styleGuide.whiteColor};
  margin-right: 1px;

  @media screen and (min-width: 768px) {
    height: 16px;
    width: 16px;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  gap: 0px 14px;

  @media screen and (min-width: 768px) {
    gap: 0px 20px;
  }
`;

export const StatisticsVideo = styled.div`
  width: 146px;
  height: 66px;
  border-radius: 12px;
  background: #303030;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  padding: 14px 18px;
  margin-left: 60px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 375px) {
    margin-left: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;
    margin-left: 299px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0px;
  }
`;

export const StatisticsCalories = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: flex-end;
  width: 119px;
  height: 76px;
  border-radius: 12px;
  background: #ef8964;
  padding: 14px 18px;
  margin-left: 160px;

  @media screen and (min-width: 375px) {
    margin-left: 216px;
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    margin-left: 524px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 458px;
  }
`;

export const CaloriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const CaloriesText = styled.div`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CaloriesCaunt = styled.div`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-right: 8px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.04;
    margin-right: 11px;
  }
`;

export const VideoContainer = styled.div`
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    margin-left: 12px;
  }
`;

export const VideoCaunt = styled.div`
  color: #efede8;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 8px;
  }
`;

export const VideoText = styled.div`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #ef8964;

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const IconWrapCalories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #efa082;

  @media screen and (min-width: 768px) {
    height: 24px;
    width: 24px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;
