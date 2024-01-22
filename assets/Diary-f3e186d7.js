import{j as e,a as d,b,u as y,q as E,t as C,w as A,e as j,x as I,y as $,z as F}from"./index-8315254f.js";import{n as i}from"./emotion-styled.browser.esm-3ff42e42.js";import{e as S,P,T as B,N as R}from"./TitlePage.styled-9758b4fd.js";import{c as M,G as L}from"./emotion-react.browser.esm-479403ba.js";import{P as N}from"./PageAnimatedWrapper-51f0f7f5.js";import"./defineProperty-4681ad55.js";const H=i.div`
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
`,W=({children:r})=>e.jsx(H,{children:r}),q=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 375px) {
    height: 328px;
    margin-bottom: 20px;
    row-gap: 20px;
    column-gap: 13px;
  }
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
`,U=r=>{switch(r.accent){case"true":return"#e6533c";case"false":return"rgba(239, 237, 232, 0.05)";default:return"rgba(239, 237, 232, 0.05)"}},c=i.li`
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: ${U};
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 375px) {
    width: 161px;
    height: 96px;
  }
  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
  }
`,p=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,l=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r})),V=r=>{switch(r.accent){case"true":return"rgba(239, 237, 232, 0.8)";case"false":return"rgba(239, 237, 232, 0.4)";default:return"rgba(239, 237, 232, 0.4)"}},x=i.p`
  font-size: 12px;
  font-weight: 400;
  color: ${V};
`,h=i.p`
  font-weight: 700;
  color: #efede8;
  @media screen and (min-width: 375px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,X=()=>e.jsxs(q,{children:[e.jsxs(c,{accent:"true",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-food`})}),e.jsx(x,{accent:"true",children:"Daily calorie intake"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"true",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-dumbbell`})}),e.jsx(x,{accent:"true",children:"Daily physical activity"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"false",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-apple`})}),e.jsx(x,{accent:"false",children:"Calories consumed"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"false",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-burn`})}),e.jsx(x,{accent:"false",children:"Calories burned"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"false",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-bubble`})}),e.jsx(x,{accent:"false",children:"Calories remaining"})]}),e.jsx(h,{children:"..."})]}),e.jsxs(c,{accent:"false",children:[e.jsxs(p,{children:[e.jsx(l,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-running`})}),e.jsx(x,{accent:"false",children:"Sports remaining"})]}),e.jsx(h,{children:"..."})]})]}),Y=r=>{switch(r.dimentionArea){case"true":return"1010px";case"false":return"335px";default:return"335px"}},J=i.div`
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 16px;
  height: ${Y};
  padding-right: 8px;

  @media screen and (min-width: 768px) {
    height: 234px;
    padding-right: 16px;
  }
`,K=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,O=i.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,Q=i.button`
  background-color: inherit;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
`,Z=i.p`
  font-weight: 500;
  color: #e6533c;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #efede8;
  }

  &:hover,
  &:focus {
    color: #efede8;
  }
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ee=i.svg({width:"16px",height:"16px"},({iconColor:r="#e6533c"})=>({fill:r,stroke:r})),ie=i.p`
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
`,re=i.div`
  @media screen and (min-width: 1440px) {
    padding-left: 16px;
  }
`,te=i.div`
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
`,ne=i.div`
  grid-area: grid1;
`,de=i.div`
  grid-area: grid2;
`,ae=i.div`
  grid-area: grid3;
`,oe=i.div`
  grid-area: grid4;
`,se=i.div`
  grid-area: grid5;
`,ce=i.div`
  grid-area: grid6;
`,pe=i.div`
  grid-area: grid7;
`,le=i.div`
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
`,xe=r=>{switch(r.dimentionList){case"true":return"930px";case"false":return"335px";default:return"300px"}},he=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: ${xe};
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
`;let T=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");const ge=i.div`
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
`,me=i.div`
  grid-area: grid1;
`,fe=i.div`
  grid-area: grid2;
`,ue=i.div`
  grid-area: grid3;
`,we=i.div`
  grid-area: grid4;
`,je=i.div`
  grid-area: grid5;
`,be=i.div`
  grid-area: grid6;
`,ye=i.div`
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
`,ve=i.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`,ke=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r}));i.span`
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
`,$e=r=>r.diary.diaryInfo,k=r=>r.diary.choiceDate,_e=({calories:r,time:n,exercise:t})=>{const a=b(k),o=y(),f=v=>{o(E({date:a,id:v}))};return e.jsxs(ge,{children:[e.jsxs(me,{children:[e.jsx(s,{children:"Body part"}),e.jsx(g,{children:e.jsx(w,{children:t.bodyPart})})]}),e.jsxs(fe,{children:[e.jsx(s,{children:"Equipment"}),e.jsx(g,{children:e.jsx(w,{children:t.equipment})})]}),e.jsxs(ue,{children:[e.jsx(s,{children:"Name"}),e.jsx(g,{children:e.jsx(w,{children:t.name})})]}),e.jsxs(we,{children:[e.jsx(s,{children:"Target"}),e.jsx(g,{children:e.jsx(w,{children:t.target})})]}),e.jsxs(je,{children:[e.jsx(s,{children:"Burned Calories"}),e.jsx(g,{children:r})]}),e.jsxs(be,{children:[e.jsx(s,{children:"Time"}),e.jsx(g,{children:n})]}),e.jsxs(ye,{children:[e.jsx(s,{}),e.jsx(ve,{onClick:()=>f(t._id),children:e.jsx(ke,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-trash`})})})]})]},t._id)},ze=({consumedExercises:r})=>{const n=C(),t=()=>{n("/exercises")};return e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(O,{children:"Execrcises"}),e.jsxs(Q,{onClick:()=>t(),children:[e.jsx(Z,{children:"Add exercise"}),e.jsx(ee,{iconColor:"#E6533C",children:e.jsx("use",{href:`${d}#icon-start-arrow`})})]})]}),e.jsx(re,{children:e.jsxs(te,{children:[e.jsx(ne,{children:"Body Part"}),e.jsx(de,{children:"Equipment"}),e.jsx(ae,{children:"Name"}),e.jsx(oe,{children:"Target"}),e.jsx(se,{children:e.jsx(le,{children:"Burned Calories"})}),e.jsx(ce,{children:"Time"}),e.jsx(pe,{})]})}),r&&r.length>0?e.jsx(he,{children:r.map(a=>e.jsx(_e,{...a},T()))}):e.jsx(ie,{children:"Not found exercises"})]})},De=r=>{switch(r.dimentionArea){case"true":return"780px";case"false":return"335px";default:return"335px"}},Ce=i.div`
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
`,Te=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,Ge=i.h3`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 237, 232, 0.5);
`,Ee=i.button`
  background-color: inherit;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
`,Ae=i.p`
  font-weight: 500;
  color: #e6533c;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-size: 14px;

  &:hover,
  &:focus {
    color: #efede8;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  &:hover {
    color: #efede8;
  }
`,Ie=i.svg({width:"16px",height:"16px"},({iconColor:r="#e6533c"})=>({fill:r,stroke:r})),Fe=i.p`
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
`,Pe=i.div`
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
`,Be=i.div`
  grid-area: grid1;
`,Re=i.div`
  grid-area: grid2;
`,Me=i.div`
  grid-area: grid3;
`,Le=i.div`
  grid-area: grid4;
`,Ne=i.div`
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
`,Qe=i.button`
  width: auto;
  background-color: inherit;
  border-radius: 12px;
  border: none;
  padding-inline: 0;
`,Ze=i.svg({width:"20px",height:"20px"},({iconColor:r="#EF8964"})=>({fill:r,stroke:r})),ei=i.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background: ${r=>r.color};
`,ii=i.span`
  margin-left: 8px;
`,_=i.div`
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
`,ri=({product:r,calories:n,amount:t})=>{const a=b(k),o=y(),f=v=>{o(A({date:a,id:v}))};return e.jsxs(Ue,{children:[e.jsxs(Ve,{children:[e.jsx(m,{children:"Title"}),e.jsx(u,{children:e.jsx(_,{children:r.title})})]}),e.jsxs(Xe,{children:[e.jsx(m,{children:"Category"}),e.jsx(u,{children:e.jsx(_,{children:r.category})})]}),e.jsxs(Ye,{children:[e.jsx(m,{children:"Calories"}),e.jsx(u,{children:n})]}),e.jsxs(Je,{children:[e.jsx(m,{children:"Weight"}),e.jsx(u,{children:t})]}),e.jsxs(Ke,{children:[e.jsx(m,{children:"Recommend"}),e.jsx(u,{children:e.jsxs(e.Fragment,{children:[e.jsx(ei,{color:"#419B09"}),e.jsx(ii,{children:"Yes"})]})})]}),e.jsxs(Oe,{children:[e.jsx(m,{}),e.jsx(Qe,{onClick:()=>f(r._id),children:e.jsx(Ze,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-trash`})})})]})]},r._id)},ti=({consumedProducts:r})=>{const n=C(),t=()=>{n("/products")};return e.jsxs(Ce,{children:[e.jsxs(Te,{children:[e.jsx(Ge,{children:"Products"}),e.jsxs(Ee,{onClick:()=>t(),children:[e.jsx(Ae,{children:"Add product"}),e.jsx(Ie,{iconColor:"#E6533C",children:e.jsx("use",{href:`${d}#icon-start-arrow`})})]})]}),e.jsx(Se,{children:e.jsxs(Pe,{children:[e.jsx(Be,{children:"Title"}),e.jsx(Re,{children:"Category"}),e.jsx(Me,{children:"Calories"}),e.jsx(Le,{children:"Weight"}),e.jsx(Ne,{children:"Recommend"}),e.jsx(He,{})]})}),r&&r.length>0?e.jsx(qe,{children:r.map(a=>e.jsx(ri,{...a},T()))}):e.jsx(Fe,{children:"Not found products"})]})},ni=i.div`
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
`,D=i.button`
  border: none;
  background-color: inherit;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,di=i.div`
  display: flex;
  gap: 6px;
`,ai=M`
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
`,oi=i.button`
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
`,si=i.svg`
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
`;const ci=()=>{const r=y(),[n,t]=j.useState(Date.now());j.useEffect(()=>{r(I($(n,"dd-MM-yyyy")))});const a=j.forwardRef(({onClick:o},f)=>e.jsxs(oi,{onClick:o,ref:f,children:[$(n,"dd/MM/yyyy"),e.jsx(si,{iconColor:"#EF8964",children:e.jsx("use",{href:`${d}#icon-calendar`})})]}));return e.jsxs(e.Fragment,{children:[e.jsx(L,{styles:ai}),e.jsx(S,{selected:n,onChange:o=>{t(o)},customInput:e.jsx(a,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:o=>o.substring(0,1),maxDate:Date.now()})]})},pi=()=>e.jsxs(ni,{children:[e.jsx(ci,{}),e.jsxs(di,{children:[e.jsx(D,{type:"button",children:e.jsx(z,{iconColor:"#efede8",children:e.jsx("use",{href:`${d}#icon-left`})})}),e.jsx(D,{type:"button",children:e.jsx(z,{iconColor:"#efede8",children:e.jsx("use",{href:`${d}#icon-right`})})})]})]}),G=({title:r})=>e.jsx(B,{children:r});G.propTypes={title:P.string.isRequired};const li=i.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    padding-inline: 64px;
  }
`,xi=i.div`
  display: flex;
  @media screen and (min-width: 375px) {
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
  }
  @media screen and (min-width: 768px) {
    gap: 64px;
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`,hi=i.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 375px) {
    width: 335px;
    gap: 40px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,gi=i.div`
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 593px;
  }
  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,yi=()=>{const r=y(),n=b(k),t=b($e);return j.useEffect(()=>{r(F(n))},[n,r]),e.jsx(N,{direction:"X",children:e.jsx(W,{children:e.jsxs(li,{children:[e.jsx(G,{title:"Diary"}),e.jsx(pi,{}),e.jsxs(xi,{children:[e.jsxs(hi,{children:[e.jsx(ti,{consumedProducts:t.products}),e.jsx(ze,{consumedExercises:t.exercises})]}),e.jsxs(gi,{children:[e.jsx(X,{}),e.jsx(R,{notice:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})]})})})};export{yi as default};
