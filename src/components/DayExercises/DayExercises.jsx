import {
  DayExercisesArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
  Message,
  TableArea,
  TableHeader,
  List,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  ShorterTitle,
} from './DayExercises.styled';
import sprite from '../../assets/images/sprite.svg';

//------------------------------
import ExerciseItem from './ExerciseItem/ExerciseItem';
// import { useSelector } from 'react-redux';
// import Loader from '../Loader';
// import { selectError, selectIsLoading } from '../../store/diary/selectorsDiary';
// // import Loader from 'components/Loader';
// import { Notify } from 'notiflix';
// import { Link, useLocation } from 'react-router-dom';
// //------------------------------------------------


const DayExercises = () => {
  //-----------------------
  //  const isLoading = useSelector(selectIsLoading);
  //  const error = useSelector(selectError);
  // const location = useLocation();
  //----------------------------
  // <DayProductsArea
  //     dimentionArea={
  //       consumedProducts && consumedProducts.length > 0 ? 'true' : 'false'
  //     }
  // ></DayProductsArea>
  //-----------------------

  return (
    <DayExercisesArea>
      <TitleArea>
        <Title>Execrcises</Title>
        <Button>
          <Add>Add exercise</Add>
          <ArrowIcon iconColor="#E6533C">
            <use href={`${sprite}#icon-start-arrow`} />
          </ArrowIcon>
        </Button>
      </TitleArea>
      <TableArea>
        <TableHeader>
          <Grid1>Body Part</Grid1>
          <Grid2>Equipment</Grid2>
          <Grid3>Name</Grid3>
          <Grid4>Target</Grid4>
          <Grid5>
            <ShorterTitle>Burned Calories</ShorterTitle>
          </Grid5>
          <Grid6>Time</Grid6>
          <Grid7 />
        </TableHeader>
        {/* <Message>Not found exercises</Message> */}
      </TableArea>

      <List>
        <ExerciseItem
          title={'title'}
          category={'category'}
          caloriesConsumed={100}
          weightConsumed={100}
          groupBloodNotAllowed={true}
        />
        <ExerciseItem
          title={'title'}
          category={'category'}
          caloriesConsumed={100}
          weightConsumed={100}
          groupBloodNotAllowed={true}
        />
        <ExerciseItem
          title={'title'}
          category={'category'}
          caloriesConsumed={100}
          weightConsumed={100}
          groupBloodNotAllowed={true}
        />
        <ExerciseItem
          title={'title'}
          category={'category'}
          caloriesConsumed={100}
          weightConsumed={100}
          groupBloodNotAllowed={true}
        />
        <ExerciseItem
          title={'title'}
          category={'category'}
          caloriesConsumed={100}
          weightConsumed={100}
          groupBloodNotAllowed={true}
        />
      </List>
    </DayExercisesArea>
  );
};

export default DayExercises;