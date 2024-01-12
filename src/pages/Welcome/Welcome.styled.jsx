import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { styleGuide } from '../../helpers/styleGuide';

export const WelcomeContainer = styled.div`
  width: 320px;
  height: 812px;
  padding: 0px 20px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.05;
  margin-bottom: 40px;
  margin-top: 90px;
  position: relative;
  z-index: 2;
`;

export const Svgline = styled.svg`
  position: absolute;
  stroke-width: 2px;
  stroke: #ef8964;
  fill: white;
  width: 98px;
  height: 35px;
  top: 5px;
  left: 50px;
`;

export const SvgPlay = styled.svg`
  border-radius: 50%;
  stroke-width: 2px;
  stroke: #efede8;
  /* fill: white; */
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const SvgRunning = styled.svg`
  border-radius: 50%;
  stroke-width: 2px;
  stroke: #efede8;
  fill: #ef8964;
  width: 20px;
  height: 20px;
`;

export const ContainerBtn = styled.div`
  display: flex;
  gap: 0px 14px;
  margin-bottom: 230px;
`;

export const FullfilledButton = styled(Link)`
  padding: 16px 40px;
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
`;

export const StatisticsVideo = styled.div`
  width: 146px;
  height: 66px;
  border-radius: 12px;
  background: #303030;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  padding: 18px;
  margin-left: 80px;
`;

export const StatisticsCalories = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 119px;
  height: 76px;
  border-radius: 12px;
  background: #ef8964;
  padding: 14px 18px;
  margin-left: 100px;
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
`;
export const CaloriesCaunt = styled.div`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-right: 8px;
`;

export const VideoContainer = styled.div``;

export const VideoCaunt = styled.div`
  color: #efede8;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 4px;
`;

export const VideoText = styled.div`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`;
