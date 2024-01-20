import{b as u,j as e,a as z,u as P,e as p,E as N,c as E,F as S,G as L}from"./index-9afd0cea.js";import{n as h}from"./emotion-styled.browser.esm-41e2c334.js";import{P as B}from"./PageAnimatedWrapper-ca2362c4.js";const q=u.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,j=u.li`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #EF8964;
  }

  &.active {
    color: #efede8;
  }
`,b=u.button`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;

  background-color: var(--black-color);

  &.active {
    color: #efede8;
  }
`,W=({activeFilter:s,handleFilterClick:o})=>e.jsxs(q,{children:[e.jsx(j,{className:s==="Body parts"?"active":"",children:e.jsx(b,{type:"button",onClick:()=>o("Body parts"),className:s==="Body parts"?"active":"",children:"Body parts"})}),e.jsx(j,{className:s==="Muscles"?"active":"",children:e.jsx(b,{type:"button",onClick:()=>o("Muscles"),className:s==="Muscles"?"active":"",children:"Muscles"})}),e.jsx(j,{className:s==="Equipment"?"active":"",children:e.jsx(b,{type:"button",onClick:()=>o("Equipment"),className:s==="Equipment"?"active":"",children:"Equipment"})})]}),y=u.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    justify-content: start;
    column-gap: 22px;
  }
`,M=h.li`
  position: relative;
  cursor: pointer;
`,O=h.img`
  display: block;
  width: 100%;
  height: 206px;
  height: auto;
  border: 1px #efede8;
  border-radius: 12px;

  filter: brightness(40%);

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 206px;
  }

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }
`,F=h.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
`,R=h.h3`
  font-size: 20px;
  line-height: 1.2;

  color: var(--white-color);

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,T=h.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,U="/power-pulse-fs/assets/0-default-fa91a1ec.jpg",v=({exercisesItem:s,handleFilterClick:o,handleSetExName:c})=>{const{name:i,filter:a,imgURL:l}=s,d=r=>{o("Waist"),c(r)},t=r=>r.slice(0,1).toUpperCase()+r.slice(1);return e.jsxs(M,{onClick:()=>d(i),children:[e.jsx(O,{src:l||U,alt:i}),e.jsxs(F,{children:[e.jsx(R,{children:t(i)}),e.jsx(T,{children:a})]})]})},_=s=>s.exercises.bodyParts,A=s=>s.exercises.equipment,$=s=>s.exercises.muscles,I=u.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 90px;
  height: 100vh;

  ul.pagination {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    margin-top: 32px;
  }

  li.page-item {
    margin: 0 4px;
  }

  button.page-link {
    border: none;
    background-color: #fff;
    padding: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button.page-link:not(.active) {
    background-color: rgba(239, 237, 232, 0.1);
  }

  li.page-item.active button.page-link {
    padding: 0;
    background-color: #E6533C;
  }

  li.page-item.active button.page-link svg {
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    justify-content: baseline;
    height: 100%;
  }
`,D=u.li`
  margin-top: 32px;
`,C=({itemsPerPage:s,totalItems:o,currentPage:c,onPageChange:i})=>{const a=Math.ceil(o/s),l=t=>{t>=1&&t<=a&&i(t)},d=()=>{const t=[];for(let r=1;r<=a;r++)t.push(e.jsx(D,{className:`page-item ${r===c?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>l(r),children:[r,r===c&&e.jsx("svg",{children:e.jsx("use",{href:`${z}#pagination-btn`})})]})},r));return t};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:d()})})},G=({handleSetExName:s,handleFilterClick:o})=>{const c=P();p.useEffect(()=>{c(N())},[c]);const i=E(_);console.log(i);const[a,l]=p.useState(1),d=()=>{const n=window.innerWidth;return n>=768&&n<=1439?9:10},[t,r]=p.useState(d),x=()=>{r(d())};p.useEffect(()=>(window.addEventListener("resize",x),x(),()=>{window.removeEventListener("resize",x)}));const f=n=>{l(n)},g=a*t,w=g-t,m=i.slice(w,g);return console.log(m),e.jsxs(I,{children:[e.jsx(y,{children:m.map(n=>e.jsx(v,{exercisesItem:n,handleFilterClick:o,handleSetExName:s},n._id))}),t<i.length&&e.jsx(C,{itemsPerPage:t,totalItems:i.length,currentPage:a,onPageChange:f})]})},X=({handleSetExName:s,handleFilterClick:o})=>{const c=P();p.useEffect(()=>{c(S())},[c]);const i=E($);console.log(i);const[a,l]=p.useState(1),d=()=>{const n=window.innerWidth;return n>=768&&n<=1439?9:10},[t,r]=p.useState(d),x=()=>{r(d())};p.useEffect(()=>(window.addEventListener("resize",x),x(),()=>{window.removeEventListener("resize",x)}));const f=n=>{l(n)},g=a*t,w=g-t,m=i.slice(w,g);return e.jsxs(I,{children:[e.jsx(y,{children:m.map(n=>e.jsx(v,{exercisesItem:n,handleFilterClick:o,handleSetExName:s},n._id))}),t<i.length&&e.jsx(C,{itemsPerPage:t,totalItems:i.length,currentPage:a,onPageChange:f})]})},H=({handleSetExName:s,handleFilterClick:o})=>{const c=P();p.useEffect(()=>{c(L())},[c]);const i=E(A);console.log(i);const[a,l]=p.useState(1),d=()=>{const n=window.innerWidth;return n>=768&&n<=1439?9:10},[t,r]=p.useState(d),x=()=>{r(d())};p.useEffect(()=>(window.addEventListener("resize",x),x(),()=>{window.removeEventListener("resize",x)}));const f=n=>{l(n)},g=a*t,w=g-t,m=i.slice(w,g);return e.jsxs(I,{children:[e.jsx(y,{children:m.map(n=>e.jsx(v,{exercisesItem:n,handleFilterClick:o,handleSetExName:s},n._id))}),t<i.length&&e.jsx(C,{itemsPerPage:t,totalItems:i.length,currentPage:a,onPageChange:f})]})},J=h.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`,K=h.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,k=h.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,Z=()=>{const[s,o]=p.useState("Body parts"),[c,i]=p.useState(""),a=t=>{i(t)},l=t=>{o(t)},d=t=>t.slice(0,1).toUpperCase()+t.slice(1);return e.jsx(B,{direction:"X",children:e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(k,{children:"Exercises"}),e.jsx(k,{children:d(c)}),e.jsx(W,{activeFilter:s,handleFilterClick:l})]}),s==="Body parts"&&e.jsx(G,{handleFilterClick:l,handleSetExName:a}),s==="Muscles"&&e.jsx(X,{handleFilterClick:l,handleSetExName:a}),s==="Equipment"&&e.jsx(H,{handleFilterClick:l,handleSetExName:a})]})})};export{Z as default};
