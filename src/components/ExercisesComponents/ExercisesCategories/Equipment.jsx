import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesUl } from './ExercisesCategories.styled';
import { ExercisesItem } from '../ExercisesCategoriesItem/ExercisesItem';
import { fetchEquipment} from '../../../store/exercises/operationExercises';
import  {getEquipment} from '../../../store/exercises/selectorsExercises';
// import currentItems from '../../../filter.json'

export const Equipment = ({ handleSetExName, handleFilterClick }) =>{
    const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchEquipment());
      }, [dispatch]);

    
      const equipment = useSelector(getEquipment);
      console.log(equipment);
    

  return (
      <ExercisesUl>
        {equipment.map(item => (
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
  