import styled from "styled-components";
import { ReactComponent as CloseSvg } from '../img/xSvg.svg';
import { ReactComponent as ArrowSvg } from '../img/arrow.svg';
import bgPhoto from '../img/bgFood.png'
import bgPhoto2x from '../img/bgFood2x.png'
import { styleGuide } from '../../../constants/styleGuide'
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
display: flex;
align-items:center;
gap: 8px;
color: rgba(239, 237, 232, 0.30);
line-height: 1.29;
 transition: all ${styleGuide.animation};
 &:hover  {
      color: ${styleGuide.orangeColor};
      }
      &:focus  {
      color: ${styleGuide.orangeColor};
      }
`

export const StyledArrowSvg = styled(ArrowSvg)`
width:16px;
height: 16px;
> path {
        stroke: ${styleGuide.greyTextColor};
      }
      transition: all ${styleGuide.animation};
        @media screen and (min-width: 768px) {
    ${StyledNavLink}:hover &, ${StyledNavLink}:focus & {
      > path {
        stroke: ${styleGuide.orangeColor};
      }
    }
    ${StyledNavLink}:hover &, ${StyledNavLink}:focus & {
      transform: translateX(10px);
    }
  }
`

export const StyledCloseSvg = styled(CloseSvg)`
position: absolute;
top: 14px;
right: 14px;
width: 22px;
height: 22px;
cursor: pointer;
 > path {
        stroke: ${styleGuide.whiteColor};
      }
      transition: stroke ${styleGuide.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    &:hover {
      > path {
        stroke: ${styleGuide.orangeColor};
      }
    }
    &:hover {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`

export const StyledBackdrop = styled.div`
  overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;

   opacity: 1;
  visibility: visible;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.hide-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
      }

  &.hide-hidden .modal {
    transform: scale(0.5);
  }

  
`

export const StyledModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 148px;
  position: relative;
 width: 335px;
height: 362px;
  border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background-color: #10100F;
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
 transform:  scale(1);
   background-image: url(${bgPhoto});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${bgPhoto2x});
    }


    .title{
        color: ${styleGuide.whiteColor};
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.33;
    }

    .calories {
        margin-top: 16px;
        margin-bottom: 24px;
        color: ${styleGuide.greyTextColor};
font-family: Roboto;
line-height: 1.29;
    }

    .calories-span{
color: ${styleGuide.orangeColor};
font-family: Roboto;
line-height: 1.29;
    }

    .button{
        margin-bottom: 16px;
        color: ${styleGuide.whiteColor};
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 1.13;
padding: 12px 32px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: ${styleGuide.orangeColor};
transition: all ${styleGuide.animation};
&:hover, &:focus {
  background: ${styleGuide.orange2Color};
}
    }

  @media screen and (min-width: 768px) {
width: 430px;
height: 428px;
padding-top: 180px;
background-position: top 64px right 154px;
.calories {
               margin-bottom: 32px;
  }
`