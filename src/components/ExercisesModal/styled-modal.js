import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 35px;
  margin-left: 35px;
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  width: 694px;
  height: 550px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
`;

export const Close = styled.span`
  position: absolute;
  right: 16px;
  top: 16px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  width: 26px;
  cursor: pointer;
`;

export const Name = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 12px 18px 12px;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 70px;
  margin: 0;
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

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;
`;

export const Img = styled.div`
  margin-left: 32px;
  border-radius: 12px;
  margin-right: 16px;
`;

export const Img1 = styled.img`
  border-radius: 12px;
`;

export const ModalSubcontent = styled.div`
  position: relative;
  padding-top: 48px;
`;

export const Block = styled.div`
  display: flex;
`;

// Стили таймера
export const TimerContainer = styled.div`
  left: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 124px;
  height: 124px;
  position: relative;
`;

export const TimerSvg = styled.svg`
  transform: rotate(180deg);
`;

export const TimerPath = styled.circle`
  stroke-dasharray: 565.48;
  stroke-dashoffset: 565.48;
  transition: stroke-dashoffset 1s linear;
  stroke: #808080;
`;

export const TimerDot = styled.circle`
  transition: transform 1s linear;
`;

export const TimeLabel = styled.span`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 24px;
  color: white;
`;

export const TimerPathOverlay = styled.circle`
  transition: stroke-dashoffset 1s linear;
`;

export const CaloriesLabel = styled.div`
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
`;

export const CaloriesTimer = styled.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
`;

export const TextTime = styled.p`
  margin-top: 14px;
  color: rgba(239, 237, 232, 0.4);
  font-family: Roboto;
  font-size: 10px;
  line-height: 14px;
`;

// Стили для модального окна Diary
export const DiaryModal = styled.div`
  display: none;
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

export const ToDiaryButton = styled.button`
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
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
