import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesUl } from './ExercisesCategories.styled';
import { ExercisesItem } from '../ExercisesCategoriesItem/ExercisesItem';
import { fetchMuscles} from '../../../store/exercises/operationExercises';
import  {getMuscles} from '../../../store/exercises/selectorsExercises';
// import currentItems from '../../../filter.json'

export const Muscles = ({ handleSetExName, handleFilterClick }) => {
  const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchMuscles());
      }, [dispatch]);

    
      const muscles = useSelector(getMuscles);
      console.log(muscles);
    

  return (
      <ExercisesUl>
        {muscles.map(item => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ExercisesUl>
      )
    };
  