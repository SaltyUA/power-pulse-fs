import {
  DayDashboardArea,
  DashboardItem,
  TitleArea,
  Title,
  Value,
  Icon,
} from './DayDashboard.styled';
import sprite from '../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/selectors';
import { getDiaryInfo } from '../../store/diary/selectorsDiary';



const DayDashboard = () => {
  const user = useSelector(selectUser);
  const dayInfo = useSelector(getDiaryInfo);

  const caloriesRemaining =
    user.dailyCalories && dayInfo.caloriesConsumed
      ? user.dailyCalories - dayInfo.caloriesConsumed
      : 0;
  
  const sportsRemaining =
    user.dailySportTime && dayInfo.activity
      ? Math.trunc(user.dailySportTime - dayInfo.activity / 60)
      : 0;
  
  const restRed = caloriesRemaining < 0 ? 'red' : ''
  const restGreen = caloriesRemaining < 0 ? 'green' : '';
  

  return (
    <DayDashboardArea>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-food`} />
          </Icon>
          <Title accent="true">Daily calorie intake</Title>
        </TitleArea>
        <Value>{user.dailyCalories}</Value>
      </DashboardItem>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-dumbbell`} />
          </Icon>
          <Title accent="true">Daily physical activity</Title>
        </TitleArea>
        <Value>{user.dailySportTime} min</Value>
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-apple`} />
          </Icon>
          <Title accent="false">Calories consumed</Title>
        </TitleArea>
        <Value>{dayInfo.caloriesConsumed || 0}</Value>
      </DashboardItem>

      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-burn`} />
          </Icon>
          <Title accent="false">Calories burned</Title>
        </TitleArea>
        <Value>{dayInfo.caloriesBurned || 0}</Value>
      </DashboardItem>

      <DashboardItem accent="false" rest={restRed}>
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-bubble`} />
          </Icon>
          <Title accent="false">Calories remaining</Title>
        </TitleArea>
        <Value>{caloriesRemaining}</Value>
      </DashboardItem>

      <DashboardItem accent="false" rest={restGreen}>
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#icon-running`} />
          </Icon>
          <Title accent="false">Sports remaining</Title>
        </TitleArea>
        <Value>{sportsRemaining} min</Value>
      </DashboardItem>
    </DayDashboardArea>
  );
};

export default DayDashboard;