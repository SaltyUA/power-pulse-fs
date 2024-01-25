import{n as s}from"./emotion-styled.browser.esm-1f2083f2.js";import{f as r,s as o,j as e,a as x,b as m,c as p,u as h,e as u,g,h as f}from"./index-86b8137c.js";import{u as w,c as b,a as j}from"./index.esm-832923e5.js";import{B as S}from"./Button-cab2f836.js";import{S as y,a as C,b as v}from"./SuccessPopUp.styled-3a10e4b4.js";const $=r.input`
  padding: 14px;
  width: 100%;
  color: ${o.whiteColor};

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  background-color: transparent;

  position: relative;

  &:is(:hover) {
    border-color: ${o.orangeColor};
    outline: none;
  }

  &.success {
    border-color: ${o.successColor};
  }

  &.error {
    border-color: ${o.errorColor};
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }
`,k=r.p`
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  bottom: -14px;

  &.error {
    color: ${o.errorColor};
  }

  &.success {
    color: ${o.successColor};
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    bottom: -18px;
  }
`,z=r.div`
  position: relative;
`,E=r.svg`
  fill: currentColor;
  margin-right: 4px;
  width: 10px;
  height: 10px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,R=({placeholder:d,name:l,type:t,onChange:c,value:n,className:i,message:a})=>e.jsxs(z,{children:[e.jsx($,{placeholder:d,name:l,type:t,onChange:c,value:n,required:!0,className:i,$message:a}),a&&e.jsxs(k,{className:i,children:[e.jsx(E,{children:e.jsx("use",{href:x+"#icon-checkbox"})}),a]})]}),F=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,Z=s.h2`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 14px;
  color: ${o.whiteColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.38;
    margin-bottom: 16px;
  }
`,q=s.p`
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    width: 496px;
  }
`,L=s.div``,N=s.form`
  margin-top: 28px;

  & button {
    margin-top: 28px;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
      margin-top: 64px;
    }
  }

  & a {
    color: ${o.whiteColor};
    text-decoration: underline;

    &:hover {
      color: ${o.orangeColor};
    }
  }
`,D=s.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,G=s.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,K=s.div`
  display: flex;
  flex-direction: column;
  gap: 121px;
  padding: 90px 20px 0;

  @media screen and (min-width: 768px) {
    padding: 140px 32px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 151px 96px 0;
    flex-direction: row;
    justify-content: space-between;
  }
`,I=r(y)`
  padding: 25px;
  width: auto;
  height: auto;
  gap: 10px;
  background-image: none;
`,A=r.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,M=r.div`
  padding: 20px 10px;
  & p {
    color: ${o.orange2Color};
  }
`,_=()=>{const d=m(p),l=m(i=>i.auth.message),t=h();u.useEffect(()=>{if(!d)return;const i=a=>{a.code==="Escape"&&t(p(!1))};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[d,t]);const c=i=>{i.target===i.currentTarget&&t(p(!1))},n=w({initialValues:{email:""},onSubmit:i=>{t(g(i))},validationSchema:b().shape({email:j().required("Please enter email").matches(F,"Please check is it true email")})});return e.jsx(C,{onClick:c,children:e.jsxs(I,{children:[e.jsx(v,{onClick:()=>t(f(!1)),children:e.jsx("use",{href:x+"#icon-close"})}),l?e.jsx(M,{children:e.jsx("p",{children:l})}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"title",children:"Enter your email"}),e.jsx("p",{children:"We will resend it:"}),e.jsxs(A,{onSubmit:n.handleSubmit,children:[e.jsx(R,{value:n.values.email,onChange:n.handleChange,className:n.touched.email?n.errors.email?"error":"success":null,message:n.touched.email?n.errors.email?n.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),e.jsx(S,{className:"button",type:"submit",children:"Send"})]})]})]})})};export{q as A,L as F,G as I,_ as R,K as S,Z as a,N as b,R as c,D as d,F as e};
