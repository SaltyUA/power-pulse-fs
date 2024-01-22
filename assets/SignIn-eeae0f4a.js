import{b as m,s as j,c as l,d as o,u,e as h,f as w,j as e,g as v,a as y,h as k,v as C,l as b,L as E}from"./index-974bb34b.js";import{B as p,c as P}from"./Button-04a01a5e.js";import{e as x,c,C as R,S as F,F as I,a as T,A as W,b as M,I as N,R as B}from"./App.styled-5a876e9b.js";import{u as g,c as S,a as d}from"./index.esm-90c346b4.js";import{P as L}from"./PageAnimatedWrapper-1d4da293.js";import{S as q,a as A,b as $}from"./SuccessPopUp.styled-88fe4930.js";import"./emotion-styled.browser.esm-532efc17.js";import"./side-view-people-training-gym-3x-274ccdad.js";const D=m(q)`
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
`,K=()=>{const t=l(o),n=l(a=>a.auth.message),r=u();h.useEffect(()=>{if(!t)return;const a=f=>{f.code==="Escape"&&r(o(!1))};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[t,r]);const i=a=>{a.target===a.currentTarget&&r(o(!1))},s=g({initialValues:{email:""},onSubmit:a=>{r(w(a))},validationSchema:S().shape({email:d().required("Please enter email").matches(x,"Please check is it true email")})});return e.jsx(A,{onClick:i,children:e.jsxs(D,{children:[e.jsx($,{onClick:()=>r(v(!1)),children:e.jsx("use",{href:y+"#icon-close"})}),n?e.jsx(G,{children:e.jsx("p",{children:n})}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"title",children:"Enter your email"}),e.jsx("p",{children:"We will resend it:"}),e.jsxs(V,{onSubmit:s.handleSubmit,children:[e.jsx(c,{value:s.values.email,onChange:s.handleChange,className:s.touched.email?s.errors.email?"error":"success":null,message:s.touched.email?s.errors.email?s.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),e.jsx(p,{className:"button",type:"submit",children:"Send"})]})]})]})})},Z=()=>{const t=l(o),n=u(),[r]=k(),i=r.get("v");h.useEffect(()=>{i&&n(C({verificationToken:i}))},[n,i]);const s=g({initialValues:{email:"",password:""},onSubmit:a=>{n(b(a))},validationSchema:S().shape({email:d().required("Please enter email").matches(x,"Please check is it true email"),password:d().min(6,"Must have at least 6 symbols").required("Please enter password")})});return e.jsxs(R,{children:[e.jsx(L,{direction:"Y"}),e.jsxs(F,{children:[e.jsxs(I,{children:[e.jsx(T,{children:"Sign In"}),e.jsx(W,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(M,{onSubmit:s.handleSubmit,children:[e.jsxs(N,{children:[e.jsx(c,{value:s.values.email,onChange:s.handleChange,className:s.touched.email?s.errors.email?"error":"success":null,message:s.touched.email?s.errors.email?s.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),e.jsx(c,{value:s.values.password,onChange:s.handleChange,className:s.touched.password?s.errors.password?"error":"success":null,message:s.touched.password?s.errors.password?s.errors.password:"Success password":null,placeholder:"Password",name:"password",type:"password"})]}),e.jsx(p,{type:"submit",width:"136px",children:"SignIn"}),e.jsxs(B,{children:["Don’t have an account? ",e.jsx(E,{to:"/signup",children:"Sign Up"})]})]})]}),e.jsx(P,{})]}),t&&e.jsx(K,{})]})};export{Z as default};
