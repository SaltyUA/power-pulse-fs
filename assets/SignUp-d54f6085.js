import{b as t,u as m,c as l,d,r as c,j as s,L as p}from"./index-49be5777.js";import{B as u}from"./Button-6582cad8.js";import{e as h,F as a,R as x}from"./ResendModal-8c599398.js";import{d as w,F as g,e as j,A as S,f,I as v,c as y}from"./SignIn.styled-abf37720.js";import{u as C,c as P,a as r}from"./index.esm-ead1f695.js";import{P as F}from"./PageAnimatedWrapper-13c7edb1.js";import"./SuccessPopUp.styled-86e67509.js";import"./emotion-styled.browser.esm-82fa0e0e.js";import"./side-view-people-training-gym-3x-274ccdad.js";const b=t.div`
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
`,B=()=>{const n=m(),i=l(d),e=C({initialValues:{name:"",email:"",password:""},onSubmit:o=>{n(c(o))},validationSchema:P().shape({name:r().required("Please enter your name"),email:r().required("Please enter email").matches(h,"Please check is it true email"),password:r().required("Please enter password").min(6,"Must have at least 6 symbols")})});return s.jsxs(b,{children:[s.jsx(F,{direction:"Y"}),s.jsxs(w,{children:[s.jsxs(g,{children:[s.jsx(j,{children:"Sign Up"}),s.jsx(S,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),s.jsxs(f,{onSubmit:e.handleSubmit,children:[s.jsxs(v,{children:[s.jsx(a,{value:e.values.name,onChange:e.handleChange,className:e.touched.name?e.errors.name?"error":"success":null,message:e.touched.name?e.errors.name?e.errors.name:"Success name":null,placeholder:"Name",name:"name",type:"text"}),s.jsx(a,{value:e.values.email,onChange:e.handleChange,className:e.touched.email?e.errors.email?"error":"success":null,message:e.touched.email?e.errors.email?e.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),s.jsx(a,{placeholder:"Password",value:e.values.password,onChange:e.handleChange,className:e.touched.password?e.errors.password?"error":"success":null,message:e.touched.password?e.errors.password?e.errors.password:"Success password":null,name:"password",type:"password"})]}),s.jsx(u,{type:"submit",width:"136px",children:"SignUp"}),s.jsxs("p",{children:["Already have an account? ",s.jsx(p,{to:"/signin",children:"Sign In"})]})]})]}),s.jsx(y,{})]}),i&&s.jsx(x,{})]})};export{B as default};
