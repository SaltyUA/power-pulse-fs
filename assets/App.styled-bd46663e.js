import{b as r,s as e,j as n,a as c}from"./index-ec9fdf17.js";import{n as i}from"./emotion-styled.browser.esm-46f93cb9.js";import{b as g,a as m,c as l}from"./side-view-people-training-gym-3x-274ccdad.js";const h=r.input`
  padding: 14px;
  width: 100%;
  color: ${e.whiteColor};

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  background-color: transparent;

  position: relative;

  &:is(:hover) {
    border-color: ${e.orangeColor};
    outline: none;
  }

  &.success {
    border-color: ${e.successColor};
  }

  &.error {
    border-color: ${e.errorColor};
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }
`,b=r.p`
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  bottom: -14px;

  &.error {
    color: ${e.errorColor};
  }

  &.success {
    color: ${e.successColor};
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    bottom: -18px;
  }
`,u=r.div`
  position: relative;
`,w=r.svg`
  fill: currentColor;
  margin-right: 4px;
  width: 10px;
  height: 10px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,C=({placeholder:a,name:d,type:p,onChange:s,value:x,className:t,message:o})=>n.jsxs(u,{children:[n.jsx(h,{placeholder:a,name:d,type:p,onChange:s,value:x,required:!0,className:t,$message:o}),o&&n.jsxs(b,{className:t,children:[n.jsx(w,{children:n.jsx("use",{href:c+"#icon-checkbox"})}),o]})]}),z=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,v=i.h2`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 14px;
  color: ${e.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.38;
    margin-bottom: 16px;
  }
`,I=i.p`
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 496px;
  }
`,j=i.div``,y=i.form`
  margin-top: 28px;

  & button {
    margin-top: 28px;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
      margin-top: 64px;
    }
  }

  & a {
    color: ${e.whiteColor};
    text-decoration: underline;
  }
`,A=i.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,F=i.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: 121px;

  padding: 90px 20px 0;

  background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${g});
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (min-width: 768px) {
    padding: 140px 32px 0;

    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${m});
    background-repeat: no-repeat;
    background-position: right bottom;
  }

  @media screen and (min-width: 1440px) {
    padding: 151px 96px 0;
    flex-direction: row;
    gap: 172px;
    background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${l});
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`,T=r.div`
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
`;export{I as A,T as C,j as F,F as I,A as R,S,v as a,y as b,C as c,z as e};
