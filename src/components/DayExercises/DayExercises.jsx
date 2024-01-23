import {
  DayExercisesArea,
  TitleArea,
  Title,
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
import { AddButton } from '../AddButton/AddButton';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { nanoid } from 'nanoid';
//------------------------------
import ExerciseItem from './ExerciseItem/ExerciseItem';
// import { fetchExercises } from '../../store/diary/operationDiary';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Loader from '../Loader';
// import { selectError, selectIsLoading } from '../../store/diary/selectorsDiary';
// // import Loader from 'components/Loader';
// import { Notify } from 'notiflix';
// import { Link, useLocation } from 'react-router-dom';
// //------------------------------------------------


const DayExercises = ({ consumedExercises }) => {
  // const dispatch = useDispatch();

  //  useEffect(() => {
  //    dispatch(fetchExercises());
  //  }, [dispatch]);
  
 
  //-----------------------
  //  const isLoading = useSelector(selectIsLoading);
  //  const error = useSelector(selectError);
  // const location = useLocation();
  //----------------------------
   const navigate = useNavigate();
   const handleClick = () => {
     
     navigate('/exercises');
   };
    
  return (
    <DayExercisesArea
      dimentionArea={
      consumedExercises && consumedExercises.length > 0 ? 'true' : 'false'
    }>
      <TitleArea>
        <Title>Execrcises</Title>
        <AddButton onClick={() => handleClick()}>Add</AddButton>
      </TitleArea>
      <TableArea>
        {consumedExercises && consumedExercises.length > 0 ? (
          <>
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
            <List
            dimentionList={
            consumedExercises && consumedExercises.length > 0 ? 'true' : 'false'
            }
            >
              {consumedExercises.map((item) => (
                <ExerciseItem key={nanoid()} {...item} />
              ))}
            </List>
          </>
        ) : (
          <Message>Not found exercises</Message>
        )}
      </TableArea>
    </DayExercisesArea>
  );
};

export default DayExercises;