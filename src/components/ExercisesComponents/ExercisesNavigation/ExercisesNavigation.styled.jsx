import styled from 'styled-components';

export const ExercisesNavList = styled.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`;

export const ExercisesFilter = styled.li`

  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  position: relative;
  
  &:hover {
    color: #efede8;
  }

  &.active::after {
     content: '';
     position: absolute;
     left: 0;
     bottom: -8px;
     width: 100%;
     height: 4px;
     border-radius: 2px;
     background-color: #EF8964;
   }

   &.active {
     color: #efede8;

     & button {
      
    color: #efede8;
     }
   }

   & button {
    color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;}
   
`

export const FilterBtn = styled.button`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;

  &.active {
    color: #efede8;
  }
`;