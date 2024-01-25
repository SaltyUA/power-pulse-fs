import{t as R,q as L,j as e,b as p,i as I,a,u as _,w as P,x as E,y as H,e as y,z as W,A as k,C as q}from"./index-86b8137c.js";import{n as r}from"./emotion-styled.browser.esm-1f2083f2.js";import{A as F}from"./AddButton-b4b251af.js";import{e as O,P as U,T as V,N as X}from"./TitlePage.styled-5cb57bbd.js";import{c as Y,G as J}from"./emotion-react.browser.esm-becf16a7.js";import{P as K}from"./PageAnimatedWrapper-d1c824cf.js";import"./defineProperty-4681ad55.js";function S(i,n){const t=R(i);return isNaN(n)?L(i,NaN):(n&&t.setDate(t.getDate()+n),t)}function Q(i,n){return S(i,-n)}const Z=r.div`
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
`,re=i=>{switch(i.accent){case"true":return"#e6533c";case"false":return"rgba(239, 237, 232, 0.05)";default:return"rgba(239, 237, 232, 0.05)"}},x=r.li`
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
@media screen and (max-width: 374px){
width: calc((100% - 13px) / 2);
}

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
  }
`,g=r.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,h=r.svg({width:"20px",height:"20px"},({iconColor:i="#EF8964"})=>({fill:i,stroke:i})),te=i=>{switch(i.accent){case"true":return"rgba(239, 237, 232, 0.8)";case"false":return"rgba(239, 237, 232, 0.4)";default:return"rgba(239, 237, 232, 0.4)"}},m=r.p`
  font-size: 12px;
  font-weight: 400;
  color: ${te};
`,f=r.p`
  font-weight: 700;
  color: #efede8;
    font-size: 18px;
    
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,N=i=>i.diary.diaryInfo,C=i=>i.diary.choiceDate,ne=()=>{const i=p(I),n=p(N),t=i.dailyCalories&&n.caloriesConsumed?i.dailyCalories-n.caloriesConsumed:0,d=i.dailySportTime&&n.activity?Math.trunc(i.dailySportTime-n.activity/60):0,o=t<0?"red":"",c=t<0?"green":"";return e.jsxs(ie,{children:[e.jsxs(x,{accent:"true",children:[e.jsxs(g,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${a}#icon-food`})}),e.jsx(m,{accent:"true",children:"Daily calorie intake"})]}),e.jsx(f,{children:i.dailyCalories})]}),e.jsxs(x,{accent:"true",children:[e.jsxs(g,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${a}#icon-dumbbell`})}),e.jsx(m,{accent:"true",children:"Daily physical activity"})]}),e.jsxs(f,{children:[i.dailySportTime," min"]})]}),e.jsxs(x,{accent:"false",children:[e.jsxs(g,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${a}#icon-apple`})}),e.jsx(m,{accent:"false",children:"Calories consumed"})]}),e.jsx(f,{children:n.caloriesConsumed||0})]}),e.jsxs(x,{accent:"false",children:[e.jsxs(g,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${a}#icon-burn`})}),e.jsx(m,{accent:"false",children:"Calories burned"})]}),e.jsx(f,{children:n.caloriesBurned||0})]}),e.jsxs(x,{accent:"false",rest:o,children:[e.jsxs(g,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${a}#icon-bubble`})}),e.jsx(m,{accent:"false",children:"Calories remaining"})]}),e.jsx(f,{children:t})]}),e.jsxs(x,{accent:"false",rest:c,children:[e.jsxs(g,{children:[e.jsx(h,{iconColor:"#EF8964",children:e.jsx("use",{href:`${a}#icon-running`})}),e.jsx(m,{accent:"false",children:"Sports remaining"})]}),e.jsxs(f,{children:[d," min"]})]})]})},de=i=>{switch(i.dimentionArea){case"true":return"100%";case"false":return"335px";default:return"335px"}},ae=r.div`
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
`,ge=r.div`
  grid-area: grid2;
`,he=r.div`
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
`,be=i=>{switch(i.dimentionList){case"true":return"100%";case"false":return"335px";default:return"300px"}},ye=r.div`
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
`;let B=(i=21)=>crypto.getRandomValues(new Uint8Array(i)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");const ve=r.div`
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #efede8;
  display: grid;
   @media screen and (max-width: 374px) {
     grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr 20px;
  grid-template-rows: auto;
  grid-template-areas:
      'grid1 grid1 grid1 grid1'
    'grid2 grid2 grid2 grid2'
    'grid3 grid3 grid3 grid3'
    'grid4 grid5 grid6 grid7';
   }
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
`,Ce=r.div`
  grid-area: grid4;
`,De=r.div`
  grid-area: grid5;
`,ze=r.div`
  grid-area: grid6;
`,Te=r.div`
  grid-area: grid7;
`,l=r.p`
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
`,u=r.div`
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
`;const v=r.div`
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
`,Ie=({calories:i,time:n,exercise:t})=>{const d=p(C),o=_(),c=j=>{o(P({date:d,id:j}))};return e.jsxs(ve,{children:[e.jsxs(ke,{children:[e.jsx(l,{children:"Body part"}),e.jsx(u,{children:e.jsx(v,{children:t.bodyPart})})]}),e.jsxs(_e,{children:[e.jsx(l,{children:"Equipment"}),e.jsx(u,{children:e.jsx(v,{children:t.equipment})})]}),e.jsxs($e,{children:[e.jsx(l,{children:"Name"}),e.jsx(u,{children:e.jsx(v,{children:t.name})})]}),e.jsxs(Ce,{children:[e.jsx(l,{children:"Target"}),e.jsx(u,{children:e.jsx(v,{children:t.target})})]}),e.jsxs(De,{children:[e.jsx(l,{children:"Burned Calories"}),e.jsx(u,{children:i})]}),e.jsxs(ze,{children:[e.jsx(l,{children:"Time"}),e.jsx(u,{children:n})]}),e.jsxs(Te,{children:[e.jsx(l,{}),e.jsx(Ge,{onClick:()=>c(t._id),children:e.jsx(Ae,{children:e.jsx("use",{href:`${a}#icon-trash`})})})]})]},t._id)},Ee=({consumedExercises:i})=>{const n=E(),t=()=>{n("/exercises")};return e.jsxs(ae,{dimentionArea:i&&i.length>0?"true":"false",children:[e.jsxs(se,{children:[e.jsx(oe,{children:"Execrcises"}),e.jsx(F,{onClick:()=>t(),children:"Add exercise"})]}),e.jsx(le,{children:i&&i.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(pe,{children:[e.jsx(xe,{children:"Body Part"}),e.jsx(ge,{children:"Equipment"}),e.jsx(he,{children:"Name"}),e.jsx(me,{children:"Target"}),e.jsx(fe,{children:e.jsx(je,{children:"Burned Calories"})}),e.jsx(ue,{children:"Time"}),e.jsx(we,{})]}),e.jsx(ye,{dimentionList:i&&i.length>0?"true":"false",children:i.map(d=>e.jsx(Ie,{...d},B()))})]}):e.jsx(ce,{children:"Not found exercises"})})]})},Fe=i=>{switch(i.dimentionArea){case"true":return"100%";case"false":return"335px";default:return"335px"}},Se=r.div`
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
`,Ne=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Be=r.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,Me=r.p`
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
`,Re=r.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,Le=r.div`
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
`,Oe=r.div`
  grid-area: grid5;
`,Ue=r.div`
  grid-area: grid6;
`,Ve=i=>{switch(i.dimentionList){case"true":return"100%";case"false":return"335px";default:return"300px"}},Xe=r.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${Ve};
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
`,Ye=r.div`
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #efede8;
  display: grid;
   @media screen and (max-width: 374px) {
     grid-gap: 8px;
  grid-template-columns: 1fr 1fr 1fr 20px;
  grid-template-rows: auto;
  grid-template-areas:
    'grid1 grid1 grid1 grid1'
    'grid2 grid2 grid2 grid2'
    'grid3 grid4 grid5 grid6';
   }

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
`,Je=r.div`
  grid-area: grid1;
`,Ke=r.div`
  grid-area: grid2;
`,Qe=r.div`
  grid-area: grid3;
`,Ze=r.div`
  grid-area: grid4;
`,ei=r.div`
  grid-area: grid5;
`,ii=r.div`
  grid-area: grid6;
`,w=r.p`
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
`,b=r.div`
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
`,ti=r.svg({width:"20px",height:"20px"},({iconColor:i="#EF8964"})=>({fill:i,stroke:i})),D=r.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${i=>i.color};
`,z=r.span`
  margin-left: 8px;
`,T=r.div`
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
`,ni=({product:i,calories:n,amount:t})=>{const{blood:d}=p(I),o=p(C),c=_(),j=$=>{c(H({date:o,id:$}))},s=i.groupBloodNotAllowed[d];return e.jsxs(Ye,{children:[e.jsxs(Je,{children:[e.jsx(w,{children:"Title"}),e.jsx(b,{children:e.jsx(T,{children:i.title})})]}),e.jsxs(Ke,{children:[e.jsx(w,{children:"Category"}),e.jsx(b,{children:e.jsx(T,{children:i.category})})]}),e.jsxs(Qe,{children:[e.jsx(w,{children:"Calories"}),e.jsx(b,{children:n})]}),e.jsxs(Ze,{children:[e.jsx(w,{children:"Weight"}),e.jsx(b,{children:t})]}),e.jsxs(ei,{children:[e.jsx(w,{children:"Recommend"}),e.jsx(b,{children:s?e.jsxs(e.Fragment,{children:[e.jsx(D,{color:"#419B09"}),e.jsx(z,{children:"Yes"})]}):e.jsxs(e.Fragment,{children:[e.jsx(D,{color:"#E9101D"}),e.jsx(z,{children:"No"})]})})]}),e.jsxs(ii,{children:[e.jsx(w,{}),e.jsx(ri,{onClick:()=>j(i._id),children:e.jsx(ti,{iconColor:"#EF8964",children:e.jsx("use",{href:`${a}#icon-trash`})})})]})]},i._id)},di=({consumedProducts:i})=>{const n=E(),t=()=>{n("/products")};return e.jsxs(Se,{dimentionArea:i&&i.length>0?"true":"false",children:[e.jsxs(Ne,{children:[e.jsx(Be,{children:"Products"}),e.jsx(F,{onClick:()=>t(),children:"Add product"})]}),e.jsx(Re,{children:i&&i.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(Le,{children:[e.jsx(Pe,{children:"Title"}),e.jsx(He,{children:"Category"}),e.jsx(We,{children:"Calories"}),e.jsx(qe,{children:"Weight"}),e.jsx(Oe,{children:"Recommend"}),e.jsx(Ue,{})]}),e.jsx(Xe,{dimentionList:i&&i.length>0?"true":"false",children:i.map(d=>e.jsx(ni,{...d},B()))})]}):e.jsx(Me,{children:"Not found products"})})]})},ai=r.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 46px;
  // gap: 20px; 

  @media screen and (min-width: 768px) {
    top: 52px;
    // gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    right: 64px;
  }
`,G=r.svg`
  width: 16px;
  height: 16px;
`,A=r.button`
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
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`,oi=Y`
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
    @media screen and (max-width: 768px){
      left:-50px;
    }
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
`;const pi=({selectedDate:i,setSelectedDate:n})=>{const t=_(),[d,o]=y.useState(!1);y.useEffect(()=>{t(W(k(i,"dd-MM-yyyy")))});const c=s=>{s.target.tagName.toLowerCase()!=="button"&&o(!1)},j=y.forwardRef(({onClick:s},$)=>e.jsxs(ci,{onClick:()=>{o(!d),s()},ref:$,children:[k(i,"dd/MM/yyyy"),e.jsx(li,{iconColor:"#EF8964",children:e.jsx("use",{href:`${a}#calendar`})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(J,{styles:oi}),e.jsx(O,{selected:i,onChange:s=>{n(s)},open:d,onClickOutside:c,customInput:e.jsx(j,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:s=>s.substring(0,1),maxDate:Date.now()})]})},xi=()=>{const[i,n]=y.useState(Date.now()),t=d=>{n(d)};return e.jsxs(ai,{children:[e.jsx(pi,{selectedDate:i,setSelectedDate:n}),e.jsxs(si,{children:[e.jsx(A,{type:"button",onClick:()=>t(Q(i,1)),children:e.jsx(G,{iconColor:"#efede8",children:e.jsx("use",{href:`${a}#icon-left`})})}),e.jsx(A,{type:"button",onClick:()=>t(k(Date.now(),"ddMMyyyy")===k(i,"ddMMyyyy")?i:S(i,1)),children:e.jsx(G,{iconColor:"#efede8",children:e.jsx("use",{href:`${a}#icon-right`})})})]})]})},M=({title:i})=>e.jsx(V,{children:i});M.propTypes={title:U.string.isRequired};r.div`
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
`;const gi=r.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    padding-inline: 64px;
  }
`,hi=r.div`
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
  max-width: 335px;
  gap: 40px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 826px;
    width:826px;
  }
`,fi=r.div`
  grid-area: grid2;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 593px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`,_i=()=>{const i=_(),n=p(C),t=p(N);return y.useEffect(()=>{i(q(n))},[n,i]),e.jsx(K,{direction:"X",children:e.jsx(ee,{children:e.jsxs(gi,{children:[e.jsx(M,{title:"Diary"}),e.jsx(xi,{}),e.jsxs(hi,{children:[e.jsxs(mi,{children:[e.jsx(di,{consumedProducts:t.products}),e.jsx(Ee,{consumedExercises:t.exercises})]}),e.jsxs(fi,{children:[e.jsx(ne,{}),e.jsx(X,{notice:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})]})})})};export{_i as default};
