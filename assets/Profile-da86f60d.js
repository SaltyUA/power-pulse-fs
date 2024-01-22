import{s as i,u as W,b as D,i as R,e as k,j as e,a as y,k as T,m as L,n as U,f as r,o as N,p as B}from"./index-ba0ad5df.js";import{N as E,e as O,T as P}from"./TitlePage.styled-53b10b2f.js";import{n as l}from"./emotion-styled.browser.esm-9536b4cb.js";import{F as V,c as Y,a as C,b as f,d as G,e as H}from"./index.esm-30a6aefc.js";import{P as X}from"./PageAnimatedWrapper-9721baf5.js";import"./defineProperty-4681ad55.js";const J=l.div`
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
`,K=l.div`
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
`,Q=l.button`
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
`,Z=l.p`
  margin-top: 30px;
  color: #efede8;
  font-size: 18px;
  line-height: calc(20 / 18);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,ee=l.p`
  margin-top: 4px;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`,ie=l.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  margin-top: 40px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-top: 32px;
  }
`,_=l.div`
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
`,$=l.div`
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
`,z=l.span`
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
`,te=l.div`
  margin-top: 40px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 439px;
  }
`,ne=l.div`
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
`,oe=()=>{const c=W(),o=D(R),[p,w]=k.useState(o.avatarURL),g=k.useRef(null),n=d=>{d.preventDefault(),console.log(),g.current&&g.current.click()},t=async d=>{const x=d.currentTarget.files[0];x&&w(URL.createObjectURL(x));try{await c(L(x))}catch(j){console.log("Error updating avatar:",j)}},a=()=>c(U());return e.jsxs(J,{children:[e.jsxs(K,{children:[p?e.jsx("img",{src:p,alt:"User Avatar"}):e.jsx("svg",{width:"61",height:"62",fill:"#efede8",children:e.jsx("use",{href:`${y}#user`})}),e.jsxs("form",{children:[e.jsx("input",{hidden:!0,type:"file",name:"avatarURL",accept:"image/*",ref:g,onChange:t}),e.jsx(Q,{onClick:n,children:e.jsx("svg",{children:e.jsx("use",{href:`${y}#add`})})})]})]}),e.jsx(Z,{children:o.name}),e.jsx(ee,{children:"User"}),e.jsxs(ie,{children:[e.jsxs(_,{children:[e.jsxs($,{children:[e.jsx("svg",{width:"20",height:"20",fill:"#efede8",children:e.jsx("use",{href:`${y}#food`})}),"Daily calorie intake"]}),e.jsx(z,{children:o.dailyCalories})]}),e.jsxs(_,{children:[e.jsxs($,{children:[e.jsx("svg",{width:"20",height:"20",fill:"#efede8",children:e.jsx("use",{href:`${y}#dumbbell`})}),"Daily physical activity"]}),e.jsxs(z,{children:[o.dailySportTime," min"]})]})]}),e.jsx(te,{children:e.jsx(E,{notice:`We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.`})}),e.jsx(ne,{onClick:a,children:e.jsx(T,{})})]})},re=r.svg`
  position: absolute;
  top: 16px;
  right: 14px;

  cursor: pointer;
`,ae=N`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 354px;
    padding: 9px 18px;
  background-color: #3e85f3;
    font-family: Inter;
    border-radius: 16px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;const de=r(V)`
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
`,le=r.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 14px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,se=r.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,A=r.div`
  display: flex;
  gap: 14px;
`,ce=r.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,pe=r.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,xe=r.div`
  display: flex;
  gap: 21px;
  flex-direction: column;

  @media (min-width: 375px) {
    align-items: flex-start;
    flex-direction: row;
  }

  @media (min-width: 768px) {
    gap: 32px;
  }
`,h=r.div`
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
`,b=r.label`
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
`,v=r.input`
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
`,he=r.input`
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
`,me=r.input`
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
`,ge=r.p`
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
`,m=r.label`
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
`,u=r.label`
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
`,s=r.input`
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
`,fe=r.button`
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
`,ue=({selectedDate:c,setSelectedDate:o})=>e.jsx(e.Fragment,{children:e.jsxs("div",{style:{position:"relative",cursor:"pointer"},children:[e.jsx(re,{width:"18",height:"18",children:e.jsx("use",{href:`${y}#icon-calendar`})}),e.jsx(O,{selected:c,onChange:p=>{o(p)},customInput:e.jsx(v,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:p=>p.substring(0,1)}),e.jsx(ae,{})]})}),ye=Y().shape({name:C().min(2,"Name is too short!").max(50,"Name is too long!").required("Name is required"),height:f().positive("Must be a positive number").min(150,"Must be >150").max(300,"Must be <300").required("Height is required"),currentWeight:f().positive("Must be a positive number").min(35,"Must be >35").max(500,"Must be <500").required("Current weight is required"),desiredWeight:f().positive("Must be a positive number").min(35,"Must be >35").max(500,"Must be <500").required("Desired weight is required"),birthday:G().max(new Date,"Invalid date").test("age","You must be over 18 years old",function(c){const o=new Date;return o.setFullYear(o.getFullYear()-18),c<=o}),blood:f().oneOf([1,2,3,4],"Invalid blood type").required("Blood type is required"),sex:C().oneOf(["male","female"],"Invalid gender").required("Sex is required"),levelActivity:f().oneOf([1,2,3,4,5],"Invalid activity level").required("Activity level is required")}),be=()=>{const c=W(),o=D(R),p={name:o.name??"",height:o.height??150,currentWeight:o.currentWeight??35,desiredWeight:o.desiredWeight??35,birthday:o.birthday?new Date(o.birthday):new Date("1990-01-01"),blood:String(o.blood)??"1",sex:o.sex??"male",levelActivity:String(o.levelActivity)??"1"};function w(n){const t=new Date(n),a=t.getDate().toString().padStart(2,"0"),d=(t.getMonth()+1).toString().padStart(2,"0");return`${t.getFullYear()}-${d}-${a}`}const g=(n,{setSubmitting:t})=>{const{birthday:a,blood:d,currentWeight:x,desiredWeight:j,height:F,levelActivity:I,name:q,sex:M}=n;c(B({name:q,height:F,currentWeight:x,desiredWeight:j,birthday:w(a),blood:Number(d),sex:M,levelActivity:Number(I)})),t(!1)};return e.jsx(H,{initialValues:p,validationSchema:ye,onSubmit:g,children:({handleChange:n,values:t,errors:a,touched:d})=>e.jsxs(de,{children:[e.jsxs(le,{children:[e.jsxs(S,{children:["Name",e.jsx(he,{type:"text",id:"name",name:"name",value:t.name,onChange:n}),a.name&&d.name?e.jsx(h,{children:a.name}):null]}),e.jsxs(S,{children:["Email",e.jsx(me,{type:"text",id:"email",name:"email",defaultValue:o.email,readOnly:!0,disabled:!0})]})]}),e.jsxs(se,{children:[e.jsxs(A,{children:[e.jsxs(b,{children:["Height",e.jsx(v,{type:"number",id:"height",name:"height",value:t.height,onChange:n}),a.height&&d.height?e.jsx(h,{children:a.height}):null]}),e.jsxs(b,{children:["Current Weight",e.jsx(v,{type:"number",id:"currentWeight",name:"currentWeight",value:t.currentWeight,onChange:n}),a.currentWeight&&d.currentWeight?e.jsx(h,{children:a.currentWeight}):null]})]}),e.jsxs(A,{children:[e.jsxs(b,{children:["Desired Weight",e.jsx(v,{type:"number",id:"desiredWeight",name:"desiredWeight",value:t.desiredWeight,onChange:n}),a.desiredWeight&&d.desiredWeight?e.jsx(h,{children:a.desiredWeight}):null]}),e.jsxs(b,{children:["Date of birth",e.jsx(ue,{selectedDate:t.birthday,setSelectedDate:x=>n({target:{name:"birthday",value:x}})}),a.birthday&&d.birthday?e.jsx(h,{children:a.birthday}):null]})]})]}),e.jsxs(ce,{children:[e.jsx(ge,{children:"Blood"}),e.jsxs(xe,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(m,{children:[e.jsx(s,{type:"radio",name:"blood",value:"1",checked:t.blood==="1",onChange:n}),"1"]}),e.jsxs(m,{children:[e.jsx(s,{type:"radio",name:"blood",value:"2",checked:t.blood==="2",onChange:n}),"2"]}),e.jsxs(m,{children:[e.jsx(s,{type:"radio",name:"blood",value:"3",checked:t.blood==="3",onChange:n}),"3"]}),e.jsxs(m,{children:[e.jsx(s,{type:"radio",name:"blood",value:"4",checked:t.blood==="4",onChange:n}),"4"]})]}),a.blood&&d.blood?e.jsx(h,{children:"Blood type is required"}):null]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(m,{children:[e.jsx(s,{type:"radio",name:"sex",value:"male",checked:t.sex==="male",onChange:n}),"Male"]}),e.jsxs(m,{children:[e.jsx(s,{type:"radio",name:"sex",value:"female",checked:t.sex==="female",onChange:n}),"Female"]})]})]})]}),e.jsxs(pe,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs(u,{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"1",checked:t.levelActivity==="1",onChange:n}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs(u,{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"2",checked:t.levelActivity==="2",onChange:n}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs(u,{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"3",checked:t.levelActivity==="3",onChange:n}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs(u,{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"4",checked:t.levelActivity==="4",onChange:n}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs(u,{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"5",checked:t.levelActivity==="5",onChange:n}),"Extremely active (very strenuous exercises/ sports and physical work)"]})]}),a.levelActivity&&d.levelActivity?e.jsx(h,{children:"Activity level is required"}):null]}),e.jsx(fe,{type:"submit",children:"Save"})]})})},ve=l.div`
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
`,we=l.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;

    margin-top: 32px;
  }
`,Ae=()=>e.jsx(X,{direction:"X",children:e.jsxs(ve,{children:[e.jsx(P,{children:"Profile Settings"}),e.jsxs(we,{children:[e.jsx(oe,{}),e.jsx(be,{})]})]})});export{Ae as default};
