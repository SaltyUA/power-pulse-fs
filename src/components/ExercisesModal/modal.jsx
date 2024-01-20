import {
  Button,
  Modal,
  ModalContent,
  CloseButton,
  NameContainer,
  ModalSubtext,
  ModalText,
  Row,
  Img,
  Img1,
  ModalSubcontent,
  Block,
  TimerContainer,
  TimerSvg,
  TimerPath,
  TimerDot,
  TimeLabel,
  TimerPathOverlay,
  CaloriesLabel,
  CaloriesTimer,
  // TextTime,
  DiaryModal,
  DiaryModalContent,
  ToDiaryButton,
  DiaryClose,
  DiaryImg,
  ModalDiaryText,
  SubtextDiaryModal,
  BurnedCalories,
  DiaryCaloriesTime,
  DiaryCaloriesBurned,
  BtnNextExercise,
} from './styled-modal';

function ExerciseForm() {
  return (
    <>
      <Button id="openModal">Відкрити вікно</Button>

      <Modal id="myModal">
        <ModalContent>
          <CloseButton>&times;</CloseButton>
          <ModalSubcontent>
            <Block>
              <Img>
                <Img1 src="./img/your-image.png" alt="Illustration" />
              </Img>
              <div>
                <Row>
                  <NameContainer>
                    <ModalSubtext>Name</ModalSubtext>
                    <ModalText>Aire bike</ModalText>
                  </NameContainer>
                  <NameContainer>
                    <ModalSubtext>Target</ModalSubtext>
                    <ModalText>Abs</ModalText>
                  </NameContainer>
                </Row>
              </div>
            </Block>
            <TimerContainer>
              <TimerSvg>
                <TimerPath />
                <TimerPathOverlay />
                <TimerDot />
              </TimerSvg>
              <TimeLabel>00:00</TimeLabel>
              <Button className="start-button">▷</Button>
              <CaloriesLabel>
                Burned calories: <CaloriesTimer>0</CaloriesTimer>
              </CaloriesLabel>
            </TimerContainer>
            <Button className="btn-diary">Add to diary</Button>
          </ModalSubcontent>
        </ModalContent>
      </Modal>

      <DiaryModal id="diaryModal">
        <DiaryModalContent>
          <DiaryClose>&times;</DiaryClose>
          <DiaryImg src="./img/thumb-up.png" alt="Thumb Up" />
          <ModalDiaryText>Well done</ModalDiaryText>
          <SubtextDiaryModal>
            Your time: <DiaryCaloriesTime>00:00</DiaryCaloriesTime>
          </SubtextDiaryModal>
          <BurnedCalories>
            Burned calories: <DiaryCaloriesBurned>0</DiaryCaloriesBurned>
          </BurnedCalories>
          <BtnNextExercise>Next exercise</BtnNextExercise>
          <ToDiaryButton>To the diary</ToDiaryButton>
        </DiaryModalContent>
      </DiaryModal>
    </>
  );
}

export default ExerciseForm;
