import {
  SvgPlay,
  SvgRunning,
  StatisticsVideo,
  StatisticsCalories,
  VideoContainer,
  VideoCaunt,
  VideoText,
  CaloriesContainer,
  CaloriesCaunt,
  CaloriesText,
  IconWrap,
  IconWrapCalories,
  StatisticsContainer,
} from '../../pages/Welcome/Welcome.styled';
import sprite from '../../assets/images/sprite.svg';

export const Statistics = () => {
  return (
    <StatisticsContainer>
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
        <IconWrapCalories>
          <SvgRunning width={12} height={12}>
            <use href={sprite + '#icon-running'}></use>
          </SvgRunning>
        </IconWrapCalories>
        <CaloriesContainer>
          <CaloriesCaunt>500</CaloriesCaunt>
          <CaloriesText>cal</CaloriesText>
        </CaloriesContainer>
      </StatisticsCalories>
    </StatisticsContainer>
  );
};
