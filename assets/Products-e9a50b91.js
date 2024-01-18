import{b as V,s as E,B as Ye,S as an,u as Ve,i as sn,j as m,c as p,e as xt,k as Le,m as Et,n as Re,o as un,p as ln,N as cn,q as le,t as dn}from"./index-4a035dd1.js";import{u as Ct,c as pn,a as fn}from"./index.esm-27917dfd.js";import{e as re,a as wt,i as hn,k as mn,j as C,_ as gn,h as St,b as vn,c as bn,d as xn,g as En}from"./defineProperty-db8091c5.js";import{_ as y,n as te}from"./emotion-styled.browser.esm-4315ce8a.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const Cn=V.input`

    width: 287px;
    height: 34px;
    border-radius: 12px;
    border: 1px solid ${E.orangeColor};
    background-color: inherit;
    padding-left: 8px;
    padding-right: 48px;
    color: ${E.whiteColor};
    line-height: 1.29;
 
    @media screen and (min-width: 768px) {
      width: 155px;
      height: 40px;
    }

  `,wn=V.form`
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
    border: 1px solid ${E.orangeColor};
    background-color: inherit;
    padding-left: 8px;
    padding-right: 8px;
    color: ${E.greyTextColor};
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
bottom: -50px;
height: 36px;
color: ${E.errorColor};
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
    color: ${E.whiteColor};
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
    background: ${E.orangeColor};

    color: ${E.whiteColor};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;
    transition: background 250ms linear;
    &:hover {
      background: ${E.orange2Color};
    }
    &:focus {
      background: ${E.orange2Color};
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
    color: ${E.whiteColor};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;

    transition: background ${E.animation};
    &:hover {
      background: ${E.orange2Color};
    }
    &:focus {
      background: ${E.orange2Color};
    }
  }
`,Sn=()=>{const n=new Date,t=n.getDate(),i=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear();return`${t}-${i}-${o}`},yn=n=>{n?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},yt=(n,t)=>{const i={position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:an};switch(n){case"info":Ye.info(t,i);break;case"error":Ye.error(t,i);break}},Fn=({data:n,closeModal:t})=>{const{title:i,calories:o,_id:e}=n||{},a=Ve(),s=Ct({enableReinitialize:!0,initialValues:{title:i,weight:0,calories:0},validationSchema:pn().shape({weight:fn().required("Please enter weight").min(2,"Weight must be at least 2 characters").max(4,"Weight cannot be more than 4 characters")}),onSubmit:r=>{const{weight:u,calories:c}=r,d={date:Sn(),product:e,amount:u,calories:Math.ceil(c)};a(sn(d))}}),l=r=>{if(!(isNaN(r.target.value)&&r.target.value!=="")&&(r.target.value===""&&s.setValues({...s.values,calories:""}),s.handleChange(r),r.target.value>0)){const u=parseFloat(Number(r.target.value)),c=u*o/100;s.setValues({...s.values,weight:u,calories:c})}};return m.jsxs(wn,{onSubmit:s.handleSubmit,children:[m.jsxs("div",{className:"inputs-block",children:[m.jsx("input",{id:"title",name:"title",type:"text",defaultValue:s.values.title,disabled:!0,className:"title-input"}),m.jsxs("div",{className:"weight-input-block",children:[m.jsx(Cn,{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:l,value:s.values.weight}),m.jsx("p",{className:"error-message",children:s.errors.weight}),m.jsx("span",{className:"grams-span",children:"grams"})]})]}),m.jsxs("div",{className:"calories-block",children:[m.jsx("span",{className:"calories-span",children:"Calories: "}),m.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:s.values.calories,className:"calories-input"})]}),m.jsxs("div",{className:"button-block",children:[m.jsx("button",{className:"add-button",type:"submit",disabled:!!(s.errors.weight||s.values.weight===0),children:"Add to diary"}),m.jsx("button",{onClick:t,className:"cancel-button",type:"button",children:"Cancel"})]})]})},$e=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M13.5 4.5L4.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M4.5 4.5L13.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ae=V.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,On=V($e)`
  transition:
    stroke ${E.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  > path {
    stroke: white;
  }
  @media screen and (min-width: 768px) {
    ${Ae}:hover & {
      > path {
        stroke: ${E.orangeColor};
      }
    }
    ${Ae}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,Dn=V.div`
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
`,In=V.div`
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
`,An=document.querySelector("#add-product-modal"),Mn=({data:n,closeModal:t,showModal:i})=>{p.useEffect(()=>{if(!i)return;const e=a=>{a.code==="Escape"&&t()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t,i]);const o=e=>{e.target===e.currentTarget&&t()};return xt.createPortal(m.jsx(Dn,{onClick:o,className:i?"":"hide-hidden",children:m.jsxs(In,{className:"modal",children:[m.jsx(Ae,{onClick:t,type:"button",children:m.jsx(On,{})}),m.jsx(Fn,{data:n,closeModal:t})]})}),An)};function Xe(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),i.push.apply(i,o)}return i}function w(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Xe(Object(i),!0).forEach(function(o){re(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Xe(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function kn(n){if(Array.isArray(n))return n}function Pn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,e,a,s,l=[],r=!0,u=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==t);r=!0);}catch(c){u=!0,e=c}finally{try{if(!r&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(u)throw e}}return l}}function Vn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){return kn(n)||Pn(n,t)||wt(n,t)||Vn()}function Ln(n,t){if(n==null)return{};var i={},o=Object.keys(n),e,a;for(a=0;a<o.length;a++)e=o[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}function K(n,t){if(n==null)return{};var i=Ln(n,t),o,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)o=a[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var Rn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function $n(n){var t=n.defaultInputValue,i=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,a=n.defaultValue,s=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,u=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,g=n.value,x=K(n,Rn),b=p.useState(l!==void 0?l:i),h=X(b,2),v=h[0],O=h[1],F=p.useState(r!==void 0?r:e),S=X(F,2),I=S[0],A=S[1],M=p.useState(g!==void 0?g:s),D=X(M,2),k=D[0],T=D[1],j=p.useCallback(function(N,Z){typeof u=="function"&&u(N,Z),T(N)},[u]),B=p.useCallback(function(N,Z){var J;typeof c=="function"&&(J=c(N,Z)),O(J!==void 0?J:N)},[c]),W=p.useCallback(function(){typeof f=="function"&&f(),A(!0)},[f]),q=p.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),$=l!==void 0?l:v,L=r!==void 0?r:I,_=g!==void 0?g:k;return w(w({},x),{},{inputValue:$,menuIsOpen:L,onChange:j,onInputChange:B,onMenuClose:q,onMenuOpen:W,value:_})}function Tn(n){if(Array.isArray(n))return hn(n)}function Bn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function jn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(n){return Tn(n)||Bn(n)||wt(n)||jn()}function Hn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Nn=Math.min,zn=Math.max,me=Math.round,ce=Math.floor,ge=n=>({x:n,y:n});function Un(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Ft(n){return Dt(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function Ot(n){var t;return(t=(Dt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Dt(n){return n instanceof Node||n instanceof U(n).Node}function Me(n){return n instanceof Element||n instanceof U(n).Element}function Be(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function Ke(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function It(n){const{overflow:t,overflowX:i,overflowY:o,display:e}=je(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(e)}function _n(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Wn(n){return["html","body","#document"].includes(Ft(n))}function je(n){return U(n).getComputedStyle(n)}function qn(n){if(Ft(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ke(n)&&n.host||Ot(n);return Ke(t)?t.host:t}function At(n){const t=qn(n);return Wn(t)?n.ownerDocument?n.ownerDocument.body:n.body:Be(t)&&It(t)?t:At(t)}function ve(n,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=At(n),a=e===((o=n.ownerDocument)==null?void 0:o.body),s=U(e);return a?t.concat(s,s.visualViewport||[],It(e)?e:[],s.frameElement&&i?ve(s.frameElement):[]):t.concat(e,ve(e,[],i))}function Gn(n){const t=je(n);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=Be(n),a=e?n.offsetWidth:i,s=e?n.offsetHeight:o,l=me(i)!==a||me(o)!==s;return l&&(i=a,o=s),{width:i,height:o,$:l}}function He(n){return Me(n)?n:n.contextElement}function we(n){const t=He(n);if(!Be(t))return ge(1);const i=t.getBoundingClientRect(),{width:o,height:e,$:a}=Gn(t);let s=(a?me(i.width):i.width)/o,l=(a?me(i.height):i.height)/e;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Yn=ge(0);function Xn(n){const t=U(n);return!_n()||!t.visualViewport?Yn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Kn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==U(n)?!1:t}function Ze(n,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=He(n);let s=ge(1);t&&(o?Me(o)&&(s=we(o)):s=we(n));const l=Kn(a,i,o)?Xn(a):ge(0);let r=(e.left+l.x)/s.x,u=(e.top+l.y)/s.y,c=e.width/s.x,d=e.height/s.y;if(a){const f=U(a),g=o&&Me(o)?U(o):o;let x=f.frameElement;for(;x&&o&&g!==f;){const b=we(x),h=x.getBoundingClientRect(),v=je(x),O=h.left+(x.clientLeft+parseFloat(v.paddingLeft))*b.x,F=h.top+(x.clientTop+parseFloat(v.paddingTop))*b.y;r*=b.x,u*=b.y,c*=b.x,d*=b.y,r+=O,u+=F,x=U(x).frameElement}}return Un({width:c,height:d,x:r,y:u})}function Zn(n,t){let i=null,o;const e=Ot(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function s(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:u,top:c,width:d,height:f}=n.getBoundingClientRect();if(l||t(),!d||!f)return;const g=ce(c),x=ce(e.clientWidth-(u+d)),b=ce(e.clientHeight-(c+f)),h=ce(u),O={rootMargin:-g+"px "+-x+"px "+-b+"px "+-h+"px",threshold:zn(0,Nn(1,r))||1};let F=!0;function S(I){const A=I[0].intersectionRatio;if(A!==r){if(!F)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}F=!1}try{i=new IntersectionObserver(S,{...O,root:e.ownerDocument})}catch{i=new IntersectionObserver(S,O)}i.observe(n)}return s(!0),a}function Jn(n,t,i,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,u=He(n),c=e||a?[...u?ve(u):[],...ve(t)]:[];c.forEach(v=>{e&&v.addEventListener("scroll",i,{passive:!0}),a&&v.addEventListener("resize",i)});const d=u&&l?Zn(u,i):null;let f=-1,g=null;s&&(g=new ResizeObserver(v=>{let[O]=v;O&&O.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{g&&g.observe(t)})),i()}),u&&!r&&g.observe(u),g.observe(t));let x,b=r?Ze(n):null;r&&h();function h(){const v=Ze(n);b&&(v.x!==b.x||v.y!==b.y||v.width!==b.width||v.height!==b.height)&&i(),b=v,x=requestAnimationFrame(h)}return i(),()=>{c.forEach(v=>{e&&v.removeEventListener("scroll",i),a&&v.removeEventListener("resize",i)}),d&&d(),g&&g.disconnect(),g=null,r&&cancelAnimationFrame(x)}}var ke=p.useLayoutEffect,Qn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],be=function(){};function ei(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function ti(n,t){for(var i=arguments.length,o=new Array(i>2?i-2:0),e=2;e<i;e++)o[e-2]=arguments[e];var a=[].concat(o);if(t&&n)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(ei(n,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Je=function(t){return ci(t)?t.filter(Boolean):gn(t)==="object"&&t!==null?[t]:[]},Mt=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=K(t,Qn);return w({},i)},P=function(t,i,o){var e=t.cx,a=t.getStyles,s=t.getClassNames,l=t.className;return{css:a(i,t),className:e(o??{},s(i,t),l)}};function Ce(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function ni(n){return Ce(n)?window.innerHeight:n.clientHeight}function kt(n){return Ce(n)?window.pageYOffset:n.scrollTop}function xe(n,t){if(Ce(n)){window.scrollTo(0,t);return}n.scrollTop=t}function ii(n){var t=getComputedStyle(n),i=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function oi(n,t,i,o){return i*((n=n/o-1)*n*n+1)+t}function de(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:be,e=kt(n),a=t-e,s=10,l=0;function r(){l+=s;var u=oi(l,e,a,i);xe(n,u),l<i?window.requestAnimationFrame(r):o(n)}r()}function Qe(n,t){var i=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>i.bottom?xe(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<i.top&&xe(n,Math.max(t.offsetTop-e,0))}function ri(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function et(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function ai(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Pt=!1,si={get passive(){return Pt=!0}},pe=typeof window<"u"?window:{};pe.addEventListener&&pe.removeEventListener&&(pe.addEventListener("p",be,si),pe.removeEventListener("p",be,!1));var ui=Pt;function li(n){return n!=null}function ci(n){return Array.isArray(n)}function fe(n,t,i){return n?t:i}var di=function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),e=1;e<i;e++)o[e-1]=arguments[e];var a=Object.entries(t).filter(function(s){var l=X(s,1),r=l[0];return!o.includes(r)});return a.reduce(function(s,l){var r=X(l,2),u=r[0],c=r[1];return s[u]=c,s},{})},pi=["children","innerProps"],fi=["children","innerProps"];function hi(n){var t=n.maxHeight,i=n.menuEl,o=n.minHeight,e=n.placement,a=n.shouldScroll,s=n.isFixedPosition,l=n.controlHeight,r=ii(i),u={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return u;var c=r.getBoundingClientRect(),d=c.height,f=i.getBoundingClientRect(),g=f.bottom,x=f.height,b=f.top,h=i.offsetParent.getBoundingClientRect(),v=h.top,O=s?window.innerHeight:ni(r),F=kt(r),S=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=v-I,M=O-b,D=A+F,k=d-F-b,T=g-O+F+S,j=F+b-I,B=160;switch(e){case"auto":case"bottom":if(M>=x)return{placement:"bottom",maxHeight:t};if(k>=x&&!s)return a&&de(r,T,B),{placement:"bottom",maxHeight:t};if(!s&&k>=o||s&&M>=o){a&&de(r,T,B);var W=s?M-S:k-S;return{placement:"bottom",maxHeight:W}}if(e==="auto"||s){var q=t,$=s?A:D;return $>=o&&(q=Math.min($-S-l,t)),{placement:"top",maxHeight:q}}if(e==="bottom")return a&&xe(r,T),{placement:"bottom",maxHeight:t};break;case"top":if(A>=x)return{placement:"top",maxHeight:t};if(D>=x&&!s)return a&&de(r,j,B),{placement:"top",maxHeight:t};if(!s&&D>=o||s&&A>=o){var L=t;return(!s&&D>=o||s&&A>=o)&&(L=s?A-I:D-I),a&&de(r,j,B),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return u}function mi(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var Vt=function(t){return t==="auto"?"bottom":t},gi=function(t,i){var o,e=t.placement,a=t.theme,s=a.borderRadius,l=a.spacing,r=a.colors;return w((o={label:"menu"},re(o,mi(e),"100%"),re(o,"position","absolute"),re(o,"width","100%"),re(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Lt=p.createContext(null),vi=function(t){var i=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,l=t.menuShouldScrollIntoView,r=t.theme,u=p.useContext(Lt)||{},c=u.setPortalPlacement,d=p.useRef(null),f=p.useState(e),g=X(f,2),x=g[0],b=g[1],h=p.useState(null),v=X(h,2),O=v[0],F=v[1],S=r.spacing.controlHeight;return ke(function(){var I=d.current;if(I){var A=s==="fixed",M=l&&!A,D=hi({maxHeight:e,menuEl:I,minHeight:o,placement:a,shouldScroll:M,isFixedPosition:A,controlHeight:S});b(D.maxHeight),F(D.placement),c==null||c(D.placement)}},[e,a,s,l,o,c,S]),i({ref:d,placerProps:w(w({},t),{},{placement:O||Vt(a),maxHeight:x})})},bi=function(t){var i=t.children,o=t.innerRef,e=t.innerProps;return C("div",y({},P(t,"menu",{menu:!0}),{ref:o},e),i)},xi=bi,Ei=function(t,i){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return w({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},Ci=function(t){var i=t.children,o=t.innerProps,e=t.innerRef,a=t.isMulti;return C("div",y({},P(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},o),i)},Rt=function(t,i){var o=t.theme,e=o.spacing.baseUnit,a=o.colors;return w({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},wi=Rt,Si=Rt,yi=function(t){var i=t.children,o=i===void 0?"No options":i,e=t.innerProps,a=K(t,pi);return C("div",y({},P(w(w({},a),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},Fi=function(t){var i=t.children,o=i===void 0?"Loading...":i,e=t.innerProps,a=K(t,fi);return C("div",y({},P(w(w({},a),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},Oi=function(t){var i=t.rect,o=t.offset,e=t.position;return{left:i.left,position:e,top:o,width:i.width,zIndex:1}},Di=function(t){var i=t.appendTo,o=t.children,e=t.controlElement,a=t.innerProps,s=t.menuPlacement,l=t.menuPosition,r=p.useRef(null),u=p.useRef(null),c=p.useState(Vt(s)),d=X(c,2),f=d[0],g=d[1],x=p.useMemo(function(){return{setPortalPlacement:g}},[]),b=p.useState(null),h=X(b,2),v=h[0],O=h[1],F=p.useCallback(function(){if(e){var M=ri(e),D=l==="fixed"?0:window.pageYOffset,k=M[f]+D;(k!==(v==null?void 0:v.offset)||M.left!==(v==null?void 0:v.rect.left)||M.width!==(v==null?void 0:v.rect.width))&&O({offset:k,rect:M})}},[e,l,f,v==null?void 0:v.offset,v==null?void 0:v.rect.left,v==null?void 0:v.rect.width]);ke(function(){F()},[F]);var S=p.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),e&&r.current&&(u.current=Jn(e,r.current,F,{elementResize:"ResizeObserver"in window}))},[e,F]);ke(function(){S()},[S]);var I=p.useCallback(function(M){r.current=M,S()},[S]);if(!i&&l!=="fixed"||!v)return null;var A=C("div",y({ref:I},P(w(w({},t),{},{offset:v.offset,position:l,rect:v.rect}),"menuPortal",{"menu-portal":!0}),a),o);return C(Lt.Provider,{value:x},i?xt.createPortal(A,i):A)},Ii=function(t){var i=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Ai=function(t){var i=t.children,o=t.innerProps,e=t.isDisabled,a=t.isRtl;return C("div",y({},P(t,"container",{"--is-disabled":e,"--is-rtl":a}),o),i)},Mi=function(t,i){var o=t.theme.spacing,e=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return w({alignItems:"center",display:e&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},ki=function(t){var i=t.children,o=t.innerProps,e=t.isMulti,a=t.hasValue;return C("div",y({},P(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),o),i)},Pi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Vi=function(t){var i=t.children,o=t.innerProps;return C("div",y({},P(t,"indicatorsContainer",{indicators:!0}),o),i)},tt,Li=["size"],Ri=["innerProps","isRtl","size"],$i={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},$t=function(t){var i=t.size,o=K(t,Li);return C("svg",y({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:$i},o))},Ne=function(t){return C($t,y({size:20},t),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Tt=function(t){return C($t,y({size:20},t),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Bt=function(t,i){var o=t.isFocused,e=t.theme,a=e.spacing.baseUnit,s=e.colors;return w({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?s.neutral60:s.neutral20,padding:a*2,":hover":{color:o?s.neutral80:s.neutral40}})},Ti=Bt,Bi=function(t){var i=t.children,o=t.innerProps;return C("div",y({},P(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||C(Tt,null))},ji=Bt,Hi=function(t){var i=t.children,o=t.innerProps;return C("div",y({},P(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||C(Ne,null))},Ni=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,s=e.colors;return w({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},zi=function(t){var i=t.innerProps;return C("span",y({},i,P(t,"indicatorSeparator",{"indicator-separator":!0})))},Ui=mn(tt||(tt=Hn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),_i=function(t,i){var o=t.isFocused,e=t.size,a=t.theme,s=a.colors,l=a.spacing.baseUnit;return w({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?s.neutral60:s.neutral20,padding:l*2})},Se=function(t){var i=t.delay,o=t.offset;return C("span",{css:St({animation:"".concat(Ui," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Wi=function(t){var i=t.innerProps,o=t.isRtl,e=t.size,a=e===void 0?4:e,s=K(t,Ri);return C("div",y({},P(w(w({},s),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),C(Se,{delay:0,offset:o}),C(Se,{delay:160,offset:!0}),C(Se,{delay:320,offset:!o}))},qi=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.theme,s=a.colors,l=a.borderRadius,r=a.spacing;return w({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?s.neutral5:s.neutral0,borderColor:o?s.neutral10:e?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:e?s.primary:s.neutral30}})},Gi=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.innerRef,s=t.innerProps,l=t.menuIsOpen;return C("div",y({ref:a},P(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":l}),s,{"aria-disabled":o||void 0}),i)},Yi=Gi,Xi=["data"],Ki=function(t,i){var o=t.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Zi=function(t){var i=t.children,o=t.cx,e=t.getStyles,a=t.getClassNames,s=t.Heading,l=t.headingProps,r=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return C("div",y({},P(t,"group",{group:!0}),r),C(s,y({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:o}),u),C("div",null,i))},Ji=function(t,i){var o=t.theme,e=o.colors,a=o.spacing;return w({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Qi=function(t){var i=Mt(t);i.data;var o=K(i,Xi);return C("div",y({},P(t,"groupHeading",{"group-heading":!0}),o))},eo=Zi,to=["innerRef","isDisabled","isHidden","inputClassName"],no=function(t,i){var o=t.isDisabled,e=t.value,a=t.theme,s=a.spacing,l=a.colors;return w(w({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},io),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},jt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},io={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":w({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},jt)},oo=function(t){return w({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},jt)},ro=function(t){var i=t.cx,o=t.value,e=Mt(t),a=e.innerRef,s=e.isDisabled,l=e.isHidden,r=e.inputClassName,u=K(e,to);return C("div",y({},P(t,"input",{"input-container":!0}),{"data-value":o||""}),C("input",y({className:i({input:!0},r),ref:a,style:oo(l),disabled:s},u)))},ao=ro,so=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,s=o.colors;return w({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},uo=function(t,i){var o=t.theme,e=o.borderRadius,a=o.colors,s=t.cropWithEllipsis;return w({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},lo=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,s=o.colors,l=t.isFocused;return w({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Ht=function(t){var i=t.children,o=t.innerProps;return C("div",o,i)},co=Ht,po=Ht;function fo(n){var t=n.children,i=n.innerProps;return C("div",y({role:"button"},i),t||C(Ne,{size:14}))}var ho=function(t){var i=t.children,o=t.components,e=t.data,a=t.innerProps,s=t.isDisabled,l=t.removeProps,r=t.selectProps,u=o.Container,c=o.Label,d=o.Remove;return C(u,{data:e,innerProps:w(w({},P(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:r},C(c,{data:e,innerProps:w({},P(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),C(d,{data:e,innerProps:w(w({},P(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},mo=ho,go=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.isSelected,s=t.theme,l=s.spacing,r=s.colors;return w({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:e?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},vo=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.isSelected,s=t.innerRef,l=t.innerProps;return C("div",y({},P(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":a}),{ref:s,"aria-disabled":o},l),i)},bo=vo,xo=function(t,i){var o=t.theme,e=o.spacing,a=o.colors;return w({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},Eo=function(t){var i=t.children,o=t.innerProps;return C("div",y({},P(t,"placeholder",{placeholder:!0}),o),i)},Co=Eo,wo=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing,s=e.colors;return w({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},So=function(t){var i=t.children,o=t.isDisabled,e=t.innerProps;return C("div",y({},P(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),i)},yo=So,ze={ClearIndicator:Hi,Control:Yi,DropdownIndicator:Bi,DownChevron:Tt,CrossIcon:Ne,Group:eo,GroupHeading:Qi,IndicatorsContainer:Vi,IndicatorSeparator:zi,Input:ao,LoadingIndicator:Wi,Menu:xi,MenuList:Ci,MenuPortal:Di,LoadingMessage:Fi,NoOptionsMessage:yi,MultiValue:mo,MultiValueContainer:co,MultiValueLabel:po,MultiValueRemove:fo,Option:bo,Placeholder:Co,SelectContainer:Ai,SingleValue:yo,ValueContainer:ki},Fo=function(t){return w(w({},ze),t.components)},nt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Oo(n,t){return!!(n===t||nt(n)&&nt(t))}function Do(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!Oo(n[i],t[i]))return!1;return!0}function Io(n,t){t===void 0&&(t=Do);var i=null;function o(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var s=n.apply(this,e);return i={lastResult:s,lastArgs:e,lastThis:this},s}return o.clear=function(){i=null},o}var Ao={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Mo=function(t){return C("span",y({css:Ao},t))},it=Mo,ko={guidance:function(t){var i=t.isSearchable,o=t.isMulti,e=t.tabSelectsValue,a=t.context,s=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,o=t.label,e=o===void 0?"":o,a=t.labels,s=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,o=t.focused,e=t.options,a=t.label,s=a===void 0?"":a,l=t.selectValue,r=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(b,h){return b&&b.length?"".concat(b.indexOf(h)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var f=r?" disabled":"",g="".concat(u?" selected":"").concat(f);return"".concat(s).concat(g,", ").concat(d(e,o),".")}return""},onFilter:function(t){var i=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},Po=function(t){var i=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,s=t.isFocused,l=t.selectValue,r=t.selectProps,u=t.id,c=t.isAppleDevice,d=r.ariaLiveMessages,f=r.getOptionLabel,g=r.inputValue,x=r.isMulti,b=r.isOptionDisabled,h=r.isSearchable,v=r.menuIsOpen,O=r.options,F=r.screenReaderStatus,S=r.tabSelectsValue,I=r.isLoading,A=r["aria-label"],M=r["aria-live"],D=p.useMemo(function(){return w(w({},ko),d||{})},[d]),k=p.useMemo(function(){var $="";if(i&&D.onChange){var L=i.option,_=i.options,N=i.removedValue,Z=i.removedValues,J=i.value,se=function(Y){return Array.isArray(Y)?null:Y},R=N||L||se(J),H=R?f(R):"",G=_||Z||void 0,Q=G?G.map(f):[],z=w({isDisabled:R&&b(R,l),label:H,labels:Q},i);$=D.onChange(z)}return $},[i,D,b,l,f]),T=p.useMemo(function(){var $="",L=o||e,_=!!(o&&l&&l.includes(o));if(L&&D.onFocus){var N={focused:L,label:f(L),isDisabled:b(L,l),isSelected:_,options:a,context:L===o?"menu":"value",selectValue:l,isAppleDevice:c};$=D.onFocus(N)}return $},[o,e,f,b,D,a,l,c]),j=p.useMemo(function(){var $="";if(v&&O.length&&!I&&D.onFilter){var L=F({count:a.length});$=D.onFilter({inputValue:g,resultsMessage:L})}return $},[a,g,v,D,O,F,I]),B=(i==null?void 0:i.action)==="initial-input-focus",W=p.useMemo(function(){var $="";if(D.guidance){var L=e?"value":v?"menu":"input";$=D.guidance({"aria-label":A,context:L,isDisabled:o&&b(o,l),isMulti:x,isSearchable:h,tabSelectsValue:S,isInitialFocus:B})}return $},[A,o,e,x,b,h,v,D,l,S,B]),q=C(p.Fragment,null,C("span",{id:"aria-selection"},k),C("span",{id:"aria-focused"},T),C("span",{id:"aria-results"},j),C("span",{id:"aria-guidance"},W));return C(p.Fragment,null,C(it,{id:u},B&&q),C(it,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!B&&q))},Vo=Po,Pe=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Lo=new RegExp("["+Pe.map(function(n){return n.letters}).join("")+"]","g"),Nt={};for(var ye=0;ye<Pe.length;ye++)for(var Fe=Pe[ye],Oe=0;Oe<Fe.letters.length;Oe++)Nt[Fe.letters[Oe]]=Fe.base;var zt=function(t){return t.replace(Lo,function(i){return Nt[i]})},Ro=Io(zt),ot=function(t){return t.replace(/^\s+|\s+$/g,"")},$o=function(t){return"".concat(t.label," ").concat(t.value)},To=function(t){return function(i,o){if(i.data.__isNew__)return!0;var e=w({ignoreCase:!0,ignoreAccents:!0,stringify:$o,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,s=e.ignoreAccents,l=e.stringify,r=e.trim,u=e.matchFrom,c=r?ot(o):o,d=r?ot(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Ro(c),d=zt(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Bo=["innerRef"];function jo(n){var t=n.innerRef,i=K(n,Bo),o=di(i,"onExited","in","enter","exit","appear");return C("input",y({ref:t},o,{css:St({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Ho=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function No(n){var t=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,s=p.useRef(!1),l=p.useRef(!1),r=p.useRef(0),u=p.useRef(null),c=p.useCallback(function(h,v){if(u.current!==null){var O=u.current,F=O.scrollTop,S=O.scrollHeight,I=O.clientHeight,A=u.current,M=v>0,D=S-I-F,k=!1;D>v&&s.current&&(o&&o(h),s.current=!1),M&&l.current&&(a&&a(h),l.current=!1),M&&v>D?(i&&!s.current&&i(h),A.scrollTop=S,k=!0,s.current=!0):!M&&-v>F&&(e&&!l.current&&e(h),A.scrollTop=0,k=!0,l.current=!0),k&&Ho(h)}},[i,o,e,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),f=p.useCallback(function(h){r.current=h.changedTouches[0].clientY},[]),g=p.useCallback(function(h){var v=r.current-h.changedTouches[0].clientY;c(h,v)},[c]),x=p.useCallback(function(h){if(h){var v=ui?{passive:!1}:!1;h.addEventListener("wheel",d,v),h.addEventListener("touchstart",f,v),h.addEventListener("touchmove",g,v)}},[g,f,d]),b=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",f,!1),h.removeEventListener("touchmove",g,!1))},[g,f,d]);return p.useEffect(function(){if(t){var h=u.current;return x(h),function(){b(h)}}},[t,x,b]),function(h){u.current=h}}var rt=["boxSizing","height","overflow","paddingRight","position"],at={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function st(n){n.preventDefault()}function ut(n){n.stopPropagation()}function lt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function ct(){return"ontouchstart"in window||navigator.maxTouchPoints}var dt=!!(typeof window<"u"&&window.document&&window.document.createElement),oe=0,ne={capture:!1,passive:!1};function zo(n){var t=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,e=p.useRef({}),a=p.useRef(null),s=p.useCallback(function(r){if(dt){var u=document.body,c=u&&u.style;if(o&&rt.forEach(function(x){var b=c&&c[x];e.current[x]=b}),o&&oe<1){var d=parseInt(e.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,g=window.innerWidth-f+d||0;Object.keys(at).forEach(function(x){var b=at[x];c&&(c[x]=b)}),c&&(c.paddingRight="".concat(g,"px"))}u&&ct()&&(u.addEventListener("touchmove",st,ne),r&&(r.addEventListener("touchstart",lt,ne),r.addEventListener("touchmove",ut,ne))),oe+=1}},[o]),l=p.useCallback(function(r){if(dt){var u=document.body,c=u&&u.style;oe=Math.max(oe-1,0),o&&oe<1&&rt.forEach(function(d){var f=e.current[d];c&&(c[d]=f)}),u&&ct()&&(u.removeEventListener("touchmove",st,ne),r&&(r.removeEventListener("touchstart",lt,ne),r.removeEventListener("touchmove",ut,ne)))}},[o]);return p.useEffect(function(){if(t){var r=a.current;return s(r),function(){l(r)}}},[t,s,l]),function(r){a.current=r}}var Uo=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},_o={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Wo(n){var t=n.children,i=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,a=n.onBottomArrive,s=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,u=No({isEnabled:e,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:r}),c=zo({isEnabled:i}),d=function(g){u(g),c(g)};return C(p.Fragment,null,i&&C("div",{onClick:Uo,css:_o}),t(d))}var qo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Go=function(t){var i=t.name,o=t.onFocus;return C("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:qo,value:"",onChange:function(){}})},Yo=Go;function Ue(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Xo(){return Ue(/^iPhone/i)}function Ut(){return Ue(/^Mac/i)}function Ko(){return Ue(/^iPad/i)||Ut()&&navigator.maxTouchPoints>1}function Zo(){return Xo()||Ko()}function Jo(){return Ut()||Zo()}var Qo=function(t){return t.label},er=function(t){return t.label},tr=function(t){return t.value},nr=function(t){return!!t.isDisabled},ir={clearIndicator:ji,container:Ii,control:qi,dropdownIndicator:Ti,group:Ki,groupHeading:Ji,indicatorsContainer:Pi,indicatorSeparator:Ni,input:no,loadingIndicator:_i,loadingMessage:Si,menu:gi,menuList:Ei,menuPortal:Oi,multiValue:so,multiValueLabel:uo,multiValueRemove:lo,noOptionsMessage:wi,option:go,placeholder:xo,singleValue:wo,valueContainer:Mi},or={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},rr=4,_t=4,ar=38,sr=_t*2,ur={baseUnit:_t,controlHeight:ar,menuGutter:sr},De={borderRadius:rr,colors:or,spacing:ur},lr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:et(),captureMenuScroll:!et(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:To(),formatGroupLabel:Qo,getOptionLabel:er,getOptionValue:tr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:nr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!ai(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function pt(n,t,i,o){var e=Gt(n,t,i),a=Yt(n,t,i),s=qt(n,t),l=Ee(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:s,value:l,index:o}}function he(n,t){return n.options.map(function(i,o){if("options"in i){var e=i.options.map(function(s,l){return pt(n,s,t,l)}).filter(function(s){return ht(n,s)});return e.length>0?{type:"group",data:i,options:e,index:o}:void 0}var a=pt(n,i,t,o);return ht(n,a)?a:void 0}).filter(li)}function Wt(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Te(i.options.map(function(o){return o.data}))):t.push(i.data),t},[])}function ft(n,t){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,Te(o.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(o.index,"-").concat(e.index)}}))):i.push({data:o.data,id:"".concat(t,"-").concat(o.index)}),i},[])}function cr(n,t){return Wt(he(n,t))}function ht(n,t){var i=n.inputValue,o=i===void 0?"":i,e=t.data,a=t.isSelected,s=t.label,l=t.value;return(!Kt(n)||!a)&&Xt(n,{label:s,value:l,data:e},o)}function dr(n,t){var i=n.focusedValue,o=n.selectValue,e=o.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function pr(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Ie=function(t,i){var o,e=(o=t.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return e||null},qt=function(t,i){return t.getOptionLabel(i)},Ee=function(t,i){return t.getOptionValue(i)};function Gt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Yt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var o=Ee(n,t);return i.some(function(e){return Ee(n,e)===o})}function Xt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Kt=function(t){var i=t.hideSelectedOptions,o=t.isMulti;return i===void 0?o:i},fr=1,Zt=function(n){vn(i,n);var t=bn(i);function i(o){var e;if(xn(this,i),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=Jo(),e.controlRef=null,e.getControlRef=function(r){e.controlRef=r},e.focusedOptionRef=null,e.getFocusedOptionRef=function(r){e.focusedOptionRef=r},e.menuListRef=null,e.getMenuListRef=function(r){e.menuListRef=r},e.inputRef=null,e.getInputRef=function(r){e.inputRef=r},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(r,u){var c=e.props,d=c.onChange,f=c.name;u.name=f,e.ariaOnChange(r,u),d(r,u)},e.setValue=function(r,u,c){var d=e.props,f=d.closeMenuOnSelect,g=d.isMulti,x=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:x}),f&&(e.setState({inputIsHiddenAfterUpdate:!g}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(r,{action:u,option:c})},e.selectOption=function(r){var u=e.props,c=u.blurInputOnSelect,d=u.isMulti,f=u.name,g=e.state.selectValue,x=d&&e.isOptionSelected(r,g),b=e.isOptionDisabled(r,g);if(x){var h=e.getOptionValue(r);e.setValue(g.filter(function(v){return e.getOptionValue(v)!==h}),"deselect-option",r)}else if(!b)d?e.setValue([].concat(Te(g),[r]),"select-option",r):e.setValue(r,"select-option");else{e.ariaOnChange(r,{action:"select-option",option:r,name:f});return}c&&e.blurInput()},e.removeValue=function(r){var u=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(r),f=c.filter(function(x){return e.getOptionValue(x)!==d}),g=fe(u,f,f[0]||null);e.onChange(g,{action:"remove-value",removedValue:r}),e.focusInput()},e.clearValue=function(){var r=e.state.selectValue;e.onChange(fe(e.props.isMulti,[],null),{action:"clear",removedValues:r})},e.popValue=function(){var r=e.props.isMulti,u=e.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),f=fe(r,d,d[0]||null);e.onChange(f,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(r){return Ie(e.state.focusableOptionsWithIds,r)},e.getFocusableOptionsWithIds=function(){return ft(he(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return ti.apply(void 0,[e.props.classNamePrefix].concat(u))},e.getOptionLabel=function(r){return qt(e.props,r)},e.getOptionValue=function(r){return Ee(e.props,r)},e.getStyles=function(r,u){var c=e.props.unstyled,d=ir[r](u,c);d.boxSizing="border-box";var f=e.props.styles[r];return f?f(d,u):d},e.getClassNames=function(r,u){var c,d;return(c=(d=e.props.classNames)[r])===null||c===void 0?void 0:c.call(d,u)},e.getElementId=function(r){return"".concat(e.state.instancePrefix,"-").concat(r)},e.getComponents=function(){return Fo(e.props)},e.buildCategorizedOptions=function(){return he(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return Wt(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(r,u){e.setState({ariaSelection:w({value:r},u)})},e.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(r){e.blockOptionHover=!1},e.onControlMouseDown=function(r){if(!r.defaultPrevented){var u=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&e.onMenuClose():u&&e.openMenu("first"):(u&&(e.openAfterFocus=!0),e.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},e.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!e.props.isDisabled){var u=e.props,c=u.isMulti,d=u.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),r.preventDefault()}},e.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(e.clearValue(),r.preventDefault(),e.openAfterFocus=!1,r.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(r){typeof e.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&Ce(r.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(r)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(r){var u=r.touches,c=u&&u.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(r){var u=r.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),f=Math.abs(c.clientY-e.initialTouchY),g=5;e.userIsDragging=d>g||f>g}},e.onTouchEnd=function(r){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(r.target)&&e.menuListRef&&!e.menuListRef.contains(r.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(r){e.userIsDragging||e.onControlMouseDown(r)},e.onClearIndicatorTouchEnd=function(r){e.userIsDragging||e.onClearIndicatorMouseDown(r)},e.onDropdownIndicatorTouchEnd=function(r){e.userIsDragging||e.onDropdownIndicatorMouseDown(r)},e.handleInputChange=function(r){var u=e.props.inputValue,c=r.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:u}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(r){e.props.onFocus&&e.props.onFocus(r),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(r){var u=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(r),e.onInputChange("",{action:"input-blur",prevInputValue:u}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(r){if(!(e.blockOptionHover||e.state.focusedOption===r)){var u=e.getFocusableOptions(),c=u.indexOf(r);e.setState({focusedOption:r,focusedOptionId:c>-1?e.getFocusedOptionId(r):null})}},e.shouldHideSelectedOptions=function(){return Kt(e.props)},e.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),e.focus()},e.onKeyDown=function(r){var u=e.props,c=u.isMulti,d=u.backspaceRemovesValue,f=u.escapeClearsValue,g=u.inputValue,x=u.isClearable,b=u.isDisabled,h=u.menuIsOpen,v=u.onKeyDown,O=u.tabSelectsValue,F=u.openMenuOnFocus,S=e.state,I=S.focusedOption,A=S.focusedValue,M=S.selectValue;if(!b&&!(typeof v=="function"&&(v(r),r.defaultPrevented))){switch(e.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||g)return;e.focusValue("previous");break;case"ArrowRight":if(!c||g)return;e.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(A)e.removeValue(A);else{if(!d)return;c?e.popValue():x&&e.clearValue()}break;case"Tab":if(e.isComposing||r.shiftKey||!h||!O||!I||F&&e.isOptionSelected(I,M))return;e.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(h){if(!I||e.isComposing)return;e.selectOption(I);break}return;case"Escape":h?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:g}),e.onMenuClose()):x&&f&&e.clearValue();break;case" ":if(g)return;if(!h){e.openMenu("first");break}if(!I)return;e.selectOption(I);break;case"ArrowUp":h?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":h?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!h)return;e.focusOption("pageup");break;case"PageDown":if(!h)return;e.focusOption("pagedown");break;case"Home":if(!h)return;e.focusOption("first");break;case"End":if(!h)return;e.focusOption("last");break;default:return}r.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++fr),e.state.selectValue=Je(o.value),o.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),s=e.buildFocusableOptions(),l=s.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=s[l],e.state.focusedOptionId=Ie(a,s[l])}return e}return En(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Qe(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!s&&e.isDisabled||r&&l&&!e.menuIsOpen)&&this.focusInput(),r&&s&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!s&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Qe(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,s=this.state,l=s.selectValue,r=s.isFocused,u=this.buildFocusableOptions(),c=e==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=s.indexOf(l);l||(r=-1);var u=s.length-1,c=-1;if(s.length){switch(e){case"previous":r===0?c=0:r===-1?c=u:c=r-1;break;case"next":r>-1&&r<u&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,u=l.indexOf(s);s||(u=-1),e==="up"?r=u>0?u-1:l.length-1:e==="down"?r=(u+1)%l.length:e==="pageup"?(r=u-a,r<0&&(r=0)):e==="pagedown"?(r=u+a,r>l.length-1&&(r=l.length-1)):e==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(De):w(w({},De),this.props.theme):De}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,r=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,g=d.isRtl,x=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:s,getClassNames:l,getValue:r,hasValue:b,isMulti:f,isRtl:g,options:x,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,s=e.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(e,a){return Gt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Yt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Xt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,s=e.isSearchable,l=e.inputId,r=e.inputValue,u=e.tabIndex,c=e.form,d=e.menuIsOpen,f=e.required,g=this.getComponents(),x=g.Input,b=this.state,h=b.inputIsHidden,v=b.ariaSelection,O=this.commonProps,F=l||this.getElementId("input"),S=w(w(w({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(v==null?void 0:v.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?p.createElement(x,y({},O,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:r},S)):p.createElement(jo,y({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:be,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,f=this.commonProps,g=this.props,x=g.controlShouldRenderValue,b=g.isDisabled,h=g.isMulti,v=g.inputValue,O=g.placeholder,F=this.state,S=F.selectValue,I=F.focusedValue,A=F.isFocused;if(!this.hasValue()||!x)return v?null:p.createElement(d,y({},f,{key:"placeholder",isDisabled:b,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),O);if(h)return S.map(function(D,k){var T=D===I,j="".concat(e.getOptionLabel(D),"-").concat(e.getOptionValue(D));return p.createElement(s,y({},f,{components:{Container:l,Label:r,Remove:u},isFocused:T,isDisabled:b,key:j,index:k,removeProps:{onClick:function(){return e.removeValue(D)},onTouchEnd:function(){return e.removeValue(D)},onMouseDown:function(W){W.preventDefault()}},data:D}),e.formatOptionLabel(D,"value"))});if(v)return null;var M=S[0];return p.createElement(c,y({},f,{data:M,isDisabled:b}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return p.createElement(a,y({},s,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,s=e.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,r=this.props.isDisabled,u=this.state.isFocused;return p.createElement(s,y({},l,{isDisabled:r,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},s,{innerProps:u,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,r=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,f=a.NoOptionsMessage,g=a.Option,x=this.commonProps,b=this.state.focusedOption,h=this.props,v=h.captureMenuScroll,O=h.inputValue,F=h.isLoading,S=h.loadingMessage,I=h.minMenuHeight,A=h.maxMenuHeight,M=h.menuIsOpen,D=h.menuPlacement,k=h.menuPosition,T=h.menuPortalTarget,j=h.menuShouldBlockScroll,B=h.menuShouldScrollIntoView,W=h.noOptionsMessage,q=h.onMenuScrollToTop,$=h.onMenuScrollToBottom;if(!M)return null;var L=function(H,G){var Q=H.type,z=H.data,ee=H.isDisabled,Y=H.isSelected,ue=H.label,nn=H.value,We=b===z,qe=ee?void 0:function(){return e.onOptionHover(z)},on=ee?void 0:function(){return e.selectOption(z)},Ge="".concat(e.getElementId("option"),"-").concat(G),rn={id:Ge,onClick:on,onMouseMove:qe,onMouseOver:qe,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:Y};return p.createElement(g,y({},x,{innerProps:rn,data:z,isDisabled:ee,isSelected:Y,key:Ge,label:ue,type:Q,value:nn,isFocused:We,innerRef:We?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(H.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var H=R.data,G=R.options,Q=R.index,z="".concat(e.getElementId("group"),"-").concat(Q),ee="".concat(z,"-heading");return p.createElement(s,y({},x,{key:z,data:H,options:G,Heading:l,headingProps:{id:ee,data:R.data},label:e.formatGroupLabel(R.data)}),R.options.map(function(Y){return L(Y,"".concat(Q,"-").concat(Y.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(F){var N=S({inputValue:O});if(N===null)return null;_=p.createElement(d,x,N)}else{var Z=W({inputValue:O});if(Z===null)return null;_=p.createElement(f,x,Z)}var J={minMenuHeight:I,maxMenuHeight:A,menuPlacement:D,menuPosition:k,menuShouldScrollIntoView:B},se=p.createElement(vi,y({},x,J),function(R){var H=R.ref,G=R.placerProps,Q=G.placement,z=G.maxHeight;return p.createElement(r,y({},x,J,{innerRef:H,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:F,placement:Q}),p.createElement(Wo,{captureEnabled:v,onTopArrive:q,onBottomArrive:$,lockEnabled:j},function(ee){return p.createElement(u,y({},x,{innerRef:function(ue){e.getMenuListRef(ue),ee(ue)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:e.getElementId("listbox")},isLoading:F,maxHeight:z,focusedOption:b}),_)}))});return T||k==="fixed"?p.createElement(c,y({},x,{appendTo:T,controlElement:this.controlRef,menuPlacement:D,menuPosition:k}),se):se}},{key:"renderFormField",value:function(){var e=this,a=this.props,s=a.delimiter,l=a.isDisabled,r=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Yo,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(r)if(s){var f=d.map(function(b){return e.getOptionValue(b)}).join(s);return p.createElement("input",{name:u,type:"hidden",value:f})}else{var g=d.length>0?d.map(function(b,h){return p.createElement("input",{key:"i-".concat(h),name:u,type:"hidden",value:e.getOptionValue(b)})}):p.createElement("input",{name:u,type:"hidden",value:""});return p.createElement("div",null,g)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:u,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(Vo,y({},e,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:r,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,s=e.IndicatorsContainer,l=e.SelectContainer,r=e.ValueContainer,u=this.props,c=u.className,d=u.id,f=u.isDisabled,g=u.menuIsOpen,x=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(l,y({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:x}),this.renderLiveRegion(),p.createElement(a,y({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:x,menuIsOpen:g}),p.createElement(r,y({},b,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(s,y({},b,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,f=a.instancePrefix,g=e.options,x=e.value,b=e.menuIsOpen,h=e.inputValue,v=e.isMulti,O=Je(x),F={};if(s&&(x!==s.value||g!==s.options||b!==s.menuIsOpen||h!==s.inputValue)){var S=b?cr(e,O):[],I=b?ft(he(e,O),"".concat(f,"-option")):[],A=l?dr(a,O):null,M=pr(a,S),D=Ie(I,M);F={selectValue:O,focusedOption:M,focusedOptionId:D,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var k=r!=null&&e!==s?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},T=u,j=c&&d;return c&&!j&&(T={value:fe(v,O,O[0]||null),options:O,action:"initial-input-focus"},j=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(T=null),w(w(w({},F),k),{},{prevProps:e,ariaSelection:T,prevWasFocused:j})}}]),i}(p.Component);Zt.defaultProps=lr;var hr=p.forwardRef(function(n,t){var i=$n(n);return p.createElement(Zt,y({ref:t},i))}),Jt=hr;const Qt=n=>p.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M1.5 1.75L6 6.25L10.5 1.75",stroke:"#EFEDE8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),mt=[{value:"Alcoholic drinks",label:"Alcoholic drinks"},{value:"Berries",label:"Berries"},{value:"Cereals",label:"Cereals"},{value:"Dairy",label:"Dairy"},{value:"Dried fruits",label:"Dried fruits"},{value:"Eggs",label:"Eggs"},{value:"Fish",label:"Fish"},{value:"Flour",label:"Flour"},{value:"Meat",label:"Meat"}],mr=n=>m.jsx(ze.DropdownIndicator,{...n,children:m.jsx(Qt,{})}),gr={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),control:(n,t)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${E.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:t.isFocused?`0 0 0 2px ${E.orangeColor}`:0,transition:`all ${E.animation}`,"&:hover":{borderColor:`${E.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),dropdownIndicator:(n,t)=>({...n,transition:`all ${E.animation}`,transform:t.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${E.whiteColor}`}),option:(n,t)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:t.isSelected?`${E.successColor}`:`${E.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${E.orangeColor}`,color:`${E.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.10)",width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})},vr=({dataFunc:n,currentValue:t})=>m.jsx(Jt,{onChange:n,options:mt,components:{DropdownIndicator:mr},styles:gr,value:t===""?{value:"Categories",label:"Categories"}:mt.find(i=>i.value===t)}),gt=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],br=n=>m.jsx(ze.DropdownIndicator,{...n,children:m.jsx(Qt,{})}),xr={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,t)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${E.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:t.isFocused?`0 0 0 2px ${E.orangeColor}`:0,transition:`all ${E.animation}`,"&:hover":{borderColor:`${E.orangeColor}`},"@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,t)=>({...n,transition:`all ${E.animation}`,transform:t.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${E.whiteColor}`}),option:(n,t)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:t.isSelected?`${E.successColor}`:`${E.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${E.orangeColor}`,color:`${E.whiteColor}`}})},Er=({dataFunc:n,currentValue:t})=>m.jsx(Jt,{onChange:n,options:gt,components:{DropdownIndicator:br},styles:xr,value:gt.find(i=>i.value===t),defaultValue:t}),en=n=>p.createElement("svg",{width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M7.5 14 14 7.5m0 0L7.5 1M14 7.5H1",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),Cr=n=>p.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),p.createElement("path",{d:"M18.823 8.725a.593.593 0 0 0-.833-.074l-1.641 1.378-.755-1.87a.58.58 0 0 0-.114-.18 1.606 1.606 0 0 0-.791-.809 1.628 1.628 0 0 0-.491-.13c-.037-.02-.07-.045-.111-.058l-2.888-.805a.594.594 0 0 0-.458.063.578.578 0 0 0-.36.336L9.294 9.372a.594.594 0 0 0 .338.767.593.593 0 0 0 .766-.34l.918-2.36 1.315.365c-.032.052-.066.101-.092.156l-1.687 3.655c-.024.054-.037.108-.054.164l-2.05 3.435-3.428 1.147a.876.876 0 0 0 1.04 1.41l3.51-1.209a.841.841 0 0 0 .243-.29c.045-.047.095-.084.129-.142l1.221-2.048 2.169 1.848-2.32 2.614a.875.875 0 1 0 1.31 1.16l2.896-3.261c.09-.101.144-.217.18-.338.022-.066.022-.135.027-.203 0-.035.013-.066.01-.098a.858.858 0 0 0-.3-.637l-1.995-1.701c.143-.137.266-.3.354-.492l1.293-2.8.414 1.104c.017.098.05.194.12.274a.57.57 0 0 0 .226.16l.03.007a.564.564 0 0 0 .367.018h.003c.018-.005.036-.002.054-.01a.585.585 0 0 0 .233-.17L18.89 9.56c.25-.21.145-.583-.066-.834ZM15.846 7.301a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z",fill:"#EFEDE8"})),_e=V.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,wr=V.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${E.animation};
  @media screen and (min-width: 768px) {
    ${_e}:hover & {
      color: ${E.successColor};
      transform: scale(1.25);
    }
  }
`,Sr=Le`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,yr=V(en)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    ${_e}:hover & {
      animation: ${Sr} 1000ms linear infinite;
      > path {
        stroke: ${E.successColor};
      }
    }
  }
`,Fr=V(Cr)`
  width: 24px;
  height: 24px;
`,tn=V.li`
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
    color: ${E.whiteColor};
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
    color: ${E.whiteColor};
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
`,Or=V.span`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${E.whiteColor};
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
`,Dr=V.div`
margin: 0 auto;
margin-top: 100px;
  width: 50px;
  aspect-ratio: 1;
  --_c:no-repeat linear-gradient(orange 0 0) 50%; 
  background: 
    var(--_c)/100% 50%,
    var(--_c)/50% 100%;
  border-radius: 50%;
  animation: l29 2s infinite linear;

@keyframes l29 {
  100% {transform: rotate(1turn)}
}
@media screen and (min-width:768px) {
   width: 400px;
    max-height: 400px;
}

`,vt=Le`
  0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
`,bt=Le`
0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`,Ir=V.div`
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
        animation: ${bt} 2s linear infinite ;
      }
      &::after{
        border-color: #FF3D00;
        animation: ${bt} 2s linear infinite , ${vt} 0.5s linear infinite reverse;
        inset: 6px;
      }
`,Ar=V.ul`
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
    max-height: 660px;
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
    max-height: 487px;
}
`,ie={bloodType:"1",page:1},Mr=()=>{const[n]=Et(),[t,i]=p.useState(!1),[o,e]=p.useState(null),{products:a,isLoading:s,isSuccessPopUpShown:l,totalPages:r}=Re(S=>S.products),u=p.useRef(null),c=p.useRef(null),d=Ve(),[f,g]=p.useState(1);p.useEffect(()=>{l&&i(!1)},[l]),p.useEffect(()=>{yn(t)},[t]);const x=S=>{e(S),i(!0)},b=()=>{d(ln(!1)),i(!1)},h=p.useMemo(()=>Object.fromEntries([...n]),[n]),{q:v,category:O,recommended:F}=h;return v?ie.q=v:delete ie.q,O&&(ie.cat=O.toLowerCase()),F&&F!=="All"?ie.rec=F:delete ie.rec,p.useEffect(()=>{g(1),u.current&&(u.current.scrollTop=0)},[F,v,O]),p.useEffect(()=>{if(f===r||f===r&&f>1&&r>1)return;const S=new IntersectionObserver(I=>{I[0].isIntersecting&&!s&&(g(f+1),u.current&&(u.current.scrollTop=u.current.scrollTop-200))},{threshold:.1});return c.current&&S.observe(c.current),()=>{const I=c.current;c.current&&S.unobserve(I)}},[s]),p.useEffect(()=>{f===r&&f!==1&&yt("info","You have reached the end of search results"),!(f>r)&&d(un({queryParams:ie,page:f}))},[F,v,O,d,f,r]),s&&a===null?m.jsx(Dr,{className:"loader-1"}):a&&a.length>0?m.jsxs(m.Fragment,{children:[m.jsxs(Ar,{ref:u,children:[a.map(S=>s?m.jsx(tn,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:m.jsx("div",{className:"loader"})},S._id):m.jsx(Pr,{handleOpenModal:x,data:S},S._id)),m.jsx("div",{style:{width:"100%",height:"1px"},children:s&&m.jsx(Ir,{})}),m.jsx("div",{ref:c,style:{opacity:0},children:"refdiv"})]}),m.jsx(Mn,{showModal:t,closeModal:b,data:o}),m.jsx(Nr,{})]}):m.jsx(Lr,{})},kr="1",Pr=({data:n,handleOpenModal:t})=>{const{calories:i,category:o,title:e,weight:a,groupBloodNotAllowed:s,_id:l}=n,r=s[kr];return m.jsxs(tn,{children:[m.jsx("span",{className:"diet-span",children:"diet"}),m.jsxs("div",{className:"recommended-addbtn-div",children:[m.jsx(Or,{className:"recommended-span",$color:r,children:r?"Recommended":"Not recommended"}),m.jsxs(_e,{onClick:()=>t({calories:i,title:e,weight:a,_id:l}),type:"button",className:"add-btn",children:[m.jsx(wr,{className:"add-btn-span",children:"Add"}),m.jsx(yr,{})]})]}),m.jsxs("div",{className:"product-info-div",children:[m.jsxs("div",{className:"title-svg-div",children:[m.jsx(Fr,{}),m.jsxs("p",{className:"product-info-div-title",children:[" ",e]})]}),m.jsxs("div",{className:"detailed-info-div",children:[m.jsxs("p",{className:"detailed-name",children:["Calories: ",m.jsx("span",{className:"detailed-data",children:i})]}),m.jsxs("p",{className:"detailed-name",children:["Category: ",m.jsx("span",{className:"detailed-data",children:o})]}),m.jsxs("p",{className:"detailed-name",children:["Weight: ",m.jsx("span",{className:"detailed-data",children:a})]})]})]})]})},Vr=te.div`
margin-top: 64px;
max-width: 335px;

.above-text {
margin-bottom: 16px;
color: ${E.greyTextColor};
font-family: Roboto;
font-size: 14px;
line-height: 1.29;

}

.above-text-span {
color: ${E.orangeColor};
}

.below-text {
color: ${E.orangeColor};
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
`,Lr=()=>m.jsxs(Vr,{children:[m.jsxs("p",{className:"above-text",children:[m.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),m.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),Rr="/power-pulse-fs/assets/bgFood-46dd5bc9.png",$r="/power-pulse-fs/assets/bgFood2x-515a5477.png",ae=V(cn)`
display: flex;
align-items:center;
gap: 8px;
color: rgba(239, 237, 232, 0.30);
line-height: 1.29;
 transition: all ${E.animation};
 &:hover  {
      color: ${E.orangeColor};
      }
      &:focus  {
      color: ${E.orangeColor};
      }
`,Tr=V(en)`
width:16px;
height: 16px;
> path {
        stroke: ${E.greyTextColor};
      }
      transition: all ${E.animation};
        @media screen and (min-width: 768px) {
    ${ae}:hover &, ${ae}:focus & {
      > path {
        stroke: ${E.orangeColor};
      }
    }
    ${ae}:hover &, ${ae}:focus & {
      transform: translateX(10px);
    }
  }
`,Br=V($e)`
position: absolute;
top: 14px;
right: 14px;
width: 22px;
height: 22px;
cursor: pointer;
 > path {
        stroke: ${E.whiteColor};
      }
      transition: stroke ${E.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    &:hover {
      > path {
        stroke: ${E.orangeColor};
      }
    }
    &:hover {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,jr=V.div`
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

  
`,Hr=V.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 148px;
  position: relative;
 width: 335px;
height: 362px;
  border-radius: 12px;
border: 1px solid rgba(239, 237, 232, 0.20);
background-color: #10100F;
transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
 transform:  scale(1);
   background-image: url(${Rr});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${$r});
    }


    .title{
        color: ${E.whiteColor};
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.33;
    }

    .calories {
        margin-top: 16px;
        margin-bottom: 24px;
        color: ${E.greyTextColor};
font-family: Roboto;
line-height: 1.29;
    }

    .calories-span{
color: ${E.orangeColor};
font-family: Roboto;
line-height: 1.29;
    }

    .button{
        margin-bottom: 16px;
        color: ${E.whiteColor};
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 1.13;
padding: 12px 32px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: ${E.orangeColor};
transition: all ${E.animation};
&:hover, &:focus {
  background: ${E.orange2Color};
}
    }

  @media screen and (min-width: 768px) {
width: 430px;
height: 428px;
padding-top: 180px;
background-position: top 64px right 154px;
.calories {
               margin-bottom: 32px;
  }
`,Nr=()=>{const{isSuccessPopUpShown:n}=Re(o=>o.products),t=Ve();p.useEffect(()=>{if(!n)return;const o=e=>{e.code==="Escape"&&t(le(!1))};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n,t]);const i=o=>{o.target===o.currentTarget&&t(le(!1))};return n&&m.jsx(jr,{onClick:i,children:m.jsxs(Hr,{children:[m.jsx(Br,{onClick:()=>t(le(!1))}),m.jsx("p",{className:"title",children:"Well done"}),m.jsxs("p",{className:"calories",children:["Calories: ",m.jsx("span",{className:"calories-span",children:"96"})]}),m.jsx("button",{onClick:()=>t(le(!1)),className:"button",type:"button",children:"Next product"}),m.jsxs(ae,{to:"/diary",children:["To the diary ",m.jsx(Tr,{})]})]})})},zr=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Ur=te(zr)`
  width: 18px;
  height: 18px;
`,_r=te($e)`
  width: 20px;
  height: 20px;
`,Wr=te.form`
  margin-top: 40px;
  position: relative;
  #search {
    max-width: 335px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${E.greyTextColor};
    padding: 14px;
    background-color: inherit;
    outline: none;

    color: ${E.whiteColor};
    font-family: Roboto;
    line-height: 1.29;
    transition: all ${E.animation};
    &::placeholder {
      color: ${E.whiteColor};
    }

    &:hover,
    &:focus {
      border-color: ${E.orangeColor};
    }
    @media screen and (min-width: 768px) {
      width: 236px;
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
    color: ${E.greyTextColor};
    font-family: Roboto;
    line-height: 1.29;
    position: absolute;
    right: 0px;
    top: -20px;
  }
`,qr=()=>{const[n,t]=p.useState(!1),[i,o]=Et(),e=p.useMemo(()=>Object.fromEntries([...i]),[i]),{q:a,category:s,recommended:l}=e,r=Ct({initialValues:{search:a??"",category:s??"",recommended:l??"All"},onSubmit:c=>{const{search:d}=c;d&&o(f=>{const g=new URLSearchParams(f);return g.set("q",d),g})}}),u=c=>{t(!0),r.handleChange(c)};return m.jsxs(Wr,{onSubmit:r.handleSubmit,children:[m.jsxs("div",{className:"input-search-block",children:[m.jsx("input",{id:"search",name:"search",type:"text",onChange:u,value:r.values.search,placeholder:"Search"}),m.jsxs("div",{className:"svgs-search-block",children:[n&&m.jsx("button",{type:"button",onClick:()=>{t(!1),o(c=>{const d=new URLSearchParams(c);return d.delete("q"),d}),r.values.search=""},children:m.jsx(_r,{})}),m.jsx("button",{type:"submit",children:m.jsx(Ur,{})})]})]}),m.jsxs("div",{className:"selects-block",children:[m.jsx(vr,{name:"category",dataFunc:c=>{r.setFieldValue("category",c.value),o(d=>{const f=new URLSearchParams(d);return f.set("category",c.value),f})},currentValue:r.values.category}),m.jsx(Er,{name:"recommended",currentValue:r.values.recommended,dataFunc:c=>{r.setFieldValue("recommended",c.value),o(d=>{const f=new URLSearchParams(d);return f.set("recommended",c.value),f})}})]}),m.jsx("p",{className:"filter-1440",children:"Filter"})]})},Gr="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",Yr="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",Xr=te.section`

@media screen and (min-width: 1440px) {
  height: 90vh;
 background: url(${Gr});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${Yr});
    }
}
`,Kr=te.div`
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
`,Zr=te.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,ia=()=>{const{addProductFalse:n}=Re(t=>t.products);return p.useEffect(()=>{n&&yt("error","Enter correct data!")},[n]),m.jsx(Xr,{children:m.jsxs(Kr,{children:[m.jsxs("div",{className:"title-form-block",children:[m.jsx(Zr,{children:"Products"}),m.jsx(qr,{})]}),m.jsx(Mr,{}),m.jsx(dn,{})]})})};export{ia as default};
