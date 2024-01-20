import{b as m,s as j,c as l,d as o,u,e as h,f as w,j as e,g as v,a as y,h as k,v as C,l as b,L as E}from"./index-9afd0cea.js";import{B as p}from"./Button-99d29119.js";import{e as x,c,C as P,S as R,F as I,a as F,A as T,b as W,I as M,R as N}from"./App.styled-5df65d12.js";import{u as g,c as f,a as d}from"./index.esm-a5c167fc.js";import{c as B}from"./statistics-f7c22023.js";import{P as L}from"./PageAnimatedWrapper-ca2362c4.js";import{S as q,a as A,b as $}from"./SuccessPopUp.styled-d32e25c2.js";import"./emotion-styled.browser.esm-41e2c334.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./side-view-people-training-gym-3x-98657c57.js";const D=m(q)`
  padding: 25px;
  width: auto;
  height: auto;
  gap: 10px;
  background-image: none;
`,V=m.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,G=m.div`
  padding: 20px 10px;
  & p {
    color: ${j.orange2Color};
  }
`,K=()=>{const t=l(o),n=l(a=>a.auth.message),r=u();h.useEffect(()=>{if(!t)return;const a=S=>{S.code==="Escape"&&r(o(!1))};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[t,r]);const i=a=>{a.target===a.currentTarget&&r(o(!1))},s=g({initialValues:{email:""},onSubmit:a=>{r(w(a))},validationSchema:f().shape({email:d().required("Please enter email").matches(x,"Please check is it true email")})});return e.jsx(A,{onClick:i,children:e.jsxs(D,{children:[e.jsx($,{onClick:()=>r(v(!1)),children:e.jsx("use",{href:y+"#icon-close"})}),n?e.jsx(G,{children:e.jsx("p",{children:n})}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"title",children:"Enter your email"}),e.jsx("p",{children:"We will resend it:"}),e.jsxs(V,{onSubmit:s.handleSubmit,children:[e.jsx(c,{value:s.values.email,onChange:s.handleChange,className:s.touched.email?s.errors.email?"error":"success":null,message:s.touched.email?s.errors.email?s.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),e.jsx(p,{className:"button",type:"submit",children:"Send"})]})]})]})})},ee=()=>{const t=l(o),n=u(),[r]=k(),i=r.get("v");h.useEffect(()=>{i&&n(C({verificationToken:i}))},[n,i]);const s=g({initialValues:{email:"",password:""},onSubmit:a=>{n(b(a))},validationSchema:f().shape({email:d().required("Please enter email").matches(x,"Please check is it true email")}),password:d().min(6,"Must have at least 6 symbols").required("Please enter password")});return e.jsxs(P,{children:[e.jsx(L,{direction:"Y"}),e.jsxs(R,{children:[e.jsxs(I,{children:[e.jsx(F,{children:"Sign In"}),e.jsx(T,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(W,{onSubmit:s.handleSubmit,children:[e.jsxs(M,{children:[e.jsx(c,{value:s.values.email,onChange:s.handleChange,className:s.touched.email?s.errors.email?"error":"success":null,message:s.touched.email?s.errors.email?s.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),e.jsx(c,{value:s.values.password,onChange:s.handleChange,className:s.touched.password?s.errors.password?"error":"success":null,message:s.touched.password?s.errors.password?s.errors.password:"Success password":null,placeholder:"Password",name:"password",type:"password"})]}),e.jsx(p,{type:"submit",width:"136px",children:"SignIn"}),e.jsxs(N,{children:["Don’t have an account? ",e.jsx(E,{to:"/signup",children:"Sign Up"})]})]})]}),e.jsx(B,{})]}),t&&e.jsx(K,{})]})};export{ee as default};
