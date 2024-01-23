import{b as n,s as i,j as e,a as m,c as p,d,u as h,f as u,g as x,h as g}from"./index-49be5777.js";import{u as f,c as w,a as j}from"./index.esm-ead1f695.js";import{B as b}from"./Button-6582cad8.js";import{S,a as y,b as C}from"./SuccessPopUp.styled-86e67509.js";const k=n.input`
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
`,v=n.p`
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
`,$=n.div`
  position: relative;
`,E=n.svg`
  fill: currentColor;
  margin-right: 4px;
  width: 10px;
  height: 10px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,R=({placeholder:a,name:l,type:o,onChange:c,value:r,className:s,message:t})=>e.jsxs($,{children:[e.jsx(k,{placeholder:a,name:l,type:o,onChange:c,value:r,required:!0,className:s,$message:t}),t&&e.jsxs(v,{className:s,children:[e.jsx(E,{children:e.jsx("use",{href:m+"#icon-checkbox"})}),t]})]}),z=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,F=n(S)`
  padding: 25px;
  width: auto;
  height: auto;
  gap: 10px;
  background-image: none;
`,I=n.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,M=n.div`
  padding: 20px 10px;
  & p {
    color: ${i.orange2Color};
  }
`,Z=()=>{const a=p(d),l=p(s=>s.auth.message),o=h();u.useEffect(()=>{if(!a)return;const s=t=>{t.code==="Escape"&&o(d(!1))};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[a,o]);const c=s=>{s.target===s.currentTarget&&o(d(!1))},r=f({initialValues:{email:""},onSubmit:s=>{o(x(s))},validationSchema:w().shape({email:j().required("Please enter email").matches(z,"Please check is it true email")})});return e.jsx(y,{onClick:c,children:e.jsxs(F,{children:[e.jsx(C,{onClick:()=>o(g(!1)),children:e.jsx("use",{href:m+"#icon-close"})}),l?e.jsx(M,{children:e.jsx("p",{children:l})}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"title",children:"Enter your email"}),e.jsx("p",{children:"We will resend it:"}),e.jsxs(I,{onSubmit:r.handleSubmit,children:[e.jsx(R,{value:r.values.email,onChange:r.handleChange,className:r.touched.email?r.errors.email?"error":"success":null,message:r.touched.email?r.errors.email?r.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),e.jsx(b,{className:"button",type:"submit",children:"Send"})]})]})]})})};export{R as F,Z as R,z as e};
