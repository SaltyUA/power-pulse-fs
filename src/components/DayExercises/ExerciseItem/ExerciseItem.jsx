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
// import { useDispatch } from 'react-redux';
// import { deleteProduct } from '../../../store/diary/operationsDiary';

const ExerciseItem = ({
  id,
  // product,
  // caloriesConsumed,
  // weightConsumed,
  // recommendedByGroupBlood,
}) => {
  // const dispatch = useDispatch();
  // const isRecommended = recommendedByGroupBlood;

  const handleClick = (id, dateForDelete) => {
    // dispatch(deleteProduct({ productId: id, date: dateForDelete }));
    console.log()
  };

  return (
    <ExerciseDiv key={id}>
      <Grid1>
        <Title>Body part</Title>
        <Column>
          {/* <ShorterTitle>{product.title}</ShorterTitle> */}
          <ShorterTitle>Waist</ShorterTitle>
        </Column>
      </Grid1>
      <Grid2>
        <Title>Equipment</Title>
        <Column>
          {/* <ShorterTitle>{product.category}</ShorterTitle> */}
          <ShorterTitle>Body weight</ShorterTitle>
        </Column>
      </Grid2>
      <Grid3>
        <Title>Name</Title>
        {/* <Column>{caloriesConsumed}</Column> */}
        <Column>3/4 sit-up</Column>
      </Grid3>
      <Grid4>
        <Title>Target</Title>
        <Column>Abs</Column>
      </Grid4>
      <Grid5>
        <Title>Burned Calories</Title>
        <Column>220</Column>
      </Grid5>
      <Grid6>
        <Title>Time</Title>
        <Column>60</Column>
      </Grid6>
      <Grid7>
        <Title></Title>
        <ButtonEl onClick={() => handleClick(id)}>
          <DeleteIcon iconColor="#EF8964">
            <use href={`${sprite}#icon-trash`} />
          </DeleteIcon>
        </ButtonEl>
      </Grid7>
    </ExerciseDiv>
  );
};

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
