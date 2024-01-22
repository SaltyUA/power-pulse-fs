import styled from 'styled-components';

export const WaistListContainer = styled.div`
  display: flex;
`;

export const ImgWaist = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    width: 530px;
    height: 902px;
    z-index: -2;
  }
`;

export const WaistItemUl = styled.ul`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  &::-webkit-scrollbar-thumb {
    background-color: #ef8964;
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    overflow-y: auto;
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
    padding-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    overflow-y: auto;
    max-height: 900px;
    padding-right: 16px;
    width: 850px;
  }
`;

export const NoExercisesTitle = styled.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`;

export const SvgBtnBack = styled.svg`
  width: 13px;
  height: 13px;
  stroke: currentColor;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  top: 10px;
  color: rgba(239, 237, 232, 0.4);

  &:is(:hover, :focus) {
    color: #efede8;
  }

  @media screen and (min-width: 768px) {
    top: 32px;
  }
`;
