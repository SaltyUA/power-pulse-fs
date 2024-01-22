import {
  Modal,
  ModalContent,
  NameContainer,
  ModalSubtext,
  ModalText,
  ModalSubcontent,
  TimerContainer,
  CaloriesLabel,
  CaloriesTimer,
  DiaryModal,
  DiaryModalContent,
  ToDiaryButton,
  DiaryImg,
  ModalDiaryText,
  SubtextDiaryModal,
  BurnedCalories,
  DiaryCaloriesTime,
  DiaryCaloriesBurned,
  BtnNextExercise,
  TopWrap,
  ImgContainer,
  RightSide,
  TimerWrap,
  ModalButton,
  PlayIcon,
  Close,
  CloseIcon,
  Row,
  RowUp,
  BtnAddToDiary,
  TextTime,
  ButtonActive,
  TimerContainerWrapper,
} from './styled-modal';
import gif from '../../assets/images/f38f17db5480518a62220c817f6bbffe.png';
import thumb from '../../assets/images/thumb_up_gloss.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState } from 'react';
import sprite from '../../assets/images/sprite.svg';
import { useDispatch } from 'react-redux';
import { setIsShowModal } from '../../store/exercises/sliceExercises';

function ExerciseForm() {
  const [isPlaying, setisPlaying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setIsShowModal());
  const handleAdd = () => {
    setIsSuccess(true);
  };
  const togglePlay = () => setisPlaying(!isPlaying);

  return (
    <>
      {!isSuccess ? (
        <Modal>
          <ModalContent>
            <Close type="button" onClick={handleClose}>
              <CloseIcon>
                <use href={sprite + '#icon-close'} />
              </CloseIcon>
            </Close>
            <ModalSubcontent>
              <TopWrap>
                <ImgContainer>
                  <img src={gif} alt="Illustration" />
                </ImgContainer>
                <RightSide>
                  <RowUp>
                    <NameContainer>
                      <ModalSubtext>Name</ModalSubtext>
                      <ModalText>Exercise Name</ModalText>
                    </NameContainer>
                    <NameContainer>
                      <ModalSubtext>Target</ModalSubtext>
                      <ModalText>Target</ModalText>
                    </NameContainer>
                  </RowUp>
                  <Row>
                    <NameContainer>
                      <ModalSubtext>Body Part</ModalSubtext>
                      <ModalText>Body Part</ModalText>
                    </NameContainer>
                    <NameContainer>
                      <ModalSubtext>Equipment</ModalSubtext>
                      <ModalText>Equipment</ModalText>
                    </NameContainer>
                  </Row>
                </RightSide>
              </TopWrap>

              <TimerContainerWrapper>
                <TimerContainer>
                  <TextTime>Time</TextTime>
                  <TimerWrap>
                    <CountdownCircleTimer
                      isPlaying={isPlaying} // Использование переменной состояния
                      duration={9}
                      colors={'#E6533C'}
                      size={125}
                    >
                      {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                  </TimerWrap>
                </TimerContainer>
              </TimerContainerWrapper>
            </ModalSubcontent>
            <ButtonActive>
              <button onClick={togglePlay}>
                <PlayIcon>
                  <use
                    href={
                      isPlaying ? sprite + '#icon-pause' : sprite + '#icon-play' // Обновление иконки в зависимости от состояния
                    }
                  />
                </PlayIcon>
              </button>
            </ButtonActive>
            <CaloriesLabel>
              Burned calories: <CaloriesTimer>0</CaloriesTimer>
            </CaloriesLabel>
            <BtnAddToDiary>
              <ModalButton onClick={handleAdd}>Add to diary</ModalButton>
            </BtnAddToDiary>
          </ModalContent>
        </Modal>
      ) : (
        <DiaryModal id="diaryModal">
          <DiaryModalContent>
            <Close type="button" onClick={handleClose}>
              <CloseIcon>
                <use href={sprite + '#icon-close'} />
              </CloseIcon>
            </Close>
            <DiaryImg src={thumb} alt="Thumb Up" />
            <ModalDiaryText>Well done</ModalDiaryText>
            <SubtextDiaryModal>
              Your time: <DiaryCaloriesTime>00:00</DiaryCaloriesTime>
            </SubtextDiaryModal>
            <BurnedCalories>
              Burned calories: <DiaryCaloriesBurned>0</DiaryCaloriesBurned>
            </BurnedCalories>
            <BtnNextExercise onClick={handleClose}>
              Next exercise
            </BtnNextExercise>
            <ToDiaryButton to={'/diary'}>To the diary</ToDiaryButton>
          </DiaryModalContent>
        </DiaryModal>
      )}
    </>
  );
}

export default ExerciseForm;
