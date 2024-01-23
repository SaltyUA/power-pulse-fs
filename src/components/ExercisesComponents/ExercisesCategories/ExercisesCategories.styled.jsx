import styled from 'styled-components';

export const ExercisesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    margin: 0 auto;
    gap: 32px 16px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: start;
    gap: 32px 16px;
  }
`;
