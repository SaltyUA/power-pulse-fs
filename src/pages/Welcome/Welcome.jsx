import Button from '../../components/Button/Button';
import {
  Title,
  ContainerBtn,
  TransparentButton,
  FullfilledButton,
  Svgline,
  SvgPlay,
  SvgRunning,
  WelcomeContainer,
  StatisticsVideo,
  StatisticsCalories,
  VideoContainer,
  VideoCaunt,
  VideoText,
  CaloriesContainer,
  CaloriesCaunt,
  CaloriesText,
} from './Welcome.styled';
import sprite from '../../assets/images/sprite.svg';

const Welcome = () => {
  return (
    <>
      <WelcomeContainer>
        <Title>Transforming your body shape with Power Pulse</Title>
        <Svgline>
          <use href={sprite + '#icon-start-arrow'}></use>
        </Svgline>
        <ContainerBtn>
          {/* <Button to={'/signin'} title="SignIn" /> */}
          <FullfilledButton to={'/signin'}> Sign ip </FullfilledButton>
          <TransparentButton to={'/signup'}> Sign up </TransparentButton>
        </ContainerBtn>
        <StatisticsVideo>
          <SvgPlay>
            <use href={sprite + '#icon-play'}></use>
          </SvgPlay>
          <VideoContainer>
            <VideoCaunt>350+</VideoCaunt>
            <VideoText>Video tutorial</VideoText>
          </VideoContainer>
        </StatisticsVideo>
        <StatisticsCalories>
          <SvgRunning>
            <use href={sprite + '#icon-running'}></use>
          </SvgRunning>
          <CaloriesContainer>
            <CaloriesCaunt>500</CaloriesCaunt>
            <CaloriesText>cal</CaloriesText>
          </CaloriesContainer>
        </StatisticsCalories>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
