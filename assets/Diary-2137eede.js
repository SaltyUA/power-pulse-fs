import{j as e,c as l,i as G,a as o,u as y,q as L,t as A,w as M,f as b,x as N,y as _,z as P}from"./index-49be5777.js";import{n as i}from"./emotion-styled.browser.esm-82fa0e0e.js";import{A as E}from"./AddButton-f0ab38e9.js";import{e as H,P as W,T as q,N as U}from"./TitlePage.styled-db053ad4.js";import{c as V,G as X}from"./emotion-react.browser.esm-3f6b0737.js";import{P as Y}from"./PageAnimatedWrapper-13c7edb1.js";import"./defineProperty-4681ad55.js";const J=i.div`
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
`,K=({children:r})=>e.jsx(J,{children:r}),O=i.ul`
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
`,Q=r=>{switch(r.accent){case"true":return"#e6533c";case"false":return"rgba(239, 237, 232, 0.05)";default:return"rgba(239, 237, 232, 0.05)"}},p=i.li`
  border: 1px solid;
  border-color: ${r=>r.rest==="green"?"#3CBF61":r.rest==="red"?"#E9101D":"rgba(239, 237, 232, 0.2)"};
  border-radius: 12px;
  background-color: ${Q};
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
`,x=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,h=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r})),Z=r=>{switch(r.accent){case"true":return"rgba(239, 237, 232, 0.8)";case"false":return"rgba(239, 237, 232, 0.4)";default:return"rgba(239, 237, 232, 0.4)"}},g=i.p`
  font-size: 12px;
  font-weight: 400;
  color: ${Z};
`,m=i.p`
  font-weight: 700;
  color: #efede8;
    font-size: 18px;
    
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,I=r=>r.diary.diaryInfo,k=r=>r.diary.choiceDate,ee=()=>{const r=l(G),n=l(I),t=r.dailyCalories&&n.caloriesConsumed?r.dailyCalories-n.caloriesConsumed:0,d=r.dailySportTime&&n.activity?Math.trunc(r.dailySportTime-n.activity/60):0,a=t<0?"red":"",s=t<0?"green":"";return e.jsxs(O,{children:[e.jsxs(p,{accent:"true",children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${o}#icon-food`})}),e.jsx(g,{accent:"true",children:"Daily calorie intake"})]}),e.jsx(m,{children:r.dailyCalories})]}),e.jsxs(p,{accent:"true",children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${o}#icon-dumbbell`})}),e.jsx(g,{accent:"true",children:"Daily physical activity"})]}),e.jsx(m,{children:r.dailySportTime})]}),e.jsxs(p,{accent:"false",children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${o}#icon-apple`})}),e.jsx(g,{accent:"false",children:"Calories consumed"})]}),e.jsx(m,{children:n.caloriesConsumed})]}),e.jsxs(p,{accent:"false",children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${o}#icon-burn`})}),e.jsx(g,{accent:"false",children:"Calories burned"})]}),e.jsx(m,{children:n.caloriesBurned})]}),e.jsxs(p,{accent:"false",rest:a,children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${o}#icon-bubble`})}),e.jsx(g,{accent:"false",children:"Calories remaining"})]}),e.jsx(m,{children:t})]}),e.jsxs(p,{accent:"false",rest:s,children:[e.jsxs(x,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${o}#icon-running`})}),e.jsx(g,{accent:"false",children:"Sports remaining"})]}),e.jsx(m,{children:d})]})]})},ie=r=>{switch(r.dimentionArea){case"true":return"1010px";case"false":return"335px";default:return"335px"}},re=i.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  height: ${ie};
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    height: 234px;
    padding-right: 16px;
  }
`,te=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,ne=i.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,de=i.p`
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
`,ae=i.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,oe=i.div`
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
`,se=i.div`
  grid-area: grid1;
`,ce=i.div`
  grid-area: grid2;
`,le=i.div`
  grid-area: grid3;
`,pe=i.div`
  grid-area: grid4;
`,xe=i.div`
  grid-area: grid5;
`,he=i.div`
  grid-area: grid6;
`,ge=i.div`
  grid-area: grid7;
`,me=i.div`
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
`,fe=r=>{switch(r.dimentionList){case"true":return"930px";case"false":return"335px";default:return"300px"}},ue=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${fe};
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
`;let F=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");const we=i.div`
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
`,je=i.div`
  grid-area: grid1;
`,be=i.div`
  grid-area: grid2;
`,ye=i.div`
  grid-area: grid3;
`,ve=i.div`
  grid-area: grid4;
`,ke=i.div`
  grid-area: grid5;
`,_e=i.div`
  grid-area: grid6;
`,$e=i.div`
  grid-area: grid7;
`,c=i.p`
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
`,f=i.div`
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
`,Ce=i.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`,De=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r}));i.span`
  margin-left: 8px;
`;const j=i.div`
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
`,ze=({calories:r,time:n,exercise:t})=>{const d=l(k),a=y(),s=v=>{a(L({date:d,id:v}))};return e.jsxs(we,{children:[e.jsxs(je,{children:[e.jsx(c,{children:"Body part"}),e.jsx(f,{children:e.jsx(j,{children:t.bodyPart})})]}),e.jsxs(be,{children:[e.jsx(c,{children:"Equipment"}),e.jsx(f,{children:e.jsx(j,{children:t.equipment})})]}),e.jsxs(ye,{children:[e.jsx(c,{children:"Name"}),e.jsx(f,{children:e.jsx(j,{children:t.name})})]}),e.jsxs(ve,{children:[e.jsx(c,{children:"Target"}),e.jsx(f,{children:e.jsx(j,{children:t.target})})]}),e.jsxs(ke,{children:[e.jsx(c,{children:"Burned Calories"}),e.jsx(f,{children:r})]}),e.jsxs(_e,{children:[e.jsx(c,{children:"Time"}),e.jsx(f,{children:n})]}),e.jsxs($e,{children:[e.jsx(c,{}),e.jsx(Ce,{onClick:()=>s(t._id),children:e.jsx(De,{children:e.jsx("use",{href:`${o}#icon-trash`})})})]})]},t._id)},Te=({consumedExercises:r})=>{const n=A(),t=()=>{n("/exercises")};return e.jsxs(re,{dimentionArea:r&&r.length>0?"true":"false",children:[e.jsxs(te,{children:[e.jsx(ne,{children:"Execrcises"}),e.jsx(E,{onClick:()=>t(),children:"Add"})]}),e.jsx(ae,{children:r&&r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(oe,{children:[e.jsx(se,{children:"Body Part"}),e.jsx(ce,{children:"Equipment"}),e.jsx(le,{children:"Name"}),e.jsx(pe,{children:"Target"}),e.jsx(xe,{children:e.jsx(me,{children:"Burned Calories"})}),e.jsx(he,{children:"Time"}),e.jsx(ge,{})]}),e.jsx(ue,{dimentionList:r&&r.length>0?"true":"false",children:r.map(d=>e.jsx(ze,{...d},F()))})]}):e.jsx(de,{children:"Not found exercises"})})]})},Ge=r=>{switch(r.dimentionArea){case"true":return"780px";case"false":return"335px";default:return"335px"}},Ae=i.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  height: ${Ge};
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    height: 234px;
    padding-right: 16px;
  }
`,Ee=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Ie=i.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,Fe=i.p`
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
`,Se=i.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,Be=i.div`
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
`,Re=i.div`
  grid-area: grid1;
`,Le=i.div`
  grid-area: grid2;
`,Me=i.div`
  grid-area: grid3;
`,Ne=i.div`
  grid-area: grid4;
`,Pe=i.div`
  grid-area: grid5;
`,He=i.div`
  grid-area: grid6;
`,We=r=>{switch(r.dimentionList){case"true":return"700px";case"false":return"335px";default:return"300px"}},qe=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${We};
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
`,Ue=i.div`
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
`,Ve=i.div`
  grid-area: grid1;
`,Xe=i.div`
  grid-area: grid2;
`,Ye=i.div`
  grid-area: grid3;
`,Je=i.div`
  grid-area: grid4;
`,Ke=i.div`
  grid-area: grid5;
`,Oe=i.div`
  grid-area: grid6;
`,u=i.p`
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
`,w=i.div`
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
`,Qe=i.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`,Ze=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r})),$=i.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${r=>r.color};
`,C=i.span`
  margin-left: 8px;
`,D=i.div`
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
`,ei=({product:r,calories:n,amount:t})=>{const{blood:d}=l(G),a=l(k),s=y(),v=R=>{s(M({date:a,id:R}))},B=r.groupBloodNotAllowed[d];return e.jsxs(Ue,{children:[e.jsxs(Ve,{children:[e.jsx(u,{children:"Title"}),e.jsx(w,{children:e.jsx(D,{children:r.title})})]}),e.jsxs(Xe,{children:[e.jsx(u,{children:"Category"}),e.jsx(w,{children:e.jsx(D,{children:r.category})})]}),e.jsxs(Ye,{children:[e.jsx(u,{children:"Calories"}),e.jsx(w,{children:n})]}),e.jsxs(Je,{children:[e.jsx(u,{children:"Weight"}),e.jsx(w,{children:t})]}),e.jsxs(Ke,{children:[e.jsx(u,{children:"Recommend"}),e.jsx(w,{children:B?e.jsxs(e.Fragment,{children:[e.jsx($,{color:"#419B09"}),e.jsx(C,{children:"Yes"})]}):e.jsxs(e.Fragment,{children:[e.jsx($,{color:"#E9101D"}),e.jsx(C,{children:"No"})]})})]}),e.jsxs(Oe,{children:[e.jsx(u,{}),e.jsx(Qe,{onClick:()=>v(r._id),children:e.jsx(Ze,{iconColor:"#EF8964",children:e.jsx("use",{href:`${o}#icon-trash`})})})]})]},r._id)},ii=({consumedProducts:r})=>{const n=A(),t=()=>{n("/products")};return e.jsxs(Ae,{dimentionArea:r&&r.length>0?"true":"false",children:[e.jsxs(Ee,{children:[e.jsx(Ie,{children:"Products"}),e.jsx(E,{onClick:()=>t(),children:"Add"})]}),e.jsx(Se,{children:r&&r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(Be,{children:[e.jsx(Re,{children:"Title"}),e.jsx(Le,{children:"Category"}),e.jsx(Me,{children:"Calories"}),e.jsx(Ne,{children:"Weight"}),e.jsx(Pe,{children:"Recommend"}),e.jsx(He,{})]}),e.jsx(qe,{dimentionList:r&&r.length>0?"true":"false",children:r.map(d=>e.jsx(ei,{...d},F()))})]}):e.jsx(Fe,{children:"Not found products"})})]})},ri=i.div`
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
`,z=i.svg`
  width: 16px;
  height: 16px;
`,T=i.button`
  border: none;
  background-color: inherit;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,ti=i.div`
  display: flex;
  gap: 6px;
`,ni=V`
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
`,di=i.button`
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
`,ai=i.svg`
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
`;const oi=()=>{const r=y(),[n,t]=b.useState(Date.now());b.useEffect(()=>{r(N(_(n,"dd-MM-yyyy")))});const d=b.forwardRef(({onClick:a},s)=>e.jsxs(di,{onClick:a,ref:s,children:[_(n,"dd/MM/yyyy"),e.jsx(ai,{iconColor:"#EF8964",children:e.jsx("use",{href:`${o}#icon-calendar`})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(X,{styles:ni}),e.jsx(H,{selected:n,onChange:a=>{t(a)},customInput:e.jsx(d,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:a=>a.substring(0,1),maxDate:Date.now()})]})},si=()=>e.jsxs(ri,{children:[e.jsx(oi,{}),e.jsxs(ti,{children:[e.jsx(T,{type:"button",children:e.jsx(z,{iconColor:"#efede8",children:e.jsx("use",{href:`${o}#icon-left`})})}),e.jsx(T,{type:"button",children:e.jsx(z,{iconColor:"#efede8",children:e.jsx("use",{href:`${o}#icon-right`})})})]})]}),S=({title:r})=>e.jsx(q,{children:r});S.propTypes={title:W.string.isRequired};i.div`
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
`;const ci=i.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    padding-inline: 64px;
  }
`,li=i.div`
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
`,pi=i.div`
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
`,xi=i.div`
  grid-area: grid2;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 593px;
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,bi=()=>{const r=y(),n=l(k),t=l(I);return b.useEffect(()=>{r(P(n))},[n,r]),e.jsx(Y,{direction:"X",children:e.jsx(K,{children:e.jsxs(ci,{children:[e.jsx(S,{title:"Diary"}),e.jsx(si,{}),e.jsxs(li,{children:[e.jsxs(pi,{children:[e.jsx(ii,{consumedProducts:t.products}),e.jsx(Te,{consumedExercises:t.exercises})]}),e.jsxs(xi,{children:[e.jsx(ee,{}),e.jsx(U,{notice:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})]})})})};export{bi as default};
