import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import {
  WaistItemUl,
  NoExercisesTitle,
  WaistListContainer,
  ImgWaist,
} from './WaistList.styled';
import { getExercises } from '../../../../store/exercises/selectorsExercises';
import { useEffect } from 'react';
import { fetchExercises} from '../../../../store/exercises/operationExercises';
import images from '../../../../assets/images/side-view-people-training-gym 1.png';
// import { string } from 'yup';
// import { BodyParts } from '../../ExercisesCategories/BodyParts';
// import { useState } from 'react';

export const WaistList = ({ exerciseName }) => {
  console.log(exerciseName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const exercises = useSelector(getExercises);
  
  const visibleExercises = exercises;

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
        <ImgWaist src={images} alt="image" />
      </WaistListContainer>
    </>
  );
};