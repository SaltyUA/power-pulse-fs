import{b as k,s as C,B as Ye,S as on,u as Se,i as rn,j as p,c as h,e as bt,a as K,k as we,m as xt,n as $e,o as an,p as sn,N as un,q as ce,t as ln,v as cn}from"./index-b8328b10.js";import{u as Ct,c as dn,a as pn}from"./index.esm-b67327b4.js";import{e as ae,a as Et,i as fn,k as hn,j as E,_ as mn,h as St,b as gn,c as vn,d as bn,g as xn}from"./defineProperty-b9ac7359.js";import{_ as y,n as ie}from"./emotion-styled.browser.esm-6bf9ed3b.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const Cn=k.input`
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

  `,En=k.form`
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
`,Sn=()=>{const n=new Date,t=n.getDate(),i=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear();return`${t}-${i}-${o}`},wn=n=>{n?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},wt=(n,t)=>{const i={position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:on};switch(n){case"info":Ye.info(t,i);break;case"error":Ye.error(t,i);break}},yn=({data:n,closeModal:t})=>{const{title:i,calories:o,_id:e}=n||{},a=Se(),s=Ct({enableReinitialize:!0,initialValues:{title:i,weight:0,calories:0},validationSchema:dn().shape({weight:pn().required("Please enter weight").min(2,"Weight must be at least 2 characters").max(4,"Weight cannot be more than 4 characters")}),onSubmit:r=>{const{weight:u,calories:c}=r,d={date:Sn(),amount:u,calories:Math.ceil(c)};a(rn({newProduct:d,_id:e}))}}),l=r=>{if(!(isNaN(r.target.value)&&r.target.value!=="")&&(r.target.value===""&&s.setValues({...s.values,calories:""}),s.handleChange(r),r.target.value>0)){const u=parseFloat(Number(r.target.value)),c=u*o/100;s.setValues({...s.values,weight:u,calories:c})}};return p.jsxs(En,{onSubmit:s.handleSubmit,children:[p.jsxs("div",{className:"inputs-block",children:[p.jsx("input",{id:"title",name:"title",type:"text",defaultValue:s.values.title,disabled:!0,className:"title-input"}),p.jsxs("div",{className:"weight-input-block",children:[p.jsx(Cn,{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:l,value:s.values.weight}),p.jsx("p",{className:"error-message",children:s.errors.weight}),p.jsx("span",{className:"grams-span",children:"grams"})]})]}),p.jsxs("div",{className:"calories-block",children:[p.jsx("span",{className:"calories-span",children:"Calories: "}),p.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:s.values.calories,className:"calories-input"})]}),p.jsxs("div",{className:"button-block",children:[p.jsx("button",{className:"add-button",type:"submit",disabled:!!(s.errors.weight||s.values.weight===0),children:"Add to diary"}),p.jsx("button",{onClick:t,className:"cancel-button",type:"button",children:"Cancel"})]})]})},Me=k.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,Fn=k.svg`
stroke: ${C.whiteColor};
width: 26px;
height: 26px;
  transition:
    stroke ${C.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    ${Me}:hover & {
            stroke: ${C.orangeColor};
        }
    ${Me}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,On=k.div`
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
`,Dn=k.div`
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
`,In=document.querySelector("#add-product-modal"),An=({data:n,closeModal:t,showModal:i})=>{h.useEffect(()=>{if(!i)return;const e=a=>{a.code==="Escape"&&t()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t,i]);const o=e=>{e.target===e.currentTarget&&t()};return bt.createPortal(p.jsx(On,{onClick:o,className:i?"":"hide-hidden",children:p.jsxs(Dn,{className:"modal",children:[p.jsx(Me,{onClick:t,type:"button",children:p.jsx(Fn,{children:p.jsx("use",{href:K+"#icon-close"})})}),p.jsx(yn,{data:n,closeModal:t})]})}),In)};function Xe(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),i.push.apply(i,o)}return i}function S(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Xe(Object(i),!0).forEach(function(o){ae(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Xe(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function Pn(n){if(Array.isArray(n))return n}function Vn(n,t){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,e,a,s,l=[],r=!0,u=!1;try{if(a=(i=i.call(n)).next,t===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==t);r=!0);}catch(c){u=!0,e=c}finally{try{if(!r&&i.return!=null&&(s=i.return(),Object(s)!==s))return}finally{if(u)throw e}}return l}}function Mn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,t){return Pn(n)||Vn(n,t)||Et(n,t)||Mn()}function kn(n,t){if(n==null)return{};var i={},o=Object.keys(n),e,a;for(a=0;a<o.length;a++)e=o[a],!(t.indexOf(e)>=0)&&(i[e]=n[e]);return i}function Z(n,t){if(n==null)return{};var i=kn(n,t),o,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)o=a[e],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var Rn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Ln(n){var t=n.defaultInputValue,i=t===void 0?"":t,o=n.defaultMenuIsOpen,e=o===void 0?!1:o,a=n.defaultValue,s=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,u=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,g=n.value,x=Z(n,Rn),b=h.useState(l!==void 0?l:i),m=X(b,2),v=m[0],F=m[1],O=h.useState(r!==void 0?r:e),w=X(O,2),I=w[0],A=w[1],P=h.useState(g!==void 0?g:s),D=X(P,2),V=D[0],T=D[1],j=h.useCallback(function(N,J){typeof u=="function"&&u(N,J),T(N)},[u]),B=h.useCallback(function(N,J){var Q;typeof c=="function"&&(Q=c(N,J)),F(Q!==void 0?Q:N)},[c]),W=h.useCallback(function(){typeof f=="function"&&f(),A(!0)},[f]),q=h.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),$=l!==void 0?l:v,R=r!==void 0?r:I,_=g!==void 0?g:V;return S(S({},x),{},{inputValue:$,menuIsOpen:R,onChange:j,onInputChange:B,onMenuClose:q,onMenuOpen:W,value:_})}function $n(n){if(Array.isArray(n))return fn(n)}function Tn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Bn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(n){return $n(n)||Tn(n)||Et(n)||Bn()}function jn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Hn=Math.min,Nn=Math.max,ge=Math.round,de=Math.floor,ve=n=>({x:n,y:n});function zn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function yt(n){return Ot(n)?(n.nodeName||"").toLowerCase():"#document"}function U(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function Ft(n){var t;return(t=(Ot(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function Ot(n){return n instanceof Node||n instanceof U(n).Node}function ke(n){return n instanceof Element||n instanceof U(n).Element}function Be(n){return n instanceof HTMLElement||n instanceof U(n).HTMLElement}function Ke(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof U(n).ShadowRoot}function Dt(n){const{overflow:t,overflowX:i,overflowY:o,display:e}=je(n);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(e)}function Un(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _n(n){return["html","body","#document"].includes(yt(n))}function je(n){return U(n).getComputedStyle(n)}function Wn(n){if(yt(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Ke(n)&&n.host||Ft(n);return Ke(t)?t.host:t}function It(n){const t=Wn(n);return _n(t)?n.ownerDocument?n.ownerDocument.body:n.body:Be(t)&&Dt(t)?t:It(t)}function be(n,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const e=It(n),a=e===((o=n.ownerDocument)==null?void 0:o.body),s=U(e);return a?t.concat(s,s.visualViewport||[],Dt(e)?e:[],s.frameElement&&i?be(s.frameElement):[]):t.concat(e,be(e,[],i))}function qn(n){const t=je(n);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const e=Be(n),a=e?n.offsetWidth:i,s=e?n.offsetHeight:o,l=ge(i)!==a||ge(o)!==s;return l&&(i=a,o=s),{width:i,height:o,$:l}}function He(n){return ke(n)?n:n.contextElement}function Fe(n){const t=He(n);if(!Be(t))return ve(1);const i=t.getBoundingClientRect(),{width:o,height:e,$:a}=qn(t);let s=(a?ge(i.width):i.width)/o,l=(a?ge(i.height):i.height)/e;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Gn=ve(0);function Yn(n){const t=U(n);return!Un()||!t.visualViewport?Gn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Xn(n,t,i){return t===void 0&&(t=!1),!i||t&&i!==U(n)?!1:t}function Ze(n,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const e=n.getBoundingClientRect(),a=He(n);let s=ve(1);t&&(o?ke(o)&&(s=Fe(o)):s=Fe(n));const l=Xn(a,i,o)?Yn(a):ve(0);let r=(e.left+l.x)/s.x,u=(e.top+l.y)/s.y,c=e.width/s.x,d=e.height/s.y;if(a){const f=U(a),g=o&&ke(o)?U(o):o;let x=f.frameElement;for(;x&&o&&g!==f;){const b=Fe(x),m=x.getBoundingClientRect(),v=je(x),F=m.left+(x.clientLeft+parseFloat(v.paddingLeft))*b.x,O=m.top+(x.clientTop+parseFloat(v.paddingTop))*b.y;r*=b.x,u*=b.y,c*=b.x,d*=b.y,r+=F,u+=O,x=U(x).frameElement}}return zn({width:c,height:d,x:r,y:u})}function Kn(n,t){let i=null,o;const e=Ft(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function s(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:u,top:c,width:d,height:f}=n.getBoundingClientRect();if(l||t(),!d||!f)return;const g=de(c),x=de(e.clientWidth-(u+d)),b=de(e.clientHeight-(c+f)),m=de(u),F={rootMargin:-g+"px "+-x+"px "+-b+"px "+-m+"px",threshold:Nn(0,Hn(1,r))||1};let O=!0;function w(I){const A=I[0].intersectionRatio;if(A!==r){if(!O)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}O=!1}try{i=new IntersectionObserver(w,{...F,root:e.ownerDocument})}catch{i=new IntersectionObserver(w,F)}i.observe(n)}return s(!0),a}function Zn(n,t,i,o){o===void 0&&(o={});const{ancestorScroll:e=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,u=He(n),c=e||a?[...u?be(u):[],...be(t)]:[];c.forEach(v=>{e&&v.addEventListener("scroll",i,{passive:!0}),a&&v.addEventListener("resize",i)});const d=u&&l?Kn(u,i):null;let f=-1,g=null;s&&(g=new ResizeObserver(v=>{let[F]=v;F&&F.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{g&&g.observe(t)})),i()}),u&&!r&&g.observe(u),g.observe(t));let x,b=r?Ze(n):null;r&&m();function m(){const v=Ze(n);b&&(v.x!==b.x||v.y!==b.y||v.width!==b.width||v.height!==b.height)&&i(),b=v,x=requestAnimationFrame(m)}return i(),()=>{c.forEach(v=>{e&&v.removeEventListener("scroll",i),a&&v.removeEventListener("resize",i)}),d&&d(),g&&g.disconnect(),g=null,r&&cancelAnimationFrame(x)}}var Re=h.useLayoutEffect,Jn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],xe=function(){};function Qn(n,t){return t?t[0]==="-"?n+t:n+"__"+t:n}function ei(n,t){for(var i=arguments.length,o=new Array(i>2?i-2:0),e=2;e<i;e++)o[e-2]=arguments[e];var a=[].concat(o);if(t&&n)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(Qn(n,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Je=function(t){return li(t)?t.filter(Boolean):mn(t)==="object"&&t!==null?[t]:[]},At=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var i=Z(t,Jn);return S({},i)},M=function(t,i,o){var e=t.cx,a=t.getStyles,s=t.getClassNames,l=t.className;return{css:a(i,t),className:e(o??{},s(i,t),l)}};function ye(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function ti(n){return ye(n)?window.innerHeight:n.clientHeight}function Pt(n){return ye(n)?window.pageYOffset:n.scrollTop}function Ce(n,t){if(ye(n)){window.scrollTo(0,t);return}n.scrollTop=t}function ni(n){var t=getComputedStyle(n),i=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var e=n;e=e.parentElement;)if(t=getComputedStyle(e),!(i&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return e;return document.documentElement}function ii(n,t,i,o){return i*((n=n/o-1)*n*n+1)+t}function pe(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:xe,e=Pt(n),a=t-e,s=10,l=0;function r(){l+=s;var u=ii(l,e,a,i);Ce(n,u),l<i?window.requestAnimationFrame(r):o(n)}r()}function Qe(n,t){var i=n.getBoundingClientRect(),o=t.getBoundingClientRect(),e=t.offsetHeight/3;o.bottom+e>i.bottom?Ce(n,Math.min(t.offsetTop+t.clientHeight-n.offsetHeight+e,n.scrollHeight)):o.top-e<i.top&&Ce(n,Math.max(t.offsetTop-e,0))}function oi(n){var t=n.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function et(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function ri(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Vt=!1,ai={get passive(){return Vt=!0}},fe=typeof window<"u"?window:{};fe.addEventListener&&fe.removeEventListener&&(fe.addEventListener("p",xe,ai),fe.removeEventListener("p",xe,!1));var si=Vt;function ui(n){return n!=null}function li(n){return Array.isArray(n)}function he(n,t,i){return n?t:i}var ci=function(t){for(var i=arguments.length,o=new Array(i>1?i-1:0),e=1;e<i;e++)o[e-1]=arguments[e];var a=Object.entries(t).filter(function(s){var l=X(s,1),r=l[0];return!o.includes(r)});return a.reduce(function(s,l){var r=X(l,2),u=r[0],c=r[1];return s[u]=c,s},{})},di=["children","innerProps"],pi=["children","innerProps"];function fi(n){var t=n.maxHeight,i=n.menuEl,o=n.minHeight,e=n.placement,a=n.shouldScroll,s=n.isFixedPosition,l=n.controlHeight,r=ni(i),u={placement:"bottom",maxHeight:t};if(!i||!i.offsetParent)return u;var c=r.getBoundingClientRect(),d=c.height,f=i.getBoundingClientRect(),g=f.bottom,x=f.height,b=f.top,m=i.offsetParent.getBoundingClientRect(),v=m.top,F=s?window.innerHeight:ti(r),O=Pt(r),w=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=v-I,P=F-b,D=A+O,V=d-O-b,T=g-F+O+w,j=O+b-I,B=160;switch(e){case"auto":case"bottom":if(P>=x)return{placement:"bottom",maxHeight:t};if(V>=x&&!s)return a&&pe(r,T,B),{placement:"bottom",maxHeight:t};if(!s&&V>=o||s&&P>=o){a&&pe(r,T,B);var W=s?P-w:V-w;return{placement:"bottom",maxHeight:W}}if(e==="auto"||s){var q=t,$=s?A:D;return $>=o&&(q=Math.min($-w-l,t)),{placement:"top",maxHeight:q}}if(e==="bottom")return a&&Ce(r,T),{placement:"bottom",maxHeight:t};break;case"top":if(A>=x)return{placement:"top",maxHeight:t};if(D>=x&&!s)return a&&pe(r,j,B),{placement:"top",maxHeight:t};if(!s&&D>=o||s&&A>=o){var R=t;return(!s&&D>=o||s&&A>=o)&&(R=s?A-I:D-I),a&&pe(r,j,B),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(e,'".'))}return u}function hi(n){var t={bottom:"top",top:"bottom"};return n?t[n]:"bottom"}var Mt=function(t){return t==="auto"?"bottom":t},mi=function(t,i){var o,e=t.placement,a=t.theme,s=a.borderRadius,l=a.spacing,r=a.colors;return S((o={label:"menu"},ae(o,hi(e),"100%"),ae(o,"position","absolute"),ae(o,"width","100%"),ae(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},kt=h.createContext(null),gi=function(t){var i=t.children,o=t.minMenuHeight,e=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,l=t.menuShouldScrollIntoView,r=t.theme,u=h.useContext(kt)||{},c=u.setPortalPlacement,d=h.useRef(null),f=h.useState(e),g=X(f,2),x=g[0],b=g[1],m=h.useState(null),v=X(m,2),F=v[0],O=v[1],w=r.spacing.controlHeight;return Re(function(){var I=d.current;if(I){var A=s==="fixed",P=l&&!A,D=fi({maxHeight:e,menuEl:I,minHeight:o,placement:a,shouldScroll:P,isFixedPosition:A,controlHeight:w});b(D.maxHeight),O(D.placement),c==null||c(D.placement)}},[e,a,s,l,o,c,w]),i({ref:d,placerProps:S(S({},t),{},{placement:F||Mt(a),maxHeight:x})})},vi=function(t){var i=t.children,o=t.innerRef,e=t.innerProps;return E("div",y({},M(t,"menu",{menu:!0}),{ref:o},e),i)},bi=vi,xi=function(t,i){var o=t.maxHeight,e=t.theme.spacing.baseUnit;return S({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:e,paddingTop:e})},Ci=function(t){var i=t.children,o=t.innerProps,e=t.innerRef,a=t.isMulti;return E("div",y({},M(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:e},o),i)},Rt=function(t,i){var o=t.theme,e=o.spacing.baseUnit,a=o.colors;return S({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(e*2,"px ").concat(e*3,"px")})},Ei=Rt,Si=Rt,wi=function(t){var i=t.children,o=i===void 0?"No options":i,e=t.innerProps,a=Z(t,di);return E("div",y({},M(S(S({},a),{},{children:o,innerProps:e}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),e),o)},yi=function(t){var i=t.children,o=i===void 0?"Loading...":i,e=t.innerProps,a=Z(t,pi);return E("div",y({},M(S(S({},a),{},{children:o,innerProps:e}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),e),o)},Fi=function(t){var i=t.rect,o=t.offset,e=t.position;return{left:i.left,position:e,top:o,width:i.width,zIndex:1}},Oi=function(t){var i=t.appendTo,o=t.children,e=t.controlElement,a=t.innerProps,s=t.menuPlacement,l=t.menuPosition,r=h.useRef(null),u=h.useRef(null),c=h.useState(Mt(s)),d=X(c,2),f=d[0],g=d[1],x=h.useMemo(function(){return{setPortalPlacement:g}},[]),b=h.useState(null),m=X(b,2),v=m[0],F=m[1],O=h.useCallback(function(){if(e){var P=oi(e),D=l==="fixed"?0:window.pageYOffset,V=P[f]+D;(V!==(v==null?void 0:v.offset)||P.left!==(v==null?void 0:v.rect.left)||P.width!==(v==null?void 0:v.rect.width))&&F({offset:V,rect:P})}},[e,l,f,v==null?void 0:v.offset,v==null?void 0:v.rect.left,v==null?void 0:v.rect.width]);Re(function(){O()},[O]);var w=h.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),e&&r.current&&(u.current=Zn(e,r.current,O,{elementResize:"ResizeObserver"in window}))},[e,O]);Re(function(){w()},[w]);var I=h.useCallback(function(P){r.current=P,w()},[w]);if(!i&&l!=="fixed"||!v)return null;var A=E("div",y({ref:I},M(S(S({},t),{},{offset:v.offset,position:l,rect:v.rect}),"menuPortal",{"menu-portal":!0}),a),o);return E(kt.Provider,{value:x},i?bt.createPortal(A,i):A)},Di=function(t){var i=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Ii=function(t){var i=t.children,o=t.innerProps,e=t.isDisabled,a=t.isRtl;return E("div",y({},M(t,"container",{"--is-disabled":e,"--is-rtl":a}),o),i)},Ai=function(t,i){var o=t.theme.spacing,e=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:e&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},Pi=function(t){var i=t.children,o=t.innerProps,e=t.isMulti,a=t.hasValue;return E("div",y({},M(t,"valueContainer",{"value-container":!0,"value-container--is-multi":e,"value-container--has-value":a}),o),i)},Vi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Mi=function(t){var i=t.children,o=t.innerProps;return E("div",y({},M(t,"indicatorsContainer",{indicators:!0}),o),i)},tt,ki=["size"],Ri=["innerProps","isRtl","size"],Li={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Lt=function(t){var i=t.size,o=Z(t,ki);return E("svg",y({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Li},o))},Ne=function(t){return E(Lt,y({size:20},t),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},$t=function(t){return E(Lt,y({size:20},t),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Tt=function(t,i){var o=t.isFocused,e=t.theme,a=e.spacing.baseUnit,s=e.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?s.neutral60:s.neutral20,padding:a*2,":hover":{color:o?s.neutral80:s.neutral40}})},$i=Tt,Ti=function(t){var i=t.children,o=t.innerProps;return E("div",y({},M(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||E($t,null))},Bi=Tt,ji=function(t){var i=t.children,o=t.innerProps;return E("div",y({},M(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||E(Ne,null))},Hi=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing.baseUnit,s=e.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},Ni=function(t){var i=t.innerProps;return E("span",y({},i,M(t,"indicatorSeparator",{"indicator-separator":!0})))},zi=hn(tt||(tt=jn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ui=function(t,i){var o=t.isFocused,e=t.size,a=t.theme,s=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:e,lineHeight:1,marginRight:e,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?s.neutral60:s.neutral20,padding:l*2})},Oe=function(t){var i=t.delay,o=t.offset;return E("span",{css:St({animation:"".concat(zi," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},_i=function(t){var i=t.innerProps,o=t.isRtl,e=t.size,a=e===void 0?4:e,s=Z(t,Ri);return E("div",y({},M(S(S({},s),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(Oe,{delay:0,offset:o}),E(Oe,{delay:160,offset:!0}),E(Oe,{delay:320,offset:!o}))},Wi=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.theme,s=a.colors,l=a.borderRadius,r=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?s.neutral5:s.neutral0,borderColor:o?s.neutral10:e?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:e?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:e?s.primary:s.neutral30}})},qi=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.innerRef,s=t.innerProps,l=t.menuIsOpen;return E("div",y({ref:a},M(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":e,"control--menu-is-open":l}),s,{"aria-disabled":o||void 0}),i)},Gi=qi,Yi=["data"],Xi=function(t,i){var o=t.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Ki=function(t){var i=t.children,o=t.cx,e=t.getStyles,a=t.getClassNames,s=t.Heading,l=t.headingProps,r=t.innerProps,u=t.label,c=t.theme,d=t.selectProps;return E("div",y({},M(t,"group",{group:!0}),r),E(s,y({},l,{selectProps:d,theme:c,getStyles:e,getClassNames:a,cx:o}),u),E("div",null,i))},Zi=function(t,i){var o=t.theme,e=o.colors,a=o.spacing;return S({label:"group",cursor:"default",display:"block"},i?{}:{color:e.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ji=function(t){var i=At(t);i.data;var o=Z(i,Yi);return E("div",y({},M(t,"groupHeading",{"group-heading":!0}),o))},Qi=Ki,eo=["innerRef","isDisabled","isHidden","inputClassName"],to=function(t,i){var o=t.isDisabled,e=t.value,a=t.theme,s=a.spacing,l=a.colors;return S(S({visibility:o?"hidden":"visible",transform:e?"translateZ(0)":""},no),i?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},Bt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},no={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Bt)},io=function(t){return S({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},Bt)},oo=function(t){var i=t.cx,o=t.value,e=At(t),a=e.innerRef,s=e.isDisabled,l=e.isHidden,r=e.inputClassName,u=Z(e,eo);return E("div",y({},M(t,"input",{"input-container":!0}),{"data-value":o||""}),E("input",y({className:i({input:!0},r),ref:a,style:io(l),disabled:s},u)))},ro=oo,ao=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,s=o.colors;return S({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:e.baseUnit/2})},so=function(t,i){var o=t.theme,e=o.borderRadius,a=o.colors,s=t.cropWithEllipsis;return S({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:e/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},uo=function(t,i){var o=t.theme,e=o.spacing,a=o.borderRadius,s=o.colors,l=t.isFocused;return S({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:e.baseUnit,paddingRight:e.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},jt=function(t){var i=t.children,o=t.innerProps;return E("div",o,i)},lo=jt,co=jt;function po(n){var t=n.children,i=n.innerProps;return E("div",y({role:"button"},i),t||E(Ne,{size:14}))}var fo=function(t){var i=t.children,o=t.components,e=t.data,a=t.innerProps,s=t.isDisabled,l=t.removeProps,r=t.selectProps,u=o.Container,c=o.Label,d=o.Remove;return E(u,{data:e,innerProps:S(S({},M(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:r},E(c,{data:e,innerProps:S({},M(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),E(d,{data:e,innerProps:S(S({},M(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},ho=fo,mo=function(t,i){var o=t.isDisabled,e=t.isFocused,a=t.isSelected,s=t.theme,l=s.spacing,r=s.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:e?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},go=function(t){var i=t.children,o=t.isDisabled,e=t.isFocused,a=t.isSelected,s=t.innerRef,l=t.innerProps;return E("div",y({},M(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":e,"option--is-selected":a}),{ref:s,"aria-disabled":o},l),i)},vo=go,bo=function(t,i){var o=t.theme,e=o.spacing,a=o.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:e.baseUnit/2,marginRight:e.baseUnit/2})},xo=function(t){var i=t.children,o=t.innerProps;return E("div",y({},M(t,"placeholder",{placeholder:!0}),o),i)},Co=xo,Eo=function(t,i){var o=t.isDisabled,e=t.theme,a=e.spacing,s=e.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},So=function(t){var i=t.children,o=t.isDisabled,e=t.innerProps;return E("div",y({},M(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),e),i)},wo=So,ze={ClearIndicator:ji,Control:Gi,DropdownIndicator:Ti,DownChevron:$t,CrossIcon:Ne,Group:Qi,GroupHeading:Ji,IndicatorsContainer:Mi,IndicatorSeparator:Ni,Input:ro,LoadingIndicator:_i,Menu:bi,MenuList:Ci,MenuPortal:Oi,LoadingMessage:yi,NoOptionsMessage:wi,MultiValue:ho,MultiValueContainer:lo,MultiValueLabel:co,MultiValueRemove:po,Option:vo,Placeholder:Co,SelectContainer:Ii,SingleValue:wo,ValueContainer:Pi},yo=function(t){return S(S({},ze),t.components)},nt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Fo(n,t){return!!(n===t||nt(n)&&nt(t))}function Oo(n,t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(!Fo(n[i],t[i]))return!1;return!0}function Do(n,t){t===void 0&&(t=Oo);var i=null;function o(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];if(i&&i.lastThis===this&&t(e,i.lastArgs))return i.lastResult;var s=n.apply(this,e);return i={lastResult:s,lastArgs:e,lastThis:this},s}return o.clear=function(){i=null},o}var Io={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Ao=function(t){return E("span",y({css:Io},t))},it=Ao,Po={guidance:function(t){var i=t.isSearchable,o=t.isMulti,e=t.tabSelectsValue,a=t.context,s=t.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(e?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(t["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var i=t.action,o=t.label,e=o===void 0?"":o,a=t.labels,s=t.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(e,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(e," is disabled. Select another option."):"option ".concat(e,", selected.");default:return""}},onFocus:function(t){var i=t.context,o=t.focused,e=t.options,a=t.label,s=a===void 0?"":a,l=t.selectValue,r=t.isDisabled,u=t.isSelected,c=t.isAppleDevice,d=function(b,m){return b&&b.length?"".concat(b.indexOf(m)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var f=r?" disabled":"",g="".concat(u?" selected":"").concat(f);return"".concat(s).concat(g,", ").concat(d(e,o),".")}return""},onFilter:function(t){var i=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},Vo=function(t){var i=t.ariaSelection,o=t.focusedOption,e=t.focusedValue,a=t.focusableOptions,s=t.isFocused,l=t.selectValue,r=t.selectProps,u=t.id,c=t.isAppleDevice,d=r.ariaLiveMessages,f=r.getOptionLabel,g=r.inputValue,x=r.isMulti,b=r.isOptionDisabled,m=r.isSearchable,v=r.menuIsOpen,F=r.options,O=r.screenReaderStatus,w=r.tabSelectsValue,I=r.isLoading,A=r["aria-label"],P=r["aria-live"],D=h.useMemo(function(){return S(S({},Po),d||{})},[d]),V=h.useMemo(function(){var $="";if(i&&D.onChange){var R=i.option,_=i.options,N=i.removedValue,J=i.removedValues,Q=i.value,ue=function(Y){return Array.isArray(Y)?null:Y},L=N||R||ue(Q),H=L?f(L):"",G=_||J||void 0,ee=G?G.map(f):[],z=S({isDisabled:L&&b(L,l),label:H,labels:ee},i);$=D.onChange(z)}return $},[i,D,b,l,f]),T=h.useMemo(function(){var $="",R=o||e,_=!!(o&&l&&l.includes(o));if(R&&D.onFocus){var N={focused:R,label:f(R),isDisabled:b(R,l),isSelected:_,options:a,context:R===o?"menu":"value",selectValue:l,isAppleDevice:c};$=D.onFocus(N)}return $},[o,e,f,b,D,a,l,c]),j=h.useMemo(function(){var $="";if(v&&F.length&&!I&&D.onFilter){var R=O({count:a.length});$=D.onFilter({inputValue:g,resultsMessage:R})}return $},[a,g,v,D,F,O,I]),B=(i==null?void 0:i.action)==="initial-input-focus",W=h.useMemo(function(){var $="";if(D.guidance){var R=e?"value":v?"menu":"input";$=D.guidance({"aria-label":A,context:R,isDisabled:o&&b(o,l),isMulti:x,isSearchable:m,tabSelectsValue:w,isInitialFocus:B})}return $},[A,o,e,x,b,m,v,D,l,w,B]),q=E(h.Fragment,null,E("span",{id:"aria-selection"},V),E("span",{id:"aria-focused"},T),E("span",{id:"aria-results"},j),E("span",{id:"aria-guidance"},W));return E(h.Fragment,null,E(it,{id:u},B&&q),E(it,{"aria-live":P,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!B&&q))},Mo=Vo,Le=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ko=new RegExp("["+Le.map(function(n){return n.letters}).join("")+"]","g"),Ht={};for(var De=0;De<Le.length;De++)for(var Ie=Le[De],Ae=0;Ae<Ie.letters.length;Ae++)Ht[Ie.letters[Ae]]=Ie.base;var Nt=function(t){return t.replace(ko,function(i){return Ht[i]})},Ro=Do(Nt),ot=function(t){return t.replace(/^\s+|\s+$/g,"")},Lo=function(t){return"".concat(t.label," ").concat(t.value)},$o=function(t){return function(i,o){if(i.data.__isNew__)return!0;var e=S({ignoreCase:!0,ignoreAccents:!0,stringify:Lo,trim:!0,matchFrom:"any"},t),a=e.ignoreCase,s=e.ignoreAccents,l=e.stringify,r=e.trim,u=e.matchFrom,c=r?ot(o):o,d=r?ot(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Ro(c),d=Nt(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},To=["innerRef"];function Bo(n){var t=n.innerRef,i=Z(n,To),o=ci(i,"onExited","in","enter","exit","appear");return E("input",y({ref:t},o,{css:St({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var jo=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function Ho(n){var t=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,e=n.onTopArrive,a=n.onTopLeave,s=h.useRef(!1),l=h.useRef(!1),r=h.useRef(0),u=h.useRef(null),c=h.useCallback(function(m,v){if(u.current!==null){var F=u.current,O=F.scrollTop,w=F.scrollHeight,I=F.clientHeight,A=u.current,P=v>0,D=w-I-O,V=!1;D>v&&s.current&&(o&&o(m),s.current=!1),P&&l.current&&(a&&a(m),l.current=!1),P&&v>D?(i&&!s.current&&i(m),A.scrollTop=w,V=!0,s.current=!0):!P&&-v>O&&(e&&!l.current&&e(m),A.scrollTop=0,V=!0,l.current=!0),V&&jo(m)}},[i,o,e,a]),d=h.useCallback(function(m){c(m,m.deltaY)},[c]),f=h.useCallback(function(m){r.current=m.changedTouches[0].clientY},[]),g=h.useCallback(function(m){var v=r.current-m.changedTouches[0].clientY;c(m,v)},[c]),x=h.useCallback(function(m){if(m){var v=si?{passive:!1}:!1;m.addEventListener("wheel",d,v),m.addEventListener("touchstart",f,v),m.addEventListener("touchmove",g,v)}},[g,f,d]),b=h.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",f,!1),m.removeEventListener("touchmove",g,!1))},[g,f,d]);return h.useEffect(function(){if(t){var m=u.current;return x(m),function(){b(m)}}},[t,x,b]),function(m){u.current=m}}var rt=["boxSizing","height","overflow","paddingRight","position"],at={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function st(n){n.preventDefault()}function ut(n){n.stopPropagation()}function lt(){var n=this.scrollTop,t=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===t&&(this.scrollTop=n-1)}function ct(){return"ontouchstart"in window||navigator.maxTouchPoints}var dt=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,oe={capture:!1,passive:!1};function No(n){var t=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,e=h.useRef({}),a=h.useRef(null),s=h.useCallback(function(r){if(dt){var u=document.body,c=u&&u.style;if(o&&rt.forEach(function(x){var b=c&&c[x];e.current[x]=b}),o&&re<1){var d=parseInt(e.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,g=window.innerWidth-f+d||0;Object.keys(at).forEach(function(x){var b=at[x];c&&(c[x]=b)}),c&&(c.paddingRight="".concat(g,"px"))}u&&ct()&&(u.addEventListener("touchmove",st,oe),r&&(r.addEventListener("touchstart",lt,oe),r.addEventListener("touchmove",ut,oe))),re+=1}},[o]),l=h.useCallback(function(r){if(dt){var u=document.body,c=u&&u.style;re=Math.max(re-1,0),o&&re<1&&rt.forEach(function(d){var f=e.current[d];c&&(c[d]=f)}),u&&ct()&&(u.removeEventListener("touchmove",st,oe),r&&(r.removeEventListener("touchstart",lt,oe),r.removeEventListener("touchmove",ut,oe)))}},[o]);return h.useEffect(function(){if(t){var r=a.current;return s(r),function(){l(r)}}},[t,s,l]),function(r){a.current=r}}var zo=function(t){var i=t.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Uo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function _o(n){var t=n.children,i=n.lockEnabled,o=n.captureEnabled,e=o===void 0?!0:o,a=n.onBottomArrive,s=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,u=Ho({isEnabled:e,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:r}),c=No({isEnabled:i}),d=function(g){u(g),c(g)};return E(h.Fragment,null,i&&E("div",{onClick:zo,css:Uo}),t(d))}var Wo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},qo=function(t){var i=t.name,o=t.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Wo,value:"",onChange:function(){}})},Go=qo;function Ue(n){var t;return typeof window<"u"&&window.navigator!=null?n.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function Yo(){return Ue(/^iPhone/i)}function zt(){return Ue(/^Mac/i)}function Xo(){return Ue(/^iPad/i)||zt()&&navigator.maxTouchPoints>1}function Ko(){return Yo()||Xo()}function Zo(){return zt()||Ko()}var Jo=function(t){return t.label},Qo=function(t){return t.label},er=function(t){return t.value},tr=function(t){return!!t.isDisabled},nr={clearIndicator:Bi,container:Di,control:Wi,dropdownIndicator:$i,group:Xi,groupHeading:Zi,indicatorsContainer:Vi,indicatorSeparator:Hi,input:to,loadingIndicator:Ui,loadingMessage:Si,menu:mi,menuList:xi,menuPortal:Fi,multiValue:ao,multiValueLabel:so,multiValueRemove:uo,noOptionsMessage:Ei,option:mo,placeholder:bo,singleValue:Eo,valueContainer:Ai},ir={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},or=4,Ut=4,rr=38,ar=Ut*2,sr={baseUnit:Ut,controlHeight:rr,menuGutter:ar},Pe={borderRadius:or,colors:ir,spacing:sr},ur={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:et(),captureMenuScroll:!et(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:$o(),formatGroupLabel:Jo,getOptionLabel:Qo,getOptionValue:er,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:tr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!ri(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var i=t.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function pt(n,t,i,o){var e=qt(n,t,i),a=Gt(n,t,i),s=Wt(n,t),l=Ee(n,t);return{type:"option",data:t,isDisabled:e,isSelected:a,label:s,value:l,index:o}}function me(n,t){return n.options.map(function(i,o){if("options"in i){var e=i.options.map(function(s,l){return pt(n,s,t,l)}).filter(function(s){return ht(n,s)});return e.length>0?{type:"group",data:i,options:e,index:o}:void 0}var a=pt(n,i,t,o);return ht(n,a)?a:void 0}).filter(ui)}function _t(n){return n.reduce(function(t,i){return i.type==="group"?t.push.apply(t,Te(i.options.map(function(o){return o.data}))):t.push(i.data),t},[])}function ft(n,t){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,Te(o.options.map(function(e){return{data:e.data,id:"".concat(t,"-").concat(o.index,"-").concat(e.index)}}))):i.push({data:o.data,id:"".concat(t,"-").concat(o.index)}),i},[])}function lr(n,t){return _t(me(n,t))}function ht(n,t){var i=n.inputValue,o=i===void 0?"":i,e=t.data,a=t.isSelected,s=t.label,l=t.value;return(!Xt(n)||!a)&&Yt(n,{label:s,value:l,data:e},o)}function cr(n,t){var i=n.focusedValue,o=n.selectValue,e=o.indexOf(i);if(e>-1){var a=t.indexOf(i);if(a>-1)return i;if(e<t.length)return t[e]}return null}function dr(n,t){var i=n.focusedOption;return i&&t.indexOf(i)>-1?i:t[0]}var Ve=function(t,i){var o,e=(o=t.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return e||null},Wt=function(t,i){return t.getOptionLabel(i)},Ee=function(t,i){return t.getOptionValue(i)};function qt(n,t,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(t,i):!1}function Gt(n,t,i){if(i.indexOf(t)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(t,i);var o=Ee(n,t);return i.some(function(e){return Ee(n,e)===o})}function Yt(n,t,i){return n.filterOption?n.filterOption(t,i):!0}var Xt=function(t){var i=t.hideSelectedOptions,o=t.isMulti;return i===void 0?o:i},pr=1,Kt=function(n){gn(i,n);var t=vn(i);function i(o){var e;if(bn(this,i),e=t.call(this,o),e.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},e.blockOptionHover=!1,e.isComposing=!1,e.commonProps=void 0,e.initialTouchX=0,e.initialTouchY=0,e.openAfterFocus=!1,e.scrollToFocusedOptionOnUpdate=!1,e.userIsDragging=void 0,e.isAppleDevice=Zo(),e.controlRef=null,e.getControlRef=function(r){e.controlRef=r},e.focusedOptionRef=null,e.getFocusedOptionRef=function(r){e.focusedOptionRef=r},e.menuListRef=null,e.getMenuListRef=function(r){e.menuListRef=r},e.inputRef=null,e.getInputRef=function(r){e.inputRef=r},e.focus=e.focusInput,e.blur=e.blurInput,e.onChange=function(r,u){var c=e.props,d=c.onChange,f=c.name;u.name=f,e.ariaOnChange(r,u),d(r,u)},e.setValue=function(r,u,c){var d=e.props,f=d.closeMenuOnSelect,g=d.isMulti,x=d.inputValue;e.onInputChange("",{action:"set-value",prevInputValue:x}),f&&(e.setState({inputIsHiddenAfterUpdate:!g}),e.onMenuClose()),e.setState({clearFocusValueOnUpdate:!0}),e.onChange(r,{action:u,option:c})},e.selectOption=function(r){var u=e.props,c=u.blurInputOnSelect,d=u.isMulti,f=u.name,g=e.state.selectValue,x=d&&e.isOptionSelected(r,g),b=e.isOptionDisabled(r,g);if(x){var m=e.getOptionValue(r);e.setValue(g.filter(function(v){return e.getOptionValue(v)!==m}),"deselect-option",r)}else if(!b)d?e.setValue([].concat(Te(g),[r]),"select-option",r):e.setValue(r,"select-option");else{e.ariaOnChange(r,{action:"select-option",option:r,name:f});return}c&&e.blurInput()},e.removeValue=function(r){var u=e.props.isMulti,c=e.state.selectValue,d=e.getOptionValue(r),f=c.filter(function(x){return e.getOptionValue(x)!==d}),g=he(u,f,f[0]||null);e.onChange(g,{action:"remove-value",removedValue:r}),e.focusInput()},e.clearValue=function(){var r=e.state.selectValue;e.onChange(he(e.props.isMulti,[],null),{action:"clear",removedValues:r})},e.popValue=function(){var r=e.props.isMulti,u=e.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),f=he(r,d,d[0]||null);e.onChange(f,{action:"pop-value",removedValue:c})},e.getFocusedOptionId=function(r){return Ve(e.state.focusableOptionsWithIds,r)},e.getFocusableOptionsWithIds=function(){return ft(me(e.props,e.state.selectValue),e.getElementId("option"))},e.getValue=function(){return e.state.selectValue},e.cx=function(){for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return ei.apply(void 0,[e.props.classNamePrefix].concat(u))},e.getOptionLabel=function(r){return Wt(e.props,r)},e.getOptionValue=function(r){return Ee(e.props,r)},e.getStyles=function(r,u){var c=e.props.unstyled,d=nr[r](u,c);d.boxSizing="border-box";var f=e.props.styles[r];return f?f(d,u):d},e.getClassNames=function(r,u){var c,d;return(c=(d=e.props.classNames)[r])===null||c===void 0?void 0:c.call(d,u)},e.getElementId=function(r){return"".concat(e.state.instancePrefix,"-").concat(r)},e.getComponents=function(){return yo(e.props)},e.buildCategorizedOptions=function(){return me(e.props,e.state.selectValue)},e.getCategorizedOptions=function(){return e.props.menuIsOpen?e.buildCategorizedOptions():[]},e.buildFocusableOptions=function(){return _t(e.buildCategorizedOptions())},e.getFocusableOptions=function(){return e.props.menuIsOpen?e.buildFocusableOptions():[]},e.ariaOnChange=function(r,u){e.setState({ariaSelection:S({value:r},u)})},e.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),e.focusInput())},e.onMenuMouseMove=function(r){e.blockOptionHover=!1},e.onControlMouseDown=function(r){if(!r.defaultPrevented){var u=e.props.openMenuOnClick;e.state.isFocused?e.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&e.onMenuClose():u&&e.openMenu("first"):(u&&(e.openAfterFocus=!0),e.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},e.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!e.props.isDisabled){var u=e.props,c=u.isMulti,d=u.menuIsOpen;e.focusInput(),d?(e.setState({inputIsHiddenAfterUpdate:!c}),e.onMenuClose()):e.openMenu("first"),r.preventDefault()}},e.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(e.clearValue(),r.preventDefault(),e.openAfterFocus=!1,r.type==="touchend"?e.focusInput():setTimeout(function(){return e.focusInput()}))},e.onScroll=function(r){typeof e.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&ye(r.target)&&e.props.onMenuClose():typeof e.props.closeMenuOnScroll=="function"&&e.props.closeMenuOnScroll(r)&&e.props.onMenuClose()},e.onCompositionStart=function(){e.isComposing=!0},e.onCompositionEnd=function(){e.isComposing=!1},e.onTouchStart=function(r){var u=r.touches,c=u&&u.item(0);c&&(e.initialTouchX=c.clientX,e.initialTouchY=c.clientY,e.userIsDragging=!1)},e.onTouchMove=function(r){var u=r.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-e.initialTouchX),f=Math.abs(c.clientY-e.initialTouchY),g=5;e.userIsDragging=d>g||f>g}},e.onTouchEnd=function(r){e.userIsDragging||(e.controlRef&&!e.controlRef.contains(r.target)&&e.menuListRef&&!e.menuListRef.contains(r.target)&&e.blurInput(),e.initialTouchX=0,e.initialTouchY=0)},e.onControlTouchEnd=function(r){e.userIsDragging||e.onControlMouseDown(r)},e.onClearIndicatorTouchEnd=function(r){e.userIsDragging||e.onClearIndicatorMouseDown(r)},e.onDropdownIndicatorTouchEnd=function(r){e.userIsDragging||e.onDropdownIndicatorMouseDown(r)},e.handleInputChange=function(r){var u=e.props.inputValue,c=r.currentTarget.value;e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange(c,{action:"input-change",prevInputValue:u}),e.props.menuIsOpen||e.onMenuOpen()},e.onInputFocus=function(r){e.props.onFocus&&e.props.onFocus(r),e.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(e.openAfterFocus||e.props.openMenuOnFocus)&&e.openMenu("first"),e.openAfterFocus=!1},e.onInputBlur=function(r){var u=e.props.inputValue;if(e.menuListRef&&e.menuListRef.contains(document.activeElement)){e.inputRef.focus();return}e.props.onBlur&&e.props.onBlur(r),e.onInputChange("",{action:"input-blur",prevInputValue:u}),e.onMenuClose(),e.setState({focusedValue:null,isFocused:!1})},e.onOptionHover=function(r){if(!(e.blockOptionHover||e.state.focusedOption===r)){var u=e.getFocusableOptions(),c=u.indexOf(r);e.setState({focusedOption:r,focusedOptionId:c>-1?e.getFocusedOptionId(r):null})}},e.shouldHideSelectedOptions=function(){return Xt(e.props)},e.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),e.focus()},e.onKeyDown=function(r){var u=e.props,c=u.isMulti,d=u.backspaceRemovesValue,f=u.escapeClearsValue,g=u.inputValue,x=u.isClearable,b=u.isDisabled,m=u.menuIsOpen,v=u.onKeyDown,F=u.tabSelectsValue,O=u.openMenuOnFocus,w=e.state,I=w.focusedOption,A=w.focusedValue,P=w.selectValue;if(!b&&!(typeof v=="function"&&(v(r),r.defaultPrevented))){switch(e.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||g)return;e.focusValue("previous");break;case"ArrowRight":if(!c||g)return;e.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(A)e.removeValue(A);else{if(!d)return;c?e.popValue():x&&e.clearValue()}break;case"Tab":if(e.isComposing||r.shiftKey||!m||!F||!I||O&&e.isOptionSelected(I,P))return;e.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(m){if(!I||e.isComposing)return;e.selectOption(I);break}return;case"Escape":m?(e.setState({inputIsHiddenAfterUpdate:!1}),e.onInputChange("",{action:"menu-close",prevInputValue:g}),e.onMenuClose()):x&&f&&e.clearValue();break;case" ":if(g)return;if(!m){e.openMenu("first");break}if(!I)return;e.selectOption(I);break;case"ArrowUp":m?e.focusOption("up"):e.openMenu("last");break;case"ArrowDown":m?e.focusOption("down"):e.openMenu("first");break;case"PageUp":if(!m)return;e.focusOption("pageup");break;case"PageDown":if(!m)return;e.focusOption("pagedown");break;case"Home":if(!m)return;e.focusOption("first");break;case"End":if(!m)return;e.focusOption("last");break;default:return}r.preventDefault()}},e.state.instancePrefix="react-select-"+(e.props.instanceId||++pr),e.state.selectValue=Je(o.value),o.menuIsOpen&&e.state.selectValue.length){var a=e.getFocusableOptionsWithIds(),s=e.buildFocusableOptions(),l=s.indexOf(e.state.selectValue[0]);e.state.focusableOptionsWithIds=a,e.state.focusedOption=s[l],e.state.focusedOptionId=Ve(a,s[l])}return e}return xn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Qe(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(e){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!s&&e.isDisabled||r&&l&&!e.menuIsOpen)&&this.focusInput(),r&&s&&!e.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!s&&e.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Qe(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(e,a){this.props.onInputChange(e,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(e){var a=this,s=this.state,l=s.selectValue,r=s.isFocused,u=this.buildFocusableOptions(),c=e==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(e){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=s.indexOf(l);l||(r=-1);var u=s.length-1,c=-1;if(s.length){switch(e){case"previous":r===0?c=0:r===-1?c=u:c=r-1;break;case"next":r>-1&&r<u&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,u=l.indexOf(s);s||(u=-1),e==="up"?r=u>0?u-1:l.length-1:e==="down"?r=(u+1)%l.length:e==="pageup"?(r=u-a,r<0&&(r=0)):e==="pagedown"?(r=u+a,r>l.length-1&&(r=l.length-1)):e==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Pe):S(S({},Pe),this.props.theme):Pe}},{key:"getCommonProps",value:function(){var e=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,r=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,g=d.isRtl,x=d.options,b=this.hasValue();return{clearValue:e,cx:a,getStyles:s,getClassNames:l,getValue:r,hasValue:b,isMulti:f,isRtl:g,options:x,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var e=this.state.selectValue;return e.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var e=this.props,a=e.isClearable,s=e.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(e,a){return qt(this.props,e,a)}},{key:"isOptionSelected",value:function(e,a){return Gt(this.props,e,a)}},{key:"filterOption",value:function(e,a){return Yt(this.props,e,a)}},{key:"formatOptionLabel",value:function(e,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(e,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(e)}},{key:"formatGroupLabel",value:function(e){return this.props.formatGroupLabel(e)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var e=this.props,a=e.isDisabled,s=e.isSearchable,l=e.inputId,r=e.inputValue,u=e.tabIndex,c=e.form,d=e.menuIsOpen,f=e.required,g=this.getComponents(),x=g.Input,b=this.state,m=b.inputIsHidden,v=b.ariaSelection,F=this.commonProps,O=l||this.getElementId("input"),w=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(v==null?void 0:v.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?h.createElement(x,y({},F,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:a,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:r},w)):h.createElement(Bo,y({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:xe,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var e=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,f=this.commonProps,g=this.props,x=g.controlShouldRenderValue,b=g.isDisabled,m=g.isMulti,v=g.inputValue,F=g.placeholder,O=this.state,w=O.selectValue,I=O.focusedValue,A=O.isFocused;if(!this.hasValue()||!x)return v?null:h.createElement(d,y({},f,{key:"placeholder",isDisabled:b,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),F);if(m)return w.map(function(D,V){var T=D===I,j="".concat(e.getOptionLabel(D),"-").concat(e.getOptionValue(D));return h.createElement(s,y({},f,{components:{Container:l,Label:r,Remove:u},isFocused:T,isDisabled:b,key:j,index:V,removeProps:{onClick:function(){return e.removeValue(D)},onTouchEnd:function(){return e.removeValue(D)},onMouseDown:function(W){W.preventDefault()}},data:D}),e.formatOptionLabel(D,"value"))});if(v)return null;var P=w[0];return h.createElement(c,y({},f,{data:P,isDisabled:b}),this.formatOptionLabel(P,"value"))}},{key:"renderClearIndicator",value:function(){var e=this.getComponents(),a=e.ClearIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,y({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var e=this.getComponents(),a=e.LoadingIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return h.createElement(a,y({},s,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator,s=e.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,r=this.props.isDisabled,u=this.state.isFocused;return h.createElement(s,y({},l,{isDisabled:r,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var e=this.getComponents(),a=e.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return h.createElement(a,y({},s,{innerProps:u,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var e=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,r=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,f=a.NoOptionsMessage,g=a.Option,x=this.commonProps,b=this.state.focusedOption,m=this.props,v=m.captureMenuScroll,F=m.inputValue,O=m.isLoading,w=m.loadingMessage,I=m.minMenuHeight,A=m.maxMenuHeight,P=m.menuIsOpen,D=m.menuPlacement,V=m.menuPosition,T=m.menuPortalTarget,j=m.menuShouldBlockScroll,B=m.menuShouldScrollIntoView,W=m.noOptionsMessage,q=m.onMenuScrollToTop,$=m.onMenuScrollToBottom;if(!P)return null;var R=function(H,G){var ee=H.type,z=H.data,te=H.isDisabled,Y=H.isSelected,le=H.label,en=H.value,We=b===z,qe=te?void 0:function(){return e.onOptionHover(z)},tn=te?void 0:function(){return e.selectOption(z)},Ge="".concat(e.getElementId("option"),"-").concat(G),nn={id:Ge,onClick:tn,onMouseMove:qe,onMouseOver:qe,tabIndex:-1,role:"option","aria-selected":e.isAppleDevice?void 0:Y};return h.createElement(g,y({},x,{innerProps:nn,data:z,isDisabled:te,isSelected:Y,key:Ge,label:le,type:ee,value:en,isFocused:We,innerRef:We?e.getFocusedOptionRef:void 0}),e.formatOptionLabel(H.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(L){if(L.type==="group"){var H=L.data,G=L.options,ee=L.index,z="".concat(e.getElementId("group"),"-").concat(ee),te="".concat(z,"-heading");return h.createElement(s,y({},x,{key:z,data:H,options:G,Heading:l,headingProps:{id:te,data:L.data},label:e.formatGroupLabel(L.data)}),L.options.map(function(Y){return R(Y,"".concat(ee,"-").concat(Y.index))}))}else if(L.type==="option")return R(L,"".concat(L.index))});else if(O){var N=w({inputValue:F});if(N===null)return null;_=h.createElement(d,x,N)}else{var J=W({inputValue:F});if(J===null)return null;_=h.createElement(f,x,J)}var Q={minMenuHeight:I,maxMenuHeight:A,menuPlacement:D,menuPosition:V,menuShouldScrollIntoView:B},ue=h.createElement(gi,y({},x,Q),function(L){var H=L.ref,G=L.placerProps,ee=G.placement,z=G.maxHeight;return h.createElement(r,y({},x,Q,{innerRef:H,innerProps:{onMouseDown:e.onMenuMouseDown,onMouseMove:e.onMenuMouseMove},isLoading:O,placement:ee}),h.createElement(_o,{captureEnabled:v,onTopArrive:q,onBottomArrive:$,lockEnabled:j},function(te){return h.createElement(u,y({},x,{innerRef:function(le){e.getMenuListRef(le),te(le)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:e.getElementId("listbox")},isLoading:O,maxHeight:z,focusedOption:b}),_)}))});return T||V==="fixed"?h.createElement(c,y({},x,{appendTo:T,controlElement:this.controlRef,menuPlacement:D,menuPosition:V}),ue):ue}},{key:"renderFormField",value:function(){var e=this,a=this.props,s=a.delimiter,l=a.isDisabled,r=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return h.createElement(Go,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(r)if(s){var f=d.map(function(b){return e.getOptionValue(b)}).join(s);return h.createElement("input",{name:u,type:"hidden",value:f})}else{var g=d.length>0?d.map(function(b,m){return h.createElement("input",{key:"i-".concat(m),name:u,type:"hidden",value:e.getOptionValue(b)})}):h.createElement("input",{name:u,type:"hidden",value:""});return h.createElement("div",null,g)}else{var x=d[0]?this.getOptionValue(d[0]):"";return h.createElement("input",{name:u,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var e=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return h.createElement(Mo,y({},e,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:r,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var e=this.getComponents(),a=e.Control,s=e.IndicatorsContainer,l=e.SelectContainer,r=e.ValueContainer,u=this.props,c=u.className,d=u.id,f=u.isDisabled,g=u.menuIsOpen,x=this.state.isFocused,b=this.commonProps=this.getCommonProps();return h.createElement(l,y({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:x}),this.renderLiveRegion(),h.createElement(a,y({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:x,menuIsOpen:g}),h.createElement(r,y({},b,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),h.createElement(s,y({},b,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(e,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,f=a.instancePrefix,g=e.options,x=e.value,b=e.menuIsOpen,m=e.inputValue,v=e.isMulti,F=Je(x),O={};if(s&&(x!==s.value||g!==s.options||b!==s.menuIsOpen||m!==s.inputValue)){var w=b?lr(e,F):[],I=b?ft(me(e,F),"".concat(f,"-option")):[],A=l?cr(a,F):null,P=dr(a,w),D=Ve(I,P);O={selectValue:F,focusedOption:P,focusedOptionId:D,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var V=r!=null&&e!==s?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},T=u,j=c&&d;return c&&!j&&(T={value:he(v,F,F[0]||null),options:F,action:"initial-input-focus"},j=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(T=null),S(S(S({},O),V),{},{prevProps:e,ariaSelection:T,prevWasFocused:j})}}]),i}(h.Component);Kt.defaultProps=ur;var fr=h.forwardRef(function(n,t){var i=Ln(n);return h.createElement(Kt,y({ref:t},i))}),Zt=fr;const Jt=k.svg`
width: 18px;
height: 18px;
`,hr=[{value:"Alcoholic drinks",label:"Alcoholic drinks"},{value:"Berries",label:"Berries"},{value:"Cereals",label:"Cereals"},{value:"Dairy",label:"Dairy"},{value:"Dried fruits",label:"Dried fruits"},{value:"Eggs",label:"Eggs"},{value:"Fish",label:"Fish"},{value:"Flour",label:"Flour"},{value:"Meat",label:"Meat"}],mr=n=>p.jsx(ze.DropdownIndicator,{...n,children:p.jsx(Jt,{children:p.jsx("use",{href:K+"#selectArrow"})})}),gr={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px",height:"52px"}}),control:(n,t)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${C.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:t.isFocused?`0 0 0 2px ${C.orangeColor}`:0,transition:`all ${C.animation}`,"&:hover":{borderColor:`${C.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px",height:"52px"}}),dropdownIndicator:(n,t)=>({...n,transition:`all ${C.animation}`,transform:t.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${C.whiteColor}`}),option:(n,t)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:t.isSelected?`${C.successColor}`:`${C.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${C.orangeColor}`,color:`${C.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.10)",width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})},vr=({dataFunc:n,currentValue:t})=>{const{categories:i}=we(a=>a.products),o=i&&i.map(a=>({value:a,label:a})),e=[{value:"Categories",label:"Categories"},...o];return p.jsx(Zt,{onChange:n,options:e,components:{DropdownIndicator:mr},styles:gr,value:t===""?{value:"Categories",label:"Categories"}:hr.find(a=>a.value===t)})},mt=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],br=n=>p.jsx(ze.DropdownIndicator,{...n,children:p.jsx(Jt,{children:p.jsx("use",{href:K+"#selectArrow"})})}),xr={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px",height:"52px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,t)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${C.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:t.isFocused?`0 0 0 2px ${C.orangeColor}`:0,transition:`all ${C.animation}`,"&:hover":{borderColor:`${C.orangeColor}`},"@media (min-width: 768px)":{width:"204px",height:"52px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,t)=>({...n,transition:`all ${C.animation}`,transform:t.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${C.whiteColor}`}),option:(n,t)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:t.isSelected?`${C.successColor}`:`${C.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${C.orangeColor}`,color:`${C.whiteColor}`}})},Cr=({dataFunc:n,currentValue:t})=>p.jsx(Zt,{onChange:n,options:mt,components:{DropdownIndicator:br},styles:xr,value:mt.find(i=>i.value===t),defaultValue:t}),Er=ie.svg`
  width: 18px;
  height: 18px;
`,Sr=ie.svg`
  width: 20px;
  height: 20px;
  stroke: ${C.orangeColor};
`,wr=ie.form`
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
`,yr=()=>{const[n,t]=h.useState(!1),[i,o]=xt(),e=h.useMemo(()=>Object.fromEntries([...i]),[i]),{q:a,category:s,recommended:l}=e,r=Ct({initialValues:{search:a??"",category:s??"",recommended:l??"All"},onSubmit:c=>{const{search:d}=c;d&&o(f=>{const g=new URLSearchParams(f);return g.set("q",d),g})}}),u=c=>{t(!0),r.handleChange(c)};return p.jsxs(wr,{onSubmit:r.handleSubmit,children:[p.jsxs("div",{className:"input-search-block",children:[p.jsx("input",{id:"search",name:"search",type:"text",onChange:u,value:r.values.search,placeholder:"Search"}),p.jsxs("div",{className:"svgs-search-block",children:[n&&p.jsx("button",{type:"button",onClick:()=>{t(!1),o(c=>{const d=new URLSearchParams(c);return d.delete("q"),d}),r.values.search=""},children:p.jsx(Sr,{children:p.jsx("use",{href:K+"#icon-close"})})}),p.jsx("button",{type:"submit",children:p.jsx(Er,{children:p.jsx("use",{href:K+"#searchSvg"})})})]})]}),p.jsxs("div",{className:"selects-block",children:[p.jsx(vr,{name:"category",dataFunc:c=>{r.setFieldValue("category",c.value),o(d=>{const f=new URLSearchParams(d);if(c.value==="Categories"){f.delete("category");return}return f.set("category",c.value),f})},currentValue:r.values.category}),p.jsx(Cr,{name:"recommended",currentValue:r.values.recommended,dataFunc:c=>{r.setFieldValue("recommended",c.value),o(d=>{const f=new URLSearchParams(d);return f.set("recommended",c.value),f})}})]}),p.jsx("p",{className:"filter-1440",children:"Filter"})]})},_e=k.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,Fr=k.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${C.animation};
  @media screen and (min-width: 768px) {
    ${_e}:hover & {
      color: ${C.successColor};
      transform: scale(1.25);
    }
  }
`,Or=$e`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,Dr=k.svg`
width: 16px;
  height: 16px;
  stroke: ${C.orangeColor};
  @media screen and (min-width: 768px) {
    ${_e}:hover & {
      animation: ${Or} 1000ms linear infinite;
    stroke: ${C.successColor};
             }
  }
`,Ir=k.svg`
  width: 24px;
  height: 24px;
`,Qt=k.li`
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
`,Ar=k.span`
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
`,Pr=k.div`
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

`,gt=$e`
  0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
`,vt=$e`
0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`,Vr=k.div`
         width: 100px;
        height: 100px;
                border-radius: 50%;
        position: relative;
        left: 50%;
        bottom: 80px;
        transform: translateX(80%);
        animation: ${gt} 1s linear infinite;
    
      &::before,
      &::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: ${vt} 2s linear infinite ;
      }
      &::after{
        border-color: #FF3D00;
        animation: ${vt} 2s linear infinite , ${gt} 0.5s linear infinite reverse;
        inset: 6px;
      }
`,Mr=k.ul`
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
`,ne={bloodType:"1",page:1},kr=()=>{const[n]=xt(),[t,i]=h.useState(!1),[o,e]=h.useState(null),{products:a,isLoading:s,isSuccessPopUpShown:l,totalPages:r}=we(w=>w.products),u=h.useRef(null),c=h.useRef(null),d=Se(),[f,g]=h.useState(1);h.useEffect(()=>{l&&i(!1)},[l]),h.useEffect(()=>{wn(t)},[t]);const x=w=>{e(w),i(!0)},b=()=>{d(sn(!1)),i(!1)},m=h.useMemo(()=>Object.fromEntries([...n]),[n]),{q:v,category:F,recommended:O}=m;return v?ne.q=v:delete ne.q,F&&F!=="Categories"?ne.cat=F.toLowerCase():delete ne.cat,O&&O!=="All"?ne.rec=O:delete ne.rec,h.useEffect(()=>{g(1),u.current&&(u.current.scrollTop=0)},[O,v,F]),h.useEffect(()=>{if(f===r||f===r&&f>1&&r>1)return;const w=new IntersectionObserver(I=>{I[0].isIntersecting&&!s&&(g(f+1),u.current&&(u.current.scrollTop=u.current.scrollTop-200))},{threshold:.1});return c.current&&w.observe(c.current),()=>{const I=c.current;c.current&&w.unobserve(I)}},[s]),h.useEffect(()=>{f===r&&f!==1&&wt("info","You have reached the end of search results"),!(f>r)&&d(an({queryParams:ne,page:f}))},[O,v,F,d,f,r]),s&&a===null?p.jsx(Pr,{className:"loader-1"}):a&&a.length>0?p.jsxs(p.Fragment,{children:[p.jsxs(Mr,{ref:u,children:[a.map(w=>s?p.jsx(Qt,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:p.jsx("div",{className:"loader"})},w._id):p.jsx(Lr,{handleOpenModal:x,data:w},w._id)),p.jsx("div",{style:{width:"100%",height:"1px"},children:s&&p.jsx(Vr,{})}),p.jsx("div",{ref:c,style:{opacity:0},children:"refdiv"})]}),p.jsx(An,{showModal:t,closeModal:b,data:o}),p.jsx(_r,{})]}):p.jsx(Tr,{})},Rr="1",Lr=({data:n,handleOpenModal:t})=>{const{calories:i,category:o,title:e,weight:a,groupBloodNotAllowed:s,_id:l}=n,r=s[Rr];return p.jsxs(Qt,{children:[p.jsx("span",{className:"diet-span",children:"diet"}),p.jsxs("div",{className:"recommended-addbtn-div",children:[p.jsx(Ar,{className:"recommended-span",$color:r,children:r?"Recommended":"Not recommended"}),p.jsxs(_e,{onClick:()=>t({calories:i,title:e,weight:a,_id:l}),type:"button",className:"add-btn",children:[p.jsx(Fr,{className:"add-btn-span",children:"Add"}),p.jsx(Dr,{children:p.jsx("use",{href:K+"#locationarrow"})})]})]}),p.jsxs("div",{className:"product-info-div",children:[p.jsxs("div",{className:"title-svg-div",children:[p.jsx(Ir,{children:p.jsx("use",{href:K+"#runningman"})}),p.jsxs("p",{className:"product-info-div-title",children:[" ",e]})]}),p.jsxs("div",{className:"detailed-info-div",children:[p.jsxs("p",{className:"detailed-name",children:["Calories: ",p.jsx("span",{className:"detailed-data",children:i})]}),p.jsxs("p",{className:"detailed-name",children:["Category: ",p.jsx("span",{className:"detailed-data",children:o})]}),p.jsxs("p",{className:"detailed-name",children:["Weight: ",p.jsx("span",{className:"detailed-data",children:a})]})]})]})]})},$r=ie.div`
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
`,Tr=()=>p.jsxs($r,{children:[p.jsxs("p",{className:"above-text",children:[p.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),p.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),Br="/power-pulse-fs/assets/bgFood-46dd5bc9.png",jr="/power-pulse-fs/assets/bgFood2x-515a5477.png",se=k(un)`
display: flex;
align-items:center;
gap: 8px;
color: rgba(239, 237, 232, 0.30);
line-height: 1.29;
 transition: all ${C.animation};
 &:hover  {
      color: ${C.orangeColor};
      }
      &:focus  {
      color: ${C.orangeColor};
      }
`,Hr=k.svg`
width:16px;
height: 16px;
  stroke: ${C.greyTextColor};
         transition: all ${C.animation};
        @media screen and (min-width: 768px) {
    ${se}:hover &, ${se}:focus & {
              stroke: ${C.orangeColor};
         }
    ${se}:hover &, ${se}:focus & {
      transform: translateX(10px);
    }
  }
`,Nr=k.svg`
position: absolute;
top: 14px;
right: 14px;
width: 22px;
height: 22px;
cursor: pointer;
        stroke: ${C.whiteColor};
       transition: stroke ${C.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    &:hover {
        stroke: ${C.orangeColor};
    }
    &:hover {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,zr=k.div`
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

  
`,Ur=k.div`
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
   background-image: url(${Br});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${jr});
    }


    .title{
        color: ${C.whiteColor};
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.33;
    }

    .calories {
        margin-top: 16px;
        margin-bottom: 24px;
        color: ${C.greyTextColor};
font-family: Roboto;
line-height: 1.29;
    }

    .calories-span{
color: ${C.orangeColor};
font-family: Roboto;
line-height: 1.29;
    }

    .button{
        margin-bottom: 16px;
        color: ${C.whiteColor};
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 1.13;
padding: 12px 32px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: ${C.orangeColor};
transition: all ${C.animation};
&:hover, &:focus {
  background: ${C.orange2Color};
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
`,_r=()=>{const{isSuccessPopUpShown:n}=we(o=>o.products),t=Se();h.useEffect(()=>{if(!n)return;const o=e=>{e.code==="Escape"&&t(ce(!1))};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n,t]);const i=o=>{o.target===o.currentTarget&&t(ce(!1))};return n&&p.jsx(zr,{onClick:i,children:p.jsxs(Ur,{children:[p.jsx(Nr,{onClick:()=>t(ce(!1)),children:p.jsx("use",{href:K+"#icon-close"})}),p.jsx("p",{className:"title",children:"Well done"}),p.jsxs("p",{className:"calories",children:["Calories: ",p.jsx("span",{className:"calories-span",children:"96"})]}),p.jsx("button",{onClick:()=>t(ce(!1)),className:"button",type:"button",children:"Next product"}),p.jsxs(se,{to:"/diary",children:["To the diary ",p.jsx(Hr,{children:p.jsx("use",{href:K+"#locationarrow"})})]})]})})},Wr="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",qr="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",Gr=ie.section`

@media screen and (min-width: 1440px) {
  height: 90vh;
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
`,Yr=ie.div`
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
`,Xr=ie.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,ta=()=>{const{addProductFalse:n}=we(i=>i.products),t=Se();return h.useEffect(()=>{t(ln()),n&&wt("error","Enter correct data!")},[n,t]),p.jsx(Gr,{children:p.jsxs(Yr,{children:[p.jsxs("div",{className:"title-form-block",children:[p.jsx(Xr,{children:"Products"}),p.jsx(yr,{})]}),p.jsx(kr,{}),p.jsx(cn,{})]})})};export{ta as default};
