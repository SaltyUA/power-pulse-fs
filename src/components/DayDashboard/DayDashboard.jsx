import {
  DayDashboardArea,
  DashboardItem,
  TitleArea,
  Title,
  Value,
  Icon,
} from './DayDashboard.styled';
import sprite from '../../assets/images/sprite.svg';

const DayDashboard = () => {
  return (
    <DayDashboardArea>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-food`} />
          </Icon>
          <Title accent="true">Daily calorie intake</Title>
        </TitleArea>
        <Value>...</Value>
      </DashboardItem>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-dumbbell`} />
          </Icon>
          <Title accent="true">Daily physical activity</Title>
        </TitleArea>
        <Value>...</Value>
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-apple`} />
          </Icon>
          <Title accent="false">Calories consumed</Title>
        </TitleArea>
        <Value>...</Value>
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-burn`} />
          </Icon>
          <Title accent="false">Calories burned</Title>
        </TitleArea>
        <Value>...</Value>
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-bubble`} />
          </Icon>
          <Title accent="false">Calories remaining</Title>
        </TitleArea>
        <Value>...</Value>
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-running`} />
          </Icon>
          <Title accent="false">Sports remaining</Title>
        </TitleArea>
        <Value>...</Value>
      </DashboardItem>
    </DayDashboardArea>
  );
};

export default DayDashboard;