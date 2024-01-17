import styled, { keyframes } from 'styled-components';
import { styleGuide } from '../../../../constants/styleGuide';
import { ReactComponent as ArrowSvg } from '../../img/arrow.svg';
import { ReactComponent as RunManSvg } from '../../img/runningman.svg';

export const StyledAddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledBtnSpan = styled.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${styleGuide.animation};
  @media screen and (min-width: 768px) {
    ${StyledAddBtn}:hover & {
      color: ${styleGuide.successColor};
      transform: scale(1.25);
    }
  }
`;

const moveRight = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`;
export const StyledArrowSvg = styled(ArrowSvg)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    ${StyledAddBtn}:hover & {
      animation: ${moveRight} 1000ms linear infinite;
      > path {
        stroke: ${styleGuide.successColor};
      }
    }
  }
`;
// export const StyledArrowSvg23 = styled.svg`
// width: 16px;
//   height: 16px;
//   @media screen and (min-width: 768px) {
//     ${StyledAddBtn}:hover & {
//       animation: ${moveRight} 1000ms linear infinite;
//       > path {
//         stroke: ${styleGuide.successColor};
//     }
//          }
//   }
// `
export const StyledRunManSvg = styled(RunManSvg)`
  width: 24px;
  height: 24px;
`;

export const StyledLiItem = styled.li`
  width: 100%;
  max-width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  position: relative;

  .diet-span {
    position: absolute;
    top: 16px;
    left: 16px;

    color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    background: rgba(239, 237, 232, 0.05);
    padding: 5px 7.5px;
    text-transform: uppercase;
  }

  .recommended-addbtn-div {
    position: absolute;
    align-items: center;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 16px;
  }

  .product-info-div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  .title-svg-div {
    display: flex;
    gap: 16px;
  }

  .product-info-div-title {
    @media screen and (max-width: 375px) {
      width: 208px;
    }
    overflow: hidden;
    white-space: nowrap;
    width: 258px;
    color: ${styleGuide.whiteColor};
    font-feature-settings:
      'clig' off,
      'liga' off;
    text-overflow: ellipsis;
    font-family: Roboto;
    font-size: 20px;
    line-height: 1.2;
    @media screen and (min-width: 1440px) {
      width: 333px;
    }
  }

  .detailed-info-div {
    display: flex;
    gap: 16px;
  }

  .detailed-name {
    color: rgba(239, 237, 232, 0.4);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    line-height: 1.5;
  }

  .detailed-data {
    color: ${styleGuide.whiteColor};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    max-width: 405px;
    width: calc((100% - 16px) / 2);
  }
`;

export const StyledRecommendedSpan = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${styleGuide.whiteColor};
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.5;

  &:before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${(props) => (props.$color ? '#419B09' : '#E9101D')};
    display: inline-block;
  }
`;
