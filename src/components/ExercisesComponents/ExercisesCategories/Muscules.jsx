import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesUl } from './ExercisesCategories.styled';
import { ExercisesItem } from '../ExercisesCategoriesItem/ExercisesItem';
import { fetchMuscules} from '../../../store/exercises/operationExercises';
import  {getMuscules} from '../../../store/exercises/selectorsExercises';
// import currentItems from '../../../filter.json'

export const Muscules = ({ handleSetExName, handleFilterClick }) => {
  const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchMuscules());
      }, [dispatch]);

    
      const muscules = useSelector(getMuscules);
      console.log(muscules);
    

  return (
      <ExercisesUl>
        {muscules.map(item => (
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
  