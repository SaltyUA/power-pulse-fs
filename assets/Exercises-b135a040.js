import{b as n,c as b,u as y,j as e,P as se,Q as P,a as v,f as h,R as re,T as oe,U as ae,V as Z,W as ee,X as ce,s as F,L as le,C as I,Y as de}from"./index-49be5777.js";import{n as D}from"./emotion-styled.browser.esm-82fa0e0e.js";import{c as pe}from"./emotion-react.browser.esm-3f6b0737.js";import{P as xe}from"./PageAnimatedWrapper-13c7edb1.js";import{B as he}from"./Button-6582cad8.js";import{g as ue}from"./productsHelpers-95529711.js";const ge=n.ul`
  display: flex;
  gap: 28px;
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    padding-right: 96px;
  }
`,W=n.li`

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
`;const me=t=>t.exercises.bodyParts,fe=t=>t.exercises.equipment,be=t=>t.exercises.muscles,we=t=>t.exercises.exercises,N=t=>t.exercises.currentFilter,te=t=>t.exercises.currentCategorie,je=t=>t.exercises.currentExercise,ye=t=>t.exercises.isShowModal,ve=()=>{const t=b(N),i=y(),s=({target:{innerText:r}})=>{i(se(r)),i(P(null))};return e.jsxs(ge,{children:[e.jsx(W,{className:t==="Body parts"?"active":"",children:e.jsx("button",{type:"button",onClick:s,children:"Body parts"})}),e.jsx(W,{className:t==="Muscles"?"active":"",children:e.jsx("button",{type:"button",onClick:s,children:"Muscles"})}),e.jsx(W,{className:t==="Equipment"?"active":"",children:e.jsx("button",{type:"button",onClick:s,children:"Equipment"})})]})},q=n.ul`
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
`,Ie="/power-pulse-fs/assets/0-default-fa91a1ec.jpg",U=({exercisesItem:t})=>{const{name:i,filter:s,imgURL:r}=t,a=y(),o=l=>{a(P(l))},c=l=>l.slice(0,1).toUpperCase()+l.slice(1);return e.jsxs(ke,{onClick:()=>o(i),children:[e.jsx(Ce,{src:r||Ie,alt:i}),e.jsxs(Ee,{children:[e.jsx(Pe,{children:c(i)}),e.jsx(ze,{children:s})]})]})},A=n.div`
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
`,Se=n.li`
  margin-top: 32px;
`,O=({itemsPerPage:t,totalItems:i,currentPage:s,onPageChange:r})=>{const a=Math.ceil(i/t),o=l=>{l>=1&&l<=a&&r(l)},c=()=>{const l=[];for(let p=1;p<=a;p++)l.push(e.jsx(Se,{className:`page-item ${p===s?"active":""}`,children:e.jsxs("button",{className:"page-link",onClick:()=>o(p),children:[p,p===s&&e.jsx("svg",{children:e.jsx("use",{href:`${v}#icon-block`})})]})},p));return l};return e.jsx("nav",{"aria-label":"Pagination",children:e.jsx("ul",{className:"pagination",children:c()})})},Te=()=>{const t=y();h.useEffect(()=>{t(re())},[t]);const i=d=>{t(P(d))},s=b(me),[r,a]=h.useState(1),o=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[c,l]=h.useState(o),p=()=>{l(o())};h.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}));const u=d=>{a(d)},m=r*c,g=m-c,x=s.slice(g,m);return e.jsxs(A,{children:[e.jsx(q,{children:x.map(d=>e.jsx(U,{exercisesItem:d,handleFilterClick:i},d._id))}),c<s.length&&e.jsx(O,{itemsPerPage:c,totalItems:s.length,currentPage:r,onPageChange:u})]})},Le=()=>{const t=y();h.useEffect(()=>{t(oe())},[t]);const i=b(be),[s,r]=h.useState(1),a=()=>{const x=window.innerWidth;return x>=768&&x<=1439?9:10},[o,c]=h.useState(a),l=()=>{c(a())};h.useEffect(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)}));const p=x=>{r(x)},u=s*o,m=u-o,g=i.slice(m,u);return e.jsxs(A,{children:[e.jsx(q,{children:g.map(x=>e.jsx(U,{exercisesItem:x},x._id))}),o<i.length&&e.jsx(O,{itemsPerPage:o,totalItems:i.length,currentPage:s,onPageChange:p})]})},Re=()=>{const t=y();h.useEffect(()=>{t(ae())},[t]);const i=d=>{t(P(d))},s=b(fe),[r,a]=h.useState(1),o=()=>{const d=window.innerWidth;return d>=768&&d<=1439?9:10},[c,l]=h.useState(o),p=()=>{l(o())};h.useEffect(()=>(window.addEventListener("resize",p),p(),()=>{window.removeEventListener("resize",p)}));const u=d=>{a(d)},m=r*c,g=m-c,x=s.slice(g,m);return e.jsxs(A,{children:[e.jsx(q,{children:x.map(d=>e.jsx(U,{exercisesItem:d,handleFilterClick:i},d._id))}),c<s.length&&e.jsx(O,{itemsPerPage:c,totalItems:s.length,currentPage:r,onPageChange:u})]})},$e=n.li`
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
`,Oe=n.li`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 1.5;
`,_e=n.span`
  color: #efede8;
`,S={cardLabel:"Workout",btnLabel:"Start",list:{burnedCalories:"Burned calories:",bodyPart:"Body parts:",target:"Target:"}},G=t=>t.slice(0,1).toUpperCase()+t.slice(1),Ge=({data:t})=>{const i=y(),s=()=>{i(Z(!0)),i(ee(t))};return e.jsxs($e,{children:[e.jsxs(Be,{children:[e.jsx(Me,{children:S.cardLabel}),e.jsxs(We,{type:"button",onClick:s,children:[S.btnLabel,e.jsx(Fe,{children:e.jsx("use",{href:`${v}#icon-arrow-start`})})]})]}),e.jsxs(De,{children:[e.jsx(Ue,{children:e.jsx(qe,{width:24,height:24,children:e.jsx("use",{href:`${v}#icon-running`})})}),e.jsxs(Ne,{children:[G(t.name)," "]})]}),e.jsx(Ae,{children:Object.keys(S.list).map(r=>e.jsxs(Oe,{children:[S.list[r],e.jsx(_e,{children:G(String(t[r]))})]},r))})]})},Ve=n.div`
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
`,Qe=n.h2`
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
`,Ke=()=>{const t=y();h.useEffect(()=>{t(ce())},[t]);const i=b(N),s=b(te),r=b(we);let a=[];switch(i){case"Body parts":a=r.filter(o=>o.bodyPart===s);break;case"Muscles":a=r.filter(o=>o.target===s);break;case"Equipment":a=r.filter(o=>o.equipment===s);break;default:return}return e.jsxs(e.Fragment,{children:[e.jsxs(Je,{onClick:()=>t(P(null)),children:[e.jsx(He,{children:e.jsx("use",{href:` ${v}#icon-arrow-back`})}),"Back"]}),e.jsxs(Ve,{children:[e.jsx(Ye,{children:a.length?a.slice(0,50).map(o=>e.jsx(Ge,{data:o},o._id)):e.jsx(Qe,{})}),e.jsx(Xe,{})]})]})},Ze="/power-pulse-fs/assets/side-view-people-training-gym1-f4a4dcae.png",et=D.div`
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
    ${t=>t.$isCategorie&&pe`
        background: linear-gradient(
            80deg,
            #040404 -2.45%,
            rgba(4, 4, 4, 0) 68.17%
          ),
          url(${Ze});

        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;
      `}
  }
`,tt=D.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`,V=D.h2`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
  margin-bottom: 20px;
`,it=n(he)`
  // position: absolute;
  // bottom: 48px;
  // right: 32px;
`,nt=n.div`
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
  backdrop-filter: 'blur(5px)';
`,rt=n.div`
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
`,ot=n.button`
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
  stroke: ${F.whiteColor};
`,at=n.div`
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
`,ct=n.div`
  display: flex;
  gap: 8px;
  @media (max-width: 767px) {
    position: absolute;
    top: 470px;
    left: 15px;
  }
`,lt=n.div`
  margin-left: 32px;
  border-radius: 12px;
  margin-right: 16px;
  overflow: hidden;
  width: 270px;
  height: 226px;
  object-fit: cover;

  @media (max-width: 767px) {
  }
`,dt=n.div`
  display: flex;
`,pt=n.div``,xt=n.div`
  margin-right: 31px;
`,ht=n.div`
  position: absolute;
  left: 150px;
  bottom: 60px;

  @media (max-width: 767px) {
    position: absolute;
    top: 450px;
  }
`,ut=n.div`
  position: absolute;
  left: 105px;
`,gt=n.div`
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
`,mt=n.div``,ft=n.svg`
  width: 32px;
  height: 32px;
  stroke: ${F.whiteColor};
  fill: ${F.orangeColor};
`,bt=n.div`
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
`,wt=n.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
`;n.div``;const jt=n.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`,yt=n.div`
  position: relative;
  background-color: #10100f;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 12px;
`,vt=n(le)`
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
`;const kt=n.img`
  display: flex;
  margin: 0 auto;
  margin-top: 55px;
  margin-bottom: 55px;
`,Ct=n.h2`
  margin-bottom: 16px;
  color: #efede8;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  line-height: 32px;
`,Et=n.p`
  display: flex;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`,Pt=n.div`
  display: flex;
  justify-content: center;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 32px;
`,zt=n.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
`,It=n.span`
  color: #e6533c;
  font-family: Roboto;
  font-size: 14px;
  line-height: 18px;
`,St=n.button`
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
`,Tt="/power-pulse-fs/assets/thumb_up_gloss-5a0428d9.png";var Q=typeof window>"u"?h.useEffect:h.useLayoutEffect,Lt=({isPlaying:t,duration:i,startAt:s=0,updateInterval:r=0,onComplete:a,onUpdate:o})=>{let[c,l]=h.useState(s),p=h.useRef(0),u=h.useRef(s),m=h.useRef(s*-1e3),g=h.useRef(null),x=h.useRef(null),d=h.useRef(null),C=j=>{let f=j/1e3;if(x.current===null){x.current=f,g.current=requestAnimationFrame(C);return}let w=f-x.current,k=p.current+w;x.current=f,p.current=k;let B=u.current+(r===0?k:(k/r|0)*r),M=u.current+k,_=typeof i=="number"&&M>=i;l(_?i:B),_||(g.current=requestAnimationFrame(C))},z=()=>{g.current&&cancelAnimationFrame(g.current),d.current&&clearTimeout(d.current),x.current=null},E=h.useCallback(j=>{z(),p.current=0;let f=typeof j=="number"?j:s;u.current=f,l(f),t&&(g.current=requestAnimationFrame(C))},[t,s]);return Q(()=>{if(o==null||o(c),i&&c>=i){m.current+=i*1e3;let{shouldRepeat:j=!1,delay:f=0,newStartAt:w}=(a==null?void 0:a(m.current/1e3))||{};j&&(d.current=setTimeout(()=>E(w),f*1e3))}},[c,i]),Q(()=>(t&&(g.current=requestAnimationFrame(C)),z),[t,i,r]),{elapsedTime:c,reset:E}},Rt=(t,i,s)=>{let r=t/2,a=i/2,o=r-a,c=2*o,l=s==="clockwise"?"1,0":"0,1",p=2*Math.PI*o;return{path:`m ${r},${a} a ${o},${o} 0 ${l} 0,${c} a ${o},${o} 0 ${l} 0,-${c}`,pathLength:p}},H=(t,i)=>t===0||t===i?0:typeof i=="number"?t-i:0,$t=t=>({position:"relative",width:t,height:t}),Bt={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ie=(t,i,s,r,a)=>{if(r===0)return i;let o=(a?r-t:t)/r;return i+s*o},J=t=>{var i,s;return(s=(i=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(r,a,o,c)=>`#${a}${a}${o}${o}${c}${c}`).substring(1).match(/.{2}/g))==null?void 0:i.map(r=>parseInt(r,16)))!=null?s:[]},Mt=(t,i)=>{var s;let{colors:r,colorsTime:a,isSmoothColorTransition:o=!0}=t;if(typeof r=="string")return r;let c=(s=a==null?void 0:a.findIndex((x,d)=>x>=i&&i>=a[d+1]))!=null?s:-1;if(!a||c===-1)return r[0];if(!o)return r[c];let l=a[c]-i,p=a[c]-a[c+1],u=J(r[c]),m=J(r[c+1]),g=!!t.isGrowing;return`rgb(${u.map((x,d)=>ie(l,x,m[d]-x,p,g)|0).join(",")})`},Wt=t=>{let{duration:i,initialRemainingTime:s,updateInterval:r,size:a=180,strokeWidth:o=12,trailStrokeWidth:c,isPlaying:l=!1,isGrowing:p=!1,rotation:u="clockwise",onComplete:m,onUpdate:g}=t,x=h.useRef(),d=Math.max(o,c??0),{path:C,pathLength:z}=Rt(a,d,u),{elapsedTime:E}=Lt({isPlaying:l,duration:i,startAt:H(i,s),updateInterval:r,onUpdate:typeof g=="function"?f=>{let w=Math.ceil(i-f);w!==x.current&&(x.current=w,g(w))}:void 0,onComplete:typeof m=="function"?f=>{var w;let{shouldRepeat:k,delay:B,newInitialRemainingTime:M}=(w=m(f))!=null?w:{};if(k)return{shouldRepeat:k,delay:B,newStartAt:H(i,M)}}:void 0}),j=i-E;return{elapsedTime:E,path:C,pathLength:z,remainingTime:Math.ceil(j),rotation:u,size:a,stroke:Mt(t,j),strokeDashoffset:ie(E,0,z,i,p),strokeWidth:o}},ne=t=>{let{children:i,strokeLinecap:s,trailColor:r,trailStrokeWidth:a}=t,{path:o,pathLength:c,stroke:l,strokeDashoffset:p,remainingTime:u,elapsedTime:m,size:g,strokeWidth:x}=Wt(t);return I.createElement("div",{style:$t(g)},I.createElement("svg",{viewBox:`0 0 ${g} ${g}`,width:g,height:g,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:o,fill:"none",stroke:r??"#d9d9d9",strokeWidth:a??x}),I.createElement("path",{d:o,fill:"none",stroke:l,strokeLinecap:s??"round",strokeWidth:x,strokeDasharray:c,strokeDashoffset:p})),typeof i=="function"&&I.createElement("div",{style:Bt},i({remainingTime:u,elapsedTime:m,color:l})))};ne.displayName="CountdownCircleTimer";const $=t=>t.slice(0,1).toUpperCase()+t.slice(1),K=t=>{t=Number(t);var i=Math.floor(t%3600/60),s=Math.floor(t%3600%60),r=i>0?i>9?i:"0"+i:"00",a=s>0?s>9?s:"0"+s:"00";return`${r}:${a}`};function Ft(){const t=y(),[i,s]=h.useState(!1),[r,a]=h.useState(!1),[o,c]=h.useState(0),[l,p]=h.useState(0),u=b(je),m=()=>t(Z()),g=()=>{const d={body:{date:ue(),calories:l??1,time:Math.round(o)},id:u._id};t(de(d)),t(ee(null)),a(!0)},x=()=>s(!i);return e.jsx(e.Fragment,{children:r?e.jsx(jt,{id:"diaryModal",children:e.jsxs(yt,{children:[e.jsx(X,{type:"button",onClick:m,children:e.jsx(Y,{children:e.jsx("use",{href:v+"#icon-close"})})}),e.jsx(kt,{src:Tt,alt:"Thumb Up"}),e.jsx(Ct,{children:"Well done"}),e.jsxs(Et,{children:["Your time:",e.jsx(zt,{children:K(o)})]}),e.jsxs(Pt,{children:["Burned calories:",e.jsx(It,{children:l})]}),e.jsx(St,{onClick:m,children:"Next exercise"}),e.jsx(vt,{to:"/diary",children:"To the diary"})]})}):e.jsx(st,{children:e.jsxs(rt,{children:[e.jsx(X,{type:"button",onClick:m,children:e.jsx(Y,{children:e.jsx("use",{href:v+"#icon-close"})})}),e.jsxs(at,{children:[e.jsxs(dt,{children:[e.jsx(lt,{children:e.jsx("img",{src:u.gifUrl,alt:"Illustration"})}),e.jsxs(ct,{children:[e.jsxs(pt,{children:[e.jsxs(T,{children:[e.jsx(L,{children:"Name"}),e.jsx(R,{children:$(u.name)})]}),e.jsxs(T,{children:[e.jsx(L,{children:"Target"}),e.jsx(R,{children:$(u.target)})]})]}),e.jsxs(xt,{children:[e.jsxs(T,{children:[e.jsx(L,{children:"Body Part"}),e.jsx(R,{children:$(u.bodyPart)})]}),e.jsxs(T,{children:[e.jsx(L,{children:"Equipment"}),e.jsx(R,{children:$(u.equipment)})]})]})]})]}),e.jsx(ut,{children:e.jsxs(gt,{children:[e.jsx(ot,{children:"Time"}),e.jsx(mt,{children:e.jsx(ne,{isPlaying:i,duration:u.time*60,colors:"#E6533C",size:125,onUpdate:d=>{c(u.time*60-d),p(Math.round(u.burnedCalories/(u.time*60)*o))},children:({remainingTime:d})=>K(d)})})]})})]}),e.jsx(ht,{children:e.jsx("button",{onClick:x,children:e.jsx(ft,{children:e.jsx("use",{href:i?v+"#icon-pause":v+"#icon-play"})})})}),e.jsxs(bt,{children:["Burned calories: ",e.jsx(wt,{children:l})]}),e.jsx(nt,{children:e.jsx(it,{disabled:i||o<60,onClick:g,children:o<60?"Unless 1 minute for training":"Add to diary"})})]})})})}const _t=()=>{const t=b(te),i=b(N),s=y();h.useEffect(()=>{s(P(null))},[s]);const r=b(ye),a=o=>o.slice(0,1).toUpperCase()+o.slice(1);return e.jsxs(xe,{direction:"X",children:[e.jsxs(et,{$isCategorie:t,children:[e.jsxs(tt,{children:[t?e.jsx(V,{children:a(t)}):e.jsx(V,{children:"Exercises"}),e.jsx(ve,{})]}),t?e.jsx(Ke,{}):e.jsxs(e.Fragment,{children:[i==="Body parts"&&e.jsx(Te,{}),i==="Muscles"&&e.jsx(Le,{}),i==="Equipment"&&e.jsx(Re,{})," "]})]}),r&&e.jsx(Ft,{})]})};export{_t as default};
