import { useState } from 'react';
import { ExercisesNavigation } from '../../components/ExercisesComponents/ExercisesNavigation/ExercisesNavigation';
import { BodyParts } from '../../components/ExercisesComponents/ExercisesCategories/BodyParts';
import { Muscles } from '../../components/ExercisesComponents/ExercisesCategories/Muscles';
import { Equipment } from '../../components/ExercisesComponents/ExercisesCategories/Equipment';
import {
  ExercisesTitle,
  ExercisesWrapper,
  ExercisesBox,
} from './Exercises.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowModal } from '../../store/exercises/sliceExercises';
import ExerciseForm from '../../components/ExercisesModal/modal';
import { getIsShowModal } from '../../store/exercises/selectorsExercises';
import Button from '../../components/Button/Button';

const ExercisesWrap = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [exerciseName, setExerciseName] = useState('');

  const handleModal = () => dispatch(setIsShowModal(true));

  const isShowModal = useSelector(getIsShowModal);

  const handleSetExName = (name) => {
    setExerciseName(name);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <>
      <ExercisesWrapper>
        <ExercisesBox>
          <Button onClick={handleModal}>Show Modal</Button>
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
        {activeFilter === 'Muscles' && (
          <Muscles
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
      {isShowModal && <ExerciseForm />}
    </>
  );
};

export default ExercisesWrap;
