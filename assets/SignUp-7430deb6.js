import{u as i,r as t,j as s,L as l}from"./index-b2d7f2e2.js";import{B as m,c}from"./Button-33ed83bc.js";import{e as p,C as u,S as d,F as h,a as x,A as g,b as j,I as w,c as a}from"./App.styled-e508d29a.js";import{u as S,c as f,a as r}from"./index.esm-39dad062.js";import{P as v}from"./PageAnimatedWrapper-7f89698b.js";import"./emotion-styled.browser.esm-468ae805.js";import"./side-view-people-training-gym-3x-274ccdad.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const N=()=>{const o=i(),e=S({initialValues:{name:"",email:"",password:""},onSubmit:n=>{o(t(n))},validationSchema:f().shape({name:r().required("Please enter your name"),email:r().required("Please enter email").matches(p,"Please check is it true email")}),password:r().required("Please enter password")});return s.jsxs(u,{children:[s.jsx(v,{direction:"Y"}),s.jsxs(d,{children:[s.jsxs(h,{children:[s.jsx(x,{children:"Sign Up"}),s.jsx(g,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),s.jsxs(j,{onSubmit:e.handleSubmit,children:[s.jsxs(w,{children:[s.jsx(a,{value:e.values.name,onChange:e.handleChange,className:e.touched.name?e.errors.name?"error":"success":null,message:e.touched.name?e.errors.name?e.errors.name:"Success name":null,placeholder:"Name",name:"name",type:"text"}),s.jsx(a,{value:e.values.email,onChange:e.handleChange,className:e.touched.email?e.errors.email?"error":"success":null,message:e.touched.email?e.errors.email?e.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),s.jsx(a,{placeholder:"Password",value:e.values.password,onChange:e.handleChange,className:e.touched.password?e.errors.password?"error":"success":null,message:e.touched.password?e.errors.password?e.errors.password:"Success password":null,name:"password",type:"password"})]}),s.jsx(m,{type:"submit",width:"136px",children:"SignUp"}),s.jsxs("p",{children:["Already have an account? ",s.jsx(l,{to:"/signin",children:"Sign In"})]})]})]}),s.jsx(c,{})]})]})};export{N as default};
