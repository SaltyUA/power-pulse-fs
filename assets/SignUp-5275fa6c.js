import{u as i,r as t,j as s,L as l}from"./index-120d2f3d.js";import{B as m,c}from"./Button-d8db8375.js";import{e as u,C as p,S as d,F as h,a as x,A as g,b as j,I as w,c as a}from"./App.styled-8ee2b8be.js";import{u as S}from"./formik.esm-1dac4ba3.js";import{c as f,a as r}from"./index.esm-4b0efc81.js";import{P as v}from"./PageAnimatedWrapper-c0c695e1.js";import"./emotion-styled.browser.esm-c5904ded.js";import"./side-view-people-training-gym-3x-274ccdad.js";const N=()=>{const o=i(),e=S({initialValues:{name:"",email:"",password:""},onSubmit:n=>{o(t(n))},validationSchema:f().shape({name:r().required("Please enter your name"),email:r().required("Please enter email").matches(u,"Please check is it true email"),password:r().required("Please enter password").min(6,"Must have at least 6 symbols")})});return s.jsxs(p,{children:[s.jsx(v,{direction:"Y"}),s.jsxs(d,{children:[s.jsxs(h,{children:[s.jsx(x,{children:"Sign Up"}),s.jsx(g,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),s.jsxs(j,{onSubmit:e.handleSubmit,children:[s.jsxs(w,{children:[s.jsx(a,{value:e.values.name,onChange:e.handleChange,className:e.touched.name?e.errors.name?"error":"success":null,message:e.touched.name?e.errors.name?e.errors.name:"Success name":null,placeholder:"Name",name:"name",type:"text"}),s.jsx(a,{value:e.values.email,onChange:e.handleChange,className:e.touched.email?e.errors.email?"error":"success":null,message:e.touched.email?e.errors.email?e.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),s.jsx(a,{placeholder:"Password",value:e.values.password,onChange:e.handleChange,className:e.touched.password?e.errors.password?"error":"success":null,message:e.touched.password?e.errors.password?e.errors.password:"Success password":null,name:"password",type:"password"})]}),s.jsx(m,{type:"submit",width:"136px",children:"SignUp"}),s.jsxs("p",{children:["Already have an account? ",s.jsx(l,{to:"/signin",children:"Sign In"})]})]})]}),s.jsx(c,{})]})]})};export{N as default};
