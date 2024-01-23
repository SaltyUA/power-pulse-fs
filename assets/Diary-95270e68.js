import{j as e,a as d,c as b,u as y,q as E,t as z,w as I,f as j,x as F,y as _,z as S}from"./index-b27a598b.js";import{n as i}from"./emotion-styled.browser.esm-f2f10d1c.js";import{A as T}from"./AddButton-64863183.js";import{e as B,P as R,T as L,N as P}from"./TitlePage.styled-615aa4c8.js";import{c as M,G as N}from"./emotion-react.browser.esm-f94a7459.js";import{P as H}from"./PageAnimatedWrapper-443d4ee4.js";import"./defineProperty-4681ad55.js";const W=i.div`
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
`,q=({children:r})=>e.jsx(W,{children:r}),U=i.ul`
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
`,V=r=>{switch(r.accent){case"true":return"#e6533c";case"false":return"rgba(239, 237, 232, 0.05)";default:return"rgba(239, 237, 232, 0.05)"}},X=r=>{switch(r.borderColor){case"red":return"#E9101D";case"green":return"#3CBF61";case"default":return"rgba(239, 237, 232, 0.2)";default:return"rgba(239, 237, 232, 0.2)"}},c=i.li`
  border: 1px solid;
  border-color: ${X};
  border-radius: 12px;
  background-color: ${V};
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
`,p=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,l=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r})),Y=r=>{switch(r.accent){case"true":return"rgba(239, 237, 232, 0.8)";case"false":return"rgba(239, 237, 232, 0.4)";default:return"rgba(239, 237, 232, 0.4)"}},x=i.p`
  font-size: 12px;
  font-weight: 400;
  color: ${Y};
`,h=i.p`
  font-weight: 700;
  color: #efede8;
    font-size: 18px;
    
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,J=()=>e.jsxs(U,{children:[e.jsxs(c,{accent:"true",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-food`})}),e.jsx(x,{accent:"true",children:"Daily calorie intake"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"true",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-dumbbell`})}),e.jsx(x,{accent:"true",children:"Daily physical activity"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"false",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-apple`})}),e.jsx(x,{accent:"false",children:"Calories consumed"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"false",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-burn`})}),e.jsx(x,{accent:"false",children:"Calories burned"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"false",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-bubble`})}),e.jsx(x,{accent:"false",children:"Calories remaining"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"false",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-running`})}),e.jsx(x,{accent:"false",children:"Sports remaining"})]}),e.jsx(h,{children:"..."})]})]}),K=r=>{switch(r.dimentionArea){case"true":return"1010px";case"false":return"335px";default:return"335px"}},O=i.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  height: ${K};
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    height: 234px;
    padding-right: 16px;
  }
`,Q=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Z=i.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,ee=i.p`
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
`,ie=i.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,re=i.div`
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
`,te=i.div`
  grid-area: grid1;
`,ne=i.div`
  grid-area: grid2;
`,de=i.div`
  grid-area: grid3;
`,ae=i.div`
  grid-area: grid4;
`,oe=i.div`
  grid-area: grid5;
`,se=i.div`
  grid-area: grid6;
`,ce=i.div`
  grid-area: grid7;
`,pe=i.div`
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
`,le=r=>{switch(r.dimentionList){case"true":return"930px";case"false":return"335px";default:return"300px"}},xe=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${le};
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
`;let G=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");const he=i.div`
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
`,ge=i.div`
  grid-area: grid1;
`,me=i.div`
  grid-area: grid2;
`,fe=i.div`
  grid-area: grid3;
`,ue=i.div`
  grid-area: grid4;
`,we=i.div`
  grid-area: grid5;
`,je=i.div`
  grid-area: grid6;
`,be=i.div`
  grid-area: grid7;
`,s=i.p`
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
`,g=i.div`
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
`,ye=i.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`,ve=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r}));i.span`
  margin-left: 8px;
`;const w=i.div`
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
`,ke=r=>r.diary.diaryInfo,k=r=>r.diary.choiceDate,_e=({calories:r,time:n,exercise:t})=>{const a=b(k),o=y(),f=v=>{o(E({date:a,id:v}))};return e.jsxs(he,{children:[e.jsxs(ge,{children:[e.jsx(s,{children:"Body part"}),e.jsx(g,{children:e.jsx(w,{children:t.bodyPart})})]}),e.jsxs(me,{children:[e.jsx(s,{children:"Equipment"}),e.jsx(g,{children:e.jsx(w,{children:t.equipment})})]}),e.jsxs(fe,{children:[e.jsx(s,{children:"Name"}),e.jsx(g,{children:e.jsx(w,{children:t.name})})]}),e.jsxs(ue,{children:[e.jsx(s,{children:"Target"}),e.jsx(g,{children:e.jsx(w,{children:t.target})})]}),e.jsxs(we,{children:[e.jsx(s,{children:"Burned Calories"}),e.jsx(g,{children:r})]}),e.jsxs(je,{children:[e.jsx(s,{children:"Time"}),e.jsx(g,{children:n})]}),e.jsxs(be,{children:[e.jsx(s,{}),e.jsx(ye,{onClick:()=>f(t._id),children:e.jsx(ve,{children:e.jsx("use",{href:`${d}#icon-trash`})})})]})]},t._id)},$e=({consumedExercises:r})=>{const n=z(),t=()=>{n("/exercises")};return e.jsxs(O,{dimentionArea:r&&r.length>0?"true":"false",children:[e.jsxs(Q,{children:[e.jsx(Z,{children:"Execrcises"}),e.jsx(T,{onClick:()=>t(),children:"Add"})]}),e.jsx(ie,{children:r&&r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(re,{children:[e.jsx(te,{children:"Body Part"}),e.jsx(ne,{children:"Equipment"}),e.jsx(de,{children:"Name"}),e.jsx(ae,{children:"Target"}),e.jsx(oe,{children:e.jsx(pe,{children:"Burned Calories"})}),e.jsx(se,{children:"Time"}),e.jsx(ce,{})]}),e.jsx(xe,{dimentionList:r&&r.length>0?"true":"false",children:r.map(a=>e.jsx(_e,{...a},G()))})]}):e.jsx(ee,{children:"Not found exercises"})})]})},De=r=>{switch(r.dimentionArea){case"true":return"780px";case"false":return"335px";default:return"335px"}},Ce=i.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  height: ${De};
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    height: 234px;
    padding-right: 16px;
  }
`,ze=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Te=i.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,Ge=i.p`
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
`,Ae=i.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,Ee=i.div`
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
`,Ie=i.div`
  grid-area: grid1;
`,Fe=i.div`
  grid-area: grid2;
`,Se=i.div`
  grid-area: grid3;
`,Be=i.div`
  grid-area: grid4;
`,Re=i.div`
  grid-area: grid5;
`,Le=i.div`
  grid-area: grid6;
`,Pe=r=>{switch(r.dimentionList){case"true":return"700px";case"false":return"335px";default:return"300px"}},Me=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${Pe};
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
`,Ne=i.div`
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
`,He=i.div`
  grid-area: grid1;
`,We=i.div`
  grid-area: grid2;
`,qe=i.div`
  grid-area: grid3;
`,Ue=i.div`
  grid-area: grid4;
`,Ve=i.div`
  grid-area: grid5;
`,Xe=i.div`
  grid-area: grid6;
`,m=i.p`
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
`,u=i.div`
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
`,Ye=i.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`,Je=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r})),Ke=i.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${r=>r.color};
`,Oe=i.span`
  margin-left: 8px;
`,$=i.div`
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
`,Qe=({product:r,calories:n,amount:t})=>{const a=b(k),o=y(),f=v=>{o(I({date:a,id:v}))};return e.jsxs(Ne,{children:[e.jsxs(He,{children:[e.jsx(m,{children:"Title"}),e.jsx(u,{children:e.jsx($,{children:r.title})})]}),e.jsxs(We,{children:[e.jsx(m,{children:"Category"}),e.jsx(u,{children:e.jsx($,{children:r.category})})]}),e.jsxs(qe,{children:[e.jsx(m,{children:"Calories"}),e.jsx(u,{children:n})]}),e.jsxs(Ue,{children:[e.jsx(m,{children:"Weight"}),e.jsx(u,{children:t})]}),e.jsxs(Ve,{children:[e.jsx(m,{children:"Recommend"}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsx(Ke,{color:"#419B09"}),e.jsx(Oe,{children:"Yes"})]})})]}),e.jsxs(Xe,{children:[e.jsx(m,{}),e.jsx(Ye,{onClick:()=>f(r._id),children:e.jsx(Je,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-trash`})})})]})]},r._id)},Ze=({consumedProducts:r})=>{const n=z(),t=()=>{n("/products")};return e.jsxs(Ce,{dimentionArea:r&&r.length>0?"true":"false",children:[e.jsxs(ze,{children:[e.jsx(Te,{children:"Products"}),e.jsx(T,{onClick:()=>t(),children:"Add"})]}),e.jsx(Ae,{children:r&&r.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(Ee,{children:[e.jsx(Ie,{children:"Title"}),e.jsx(Fe,{children:"Category"}),e.jsx(Se,{children:"Calories"}),e.jsx(Be,{children:"Weight"}),e.jsx(Re,{children:"Recommend"}),e.jsx(Le,{})]}),e.jsx(Me,{dimentionList:r&&r.length>0?"true":"false",children:r.map(a=>e.jsx(Qe,{...a},G()))})]}):e.jsx(Ge,{children:"Not found products"})})]})},ei=i.div`
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
`,D=i.svg`
  width: 16px;
  height: 16px;
`,C=i.button`
  border: none;
  background-color: inherit;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,ii=i.div`
  display: flex;
  gap: 6px;
`,ri=M`
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
`,ti=i.button`
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
`,ni=i.svg`
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
`;const di=()=>{const r=y(),[n,t]=j.useState(Date.now());j.useEffect(()=>{r(F(_(n,"dd-MM-yyyy")))});const a=j.forwardRef(({onClick:o},f)=>e.jsxs(ti,{onClick:o,ref:f,children:[_(n,"dd/MM/yyyy"),e.jsx(ni,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-calendar`})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(N,{styles:ri}),e.jsx(B,{selected:n,onChange:o=>{t(o)},customInput:e.jsx(a,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:o=>o.substring(0,1),maxDate:Date.now()})]})},ai=()=>e.jsxs(ei,{children:[e.jsx(di,{}),e.jsxs(ii,{children:[e.jsx(C,{type:"button",children:e.jsx(D,{iconColor:"#efede8",children:e.jsx("use",{href:`${d}#icon-left`})})}),e.jsx(C,{type:"button",children:e.jsx(D,{iconColor:"#efede8",children:e.jsx("use",{href:`${d}#icon-right`})})})]})]}),A=({title:r})=>e.jsx(L,{children:r});A.propTypes={title:R.string.isRequired};i.div`
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
`;const oi=i.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    padding-inline: 64px;
  }
`,si=i.div`
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
`,ci=i.div`
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
`,pi=i.div`
  grid-area: grid2;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 593px;
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,wi=()=>{const r=y(),n=b(k),t=b(ke);return j.useEffect(()=>{r(S(n))},[n,r]),e.jsx(H,{direction:"X",children:e.jsx(q,{children:e.jsxs(oi,{children:[e.jsx(A,{title:"Diary"}),e.jsx(ai,{}),e.jsxs(si,{children:[e.jsxs(ci,{children:[e.jsx(Ze,{consumedProducts:t.products}),e.jsx($e,{consumedExercises:t.exercises})]}),e.jsxs(pi,{children:[e.jsx(J,{}),e.jsx(P,{notice:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})]})})})};export{wi as default};
