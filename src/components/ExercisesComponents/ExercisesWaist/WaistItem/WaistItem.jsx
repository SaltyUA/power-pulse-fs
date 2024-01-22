import {
  BtnLabel,
  BtnWrapper,
  CardLabel,
  ExercisesTitleBox,
  List,
  ListItem,
  ListItemValue,
  SpanExerciseRun,
  SvgExercise,
  SvgExerciseRun,
  Title,
  WaistItemLi,
} from './WaistItem.styled';
import sprite from '../../../../assets/images/sprite.svg';
import { useDispatch } from 'react-redux';
import {
  setIsShowModal,
  setCurrentExercise,
} from '../../../../store/exercises/sliceExercises';

const texts = {
  cardLabel: 'Workout',
  btnLabel: 'Start',
  list: {
    burnedCalories: 'Burned calories:',
    bodyPart: 'Body parts:',
    target: 'Target:',
  },
};

const capitalizeFirstLeter = (string) => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

export const WaistItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(setIsShowModal(true));
    dispatch(setCurrentExercise(data));
  };

  return (
    <WaistItemLi>
      <BtnWrapper>
        <CardLabel>{texts.cardLabel}</CardLabel>
        <BtnLabel type="button" onClick={handleModal}>
          {texts.btnLabel}
          <SvgExercise>
            <use href={`${sprite}#icon-arrow-start`}></use>
          </SvgExercise>
        </BtnLabel>
      </BtnWrapper>
      <ExercisesTitleBox>
        <SpanExerciseRun>
          <SvgExerciseRun width={24} height={24}>
            <use href={`${sprite}#icon-running`}></use>
          </SvgExerciseRun>
        </SpanExerciseRun>
        <Title>{capitalizeFirstLeter(data.name)} </Title>
      </ExercisesTitleBox>
      <List>
        {Object.keys(texts.list).map((e) => (
          <ListItem key={e}>
            {texts.list[e]}
            <ListItemValue>
              {capitalizeFirstLeter(String(data[e]))}
            </ListItemValue>
          </ListItem>
        ))}
      </List>
    </WaistItemLi>
  );
};
