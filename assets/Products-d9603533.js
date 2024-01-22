import{f as $,s as C,E as Ge,S as nn,u as Ee,F as on,G as rn,j as p,e as h,B as Le,a as W,b as se,d as bt,H as Se,I as an,J as sn,K as oe,M as un,N as ln}from"./index-2ed9ae19.js";import{u as xt,c as cn,a as dn}from"./index.esm-1d8a180b.js";import{g as pn,s as Ye}from"./productsHelpers-95529711.js";import{e as ae,a as Ct,h as fn,_ as hn,b as mn,c as vn,d as gn,g as bn}from"./defineProperty-4681ad55.js";import{_ as w,n as ne}from"./emotion-styled.browser.esm-4728668e.js";import{k as xn,j as E,c as Et}from"./emotion-react.browser.esm-32cc0211.js";import{a as Cn,S as En,b as Sn,c as wn,d as yn}from"./SuccessPopUp.styled-1c41f732.js";import{P as Fn}from"./PageAnimatedWrapper-fbe9a62d.js";const On=$.input`
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

  `,Dn=$.form`
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
`,St=(n,t)=>{const i={position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:nn};switch(n){case"info":Ge.info(t,i);break;case"error":Ge.error(t,i);break}},In=({data:n,closeModal:t})=>{const{title:i,calories:o,_id:e}=n||{},a=Ee(),s=xt({enableReinitialize:!0,initialValues:{title:i,weight:0,calories:0},validationSchema:cn().shape({weight:dn().required("Please enter weight").min(2,"Weight must be at least 2 characters").max(4,"Weight cannot be more than 4 characters")}),onSubmit:r=>{const{weight:u,calories:c}=r,d={date:pn(),amount:u,calories:Math.ceil(c)};a(on({newProduct:d,_id:e})),a(rn(Math.ceil(c)))}}),l=r=>{if(!(isNaN(r.target.value)&&r.target.value!=="")&&(r.target.value===""&&s.setValues({...s.values,calories:""}),s.handleChange(r),r.target.value>0)){const u=parseFloat(Number(r.target.value)),c=u*o/100;s.setValues({...s.values,weight:u,calories:c})}};return p.jsxs(Dn,{onSubmit:s.handleSubmit,children:[p.jsxs("div",{className:"inputs-block",children:[p.jsx("input",{id:"title",name:"title",type:"text",defaultValue:s.values.title,disabled:!0,className:"title-input"}),p.jsxs("div",{className:"weight-input-block",children:[p.jsx(On,{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:l,value:s.values.weight}),p.jsx("p",{className:"error-message",children:s.errors.weight}),p.jsx("span",{className:"grams-span",children:"grams"})]})]}),p.jsxs("div",{className:"calories-block",children:[p.jsx("span",{className:"calories-span",children:"Calories: "}),p.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:s.values.calories,className:"calories-input"})]}),p.jsxs("div",{className:"button-block",children:[p.jsx("button",{className:"add-button",type:"submit",disabled:!!(s.errors.weight||s.values.weight===0),children:"Add to diary"}),p.jsx("button",{onClick:t,className:"cancel-button",type:"button",children:"Cancel"})]})]})},Ve=$.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,An=$.svg`
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
`,Pn=$.div`
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
`,Vn=$.div`
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
`,Mn=document.querySelector("#add-product-modal"),kn=({data:n,closeModal:t,showModal:i})=>{h.useEffect(()=>{if(!i)return;const e=a=>{a.code==="Escape"&&t()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t,i]);const o=e=>{e.target===e.currentTarget&&t()};return Le.createPortal(p.jsx(Pn,{onClick:o,className:i?"":"hide-hidden",children:p.jsxs(Vn,{className:"modal",children:[p.jsx(Ve,{onClick:t,type:"button",children:p.jsx(An,{children:p.jsx("use",{href:W+"#icon-close"})})}),p.jsx(In,{data:n,closeModal:t})]})}),Mn)};function Xe(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),i.push.apply(i,o)}return i}function S(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Xe(Object(i),!0).forEach(function(o){ae(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Xe(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function Rn(n){if(Array.isArray(n))return n}function Ln(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,e,a,s,l=[],r=!0,u=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==t);r=!0);}catch(c){u=!0,e=c}finally{try{if(!r&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(u)throw e}}return l}}function $n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(n,t){return Rn(n)||Ln(n,t)||Ct(n,t)||$n()}function Tn(n,t){if(n==null)return{};var i={},o=Object.keys(n),e,a;for(a=0;a<o.length;a++)e=o[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}function J(n,t){if(n==null)return{};var i=Tn(n,t),o,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)o=a[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var Bn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function jn(n){var t=n.defaultInputValue,i=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,a=n.defaultValue,s=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,u=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,m=n.value,x=J(n,Bn),b=h.useState(l!==void 0?l:i),v=K(b,2),g=v[0],F=v[1],y=h.useState(r!==void 0?r:e),D=K(y,2),O=D[0],A=D[1],P=h.useState(m!==void 0?m:s),I=K(P,2),V=I[0],T=I[1],j=h.useCallback(function(N,Z){typeof u=="function"&&u(N,Z),T(N)},[u]),B=h.useCallback(function(N,Z){var Q;typeof c=="function"&&(Q=c(N,Z)),F(Q!==void 0?Q:N)},[c]),q=h.useCallback(function(){typeof f=="function"&&f(),A(!0)},[f]),G=h.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),L=l!==void 0?l:g,k=r!==void 0?r:O,_=m!==void 0?m:V;return S(S({},x),{},{inputValue:L,menuIsOpen:k,onChange:j,onInputChange:B,onMenuClose:G,onMenuOpen:q,value:_})}function Hn(n){if(Array.isArray(n))return fn(n)}function Nn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function zn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(n){return Hn(n)||Nn(n)||Ct(n)||zn()}function Un(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const _n=Math.min,Wn=Math.max,me=Math.round,ce=Math.floor,ve=n=>({x:n,y:n});function qn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function wt(n){return Ft(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function yt(n){var t;return(t=(Ft(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Ft(n){return n instanceof Node||n instanceof U(n).Node}function Me(n){return n instanceof Element||n instanceof U(n).Element}function Te(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function Ke(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function Ot(n){const{overflow:t,overflowX:i,overflowY:o,display:e}=Be(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(e)}function Gn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Yn(n){return["html","body","#document"].includes(wt(n))}function Be(n){return U(n).getComputedStyle(n)}function Xn(n){if(wt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ke(n)&&n.host||yt(n);return Ke(t)?t.host:t}function Dt(n){const t=Xn(n);return Yn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Te(t)&&Ot(t)?t:Dt(t)}function ge(n,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=Dt(n),a=e===((o=n.ownerDocument)==null?void 0:o.body),s=U(e);return a?t.concat(s,s.visualViewport||[],Ot(e)?e:[],s.frameElement&&i?ge(s.frameElement):[]):t.concat(e,ge(e,[],i))}function Kn(n){const t=Be(n);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=Te(n),a=e?n.offsetWidth:i,s=e?n.offsetHeight:o,l=me(i)!==a||me(o)!==s;return l&&(i=a,o=s),{width:i,height:o,$:l}}function je(n){return Me(n)?n:n.contextElement}function ye(n){const t=je(n);if(!Te(t))return ve(1);const i=t.getBoundingClientRect(),{width:o,height:e,$:a}=Kn(t);let s=(a?me(i.width):i.width)/o,l=(a?me(i.height):i.height)/e;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Jn=ve(0);function Zn(n){const t=U(n);return!Gn()||!t.visualViewport?Jn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==U(n)?!1:t}function Je(n,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=je(n);let s=ve(1);t&&(o?Me(o)&&(s=ye(o)):s=ye(n));const l=Qn(a,i,o)?Zn(a):ve(0);let r=(e.left+l.x)/s.x,u=(e.top+l.y)/s.y,c=e.width/s.x,d=e.height/s.y;if(a){const f=U(a),m=o&&Me(o)?U(o):o;let x=f.frameElement;for(;x&&o&&m!==f;){const b=ye(x),v=x.getBoundingClientRect(),g=Be(x),F=v.left+(x.clientLeft+parseFloat(g.paddingLeft))*b.x,y=v.top+(x.clientTop+parseFloat(g.paddingTop))*b.y;r*=b.x,u*=b.y,c*=b.x,d*=b.y,r+=F,u+=y,x=U(x).frameElement}}return qn({width:c,height:d,x:r,y:u})}function ei(n,t){let i=null,o;const e=yt(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function s(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:u,top:c,width:d,height:f}=n.getBoundingClientRect();if(l||t(),!d||!f)return;const m=ce(c),x=ce(e.clientWidth-(u+d)),b=ce(e.clientHeight-(c+f)),v=ce(u),F={rootMargin:-m+"px "+-x+"px "+-b+"px "+-v+"px",threshold:Wn(0,_n(1,r))||1};let y=!0;function D(O){const A=O[0].intersectionRatio;if(A!==r){if(!y)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{i=new IntersectionObserver(D,{...F,root:e.ownerDocument})}catch{i=new IntersectionObserver(D,F)}i.observe(n)}return s(!0),a}function ti(n,t,i,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,u=je(n),c=e||a?[...u?ge(u):[],...ge(t)]:[];c.forEach(g=>{e&&g.addEventListener("scroll",i,{passive:!0}),a&&g.addEventListener("resize",i)});const d=u&&l?ei(u,i):null;let f=-1,m=null;s&&(m=new ResizeObserver(g=>{let[F]=g;F&&F.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{m&&m.observe(t)})),i()}),u&&!r&&m.observe(u),m.observe(t));let x,b=r?Je(n):null;r&&v();function v(){const g=Je(n);b&&(g.x!==b.x||g.y!==b.y||g.width!==b.width||g.height!==b.height)&&i(),b=g,x=requestAnimationFrame(v)}return i(),()=>{c.forEach(g=>{e&&g.removeEventListener("scroll",i),a&&g.removeEventListener("resize",i)}),d&&d(),m&&m.disconnect(),m=null,r&&cancelAnimationFrame(x)}}var ke=h.useLayoutEffect,ni=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],be=function(){};function ii(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function oi(n,t){for(var i=arguments.length,o=new Array(i>2?i-2:0),e=2;e<i;e++)o[e-2]=arguments[e];var a=[].concat(o);if(t&&n)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(ii(n,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Ze=function(t){return fi(t)?t.filter(Boolean):hn(t)==="object"&&t!==null?[t]:[]},It=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=J(t,ni);return S({},i)},M=function(t,i,o){var e=t.cx,a=t.getStyles,s=t.getClassNames,l=t.className;return{css:a(i,t),className:e(o??{},s(i,t),l)}};function we(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function ri(n){return we(n)?window.innerHeight:n.clientHeight}function At(n){return we(n)?window.pageYOffset:n.scrollTop}function xe(n,t){if(we(n)){window.scrollTo(0,t);return}n.scrollTop=t}function ai(n){var t=getComputedStyle(n),i=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function si(n,t,i,o){return i*((n=n/o-1)*n*n+1)+t}function de(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:be,e=At(n),a=t-e,s=10,l=0;function r(){l+=s;var u=si(l,e,a,i);xe(n,u),l<i?window.requestAnimationFrame(r):o(n)}r()}function Qe(n,t){var i=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>i.bottom?xe(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<i.top&&xe(n,Math.max(t.offsetTop-e,0))}function ui(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function et(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function li(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Pt=!1,ci={get passive(){return Pt=!0}},pe=typeof window<"u"?window:{};pe.addEventListener&&pe.removeEventListener&&(pe.addEventListener("p",be,ci),pe.removeEventListener("p",be,!1));var di=Pt;function pi(n){return n!=null}function fi(n){return Array.isArray(n)}function fe(n,t,i){return n?t:i}var hi=function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),e=1;e<i;e++)o[e-1]=arguments[e];var a=Object.entries(t).filter(function(s){var l=K(s,1),r=l[0];return!o.includes(r)});return a.reduce(function(s,l){var r=K(l,2),u=r[0],c=r[1];return s[u]=c,s},{})},mi=["children","innerProps"],vi=["children","innerProps"];function gi(n){var t=n.maxHeight,i=n.menuEl,o=n.minHeight,e=n.placement,a=n.shouldScroll,s=n.isFixedPosition,l=n.controlHeight,r=ai(i),u={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return u;var c=r.getBoundingClientRect(),d=c.height,f=i.getBoundingClientRect(),m=f.bottom,x=f.height,b=f.top,v=i.offsetParent.getBoundingClientRect(),g=v.top,F=s?window.innerHeight:ri(r),y=At(r),D=parseInt(getComputedStyle(i).marginBottom,10),O=parseInt(getComputedStyle(i).marginTop,10),A=g-O,P=F-b,I=A+y,V=d-y-b,T=m-F+y+D,j=y+b-O,B=160;switch(e){case"auto":case"bottom":if(P>=x)return{placement:"bottom",maxHeight:t};if(V>=x&&!s)return a&&de(r,T,B),{placement:"bottom",maxHeight:t};if(!s&&V>=o||s&&P>=o){a&&de(r,T,B);var q=s?P-D:V-D;return{placement:"bottom",maxHeight:q}}if(e==="auto"||s){var G=t,L=s?A:I;return L>=o&&(G=Math.min(L-D-l,t)),{placement:"top",maxHeight:G}}if(e==="bottom")return a&&xe(r,T),{placement:"bottom",maxHeight:t};break;case"top":if(A>=x)return{placement:"top",maxHeight:t};if(I>=x&&!s)return a&&de(r,j,B),{placement:"top",maxHeight:t};if(!s&&I>=o||s&&A>=o){var k=t;return(!s&&I>=o||s&&A>=o)&&(k=s?A-O:I-O),a&&de(r,j,B),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return u}function bi(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var Vt=function(t){return t==="auto"?"bottom":t},xi=function(t,i){var o,e=t.placement,a=t.theme,s=a.borderRadius,l=a.spacing,r=a.colors;return S((o={label:"menu"},ae(o,bi(e),"100%"),ae(o,"position","absolute"),ae(o,"width","100%"),ae(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Mt=h.createContext(null),Ci=function(t){var i=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,l=t.menuShouldScrollIntoView,r=t.theme,u=h.useContext(Mt)||{},c=u.setPortalPlacement,d=h.useRef(null),f=h.useState(e),m=K(f,2),x=m[0],b=m[1],v=h.useState(null),g=K(v,2),F=g[0],y=g[1],D=r.spacing.controlHeight;return ke(function(){var O=d.current;if(O){var A=s==="fixed",P=l&&!A,I=gi({maxHeight:e,menuEl:O,minHeight:o,placement:a,shouldScroll:P,isFixedPosition:A,controlHeight:D});b(I.maxHeight),y(I.placement),c==null||c(I.placement)}},[e,a,s,l,o,c,D]),i({ref:d,placerProps:S(S({},t),{},{placement:F||Vt(a),maxHeight:x})})},Ei=function(t){var i=t.children,o=t.innerRef,e=t.innerProps;return E("div",w({},M(t,"menu",{menu:!0}),{ref:o},e),i)},Si=Ei,wi=function(t,i){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return S({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},yi=function(t){var i=t.children,o=t.innerProps,e=t.innerRef,a=t.isMulti;return E("div",w({},M(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},o),i)},kt=function(t,i){var o=t.theme,e=o.spacing.baseUnit,a=o.colors;return S({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},Fi=kt,Oi=kt,Di=function(t){var i=t.children,o=i===void 0?"No options":i,e=t.innerProps,a=J(t,mi);return E("div",w({},M(S(S({},a),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},Ii=function(t){var i=t.children,o=i===void 0?"Loading...":i,e=t.innerProps,a=J(t,vi);return E("div",w({},M(S(S({},a),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},Ai=function(t){var i=t.rect,o=t.offset,e=t.position;return{left:i.left,position:e,top:o,width:i.width,zIndex:1}},Pi=function(t){var i=t.appendTo,o=t.children,e=t.controlElement,a=t.innerProps,s=t.menuPlacement,l=t.menuPosition,r=h.useRef(null),u=h.useRef(null),c=h.useState(Vt(s)),d=K(c,2),f=d[0],m=d[1],x=h.useMemo(function(){return{setPortalPlacement:m}},[]),b=h.useState(null),v=K(b,2),g=v[0],F=v[1],y=h.useCallback(function(){if(e){var P=ui(e),I=l==="fixed"?0:window.pageYOffset,V=P[f]+I;(V!==(g==null?void 0:g.offset)||P.left!==(g==null?void 0:g.rect.left)||P.width!==(g==null?void 0:g.rect.width))&&F({offset:V,rect:P})}},[e,l,f,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);ke(function(){y()},[y]);var D=h.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),e&&r.current&&(u.current=ti(e,r.current,y,{elementResize:"ResizeObserver"in window}))},[e,y]);ke(function(){D()},[D]);var O=h.useCallback(function(P){r.current=P,D()},[D]);if(!i&&l!=="fixed"||!g)return null;var A=E("div",w({ref:O},M(S(S({},t),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),o);return E(Mt.Provider,{value:x},i?Le.createPortal(A,i):A)},Vi=function(t){var i=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Mi=function(t){var i=t.children,o=t.innerProps,e=t.isDisabled,a=t.isRtl;return E("div",w({},M(t,"container",{"--is-disabled":e,"--is-rtl":a}),o),i)},ki=function(t,i){var o=t.theme.spacing,e=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:e&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},Ri=function(t){var i=t.children,o=t.innerProps,e=t.isMulti,a=t.hasValue;return E("div",w({},M(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),o),i)},Li=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},$i=function(t){var i=t.children,o=t.innerProps;return E("div",w({},M(t,"indicatorsContainer",{indicators:!0}),o),i)},tt,Ti=["size"],Bi=["innerProps","isRtl","size"],ji={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Rt=function(t){var i=t.size,o=J(t,Ti);return E("svg",w({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ji},o))},He=function(t){return E(Rt,w({size:20},t),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Lt=function(t){return E(Rt,w({size:20},t),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},$t=function(t,i){var o=t.isFocused,e=t.theme,a=e.spacing.baseUnit,s=e.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?s.neutral60:s.neutral20,padding:a*2,":hover":{color:o?s.neutral80:s.neutral40}})},Hi=$t,Ni=function(t){var i=t.children,o=t.innerProps;return E("div",w({},M(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||E(Lt,null))},zi=$t,Ui=function(t){var i=t.children,o=t.innerProps;return E("div",w({},M(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||E(He,null))},_i=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,s=e.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Wi=function(t){var i=t.innerProps;return E("span",w({},i,M(t,"indicatorSeparator",{"indicator-separator":!0})))},qi=xn(tt||(tt=Un([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Gi=function(t,i){var o=t.isFocused,e=t.size,a=t.theme,s=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?s.neutral60:s.neutral20,padding:l*2})},Fe=function(t){var i=t.delay,o=t.offset;return E("span",{css:Et({animation:"".concat(qi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Yi=function(t){var i=t.innerProps,o=t.isRtl,e=t.size,a=e===void 0?4:e,s=J(t,Bi);return E("div",w({},M(S(S({},s),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(Fe,{delay:0,offset:o}),E(Fe,{delay:160,offset:!0}),E(Fe,{delay:320,offset:!o}))},Xi=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.theme,s=a.colors,l=a.borderRadius,r=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?s.neutral5:s.neutral0,borderColor:o?s.neutral10:e?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:e?s.primary:s.neutral30}})},Ki=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.innerRef,s=t.innerProps,l=t.menuIsOpen;return E("div",w({ref:a},M(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":l}),s,{"aria-disabled":o||void 0}),i)},Ji=Ki,Zi=["data"],Qi=function(t,i){var o=t.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},eo=function(t){var i=t.children,o=t.cx,e=t.getStyles,a=t.getClassNames,s=t.Heading,l=t.headingProps,r=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return E("div",w({},M(t,"group",{group:!0}),r),E(s,w({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:o}),u),E("div",null,i))},to=function(t,i){var o=t.theme,e=o.colors,a=o.spacing;return S({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},no=function(t){var i=It(t);i.data;var o=J(i,Zi);return E("div",w({},M(t,"groupHeading",{"group-heading":!0}),o))},io=eo,oo=["innerRef","isDisabled","isHidden","inputClassName"],ro=function(t,i){var o=t.isDisabled,e=t.value,a=t.theme,s=a.spacing,l=a.colors;return S(S({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},ao),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Tt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},ao={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Tt)},so=function(t){return S({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Tt)},uo=function(t){var i=t.cx,o=t.value,e=It(t),a=e.innerRef,s=e.isDisabled,l=e.isHidden,r=e.inputClassName,u=J(e,oo);return E("div",w({},M(t,"input",{"input-container":!0}),{"data-value":o||""}),E("input",w({className:i({input:!0},r),ref:a,style:so(l),disabled:s},u)))},lo=uo,co=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,s=o.colors;return S({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},po=function(t,i){var o=t.theme,e=o.borderRadius,a=o.colors,s=t.cropWithEllipsis;return S({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},fo=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,s=o.colors,l=t.isFocused;return S({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Bt=function(t){var i=t.children,o=t.innerProps;return E("div",o,i)},ho=Bt,mo=Bt;function vo(n){var t=n.children,i=n.innerProps;return E("div",w({role:"button"},i),t||E(He,{size:14}))}var go=function(t){var i=t.children,o=t.components,e=t.data,a=t.innerProps,s=t.isDisabled,l=t.removeProps,r=t.selectProps,u=o.Container,c=o.Label,d=o.Remove;return E(u,{data:e,innerProps:S(S({},M(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:r},E(c,{data:e,innerProps:S({},M(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),E(d,{data:e,innerProps:S(S({},M(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},bo=go,xo=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.isSelected,s=t.theme,l=s.spacing,r=s.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:e?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},Co=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.isSelected,s=t.innerRef,l=t.innerProps;return E("div",w({},M(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":a}),{ref:s,"aria-disabled":o},l),i)},Eo=Co,So=function(t,i){var o=t.theme,e=o.spacing,a=o.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},wo=function(t){var i=t.children,o=t.innerProps;return E("div",w({},M(t,"placeholder",{placeholder:!0}),o),i)},yo=wo,Fo=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing,s=e.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Oo=function(t){var i=t.children,o=t.isDisabled,e=t.innerProps;return E("div",w({},M(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),i)},Do=Oo,Ne={ClearIndicator:Ui,Control:Ji,DropdownIndicator:Ni,DownChevron:Lt,CrossIcon:He,Group:io,GroupHeading:no,IndicatorsContainer:$i,IndicatorSeparator:Wi,Input:lo,LoadingIndicator:Yi,Menu:Si,MenuList:yi,MenuPortal:Pi,LoadingMessage:Ii,NoOptionsMessage:Di,MultiValue:bo,MultiValueContainer:ho,MultiValueLabel:mo,MultiValueRemove:vo,Option:Eo,Placeholder:yo,SelectContainer:Mi,SingleValue:Do,ValueContainer:Ri},Io=function(t){return S(S({},Ne),t.components)},nt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ao(n,t){return!!(n===t||nt(n)&&nt(t))}function Po(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!Ao(n[i],t[i]))return!1;return!0}function Vo(n,t){t===void 0&&(t=Po);var i=null;function o(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var s=n.apply(this,e);return i={lastResult:s,lastArgs:e,lastThis:this},s}return o.clear=function(){i=null},o}var Mo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ko=function(t){return E("span",w({css:Mo},t))},it=ko,Ro={guidance:function(t){var i=t.isSearchable,o=t.isMulti,e=t.tabSelectsValue,a=t.context,s=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,o=t.label,e=o===void 0?"":o,a=t.labels,s=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,o=t.focused,e=t.options,a=t.label,s=a===void 0?"":a,l=t.selectValue,r=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(b,v){return b&&b.length?"".concat(b.indexOf(v)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var f=r?" disabled":"",m="".concat(u?" selected":"").concat(f);return"".concat(s).concat(m,", ").concat(d(e,o),".")}return""},onFilter:function(t){var i=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},Lo=function(t){var i=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,s=t.isFocused,l=t.selectValue,r=t.selectProps,u=t.id,c=t.isAppleDevice,d=r.ariaLiveMessages,f=r.getOptionLabel,m=r.inputValue,x=r.isMulti,b=r.isOptionDisabled,v=r.isSearchable,g=r.menuIsOpen,F=r.options,y=r.screenReaderStatus,D=r.tabSelectsValue,O=r.isLoading,A=r["aria-label"],P=r["aria-live"],I=h.useMemo(function(){return S(S({},Ro),d||{})},[d]),V=h.useMemo(function(){var L="";if(i&&I.onChange){var k=i.option,_=i.options,N=i.removedValue,Z=i.removedValues,Q=i.value,ue=function(X){return Array.isArray(X)?null:X},R=N||k||ue(Q),H=R?f(R):"",Y=_||Z||void 0,ee=Y?Y.map(f):[],z=S({isDisabled:R&&b(R,l),label:H,labels:ee},i);L=I.onChange(z)}return L},[i,I,b,l,f]),T=h.useMemo(function(){var L="",k=o||e,_=!!(o&&l&&l.includes(o));if(k&&I.onFocus){var N={focused:k,label:f(k),isDisabled:b(k,l),isSelected:_,options:a,context:k===o?"menu":"value",selectValue:l,isAppleDevice:c};L=I.onFocus(N)}return L},[o,e,f,b,I,a,l,c]),j=h.useMemo(function(){var L="";if(g&&F.length&&!O&&I.onFilter){var k=y({count:a.length});L=I.onFilter({inputValue:m,resultsMessage:k})}return L},[a,m,g,I,F,y,O]),B=(i==null?void 0:i.action)==="initial-input-focus",q=h.useMemo(function(){var L="";if(I.guidance){var k=e?"value":g?"menu":"input";L=I.guidance({"aria-label":A,context:k,isDisabled:o&&b(o,l),isMulti:x,isSearchable:v,tabSelectsValue:D,isInitialFocus:B})}return L},[A,o,e,x,b,v,g,I,l,D,B]),G=E(h.Fragment,null,E("span",{id:"aria-selection"},V),E("span",{id:"aria-focused"},T),E("span",{id:"aria-results"},j),E("span",{id:"aria-guidance"},q));return E(h.Fragment,null,E(it,{id:u},B&&G),E(it,{"aria-live":P,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!B&&G))},$o=Lo,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],To=new RegExp("["+Re.map(function(n){return n.letters}).join("")+"]","g"),jt={};for(var Oe=0;Oe<Re.length;Oe++)for(var De=Re[Oe],Ie=0;Ie<De.letters.length;Ie++)jt[De.letters[Ie]]=De.base;var Ht=function(t){return t.replace(To,function(i){return jt[i]})},Bo=Vo(Ht),ot=function(t){return t.replace(/^\s+|\s+$/g,"")},jo=function(t){return"".concat(t.label," ").concat(t.value)},Ho=function(t){return function(i,o){if(i.data.__isNew__)return!0;var e=S({ignoreCase:!0,ignoreAccents:!0,stringify:jo,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,s=e.ignoreAccents,l=e.stringify,r=e.trim,u=e.matchFrom,c=r?ot(o):o,d=r?ot(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Bo(c),d=Ht(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},No=["innerRef"];function zo(n){var t=n.innerRef,i=J(n,No),o=hi(i,"onExited","in","enter","exit","appear");return E("input",w({ref:t},o,{css:Et({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Uo=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function _o(n){var t=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,s=h.useRef(!1),l=h.useRef(!1),r=h.useRef(0),u=h.useRef(null),c=h.useCallback(function(v,g){if(u.current!==null){var F=u.current,y=F.scrollTop,D=F.scrollHeight,O=F.clientHeight,A=u.current,P=g>0,I=D-O-y,V=!1;I>g&&s.current&&(o&&o(v),s.current=!1),P&&l.current&&(a&&a(v),l.current=!1),P&&g>I?(i&&!s.current&&i(v),A.scrollTop=D,V=!0,s.current=!0):!P&&-g>y&&(e&&!l.current&&e(v),A.scrollTop=0,V=!0,l.current=!0),V&&Uo(v)}},[i,o,e,a]),d=h.useCallback(function(v){c(v,v.deltaY)},[c]),f=h.useCallback(function(v){r.current=v.changedTouches[0].clientY},[]),m=h.useCallback(function(v){var g=r.current-v.changedTouches[0].clientY;c(v,g)},[c]),x=h.useCallback(function(v){if(v){var g=di?{passive:!1}:!1;v.addEventListener("wheel",d,g),v.addEventListener("touchstart",f,g),v.addEventListener("touchmove",m,g)}},[m,f,d]),b=h.useCallback(function(v){v&&(v.removeEventListener("wheel",d,!1),v.removeEventListener("touchstart",f,!1),v.removeEventListener("touchmove",m,!1))},[m,f,d]);return h.useEffect(function(){if(t){var v=u.current;return x(v),function(){b(v)}}},[t,x,b]),function(v){u.current=v}}var rt=["boxSizing","height","overflow","paddingRight","position"],at={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function st(n){n.preventDefault()}function ut(n){n.stopPropagation()}function lt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function ct(){return"ontouchstart"in window||navigator.maxTouchPoints}var dt=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,ie={capture:!1,passive:!1};function Wo(n){var t=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,e=h.useRef({}),a=h.useRef(null),s=h.useCallback(function(r){if(dt){var u=document.body,c=u&&u.style;if(o&&rt.forEach(function(x){var b=c&&c[x];e.current[x]=b}),o&&re<1){var d=parseInt(e.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,m=window.innerWidth-f+d||0;Object.keys(at).forEach(function(x){var b=at[x];c&&(c[x]=b)}),c&&(c.paddingRight="".concat(m,"px"))}u&&ct()&&(u.addEventListener("touchmove",st,ie),r&&(r.addEventListener("touchstart",lt,ie),r.addEventListener("touchmove",ut,ie))),re+=1}},[o]),l=h.useCallback(function(r){if(dt){var u=document.body,c=u&&u.style;re=Math.max(re-1,0),o&&re<1&&rt.forEach(function(d){var f=e.current[d];c&&(c[d]=f)}),u&&ct()&&(u.removeEventListener("touchmove",st,ie),r&&(r.removeEventListener("touchstart",lt,ie),r.removeEventListener("touchmove",ut,ie)))}},[o]);return h.useEffect(function(){if(t){var r=a.current;return s(r),function(){l(r)}}},[t,s,l]),function(r){a.current=r}}var qo=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Go={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Yo(n){var t=n.children,i=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,a=n.onBottomArrive,s=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,u=_o({isEnabled:e,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:r}),c=Wo({isEnabled:i}),d=function(m){u(m),c(m)};return E(h.Fragment,null,i&&E("div",{onClick:qo,css:Go}),t(d))}var Xo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Ko=function(t){var i=t.name,o=t.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Xo,value:"",onChange:function(){}})},Jo=Ko;function ze(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Zo(){return ze(/^iPhone/i)}function Nt(){return ze(/^Mac/i)}function Qo(){return ze(/^iPad/i)||Nt()&&navigator.maxTouchPoints>1}function er(){return Zo()||Qo()}function tr(){return Nt()||er()}var nr=function(t){return t.label},ir=function(t){return t.label},or=function(t){return t.value},rr=function(t){return!!t.isDisabled},ar={clearIndicator:zi,container:Vi,control:Xi,dropdownIndicator:Hi,group:Qi,groupHeading:to,indicatorsContainer:Li,indicatorSeparator:_i,input:ro,loadingIndicator:Gi,loadingMessage:Oi,menu:xi,menuList:wi,menuPortal:Ai,multiValue:co,multiValueLabel:po,multiValueRemove:fo,noOptionsMessage:Fi,option:xo,placeholder:So,singleValue:Fo,valueContainer:ki},sr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},ur=4,zt=4,lr=38,cr=zt*2,dr={baseUnit:zt,controlHeight:lr,menuGutter:cr},Ae={borderRadius:ur,colors:sr,spacing:dr},pr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:et(),captureMenuScroll:!et(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Ho(),formatGroupLabel:nr,getOptionLabel:ir,getOptionValue:or,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:rr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!li(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function pt(n,t,i,o){var e=Wt(n,t,i),a=qt(n,t,i),s=_t(n,t),l=Ce(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:s,value:l,index:o}}function he(n,t){return n.options.map(function(i,o){if("options"in i){var e=i.options.map(function(s,l){return pt(n,s,t,l)}).filter(function(s){return ht(n,s)});return e.length>0?{type:"group",data:i,options:e,index:o}:void 0}var a=pt(n,i,t,o);return ht(n,a)?a:void 0}).filter(pi)}function Ut(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,$e(i.options.map(function(o){return o.data}))):t.push(i.data),t},[])}function ft(n,t){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,$e(o.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(o.index,"-").concat(e.index)}}))):i.push({data:o.data,id:"".concat(t,"-").concat(o.index)}),i},[])}function fr(n,t){return Ut(he(n,t))}function ht(n,t){var i=n.inputValue,o=i===void 0?"":i,e=t.data,a=t.isSelected,s=t.label,l=t.value;return(!Yt(n)||!a)&&Gt(n,{label:s,value:l,data:e},o)}function hr(n,t){var i=n.focusedValue,o=n.selectValue,e=o.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function mr(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Pe=function(t,i){var o,e=(o=t.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return e||null},_t=function(t,i){return t.getOptionLabel(i)},Ce=function(t,i){return t.getOptionValue(i)};function Wt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function qt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var o=Ce(n,t);return i.some(function(e){return Ce(n,e)===o})}function Gt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Yt=function(t){var i=t.hideSelectedOptions,o=t.isMulti;return i===void 0?o:i},vr=1,Xt=function(n){mn(i,n);var t=vn(i);function i(o){var e;if(gn(this,i),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=tr(),e.controlRef=null,e.getControlRef=function(r){e.controlRef=r},e.focusedOptionRef=null,e.getFocusedOptionRef=function(r){e.focusedOptionRef=r},e.menuListRef=null,e.getMenuListRef=function(r){e.menuListRef=r},e.inputRef=null,e.getInputRef=function(r){e.inputRef=r},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(r,u){var c=e.props,d=c.onChange,f=c.name;u.name=f,e.ariaOnChange(r,u),d(r,u)},e.setValue=function(r,u,c){var d=e.props,f=d.closeMenuOnSelect,m=d.isMulti,x=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:x}),f&&(e.setState({inputIsHiddenAfterUpdate:!m}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(r,{action:u,option:c})},e.selectOption=function(r){var u=e.props,c=u.blurInputOnSelect,d=u.isMulti,f=u.name,m=e.state.selectValue,x=d&&e.isOptionSelected(r,m),b=e.isOptionDisabled(r,m);if(x){var v=e.getOptionValue(r);e.setValue(m.filter(function(g){return e.getOptionValue(g)!==v}),"deselect-option",r)}else if(!b)d?e.setValue([].concat($e(m),[r]),"select-option",r):e.setValue(r,"select-option");else{e.ariaOnChange(r,{action:"select-option",option:r,name:f});return}c&&e.blurInput()},e.removeValue=function(r){var u=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(r),f=c.filter(function(x){return e.getOptionValue(x)!==d}),m=fe(u,f,f[0]||null);e.onChange(m,{action:"remove-value",removedValue:r}),e.focusInput()},e.clearValue=function(){var r=e.state.selectValue;e.onChange(fe(e.props.isMulti,[],null),{action:"clear",removedValues:r})},e.popValue=function(){var r=e.props.isMulti,u=e.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),f=fe(r,d,d[0]||null);e.onChange(f,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(r){return Pe(e.state.focusableOptionsWithIds,r)},e.getFocusableOptionsWithIds=function(){return ft(he(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return oi.apply(void 0,[e.props.classNamePrefix].concat(u))},e.getOptionLabel=function(r){return _t(e.props,r)},e.getOptionValue=function(r){return Ce(e.props,r)},e.getStyles=function(r,u){var c=e.props.unstyled,d=ar[r](u,c);d.boxSizing="border-box";var f=e.props.styles[r];return f?f(d,u):d},e.getClassNames=function(r,u){var c,d;return(c=(d=e.props.classNames)[r])===null||c===void 0?void 0:c.call(d,u)},e.getElementId=function(r){return"".concat(e.state.instancePrefix,"-").concat(r)},e.getComponents=function(){return Io(e.props)},e.buildCategorizedOptions=function(){return he(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Ut(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(r,u){e.setState({ariaSelection:S({value:r},u)})},e.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(r){e.blockOptionHover=!1},e.onControlMouseDown=function(r){if(!r.defaultPrevented){var u=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&e.onMenuClose():u&&e.openMenu("first"):(u&&(e.openAfterFocus=!0),e.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},e.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!e.props.isDisabled){var u=e.props,c=u.isMulti,d=u.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),r.preventDefault()}},e.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(e.clearValue(),r.preventDefault(),e.openAfterFocus=!1,r.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(r){typeof e.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&we(r.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(r)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(r){var u=r.touches,c=u&&u.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(r){var u=r.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),f=Math.abs(c.clientY-e.initialTouchY),m=5;e.userIsDragging=d>m||f>m}},e.onTouchEnd=function(r){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(r.target)&&e.menuListRef&&!e.menuListRef.contains(r.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(r){e.userIsDragging||e.onControlMouseDown(r)},e.onClearIndicatorTouchEnd=function(r){e.userIsDragging||e.onClearIndicatorMouseDown(r)},e.onDropdownIndicatorTouchEnd=function(r){e.userIsDragging||e.onDropdownIndicatorMouseDown(r)},e.handleInputChange=function(r){var u=e.props.inputValue,c=r.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:u}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(r){e.props.onFocus&&e.props.onFocus(r),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(r){var u=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(r),e.onInputChange("",{action:"input-blur",prevInputValue:u}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(r){if(!(e.blockOptionHover||e.state.focusedOption===r)){var u=e.getFocusableOptions(),c=u.indexOf(r);e.setState({focusedOption:r,focusedOptionId:c>-1?e.getFocusedOptionId(r):null})}},e.shouldHideSelectedOptions=function(){return Yt(e.props)},e.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),e.focus()},e.onKeyDown=function(r){var u=e.props,c=u.isMulti,d=u.backspaceRemovesValue,f=u.escapeClearsValue,m=u.inputValue,x=u.isClearable,b=u.isDisabled,v=u.menuIsOpen,g=u.onKeyDown,F=u.tabSelectsValue,y=u.openMenuOnFocus,D=e.state,O=D.focusedOption,A=D.focusedValue,P=D.selectValue;if(!b&&!(typeof g=="function"&&(g(r),r.defaultPrevented))){switch(e.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||m)return;e.focusValue("previous");break;case"ArrowRight":if(!c||m)return;e.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(A)e.removeValue(A);else{if(!d)return;c?e.popValue():x&&e.clearValue()}break;case"Tab":if(e.isComposing||r.shiftKey||!v||!F||!O||y&&e.isOptionSelected(O,P))return;e.selectOption(O);break;case"Enter":if(r.keyCode===229)break;if(v){if(!O||e.isComposing)return;e.selectOption(O);break}return;case"Escape":v?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:m}),e.onMenuClose()):x&&f&&e.clearValue();break;case" ":if(m)return;if(!v){e.openMenu("first");break}if(!O)return;e.selectOption(O);break;case"ArrowUp":v?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":v?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!v)return;e.focusOption("pageup");break;case"PageDown":if(!v)return;e.focusOption("pagedown");break;case"Home":if(!v)return;e.focusOption("first");break;case"End":if(!v)return;e.focusOption("last");break;default:return}r.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++vr),e.state.selectValue=Ze(o.value),o.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),s=e.buildFocusableOptions(),l=s.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=s[l],e.state.focusedOptionId=Pe(a,s[l])}return e}return bn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Qe(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!s&&e.isDisabled||r&&l&&!e.menuIsOpen)&&this.focusInput(),r&&s&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!s&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Qe(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,s=this.state,l=s.selectValue,r=s.isFocused,u=this.buildFocusableOptions(),c=e==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=s.indexOf(l);l||(r=-1);var u=s.length-1,c=-1;if(s.length){switch(e){case"previous":r===0?c=0:r===-1?c=u:c=r-1;break;case"next":r>-1&&r<u&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,u=l.indexOf(s);s||(u=-1),e==="up"?r=u>0?u-1:l.length-1:e==="down"?r=(u+1)%l.length:e==="pageup"?(r=u-a,r<0&&(r=0)):e==="pagedown"?(r=u+a,r>l.length-1&&(r=l.length-1)):e==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ae):S(S({},Ae),this.props.theme):Ae}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,r=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,m=d.isRtl,x=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:s,getClassNames:l,getValue:r,hasValue:b,isMulti:f,isRtl:m,options:x,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,s=e.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(e,a){return Wt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return qt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Gt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,s=e.isSearchable,l=e.inputId,r=e.inputValue,u=e.tabIndex,c=e.form,d=e.menuIsOpen,f=e.required,m=this.getComponents(),x=m.Input,b=this.state,v=b.inputIsHidden,g=b.ariaSelection,F=this.commonProps,y=l||this.getElementId("input"),D=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?h.createElement(x,w({},F,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:y,innerRef:this.getInputRef,isDisabled:a,isHidden:v,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:r},D)):h.createElement(zo,w({id:y,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:be,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,f=this.commonProps,m=this.props,x=m.controlShouldRenderValue,b=m.isDisabled,v=m.isMulti,g=m.inputValue,F=m.placeholder,y=this.state,D=y.selectValue,O=y.focusedValue,A=y.isFocused;if(!this.hasValue()||!x)return g?null:h.createElement(d,w({},f,{key:"placeholder",isDisabled:b,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),F);if(v)return D.map(function(I,V){var T=I===O,j="".concat(e.getOptionLabel(I),"-").concat(e.getOptionValue(I));return h.createElement(s,w({},f,{components:{Container:l,Label:r,Remove:u},isFocused:T,isDisabled:b,key:j,index:V,removeProps:{onClick:function(){return e.removeValue(I)},onTouchEnd:function(){return e.removeValue(I)},onMouseDown:function(q){q.preventDefault()}},data:I}),e.formatOptionLabel(I,"value"))});if(g)return null;var P=D[0];return h.createElement(c,w({},f,{data:P,isDisabled:b}),this.formatOptionLabel(P,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,w({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return h.createElement(a,w({},s,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,s=e.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,r=this.props.isDisabled,u=this.state.isFocused;return h.createElement(s,w({},l,{isDisabled:r,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,w({},s,{innerProps:u,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,r=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,f=a.NoOptionsMessage,m=a.Option,x=this.commonProps,b=this.state.focusedOption,v=this.props,g=v.captureMenuScroll,F=v.inputValue,y=v.isLoading,D=v.loadingMessage,O=v.minMenuHeight,A=v.maxMenuHeight,P=v.menuIsOpen,I=v.menuPlacement,V=v.menuPosition,T=v.menuPortalTarget,j=v.menuShouldBlockScroll,B=v.menuShouldScrollIntoView,q=v.noOptionsMessage,G=v.onMenuScrollToTop,L=v.onMenuScrollToBottom;if(!P)return null;var k=function(H,Y){var ee=H.type,z=H.data,te=H.isDisabled,X=H.isSelected,le=H.label,Qt=H.value,_e=b===z,We=te?void 0:function(){return e.onOptionHover(z)},en=te?void 0:function(){return e.selectOption(z)},qe="".concat(e.getElementId("option"),"-").concat(Y),tn={id:qe,onClick:en,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:X};return h.createElement(m,w({},x,{innerProps:tn,data:z,isDisabled:te,isSelected:X,key:qe,label:le,type:ee,value:Qt,isFocused:_e,innerRef:_e?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(H.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var H=R.data,Y=R.options,ee=R.index,z="".concat(e.getElementId("group"),"-").concat(ee),te="".concat(z,"-heading");return h.createElement(s,w({},x,{key:z,data:H,options:Y,Heading:l,headingProps:{id:te,data:R.data},label:e.formatGroupLabel(R.data)}),R.options.map(function(X){return k(X,"".concat(ee,"-").concat(X.index))}))}else if(R.type==="option")return k(R,"".concat(R.index))});else if(y){var N=D({inputValue:F});if(N===null)return null;_=h.createElement(d,x,N)}else{var Z=q({inputValue:F});if(Z===null)return null;_=h.createElement(f,x,Z)}var Q={minMenuHeight:O,maxMenuHeight:A,menuPlacement:I,menuPosition:V,menuShouldScrollIntoView:B},ue=h.createElement(Ci,w({},x,Q),function(R){var H=R.ref,Y=R.placerProps,ee=Y.placement,z=Y.maxHeight;return h.createElement(r,w({},x,Q,{innerRef:H,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:y,placement:ee}),h.createElement(Yo,{captureEnabled:g,onTopArrive:G,onBottomArrive:L,lockEnabled:j},function(te){return h.createElement(u,w({},x,{innerRef:function(le){e.getMenuListRef(le),te(le)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:e.getElementId("listbox")},isLoading:y,maxHeight:z,focusedOption:b}),_)}))});return T||V==="fixed"?h.createElement(c,w({},x,{appendTo:T,controlElement:this.controlRef,menuPlacement:I,menuPosition:V}),ue):ue}},{key:"renderFormField",value:function(){var e=this,a=this.props,s=a.delimiter,l=a.isDisabled,r=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return h.createElement(Jo,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(r)if(s){var f=d.map(function(b){return e.getOptionValue(b)}).join(s);return h.createElement("input",{name:u,type:"hidden",value:f})}else{var m=d.length>0?d.map(function(b,v){return h.createElement("input",{key:"i-".concat(v),name:u,type:"hidden",value:e.getOptionValue(b)})}):h.createElement("input",{name:u,type:"hidden",value:""});return h.createElement("div",null,m)}else{var x=d[0]?this.getOptionValue(d[0]):"";return h.createElement("input",{name:u,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return h.createElement($o,w({},e,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:r,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,s=e.IndicatorsContainer,l=e.SelectContainer,r=e.ValueContainer,u=this.props,c=u.className,d=u.id,f=u.isDisabled,m=u.menuIsOpen,x=this.state.isFocused,b=this.commonProps=this.getCommonProps();return h.createElement(l,w({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:x}),this.renderLiveRegion(),h.createElement(a,w({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:x,menuIsOpen:m}),h.createElement(r,w({},b,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),h.createElement(s,w({},b,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,f=a.instancePrefix,m=e.options,x=e.value,b=e.menuIsOpen,v=e.inputValue,g=e.isMulti,F=Ze(x),y={};if(s&&(x!==s.value||m!==s.options||b!==s.menuIsOpen||v!==s.inputValue)){var D=b?fr(e,F):[],O=b?ft(he(e,F),"".concat(f,"-option")):[],A=l?hr(a,F):null,P=mr(a,D),I=Pe(O,P);y={selectValue:F,focusedOption:P,focusedOptionId:I,focusableOptionsWithIds:O,focusedValue:A,clearFocusValueOnUpdate:!1}}var V=r!=null&&e!==s?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},T=u,j=c&&d;return c&&!j&&(T={value:fe(g,F,F[0]||null),options:F,action:"initial-input-focus"},j=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(T=null),S(S(S({},y),V),{},{prevProps:e,ariaSelection:T,prevWasFocused:j})}}]),i}(h.Component);Xt.defaultProps=pr;var gr=h.forwardRef(function(n,t){var i=jn(n);return h.createElement(Xt,w({ref:t},i))}),Kt=gr;const Jt=$.svg`
width: 18px;
height: 18px;
`,br=n=>p.jsx(Ne.DropdownIndicator,{...n,children:p.jsx(Jt,{children:p.jsx("use",{href:W+"#selectArrow"})})}),xr={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px",height:"52px"}}),control:(n,t)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${C.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:t.isFocused?`0 0 0 2px ${C.orangeColor}`:0,transition:`all ${C.animation}`,"&:hover":{borderColor:`${C.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px",height:"52px"}}),dropdownIndicator:(n,t)=>({...n,transition:`all ${C.animation}`,transform:t.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${C.whiteColor}`}),option:(n,t)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:t.isSelected?`${C.successColor}`:`${C.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${C.orangeColor}`,color:`${C.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:`${C.greyTextColor}`},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:`${C.orangeColor}`,width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:`${C.whiteColor}`}})},Cr=({dataFunc:n,currentValue:t})=>{const{categories:i}=se(s=>s.products),o=s=>s.slice(0,1).toUpperCase()+s.slice(1),e=i&&i.map(s=>({value:s,label:o(s)})),a=[{value:"Categories",label:"Categories"},...e];return p.jsx(Kt,{onChange:n,options:a,components:{DropdownIndicator:br},styles:xr,value:t===""?{value:"Categories",label:"Categories"}:a.find(s=>s.value===t)})},mt=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],Er=n=>p.jsx(Ne.DropdownIndicator,{...n,children:p.jsx(Jt,{children:p.jsx("use",{href:W+"#selectArrow"})})}),Sr={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px",height:"52px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,t)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${C.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:t.isFocused?`0 0 0 2px ${C.orangeColor}`:0,transition:`all ${C.animation}`,"&:hover":{borderColor:`${C.orangeColor}`},"@media (min-width: 768px)":{width:"204px",height:"52px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,t)=>({...n,transition:`all ${C.animation}`,transform:t.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${C.whiteColor}`}),option:(n,t)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:t.isSelected?`${C.successColor}`:`${C.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${C.orangeColor}`,color:`${C.whiteColor}`}})},wr=({dataFunc:n,currentValue:t})=>p.jsx(Kt,{onChange:n,options:mt,components:{DropdownIndicator:Er},styles:Sr,value:mt.find(i=>i.value===t),defaultValue:t}),yr=ne.svg`
  width: 18px;
  height: 18px;
`,Fr=ne.svg`
  width: 20px;
  height: 20px;
  stroke: ${C.orangeColor};
`,Or=ne.form`
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
`,Dr=()=>{const[n,t]=h.useState(!1),[i,o]=bt(),e=h.useMemo(()=>Object.fromEntries([...i]),[i]),{q:a,category:s,recommended:l}=e,r=xt({initialValues:{search:a??"",category:s??"",recommended:l??"All"},onSubmit:c=>{const{search:d}=c;o(d?f=>{const m=new URLSearchParams(f);return m.set("q",d),m}:f=>{const m=new URLSearchParams(f);return m.delete("q"),m})}}),u=c=>{t(!0),r.handleChange(c)};return p.jsxs(Or,{onSubmit:r.handleSubmit,children:[p.jsxs("div",{className:"input-search-block",children:[p.jsx("input",{id:"search",name:"search",type:"text",onChange:u,value:r.values.search,placeholder:"Search"}),p.jsxs("div",{className:"svgs-search-block",children:[n&&p.jsx("button",{type:"button",onClick:()=>{t(!1),o(c=>{const d=new URLSearchParams(c);return d.delete("q"),d}),r.values.search=""},children:p.jsx(Fr,{children:p.jsx("use",{href:W+"#icon-close"})})}),p.jsx("button",{type:"submit",children:p.jsx(yr,{children:p.jsx("use",{href:W+"#searchSvg"})})})]})]}),p.jsxs("div",{className:"selects-block",children:[p.jsx(Cr,{name:"category",dataFunc:c=>{r.setFieldValue("category",c.value),o(d=>{const f=new URLSearchParams(d);return c.value==="Categories"?(f.delete("category"),f):(f.set("category",c.value),f)})},currentValue:r.values.category}),p.jsx(wr,{name:"recommended",currentValue:r.values.recommended,dataFunc:c=>{r.setFieldValue("recommended",c.value),o(d=>{const f=new URLSearchParams(d);return c.value==="All"?(f.delete("recommended"),f):(f.set("recommended",c.value),f)})}})]}),p.jsx("p",{className:"filter-1440",children:"Filter"})]})},Ir=$.svg`
  width: 24px;
  height: 24px;
`,Zt=$.li`
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
`,Ar=$.span`
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
`,Pr=Se`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Vr=$.svg`
width: 80%;
height: 80%;
margin: 0 auto;
animation: ${Pr} 1s linear infinite;
`,Mr=$.div`
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
`,kr=$.div`
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
`,Rr=$.ul`
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
`,Lr=()=>{const[n]=bt(),[t,i]=h.useState(!1),[o,e]=h.useState(null),{products:a,isLoading:s,isSuccessPopUpShown:l,totalPages:r}=se(O=>O.products),u={page:1},c=h.useRef(null),d=h.useRef(null),f=Ee(),[m,x]=h.useState(1);h.useEffect(()=>{l&&i(!1)},[l]),h.useEffect(()=>{l||Ye(t)},[t,l]),h.useEffect(()=>{Ye(l)},[l]);const b=O=>{e(O),i(!0)},v=()=>{f(sn(!1)),i(!1)},g=h.useMemo(()=>Object.fromEntries([...n]),[n]),{q:F,category:y,recommended:D}=g;return F?u.q=F:delete u.q,y&&y!=="Categories"?u.cat=y.toLowerCase():delete u.cat,D&&D!=="All"?u.rec=D:delete u.rec,h.useEffect(()=>{x(1),c.current&&(c.current.scrollTop=0)},[D,F,y]),h.useEffect(()=>{if(m===r||m===r&&m>1&&r>1)return;const O=new IntersectionObserver(A=>{A[0].isIntersecting&&!s&&(x(m+1),c.current&&(c.current.scrollTop=c.current.scrollTop-200))},{threshold:.1});return d.current&&O.observe(d.current),()=>{const A=d.current;d.current&&O.unobserve(A)}},[s]),h.useEffect(()=>{m===r&&m!==1&&St("info","You have reached the end of search results"),!(m>r)&&f(an({queryParams:u,page:m}))},[D,F,y,f,m,r]),a===null?p.jsx(Mr,{children:p.jsx(Vr,{children:p.jsx("use",{href:W+"#icon-logo"})})}):a&&a.length>0?p.jsxs(p.Fragment,{children:[p.jsxs(Rr,{ref:c,children:[a.map(O=>s?p.jsx(Zt,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:p.jsx("div",{className:"loader"})},O._id):p.jsx(Hr,{handleOpenModal:b,data:O},O._id)),p.jsx("div",{style:{width:"100%",height:"1px"},children:s&&p.jsx(kr,{})}),p.jsx("div",{ref:d,style:{opacity:0},children:"refdiv"})]}),p.jsx(kn,{showModal:t,closeModal:v,data:o}),p.jsx(_r,{})]}):p.jsx(zr,{})},Ue=$.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,$r=$.span`
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
`,Tr=Se`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,Br=$.svg`
width: 16px;
  height: 16px;
  stroke: ${C.orangeColor};
  @media screen and (min-width: 768px) {
    ${Ue}:hover & {
      animation: ${Tr} 1000ms linear infinite;
    stroke: ${C.whiteColor};
             }
  }
`,jr=({children:n,onClick:t})=>p.jsxs(Ue,{type:"button",onClick:t,children:[p.jsx($r,{className:"add-btn-span",children:n}),p.jsx(Br,{children:p.jsx("use",{href:W+"#locationarrow"})})]}),Hr=({data:n,handleOpenModal:t})=>{const{blood:i}=se(c=>c.auth.user),{calories:o,category:e,title:a,weight:s,groupBloodNotAllowed:l,_id:r}=n,u=l[i];return p.jsxs(Zt,{children:[p.jsx("span",{className:"diet-span",children:"diet"}),p.jsxs("div",{className:"recommended-addbtn-div",children:[p.jsx(Ar,{className:"recommended-span",$color:u,children:u?"Recommended":"Not recommended"}),p.jsx(jr,{onClick:()=>t({calories:o,title:a,weight:s,_id:r}),children:"Add"})]}),p.jsxs("div",{className:"product-info-div",children:[p.jsxs("div",{className:"title-svg-div",children:[p.jsx(Ir,{children:p.jsx("use",{href:W+"#runningman"})}),p.jsxs("p",{className:"product-info-div-title",children:[" ",a]})]}),p.jsxs("div",{className:"detailed-info-div",children:[p.jsxs("p",{className:"detailed-name",children:["Calories: ",p.jsx("span",{className:"detailed-data",children:o})]}),p.jsxs("p",{className:"detailed-name",children:["Category: ",p.jsx("span",{className:"detailed-data",children:e})]}),p.jsxs("p",{className:"detailed-name",children:["Weight: ",p.jsx("span",{className:"detailed-data",children:s})]})]})]})]})},Nr=ne.div`
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
`,zr=()=>p.jsxs(Nr,{children:[p.jsxs("p",{className:"above-text",children:[p.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),p.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),Ur=document.querySelector("#add-product-success"),_r=()=>{const{isSuccessPopUpShown:n,calories:t}=se(e=>e.products),i=Ee();h.useEffect(()=>{if(!n)return;const e=a=>{a.code==="Escape"&&i(oe(!1))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[n,i]);const o=e=>{e.target===e.currentTarget&&i(oe(!1))};return Le.createPortal(n&&p.jsx(Cn,{onClick:o,children:p.jsxs(En,{children:[p.jsx(Sn,{onClick:()=>i(oe(!1)),children:p.jsx("use",{href:W+"#icon-close"})}),p.jsx("p",{className:"title",children:"Well done"}),p.jsxs("p",{className:"calories",children:["Calories: ",p.jsx("span",{className:"calories-span",children:t})]}),p.jsx("button",{onClick:()=>i(oe(!1)),className:"button",type:"button",children:"Next product"}),p.jsxs(wn,{to:"/diary",onClick:()=>i(oe(!1)),children:["To the diary ",p.jsx(yn,{children:p.jsx("use",{href:W+"#locationarrow"})})]})]})}),Ur)},Wr="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",qr="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",Gr=ne.section`

@media screen and (min-width: 1440px) {
  // height: 90vh;
 background: url(${Wr});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${qr});
    }
}
`,Yr=ne.div`
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
`,Xr=ne.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,oa=()=>{const{addProductFalse:n}=se(i=>i.products),t=Ee();return h.useEffect(()=>{t(un()),n&&St("error","Enter correct data!")},[n,t]),p.jsx(Fn,{direction:"X",children:p.jsx(Gr,{children:p.jsxs(Yr,{children:[p.jsxs("div",{className:"title-form-block",children:[p.jsx(Xr,{children:"Products"}),p.jsx(Dr,{})]}),p.jsx(Lr,{}),p.jsx(ln,{})]})})})};export{oa as default};
