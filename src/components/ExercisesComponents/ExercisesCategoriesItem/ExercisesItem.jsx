import {
  ExerciseItemText,
  ExerciseItemTitle,
  ExercisesLi,
  Image,
  TitleContainer,
} from './ExercisesItem.styled';
import images from '../../../assets/images/0-default.jpg';
import { useDispatch } from 'react-redux';
import { setCurrentCategorie } from '../../../store/exercises/sliceExercises';

export const ExercisesItem = ({
  exercisesItem,
  handleSetExName,
}) => {
  const { name, filter, imgURL } = exercisesItem;
const dispatch = useDispatch()

  const onClick = name => {
    handleSetExName(name);
    dispatch(setCurrentCategorie(name))
  };
//  великими літерими назву
  const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
    
  };

  return (
    <ExercisesLi onClick={() => onClick(name)}>
      <Image src={imgURL ? imgURL : images} alt={name} />
      <TitleContainer>
        <ExerciseItemTitle>{capitalizeFirstLeter(name)}</ExerciseItemTitle>
        <ExerciseItemText>{filter}</ExerciseItemText>
      </TitleContainer>
    </ExercisesLi>
  );
};


  
