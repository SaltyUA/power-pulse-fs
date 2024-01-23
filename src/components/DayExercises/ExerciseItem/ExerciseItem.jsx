import {
  ExerciseDiv,
  Column,
  ButtonEl,
  DeleteIcon,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Title,
  ShorterTitle,
} from './ExerciseItem.styled';
import sprite from '../../../assets/images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { delExercisesDay } from '../../../store/diary/operationDiary';
import { getDateInfo } from '../../../store/diary/selectorsDiary';
const ExerciseItem = ({
  calories,
  time,
  exercise,
}) => {
const dateDel = useSelector(getDateInfo)  
const dispatch = useDispatch()
  const handleClick = (_id) => {
    
    dispatch(delExercisesDay({ date: dateDel, id: _id }));
    
  };
  return (
    <ExerciseDiv key={exercise._id}>
      <Grid1>
        <Title>Body part</Title>
        <Column>
          <ShorterTitle>{exercise.bodyPart}</ShorterTitle>
        </Column>
      </Grid1>
      <Grid2>
        <Title>Equipment</Title>
        <Column>
          <ShorterTitle>{exercise.equipment}</ShorterTitle>
        </Column>
      </Grid2>
      <Grid3>
        <Title>Name</Title>
        <Column>
          <ShorterTitle>{exercise.name}</ShorterTitle>
        </Column>
      </Grid3>
      <Grid4>
        <Title>Target</Title>
        <Column>
          <ShorterTitle>{exercise.target}</ShorterTitle>
        </Column>
      </Grid4>
      <Grid5>
        <Title>Burned Calories</Title>
        <Column>{calories}</Column>
      </Grid5>
      <Grid6>
        <Title>Time</Title>
        <Column>{time}</Column>
      </Grid6>
      <Grid7>
        <Title></Title>
        <ButtonEl onClick={() => handleClick(exercise._id)}>
          <DeleteIcon>
            <use href={`${sprite}#icon-trash`} />
          </DeleteIcon>
        </ButtonEl>
      </Grid7>
    </ExerciseDiv>
  );
}

export default ExerciseItem;
