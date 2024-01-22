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
import thumb from '../../assets/images/thumb_up_gloss.png';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState } from 'react';
import sprite from '../../assets/images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentExercise,
  setIsShowModal,
} from '../../store/exercises/sliceExercises';
import { getCurrentExercise } from '../../store/exercises/selectorsExercises';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import timeFormat from '../../utils/timeFormat';
import { addExerciseThunk } from '../../store/exercises/operationExercises';
import { getCurrentDate } from '../../hooks';

function ExerciseForm() {
  const dispatch = useDispatch();
  const [isPlaying, setisPlaying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [exerciseDuration, setExerciseDuration] = useState(0);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const currentExercise = useSelector(getCurrentExercise);

  const handleClose = () => dispatch(setIsShowModal());

  const handleAdd = () => {
    const dispatchData = {
      body: {
        date: getCurrentDate(),
        calories: burnedCalories ?? 1,
        time: Math.round(exerciseDuration),
      },
      id: currentExercise._id,
    };
    dispatch(addExerciseThunk(dispatchData));
    dispatch(setCurrentExercise(null));
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
                  <img src={currentExercise.gifUrl} alt="Illustration" />
                </ImgContainer>
                <RightSide>
                  <RowUp>
                    <NameContainer>
                      <ModalSubtext>Name</ModalSubtext>
                      <ModalText>
                        {capitalizeFirstLetter(currentExercise.name)}
                      </ModalText>
                    </NameContainer>
                    <NameContainer>
                      <ModalSubtext>Target</ModalSubtext>
                      <ModalText>
                        {capitalizeFirstLetter(currentExercise.target)}
                      </ModalText>
                    </NameContainer>
                  </RowUp>
                  <Row>
                    <NameContainer>
                      <ModalSubtext>Body Part</ModalSubtext>
                      <ModalText>
                        {capitalizeFirstLetter(currentExercise.bodyPart)}
                      </ModalText>
                    </NameContainer>
                    <NameContainer>
                      <ModalSubtext>Equipment</ModalSubtext>
                      <ModalText>
                        {capitalizeFirstLetter(currentExercise.equipment)}
                      </ModalText>
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
                      duration={currentExercise.time * 60}
                      colors={'#E6533C'}
                      size={125}
                      onUpdate={(remainingTime) => {
                        setExerciseDuration(
                          currentExercise.time * 60 - remainingTime
                        );
                        setBurnedCalories(
                          Math.round(
                            (currentExercise.burnedCalories /
                              (currentExercise.time * 60)) *
                              exerciseDuration
                          )
                        );
                      }}
                    >
                      {({ remainingTime }) => timeFormat(remainingTime)}
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
              Burned calories: <CaloriesTimer>{burnedCalories}</CaloriesTimer>
            </CaloriesLabel>
            <BtnAddToDiary>
              <ModalButton
                disabled={isPlaying || exerciseDuration < 60}
                onClick={handleAdd}
              >
                {exerciseDuration < 60
                  ? 'Unless 1 minute for training'
                  : 'Add to diary'}
              </ModalButton>
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
              Your time:
              <DiaryCaloriesTime>
                {timeFormat(exerciseDuration)}
              </DiaryCaloriesTime>
            </SubtextDiaryModal>
            <BurnedCalories>
              Burned calories:
              <DiaryCaloriesBurned>{burnedCalories}</DiaryCaloriesBurned>
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
