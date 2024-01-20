import{s as r,u as j,c as b,j as e,d as v,b as o,e as f,f as w,g as C}from"./index-bb40bc92.js";import{n as k}from"./emotion-styled.browser.esm-3bf5ab84.js";import{F as W,c as $,a as u,b as d,d as q,e as A}from"./index.esm-a5d03b62.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const S=k.h1`
  color: ${r.whiteColor};
`,F=()=>{const h=j(),s=b.useRef(null),m=()=>{console.log()},p=t=>{console.log(t)},i=()=>h(v());return e.jsxs("div",{className:"containerSection",children:[e.jsx("div",{className:"containerAvatar",children:e.jsx("svg",{children:e.jsx("use",{href:""})})}),e.jsxs("form",{children:[e.jsx("input",{type:"file",name:"avatarURL",accept:"image/*",ref:s,onChange:p}),e.jsx("div",{className:"icon-upload",onClick:m,children:e.jsx("svg",{children:e.jsx("use",{href:""})})})]}),e.jsx("p",{children:"Name"}),e.jsx("p",{children:"User"}),e.jsxs("div",{className:"containerStatistic",children:[e.jsxs("div",{className:"daily_calorie",children:[e.jsx("svg",{children:e.jsx("use",{})}),e.jsx("p",{children:"Daily calorie intake"}),e.jsx("p",{children:"100"})]}),e.jsxs("div",{className:"daily_physical",children:[e.jsx("svg",{children:e.jsx("use",{})}),e.jsx("p",{children:"Daily physical activity"}),e.jsx("p",{children:"110 min"})]})]}),e.jsxs("div",{className:"text_under_statistic",children:[e.jsx("svg",{children:e.jsx("use",{})}),e.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),e.jsxs("button",{onClick:i,style:{color:"white"},children:[e.jsx("p",{children:"Log out"}),e.jsx("svg",{children:e.jsx("use",{})})]})]})},R=o(W)`
  width: 100%;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`,N=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 14px;
`,D=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 20px;
`,g=o.div`
  display: flex;
  gap: 14px;
`,L=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 40px;
`,y=o.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${r.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
`,x=o.label`
  display: flex;
  flex-direction: column;
  width: 160px;

  color: ${r.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  gap: 4px;
`,a=o.input`
  padding: 14px;

  width: 100%;

  color: ${r.whiteColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${r.greyTextColor};
  background: transparent;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${r.orangeColor};
    background-color: transparent;
    outline: none;
  }

  @media (min-width: 834px) {
  }
`,T=o.p`
  color: ${r.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  margin-bottom: 5px;
`,l=o.label`
  display: flex;
  align-items: center;

  gap: 8px;

  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;

  color: ${r.whiteColor};

  cursor: pointer;
`,c=o.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 100%;

  font-size: 14px;
  line-height: 1.29;

  color: ${r.whiteColor};

  cursor: pointer;

  @media (min-width: 375px) {
    width: 326px;
  }
`,n=o.input`
  appearance: none;

  min-width: 18px;
  min-height: 18px;

  font: inherit;
  color: ${r.orangeColor};
  background-color: transparent;

  border: 0.11em solid ${r.greyTextColor};
  border-radius: 50%;

  cursor: pointer;

  &:checked {
    border: 0.11em solid ${r.orange2Color};
    background: radial-gradient(
      circle,
      ${r.orange2Color} 40%,
      transparent 50%
    );
  }

  @media (min-width: 834px) {
    margin-top: 0;
  }
`,B=o.button`
  margin-bottom: 44px;
  padding: 12px 40px;

  font-weight: 500;
  line-height: 1.43;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;

  border: 1px solid ${r.orangeColor};
  border-radius: 12px;

  background-color: ${r.orangeColor};
  color: ${r.whiteColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
  }

  @media (min-width: 834px) {
  }
`,z=$().shape({name:u().min(2,"Too Short!").max(50,"Too Long!").required("Name is required"),height:d().positive("Height must be a positive number").min(150,"Must be a number from 150 to 300").max(300,"Must be a number from 150 to 300").required("Height is required"),currentWeight:d().positive("Weight must be a positive number").min(35,"Weight must be a number from 35 to 500").max(500,"Weight must be a number from 35 to 500").required("Current weight is required"),desiredWeight:d().positive("Weight must be a positive number").min(35,"Weight must be a number from 35 to 500").max(500,"Weight must be a number from 35 to 500").required("Desired weight is required"),birthday:q().min(new Date(new Date().setFullYear(new Date().getFullYear()-18)),"You must be at least 18 years old").required("Birthday is required"),blood:d().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:u().oneOf(["male","female"],"Invalid gender").required("Gender is required"),levelActivity:d().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),I=()=>{const h=j(),s=f(w),m={name:s.name??"",height:s.height??150,currentWeight:s.currentWeight??35,desiredWeight:s.desiredWeight??35,birthday:s.birthday??"1990-01-01",blood:s.blood??"1",sex:s.sex??"male",levelActivity:s.levelActivity??"1"},p=i=>{h(C(i))};return e.jsx(A,{initialValues:m,validationSchema:z,onSubmit:p,children:({handleChange:i,values:t})=>e.jsxs(R,{children:[e.jsxs(N,{children:[e.jsxs(y,{children:["Name",e.jsx(a,{type:"text",id:"name",name:"name",value:t.name,onChange:i})]}),e.jsxs(y,{children:["Email",e.jsx(a,{type:"text",id:"email",name:"email",defaultValue:s.email,readOnly:!0,disabled:!0})]})]}),e.jsxs(D,{children:[e.jsxs(g,{children:[e.jsxs(x,{children:["Height",e.jsx(a,{type:"number",id:"height",name:"height",value:t.height,onChange:i})]}),e.jsxs(x,{children:["Current Weight",e.jsx(a,{type:"number",id:"currentWeight",name:"currentWeight",value:t.currentWeight,onChange:i})]})]}),e.jsxs(g,{children:[e.jsxs(x,{children:["Desired Weight",e.jsx(a,{type:"number",id:"desiredWeight",name:"desiredWeight",value:t.desiredWeight,onChange:i})]}),e.jsxs(x,{children:["Date of birth",e.jsx(a,{type:"date",id:"birthday",name:"birthday",value:t.birthday,onChange:i})]})]})]}),e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsx(T,{children:"Blood"}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(l,{children:[e.jsx(n,{type:"radio",name:"blood",value:"1",checked:t.blood==="1",onChange:i}),"1"]}),e.jsxs(l,{children:[e.jsx(n,{type:"radio",name:"blood",value:"2",checked:t.blood==="2",onChange:i}),"2"]}),e.jsxs(l,{children:[e.jsx(n,{type:"radio",name:"blood",value:"3",checked:t.blood==="3",onChange:i}),"3"]}),e.jsxs(l,{children:[e.jsx(n,{type:"radio",name:"blood",value:"4",checked:t.blood==="4",onChange:i}),"4"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(l,{children:[e.jsx(n,{type:"radio",name:"sex",value:"male",checked:t.sex==="male",onChange:i}),"Male"]}),e.jsxs(l,{children:[e.jsx(n,{type:"radio",name:"sex",value:"female",checked:t.sex==="female",onChange:i}),"Female"]})]})]})]}),e.jsxs(L,{children:[e.jsxs(c,{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"1",checked:t.levelActivity==="1",onChange:i}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs(c,{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"2",checked:t.levelActivity==="2",onChange:i}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs(c,{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"3",checked:t.levelActivity==="3",onChange:i}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs(c,{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"4",checked:t.levelActivity==="4",onChange:i}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs(c,{children:[e.jsx(n,{type:"radio",name:"levelActivity",value:"5",checked:t.levelActivity==="5",onChange:i}),"Extremely active (very strenuous exercises/ sports and physical work)"]})]}),e.jsx(B,{type:"submit",children:"Save"})]})})},M=()=>e.jsxs("div",{children:[e.jsx(S,{children:"Profile Settings"}),e.jsx(F,{}),e.jsx(I,{})]});export{M as default};
