import{n as o}from"./emotion-styled.browser.esm-40a6689a.js";import{f as r,s as a,j as e,a as x,b as m,c as p,u as h,e as g,g as u,h as b}from"./index-787910b4.js";import{b as w,a as f,c as k}from"./side-view-people-training-gym-3x-274ccdad.js";import{u as j,c as C,a as S}from"./index.esm-104c7215.js";import{B as y}from"./Button-93167760.js";import{S as v,a as $,b as z}from"./SuccessPopUp.styled-23fbdb49.js";const I=r.input`
  padding: 14px;
  width: 100%;
  color: ${a.whiteColor};

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  background-color: transparent;

  position: relative;

  &:is(:hover) {
    border-color: ${a.orangeColor};
    outline: none;
  }

  &.success {
    border-color: ${a.successColor};
  }

  &.error {
    border-color: ${a.errorColor};
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }
`,E=r.p`
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  bottom: -14px;

  &.error {
    color: ${a.errorColor};
  }

  &.success {
    color: ${a.successColor};
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    bottom: -18px;
  }
`,R=r.div`
  position: relative;
`,F=r.svg`
  fill: currentColor;
  margin-right: 4px;
  width: 10px;
  height: 10px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,M=({placeholder:d,name:c,type:t,onChange:l,value:n,className:i,message:s})=>e.jsxs(R,{children:[e.jsx(I,{placeholder:d,name:c,type:t,onChange:l,value:n,required:!0,className:i,$message:s}),s&&e.jsxs(E,{className:i,children:[e.jsx(F,{children:e.jsx("use",{href:x+"#icon-checkbox"})}),s]})]}),A=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,N=o.h2`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 14px;
  color: ${a.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.38;
    margin-bottom: 16px;
  }
`,G=o.p`
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 496px;
  }
`,K=o.div``,_=o.form`
  margin-top: 28px;

  & button {
    margin-top: 28px;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
      margin-top: 64px;
    }
  }

  & a {
    color: ${a.whiteColor};
    text-decoration: underline;
  }
`,H=o.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,J=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,O=o.div`
  display: flex;
  flex-direction: column;
  gap: 121px;

  padding: 90px 20px 0;

  background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${w});
  background-repeat: no-repeat;
  background-position: right bottom;

  @media screen and (min-width: 768px) {
    padding: 140px 32px 0;

    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${f});
    background-repeat: no-repeat;
    background-position: right bottom;
  }

  @media screen and (min-width: 1440px) {
    padding: 151px 96px 0;
    flex-direction: row;
    gap: 172px;
    background: linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${k});
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`,Q=r.div`
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
`,T=r(v)`
  padding: 25px;
  width: auto;
  height: auto;
  gap: 10px;
  background-image: none;
`,W=r.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,B=r.div`
  padding: 20px 10px;
  & p {
    color: ${a.orange2Color};
  }
`,U=()=>{const d=m(p),c=m(i=>i.auth.message),t=h();g.useEffect(()=>{if(!d)return;const i=s=>{s.code==="Escape"&&t(p(!1))};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[d,t]);const l=i=>{i.target===i.currentTarget&&t(p(!1))},n=j({initialValues:{email:""},onSubmit:i=>{t(u(i))},validationSchema:C().shape({email:S().required("Please enter email").matches(A,"Please check is it true email")})});return e.jsx($,{onClick:l,children:e.jsxs(T,{children:[e.jsx(z,{onClick:()=>t(b(!1)),children:e.jsx("use",{href:x+"#icon-close"})}),c?e.jsx(B,{children:e.jsx("p",{children:c})}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"title",children:"Enter your email"}),e.jsx("p",{children:"We will resend it:"}),e.jsxs(W,{onSubmit:n.handleSubmit,children:[e.jsx(M,{value:n.values.email,onChange:n.handleChange,className:n.touched.email?n.errors.email?"error":"success":null,message:n.touched.email?n.errors.email?n.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),e.jsx(y,{className:"button",type:"submit",children:"Send"})]})]})]})})};export{G as A,Q as C,K as F,J as I,U as R,O as S,N as a,_ as b,M as c,H as d,A as e};
