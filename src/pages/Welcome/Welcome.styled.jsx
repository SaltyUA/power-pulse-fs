import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { styleGuide } from '../../constants/styleGuide';

export const WelcomeContainer = styled.div`
  width: 320px;
  height: 812px;
  padding: 0px 20px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    height: 800px;
    display: flex;
  }
`;

export const StatisticsContainer = styled.div`
  @media screen and (min-width: 1440px) {
    margin-top: 335px;
  }
`;

export const ContainerWelcome = styled.div`
  margin-top: 90px;
  margin-bottom: 230px;

  @media screen and (min-width: 768px) {
    margin-top: 140px;
    margin-bottom: 171px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 152px;
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

export const FullfilledButton = styled(Link)`
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  justify-content: center;
  color: ${styleGuide.whiteColor};
  background-color: ${styleGuide.orangeColor};
  border-radius: 12px;
  transition: color ${styleGuide.animation};

  &:is(:hover, .base-btn:focus) {
    background-color: ${styleGuide.orange2Color};
    outline: none;
  }

  &.disabled {
    color: #efede899;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const TransparentButton = styled(Link)`
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  justify-content: center;
  color: ${styleGuide.whiteColor};
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: color ${styleGuide.animation};
  border-radius: 12px;
  &:is(:hover, .base-btn:focus) {
    border-color: ${styleGuide.orangeColor};
    outline: none;
  }

  &.disabled {
    color: #efede899;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
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
  margin-left: 80px;
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
    margin-left: 76px;
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
    margin-left: 299px;
    margin-left: 524px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 463px;
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
