import styled from '@emotion/styled';
import image from '../../assets/images/side-view-people-training-gym1.png'
import { css } from '@emotion/react';

export const ExercisesWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 106px;

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
    ${(props => props.$isCategorie && css`background:linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0.00) 68.17%), url(${image});

;
background-repeat: no-repeat;
background-size: contain;
background-position: right`)}
  }
`;

export const ExercisesBox = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ExercisesTitle = styled.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`;
