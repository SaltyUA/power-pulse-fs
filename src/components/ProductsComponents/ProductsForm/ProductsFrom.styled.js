import styled from '@emotion/styled';
import { styleGuide } from '../../../constants/styleGuide';

export const StyledSearchSvg = styled.svg`
  width: 18px;
  height: 18px;
`;
export const StyledxSvg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${styleGuide.orangeColor};
`;
export const StyledForm = styled.form`
  margin-top: 40px;
  position: relative;
  #search {
    max-width: 335px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${styleGuide.greyTextColor};
    padding: 14px;
    background-color: inherit;
    outline: none;

    color: ${styleGuide.whiteColor};
    font-family: Roboto;
    line-height: 1.29;
    transition: all ${styleGuide.animation};
    &::placeholder {
      color: ${styleGuide.whiteColor};
    }

    &:hover,
    &:focus {
      border-color: ${styleGuide.orangeColor};
    }
    @media screen and (min-width: 768px) {
      width: 236px;
      height:52px;
    }
  }

  .input-search-block {
    position: relative;
  }

  .svgs-search-block {
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    gap: 8px;
  }

  .selects-block {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    @media screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 1439px) {
    .filter-1440 {
      display: none;
    }
  }
  .filter-1440 {
    color: ${styleGuide.greyTextColor};
    font-family: Roboto;
    line-height: 1.29;
    position: absolute;
    right: 0px;
    top: -20px;
  }
`;
