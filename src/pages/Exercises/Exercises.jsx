import { useEffect } from 'react';
import { ExercisesNavigation } from '../../components/ExercisesComponents/ExercisesNavigation/ExercisesNavigation';
import { BodyParts } from '../../components/ExercisesComponents/ExercisesCategories/BodyParts';
import { Muscles } from '../../components/ExercisesComponents/ExercisesCategories/Muscles';
import { Equipment } from '../../components/ExercisesComponents/ExercisesCategories/Equipment';
import { WaistList } from '../../components/ExercisesComponents/ExercisesWaist/WaistList/WaistList';
import {
  ExercisesTitle,
  ExercisesWrapper,
  ExercisesBox,
} from './Exercises.styled';
import {
  getCurrentCategorie,
  getCurrentFilter,
  getIsShowModal,
} from '../../store/exercises/selectorsExercises';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategorie } from '../../store/exercises/sliceExercises';
import { PageAnimatedWrapper } from '../../components/AnimatedPage/PageAnimatedWrapper';
import ExerciseForm from '../../components/ExercisesModal/modal';

const ExercisesWrap = () => {
  const currentCategorie = useSelector(getCurrentCategorie);
  const currentFilter = useSelector(getCurrentFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentCategorie(null));
  }, [dispatch]);

  const isShowModal = useSelector(getIsShowModal);

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  return (
    <PageAnimatedWrapper direction="X">
      <ExercisesWrapper $isCategorie={currentCategorie}>
        <ExercisesBox>
          {!currentCategorie ? (
            <ExercisesTitle>Exercises</ExercisesTitle>
          ) : (
            <ExercisesTitle>
              {capitalizeFirstLeter(currentCategorie)}
            </ExercisesTitle>
          )}
          <ExercisesNavigation />
        </ExercisesBox>
        {!currentCategorie ? (
          <>
            {currentFilter === 'Body parts' && <BodyParts />}
            {currentFilter === 'Muscles' && <Muscles />}
            {currentFilter === 'Equipment' && <Equipment />}{' '}
          </>
        ) : (
          <WaistList />
        )}
      </ExercisesWrapper>
      {isShowModal && <ExerciseForm />}
    </PageAnimatedWrapper>
  );
};

export default ExercisesWrap;
