import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExercisesUl } from './ExercisesCategories.styled';
import { ExercisesItem } from '../ExercisesCategoriesItem/ExercisesItem';
import { fetchEquipments} from '../../../store/exercises/operationExercises';
import  {getEquipments} from '../../../store/exercises/selectorsExercises';
// import currentItems from '../../../filter.json'

export const Equipment = ({ handleSetExName, handleFilterClick }) =>{
    const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchEquipments());
      }, [dispatch]);

    
      const equipments = useSelector(getEquipments);
      console.log(equipments);
    

  return (
      <ExercisesUl>
        {equipments.map(item => (
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
  