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
  BotWrap,
  Close,
  CloseIcon,
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
                  <NameContainer>
                    <ModalSubtext>Name</ModalSubtext>
                    <ModalText>Exercise Name</ModalText>
                  </NameContainer>
                  <NameContainer>
                    <ModalSubtext>Target</ModalSubtext>
                    <ModalText>Target</ModalText>
                  </NameContainer>
                  <NameContainer>
                    <ModalSubtext>Body Part</ModalSubtext>
                    <ModalText>Body Part</ModalText>
                  </NameContainer>
                  <NameContainer>
                    <ModalSubtext>Equipment</ModalSubtext>
                    <ModalText>Equipment</ModalText>
                  </NameContainer>
                </RightSide>
              </TopWrap>
              <BotWrap>
                <TimerContainer>
                  <TimerWrap>
                    <CountdownCircleTimer
                      isPlaying
                      duration={7}
                      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                      colorsTime={[7, 5, 2, 0]}
                    >
                      {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                  </TimerWrap>
                  <button onClick={togglePlay}>
                    <PlayIcon>
                      <use
                        href={
                          isPlaying
                            ? sprite + '#icon-play'
                            : sprite + '#icon-pause'
                        }
                      />
                    </PlayIcon>
                  </button>
                  <CaloriesLabel>
                    Burned calories: <CaloriesTimer>0</CaloriesTimer>
                  </CaloriesLabel>
                </TimerContainer>
                <ModalButton onClick={handleAdd}>Add to diary</ModalButton>
              </BotWrap>
            </ModalSubcontent>
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
