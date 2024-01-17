import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { styleGuide } from '../../constants/styleGuide';
import training from '../../assets/images/side-view-people-training-gym-1x.jpg';
import trainingTablet from '../../assets/images/side-view-people-training-gym-2x.jpg';
import trainingDesctop from '../../assets/images/side-view-people-training-gym-3x.jpg';

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

export const NotFoundContainer = styled.div`
  width: 200px;
  background: #e6533c;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 213px 10px 250px 10px;

  @media (min-width: 375px) {
    padding: 213px 20px 250px 20px;
    width: 240px;
  }

  @media (min-width: 768px) {
    padding: 260px 32px 309px 32px;
    width: 420px;
  }

  @media (min-width: 1440px) {
    padding: 172px 96px 221px 96px;
    width: 669px;
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: 66px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 160px;
    font-weight: 500;
    line-height: 0.93;
    margin-bottom: 28px;
  }
`;

export const NotFoundText = styled.p`
  width: 180px;
  color: #efede8;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 28px;

  @media (min-width: 375px) {
    width: 200px;
  }

  @media (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

  @media (min-width: 1440px) {
    width: 477px;
  }
`;

export const NotFoundBtn = styled(Link)`
  display: inline-block;
  color: ${styleGuide.whiteColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  padding: 12px 40px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  width: 147px;
  transition: color ${styleGuide.animation};
  text-align: center;
  white-space: nowrap;

  &:is(:hover, :focus) {
    background-color: #ef8964;
  }

  @media (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
    width: 204px;
  }
`;

export const ImgContainer = styled.div`
  background-image: url(${training});
  background-position: bottom right;
  width: 200px;
  background-repeat: no-repeat;

  @media (min-width: 375px) {
    width: 446px;
  }

  @media (min-width: 767px) {
    background-image: url(${trainingTablet});
    width: 446px;
  }

  @media (min-width: 1440px) {
    background-image: url(${trainingDesctop});
    width: 771px;
  }
`;
