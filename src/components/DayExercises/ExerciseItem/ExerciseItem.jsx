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
  // RecommendText,
  ShorterTitle,
} from './ExerciseItem.styled';
import sprite from '../../../assets/images/sprite.svg';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { delExercisesDay } from '../../../store/diary/operationDiary';
import { getDateInfo } from '../../../store/diary/selectorsDiary';
const ExerciseItem = ({
  bodyPart,
  burnedCalories,
  equipment,
  name,
  target,
  time,
  _id,
}) => {
const dateDel = useSelector(getDateInfo)  
const dispatch = useDispatch()
  const handleClick = (_id) => {
    console.log(_id)
    dispatch(delExercisesDay({ date: dateDel, id: _id }));
    
  };
  
  return (
    <ExerciseDiv key={_id}>
      <Grid1>
        <Title>Body part</Title>
        <Column>
          <ShorterTitle>{bodyPart}</ShorterTitle>
        </Column>
      </Grid1>
      <Grid2>
        <Title>Equipment</Title>
        <Column>
          <ShorterTitle>{equipment}</ShorterTitle>
        </Column>
      </Grid2>
      <Grid3>
        <Title>Name</Title>
        <Column>
          <ShorterTitle>{name}</ShorterTitle>
        </Column>
      </Grid3>
      <Grid4>
        <Title>Target</Title>
        <Column>
          <ShorterTitle>{target}</ShorterTitle>
        </Column>
      </Grid4>
      <Grid5>
        <Title>Burned Calories</Title>
        <Column>{burnedCalories}</Column>
      </Grid5>
      <Grid6>
        <Title>Time</Title>
        <Column>{time}</Column>
      </Grid6>
      <Grid7>
        <Title></Title>
        <ButtonEl onClick={() => handleClick(_id)}>
          <DeleteIcon iconColor="#EF8964">
            <use href={`${sprite}#icon-trash`} />
          </DeleteIcon>
        </ButtonEl>
      </Grid7>
    </ExerciseDiv>
  );
}

// ExerciseItem.propTypes = {
//   id: PropTypes.string,
//   exercise: PropTypes.shape({
//     title: PropTypes.string,
//     category: PropTypes.string,
//   }),
//   caloriesConsumed: PropTypes.number,
//   weightConsumed: PropTypes.number,
//   dateForDelete: PropTypes.string,
//   recommendedByGroupBlood: PropTypes.bool,
// };

export default ExerciseItem;
