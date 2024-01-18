import{b as o,s as i,j as n,a as c}from"./index-b8328b10.js";import{n as e}from"./emotion-styled.browser.esm-6bf9ed3b.js";const m=o.input`
  padding: 14px;
  width: 100%;
  color: ${i.whiteColor};

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  background-color: transparent;

  position: relative;

  &:is(:hover) {
    border-color: ${i.orangeColor};
    outline: none;
  }

  &.success {
    border-color: ${i.successColor};
  }

  &.error {
    border-color: ${i.errorColor};
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }
`,h=o.p`
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  bottom: -14px;

  &.error {
    color: ${i.errorColor};
  }

  &.success {
    color: ${i.successColor};
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    bottom: -18px;
  }
`,l=o.div`
  position: relative;
`,g=o.svg`
  fill: currentColor;
  margin-right: 4px;
  width: 10px;
  height: 10px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,b=({placeholder:a,name:d,type:p,onChange:s,value:x,className:r,message:t})=>n.jsxs(l,{children:[n.jsx(m,{placeholder:a,name:d,type:p,onChange:s,value:x,required:!0,className:r,$message:t}),t&&n.jsxs(h,{className:r,children:[n.jsx(g,{children:n.jsx("use",{href:c+"#icon-checkbox"})}),t]})]}),f=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,C=e.h2`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 14px;
  color: ${i.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.38;
    margin-bottom: 16px;
  }
`,$=e.p`
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 496px;
  }
`,z=e.div`
  padding-top: 90px 20px 0;

  @media screen and (min-width: 768px) {
    padding-top: 140px 32px 0;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 151px 96px 0;
  }
`,v=e.form`
  margin-top: 28px;

  & button {
    margin-top: 28px;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
      margin-top: 64px;
    }
  }

  & a {
    color: ${i.whiteColor};
    text-decoration: underline;
  }
`,I=e.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,j=e.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,k=e.div`
  display: flex;
  flex-direction: column;
  gap: 121px;

  background: ${i.backgroundImage};
  background-repeat: no-repeat;
  background-position: right bottom;
`,y=o.div`
  min-width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;export{$ as A,y as C,z as F,j as I,I as R,k as S,C as a,v as b,b as c,f as e};
