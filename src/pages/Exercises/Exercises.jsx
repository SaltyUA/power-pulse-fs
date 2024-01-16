import { useState } from 'react';
import { ExercisesNavigation } from '../../components/ExercisesComponents/ExercisesNavigation/ExercisesNavigation';
import { BodyParts } from '../../components/ExercisesComponents/ExercisesCategories/BodyParts';
import { Muscules } from '../../components/ExercisesComponents/ExercisesCategories/Muscules'; 
import { Equipment } from '../../components/ExercisesComponents/ExercisesCategories/Equipment';
import {
  ExercisesTitle,
  ExercisesWrapper,
  ExercisesBox,
} from './Exercises.styled';


 const ExercisesWrap = () => {

  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName, setExerciseName] = useState('');

    const handleSetExName = name => {
    setExerciseName(name);
  };

    const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

    const capitalizeFirstLeter = string => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <ExercisesWrapper>
      <ExercisesBox>
      
           <ExercisesTitle>Exercises</ExercisesTitle>
           <ExercisesTitle>{capitalizeFirstLeter(exerciseName)}</ExercisesTitle>

           <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </ExercisesBox>
      {activeFilter === 'Body parts' && (
         <BodyParts
           handleFilterClick={handleFilterClick}
           handleSetExName={handleSetExName}
         />
      )}   
       {activeFilter === 'Muscules' && (
         <Muscules
           handleFilterClick={handleFilterClick}
           handleSetExName={handleSetExName}
         />
      )} 
       {activeFilter === 'Equipment' && (
         <Equipment
           handleFilterClick={handleFilterClick}
           handleSetExName={handleSetExName}
         />
      )} 
    </ExercisesWrapper>
  );
};

export default ExercisesWrap;
