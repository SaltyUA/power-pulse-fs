import {
  ExerciseItemText,
  ExerciseItemTitle,
  ExercisesLi,
  Image,
  TitleContainer,
} from './ExercisesItem.styled';
import images from '../../../assets/images/0-default.jpg';

export const ExercisesItem = ({
  exercisesItem,
  handleFilterClick,
  handleSetExName,
}) => {
  const { name, filter, imgURL } = exercisesItem;
  const onClick = name => {
    handleFilterClick('Waist');
    handleSetExName(name);
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


  
