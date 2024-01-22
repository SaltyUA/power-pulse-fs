import{f as n,b as u,u as f,j as e,P as W,Q as b,a as y,e as x,R as N,T as q,U as T,V as $}from"./index-4cac1460.js";import{n as k}from"./emotion-styled.browser.esm-b7fda630.js";import{c as M}from"./emotion-react.browser.esm-cb74a8f1.js";import{P as R}from"./PageAnimatedWrapper-ad33aca3.js";const O=n.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,E=n.li`

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
`;const U=t=>t.exercises.bodyParts,_=t=>t.exercises.equipment,V=t=>t.exercises.muscles,A=t=>t.exercises.exercises,P=t=>t.exercises.currentFilter,F=t=>t.exercises.currentCategorie,D=()=>{const t=u(P),i=f(),r=({target:{innerText:a}})=>{i(W(a)),i(b(null))};return e.jsxs(O,{children:[e.jsx(E,{className:t==="Body parts"?"active":"",children:e.jsx("button",{type:"button",onClick:r,children:"Body parts"})}),e.jsx(E,{className:t==="Muscles"?"active":"",children:e.jsx("button",{type:"button",onClick:r,children:"Muscles"})}),e.jsx(E,{className:t==="Equipment"?"active":"",children:e.jsx("button",{type:"button",onClick:r,children:"Equipment"})})]})},C=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: auto;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    margin: 0 auto;
    gap: 32px 16px;
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: start;
    gap: 32px 16px;
  }
`,Q=n.li`
  position: relative;
  cursor: pointer;
`,X=n.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
`,G=n.div`
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
`,H=n.h3`
  font-size: 20px;
  line-height: 1.2;

  color: #efede8;

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,J=n.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,K="/power-pulse-fs/assets/0-default-fa91a1ec.jpg",I=({exercisesItem:t})=>{const{name:i,filter:r,imgURL:a}=t,c=f(),o=s=>{c(b(s))},p=s=>s.slice(0,1).toUpperCase()+s.slice(1);return e.jsxs(Q,{onClick:()=>o(i),children:[e.jsx(X,{src:a||K,alt:i}),e.jsxs(G,{children:[e.jsx(H,{children:p(i)}),e.jsx(J,{children:r})]})]})},z=n.div`
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
`,L=({itemsPerPage:t,totalItems:i,currentPage:r,onPageChange:a})=>{const c=Math.ceil(i/t),o=s=>{s>=1&&s<=c&&a(s)},p=()=>{const s=[];for(let l=1;l<=c;l++)s.push(e.jsx(Y,{className:`page-item ${l===r?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>o(l),children:[l,l===r&&e.jsx("svg",{children:e.jsx("use",{href:`${y}#icon-block`})})]})},l));return s};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:p()})})},Z=({handleSetExName:t})=>{const i=f();x.useEffect(()=>{i(N())},[i]);const r=d=>{i(b(d))},a=u(U),[c,o]=x.useState(1),p=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[s,l]=x.useState(p),g=()=>{l(p())};x.useEffect(()=>(window.addEventListener("resize",g),g(),()=>{window.removeEventListener("resize",g)}));const w=d=>{o(d)},m=c*s,j=m-s,h=a.slice(j,m);return e.jsxs(z,{children:[e.jsx(C,{children:h.map(d=>e.jsx(I,{exercisesItem:d,handleFilterClick:r,handleSetExName:t},d._id))}),s<a.length&&e.jsx(L,{itemsPerPage:s,totalItems:a.length,currentPage:c,onPageChange:w})]})},ee=({handleSetExName:t})=>{const i=f();x.useEffect(()=>{i(q())},[i]);const r=u(V),[a,c]=x.useState(1),o=()=>{const h=window.innerWidth;return h>=768&&h<=1439?9:10},[p,s]=x.useState(o),l=()=>{s(o())};x.useEffect(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}));const g=h=>{c(h)},w=a*p,m=w-p,j=r.slice(m,w);return e.jsxs(z,{children:[e.jsx(C,{children:j.map(h=>e.jsx(I,{exercisesItem:h,handleSetExName:t},h._id))}),p<r.length&&e.jsx(L,{itemsPerPage:p,totalItems:r.length,currentPage:a,onPageChange:g})]})},te=({handleSetExName:t})=>{const i=f();x.useEffect(()=>{i(T())},[i]);const r=d=>{i(b(d))},a=u(_),[c,o]=x.useState(1),p=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[s,l]=x.useState(p),g=()=>{l(p())};x.useEffect(()=>(window.addEventListener("resize",g),g(),()=>{window.removeEventListener("resize",g)}));const w=d=>{o(d)},m=c*s,j=m-s,h=a.slice(j,m);return e.jsxs(z,{children:[e.jsx(C,{children:h.map(d=>e.jsx(I,{exercisesItem:d,handleFilterClick:r,handleSetExName:t},d._id))}),s<a.length&&e.jsx(L,{itemsPerPage:s,totalItems:a.length,currentPage:c,onPageChange:w})]})},ie=n.li`
  width: 335px;
  min-height: 141px;
  max-height: 170px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
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
  color: #e6533c;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #efede8;
  }
  &:focus {
    color: #efede8;
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
  color: #efede8;

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
  fill: #efede8;
`,le=n.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efa082;

  border-radius: 50%;

  min-width: 24px;
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
  color: #efede8;
`,v={cardLabel:"Workout",btnLabel:"Start",list:{burnedCalories:"Burned calories:",bodyPart:"Body parts:",target:"Target:"}},S=t=>t.slice(0,1).toUpperCase()+t.slice(1),ge=({data:t})=>e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(se,{children:v.cardLabel}),e.jsxs(re,{type:"button",children:[v.btnLabel,e.jsx(ae,{children:e.jsx("use",{href:`${y}#icon-arrow-start`})})]})]}),e.jsxs(oe,{children:[e.jsx(le,{children:e.jsx(de,{width:24,height:24,children:e.jsx("use",{href:`${y}#icon-running`})})}),e.jsxs(ce,{children:[S(t.name)," "]})]}),e.jsx(pe,{children:Object.keys(v.list).map(i=>e.jsxs(xe,{children:[v.list[i],e.jsx(he,{children:S(String(t[i]))})]},i))})]}),ue=n.div`
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
  stroke: currentColor;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,je=n.button`
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  top: 10px;
  color: rgba(239, 237, 232, 0.4);

  &:is(:hover, :focus) {
    color: #efede8;
  }

  @media screen and (min-width: 768px) {
    top: 32px;
  }
`,ve=()=>{const t=f();x.useEffect(()=>{t($())},[t]);const i=u(P),r=u(F),a=u(A);let c=[];switch(i){case"Body parts":c=a.filter(o=>o.bodyPart===r);break;case"Muscles":c=a.filter(o=>o.target===r);break;case"Equipment":c=a.filter(o=>o.equipment===r);break;default:return}return e.jsxs(e.Fragment,{children:[e.jsxs(je,{onClick:()=>t(b(null)),children:[e.jsx(be,{children:e.jsx("use",{href:` ${y}#icon-arrow-back`})}),"Back"]}),e.jsxs(ue,{children:[e.jsx(fe,{children:c.length?c.slice(0,50).map(o=>e.jsx(ge,{data:o},o._id)):e.jsx(we,{})}),e.jsx(me,{})]})]})},ye="/power-pulse-fs/assets/side-view-people-training-gym1-f4a4dcae.png",Ee=k.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
    ${t=>t.$isCategorie&&M`
        background: linear-gradient(
            80deg,
            #040404 -2.45%,
            rgba(4, 4, 4, 0) 68.17%
          ),
          url(${ye});

        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
      `}
  }
`,ke=k.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,B=k.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,Le=()=>{const t=u(F),i=u(P),r=f(),[a,c]=x.useState("");x.useEffect(()=>{r(b(null))},[r]);const o=s=>{c(s)},p=s=>s.slice(0,1).toUpperCase()+s.slice(1);return e.jsx(R,{direction:"X",children:e.jsxs(Ee,{$isCategorie:t,children:[e.jsxs(ke,{children:[t?e.jsx(B,{children:p(t)}):e.jsx(B,{children:"Exercises"}),e.jsx(D,{})]}),t?e.jsx(ve,{exerciseName:a}):e.jsxs(e.Fragment,{children:[i==="Body parts"&&e.jsx(Z,{handleSetExName:o}),i==="Muscles"&&e.jsx(ee,{handleSetExName:o}),i==="Equipment"&&e.jsx(te,{handleSetExName:o})," "]})]})})};export{Le as default};