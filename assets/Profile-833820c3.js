import{s as i,u as R,b as F,i as q,e as C,j as e,a as b,k as U,m as M,n as N,f as r,o as B}from"./index-897b1db8.js";import{N as E,T as O}from"./TitlePage.styled-c50d1ef1.js";import{n as s}from"./emotion-styled.browser.esm-c48a1cd8.js";import{F as P,c as V,a as k,b as m,d as Y,e as H}from"./index.esm-d6c3c080.js";import{P as G}from"./PageAnimatedWrapper-094c3845.js";const X=s.div`
  min-width: 281px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 439px;
    padding-top: 0;
    justify-content: flex-start;

    padding-left: 49px;
    padding-bottom: 32px;

    border-left: 1px solid ${i.navLinkColor};
  }
`,J=s.div`
  position: relative;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #e6533c;
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,K=s.button`
  padding: 0px;
  position: absolute;
  bottom: -12px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50%;

  & svg {
    fill: ${i.orangeColor};
    transition: fill 250ms linear;
  }
  & svg {
    &:hover,
    &:focus {
      fill: ${i.orange2Color};
    }
  }

  @media screen and (min-width: 768px) {
    bottom: -16px;
    right: 59px;
  }

  & svg {
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`,Q=s.p`
  margin-top: 30px;
  color: #efede8;
  font-size: 18px;
  line-height: calc(20 / 18);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,Z=s.p`
  margin-top: 4px;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`,_=s.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  margin-top: 40px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-top: 32px;
  }
`,$=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  flex-basis: calc(100% / 2);

  height: 96px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background: #e6533c;

  padding: 14px;

  @media screen and (min-width: 768px) {
    padding-inline: 18px;
    max-width: 214px;
    height: 108px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 210px;
  }
`,z=s.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #efede8;
  font-style: normal;
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,A=s.span`
  color: #efede8;
  font-size: 18px;
  font-weight: 700;
  line-height: calc(20 / 18);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
    bottom: 14px;
    left: 18px;
  }
`,ee=s.div`
  margin-top: 40px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 439px;
  }
`,ie=s.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-top: 40px;
  & svg {
    stroke: ${i.orangeColor};
    transition: fill 250ms linear;
  }
  & svg {
    &:hover,
    &:focus {
      stroke: ${i.orange2Color};
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 439px;
    margin-left: 0;
  }
`,te=()=>{const p=R(),o=F(q),[u,y]=C.useState(o.avatarURL),h=C.useRef(null),n=d=>{d.preventDefault(),console.log(),h.current&&h.current.click()},t=async d=>{const c=d.currentTarget.files[0];c&&y(URL.createObjectURL(c));try{await p(M(c))}catch(j){console.log("Error updating avatar:",j)}},a=()=>p(N());return e.jsxs(X,{children:[e.jsxs(J,{children:[u?e.jsx("img",{src:u,alt:"User Avatar"}):e.jsx("svg",{width:"61",height:"62",fill:"#efede8",children:e.jsx("use",{href:`${b}#user`})}),e.jsxs("form",{children:[e.jsx("input",{hidden:!0,type:"file",name:"avatarURL",accept:"image/*",ref:h,onChange:t}),e.jsx(K,{onClick:n,children:e.jsx("svg",{children:e.jsx("use",{href:`${b}#add`})})})]})]}),e.jsx(Q,{children:o.name}),e.jsx(Z,{children:"User"}),e.jsxs(_,{children:[e.jsxs($,{children:[e.jsxs(z,{children:[e.jsx("svg",{width:"20",height:"20",fill:"#efede8",children:e.jsx("use",{href:`${b}#food`})}),"Daily calorie intake"]}),e.jsx(A,{children:o.dailyCalories})]}),e.jsxs($,{children:[e.jsxs(z,{children:[e.jsx("svg",{width:"20",height:"20",fill:"#efede8",children:e.jsx("use",{href:`${b}#dumbbell`})}),"Daily physical activity"]}),e.jsxs(A,{children:[o.dailySportTime," min"]})]})]}),e.jsx(ee,{children:e.jsx(E,{notice:`We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.`})}),e.jsx(ie,{onClick:a,children:e.jsx(U,{})})]})},ne=r(P)`
  margin-top: 19px;
  margin-bottom: 44px;

  width: 100%;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    margin-top: 38px;
    margin-bottom: 54px;

    width: 704px;
  }

  @media (min-width: 1440px) {
    margin: 0 64px 0 0;
  }
`,oe=r.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 14px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,re=r.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,W=r.div`
  display: flex;
  gap: 14px;
`,ae=r.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,de=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,se=r.div`
  display: flex;
  gap: 21px;
  flex-direction: column;

  @media (min-width: 375px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    gap: 32px;
  }
`,g=r.div`
  margin-top: -4px;

  color: ${i.errorColor};
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.12px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`,S=r.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${i.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  @media (min-width: 768px) {
    gap: 8px;

    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
  }
`,v=r.label`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 2);
  gap: 4px;

  color: ${i.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  @media (min-width: 375px) {
    width: 160px;
  }

  @media (min-width: 768px) {
    width: 165px;
    gap: 8px;

    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
  }
`,w=r.input`
  padding: 14px;

  width: 100%;

  color: ${i.whiteColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${i.greyTextColor};
  background: transparent;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${i.orangeColor};
    background-color: transparent;
    outline: none;
  }

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,le=r.input`
  padding: 14px;

  width: 100%;

  color: ${i.whiteColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${i.greyTextColor};
  background: transparent;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${i.orangeColor};
    background-color: transparent;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 345px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,pe=r.input`
  padding: 14px;

  width: 100%;

  color: ${i.greyTextColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${i.greyTextColor};
  background: transparent;

  @media (min-width: 768px) {
    width: 345px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,ce=r.p`
  color: ${i.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;

    margin-bottom: 8px;
  }
`,x=r.label`
  display: flex;
  align-items: center;

  gap: 8px;

  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;

  color: ${i.whiteColor};

  cursor: pointer;

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,f=r.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 100%;

  font-size: 14px;
  line-height: 1.29;

  color: ${i.whiteColor};

  cursor: pointer;

  @media (min-width: 375px) {
    width: 326px;
  }

  @media (min-width: 768px) {
    width: 530px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,l=r.input`
  appearance: none;

  min-width: 18px;
  min-height: 18px;

  font: inherit;
  color: ${i.orangeColor};
  background-color: transparent;

  border: 0.11em solid ${i.greyTextColor};
  border-radius: 50%;

  cursor: pointer;

  &:checked {
    border: 0.11em solid ${i.orange2Color};
    background: radial-gradient(
      circle,
      ${i.orange2Color} 40%,
      transparent 50%
    );
  }

  @media (min-width: 768px) {
    margin-top: 0;

    min-width: 20px;
    min-height: 20px;
  }
`,xe=r.button`
  padding: 12px 40px;

  font-weight: 500;
  line-height: 1.43;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;

  border: 1px solid ${i.orangeColor};
  border-radius: 12px;

  background-color: ${i.orangeColor};
  color: ${i.whiteColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
  }

  @media (min-width: 768px) {
    padding: 16px 50px;

    font-size: 20px;
    line-height: 1.2;
  }
`,he=V().shape({name:k().min(2,"Name is too short!").max(50,"Name is too long!").required("Name is required"),height:m().positive("Must be a positive number").min(150,"Must be >150").max(300,"Must be <300").required("Height is required"),currentWeight:m().positive("Must be a positive number").min(35,"Must be >35").max(500,"Must be <500").required("Current weight is required"),desiredWeight:m().positive("Must be a positive number").min(35,"Must be >35").max(500,"Must be <500").required("Desired weight is required"),birthday:Y().max(new Date,"Invalid date").test("age","You must be over 18 years old",function(p){const o=new Date;return o.setFullYear(o.getFullYear()-18),p<=o}),blood:m().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:k().oneOf(["male","female"],"Invalid gender").required("Sex is required"),levelActivity:m().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),me=()=>{const p=R(),o=F(q),u={name:o.name??"",height:o.height??150,currentWeight:o.currentWeight??35,desiredWeight:o.desiredWeight??35,birthday:y(o.birthday)??"1990-01-01",blood:String(o.blood)??"1",sex:o.sex??"male",levelActivity:String(o.levelActivity)??"1"};function y(n){const t=new Date(n),a=t.getDate().toString().padStart(2,"0"),d=(t.getMonth()+1).toString().padStart(2,"0");return`${t.getFullYear()}-${d}-${a}`}const h=(n,{setSubmitting:t})=>{const{birthday:a,blood:d,currentWeight:c,desiredWeight:j,height:D,levelActivity:T,name:I,sex:L}=n;p(B({name:I,height:D,currentWeight:c,desiredWeight:j,birthday:y(a),blood:Number(d),sex:L,levelActivity:Number(T)})),t(!1)};return e.jsx(H,{initialValues:u,validationSchema:he,onSubmit:h,children:({handleChange:n,values:t,errors:a,touched:d})=>e.jsxs(ne,{children:[e.jsxs(oe,{children:[e.jsxs(S,{children:["Name",e.jsx(le,{type:"text",id:"name",name:"name",value:t.name,onChange:n}),a.name&&d.name?e.jsx(g,{children:a.name}):null]}),e.jsxs(S,{children:["Email",e.jsx(pe,{type:"text",id:"email",name:"email",defaultValue:o.email,readOnly:!0,disabled:!0})]})]}),e.jsxs(re,{children:[e.jsxs(W,{children:[e.jsxs(v,{children:["Height",e.jsx(w,{type:"number",id:"height",name:"height",value:t.height,onChange:n}),a.height&&d.height?e.jsx(g,{children:a.height}):null]}),e.jsxs(v,{children:["Current Weight",e.jsx(w,{type:"number",id:"currentWeight",name:"currentWeight",value:t.currentWeight,onChange:n}),a.currentWeight&&d.currentWeight?e.jsx(g,{children:a.currentWeight}):null]})]}),e.jsxs(W,{children:[e.jsxs(v,{children:["Desired Weight",e.jsx(w,{type:"number",id:"desiredWeight",name:"desiredWeight",value:t.desiredWeight,onChange:n}),a.desiredWeight&&d.desiredWeight?e.jsx(g,{children:a.desiredWeight}):null]}),e.jsxs(v,{children:["Date of birth",e.jsx(w,{type:"date",id:"birthday",name:"birthday",value:t.birthday,onChange:n,style:{pointerEvents:"none"}}),a.birthday&&d.birthday?e.jsx(g,{children:a.birthday}):null]})]})]}),e.jsxs(ae,{children:[e.jsx(ce,{children:"Blood"}),e.jsxs(se,{children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(x,{children:[e.jsx(l,{type:"radio",name:"blood",value:"1",checked:t.blood==="1",onChange:n}),"1"]}),e.jsxs(x,{children:[e.jsx(l,{type:"radio",name:"blood",value:"2",checked:t.blood==="2",onChange:n}),"2"]}),e.jsxs(x,{children:[e.jsx(l,{type:"radio",name:"blood",value:"3",checked:t.blood==="3",onChange:n}),"3"]}),e.jsxs(x,{children:[e.jsx(l,{type:"radio",name:"blood",value:"4",checked:t.blood==="4",onChange:n}),"4"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(x,{children:[e.jsx(l,{type:"radio",name:"sex",value:"male",checked:t.sex==="male",onChange:n}),"Male"]}),e.jsxs(x,{children:[e.jsx(l,{type:"radio",name:"sex",value:"female",checked:t.sex==="female",onChange:n}),"Female"]})]})]})]}),e.jsxs(de,{children:[e.jsxs(f,{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"1",checked:t.levelActivity==="1",onChange:n}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs(f,{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"2",checked:t.levelActivity==="2",onChange:n}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs(f,{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"3",checked:t.levelActivity==="3",onChange:n}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs(f,{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"4",checked:t.levelActivity==="4",onChange:n}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs(f,{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"5",checked:t.levelActivity==="5",onChange:n}),"Extremely active (very strenuous exercises/ sports and physical work)"]})]}),e.jsx(xe,{type:"submit",children:"Save"})]})})},ge=s.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-inline: 96px;
  }
`,fe=s.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;

    margin-top: 32px;
  }
`,je=()=>e.jsx(G,{direction:"X",children:e.jsxs(ge,{children:[e.jsx(O,{children:"Profile Settings"}),e.jsxs(fe,{children:[e.jsx(te,{}),e.jsx(me,{})]})]})});export{je as default};
