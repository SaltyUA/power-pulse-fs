import{s as u,j as e,u as E,a as p,p as z,k as P,q as N,t as S}from"./index-643e852d.js";import{n as h}from"./emotion-styled.browser.esm-899a0bfa.js";import{s as L}from"./sprite-fd06f3ef.js";const q=u.ul`
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
`,B=({activeFilter:s,handleFilterClick:a})=>e.jsxs(q,{children:[e.jsx(j,{className:s==="Body parts"?"active":"",children:e.jsx(b,{type:"button",onClick:()=>a("Body parts"),className:s==="Body parts"?"active":"",children:"Body parts"})}),e.jsx(j,{className:s==="Muscles"?"active":"",children:e.jsx(b,{type:"button",onClick:()=>a("Muscles"),className:s==="Muscles"?"active":"",children:"Muscles"})}),e.jsx(j,{className:s==="Equipment"?"active":"",children:e.jsx(b,{type:"button",onClick:()=>a("Equipment"),className:s==="Equipment"?"active":"",children:"Equipment"})})]}),y=u.ul`
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
`,W=h.img`
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
`,O=h.div`
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
`,F=h.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,T="/power-pulse-fs/assets/0-default-fa91a1ec.jpg",v=({exercisesItem:s,handleFilterClick:a,handleSetExName:c})=>{const{name:i,filter:o,imgURL:l}=s,d=r=>{a("Waist"),c(r)},t=r=>r.slice(0,1).toUpperCase()+r.slice(1);return e.jsxs(M,{onClick:()=>d(i),children:[e.jsx(W,{src:l||T,alt:i}),e.jsxs(O,{children:[e.jsx(R,{children:t(i)}),e.jsx(F,{children:o})]})]})},U=s=>s.exercises.bodyParts,_=s=>s.exercises.equipment,$=s=>s.exercises.muscles,I=u.div`
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
`,A=u.li`
  margin-top: 32px;
`,C=({itemsPerPage:s,totalItems:a,currentPage:c,onPageChange:i})=>{const o=Math.ceil(a/s),l=t=>{t>=1&&t<=o&&i(t)},d=()=>{const t=[];for(let r=1;r<=o;r++)t.push(e.jsx(A,{className:`page-item ${r===c?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>l(r),children:[r,r===c&&e.jsx("svg",{children:e.jsx("use",{href:`${L}#pagination-btn`})})]})},r));return t};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:d()})})},D=({handleSetExName:s,handleFilterClick:a})=>{const c=E();p.useEffect(()=>{c(z())},[c]);const i=P(U);console.log(i);const[o,l]=p.useState(1),d=()=>{const n=window.innerWidth;return n>=768&&n<=1439?9:10},[t,r]=p.useState(d),x=()=>{r(d())};p.useEffect(()=>(window.addEventListener("resize",x),x(),()=>{window.removeEventListener("resize",x)}));const f=n=>{l(n)},g=o*t,w=g-t,m=i.slice(w,g);return console.log(m),e.jsxs(I,{children:[e.jsx(y,{children:m.map(n=>e.jsx(v,{exercisesItem:n,handleFilterClick:a,handleSetExName:s},n._id))}),t<i.length&&e.jsx(C,{itemsPerPage:t,totalItems:i.length,currentPage:o,onPageChange:f})]})},G=({handleSetExName:s,handleFilterClick:a})=>{const c=E();p.useEffect(()=>{c(N())},[c]);const i=P($);console.log(i);const[o,l]=p.useState(1),d=()=>{const n=window.innerWidth;return n>=768&&n<=1439?9:10},[t,r]=p.useState(d),x=()=>{r(d())};p.useEffect(()=>(window.addEventListener("resize",x),x(),()=>{window.removeEventListener("resize",x)}));const f=n=>{l(n)},g=o*t,w=g-t,m=i.slice(w,g);return e.jsxs(I,{children:[e.jsx(y,{children:m.map(n=>e.jsx(v,{exercisesItem:n,handleFilterClick:a,handleSetExName:s},n._id))}),t<i.length&&e.jsx(C,{itemsPerPage:t,totalItems:i.length,currentPage:o,onPageChange:f})]})},H=({handleSetExName:s,handleFilterClick:a})=>{const c=E();p.useEffect(()=>{c(S())},[c]);const i=P(_);console.log(i);const[o,l]=p.useState(1),d=()=>{const n=window.innerWidth;return n>=768&&n<=1439?9:10},[t,r]=p.useState(d),x=()=>{r(d())};p.useEffect(()=>(window.addEventListener("resize",x),x(),()=>{window.removeEventListener("resize",x)}));const f=n=>{l(n)},g=o*t,w=g-t,m=i.slice(w,g);return e.jsxs(I,{children:[e.jsx(y,{children:m.map(n=>e.jsx(v,{exercisesItem:n,handleFilterClick:a,handleSetExName:s},n._id))}),t<i.length&&e.jsx(C,{itemsPerPage:t,totalItems:i.length,currentPage:o,onPageChange:f})]})},J=h.div`
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
`,Y=()=>{const[s,a]=p.useState("Body parts"),[c,i]=p.useState(""),o=t=>{i(t)},l=t=>{a(t)},d=t=>t.slice(0,1).toUpperCase()+t.slice(1);return e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(k,{children:"Exercises"}),e.jsx(k,{children:d(c)}),e.jsx(B,{activeFilter:s,handleFilterClick:l})]}),s==="Body parts"&&e.jsx(D,{handleFilterClick:l,handleSetExName:o}),s==="Muscles"&&e.jsx(G,{handleFilterClick:l,handleSetExName:o}),s==="Equipment"&&e.jsx(H,{handleFilterClick:l,handleSetExName:o})]})};export{Y as default};
