import{b as $,s as C,B as Ge,S as nn,u as Ee,x as on,j as p,e as f,q as Le,a as W,c as oe,h as bt,y as Se,z as rn,A as an,C as re,D as sn,E as un}from"./index-120d2f3d.js";import{c as ln,a as cn}from"./index.esm-4b0efc81.js";import{u as xt}from"./formik.esm-1dac4ba3.js";import{e as se,a as Ct,h as dn,_ as pn,b as fn,c as hn,d as mn,g as vn}from"./defineProperty-4681ad55.js";import{_ as w,n as ne}from"./emotion-styled.browser.esm-c5904ded.js";import{k as gn,j as E,c as Et}from"./emotion-react.browser.esm-7d0a3dcb.js";import{a as bn,S as xn,b as Cn,c as En,d as Sn}from"./SuccessPopUp.styled-44d37c25.js";import{P as wn}from"./PageAnimatedWrapper-c0c695e1.js";const yn=$.input`
    width: 287px;
    height: 34px;
    border-radius: 12px;
    border: 1px solid ${C.orangeColor};
    background-color: inherit;
    padding-left: 8px;
    padding-right: 48px;
    color: ${C.whiteColor};
    line-height: 1.29;
 
    @media screen and (min-width: 768px) {
      width: 155px;
      height: 40px;
    }

  `,Fn=$.form`
  .inputs-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }

  .title-input {
    width: 287px;
    height: 34px;
    border-radius: 12px;
    border: 1px solid ${C.orangeColor};
    background-color: inherit;
    padding-left: 8px;
    padding-right: 8px;
    color: ${C.greyTextColor};
    line-height: 1.29;

    @media screen and (min-width: 768px) {
      width: 244px;
      height: 40px;
    }
  }

  .weight-input-block {
    position: relative;
  }
  .error-message{
position: absolute;
bottom: -40px;
font-size: 12px;
height: 36px;
color: ${C.errorColor};
 @media screen and (min-width: 768px) {
      bottom: -50px;
    }
  }
  .grams-span {
    position: absolute;
    top: 8px;
    right: 32px;
    color: rgba(239, 237, 232, 0.4);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
      top: 11px;
      right: 11px;
    }
  }
  

  .calories-block {
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
      margin-bottom: 64px;
    }
  }

  .calories-span {
    color: rgba(239, 237, 232, 0.4);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    line-height: 1.5;
  }

  .calories-input {
    border: none;
    background-color: inherit;
    color: ${C.whiteColor};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    line-height: 1.5;
  }

  .button-block {
    display: flex;
    gap: 14px;
    @media screen and (min-width: 768px) {
      gap: 16px;
    }
  }

  .add-button {
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: ${C.orangeColor};

    color: ${C.whiteColor};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;
    transition: background 250ms linear;
    &:hover {
      background: ${C.orange2Color};
    }
    &:focus {
      background: ${C.orange2Color};
    }
     &:disabled {
    background-color: #bdc3c7;
    color: #7f8c8d;
    cursor: not-allowed;
  }
  }

  .cancel-button {
    display: flex;
    padding: 12px 36px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background: inherit;
    color: ${C.whiteColor};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;

    transition: background ${C.animation};
    &:hover {
      background: ${C.orange2Color};
    }
    &:focus {
      background: ${C.orange2Color};
    }
  }
`,On=()=>{const n=new Date,e=n.getDate(),i=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear();return`${e}-${i}-${o}`},Ye=n=>{n?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},St=(n,e)=>{const i={position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:nn};switch(n){case"info":Ge.info(e,i);break;case"error":Ge.error(e,i);break}},Dn=({data:n,closeModal:e})=>{const{title:i,calories:o,_id:t}=n||{},a=Ee(),s=xt({enableReinitialize:!0,initialValues:{title:i,weight:0,calories:0},validationSchema:ln().shape({weight:cn().required("Please enter weight").min(2,"Weight must be at least 2 characters").max(4,"Weight cannot be more than 4 characters")}),onSubmit:r=>{const{weight:u,calories:c}=r,d={date:On(),amount:u,calories:Math.ceil(c)};a(on({newProduct:d,_id:t}))}}),l=r=>{if(!(isNaN(r.target.value)&&r.target.value!=="")&&(r.target.value===""&&s.setValues({...s.values,calories:""}),s.handleChange(r),r.target.value>0)){const u=parseFloat(Number(r.target.value)),c=u*o/100;s.setValues({...s.values,weight:u,calories:c})}};return p.jsxs(Fn,{onSubmit:s.handleSubmit,children:[p.jsxs("div",{className:"inputs-block",children:[p.jsx("input",{id:"title",name:"title",type:"text",defaultValue:s.values.title,disabled:!0,className:"title-input"}),p.jsxs("div",{className:"weight-input-block",children:[p.jsx(yn,{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:l,value:s.values.weight}),p.jsx("p",{className:"error-message",children:s.errors.weight}),p.jsx("span",{className:"grams-span",children:"grams"})]})]}),p.jsxs("div",{className:"calories-block",children:[p.jsx("span",{className:"calories-span",children:"Calories: "}),p.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:s.values.calories,className:"calories-input"})]}),p.jsxs("div",{className:"button-block",children:[p.jsx("button",{className:"add-button",type:"submit",disabled:!!(s.errors.weight||s.values.weight===0),children:"Add to diary"}),p.jsx("button",{onClick:e,className:"cancel-button",type:"button",children:"Cancel"})]})]})},Ve=$.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,In=$.svg`
stroke: ${C.whiteColor};
width: 26px;
height: 26px;
  transition:
    stroke ${C.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    ${Ve}:hover & {
            stroke: ${C.orangeColor};
        }
    ${Ve}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,An=$.div`
  overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;

   opacity: 1;
  visibility: visible;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.hide-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
      }

  &.hide-hidden .modal {
    transform: scale(0.5);
  }
`,Pn=$.div`
  padding-top: 48px;
  padding-left: 24px;
  position: relative;
  width: 335px;
  height: 280px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
 transform:  scale(1);
  

  @media screen and (min-width: 768px) {
    width: 479px;
height: 286px;
  }
`,Vn=document.querySelector("#add-product-modal"),Mn=({data:n,closeModal:e,showModal:i})=>{f.useEffect(()=>{if(!i)return;const t=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e,i]);const o=t=>{t.target===t.currentTarget&&e()};return Le.createPortal(p.jsx(An,{onClick:o,className:i?"":"hide-hidden",children:p.jsxs(Pn,{className:"modal",children:[p.jsx(Ve,{onClick:e,type:"button",children:p.jsx(In,{children:p.jsx("use",{href:W+"#icon-close"})})}),p.jsx(Dn,{data:n,closeModal:e})]})}),Vn)};function Xe(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,o)}return i}function S(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Xe(Object(i),!0).forEach(function(o){se(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Xe(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function kn(n){if(Array.isArray(n))return n}function Rn(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,t,a,s,l=[],r=!0,u=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==e);r=!0);}catch(c){u=!0,t=c}finally{try{if(!r&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(u)throw t}}return l}}function Ln(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(n,e){return kn(n)||Rn(n,e)||Ct(n,e)||Ln()}function $n(n,e){if(n==null)return{};var i={},o=Object.keys(n),t,a;for(a=0;a<o.length;a++)t=o[a],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}function Z(n,e){if(n==null)return{};var i=$n(n,e),o,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var Tn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Bn(n){var e=n.defaultInputValue,i=e===void 0?"":e,o=n.defaultMenuIsOpen,t=o===void 0?!1:o,a=n.defaultValue,s=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,u=n.onChange,c=n.onInputChange,d=n.onMenuClose,h=n.onMenuOpen,v=n.value,g=Z(n,Tn),x=f.useState(l!==void 0?l:i),m=K(x,2),b=m[0],I=m[1],F=f.useState(r!==void 0?r:t),O=K(F,2),A=O[0],y=O[1],P=f.useState(v!==void 0?v:s),D=K(P,2),V=D[0],T=D[1],j=f.useCallback(function(N,J){typeof u=="function"&&u(N,J),T(N)},[u]),B=f.useCallback(function(N,J){var Q;typeof c=="function"&&(Q=c(N,J)),I(Q!==void 0?Q:N)},[c]),q=f.useCallback(function(){typeof h=="function"&&h(),y(!0)},[h]),G=f.useCallback(function(){typeof d=="function"&&d(),y(!1)},[d]),L=l!==void 0?l:b,k=r!==void 0?r:A,_=v!==void 0?v:V;return S(S({},g),{},{inputValue:L,menuIsOpen:k,onChange:j,onInputChange:B,onMenuClose:G,onMenuOpen:q,value:_})}function jn(n){if(Array.isArray(n))return dn(n)}function Hn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Nn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(n){return jn(n)||Hn(n)||Ct(n)||Nn()}function zn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Un=Math.min,_n=Math.max,me=Math.round,ce=Math.floor,ve=n=>({x:n,y:n});function Wn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function wt(n){return Ft(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function yt(n){var e;return(e=(Ft(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Ft(n){return n instanceof Node||n instanceof U(n).Node}function Me(n){return n instanceof Element||n instanceof U(n).Element}function Te(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function Ke(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function Ot(n){const{overflow:e,overflowX:i,overflowY:o,display:t}=Be(n);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(t)}function qn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Gn(n){return["html","body","#document"].includes(wt(n))}function Be(n){return U(n).getComputedStyle(n)}function Yn(n){if(wt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Ke(n)&&n.host||yt(n);return Ke(e)?e.host:e}function Dt(n){const e=Yn(n);return Gn(e)?n.ownerDocument?n.ownerDocument.body:n.body:Te(e)&&Ot(e)?e:Dt(e)}function ge(n,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=Dt(n),a=t===((o=n.ownerDocument)==null?void 0:o.body),s=U(t);return a?e.concat(s,s.visualViewport||[],Ot(t)?t:[],s.frameElement&&i?ge(s.frameElement):[]):e.concat(t,ge(t,[],i))}function Xn(n){const e=Be(n);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const t=Te(n),a=t?n.offsetWidth:i,s=t?n.offsetHeight:o,l=me(i)!==a||me(o)!==s;return l&&(i=a,o=s),{width:i,height:o,$:l}}function je(n){return Me(n)?n:n.contextElement}function ye(n){const e=je(n);if(!Te(e))return ve(1);const i=e.getBoundingClientRect(),{width:o,height:t,$:a}=Xn(e);let s=(a?me(i.width):i.width)/o,l=(a?me(i.height):i.height)/t;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Kn=ve(0);function Zn(n){const e=U(n);return!qn()||!e.visualViewport?Kn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Jn(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==U(n)?!1:e}function Ze(n,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=je(n);let s=ve(1);e&&(o?Me(o)&&(s=ye(o)):s=ye(n));const l=Jn(a,i,o)?Zn(a):ve(0);let r=(t.left+l.x)/s.x,u=(t.top+l.y)/s.y,c=t.width/s.x,d=t.height/s.y;if(a){const h=U(a),v=o&&Me(o)?U(o):o;let g=h.frameElement;for(;g&&o&&v!==h;){const x=ye(g),m=g.getBoundingClientRect(),b=Be(g),I=m.left+(g.clientLeft+parseFloat(b.paddingLeft))*x.x,F=m.top+(g.clientTop+parseFloat(b.paddingTop))*x.y;r*=x.x,u*=x.y,c*=x.x,d*=x.y,r+=I,u+=F,g=U(g).frameElement}}return Wn({width:c,height:d,x:r,y:u})}function Qn(n,e){let i=null,o;const t=yt(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function s(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:u,top:c,width:d,height:h}=n.getBoundingClientRect();if(l||e(),!d||!h)return;const v=ce(c),g=ce(t.clientWidth-(u+d)),x=ce(t.clientHeight-(c+h)),m=ce(u),I={rootMargin:-v+"px "+-g+"px "+-x+"px "+-m+"px",threshold:_n(0,Un(1,r))||1};let F=!0;function O(A){const y=A[0].intersectionRatio;if(y!==r){if(!F)return s();y?s(!1,y):o=setTimeout(()=>{s(!1,1e-7)},100)}F=!1}try{i=new IntersectionObserver(O,{...I,root:t.ownerDocument})}catch{i=new IntersectionObserver(O,I)}i.observe(n)}return s(!0),a}function ei(n,e,i,o){o===void 0&&(o={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,u=je(n),c=t||a?[...u?ge(u):[],...ge(e)]:[];c.forEach(b=>{t&&b.addEventListener("scroll",i,{passive:!0}),a&&b.addEventListener("resize",i)});const d=u&&l?Qn(u,i):null;let h=-1,v=null;s&&(v=new ResizeObserver(b=>{let[I]=b;I&&I.target===u&&v&&(v.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{v&&v.observe(e)})),i()}),u&&!r&&v.observe(u),v.observe(e));let g,x=r?Ze(n):null;r&&m();function m(){const b=Ze(n);x&&(b.x!==x.x||b.y!==x.y||b.width!==x.width||b.height!==x.height)&&i(),x=b,g=requestAnimationFrame(m)}return i(),()=>{c.forEach(b=>{t&&b.removeEventListener("scroll",i),a&&b.removeEventListener("resize",i)}),d&&d(),v&&v.disconnect(),v=null,r&&cancelAnimationFrame(g)}}var ke=f.useLayoutEffect,ti=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],be=function(){};function ni(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function ii(n,e){for(var i=arguments.length,o=new Array(i>2?i-2:0),t=2;t<i;t++)o[t-2]=arguments[t];var a=[].concat(o);if(e&&n)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(ni(n,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Je=function(e){return pi(e)?e.filter(Boolean):pn(e)==="object"&&e!==null?[e]:[]},It=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=Z(e,ti);return S({},i)},M=function(e,i,o){var t=e.cx,a=e.getStyles,s=e.getClassNames,l=e.className;return{css:a(i,e),className:t(o??{},s(i,e),l)}};function we(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function oi(n){return we(n)?window.innerHeight:n.clientHeight}function At(n){return we(n)?window.pageYOffset:n.scrollTop}function xe(n,e){if(we(n)){window.scrollTo(0,e);return}n.scrollTop=e}function ri(n){var e=getComputedStyle(n),i=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function ai(n,e,i,o){return i*((n=n/o-1)*n*n+1)+e}function de(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:be,t=At(n),a=e-t,s=10,l=0;function r(){l+=s;var u=ai(l,t,a,i);xe(n,u),l<i?window.requestAnimationFrame(r):o(n)}r()}function Qe(n,e){var i=n.getBoundingClientRect(),o=e.getBoundingClientRect(),t=e.offsetHeight/3;o.bottom+t>i.bottom?xe(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):o.top-t<i.top&&xe(n,Math.max(e.offsetTop-t,0))}function si(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function et(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function ui(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Pt=!1,li={get passive(){return Pt=!0}},pe=typeof window<"u"?window:{};pe.addEventListener&&pe.removeEventListener&&(pe.addEventListener("p",be,li),pe.removeEventListener("p",be,!1));var ci=Pt;function di(n){return n!=null}function pi(n){return Array.isArray(n)}function fe(n,e,i){return n?e:i}var fi=function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),t=1;t<i;t++)o[t-1]=arguments[t];var a=Object.entries(e).filter(function(s){var l=K(s,1),r=l[0];return!o.includes(r)});return a.reduce(function(s,l){var r=K(l,2),u=r[0],c=r[1];return s[u]=c,s},{})},hi=["children","innerProps"],mi=["children","innerProps"];function vi(n){var e=n.maxHeight,i=n.menuEl,o=n.minHeight,t=n.placement,a=n.shouldScroll,s=n.isFixedPosition,l=n.controlHeight,r=ri(i),u={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return u;var c=r.getBoundingClientRect(),d=c.height,h=i.getBoundingClientRect(),v=h.bottom,g=h.height,x=h.top,m=i.offsetParent.getBoundingClientRect(),b=m.top,I=s?window.innerHeight:oi(r),F=At(r),O=parseInt(getComputedStyle(i).marginBottom,10),A=parseInt(getComputedStyle(i).marginTop,10),y=b-A,P=I-x,D=y+F,V=d-F-x,T=v-I+F+O,j=F+x-A,B=160;switch(t){case"auto":case"bottom":if(P>=g)return{placement:"bottom",maxHeight:e};if(V>=g&&!s)return a&&de(r,T,B),{placement:"bottom",maxHeight:e};if(!s&&V>=o||s&&P>=o){a&&de(r,T,B);var q=s?P-O:V-O;return{placement:"bottom",maxHeight:q}}if(t==="auto"||s){var G=e,L=s?y:D;return L>=o&&(G=Math.min(L-O-l,e)),{placement:"top",maxHeight:G}}if(t==="bottom")return a&&xe(r,T),{placement:"bottom",maxHeight:e};break;case"top":if(y>=g)return{placement:"top",maxHeight:e};if(D>=g&&!s)return a&&de(r,j,B),{placement:"top",maxHeight:e};if(!s&&D>=o||s&&y>=o){var k=e;return(!s&&D>=o||s&&y>=o)&&(k=s?y-A:D-A),a&&de(r,j,B),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return u}function gi(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Vt=function(e){return e==="auto"?"bottom":e},bi=function(e,i){var o,t=e.placement,a=e.theme,s=a.borderRadius,l=a.spacing,r=a.colors;return S((o={label:"menu"},se(o,gi(t),"100%"),se(o,"position","absolute"),se(o,"width","100%"),se(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Mt=f.createContext(null),xi=function(e){var i=e.children,o=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,r=e.theme,u=f.useContext(Mt)||{},c=u.setPortalPlacement,d=f.useRef(null),h=f.useState(t),v=K(h,2),g=v[0],x=v[1],m=f.useState(null),b=K(m,2),I=b[0],F=b[1],O=r.spacing.controlHeight;return ke(function(){var A=d.current;if(A){var y=s==="fixed",P=l&&!y,D=vi({maxHeight:t,menuEl:A,minHeight:o,placement:a,shouldScroll:P,isFixedPosition:y,controlHeight:O});x(D.maxHeight),F(D.placement),c==null||c(D.placement)}},[t,a,s,l,o,c,O]),i({ref:d,placerProps:S(S({},e),{},{placement:I||Vt(a),maxHeight:g})})},Ci=function(e){var i=e.children,o=e.innerRef,t=e.innerProps;return E("div",w({},M(e,"menu",{menu:!0}),{ref:o},t),i)},Ei=Ci,Si=function(e,i){var o=e.maxHeight,t=e.theme.spacing.baseUnit;return S({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},wi=function(e){var i=e.children,o=e.innerProps,t=e.innerRef,a=e.isMulti;return E("div",w({},M(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},o),i)},kt=function(e,i){var o=e.theme,t=o.spacing.baseUnit,a=o.colors;return S({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},yi=kt,Fi=kt,Oi=function(e){var i=e.children,o=i===void 0?"No options":i,t=e.innerProps,a=Z(e,hi);return E("div",w({},M(S(S({},a),{},{children:o,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),o)},Di=function(e){var i=e.children,o=i===void 0?"Loading...":i,t=e.innerProps,a=Z(e,mi);return E("div",w({},M(S(S({},a),{},{children:o,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),o)},Ii=function(e){var i=e.rect,o=e.offset,t=e.position;return{left:i.left,position:t,top:o,width:i.width,zIndex:1}},Ai=function(e){var i=e.appendTo,o=e.children,t=e.controlElement,a=e.innerProps,s=e.menuPlacement,l=e.menuPosition,r=f.useRef(null),u=f.useRef(null),c=f.useState(Vt(s)),d=K(c,2),h=d[0],v=d[1],g=f.useMemo(function(){return{setPortalPlacement:v}},[]),x=f.useState(null),m=K(x,2),b=m[0],I=m[1],F=f.useCallback(function(){if(t){var P=si(t),D=l==="fixed"?0:window.pageYOffset,V=P[h]+D;(V!==(b==null?void 0:b.offset)||P.left!==(b==null?void 0:b.rect.left)||P.width!==(b==null?void 0:b.rect.width))&&I({offset:V,rect:P})}},[t,l,h,b==null?void 0:b.offset,b==null?void 0:b.rect.left,b==null?void 0:b.rect.width]);ke(function(){F()},[F]);var O=f.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),t&&r.current&&(u.current=ei(t,r.current,F,{elementResize:"ResizeObserver"in window}))},[t,F]);ke(function(){O()},[O]);var A=f.useCallback(function(P){r.current=P,O()},[O]);if(!i&&l!=="fixed"||!b)return null;var y=E("div",w({ref:A},M(S(S({},e),{},{offset:b.offset,position:l,rect:b.rect}),"menuPortal",{"menu-portal":!0}),a),o);return E(Mt.Provider,{value:g},i?Le.createPortal(y,i):y)},Pi=function(e){var i=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Vi=function(e){var i=e.children,o=e.innerProps,t=e.isDisabled,a=e.isRtl;return E("div",w({},M(e,"container",{"--is-disabled":t,"--is-rtl":a}),o),i)},Mi=function(e,i){var o=e.theme.spacing,t=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:t&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},ki=function(e){var i=e.children,o=e.innerProps,t=e.isMulti,a=e.hasValue;return E("div",w({},M(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),o),i)},Ri=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Li=function(e){var i=e.children,o=e.innerProps;return E("div",w({},M(e,"indicatorsContainer",{indicators:!0}),o),i)},tt,$i=["size"],Ti=["innerProps","isRtl","size"],Bi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Rt=function(e){var i=e.size,o=Z(e,$i);return E("svg",w({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Bi},o))},He=function(e){return E(Rt,w({size:20},e),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Lt=function(e){return E(Rt,w({size:20},e),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},$t=function(e,i){var o=e.isFocused,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?s.neutral60:s.neutral20,padding:a*2,":hover":{color:o?s.neutral80:s.neutral40}})},ji=$t,Hi=function(e){var i=e.children,o=e.innerProps;return E("div",w({},M(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||E(Lt,null))},Ni=$t,zi=function(e){var i=e.children,o=e.innerProps;return E("div",w({},M(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||E(He,null))},Ui=function(e,i){var o=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},_i=function(e){var i=e.innerProps;return E("span",w({},i,M(e,"indicatorSeparator",{"indicator-separator":!0})))},Wi=gn(tt||(tt=zn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),qi=function(e,i){var o=e.isFocused,t=e.size,a=e.theme,s=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?s.neutral60:s.neutral20,padding:l*2})},Fe=function(e){var i=e.delay,o=e.offset;return E("span",{css:Et({animation:"".concat(Wi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Gi=function(e){var i=e.innerProps,o=e.isRtl,t=e.size,a=t===void 0?4:t,s=Z(e,Ti);return E("div",w({},M(S(S({},s),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(Fe,{delay:0,offset:o}),E(Fe,{delay:160,offset:!0}),E(Fe,{delay:320,offset:!o}))},Yi=function(e,i){var o=e.isDisabled,t=e.isFocused,a=e.theme,s=a.colors,l=a.borderRadius,r=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?s.neutral5:s.neutral0,borderColor:o?s.neutral10:t?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:t?s.primary:s.neutral30}})},Xi=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,a=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return E("div",w({ref:a},M(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":t,"control--menu-is-open":l}),s,{"aria-disabled":o||void 0}),i)},Ki=Xi,Zi=["data"],Ji=function(e,i){var o=e.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Qi=function(e){var i=e.children,o=e.cx,t=e.getStyles,a=e.getClassNames,s=e.Heading,l=e.headingProps,r=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return E("div",w({},M(e,"group",{group:!0}),r),E(s,w({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:o}),u),E("div",null,i))},eo=function(e,i){var o=e.theme,t=o.colors,a=o.spacing;return S({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},to=function(e){var i=It(e);i.data;var o=Z(i,Zi);return E("div",w({},M(e,"groupHeading",{"group-heading":!0}),o))},no=Qi,io=["innerRef","isDisabled","isHidden","inputClassName"],oo=function(e,i){var o=e.isDisabled,t=e.value,a=e.theme,s=a.spacing,l=a.colors;return S(S({visibility:o?"hidden":"visible",transform:t?"translateZ(0)":""},ro),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Tt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ro={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Tt)},ao=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Tt)},so=function(e){var i=e.cx,o=e.value,t=It(e),a=t.innerRef,s=t.isDisabled,l=t.isHidden,r=t.inputClassName,u=Z(t,io);return E("div",w({},M(e,"input",{"input-container":!0}),{"data-value":o||""}),E("input",w({className:i({input:!0},r),ref:a,style:ao(l),disabled:s},u)))},uo=so,lo=function(e,i){var o=e.theme,t=o.spacing,a=o.borderRadius,s=o.colors;return S({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},co=function(e,i){var o=e.theme,t=o.borderRadius,a=o.colors,s=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},po=function(e,i){var o=e.theme,t=o.spacing,a=o.borderRadius,s=o.colors,l=e.isFocused;return S({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Bt=function(e){var i=e.children,o=e.innerProps;return E("div",o,i)},fo=Bt,ho=Bt;function mo(n){var e=n.children,i=n.innerProps;return E("div",w({role:"button"},i),e||E(He,{size:14}))}var vo=function(e){var i=e.children,o=e.components,t=e.data,a=e.innerProps,s=e.isDisabled,l=e.removeProps,r=e.selectProps,u=o.Container,c=o.Label,d=o.Remove;return E(u,{data:t,innerProps:S(S({},M(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:r},E(c,{data:t,innerProps:S({},M(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),E(d,{data:t,innerProps:S(S({},M(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},go=vo,bo=function(e,i){var o=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.theme,l=s.spacing,r=s.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:t?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},xo=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.innerRef,l=e.innerProps;return E("div",w({},M(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":t,"option--is-selected":a}),{ref:s,"aria-disabled":o},l),i)},Co=xo,Eo=function(e,i){var o=e.theme,t=o.spacing,a=o.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},So=function(e){var i=e.children,o=e.innerProps;return E("div",w({},M(e,"placeholder",{placeholder:!0}),o),i)},wo=So,yo=function(e,i){var o=e.isDisabled,t=e.theme,a=t.spacing,s=t.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Fo=function(e){var i=e.children,o=e.isDisabled,t=e.innerProps;return E("div",w({},M(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),t),i)},Oo=Fo,Ne={ClearIndicator:zi,Control:Ki,DropdownIndicator:Hi,DownChevron:Lt,CrossIcon:He,Group:no,GroupHeading:to,IndicatorsContainer:Li,IndicatorSeparator:_i,Input:uo,LoadingIndicator:Gi,Menu:Ei,MenuList:wi,MenuPortal:Ai,LoadingMessage:Di,NoOptionsMessage:Oi,MultiValue:go,MultiValueContainer:fo,MultiValueLabel:ho,MultiValueRemove:mo,Option:Co,Placeholder:wo,SelectContainer:Vi,SingleValue:Oo,ValueContainer:ki},Do=function(e){return S(S({},Ne),e.components)},nt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Io(n,e){return!!(n===e||nt(n)&&nt(e))}function Ao(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!Io(n[i],e[i]))return!1;return!0}function Po(n,e){e===void 0&&(e=Ao);var i=null;function o(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var s=n.apply(this,t);return i={lastResult:s,lastArgs:t,lastThis:this},s}return o.clear=function(){i=null},o}var Vo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Mo=function(e){return E("span",w({css:Vo},e))},it=Mo,ko={guidance:function(e){var i=e.isSearchable,o=e.isMulti,t=e.tabSelectsValue,a=e.context,s=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,o=e.label,t=o===void 0?"":o,a=e.labels,s=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,o=e.focused,t=e.options,a=e.label,s=a===void 0?"":a,l=e.selectValue,r=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(x,m){return x&&x.length?"".concat(x.indexOf(m)+1," of ").concat(x.length):""};if(i==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var h=r?" disabled":"",v="".concat(u?" selected":"").concat(h);return"".concat(s).concat(v,", ").concat(d(t,o),".")}return""},onFilter:function(e){var i=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},Ro=function(e){var i=e.ariaSelection,o=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,s=e.isFocused,l=e.selectValue,r=e.selectProps,u=e.id,c=e.isAppleDevice,d=r.ariaLiveMessages,h=r.getOptionLabel,v=r.inputValue,g=r.isMulti,x=r.isOptionDisabled,m=r.isSearchable,b=r.menuIsOpen,I=r.options,F=r.screenReaderStatus,O=r.tabSelectsValue,A=r.isLoading,y=r["aria-label"],P=r["aria-live"],D=f.useMemo(function(){return S(S({},ko),d||{})},[d]),V=f.useMemo(function(){var L="";if(i&&D.onChange){var k=i.option,_=i.options,N=i.removedValue,J=i.removedValues,Q=i.value,ue=function(X){return Array.isArray(X)?null:X},R=N||k||ue(Q),H=R?h(R):"",Y=_||J||void 0,ee=Y?Y.map(h):[],z=S({isDisabled:R&&x(R,l),label:H,labels:ee},i);L=D.onChange(z)}return L},[i,D,x,l,h]),T=f.useMemo(function(){var L="",k=o||t,_=!!(o&&l&&l.includes(o));if(k&&D.onFocus){var N={focused:k,label:h(k),isDisabled:x(k,l),isSelected:_,options:a,context:k===o?"menu":"value",selectValue:l,isAppleDevice:c};L=D.onFocus(N)}return L},[o,t,h,x,D,a,l,c]),j=f.useMemo(function(){var L="";if(b&&I.length&&!A&&D.onFilter){var k=F({count:a.length});L=D.onFilter({inputValue:v,resultsMessage:k})}return L},[a,v,b,D,I,F,A]),B=(i==null?void 0:i.action)==="initial-input-focus",q=f.useMemo(function(){var L="";if(D.guidance){var k=t?"value":b?"menu":"input";L=D.guidance({"aria-label":y,context:k,isDisabled:o&&x(o,l),isMulti:g,isSearchable:m,tabSelectsValue:O,isInitialFocus:B})}return L},[y,o,t,g,x,m,b,D,l,O,B]),G=E(f.Fragment,null,E("span",{id:"aria-selection"},V),E("span",{id:"aria-focused"},T),E("span",{id:"aria-results"},j),E("span",{id:"aria-guidance"},q));return E(f.Fragment,null,E(it,{id:u},B&&G),E(it,{"aria-live":P,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!B&&G))},Lo=Ro,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],$o=new RegExp("["+Re.map(function(n){return n.letters}).join("")+"]","g"),jt={};for(var Oe=0;Oe<Re.length;Oe++)for(var De=Re[Oe],Ie=0;Ie<De.letters.length;Ie++)jt[De.letters[Ie]]=De.base;var Ht=function(e){return e.replace($o,function(i){return jt[i]})},To=Po(Ht),ot=function(e){return e.replace(/^\s+|\s+$/g,"")},Bo=function(e){return"".concat(e.label," ").concat(e.value)},jo=function(e){return function(i,o){if(i.data.__isNew__)return!0;var t=S({ignoreCase:!0,ignoreAccents:!0,stringify:Bo,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,s=t.ignoreAccents,l=t.stringify,r=t.trim,u=t.matchFrom,c=r?ot(o):o,d=r?ot(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=To(c),d=Ht(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ho=["innerRef"];function No(n){var e=n.innerRef,i=Z(n,Ho),o=fi(i,"onExited","in","enter","exit","appear");return E("input",w({ref:e},o,{css:Et({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var zo=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Uo(n){var e=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,s=f.useRef(!1),l=f.useRef(!1),r=f.useRef(0),u=f.useRef(null),c=f.useCallback(function(m,b){if(u.current!==null){var I=u.current,F=I.scrollTop,O=I.scrollHeight,A=I.clientHeight,y=u.current,P=b>0,D=O-A-F,V=!1;D>b&&s.current&&(o&&o(m),s.current=!1),P&&l.current&&(a&&a(m),l.current=!1),P&&b>D?(i&&!s.current&&i(m),y.scrollTop=O,V=!0,s.current=!0):!P&&-b>F&&(t&&!l.current&&t(m),y.scrollTop=0,V=!0,l.current=!0),V&&zo(m)}},[i,o,t,a]),d=f.useCallback(function(m){c(m,m.deltaY)},[c]),h=f.useCallback(function(m){r.current=m.changedTouches[0].clientY},[]),v=f.useCallback(function(m){var b=r.current-m.changedTouches[0].clientY;c(m,b)},[c]),g=f.useCallback(function(m){if(m){var b=ci?{passive:!1}:!1;m.addEventListener("wheel",d,b),m.addEventListener("touchstart",h,b),m.addEventListener("touchmove",v,b)}},[v,h,d]),x=f.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",h,!1),m.removeEventListener("touchmove",v,!1))},[v,h,d]);return f.useEffect(function(){if(e){var m=u.current;return g(m),function(){x(m)}}},[e,g,x]),function(m){u.current=m}}var rt=["boxSizing","height","overflow","paddingRight","position"],at={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function st(n){n.preventDefault()}function ut(n){n.stopPropagation()}function lt(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function ct(){return"ontouchstart"in window||navigator.maxTouchPoints}var dt=!!(typeof window<"u"&&window.document&&window.document.createElement),ae=0,ie={capture:!1,passive:!1};function _o(n){var e=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,t=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(r){if(dt){var u=document.body,c=u&&u.style;if(o&&rt.forEach(function(g){var x=c&&c[g];t.current[g]=x}),o&&ae<1){var d=parseInt(t.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,v=window.innerWidth-h+d||0;Object.keys(at).forEach(function(g){var x=at[g];c&&(c[g]=x)}),c&&(c.paddingRight="".concat(v,"px"))}u&&ct()&&(u.addEventListener("touchmove",st,ie),r&&(r.addEventListener("touchstart",lt,ie),r.addEventListener("touchmove",ut,ie))),ae+=1}},[o]),l=f.useCallback(function(r){if(dt){var u=document.body,c=u&&u.style;ae=Math.max(ae-1,0),o&&ae<1&&rt.forEach(function(d){var h=t.current[d];c&&(c[d]=h)}),u&&ct()&&(u.removeEventListener("touchmove",st,ie),r&&(r.removeEventListener("touchstart",lt,ie),r.removeEventListener("touchmove",ut,ie)))}},[o]);return f.useEffect(function(){if(e){var r=a.current;return s(r),function(){l(r)}}},[e,s,l]),function(r){a.current=r}}var Wo=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},qo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Go(n){var e=n.children,i=n.lockEnabled,o=n.captureEnabled,t=o===void 0?!0:o,a=n.onBottomArrive,s=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,u=Uo({isEnabled:t,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:r}),c=_o({isEnabled:i}),d=function(v){u(v),c(v)};return E(f.Fragment,null,i&&E("div",{onClick:Wo,css:qo}),e(d))}var Yo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Xo=function(e){var i=e.name,o=e.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Yo,value:"",onChange:function(){}})},Ko=Xo;function ze(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Zo(){return ze(/^iPhone/i)}function Nt(){return ze(/^Mac/i)}function Jo(){return ze(/^iPad/i)||Nt()&&navigator.maxTouchPoints>1}function Qo(){return Zo()||Jo()}function er(){return Nt()||Qo()}var tr=function(e){return e.label},nr=function(e){return e.label},ir=function(e){return e.value},or=function(e){return!!e.isDisabled},rr={clearIndicator:Ni,container:Pi,control:Yi,dropdownIndicator:ji,group:Ji,groupHeading:eo,indicatorsContainer:Ri,indicatorSeparator:Ui,input:oo,loadingIndicator:qi,loadingMessage:Fi,menu:bi,menuList:Si,menuPortal:Ii,multiValue:lo,multiValueLabel:co,multiValueRemove:po,noOptionsMessage:yi,option:bo,placeholder:Eo,singleValue:yo,valueContainer:Mi},ar={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},sr=4,zt=4,ur=38,lr=zt*2,cr={baseUnit:zt,controlHeight:ur,menuGutter:lr},Ae={borderRadius:sr,colors:ar,spacing:cr},dr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:et(),captureMenuScroll:!et(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:jo(),formatGroupLabel:tr,getOptionLabel:nr,getOptionValue:ir,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:or,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!ui(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function pt(n,e,i,o){var t=Wt(n,e,i),a=qt(n,e,i),s=_t(n,e),l=Ce(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:s,value:l,index:o}}function he(n,e){return n.options.map(function(i,o){if("options"in i){var t=i.options.map(function(s,l){return pt(n,s,e,l)}).filter(function(s){return ht(n,s)});return t.length>0?{type:"group",data:i,options:t,index:o}:void 0}var a=pt(n,i,e,o);return ht(n,a)?a:void 0}).filter(di)}function Ut(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,$e(i.options.map(function(o){return o.data}))):e.push(i.data),e},[])}function ft(n,e){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,$e(o.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(o.index,"-").concat(t.index)}}))):i.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),i},[])}function pr(n,e){return Ut(he(n,e))}function ht(n,e){var i=n.inputValue,o=i===void 0?"":i,t=e.data,a=e.isSelected,s=e.label,l=e.value;return(!Yt(n)||!a)&&Gt(n,{label:s,value:l,data:t},o)}function fr(n,e){var i=n.focusedValue,o=n.selectValue,t=o.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function hr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Pe=function(e,i){var o,t=(o=e.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return t||null},_t=function(e,i){return e.getOptionLabel(i)},Ce=function(e,i){return e.getOptionValue(i)};function Wt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function qt(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var o=Ce(n,e);return i.some(function(t){return Ce(n,t)===o})}function Gt(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var Yt=function(e){var i=e.hideSelectedOptions,o=e.isMulti;return i===void 0?o:i},mr=1,Xt=function(n){fn(i,n);var e=hn(i);function i(o){var t;if(mn(this,i),t=e.call(this,o),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=er(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,u){var c=t.props,d=c.onChange,h=c.name;u.name=h,t.ariaOnChange(r,u),d(r,u)},t.setValue=function(r,u,c){var d=t.props,h=d.closeMenuOnSelect,v=d.isMulti,g=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:g}),h&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:u,option:c})},t.selectOption=function(r){var u=t.props,c=u.blurInputOnSelect,d=u.isMulti,h=u.name,v=t.state.selectValue,g=d&&t.isOptionSelected(r,v),x=t.isOptionDisabled(r,v);if(g){var m=t.getOptionValue(r);t.setValue(v.filter(function(b){return t.getOptionValue(b)!==m}),"deselect-option",r)}else if(!x)d?t.setValue([].concat($e(v),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:h});return}c&&t.blurInput()},t.removeValue=function(r){var u=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(r),h=c.filter(function(g){return t.getOptionValue(g)!==d}),v=fe(u,h,h[0]||null);t.onChange(v,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(fe(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,u=t.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),h=fe(r,d,d[0]||null);t.onChange(h,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(r){return Pe(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return ft(he(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return ii.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(r){return _t(t.props,r)},t.getOptionValue=function(r){return Ce(t.props,r)},t.getStyles=function(r,u){var c=t.props.unstyled,d=rr[r](u,c);d.boxSizing="border-box";var h=t.props.styles[r];return h?h(d,u):d},t.getClassNames=function(r,u){var c,d;return(c=(d=t.props.classNames)[r])===null||c===void 0?void 0:c.call(d,u)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return Do(t.props)},t.buildCategorizedOptions=function(){return he(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Ut(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,u){t.setState({ariaSelection:S({value:r},u)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var u=t.props,c=u.isMulti,d=u.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&we(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var u=r.touches,c=u&&u.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var u=r.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),h=Math.abs(c.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||h>v}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var u=t.props.inputValue,c=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var u=t.getFocusableOptions(),c=u.indexOf(r);t.setState({focusedOption:r,focusedOptionId:c>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return Yt(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var u=t.props,c=u.isMulti,d=u.backspaceRemovesValue,h=u.escapeClearsValue,v=u.inputValue,g=u.isClearable,x=u.isDisabled,m=u.menuIsOpen,b=u.onKeyDown,I=u.tabSelectsValue,F=u.openMenuOnFocus,O=t.state,A=O.focusedOption,y=O.focusedValue,P=O.selectValue;if(!x&&!(typeof b=="function"&&(b(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||v)return;t.focusValue("previous");break;case"ArrowRight":if(!c||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(y)t.removeValue(y);else{if(!d)return;c?t.popValue():g&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!m||!I||!A||F&&t.isOptionSelected(A,P))return;t.selectOption(A);break;case"Enter":if(r.keyCode===229)break;if(m){if(!A||t.isComposing)return;t.selectOption(A);break}return;case"Escape":m?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):g&&h&&t.clearValue();break;case" ":if(v)return;if(!m){t.openMenu("first");break}if(!A)return;t.selectOption(A);break;case"ArrowUp":m?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":m?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!m)return;t.focusOption("pageup");break;case"PageDown":if(!m)return;t.focusOption("pagedown");break;case"Home":if(!m)return;t.focusOption("first");break;case"End":if(!m)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++mr),t.state.selectValue=Je(o.value),o.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),s=t.buildFocusableOptions(),l=s.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=s[l],t.state.focusedOptionId=Pe(a,s[l])}return t}return vn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Qe(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!s&&t.isDisabled||r&&l&&!t.menuIsOpen)&&this.focusInput(),r&&s&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!s&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Qe(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,s=this.state,l=s.selectValue,r=s.isFocused,u=this.buildFocusableOptions(),c=t==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=s.indexOf(l);l||(r=-1);var u=s.length-1,c=-1;if(s.length){switch(t){case"previous":r===0?c=0:r===-1?c=u:c=r-1;break;case"next":r>-1&&r<u&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,u=l.indexOf(s);s||(u=-1),t==="up"?r=u>0?u-1:l.length-1:t==="down"?r=(u+1)%l.length:t==="pageup"?(r=u-a,r<0&&(r=0)):t==="pagedown"?(r=u+a,r>l.length-1&&(r=l.length-1)):t==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ae):S(S({},Ae),this.props.theme):Ae}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,r=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,v=d.isRtl,g=d.options,x=this.hasValue();return{clearValue:t,cx:a,getStyles:s,getClassNames:l,getValue:r,hasValue:x,isMulti:h,isRtl:v,options:g,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,s=t.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(t,a){return Wt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return qt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Gt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,s=t.isSearchable,l=t.inputId,r=t.inputValue,u=t.tabIndex,c=t.form,d=t.menuIsOpen,h=t.required,v=this.getComponents(),g=v.Input,x=this.state,m=x.inputIsHidden,b=x.ariaSelection,I=this.commonProps,F=l||this.getElementId("input"),O=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(b==null?void 0:b.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(g,w({},I,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:a,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:r},O)):f.createElement(No,w({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:be,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},O))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,h=this.commonProps,v=this.props,g=v.controlShouldRenderValue,x=v.isDisabled,m=v.isMulti,b=v.inputValue,I=v.placeholder,F=this.state,O=F.selectValue,A=F.focusedValue,y=F.isFocused;if(!this.hasValue()||!g)return b?null:f.createElement(d,w({},h,{key:"placeholder",isDisabled:x,isFocused:y,innerProps:{id:this.getElementId("placeholder")}}),I);if(m)return O.map(function(D,V){var T=D===A,j="".concat(t.getOptionLabel(D),"-").concat(t.getOptionValue(D));return f.createElement(s,w({},h,{components:{Container:l,Label:r,Remove:u},isFocused:T,isDisabled:x,key:j,index:V,removeProps:{onClick:function(){return t.removeValue(D)},onTouchEnd:function(){return t.removeValue(D)},onMouseDown:function(q){q.preventDefault()}},data:D}),t.formatOptionLabel(D,"value"))});if(b)return null;var P=O[0];return f.createElement(c,w({},h,{data:P,isDisabled:x}),this.formatOptionLabel(P,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,s=t.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,r=this.props.isDisabled,u=this.state.isFocused;return f.createElement(s,w({},l,{isDisabled:r,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,w({},s,{innerProps:u,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,r=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,h=a.NoOptionsMessage,v=a.Option,g=this.commonProps,x=this.state.focusedOption,m=this.props,b=m.captureMenuScroll,I=m.inputValue,F=m.isLoading,O=m.loadingMessage,A=m.minMenuHeight,y=m.maxMenuHeight,P=m.menuIsOpen,D=m.menuPlacement,V=m.menuPosition,T=m.menuPortalTarget,j=m.menuShouldBlockScroll,B=m.menuShouldScrollIntoView,q=m.noOptionsMessage,G=m.onMenuScrollToTop,L=m.onMenuScrollToBottom;if(!P)return null;var k=function(H,Y){var ee=H.type,z=H.data,te=H.isDisabled,X=H.isSelected,le=H.label,Qt=H.value,_e=x===z,We=te?void 0:function(){return t.onOptionHover(z)},en=te?void 0:function(){return t.selectOption(z)},qe="".concat(t.getElementId("option"),"-").concat(Y),tn={id:qe,onClick:en,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:X};return f.createElement(v,w({},g,{innerProps:tn,data:z,isDisabled:te,isSelected:X,key:qe,label:le,type:ee,value:Qt,isFocused:_e,innerRef:_e?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(H.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var H=R.data,Y=R.options,ee=R.index,z="".concat(t.getElementId("group"),"-").concat(ee),te="".concat(z,"-heading");return f.createElement(s,w({},g,{key:z,data:H,options:Y,Heading:l,headingProps:{id:te,data:R.data},label:t.formatGroupLabel(R.data)}),R.options.map(function(X){return k(X,"".concat(ee,"-").concat(X.index))}))}else if(R.type==="option")return k(R,"".concat(R.index))});else if(F){var N=O({inputValue:I});if(N===null)return null;_=f.createElement(d,g,N)}else{var J=q({inputValue:I});if(J===null)return null;_=f.createElement(h,g,J)}var Q={minMenuHeight:A,maxMenuHeight:y,menuPlacement:D,menuPosition:V,menuShouldScrollIntoView:B},ue=f.createElement(xi,w({},g,Q),function(R){var H=R.ref,Y=R.placerProps,ee=Y.placement,z=Y.maxHeight;return f.createElement(r,w({},g,Q,{innerRef:H,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:F,placement:ee}),f.createElement(Go,{captureEnabled:b,onTopArrive:G,onBottomArrive:L,lockEnabled:j},function(te){return f.createElement(u,w({},g,{innerRef:function(le){t.getMenuListRef(le),te(le)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:t.getElementId("listbox")},isLoading:F,maxHeight:z,focusedOption:x}),_)}))});return T||V==="fixed"?f.createElement(c,w({},g,{appendTo:T,controlElement:this.controlRef,menuPlacement:D,menuPosition:V}),ue):ue}},{key:"renderFormField",value:function(){var t=this,a=this.props,s=a.delimiter,l=a.isDisabled,r=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return f.createElement(Ko,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(r)if(s){var h=d.map(function(x){return t.getOptionValue(x)}).join(s);return f.createElement("input",{name:u,type:"hidden",value:h})}else{var v=d.length>0?d.map(function(x,m){return f.createElement("input",{key:"i-".concat(m),name:u,type:"hidden",value:t.getOptionValue(x)})}):f.createElement("input",{name:u,type:"hidden",value:""});return f.createElement("div",null,v)}else{var g=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:u,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(Lo,w({},t,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:r,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,s=t.IndicatorsContainer,l=t.SelectContainer,r=t.ValueContainer,u=this.props,c=u.className,d=u.id,h=u.isDisabled,v=u.menuIsOpen,g=this.state.isFocused,x=this.commonProps=this.getCommonProps();return f.createElement(l,w({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:g}),this.renderLiveRegion(),f.createElement(a,w({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:g,menuIsOpen:v}),f.createElement(r,w({},x,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,w({},x,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,h=a.instancePrefix,v=t.options,g=t.value,x=t.menuIsOpen,m=t.inputValue,b=t.isMulti,I=Je(g),F={};if(s&&(g!==s.value||v!==s.options||x!==s.menuIsOpen||m!==s.inputValue)){var O=x?pr(t,I):[],A=x?ft(he(t,I),"".concat(h,"-option")):[],y=l?fr(a,I):null,P=hr(a,O),D=Pe(A,P);F={selectValue:I,focusedOption:P,focusedOptionId:D,focusableOptionsWithIds:A,focusedValue:y,clearFocusValueOnUpdate:!1}}var V=r!=null&&t!==s?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},T=u,j=c&&d;return c&&!j&&(T={value:fe(b,I,I[0]||null),options:I,action:"initial-input-focus"},j=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(T=null),S(S(S({},F),V),{},{prevProps:t,ariaSelection:T,prevWasFocused:j})}}]),i}(f.Component);Xt.defaultProps=dr;var vr=f.forwardRef(function(n,e){var i=Bn(n);return f.createElement(Xt,w({ref:e},i))}),Kt=vr;const Zt=$.svg`
width: 18px;
height: 18px;
`,gr=n=>p.jsx(Ne.DropdownIndicator,{...n,children:p.jsx(Zt,{children:p.jsx("use",{href:W+"#selectArrow"})})}),br={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px",height:"52px"}}),control:(n,e)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${C.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${C.orangeColor}`:0,transition:`all ${C.animation}`,"&:hover":{borderColor:`${C.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px",height:"52px"}}),dropdownIndicator:(n,e)=>({...n,transition:`all ${C.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${C.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${C.successColor}`:`${C.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${C.orangeColor}`,color:`${C.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:`${C.greyTextColor}`},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:`${C.orangeColor}`,width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:`${C.whiteColor}`}})},xr=({dataFunc:n,currentValue:e})=>{const{categories:i}=oe(a=>a.products),o=i&&i.map(a=>({value:a,label:a})),t=[{value:"Categories",label:"Categories"},...o];return p.jsx(Kt,{onChange:n,options:t,components:{DropdownIndicator:gr},styles:br,value:e===""?{value:"Categories",label:"Categories"}:t.find(a=>a.value===e)})},mt=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],Cr=n=>p.jsx(Ne.DropdownIndicator,{...n,children:p.jsx(Zt,{children:p.jsx("use",{href:W+"#selectArrow"})})}),Er={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px",height:"52px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,e)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${C.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${C.orangeColor}`:0,transition:`all ${C.animation}`,"&:hover":{borderColor:`${C.orangeColor}`},"@media (min-width: 768px)":{width:"204px",height:"52px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,e)=>({...n,transition:`all ${C.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${C.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${C.successColor}`:`${C.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${C.orangeColor}`,color:`${C.whiteColor}`}})},Sr=({dataFunc:n,currentValue:e})=>p.jsx(Kt,{onChange:n,options:mt,components:{DropdownIndicator:Cr},styles:Er,value:mt.find(i=>i.value===e),defaultValue:e}),wr=ne.svg`
  width: 18px;
  height: 18px;
`,yr=ne.svg`
  width: 20px;
  height: 20px;
  stroke: ${C.orangeColor};
`,Fr=ne.form`
  margin-top: 40px;
  position: relative;
  #search {
    max-width: 335px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${C.greyTextColor};
    padding: 14px;
    background-color: inherit;
    outline: none;

    color: ${C.whiteColor};
    font-family: Roboto;
    line-height: 1.29;
    transition: all ${C.animation};
    &::placeholder {
      color: ${C.whiteColor};
    }

    &:hover,
    &:focus {
      border-color: ${C.orangeColor};
    }
    @media screen and (min-width: 768px) {
      width: 236px;
      height:52px;
    }
  }

  .input-search-block {
    position: relative;
  }

  .svgs-search-block {
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    gap: 8px;
  }

  .selects-block {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    @media screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 1439px) {
    .filter-1440 {
      display: none;
    }
  }
  .filter-1440 {
    color: ${C.greyTextColor};
    font-family: Roboto;
    line-height: 1.29;
    position: absolute;
    right: 0px;
    top: -20px;
  }
`,Or=()=>{const[n,e]=f.useState(!1),[i,o]=bt(),t=f.useMemo(()=>Object.fromEntries([...i]),[i]),{q:a,category:s,recommended:l}=t,r=xt({initialValues:{search:a??"",category:s??"",recommended:l??"All"},onSubmit:c=>{const{search:d}=c;d&&o(h=>{const v=new URLSearchParams(h);return v.set("q",d),v})}}),u=c=>{e(!0),r.handleChange(c)};return p.jsxs(Fr,{onSubmit:r.handleSubmit,children:[p.jsxs("div",{className:"input-search-block",children:[p.jsx("input",{id:"search",name:"search",type:"text",onChange:u,value:r.values.search,placeholder:"Search"}),p.jsxs("div",{className:"svgs-search-block",children:[n&&p.jsx("button",{type:"button",onClick:()=>{e(!1),o(c=>{const d=new URLSearchParams(c);return d.delete("q"),d}),r.values.search=""},children:p.jsx(yr,{children:p.jsx("use",{href:W+"#icon-close"})})}),p.jsx("button",{type:"submit",children:p.jsx(wr,{children:p.jsx("use",{href:W+"#searchSvg"})})})]})]}),p.jsxs("div",{className:"selects-block",children:[p.jsx(xr,{name:"category",dataFunc:c=>{r.setFieldValue("category",c.value),o(d=>{const h=new URLSearchParams(d);if(c.value==="Categories"){h.delete("category");return}return h.set("category",c.value),h})},currentValue:r.values.category}),p.jsx(Sr,{name:"recommended",currentValue:r.values.recommended,dataFunc:c=>{r.setFieldValue("recommended",c.value),o(d=>{const h=new URLSearchParams(d);return h.set("recommended",c.value),h})}})]}),p.jsx("p",{className:"filter-1440",children:"Filter"})]})},Dr=$.svg`
  width: 24px;
  height: 24px;
`,Jt=$.li`
  width: 100%;
  max-width: 335px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  position: relative;

  .diet-span {
    position: absolute;
    top: 16px;
    left: 16px;

    color: #fff;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    background: rgba(239, 237, 232, 0.05);
    padding: 5px 7.5px;
    text-transform: uppercase;
  }

  .recommended-addbtn-div {
    position: absolute;
    align-items: center;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 16px;
  }

  .product-info-div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }

  .title-svg-div {
    display: flex;
    gap: 16px;
  }

  .product-info-div-title {
    @media screen and (max-width: 375px) {
      width: 208px;
    }
    overflow: hidden;
    white-space: nowrap;
    width: 258px;
    color: ${C.whiteColor};
    font-feature-settings:
      'clig' off,
      'liga' off;
    text-overflow: ellipsis;
    font-family: Roboto;
    font-size: 20px;
    line-height: 1.2;
    @media screen and (min-width: 1440px) {
      width: 333px;
    }
  }

  .detailed-info-div {
    display: flex;
    gap: 16px;
  }

  .detailed-name {
    color: rgba(239, 237, 232, 0.4);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    line-height: 1.5;
  }

  .detailed-data {
    color: ${C.whiteColor};
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Roboto;
    font-size: 12px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    max-width: 405px;
    width: calc((100% - 16px) / 2);
  }
`,Ir=$.span`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${C.whiteColor};
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.5;

  &:before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${n=>n.$color?"#419B09":"#E9101D"};
    display: inline-block;
  }
`,Ar=Se`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Pr=$.svg`
width: 80%;
height: 80%;
margin: 0 auto;
animation: ${Ar} 1s linear infinite;
`,Vr=$.div`
margin: 0 auto;
margin-top: 100px;
  width: 50px;

@media screen and (min-width:768px) {
   width: 400px;
    max-height: 400px;
}

`,vt=Se`
  0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
`,gt=Se`
0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`,Mr=$.div`
         width: 100px;
        height: 100px;
                border-radius: 50%;
        position: relative;
        left: 50%;
        bottom: 80px;
        transform: translateX(80%);
        animation: ${vt} 1s linear infinite;
    
      &::before,
      &::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: ${gt} 2s linear infinite ;
      }
      &::after{
        border-color: #FF3D00;
        animation: ${gt} 2s linear infinite , ${vt} 0.5s linear infinite reverse;
        inset: 6px;
      }
`,kr=$.ul`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
margin-top: 40px;
position: realtive;
.loader {
  width: 80px;
  height: 40px;
  border-radius: 0 0 100px 100px;
  border: 5px solid #538a2d;
  border-top: 0;
  box-sizing: border-box;
  background:
    radial-gradient(farthest-side at top,#0000 calc(100% - 5px),#e7ef9d calc(100% - 4px)), 
    radial-gradient(2px 3px,#5c4037 89%,#0000) 0 0/17px 12px,
    #ff1643;
  --c:radial-gradient(farthest-side,#000 94%,#0000);
  -webkit-mask:
    linear-gradient(#0000 0 0),
    var(--c) 12px -8px,
    var(--c) 29px -8px,
    var(--c) 45px -6px,
    var(--c) 22px -2px,
    var(--c) 34px  6px, 
    var(--c) 21px  6px,
    linear-gradient(#000 0 0);
  mask:
    linear-gradient(#000 0 0),
    var(--c) 12px -8px,
    var(--c) 29px -8px,
    var(--c) 45px -6px,
    var(--c) 22px -2px,
    var(--c) 34px  6px, 
    var(--c) 21px  6px,
    linear-gradient(#0000 0 0);
  -webkit-mask-composite:destination-out;
  mask-composite:exclude,add,add,add,add,add,add;
  -webkit-mask-repeat: no-repeat;
  animation: l8 3s infinite;
}
@keyframes l8 {
 0%   {-webkit-mask-size: auto,0 0,0 0,0 0,0 0,0 0,0 0}
 15%  {-webkit-mask-size: auto,20px 20px,0 0,0 0,0 0,0 0,0 0}
 30%  {-webkit-mask-size: auto,20px 20px,20px 20px,0 0,0 0,0 0,0 0}
 45%  {-webkit-mask-size: auto,20px 20px,20px 20px,20px 20px,0 0,0 0,0 0}
 60%  {-webkit-mask-size: auto,20px 20px,20px 20px,20px 20px,20px 20px,0 0,0 0}
 75%  {-webkit-mask-size: auto,20px 20px,20px 20px,20px 20px,20px 20px,20px 20px,0 0}
 90%,
 100% {-webkit-mask-size: auto,20px 20px,20px 20px,20px 20px,20px 20px,20px 20px,20px 20px}
}
@media screen and (min-width:768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
    height: 660px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #EF8964 rgba(239, 237, 232, 0.10);
   
    &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #EF8964;
             border-radius: 12px;
        }

        &::-webkit-scrollbar-track {
            background-color: rgba(239, 237, 232, 0.10);
            border-radius: 12px;
        }
}
@media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
}
`,Rr=()=>{const[n]=bt(),[e,i]=f.useState(!1),[o,t]=f.useState(null),{products:a,isLoading:s,isSuccessPopUpShown:l,totalPages:r}=oe(y=>y.products),{user:u}=oe(y=>y.auth),c={bloodType:u.blood,page:1},d=f.useRef(null),h=f.useRef(null),v=Ee(),[g,x]=f.useState(1);f.useEffect(()=>{l&&i(!1)},[l]),f.useEffect(()=>{l||Ye(e)},[e,l]),f.useEffect(()=>{Ye(l)},[l]);const m=y=>{t(y),i(!0)},b=()=>{v(an(!1)),i(!1)},I=f.useMemo(()=>Object.fromEntries([...n]),[n]),{q:F,category:O,recommended:A}=I;return F?c.q=F:delete c.q,O&&O!=="Categories"?c.cat=O.toLowerCase():delete c.cat,A&&A!=="All"?c.rec=A:delete c.rec,f.useEffect(()=>{x(1),d.current&&(d.current.scrollTop=0)},[A,F,O]),f.useEffect(()=>{if(g===r||g===r&&g>1&&r>1)return;const y=new IntersectionObserver(P=>{P[0].isIntersecting&&!s&&(x(g+1),d.current&&(d.current.scrollTop=d.current.scrollTop-200))},{threshold:.1});return h.current&&y.observe(h.current),()=>{const P=h.current;h.current&&y.unobserve(P)}},[s]),f.useEffect(()=>{g===r&&g!==1&&St("info","You have reached the end of search results"),!(g>r)&&v(rn({queryParams:c,page:g}))},[A,F,O,v,g,r]),s&&a===null?p.jsx(Vr,{children:p.jsx(Pr,{children:p.jsx("use",{href:W+"#icon-logo"})})}):a&&a.length>0?p.jsxs(p.Fragment,{children:[p.jsxs(kr,{ref:d,children:[a.map(y=>s?p.jsx(Jt,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:p.jsx("div",{className:"loader"})},y._id):p.jsx(jr,{handleOpenModal:m,data:y},y._id)),p.jsx("div",{style:{width:"100%",height:"1px"},children:s&&p.jsx(Mr,{})}),p.jsx("div",{ref:h,style:{opacity:0},children:"refdiv"})]}),p.jsx(Mn,{showModal:e,closeModal:b,data:o}),p.jsx(Ur,{})]}):p.jsx(Nr,{})},Ue=$.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,Lr=$.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${C.animation};
  @media screen and (min-width: 768px) {
    ${Ue}:hover & {
      color: ${C.whiteColor};
      transform: scale(1.25);
    }
  }
`,$r=Se`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,Tr=$.svg`
width: 16px;
  height: 16px;
  stroke: ${C.orangeColor};
  @media screen and (min-width: 768px) {
    ${Ue}:hover & {
      animation: ${$r} 1000ms linear infinite;
    stroke: ${C.whiteColor};
             }
  }
`,Br=({children:n,onClick:e})=>p.jsxs(Ue,{type:"button",onClick:e,children:[p.jsx(Lr,{className:"add-btn-span",children:n}),p.jsx(Tr,{children:p.jsx("use",{href:W+"#locationarrow"})})]}),jr=({data:n,handleOpenModal:e})=>{const{blood:i}=oe(c=>c.auth.user),{calories:o,category:t,title:a,weight:s,groupBloodNotAllowed:l,_id:r}=n,u=l[i];return p.jsxs(Jt,{children:[p.jsx("span",{className:"diet-span",children:"diet"}),p.jsxs("div",{className:"recommended-addbtn-div",children:[p.jsx(Ir,{className:"recommended-span",$color:u,children:u?"Recommended":"Not recommended"}),p.jsx(Br,{onClick:()=>e({calories:o,title:a,weight:s,_id:r}),children:"Add"})]}),p.jsxs("div",{className:"product-info-div",children:[p.jsxs("div",{className:"title-svg-div",children:[p.jsx(Dr,{children:p.jsx("use",{href:W+"#runningman"})}),p.jsxs("p",{className:"product-info-div-title",children:[" ",a]})]}),p.jsxs("div",{className:"detailed-info-div",children:[p.jsxs("p",{className:"detailed-name",children:["Calories: ",p.jsx("span",{className:"detailed-data",children:o})]}),p.jsxs("p",{className:"detailed-name",children:["Category: ",p.jsx("span",{className:"detailed-data",children:t})]}),p.jsxs("p",{className:"detailed-name",children:["Weight: ",p.jsx("span",{className:"detailed-data",children:s})]})]})]})]})},Hr=ne.div`
margin-top: 64px;
max-width: 335px;

.above-text {
margin-bottom: 16px;
color: ${C.greyTextColor};
font-family: Roboto;
font-size: 14px;
line-height: 1.29;

}

.above-text-span {
color: ${C.orangeColor};
}

.below-text {
color: ${C.orangeColor};
font-family: Roboto;
line-height: 1.29;
}

@media screen and (min-width: 768px) {
    margin-top: 132px;
    max-width: 580px;

    .above-text{
font-size: 16px;
line-height: 1.5;
    }
     .below-text{
font-size: 16px;
line-height: 1.5;
    }
}

@media screen and (min-width: 1440px) {
    margin-top: 136px; 
}
`,Nr=()=>p.jsxs(Hr,{children:[p.jsxs("p",{className:"above-text",children:[p.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),p.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),zr=document.querySelector("#add-product-success"),Ur=()=>{const{isSuccessPopUpShown:n}=oe(o=>o.products),e=Ee();f.useEffect(()=>{if(!n)return;const o=t=>{t.code==="Escape"&&e(re(!1))};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n,e]);const i=o=>{o.target===o.currentTarget&&e(re(!1))};return Le.createPortal(n&&p.jsx(bn,{onClick:i,children:p.jsxs(xn,{children:[p.jsx(Cn,{onClick:()=>e(re(!1)),children:p.jsx("use",{href:W+"#icon-close"})}),p.jsx("p",{className:"title",children:"Well done"}),p.jsxs("p",{className:"calories",children:["Calories: ",p.jsx("span",{className:"calories-span",children:"96"})]}),p.jsx("button",{onClick:()=>e(re(!1)),className:"button",type:"button",children:"Next product"}),p.jsxs(En,{to:"/diary",onClick:()=>e(re(!1)),children:["To the diary ",p.jsx(Sn,{children:p.jsx("use",{href:W+"#locationarrow"})})]})]})}),zr)},_r="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",Wr="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",qr=ne.section`

@media screen and (min-width: 1440px) {
  // height: 90vh;
 background: url(${_r});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${Wr});
    }
}
`,Gr=ne.div`
 padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  padding-bottom: 80px;
max-width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
     padding-top: 72px;
  padding-bottom: 48px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
     padding-top: 42px;

     .title-form-block{
      display: flex;
      gap:454px;
      position: relative;
     }
    }
`,Yr=ne.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,ia=()=>{const{addProductFalse:n}=oe(i=>i.products),e=Ee();return f.useEffect(()=>{e(sn()),n&&St("error","Enter correct data!")},[n,e]),p.jsx(wn,{direction:"X",children:p.jsx(qr,{children:p.jsxs(Gr,{children:[p.jsxs("div",{className:"title-form-block",children:[p.jsx(Yr,{children:"Products"}),p.jsx(Or,{})]}),p.jsx(Rr,{}),p.jsx(un,{})]})})})};export{ia as default};
