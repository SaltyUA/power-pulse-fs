import{f as i,s as o,Q as t}from"./index-86b8137c.js";const r="/power-pulse-fs/assets/bgFood-46dd5bc9.png",n="/power-pulse-fs/assets/bgFood2x-515a5477.png",e=i(t)`
display: flex;
align-items:center;
gap: 8px;
color: rgba(239, 237, 232, 0.30);
line-height: 1.29;
 transition: all ${o.animation};
 &:hover  {
      color: ${o.orangeColor};
      }
      &:focus  {
      color: ${o.orangeColor};
      }
`,s=i.svg`
width:16px;
height: 16px;
  stroke: ${o.greyTextColor};
         transition: all ${o.animation};
        @media screen and (min-width: 768px) {
    ${e}:hover &, ${e}:focus & {
              stroke: ${o.orangeColor};
         }
    ${e}:hover &, ${e}:focus & {
      transform: translateX(10px);
    }
  }
`,l=i.svg`
position: absolute;
top: 14px;
right: 14px;
width: 22px;
height: 22px;
cursor: pointer;
        stroke: ${o.whiteColor};
       transition: stroke ${o.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    &:hover {
        stroke: ${o.orangeColor};
    }
    &:hover {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,p=i.div`
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

  
`,d=i.div`
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
 transform: scale(1);
   background-image: url(${r});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${n});
    }


    .title{
        color: ${o.whiteColor};
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.33;
    }

    .calories {
        margin-top: 16px;
        margin-bottom: 24px;
        color: ${o.greyTextColor};
font-family: Roboto;
line-height: 1.29;
    }

    .calories-span{
color: ${o.orangeColor};
font-family: Roboto;
line-height: 1.29;
    }

    .button{
        margin-bottom: 16px;
        color: ${o.whiteColor};
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 1.13;
padding: 12px 32px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: ${o.orangeColor};
transition: all ${o.animation};
&:hover, &:focus {
  background: ${o.orange2Color};
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
`;export{d as S,p as a,l as b,e as c,s as d};
