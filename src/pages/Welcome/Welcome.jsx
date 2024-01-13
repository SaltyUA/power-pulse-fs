//import Button from '../../components/Button/Button';
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
  IconWrap,
  TitleWrapper,
} from './Welcome.styled';
import sprite from '../../assets/images/sprite.svg';

const Welcome = () => {
  return (
    <>
      <WelcomeContainer>
        <TitleWrapper>
          <Title>Transforming your body shape with Power Pulse</Title>
          <Svgline width={98} height={35}>
            <use href={sprite + '#icon-Line'}></use>
          </Svgline>
        </TitleWrapper>
        <ContainerBtn>
          {/* <Button to={'/signin'} title="SignIn" /> */}
          <FullfilledButton to={'/signin'}> Sign ip </FullfilledButton>
          <TransparentButton to={'/signup'}> Sign up </TransparentButton>
        </ContainerBtn>
        <StatisticsVideo>
          <IconWrap>
            <SvgPlay width={12} height={12}>
              <use href={sprite + '#icon-play'}></use>
            </SvgPlay>
          </IconWrap>
          <VideoContainer>
            <VideoCaunt>350+</VideoCaunt>
            <VideoText>Video tutorial</VideoText>
          </VideoContainer>
        </StatisticsVideo>
        <StatisticsCalories>
          <IconWrap>
            <SvgRunning width={12} height={12}>
              <use href={sprite + '#icon-running'}></use>
            </SvgRunning>
          </IconWrap>
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
