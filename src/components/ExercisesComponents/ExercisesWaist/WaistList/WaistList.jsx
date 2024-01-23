import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import {
  WaistItemUl,
  NoExercisesTitle,
  WaistListContainer,
  ImgWaist,
  BackButton,
  SvgBtnBack,
} from './WaistList.styled';
import {
  getCurrentCategorie,
  getCurrentFilter,
  getExercises,
} from '../../../../store/exercises/selectorsExercises';
import { useEffect } from 'react';
import { fetchExercises } from '../../../../store/exercises/operationExercises';
import { setCurrentCategorie } from '../../../../store/exercises/sliceExercises';
import sprite from '../../../../assets/images/sprite.svg';

export const WaistList = () => {
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
      visibleExercises = exercises.filter(
        (el) => el.bodyPart === currentCategorie
      );
      break;
    case 'Muscles':
      visibleExercises = exercises.filter(
        (el) => el.target === currentCategorie
      );
      break;
    case 'Equipment':
      visibleExercises = exercises.filter(
        (el) => el.equipment === currentCategorie
      );
      break;
    default:
      return;
  }

  return (
    <>
      <BackButton onClick={() => dispatch(setCurrentCategorie(null))}>
        <SvgBtnBack>
          <use href={` ${sprite}#icon-arrow-back`}></use>
        </SvgBtnBack>
        Back
      </BackButton>
      <WaistListContainer>
        <WaistItemUl>
          {visibleExercises.length ? (
            visibleExercises
              .slice(0, 50)
              .map((el) => <WaistItem key={el._id} data={el} />)
          ) : (
            <NoExercisesTitle>
              {/* There is not exercises downloaded else, plaese try choose this
              categorie later!!! */}
            </NoExercisesTitle>
          )}
        </WaistItemUl>
        <ImgWaist />
      </WaistListContainer>
    </>
  );
};
