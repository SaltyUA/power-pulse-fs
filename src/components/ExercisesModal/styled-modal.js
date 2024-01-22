import styled from 'styled-components';
import Button from '../Button/Button';
import { styleGuide } from '../../constants/styleGuide';
import { Link } from 'react-router-dom';

export const ModalButton = styled(Button)`
  // position: absolute;
  // bottom: 48px;
  // right: 32px;
`;

export const BtnAddToDiary = styled.div`
  position: absolute;
  right: 32px;
  bottom: 48px;

  @media (max-width: 767px) {
    bottom: 48px;
    left: 16px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: 'blur(5px)';
`;

export const ModalContent = styled.div`
  position: relative;
  padding-top: 48px;
  background-color: #fefefe;
  margin: 15% auto;
  max-width: 694px;
  height: 550px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;

  @media (max-width: 767px) {
    position: relative;
    width: 335px;
    height: 788px;
  }
`;

export const TextTime = styled.button`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: 14px;
  margin-bottom: 4px;

  @media (max-width: 767px) {
    margin-top: 14px;
  }
`;

export const CountdownCircleTimer = styled.div`
  width: 125px;
  height: 125px;
`;

export const Close = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const CloseIcon = styled.svg`
  z-index: 100;
  width: 26px;
  height: 26px;
  stroke: ${styleGuide.whiteColor};
`;

export const ModalSubcontent = styled.div`
  position: relative;
`;

export const NameContainer = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 12px 18px 12px;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 70px;
  margin: 0;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    width: 147px;
    height: 62px;
  }
`;

export const ModalSubtext = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.5;
`;

export const ModalText = styled.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`;

export const RightSide = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 767px) {
    position: absolute;
    top: 470px;
    left: 15px;
  }
`;

export const ImgContainer = styled.div`
  margin-left: 32px;
  border-radius: 12px;
  margin-right: 16px;
  overflow: hidden;
  width: 270px;
  height: 226px;
  object-fit: cover;

  @media (max-width: 767px) {
  }
`;

export const TopWrap = styled.div`
  display: flex;
`;

export const RowUp = styled.div``;

export const Row = styled.div`
  margin-right: 31px;
`;

export const ButtonActive = styled.div`
  position: absolute;
  left: 150px;
  bottom: 60px;

  @media (max-width: 767px) {
    position: absolute;
    top: 450px;
  }
`;

// Стили таймера
export const TimerContainerWrapper = styled.div`
  position: absolute;
  left: 105px;
`;
export const TimerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
  }
`;

export const TimerWrap = styled.div``;

export const PlayIcon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${styleGuide.whiteColor};
  fill: ${styleGuide.orangeColor};
`;

export const CaloriesLabel = styled.div`
  position: absolute;
  bottom: 48px;
  left: 100px;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;

  @media (max-width: 767px) {
    position: absolute;
    bottom: 280px;
  }
`;

export const CaloriesTimer = styled.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
`;

export const BotWrap = styled.div``;

// Стили для модального окна Diary
export const DiaryModal = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const DiaryModalContent = styled.div`
  position: relative;
  background-color: #10100f;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 12px;
`;

export const ToDiaryButton = styled(Link)`
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const DiaryClose = styled.span`
  position: absolute;
  right: 24px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  width: 26px;
  cursor: pointer;
`;

export const DiaryImg = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: 55px;
  margin-bottom: 55px;
`;

export const ModalDiaryText = styled.h2`
  margin-bottom: 16px;
  color: #efede8;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  line-height: 32px;
`;

export const SubtextDiaryModal = styled.p`
  display: flex;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`;

export const BurnedCalories = styled.div`
  display: flex;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 32px;
`;

export const DiaryCaloriesTime = styled.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
`;

export const DiaryCaloriesBurned = styled.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
`;

export const BtnNextExercise = styled.button`
  display: flex;
  margin: 0 auto;
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #e6533c;
  width: 162px;
  border: none;
`;
