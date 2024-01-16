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
  // List,
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

const DayExercises = () => {
  return (
    <DayExercisesArea>
      <TitleArea>
        <Title>Execrcises</Title>
        <Button>
          <Add>Add product</Add>
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
        <Message>Not found exercises</Message>
      </TableArea>
    </DayExercisesArea>
  );
};

export default DayExercises;