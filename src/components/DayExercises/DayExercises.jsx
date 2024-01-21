import {
  DayExercisesArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
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
  Message,
} from './DayExercises.styled';
import sprite from '../../assets/images/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getExercises } from '../../store/diary/selectorsDiary';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
//------------------------------
import ExerciseItem from './ExerciseItem/ExerciseItem';
import { fetchExercises } from '../../store/diary/operationDiary';
// import { useSelector } from 'react-redux';
// import Loader from '../Loader';
// import { selectError, selectIsLoading } from '../../store/diary/selectorsDiary';
// // import Loader from 'components/Loader';
// import { Notify } from 'notiflix';
// import { Link, useLocation } from 'react-router-dom';
// //------------------------------------------------


const DayExercises = ({ consumedExercises }) => {
  const allExercises = useSelector(getExercises);
  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchExercises());
   }, [dispatch]);
  
  const exerciseInfo = []
  if (consumedExercises && allExercises && consumedExercises.length > 0 && allExercises.length > 0 ) {
    consumedExercises.forEach((item) => {
      exerciseInfo.push(
        allExercises.find((elem) => {
          if (elem._id === item.exercise) {
            return { ...elem, ...item };
          }
        })
      );
    });
  }
  // console.log(exerciseInfo);

  //-----------------------
  //  const isLoading = useSelector(selectIsLoading);
  //  const error = useSelector(selectError);
  // const location = useLocation();
  //----------------------------
 
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

      {exerciseInfo && exerciseInfo.length > 0 ? (
        <List>
          {exerciseInfo.map((item) => (
            <ExerciseItem key={nanoid()} {...item} />
          ))}
        </List>
      ) : (
        <Message>Not found exercises</Message>
      )}
    </DayExercisesArea>
  );
};

export default DayExercises;