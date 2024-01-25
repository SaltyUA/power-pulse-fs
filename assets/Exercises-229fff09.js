import{f as n,b,u as y,j as e,R as re,T as P,a as v,e as h,U as se,V as oe,W as ae,X as Q,Y as ee,Z as ce,s as D,L as le,F as I,_ as de}from"./index-86b8137c.js";import{n as B}from"./emotion-styled.browser.esm-1f2083f2.js";import{c as pe}from"./emotion-react.browser.esm-becf16a7.js";import{P as xe}from"./PageAnimatedWrapper-d1c824cf.js";import{B as he}from"./Button-cab2f836.js";import{g as ue}from"./productsHelpers-95529711.js";const ge=n.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,F=n.li`

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
`;const me=t=>t.exercises.bodyParts,fe=t=>t.exercises.equipment,be=t=>t.exercises.muscles,we=t=>t.exercises.exercises,N=t=>t.exercises.currentFilter,te=t=>t.exercises.currentCategorie,je=t=>t.exercises.currentExercise,ye=t=>t.exercises.isShowModal,ve=()=>{const t=b(N),i=y(),r=({target:{innerText:s}})=>{i(re(s)),i(P(null))};return e.jsxs(ge,{children:[e.jsx(F,{className:t==="Body parts"?"active":"",children:e.jsx("button",{type:"button",onClick:r,children:"Body parts"})}),e.jsx(F,{className:t==="Muscles"?"active":"",children:e.jsx("button",{type:"button",onClick:r,children:"Muscles"})}),e.jsx(F,{className:t==="Equipment"?"active":"",children:e.jsx("button",{type:"button",onClick:r,children:"Equipment"})})]})},q=n.ul`
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
`,ke=n.li`
  position: relative;
  cursor: pointer;
`,Ce=n.img`
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

  @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  }
`,Ee=n.div`
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
`,Pe=n.h3`
  font-size: 20px;
  line-height: 1.2;

  color: #efede8;

  @media screen and (min-width: 375px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,ze=n.p`
  font-size: 12px;
  line-height: 1.5;

  color: rgba(239, 237, 232, 0.4);
`,Ie="/power-pulse-fs/assets/0-default-fa91a1ec.jpg",U=({exercisesItem:t})=>{const{name:i,filter:r,imgURL:s}=t,a=y(),o=l=>{a(P(l))},c=l=>l.slice(0,1).toUpperCase()+l.slice(1);return e.jsxs(ke,{onClick:()=>o(i),children:[e.jsx(Ce,{src:s||Ie,alt:i}),e.jsxs(Ee,{children:[e.jsx(Pe,{children:c(i)}),e.jsx(ze,{children:r})]})]})},A=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 90px;

  ul.pagination {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    align-items: center;
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

    fill: #e6533c;
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
`,Se=n.li`
  margin-top: 32px;
`,_=({itemsPerPage:t,totalItems:i,currentPage:r,onPageChange:s})=>{const a=Math.ceil(i/t),o=l=>{l>=1&&l<=a&&s(l)},c=()=>{const l=[];for(let p=1;p<=a;p++)l.push(e.jsx(Se,{className:`page-item ${p===r?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>o(p),children:[p,p===r&&e.jsx("svg",{children:e.jsx("use",{href:`${v}#icon-block`})})]})},p));return l};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:c()})})},Te=()=>{const t=y();h.useEffect(()=>{t(se())},[t]);const i=d=>{t(P(d))},r=b(me),[s,a]=h.useState(1),o=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[c,l]=h.useState(o),p=()=>{l(o())};h.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}));const u=d=>{a(d)},m=s*c,g=m-c,x=r.slice(g,m);return e.jsxs(A,{children:[e.jsx(q,{children:x.map(d=>e.jsx(U,{exercisesItem:d,handleFilterClick:i},d._id))}),c<r.length&&e.jsx(_,{itemsPerPage:c,totalItems:r.length,currentPage:s,onPageChange:u})]})},Le=()=>{const t=y();h.useEffect(()=>{t(oe())},[t]);const i=b(be),[r,s]=h.useState(1),a=()=>{const x=window.innerWidth;return x>=768&&x<=1439?9:10},[o,c]=h.useState(a),l=()=>{c(a())};h.useEffect(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}));const p=x=>{s(x)},u=r*o,m=u-o,g=i.slice(m,u);return e.jsxs(A,{children:[e.jsx(q,{children:g.map(x=>e.jsx(U,{exercisesItem:x},x._id))}),o<i.length&&e.jsx(_,{itemsPerPage:o,totalItems:i.length,currentPage:r,onPageChange:p})]})},Re=()=>{const t=y();h.useEffect(()=>{t(ae())},[t]);const i=d=>{t(P(d))},r=b(fe),[s,a]=h.useState(1),o=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[c,l]=h.useState(o),p=()=>{l(o())};h.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}));const u=d=>{a(d)},m=s*c,g=m-c,x=r.slice(g,m);return e.jsxs(A,{children:[e.jsx(q,{children:x.map(d=>e.jsx(U,{exercisesItem:d,handleFilterClick:i},d._id))}),c<r.length&&e.jsx(_,{itemsPerPage:c,totalItems:r.length,currentPage:s,onPageChange:u})]})},$e=n.li`
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
`,Be=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,Me=n.p`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  color: #fff;

  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  text-transform: uppercase;
`,We=n.button`
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
`,Fe=n.svg`
  width: 13px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,De=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,Ne=n.h3`
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
`,qe=n.svg`
  width: 16px;
  height: 16px;
  fill: #efede8;
`,Ue=n.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efa082;

  border-radius: 50%;

  min-width: 24px;
  height: 24px;
`,Ae=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,_e=n.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`,Oe=n.span`
  color: #efede8;
`,S={cardLabel:"Workout",btnLabel:"Start",list:{burnedCalories:"Burned calories:",bodyPart:"Body parts:",target:"Target:"}},G=t=>t.slice(0,1).toUpperCase()+t.slice(1),Ge=({data:t})=>{const i=y(),r=()=>{i(Q(!0)),i(ee(t))};return e.jsxs($e,{children:[e.jsxs(Be,{children:[e.jsx(Me,{children:S.cardLabel}),e.jsxs(We,{type:"button",onClick:r,children:[S.btnLabel,e.jsx(Fe,{children:e.jsx("use",{href:`${v}#icon-arrow-start`})})]})]}),e.jsxs(De,{children:[e.jsx(Ue,{children:e.jsx(qe,{width:24,height:24,children:e.jsx("use",{href:`${v}#icon-running`})})}),e.jsxs(Ne,{children:[G(t.name)," "]})]}),e.jsx(Ae,{children:Object.keys(S.list).map(s=>e.jsxs(_e,{children:[S.list[s],e.jsx(Oe,{children:G(String(t[s]))})]},s))})]})},Ve=n.div`
  display: flex;
`,Xe=n.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    width: 530px;
    height: 902px;
    z-index: -2;
  }
`,Ye=n.ul`
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
`,Ze=n.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,He=n.svg`
  width: 13px;
  height: 13px;
  stroke: currentColor;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,Je=n.button`
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
`,Ke=()=>{const t=y();h.useEffect(()=>{t(ce())},[t]);const i=b(N),r=b(te),s=b(we);let a=[];switch(i){case"Body parts":a=s.filter(o=>o.bodyPart===r);break;case"Muscles":a=s.filter(o=>o.target===r);break;case"Equipment":a=s.filter(o=>o.equipment===r);break;default:return}return e.jsxs(e.Fragment,{children:[e.jsxs(Je,{onClick:()=>t(P(null)),children:[e.jsx(He,{children:e.jsx("use",{href:` ${v}#icon-arrow-back`})}),"Back"]}),e.jsxs(Ve,{children:[e.jsx(Ye,{children:a.length?a.slice(0,50).map(o=>e.jsx(Ge,{data:o},o._id)):e.jsx(Ze,{})}),e.jsx(Xe,{})]})]})},Qe="/power-pulse-fs/assets/side-view-people-training-gym1-f4a4dcae.png",et=B.div`
  ${t=>t.$isCategorie&&pe`
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${Qe});

      background-repeat: no-repeat;
      background-size: contain;
      background-position: right;
    `}
`,tt=B.div`
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
  }
`,it=B.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,V=B.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,nt=n(he)``,rt=n.div`
  position: absolute;
  right: 32px;
  bottom: 48px;

  @media (max-width: 767px) {
    bottom: 48px;
    left: 16px;
  }
`,st=n.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(4, 4, 4, 0.4);
`,ot=n.div`
  position: relative;
  padding-top: 48px;
  background-color: #fefefe;
  margin: 15% auto;
  max-width: 694px;
  height: 550px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;

  @media (max-width: 767px) {
    position: relative;
    width: 335px;
    height: 788px;
  }
`,at=n.button`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: 14px;
  margin-bottom: 4px;

  @media (max-width: 767px) {
    margin-top: 14px;
  }
`;n.div`
  width: 125px;
  height: 125px;
`;const X=n.button`
  position: absolute;
  right: 16px;
  top: 16px;
`,Y=n.svg`
  z-index: 100;
  width: 26px;
  height: 26px;
  stroke: ${D.whiteColor};
`,ct=n.div`
  position: relative;
`,T=n.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 12px 18px 12px;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 70px;
  margin: 0;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    width: 147px;
    height: 62px;
  }
`,L=n.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.5;
`,R=n.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  overflow-y: scroll;
  white-space: nowrap;
  font-feature-settings:
    'clig' off,
    'liga' off;

  &::-webkit-scrollbar {
    display: none;
  }
`,lt=n.div`
  display: flex;
  gap: 8px;
  @media (max-width: 767px) {
    position: absolute;
    top: 470px;
    left: 15px;
  }
`,dt=n.div`
  margin-left: 32px;
  border-radius: 12px;
  margin-right: 16px;
  overflow: hidden;
  width: 270px;
  height: 226px;
  object-fit: cover;

  @media (max-width: 767px) {
  }
`,pt=n.div`
  display: flex;
`,xt=n.div``,ht=n.div`
  margin-right: 31px;
`,ut=n.div`
  position: absolute;
  left: 150px;
  bottom: 60px;

  @media (max-width: 767px) {
    position: absolute;
    top: 450px;
  }
`,gt=n.div`
  position: absolute;
  left: 105px;
`,mt=n.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
  }
`,ft=n.div``,bt=n.svg`
  width: 32px;
  height: 32px;
  stroke: ${D.whiteColor};
  fill: ${D.orangeColor};
`,wt=n.div`
  position: absolute;
  bottom: 48px;
  left: 100px;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;

  @media (max-width: 767px) {
    position: absolute;
    bottom: 280px;
  }
`,jt=n.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
`;n.div``;const yt=n.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`,vt=n.div`
  position: relative;
  background-color: #10100f;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 12px;
`,kt=n(le)`
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;n.span`
  position: absolute;
  right: 24px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  width: 26px;
  cursor: pointer;
`;const Ct=n.img`
  display: flex;
  margin: 0 auto;
  margin-top: 55px;
  margin-bottom: 55px;
`,Et=n.h2`
  margin-bottom: 16px;
  color: #efede8;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  line-height: 32px;
`,Pt=n.p`
  display: flex;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`,zt=n.div`
  display: flex;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 32px;
`,It=n.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
`,St=n.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
`,Tt=n.button`
  display: flex;
  margin: 0 auto;
  color: #efede8;
  font-family: Roboto;
  font-size: 16px;
  line-height: 24px;
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #e6533c;
  width: 162px;
  border: none;
`,Lt="/power-pulse-fs/assets/thumb_up_gloss-5a0428d9.png";var Z=typeof window>"u"?h.useEffect:h.useLayoutEffect,Rt=({isPlaying:t,duration:i,startAt:r=0,updateInterval:s=0,onComplete:a,onUpdate:o})=>{let[c,l]=h.useState(r),p=h.useRef(0),u=h.useRef(r),m=h.useRef(r*-1e3),g=h.useRef(null),x=h.useRef(null),d=h.useRef(null),C=j=>{let f=j/1e3;if(x.current===null){x.current=f,g.current=requestAnimationFrame(C);return}let w=f-x.current,k=p.current+w;x.current=f,p.current=k;let M=u.current+(s===0?k:(k/s|0)*s),W=u.current+k,O=typeof i=="number"&&W>=i;l(O?i:M),O||(g.current=requestAnimationFrame(C))},z=()=>{g.current&&cancelAnimationFrame(g.current),d.current&&clearTimeout(d.current),x.current=null},E=h.useCallback(j=>{z(),p.current=0;let f=typeof j=="number"?j:r;u.current=f,l(f),t&&(g.current=requestAnimationFrame(C))},[t,r]);return Z(()=>{if(o==null||o(c),i&&c>=i){m.current+=i*1e3;let{shouldRepeat:j=!1,delay:f=0,newStartAt:w}=(a==null?void 0:a(m.current/1e3))||{};j&&(d.current=setTimeout(()=>E(w),f*1e3))}},[c,i]),Z(()=>(t&&(g.current=requestAnimationFrame(C)),z),[t,i,s]),{elapsedTime:c,reset:E}},$t=(t,i,r)=>{let s=t/2,a=i/2,o=s-a,c=2*o,l=r==="clockwise"?"1,0":"0,1",p=2*Math.PI*o;return{path:`m ${s},${a} a ${o},${o} 0 ${l} 0,${c} a ${o},${o} 0 ${l} 0,-${c}`,pathLength:p}},H=(t,i)=>t===0||t===i?0:typeof i=="number"?t-i:0,Bt=t=>({position:"relative",width:t,height:t}),Mt={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ie=(t,i,r,s,a)=>{if(s===0)return i;let o=(a?s-t:t)/s;return i+r*o},J=t=>{var i,r;return(r=(i=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,a,o,c)=>`#${a}${a}${o}${o}${c}${c}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?r:[]},Wt=(t,i)=>{var r;let{colors:s,colorsTime:a,isSmoothColorTransition:o=!0}=t;if(typeof s=="string")return s;let c=(r=a==null?void 0:a.findIndex((x,d)=>x>=i&&i>=a[d+1]))!=null?r:-1;if(!a||c===-1)return s[0];if(!o)return s[c];let l=a[c]-i,p=a[c]-a[c+1],u=J(s[c]),m=J(s[c+1]),g=!!t.isGrowing;return`rgb(${u.map((x,d)=>ie(l,x,m[d]-x,p,g)|0).join(",")})`},Ft=t=>{let{duration:i,initialRemainingTime:r,updateInterval:s,size:a=180,strokeWidth:o=12,trailStrokeWidth:c,isPlaying:l=!1,isGrowing:p=!1,rotation:u="clockwise",onComplete:m,onUpdate:g}=t,x=h.useRef(),d=Math.max(o,c??0),{path:C,pathLength:z}=$t(a,d,u),{elapsedTime:E}=Rt({isPlaying:l,duration:i,startAt:H(i,r),updateInterval:s,onUpdate:typeof g=="function"?f=>{let w=Math.ceil(i-f);w!==x.current&&(x.current=w,g(w))}:void 0,onComplete:typeof m=="function"?f=>{var w;let{shouldRepeat:k,delay:M,newInitialRemainingTime:W}=(w=m(f))!=null?w:{};if(k)return{shouldRepeat:k,delay:M,newStartAt:H(i,W)}}:void 0}),j=i-E;return{elapsedTime:E,path:C,pathLength:z,remainingTime:Math.ceil(j),rotation:u,size:a,stroke:Wt(t,j),strokeDashoffset:ie(E,0,z,i,p),strokeWidth:o}},ne=t=>{let{children:i,strokeLinecap:r,trailColor:s,trailStrokeWidth:a}=t,{path:o,pathLength:c,stroke:l,strokeDashoffset:p,remainingTime:u,elapsedTime:m,size:g,strokeWidth:x}=Ft(t);return I.createElement("div",{style:Bt(g)},I.createElement("svg",{viewBox:`0 0 ${g} ${g}`,width:g,height:g,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:o,fill:"none",stroke:s??"#d9d9d9",strokeWidth:a??x}),I.createElement("path",{d:o,fill:"none",stroke:l,strokeLinecap:r??"round",strokeWidth:x,strokeDasharray:c,strokeDashoffset:p})),typeof i=="function"&&I.createElement("div",{style:Mt},i({remainingTime:u,elapsedTime:m,color:l})))};ne.displayName="CountdownCircleTimer";const $=t=>t.slice(0,1).toUpperCase()+t.slice(1),K=t=>{t=Number(t);var i=Math.floor(t%3600/60),r=Math.floor(t%3600%60),s=i>0?i>9?i:"0"+i:"00",a=r>0?r>9?r:"0"+r:"00";return`${s}:${a}`};function Dt(){const t=y(),[i,r]=h.useState(!1),[s,a]=h.useState(!1),[o,c]=h.useState(0),[l,p]=h.useState(0),u=b(je),m=()=>t(Q()),g=()=>{const d={body:{date:ue(),calories:l??1,time:Math.round(o)},id:u._id};t(de(d)),t(ee(null)),a(!0)},x=()=>r(!i);return e.jsx(e.Fragment,{children:s?e.jsx(yt,{id:"diaryModal",children:e.jsxs(vt,{children:[e.jsx(X,{type:"button",onClick:m,children:e.jsx(Y,{children:e.jsx("use",{href:v+"#icon-close"})})}),e.jsx(Ct,{src:Lt,alt:"Thumb Up"}),e.jsx(Et,{children:"Well done"}),e.jsxs(Pt,{children:["Your time:",e.jsx(It,{children:K(o)})]}),e.jsxs(zt,{children:["Burned calories:",e.jsx(St,{children:l})]}),e.jsx(Tt,{onClick:m,children:"Next exercise"}),e.jsx(kt,{to:"/diary",children:"To the diary"})]})}):e.jsx(st,{children:e.jsxs(ot,{children:[e.jsx(X,{type:"button",onClick:m,children:e.jsx(Y,{children:e.jsx("use",{href:v+"#icon-close"})})}),e.jsxs(ct,{children:[e.jsxs(pt,{children:[e.jsx(dt,{children:e.jsx("img",{src:u.gifUrl,alt:"Illustration"})}),e.jsxs(lt,{children:[e.jsxs(xt,{children:[e.jsxs(T,{children:[e.jsx(L,{children:"Name"}),e.jsx(R,{children:$(u.name)})]}),e.jsxs(T,{children:[e.jsx(L,{children:"Target"}),e.jsx(R,{children:$(u.target)})]})]}),e.jsxs(ht,{children:[e.jsxs(T,{children:[e.jsx(L,{children:"Body Part"}),e.jsx(R,{children:$(u.bodyPart)})]}),e.jsxs(T,{children:[e.jsx(L,{children:"Equipment"}),e.jsx(R,{children:$(u.equipment)})]})]})]})]}),e.jsx(gt,{children:e.jsxs(mt,{children:[e.jsx(at,{children:"Time"}),e.jsx(ft,{children:e.jsx(ne,{isPlaying:i,duration:u.time*60,colors:"#E6533C",size:125,onUpdate:d=>{c(u.time*60-d),p(Math.round(u.burnedCalories/(u.time*60)*o))},children:({remainingTime:d})=>K(d)})})]})})]}),e.jsx(ut,{children:e.jsx("button",{onClick:x,children:e.jsx(bt,{children:e.jsx("use",{href:i?v+"#icon-pause":v+"#icon-play"})})})}),e.jsxs(wt,{children:["Burned calories: ",e.jsx(jt,{children:l})]}),e.jsx(rt,{children:e.jsx(nt,{disabled:i||o<60,onClick:g,children:o<60?"Unless 1 minute for training":"Add to diary"})})]})})})}const Nt=n.div`
  min-width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,Vt=()=>{const t=b(te),i=b(N),r=y();h.useEffect(()=>{r(P(null))},[r]);const s=b(ye),a=o=>o.slice(0,1).toUpperCase()+o.slice(1);return e.jsxs(xe,{direction:"X",children:[e.jsx(et,{$isCategorie:t,children:e.jsx(Nt,{children:e.jsxs(tt,{children:[e.jsxs(it,{children:[t?e.jsx(V,{children:a(t)}):e.jsx(V,{children:"Exercises"}),e.jsx(ve,{})]}),t?e.jsx(Ke,{}):e.jsxs(e.Fragment,{children:[i==="Body parts"&&e.jsx(Te,{}),i==="Muscles"&&e.jsx(Le,{}),i==="Equipment"&&e.jsx(Re,{})]})]})})}),s&&e.jsx(Dt,{})]})};export{Vt as default};
