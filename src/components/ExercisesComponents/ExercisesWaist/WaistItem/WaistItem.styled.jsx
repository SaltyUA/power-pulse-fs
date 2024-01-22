import styled from 'styled-components';

export const WaistItemLi = styled.li`
  width: 100%;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 370px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const CardLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #fff;

  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  text-transform: uppercase;
`;

export const BtnLabel = styled.button`
  background: transparent;
  border: none;
  color: #E6533C;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #EFEDE8;
  }
  &:focus {
    color: #EFEDE8;
  }
`;

export const SvgExercise = styled.svg`
  width: 13px;
  height: 13px;


  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
export const ExercisesTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const Title = styled.h3`
  position: relative;
  font-size: 24px;
  line-height: 1.333;
  color: #EFEDE8;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  width: 263px;

  @media screen and (min-width: 768px) {
    width: 285px;
  }
`;

export const SvgExerciseRun = styled.svg`
  width: 16px;
  height: 16px;
  fill: #EFEDE8;
`;
export const SpanExerciseRun = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFA082;

  border-radius: 50%;

  width: 24px;
  height: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`;

export const ListItemValue = styled.span`
  color: #EFEDE8;
`;