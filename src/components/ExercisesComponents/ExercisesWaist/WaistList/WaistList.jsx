import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import {
  WaistItemUl,
  NoExercisesTitle,
  WaistListContainer,
  ImgWaist,
  BackButton,
} from './WaistList.styled';
import { getCurrentCategorie, getCurrentFilter, getExercises } from '../../../../store/exercises/selectorsExercises';
import { useEffect } from 'react';
import { fetchExercises} from '../../../../store/exercises/operationExercises';
import { setCurrentCategorie } from '../../../../store/exercises/sliceExercises';
// import { string } from 'yup';
// import { BodyParts } from '../../ExercisesCategories/BodyParts';
// import { useState } from 'react';

export const WaistList = ({ exerciseName }) => {
  console.log(exerciseName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);
  const currentFilter = useSelector(getCurrentFilter);
  const currentCategorie = useSelector(getCurrentCategorie);

  const exercises = useSelector(getExercises);
  let visibleExercises = [];

  switch (currentFilter) {
    case 'Body parts':
      visibleExercises = exercises.filter(el => el.bodyPart === currentCategorie);
      break;
    case 'Muscles':
      visibleExercises = exercises.filter(el => el.target === currentCategorie);
      break;
    case 'Equipment':
      visibleExercises = exercises.filter(el => el.equipment === currentCategorie);
      break;
    default:
      return;
  }

  // for (const visibleExercise of visibleExercises) {
  //   if (string === 'Body Part'){
  //     visibleExercise.bodyPart === exerciseName;
  //   }else{
  //     visibleExercise.target === exerciseName
  //   }
  //   console.log(exerciseName);

  // }

  // .filter(
  //   exercise =>
  //     exercise.bodyPart ||
  //     exercise.target ||
  //     exercise.equipment === exerciseName,

  // );

 
  return (
    <>
      <BackButton onClick={()=>dispatch(setCurrentCategorie(null))} >
        Back</BackButton>
    <WaistListContainer>
        <WaistItemUl>
          {visibleExercises.length ? (
            visibleExercises
              .slice(0, 50)
              .map(el => (
                <WaistItem
                  key={el._id}
                  data={el}
                />
              ))
          ) : (
            <NoExercisesTitle>
              {/* There is not exercises downloaded else, plaese try choose this
              categorie later!!! */}
            </NoExercisesTitle>
          )}
        </WaistItemUl>
        <ImgWaist/>
      </WaistListContainer>
    </>
  );
};