import Container from '../../components/Container';
import DayDashboard from '../../components/DayDashboard';
import DayExercises from '../../components/DayExercises';
import DayProducts from '../../components/DayProducts';
import DaySwitch from '../../components/DaySwitch';
import TitlePage from '../../components/TitlePage';
import { DiaryContainer, Left, Right, ForPosition } from './Diary.styled';
import Notice from '../../components/Notice';
import { useSelector, useDispatch } from 'react-redux';
import { getDateInfo, getDiaryInfo } from '../../store/diary/selectorsDiary';

import { useEffect } from 'react';
import { fetchDiaryData } from '../../store/diary/operationDiary';

const Diary = () => {
  const dispatch = useDispatch();
  const dateInfo = useSelector(getDateInfo);
  const dayInfo = useSelector(getDiaryInfo);


  useEffect(() => {
    dispatch(fetchDiaryData(dateInfo));   
   
    }, [dateInfo, dispatch]);
  
  
  return (
    <Container>
      <ForPosition>
        <TitlePage title="Diary" />
        {/* <DaySwitch onChoiceDate={onChoiceDate } /> */}
        <DaySwitch />
        <DiaryContainer>
          <Left>
            <DayProducts consumedProducts={dayInfo.products} />
            <DayExercises consumedExercises={dayInfo.exercises} />
          </Left>
          <Right>
            <DayDashboard />
            <Notice notice="Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices." />
          </Right>
        </DiaryContainer>
      </ForPosition>
    </Container>
  );
};

export default Diary;