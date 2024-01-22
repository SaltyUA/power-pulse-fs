
import { useDispatch, useSelector } from 'react-redux';
import {
  ExercisesFilter,
  ExercisesNavList,
} from './ExercisesNavigation.styled';
import { getCurrentFilter } from '../../../store/exercises/selectorsExercises';
import { setCurrentCategorie, setCurrentFilter } from '../../../store/exercises/sliceExercises';

export const ExercisesNavigation = () => {
  const currentFilter = useSelector(getCurrentFilter);
  const dispatch = useDispatch()

  const handleClick = ({ target: {innerText} }) => {
    dispatch(setCurrentFilter(innerText))
    dispatch(setCurrentCategorie(null))
  }
  
  return (
    <ExercisesNavList>
      <ExercisesFilter
        className={currentFilter === 'Body parts' ? 'active' : ''}
      >
        <button
          type="button"
          onClick={handleClick}
        >
          Body parts
        </button>
      </ExercisesFilter>
      <ExercisesFilter className={currentFilter === 'Muscles' ? 'active' : ''}>
        <button
          type="button"
          onClick={handleClick}
        >
          Muscles
        </button>
      </ExercisesFilter>
      <ExercisesFilter className={currentFilter === 'Equipment' ? 'active' : ''}>
        <button
          type="button"
          onClick={handleClick}
          
        >
          Equipment
        </button>
      </ExercisesFilter>
    </ExercisesNavList>
  );
};


