import{u as i,r as l,j as s,C as t,L as m}from"./index-fe5b48f6.js";import{c as u,a,e as c,F as p,b as d,A as h,d as x,I as g,f as r,B as w}from"./index.esm-5a1c4be5.js";import{u as j}from"./formik.esm-224421da.js";import"./styleGuide-7c616dce.js";import"./sprite-a4f9dfb1.js";import"./emotion-styled.browser.esm-508f7da5.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const b=()=>{const o=i(),e=j({initialValues:{name:"",email:"",password:""},onSubmit:n=>{o(l(n))},validationSchema:u().shape({name:a().required("Please enter your name"),email:a().required("Please enter email").matches(c,"Please check is it true email")}),password:a().required("Please enter password")});return s.jsx(t,{children:s.jsxs(p,{children:[s.jsx(d,{children:"Sign Up"}),s.jsx(h,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),s.jsxs(x,{onSubmit:e.handleSubmit,children:[s.jsxs(g,{children:[s.jsx(r,{value:e.values.name,onChange:e.handleChange,className:e.touched.name?e.errors.name?"error":"success":null,message:e.touched.name?e.errors.name?e.errors.name:"Success name":null,placeholder:"Name",name:"name",type:"text"}),s.jsx(r,{value:e.values.email,onChange:e.handleChange,className:e.touched.email?e.errors.email?"error":"success":null,message:e.touched.email?e.errors.email?e.errors.email:"Success email":null,placeholder:"Email",name:"email",type:"email"}),s.jsx(r,{placeholder:"Password",value:e.values.password,onChange:e.handleChange,className:e.touched.password?e.errors.password?"error":"success":null,message:e.touched.password?e.errors.password?e.errors.password:"Success password":null,name:"password",type:"password"})]}),s.jsx(w,{type:"submit",width:"136px",children:"SignUp"}),s.jsxs("p",{children:["Already have an account? ",s.jsx(m,{to:"/signin",children:"Sign In"})]})]})]})})};export{b as default};
