import{f as n,b as u,u as f,j as e,F as W,G as b,a as y,e as x,H as N,I as D,J as q,K as $}from"./index-d13ccd4f.js";import{n as k}from"./emotion-styled.browser.esm-a32802f8.js";import{c as M}from"./emotion-react.browser.esm-faf2170a.js";import{P as T}from"./PageAnimatedWrapper-55794bf0.js";const O=n.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,v=n.li`

  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  position: relative;
  
  &:hover {
    color: #efede8;
  }

  &.active::after {
     content: '';
     position: absolute;
     left: 0;
     bottom: -8px;
     width: 100%;
     height: 4px;
     border-radius: 2px;
     background-color: #EF8964;
   }

   &.active {
     color: #efede8;

     & button {
      
    color: #efede8;
     }
   }

   & button {
    color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;}
   
`;n.button`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;

  &.active {
    color: #efede8;
  }
`;const R=t=>t.exercises.bodyParts,U=t=>t.exercises.equipment,_=t=>t.exercises.muscles,A=t=>t.exercises.exercises,P=t=>t.exercises.currentFilter,B=t=>t.exercises.currentCategorie,G=()=>{const t=u(P),i=f(),o=({target:{innerText:a}})=>{i(W(a)),i(b(null))};return e.jsxs(O,{children:[e.jsx(v,{className:t==="Body parts"?"active":"",children:e.jsx("button",{type:"button",onClick:o,children:"Body parts"})}),e.jsx(v,{className:t==="Muscles"?"active":"",children:e.jsx("button",{type:"button",onClick:o,children:"Muscles"})}),e.jsx(v,{className:t==="Equipment"?"active":"",children:e.jsx("button",{type:"button",onClick:o,children:"Equipment"})})]})},C=n.ul`
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
`,H=n.li`
  position: relative;
  cursor: pointer;
`,J=n.img`
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
`,K=n.div`
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
`,V=n.h3`
  font-size: 20px;
  line-height: 1.2;

  color: #EFEDE8;

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,X=n.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,Q="/power-pulse-fs/assets/0-default-fa91a1ec.jpg",I=({exercisesItem:t})=>{const{name:i,filter:o,imgURL:a}=t,l=f(),c=s=>{l(b(s))},r=s=>s.slice(0,1).toUpperCase()+s.slice(1);return e.jsxs(H,{onClick:()=>c(i),children:[e.jsx(J,{src:a||Q,alt:i}),e.jsxs(K,{children:[e.jsx(V,{children:r(i)}),e.jsx(X,{children:o})]})]})},F=n.div`
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
    
    fill: #E6533C;
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
`,Y=n.li`
  margin-top: 32px;
`,z=({itemsPerPage:t,totalItems:i,currentPage:o,onPageChange:a})=>{const l=Math.ceil(i/t),c=s=>{s>=1&&s<=l&&a(s)},r=()=>{const s=[];for(let p=1;p<=l;p++)s.push(e.jsx(Y,{className:`page-item ${p===o?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>c(p),children:[p,p===o&&e.jsx("svg",{children:e.jsx("use",{href:`${y}#icon-block`})})]})},p));return s};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:r()})})},Z=({handleSetExName:t})=>{const i=f();x.useEffect(()=>{i(N())},[i]);const o=d=>{i(b(d))},a=u(R),[l,c]=x.useState(1),r=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[s,p]=x.useState(r),g=()=>{p(r())};x.useEffect(()=>(window.addEventListener("resize",g),g(),()=>{window.removeEventListener("resize",g)}));const w=d=>{c(d)},m=l*s,E=m-s,h=a.slice(E,m);return e.jsxs(F,{children:[e.jsx(C,{children:h.map(d=>e.jsx(I,{exercisesItem:d,handleFilterClick:o,handleSetExName:t},d._id))}),s<a.length&&e.jsx(z,{itemsPerPage:s,totalItems:a.length,currentPage:l,onPageChange:w})]})},ee=({handleSetExName:t})=>{const i=f();x.useEffect(()=>{i(D())},[i]);const o=u(_),[a,l]=x.useState(1),c=()=>{const h=window.innerWidth;return h>=768&&h<=1439?9:10},[r,s]=x.useState(c),p=()=>{s(c())};x.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}));const g=h=>{l(h)},w=a*r,m=w-r,E=o.slice(m,w);return e.jsxs(F,{children:[e.jsx(C,{children:E.map(h=>e.jsx(I,{exercisesItem:h,handleSetExName:t},h._id))}),r<o.length&&e.jsx(z,{itemsPerPage:r,totalItems:o.length,currentPage:a,onPageChange:g})]})},te=({handleSetExName:t})=>{const i=f();x.useEffect(()=>{i(q())},[i]);const o=d=>{i(b(d))},a=u(U),[l,c]=x.useState(1),r=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[s,p]=x.useState(r),g=()=>{p(r())};x.useEffect(()=>(window.addEventListener("resize",g),g(),()=>{window.removeEventListener("resize",g)}));const w=d=>{c(d)},m=l*s,E=m-s,h=a.slice(E,m);return e.jsxs(F,{children:[e.jsx(C,{children:h.map(d=>e.jsx(I,{exercisesItem:d,handleFilterClick:o,handleSetExName:t},d._id))}),s<a.length&&e.jsx(z,{itemsPerPage:s,totalItems:a.length,currentPage:l,onPageChange:w})]})},ie=n.li`
  width: 100%;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 370px;
  }
`,ne=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,se=n.p`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #fff;

  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  text-transform: uppercase;
`,re=n.button`
  background: transparent;
  border: none;
  color: #E6533C;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #EFEDE8;
  }
  &:focus {
    color: #EFEDE8;
  }
`,ae=n.svg`
  width: 13px;
  height: 13px;


  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,oe=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,ce=n.h3`
  position: relative;
  font-size: 24px;
  line-height: 1.333;
  color: #EFEDE8;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  width: 263px;

  @media screen and (min-width: 768px) {
    width: 285px;
  }
`,de=n.svg`
  width: 16px;
  height: 16px;
  fill: #EFEDE8;
`,le=n.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EFA082;

  border-radius: 50%;

  width: 24px;
  height: 24px;
`,pe=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,xe=n.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`,he=n.span`
  color: #EFEDE8;
`,j={cardLabel:"Workout",btnLabel:"Start",list:{burnedCalories:"Burned calories:",bodyPart:"Body parts:",target:"Target:"}},L=t=>t.slice(0,1).toUpperCase()+t.slice(1),ge=({data:t})=>e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(se,{children:j.cardLabel}),e.jsxs(re,{type:"button",children:[j.btnLabel,e.jsx(ae,{children:e.jsx("use",{href:`${y}#icon-arrow-start`})})]})]}),e.jsxs(oe,{children:[e.jsx(le,{children:e.jsx(de,{width:24,height:24,children:e.jsx("use",{href:`${y}#icon-running`})})}),e.jsxs(ce,{children:[L(t.name)," "]})]}),e.jsx(pe,{children:Object.keys(j.list).map(i=>e.jsxs(xe,{children:[j.list[i],e.jsx(he,{children:L(String(t[i]))})]},i))})]}),ue=n.div`
  display: flex;
  

`,me=n.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    width: 530px;
    height: 902px;
    z-index: -2;
  }
`,fe=n.ul`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  &::-webkit-scrollbar-thumb {
    background-color: #ef8964;
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    overflow-y: auto;
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
    padding-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    overflow-y: auto;
    max-height: 900px;
    padding-right: 16px;
    width: 850px;
  }
`,we=n.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,be=n.svg`
  width: 13px;
  height: 13px;
  stroke: rgba(239, 237, 232, 0.40);

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }

  &:hover {
    stroke: #EFEDE8;
  }
  &:focus {
    stroke: #EFEDE8;
  }
`,Ee=n.button`
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  top: 116px;
  color: rgba(239, 237, 232, 0.40);

  &:hover {
    color: #EFEDE8;
  }
  &:focus {
    color: #EFEDE8;
  }
`,je=({exerciseName:t})=>{console.log(t);const i=f();x.useEffect(()=>{i($())},[i]);const o=u(P),a=u(B),l=u(A);let c=[];switch(o){case"Body parts":c=l.filter(r=>r.bodyPart===a);break;case"Muscles":c=l.filter(r=>r.target===a);break;case"Equipment":c=l.filter(r=>r.equipment===a);break;default:return}return e.jsxs(e.Fragment,{children:[e.jsxs(Ee,{onClick:()=>i(b(null)),children:[e.jsx(be,{children:e.jsx("use",{href:` ${y}#icon-arrow-back`})}),"Back"]}),e.jsxs(ue,{children:[e.jsx(fe,{children:c.length?c.slice(0,50).map(r=>e.jsx(ge,{data:r},r._id)):e.jsx(we,{})}),e.jsx(me,{})]})]})},ye="/power-pulse-fs/assets/side-view-people-training-gym1-f4a4dcae.png",ve=k.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 106px;

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
    ${t=>t.$isCategorie&&M`background:linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0.00) 68.17%), url(${ye});

;
background-repeat: no-repeat;
background-size: contain;
background-position: right`}
  }
`,ke=k.li`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,S=k.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,ze=()=>{const t=u(B),i=u(P),o=f(),[a,l]=x.useState("");x.useEffect(()=>{o(b(null))},[o]);const c=s=>{l(s)},r=s=>s.slice(0,1).toUpperCase()+s.slice(1);return e.jsx(T,{direction:"X",children:e.jsxs(ve,{$isCategorie:t,children:[e.jsxs(ke,{children:[t?e.jsx(S,{children:r(t)}):e.jsx(S,{children:"Exercises"}),e.jsx(G,{})]}),t?e.jsx(je,{exerciseName:a}):e.jsxs(e.Fragment,{children:[i==="Body parts"&&e.jsx(Z,{handleSetExName:c}),i==="Muscles"&&e.jsx(ee,{handleSetExName:c}),i==="Equipment"&&e.jsx(te,{handleSetExName:c})," "]})]})})};export{ze as default};
