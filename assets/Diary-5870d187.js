import{t as L,q as M,j as e,b as l,i as G,a as s,u as y,w as P,x as A,y as H,e as b,z as W,A as _,B as q}from"./index-b7560620.js";import{n as r}from"./emotion-styled.browser.esm-fd653b32.js";import{A as E}from"./AddButton-a088de2c.js";import{e as U,P as V,T as X,N as Y}from"./TitlePage.styled-ed317cb9.js";import{c as J,G as K}from"./emotion-react.browser.esm-f827fa3a.js";import{P as O}from"./PageAnimatedWrapper-a8896d04.js";import"./defineProperty-4681ad55.js";function I(i,n){const t=L(i);return isNaN(n)?M(i,NaN):(n&&t.setDate(t.getDate()+n),t)}function Q(i,n){return I(i,-n)}const Z=r.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 20px;
  /* padding-top: 61px; */

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-inline: 32px;
    /* padding-top: 84px; */
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,ee=({children:i})=>e.jsx(Z,{children:i}),ie=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 328px;
  margin-bottom: 20px;
  row-gap: 20px;
  column-gap: 13px;
  
  @media screen and (min-width: 768px) {
    height: 248px;
    margin-bottom: 32px;
    row-gap: 16px;
    column-gap: 16px;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
    height: 380px;
    margin-bottom: 48px;
    flex-direction: row;
  }
`,re=i=>{switch(i.accent){case"true":return"#e6533c";case"false":return"rgba(239, 237, 232, 0.05)";default:return"rgba(239, 237, 232, 0.05)"}},p=r.li`
  border: 1px solid;
  border-color: ${i=>i.rest==="green"?"#3CBF61":i.rest==="red"?"#E9101D":"rgba(239, 237, 232, 0.2)"};
  border-radius: 12px;
  background-color: ${re};
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    width: 161px;
    height: 96px;

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
  }
`,x=r.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,h=r.svg({width:"20px",height:"20px"},({iconColor:i="#EF8964"})=>({fill:i,stroke:i})),te=i=>{switch(i.accent){case"true":return"rgba(239, 237, 232, 0.8)";case"false":return"rgba(239, 237, 232, 0.4)";default:return"rgba(239, 237, 232, 0.4)"}},g=r.p`
  font-size: 12px;
  font-weight: 400;
  color: ${te};
`,m=r.p`
  font-weight: 700;
  color: #efede8;
    font-size: 18px;
    
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,F=i=>i.diary.diaryInfo,k=i=>i.diary.choiceDate,ne=()=>{const i=l(G),n=l(F),t=i.dailyCalories&&n.caloriesConsumed?i.dailyCalories-n.caloriesConsumed:0,d=i.dailySportTime&&n.activity?Math.trunc(i.dailySportTime-n.activity/60):0,a=t<0?"red":"",o=t<0?"green":"";return e.jsxs(ie,{children:[e.jsxs(p,{accent:"true",children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${s}#icon-food`})}),e.jsx(g,{accent:"true",children:"Daily calorie intake"})]}),e.jsx(m,{children:i.dailyCalories})]}),e.jsxs(p,{accent:"true",children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${s}#icon-dumbbell`})}),e.jsx(g,{accent:"true",children:"Daily physical activity"})]}),e.jsxs(m,{children:[i.dailySportTime," min"]})]}),e.jsxs(p,{accent:"false",children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${s}#icon-apple`})}),e.jsx(g,{accent:"false",children:"Calories consumed"})]}),e.jsx(m,{children:n.caloriesConsumed||0})]}),e.jsxs(p,{accent:"false",children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${s}#icon-burn`})}),e.jsx(g,{accent:"false",children:"Calories burned"})]}),e.jsx(m,{children:n.caloriesBurned||0})]}),e.jsxs(p,{accent:"false",rest:a,children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${s}#icon-bubble`})}),e.jsx(g,{accent:"false",children:"Calories remaining"})]}),e.jsx(m,{children:t})]}),e.jsxs(p,{accent:"false",rest:o,children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${s}#icon-running`})}),e.jsx(g,{accent:"false",children:"Sports remaining"})]}),e.jsxs(m,{children:[d," min"]})]})]})},de=i=>{switch(i.dimentionArea){case"true":return"1010px";case"false":return"335px";default:return"335px"}},ae=r.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  height: ${de};
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    height: 234px;
    padding-right: 16px;
  }
`,se=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,oe=r.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,ce=r.p`
  font-weight: 400;
  color: rgba(239, 237, 232, 0.3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,le=r.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,pe=r.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 90px 132px 128px 84px 78px 72px 20px;
    grid-template-rows: auto;
    grid-template-areas: 'grid1 grid2 grid3 grid4 grid5 grid6 grid7';
    color: #ef8964;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 115px 157px 131px 106px 91px 82px 20px;
  }
`,xe=r.div`
  grid-area: grid1;
`,he=r.div`
  grid-area: grid2;
`,ge=r.div`
  grid-area: grid3;
`,me=r.div`
  grid-area: grid4;
`,fe=r.div`
  grid-area: grid5;
`,ue=r.div`
  grid-area: grid6;
`,we=r.div`
  grid-area: grid7;
`,je=r.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all;

  :hover {
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    :hover {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    :hover {
      font-size: inherit;
    }
  }
`,be=i=>{switch(i.dimentionList){case"true":return"930px";case"false":return"335px";default:return"300px"}},ye=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${be};
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
    width: 6px;
    height: 50px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 15px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    height: 136px;
  }
`;let S=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");const ve=r.div`
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #efede8;
  display: grid;
  grid-gap: 14px;
  grid-template-columns: 81px 80px 76px 20px;
  grid-template-rows: auto;
  grid-template-areas:
    'grid1 grid1 grid1 grid1'
    'grid2 grid2 grid2 grid2'
    'grid3 grid3 grid3 grid3'
    'grid4 grid5 grid6 grid7';

  @media screen and (min-width: 768px) {
    font-size: 16px;
    grid-gap: 8px;
    grid-template-columns: 90px 132px 128px 84px 78px 72px 20px;
    grid-template-rows: 40px;
    grid-template-areas: 'grid1 grid2 grid3 grid4 grid5 grid6 grid7';
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 115px 157px 131px 106px 91px 82px 20px;
  }
`,ke=r.div`
  grid-area: grid1;
`,_e=r.div`
  grid-area: grid2;
`,$e=r.div`
  grid-area: grid3;
`,De=r.div`
  grid-area: grid4;
`,Ce=r.div`
  grid-area: grid5;
`,ze=r.div`
  grid-area: grid6;
`,Te=r.div`
  grid-area: grid7;
`,c=r.p`
  color: #ef8964;
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    display: none;
  }
`,f=r.div`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding-inline: 14px;

  width: 100%;
  height: 38px;

  @media screen and (min-width: 768px) {
    height: 40px;
  }
`,Ge=r.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`,Ae=r.svg({width:"20px",height:"20px"},({iconColor:i="#EF8964"})=>({fill:i,stroke:i}));r.span`
  margin-left: 8px;
`;const j=r.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    :hover {
      font-size: 12px;
    }
  }
`,Ee=({calories:i,time:n,exercise:t})=>{const d=l(k),a=y(),o=v=>{a(P({date:d,id:v}))};return e.jsxs(ve,{children:[e.jsxs(ke,{children:[e.jsx(c,{children:"Body part"}),e.jsx(f,{children:e.jsx(j,{children:t.bodyPart})})]}),e.jsxs(_e,{children:[e.jsx(c,{children:"Equipment"}),e.jsx(f,{children:e.jsx(j,{children:t.equipment})})]}),e.jsxs($e,{children:[e.jsx(c,{children:"Name"}),e.jsx(f,{children:e.jsx(j,{children:t.name})})]}),e.jsxs(De,{children:[e.jsx(c,{children:"Target"}),e.jsx(f,{children:e.jsx(j,{children:t.target})})]}),e.jsxs(Ce,{children:[e.jsx(c,{children:"Burned Calories"}),e.jsx(f,{children:i})]}),e.jsxs(ze,{children:[e.jsx(c,{children:"Time"}),e.jsx(f,{children:n})]}),e.jsxs(Te,{children:[e.jsx(c,{}),e.jsx(Ge,{onClick:()=>o(t._id),children:e.jsx(Ae,{children:e.jsx("use",{href:`${s}#icon-trash`})})})]})]},t._id)},Ie=({consumedExercises:i})=>{const n=A(),t=()=>{n("/exercises")};return e.jsxs(ae,{dimentionArea:i&&i.length>0?"true":"false",children:[e.jsxs(se,{children:[e.jsx(oe,{children:"Execrcises"}),e.jsx(E,{onClick:()=>t(),children:"Add exercise"})]}),e.jsx(le,{children:i&&i.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(pe,{children:[e.jsx(xe,{children:"Body Part"}),e.jsx(he,{children:"Equipment"}),e.jsx(ge,{children:"Name"}),e.jsx(me,{children:"Target"}),e.jsx(fe,{children:e.jsx(je,{children:"Burned Calories"})}),e.jsx(ue,{children:"Time"}),e.jsx(we,{})]}),e.jsx(ye,{dimentionList:i&&i.length>0?"true":"false",children:i.map(d=>e.jsx(Ee,{...d},S()))})]}):e.jsx(ce,{children:"Not found exercises"})})]})},Fe=i=>{switch(i.dimentionArea){case"true":return"780px";case"false":return"335px";default:return"335px"}},Se=r.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  height: ${Fe};
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    height: 234px;
    padding-right: 16px;
  }
`,Be=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Ne=r.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,Re=r.p`
  font-weight: 400;
  color: rgba(239, 237, 232, 0.3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Le=r.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,Me=r.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 204px 128px 90px 90px 80px 20px;
    grid-template-rows: auto;
    grid-template-areas: 'grid1 grid2 grid3 grid4 grid5 grid6';
    color: #ef8964;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 212px 166px 105px 105px 110px 20px;
  }
`,Pe=r.div`
  grid-area: grid1;
`,He=r.div`
  grid-area: grid2;
`,We=r.div`
  grid-area: grid3;
`,qe=r.div`
  grid-area: grid4;
`,Ue=r.div`
  grid-area: grid5;
`,Ve=r.div`
  grid-area: grid6;
`,Xe=i=>{switch(i.dimentionList){case"true":return"700px";case"false":return"335px";default:return"300px"}},Ye=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${Xe};
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
    width: 6px;
    height: 90px;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 15px;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    height: 136px;
  }
`,Je=r.div`
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #efede8;
  display: grid;
  grid-gap: 14px;
  grid-template-columns: 81px 80px 76px 20px;
  grid-template-rows: auto;
  grid-template-areas:
    'grid1 grid1 grid1 grid1'
    'grid2 grid2 grid2 grid2'
    'grid3 grid4 grid5 grid6';

  @media screen and (min-width: 768px) {
    font-size: 16px;
    grid-gap: 8px;
    grid-template-columns: 204px 128px 90px 90px 80px 20px;
    grid-template-rows: 40px;
    grid-template-areas: 'grid1 grid2 grid3 grid4 grid5 grid6';
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 212px 166px 105px 105px 110px 20px;
  }
`,Ke=r.div`
  grid-area: grid1;
`,Oe=r.div`
  grid-area: grid2;
`,Qe=r.div`
  grid-area: grid3;
`,Ze=r.div`
  grid-area: grid4;
`,ei=r.div`
  grid-area: grid5;
`,ii=r.div`
  grid-area: grid6;
`,u=r.p`
  color: #ef8964;
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    display: none;
  }
`,w=r.div`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding-inline: 14px;

  width: 100%;
  height: 38px;

  @media screen and (min-width: 768px) {
    height: 40px;
  }
`,ri=r.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`,ti=r.svg({width:"20px",height:"20px"},({iconColor:i="#EF8964"})=>({fill:i,stroke:i})),$=r.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${i=>i.color};
`,D=r.span`
  margin-left: 8px;
`,C=r.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    :hover {
      font-size: 12px;
    }
  }
`,ni=({product:i,calories:n,amount:t})=>{const{blood:d}=l(G),a=l(k),o=y(),v=R=>{o(H({date:a,id:R}))},N=i.groupBloodNotAllowed[d];return e.jsxs(Je,{children:[e.jsxs(Ke,{children:[e.jsx(u,{children:"Title"}),e.jsx(w,{children:e.jsx(C,{children:i.title})})]}),e.jsxs(Oe,{children:[e.jsx(u,{children:"Category"}),e.jsx(w,{children:e.jsx(C,{children:i.category})})]}),e.jsxs(Qe,{children:[e.jsx(u,{children:"Calories"}),e.jsx(w,{children:n})]}),e.jsxs(Ze,{children:[e.jsx(u,{children:"Weight"}),e.jsx(w,{children:t})]}),e.jsxs(ei,{children:[e.jsx(u,{children:"Recommend"}),e.jsx(w,{children:N?e.jsxs(e.Fragment,{children:[e.jsx($,{color:"#419B09"}),e.jsx(D,{children:"Yes"})]}):e.jsxs(e.Fragment,{children:[e.jsx($,{color:"#E9101D"}),e.jsx(D,{children:"No"})]})})]}),e.jsxs(ii,{children:[e.jsx(u,{}),e.jsx(ri,{onClick:()=>v(i._id),children:e.jsx(ti,{iconColor:"#EF8964",children:e.jsx("use",{href:`${s}#icon-trash`})})})]})]},i._id)},di=({consumedProducts:i})=>{const n=A(),t=()=>{n("/products")};return e.jsxs(Se,{dimentionArea:i&&i.length>0?"true":"false",children:[e.jsxs(Be,{children:[e.jsx(Ne,{children:"Products"}),e.jsx(E,{onClick:()=>t(),children:"Add product"})]}),e.jsx(Le,{children:i&&i.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(Me,{children:[e.jsx(Pe,{children:"Title"}),e.jsx(He,{children:"Category"}),e.jsx(We,{children:"Calories"}),e.jsx(qe,{children:"Weight"}),e.jsx(Ue,{children:"Recommend"}),e.jsx(Ve,{})]}),e.jsx(Ye,{dimentionList:i&&i.length>0?"true":"false",children:i.map(d=>e.jsx(ni,{...d},S()))})]}):e.jsx(Re,{children:"Not found products"})})]})},ai=r.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 46px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    top: 52px;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    right: 64px;
  }
`,z=r.svg`
  width: 16px;
  height: 16px;
`,T=r.button`
  border: none;
  background-color: inherit;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,si=r.div`
  display: flex;
  gap: 6px;
`,oi=J`
  .react-datepicker__wrapper {
    position: relative;
  }
  .react-datepicker {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    padding: 14px 14px;
    background-color: #ef8964;
    font-family: Inter;
    border-radius: 16px;
    border: none;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color: #efede8;
    margin-bottom: 8px;
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
    color: rgba(239, 237, 232, 0.5);
  }
  .react-datepicker__navigation {
    margin-top: 4px;
    color: #efe8eb;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    top: 14px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    top: 14px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: #efede8;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #efede8;
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
    color: #efede8;
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
    padding-top: 14px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efe8e8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: #040404;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: #040404;
    color: #efede8;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #040404;
    color: #efede8;
  }
  .react-datepicker__day--weekend {
  }
  .react-datepicker__day--disabled {
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
`,ci=r.button`
  color: #efede8;
  background: inherit;
  border: none;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-size: 18px;


  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 375px) {
    font-size: 18px;

  &:hover,
  &:focus {
    color: #ef8964;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,li=r.svg`
  fill: none;
    width: 20px;
  height: 20px;
   transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #e6533c;
  }


  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;const pi=({selectedDate:i,setSelectedDate:n})=>{const t=y();b.useEffect(()=>{t(W(_(i,"dd-MM-yyyy")))});const d=b.forwardRef(({onClick:a},o)=>e.jsxs(ci,{onClick:a,ref:o,children:[_(i,"dd/MM/yyyy"),e.jsx(li,{iconColor:"#EF8964",children:e.jsx("use",{href:`${s}#calendar`})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(K,{styles:oi}),e.jsx(U,{selected:i,onChange:a=>{n(a)},customInput:e.jsx(d,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:a=>a.substring(0,1),maxDate:Date.now()})]})},xi=()=>{const[i,n]=b.useState(Date.now()),t=d=>{n(d)};return e.jsxs(ai,{children:[e.jsx(pi,{selectedDate:i,setSelectedDate:n}),e.jsxs(si,{children:[e.jsx(T,{type:"button",onClick:()=>t(Q(i,1)),children:e.jsx(z,{iconColor:"#efede8",children:e.jsx("use",{href:`${s}#icon-left`})})}),e.jsx(T,{type:"button",onClick:()=>t(I(i,1)),children:e.jsx(z,{iconColor:"#efede8",children:e.jsx("use",{href:`${s}#icon-right`})})})]})]})},B=({title:i})=>e.jsx(X,{children:i});B.propTypes={title:V.string.isRequired};r.div`
  padding-top: 62px;
  padding-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 85px;
    padding-bottom: 68px;
  }
`;const hi=r.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    padding-inline: 64px;
  }
`,gi=r.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    'grid2'
    'grid1';
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`,mi=r.div`
    grid-area: grid1;
  display: flex;
  flex-direction: column;
  width: 335px;
  gap: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,fi=r.div`
  grid-area: grid2;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 593px;
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,_i=()=>{const i=y(),n=l(k),t=l(F);return b.useEffect(()=>{i(q(n))},[n,i]),e.jsx(O,{direction:"X",children:e.jsx(ee,{children:e.jsxs(hi,{children:[e.jsx(B,{title:"Diary"}),e.jsx(xi,{}),e.jsxs(gi,{children:[e.jsxs(mi,{children:[e.jsx(di,{consumedProducts:t.products}),e.jsx(Ie,{consumedExercises:t.exercises})]}),e.jsxs(fi,{children:[e.jsx(ne,{}),e.jsx(Y,{notice:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})]})})})};export{_i as default};
