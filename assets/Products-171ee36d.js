import{a as p,b as yt,j as g,c as St,s as B,d as cn,u as je,e as dn,N as pn,f as Ft,h as ce,i as fn}from"./index-6a42ba82.js";import{u as Ot}from"./formik.esm-0656ae2c.js";import{h as hn,E as mn,c as vn,s as gn,_ as S,n as te}from"./emotion-styled.browser.esm-d0bcc54b.js";import{s as E}from"./styleGuide-7c616dce.js";var w=function(e,i){var o=arguments;if(i==null||!hn.call(i,"css"))return p.createElement.apply(void 0,o);var t=o.length,a=new Array(t);a[0]=mn,a[1]=vn(e,i);for(var u=2;u<t;u++)a[u]=o[u];return p.createElement.apply(null,a)};function Ne(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return gn(e)}var bn=function(){var e=Ne.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function ie(n){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(n)}function xn(n,e){if(ie(n)!=="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var o=i.call(n,e||"default");if(ie(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Dt(n){var e=xn(n,"string");return ie(e)==="symbol"?e:String(e)}function ae(n,e,i){return e=Dt(e),e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function Qe(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,o)}return i}function y(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Qe(Object(i),!0).forEach(function(o){ae(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Qe(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function En(n){if(Array.isArray(n))return n}function Cn(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,t,a,u,s=[],r=!0,l=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(s.push(o.value),s.length!==e);r=!0);}catch(c){l=!0,t=c}finally{try{if(!r&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(l)throw t}}return s}}function Ve(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=n[i];return o}function It(n,e){if(n){if(typeof n=="string")return Ve(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ve(n,e)}}function wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,e){return En(n)||Cn(n,e)||It(n,e)||wn()}function yn(n,e){if(n==null)return{};var i={},o=Object.keys(n),t,a;for(a=0;a<o.length;a++)t=o[a],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}function K(n,e){if(n==null)return{};var i=yn(n,e),o,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var Sn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Fn(n){var e=n.defaultInputValue,i=e===void 0?"":e,o=n.defaultMenuIsOpen,t=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,s=n.inputValue,r=n.menuIsOpen,l=n.onChange,c=n.onInputChange,d=n.onMenuClose,h=n.onMenuOpen,v=n.value,x=K(n,Sn),b=p.useState(s!==void 0?s:i),f=X(b,2),m=f[0],C=f[1],F=p.useState(r!==void 0?r:t),D=X(F,2),I=D[0],A=D[1],P=p.useState(v!==void 0?v:u),O=X(P,2),M=O[0],$=O[1],j=p.useCallback(function(H,Z){typeof l=="function"&&l(H,Z),$(H)},[l]),T=p.useCallback(function(H,Z){var J;typeof c=="function"&&(J=c(H,Z)),C(J!==void 0?J:H)},[c]),W=p.useCallback(function(){typeof h=="function"&&h(),A(!0)},[h]),G=p.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),L=s!==void 0?s:m,k=r!==void 0?r:I,U=v!==void 0?v:M;return y(y({},x),{},{inputValue:L,menuIsOpen:k,onChange:j,onInputChange:T,onMenuClose:G,onMenuOpen:W,value:U})}function On(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function et(n,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,Dt(o.key),o)}}function Dn(n,e,i){return e&&et(n.prototype,e),i&&et(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function ke(n,e){return ke=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},ke(n,e)}function In(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&ke(n,e)}function ge(n){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},ge(n)}function An(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Pn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Mn(n,e){if(e&&(ie(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Pn(n)}function Vn(n){var e=An();return function(){var o=ge(n),t;if(e){var a=ge(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return Mn(this,t)}}function kn(n){if(Array.isArray(n))return Ve(n)}function Rn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ln(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(n){return kn(n)||Rn(n)||It(n)||Ln()}function $n(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Tn=Math.min,Bn=Math.max,be=Math.round,de=Math.floor,xe=n=>({x:n,y:n});function jn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function At(n){return Mt(n)?(n.nodeName||"").toLowerCase():"#document"}function _(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Pt(n){var e;return(e=(Mt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Mt(n){return n instanceof Node||n instanceof _(n).Node}function Re(n){return n instanceof Element||n instanceof _(n).Element}function ze(n){return n instanceof HTMLElement||n instanceof _(n).HTMLElement}function tt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof _(n).ShadowRoot}function Vt(n){const{overflow:e,overflowX:i,overflowY:o,display:t}=_e(n);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(t)}function Nn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Hn(n){return["html","body","#document"].includes(At(n))}function _e(n){return _(n).getComputedStyle(n)}function zn(n){if(At(n)==="html")return n;const e=n.assignedSlot||n.parentNode||tt(n)&&n.host||Pt(n);return tt(e)?e.host:e}function kt(n){const e=zn(n);return Hn(e)?n.ownerDocument?n.ownerDocument.body:n.body:ze(e)&&Vt(e)?e:kt(e)}function Ee(n,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=kt(n),a=t===((o=n.ownerDocument)==null?void 0:o.body),u=_(t);return a?e.concat(u,u.visualViewport||[],Vt(t)?t:[],u.frameElement&&i?Ee(u.frameElement):[]):e.concat(t,Ee(t,[],i))}function _n(n){const e=_e(n);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const t=ze(n),a=t?n.offsetWidth:i,u=t?n.offsetHeight:o,s=be(i)!==a||be(o)!==u;return s&&(i=a,o=u),{width:i,height:o,$:s}}function Ue(n){return Re(n)?n:n.contextElement}function Fe(n){const e=Ue(n);if(!ze(e))return xe(1);const i=e.getBoundingClientRect(),{width:o,height:t,$:a}=_n(e);let u=(a?be(i.width):i.width)/o,s=(a?be(i.height):i.height)/t;return(!u||!Number.isFinite(u))&&(u=1),(!s||!Number.isFinite(s))&&(s=1),{x:u,y:s}}const Un=xe(0);function Wn(n){const e=_(n);return!Nn()||!e.visualViewport?Un:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Gn(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==_(n)?!1:e}function nt(n,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=Ue(n);let u=xe(1);e&&(o?Re(o)&&(u=Fe(o)):u=Fe(n));const s=Gn(a,i,o)?Wn(a):xe(0);let r=(t.left+s.x)/u.x,l=(t.top+s.y)/u.y,c=t.width/u.x,d=t.height/u.y;if(a){const h=_(a),v=o&&Re(o)?_(o):o;let x=h.frameElement;for(;x&&o&&v!==h;){const b=Fe(x),f=x.getBoundingClientRect(),m=_e(x),C=f.left+(x.clientLeft+parseFloat(m.paddingLeft))*b.x,F=f.top+(x.clientTop+parseFloat(m.paddingTop))*b.y;r*=b.x,l*=b.y,c*=b.x,d*=b.y,r+=C,l+=F,x=_(x).frameElement}}return jn({width:c,height:d,x:r,y:l})}function Yn(n,e){let i=null,o;const t=Pt(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function u(s,r){s===void 0&&(s=!1),r===void 0&&(r=1),a();const{left:l,top:c,width:d,height:h}=n.getBoundingClientRect();if(s||e(),!d||!h)return;const v=de(c),x=de(t.clientWidth-(l+d)),b=de(t.clientHeight-(c+h)),f=de(l),C={rootMargin:-v+"px "+-x+"px "+-b+"px "+-f+"px",threshold:Bn(0,Tn(1,r))||1};let F=!0;function D(I){const A=I[0].intersectionRatio;if(A!==r){if(!F)return u();A?u(!1,A):o=setTimeout(()=>{u(!1,1e-7)},100)}F=!1}try{i=new IntersectionObserver(D,{...C,root:t.ownerDocument})}catch{i=new IntersectionObserver(D,C)}i.observe(n)}return u(!0),a}function qn(n,e,i,o){o===void 0&&(o={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,l=Ue(n),c=t||a?[...l?Ee(l):[],...Ee(e)]:[];c.forEach(m=>{t&&m.addEventListener("scroll",i,{passive:!0}),a&&m.addEventListener("resize",i)});const d=l&&s?Yn(l,i):null;let h=-1,v=null;u&&(v=new ResizeObserver(m=>{let[C]=m;C&&C.target===l&&v&&(v.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{v&&v.observe(e)})),i()}),l&&!r&&v.observe(l),v.observe(e));let x,b=r?nt(n):null;r&&f();function f(){const m=nt(n);b&&(m.x!==b.x||m.y!==b.y||m.width!==b.width||m.height!==b.height)&&i(),b=m,x=requestAnimationFrame(f)}return i(),()=>{c.forEach(m=>{t&&m.removeEventListener("scroll",i),a&&m.removeEventListener("resize",i)}),d&&d(),v&&v.disconnect(),v=null,r&&cancelAnimationFrame(x)}}var Le=p.useLayoutEffect,Xn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Ce=function(){};function Kn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Zn(n,e){for(var i=arguments.length,o=new Array(i>2?i-2:0),t=2;t<i;t++)o[t-2]=arguments[t];var a=[].concat(o);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(Kn(n,u)));return a.filter(function(s){return s}).map(function(s){return String(s).trim()}).join(" ")}var it=function(e){return ai(e)?e.filter(Boolean):ie(e)==="object"&&e!==null?[e]:[]},Rt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=K(e,Xn);return y({},i)},V=function(e,i,o){var t=e.cx,a=e.getStyles,u=e.getClassNames,s=e.className;return{css:a(i,e),className:t(o??{},u(i,e),s)}};function Se(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Jn(n){return Se(n)?window.innerHeight:n.clientHeight}function Lt(n){return Se(n)?window.pageYOffset:n.scrollTop}function we(n,e){if(Se(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Qn(n){var e=getComputedStyle(n),i=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function ei(n,e,i,o){return i*((n=n/o-1)*n*n+1)+e}function pe(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Ce,t=Lt(n),a=e-t,u=10,s=0;function r(){s+=u;var l=ei(s,t,a,i);we(n,l),s<i?window.requestAnimationFrame(r):o(n)}r()}function ot(n,e){var i=n.getBoundingClientRect(),o=e.getBoundingClientRect(),t=e.offsetHeight/3;o.bottom+t>i.bottom?we(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):o.top-t<i.top&&we(n,Math.max(e.offsetTop-t,0))}function ti(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function rt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function ni(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var $t=!1,ii={get passive(){return $t=!0}},fe=typeof window<"u"?window:{};fe.addEventListener&&fe.removeEventListener&&(fe.addEventListener("p",Ce,ii),fe.removeEventListener("p",Ce,!1));var oi=$t;function ri(n){return n!=null}function ai(n){return Array.isArray(n)}function he(n,e,i){return n?e:i}var ui=function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),t=1;t<i;t++)o[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var s=X(u,1),r=s[0];return!o.includes(r)});return a.reduce(function(u,s){var r=X(s,2),l=r[0],c=r[1];return u[l]=c,u},{})},si=["children","innerProps"],li=["children","innerProps"];function ci(n){var e=n.maxHeight,i=n.menuEl,o=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,s=n.controlHeight,r=Qn(i),l={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return l;var c=r.getBoundingClientRect(),d=c.height,h=i.getBoundingClientRect(),v=h.bottom,x=h.height,b=h.top,f=i.offsetParent.getBoundingClientRect(),m=f.top,C=u?window.innerHeight:Jn(r),F=Lt(r),D=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=m-I,P=C-b,O=A+F,M=d-F-b,$=v-C+F+D,j=F+b-I,T=160;switch(t){case"auto":case"bottom":if(P>=x)return{placement:"bottom",maxHeight:e};if(M>=x&&!u)return a&&pe(r,$,T),{placement:"bottom",maxHeight:e};if(!u&&M>=o||u&&P>=o){a&&pe(r,$,T);var W=u?P-D:M-D;return{placement:"bottom",maxHeight:W}}if(t==="auto"||u){var G=e,L=u?A:O;return L>=o&&(G=Math.min(L-D-s,e)),{placement:"top",maxHeight:G}}if(t==="bottom")return a&&we(r,$),{placement:"bottom",maxHeight:e};break;case"top":if(A>=x)return{placement:"top",maxHeight:e};if(O>=x&&!u)return a&&pe(r,j,T),{placement:"top",maxHeight:e};if(!u&&O>=o||u&&A>=o){var k=e;return(!u&&O>=o||u&&A>=o)&&(k=u?A-I:O-I),a&&pe(r,j,T),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return l}function di(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Tt=function(e){return e==="auto"?"bottom":e},pi=function(e,i){var o,t=e.placement,a=e.theme,u=a.borderRadius,s=a.spacing,r=a.colors;return y((o={label:"menu"},ae(o,di(t),"100%"),ae(o,"position","absolute"),ae(o,"width","100%"),ae(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:s.menuGutter,marginTop:s.menuGutter})},Bt=p.createContext(null),fi=function(e){var i=e.children,o=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,s=e.menuShouldScrollIntoView,r=e.theme,l=p.useContext(Bt)||{},c=l.setPortalPlacement,d=p.useRef(null),h=p.useState(t),v=X(h,2),x=v[0],b=v[1],f=p.useState(null),m=X(f,2),C=m[0],F=m[1],D=r.spacing.controlHeight;return Le(function(){var I=d.current;if(I){var A=u==="fixed",P=s&&!A,O=ci({maxHeight:t,menuEl:I,minHeight:o,placement:a,shouldScroll:P,isFixedPosition:A,controlHeight:D});b(O.maxHeight),F(O.placement),c==null||c(O.placement)}},[t,a,u,s,o,c,D]),i({ref:d,placerProps:y(y({},e),{},{placement:C||Tt(a),maxHeight:x})})},hi=function(e){var i=e.children,o=e.innerRef,t=e.innerProps;return w("div",S({},V(e,"menu",{menu:!0}),{ref:o},t),i)},mi=hi,vi=function(e,i){var o=e.maxHeight,t=e.theme.spacing.baseUnit;return y({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},gi=function(e){var i=e.children,o=e.innerProps,t=e.innerRef,a=e.isMulti;return w("div",S({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},o),i)},jt=function(e,i){var o=e.theme,t=o.spacing.baseUnit,a=o.colors;return y({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},bi=jt,xi=jt,Ei=function(e){var i=e.children,o=i===void 0?"No options":i,t=e.innerProps,a=K(e,si);return w("div",S({},V(y(y({},a),{},{children:o,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),o)},Ci=function(e){var i=e.children,o=i===void 0?"Loading...":i,t=e.innerProps,a=K(e,li);return w("div",S({},V(y(y({},a),{},{children:o,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),o)},wi=function(e){var i=e.rect,o=e.offset,t=e.position;return{left:i.left,position:t,top:o,width:i.width,zIndex:1}},yi=function(e){var i=e.appendTo,o=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,s=e.menuPosition,r=p.useRef(null),l=p.useRef(null),c=p.useState(Tt(u)),d=X(c,2),h=d[0],v=d[1],x=p.useMemo(function(){return{setPortalPlacement:v}},[]),b=p.useState(null),f=X(b,2),m=f[0],C=f[1],F=p.useCallback(function(){if(t){var P=ti(t),O=s==="fixed"?0:window.pageYOffset,M=P[h]+O;(M!==(m==null?void 0:m.offset)||P.left!==(m==null?void 0:m.rect.left)||P.width!==(m==null?void 0:m.rect.width))&&C({offset:M,rect:P})}},[t,s,h,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Le(function(){F()},[F]);var D=p.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),t&&r.current&&(l.current=qn(t,r.current,F,{elementResize:"ResizeObserver"in window}))},[t,F]);Le(function(){D()},[D]);var I=p.useCallback(function(P){r.current=P,D()},[D]);if(!i&&s!=="fixed"||!m)return null;var A=w("div",S({ref:I},V(y(y({},e),{},{offset:m.offset,position:s,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),o);return w(Bt.Provider,{value:x},i?yt.createPortal(A,i):A)},Si=function(e){var i=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Fi=function(e){var i=e.children,o=e.innerProps,t=e.isDisabled,a=e.isRtl;return w("div",S({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),o),i)},Oi=function(e,i){var o=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},Di=function(e){var i=e.children,o=e.innerProps,t=e.isMulti,a=e.hasValue;return w("div",S({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),o),i)},Ii=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Ai=function(e){var i=e.children,o=e.innerProps;return w("div",S({},V(e,"indicatorsContainer",{indicators:!0}),o),i)},at,Pi=["size"],Mi=["innerProps","isRtl","size"],Vi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Nt=function(e){var i=e.size,o=K(e,Pi);return w("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Vi},o))},We=function(e){return w(Nt,S({size:20},e),w("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ht=function(e){return w(Nt,S({size:20},e),w("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},zt=function(e,i){var o=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},ki=zt,Ri=function(e){var i=e.children,o=e.innerProps;return w("div",S({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||w(Ht,null))},Li=zt,$i=function(e){var i=e.children,o=e.innerProps;return w("div",S({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||w(We,null))},Ti=function(e,i){var o=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Bi=function(e){var i=e.innerProps;return w("span",S({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},ji=bn(at||(at=$n([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ni=function(e,i){var o=e.isFocused,t=e.size,a=e.theme,u=a.colors,s=a.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?u.neutral60:u.neutral20,padding:s*2})},Oe=function(e){var i=e.delay,o=e.offset;return w("span",{css:Ne({animation:"".concat(ji," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Hi=function(e){var i=e.innerProps,o=e.isRtl,t=e.size,a=t===void 0?4:t,u=K(e,Mi);return w("div",S({},V(y(y({},u),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),w(Oe,{delay:0,offset:o}),w(Oe,{delay:160,offset:!0}),w(Oe,{delay:320,offset:!o}))},zi=function(e,i){var o=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,s=a.borderRadius,r=a.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:t?u.primary:u.neutral20,borderRadius:s,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},_i=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,s=e.menuIsOpen;return w("div",S({ref:a},V(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":t,"control--menu-is-open":s}),u,{"aria-disabled":o||void 0}),i)},Ui=_i,Wi=["data"],Gi=function(e,i){var o=e.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Yi=function(e){var i=e.children,o=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,s=e.headingProps,r=e.innerProps,l=e.label,c=e.theme,d=e.selectProps;return w("div",S({},V(e,"group",{group:!0}),r),w(u,S({},s,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:o}),l),w("div",null,i))},qi=function(e,i){var o=e.theme,t=o.colors,a=o.spacing;return y({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Xi=function(e){var i=Rt(e);i.data;var o=K(i,Wi);return w("div",S({},V(e,"groupHeading",{"group-heading":!0}),o))},Ki=Yi,Zi=["innerRef","isDisabled","isHidden","inputClassName"],Ji=function(e,i){var o=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,s=a.colors;return y(y({visibility:o?"hidden":"visible",transform:t?"translateZ(0)":""},Qi),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:s.neutral80})},_t={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Qi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},_t)},eo=function(e){return y({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},_t)},to=function(e){var i=e.cx,o=e.value,t=Rt(e),a=t.innerRef,u=t.isDisabled,s=t.isHidden,r=t.inputClassName,l=K(t,Zi);return w("div",S({},V(e,"input",{"input-container":!0}),{"data-value":o||""}),w("input",S({className:i({input:!0},r),ref:a,style:eo(s),disabled:u},l)))},no=to,io=function(e,i){var o=e.theme,t=o.spacing,a=o.borderRadius,u=o.colors;return y({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},oo=function(e,i){var o=e.theme,t=o.borderRadius,a=o.colors,u=e.cropWithEllipsis;return y({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},ro=function(e,i){var o=e.theme,t=o.spacing,a=o.borderRadius,u=o.colors,s=e.isFocused;return y({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:s?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Ut=function(e){var i=e.children,o=e.innerProps;return w("div",o,i)},ao=Ut,uo=Ut;function so(n){var e=n.children,i=n.innerProps;return w("div",S({role:"button"},i),e||w(We,{size:14}))}var lo=function(e){var i=e.children,o=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,s=e.removeProps,r=e.selectProps,l=o.Container,c=o.Label,d=o.Remove;return w(l,{data:t,innerProps:y(y({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:r},w(c,{data:t,innerProps:y({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),w(d,{data:t,innerProps:y(y({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},s),selectProps:r}))},co=lo,po=function(e,i){var o=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,s=u.spacing,r=u.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:t?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(s.baseUnit*2,"px ").concat(s.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},fo=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,s=e.innerProps;return w("div",S({},V(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":o},s),i)},ho=fo,mo=function(e,i){var o=e.theme,t=o.spacing,a=o.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},vo=function(e){var i=e.children,o=e.innerProps;return w("div",S({},V(e,"placeholder",{placeholder:!0}),o),i)},go=vo,bo=function(e,i){var o=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},xo=function(e){var i=e.children,o=e.isDisabled,t=e.innerProps;return w("div",S({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),t),i)},Eo=xo,Ge={ClearIndicator:$i,Control:Ui,DropdownIndicator:Ri,DownChevron:Ht,CrossIcon:We,Group:Ki,GroupHeading:Xi,IndicatorsContainer:Ai,IndicatorSeparator:Bi,Input:no,LoadingIndicator:Hi,Menu:mi,MenuList:gi,MenuPortal:yi,LoadingMessage:Ci,NoOptionsMessage:Ei,MultiValue:co,MultiValueContainer:ao,MultiValueLabel:uo,MultiValueRemove:so,Option:ho,Placeholder:go,SelectContainer:Fi,SingleValue:Eo,ValueContainer:Di},Co=function(e){return y(y({},Ge),e.components)},ut=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function wo(n,e){return!!(n===e||ut(n)&&ut(e))}function yo(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!wo(n[i],e[i]))return!1;return!0}function So(n,e){e===void 0&&(e=yo);var i=null;function o(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var u=n.apply(this,t);return i={lastResult:u,lastArgs:t,lastThis:this},u}return o.clear=function(){i=null},o}var Fo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Oo=function(e){return w("span",S({css:Fo},e))},st=Oo,Do={guidance:function(e){var i=e.isSearchable,o=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,o=e.label,t=o===void 0?"":o,a=e.labels,u=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,o=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,s=e.selectValue,r=e.isDisabled,l=e.isSelected,c=e.isAppleDevice,d=function(b,f){return b&&b.length?"".concat(b.indexOf(f)+1," of ").concat(b.length):""};if(i==="value"&&s)return"value ".concat(u," focused, ").concat(d(s,o),".");if(i==="menu"&&c){var h=r?" disabled":"",v="".concat(l?" selected":"").concat(h);return"".concat(u).concat(v,", ").concat(d(t,o),".")}return""},onFilter:function(e){var i=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},Io=function(e){var i=e.ariaSelection,o=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,s=e.selectValue,r=e.selectProps,l=e.id,c=e.isAppleDevice,d=r.ariaLiveMessages,h=r.getOptionLabel,v=r.inputValue,x=r.isMulti,b=r.isOptionDisabled,f=r.isSearchable,m=r.menuIsOpen,C=r.options,F=r.screenReaderStatus,D=r.tabSelectsValue,I=r.isLoading,A=r["aria-label"],P=r["aria-live"],O=p.useMemo(function(){return y(y({},Do),d||{})},[d]),M=p.useMemo(function(){var L="";if(i&&O.onChange){var k=i.option,U=i.options,H=i.removedValue,Z=i.removedValues,J=i.value,se=function(q){return Array.isArray(q)?null:q},R=H||k||se(J),N=R?h(R):"",Y=U||Z||void 0,Q=Y?Y.map(h):[],z=y({isDisabled:R&&b(R,s),label:N,labels:Q},i);L=O.onChange(z)}return L},[i,O,b,s,h]),$=p.useMemo(function(){var L="",k=o||t,U=!!(o&&s&&s.includes(o));if(k&&O.onFocus){var H={focused:k,label:h(k),isDisabled:b(k,s),isSelected:U,options:a,context:k===o?"menu":"value",selectValue:s,isAppleDevice:c};L=O.onFocus(H)}return L},[o,t,h,b,O,a,s,c]),j=p.useMemo(function(){var L="";if(m&&C.length&&!I&&O.onFilter){var k=F({count:a.length});L=O.onFilter({inputValue:v,resultsMessage:k})}return L},[a,v,m,O,C,F,I]),T=(i==null?void 0:i.action)==="initial-input-focus",W=p.useMemo(function(){var L="";if(O.guidance){var k=t?"value":m?"menu":"input";L=O.guidance({"aria-label":A,context:k,isDisabled:o&&b(o,s),isMulti:x,isSearchable:f,tabSelectsValue:D,isInitialFocus:T})}return L},[A,o,t,x,b,f,m,O,s,D,T]),G=w(p.Fragment,null,w("span",{id:"aria-selection"},M),w("span",{id:"aria-focused"},$),w("span",{id:"aria-results"},j),w("span",{id:"aria-guidance"},W));return w(p.Fragment,null,w(st,{id:l},T&&G),w(st,{"aria-live":P,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!T&&G))},Ao=Io,$e=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Po=new RegExp("["+$e.map(function(n){return n.letters}).join("")+"]","g"),Wt={};for(var De=0;De<$e.length;De++)for(var Ie=$e[De],Ae=0;Ae<Ie.letters.length;Ae++)Wt[Ie.letters[Ae]]=Ie.base;var Gt=function(e){return e.replace(Po,function(i){return Wt[i]})},Mo=So(Gt),lt=function(e){return e.replace(/^\s+|\s+$/g,"")},Vo=function(e){return"".concat(e.label," ").concat(e.value)},ko=function(e){return function(i,o){if(i.data.__isNew__)return!0;var t=y({ignoreCase:!0,ignoreAccents:!0,stringify:Vo,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,s=t.stringify,r=t.trim,l=t.matchFrom,c=r?lt(o):o,d=r?lt(s(i)):s(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Mo(c),d=Gt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ro=["innerRef"];function Lo(n){var e=n.innerRef,i=K(n,Ro),o=ui(i,"onExited","in","enter","exit","appear");return w("input",S({ref:e},o,{css:Ne({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var $o=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function To(n){var e=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),s=p.useRef(!1),r=p.useRef(0),l=p.useRef(null),c=p.useCallback(function(f,m){if(l.current!==null){var C=l.current,F=C.scrollTop,D=C.scrollHeight,I=C.clientHeight,A=l.current,P=m>0,O=D-I-F,M=!1;O>m&&u.current&&(o&&o(f),u.current=!1),P&&s.current&&(a&&a(f),s.current=!1),P&&m>O?(i&&!u.current&&i(f),A.scrollTop=D,M=!0,u.current=!0):!P&&-m>F&&(t&&!s.current&&t(f),A.scrollTop=0,M=!0,s.current=!0),M&&$o(f)}},[i,o,t,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),h=p.useCallback(function(f){r.current=f.changedTouches[0].clientY},[]),v=p.useCallback(function(f){var m=r.current-f.changedTouches[0].clientY;c(f,m)},[c]),x=p.useCallback(function(f){if(f){var m=oi?{passive:!1}:!1;f.addEventListener("wheel",d,m),f.addEventListener("touchstart",h,m),f.addEventListener("touchmove",v,m)}},[v,h,d]),b=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",h,!1),f.removeEventListener("touchmove",v,!1))},[v,h,d]);return p.useEffect(function(){if(e){var f=l.current;return x(f),function(){b(f)}}},[e,x,b]),function(f){l.current=f}}var ct=["boxSizing","height","overflow","paddingRight","position"],dt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function pt(n){n.preventDefault()}function ft(n){n.stopPropagation()}function ht(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function mt(){return"ontouchstart"in window||navigator.maxTouchPoints}var vt=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,oe={capture:!1,passive:!1};function Bo(n){var e=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,t=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(r){if(vt){var l=document.body,c=l&&l.style;if(o&&ct.forEach(function(x){var b=c&&c[x];t.current[x]=b}),o&&re<1){var d=parseInt(t.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,v=window.innerWidth-h+d||0;Object.keys(dt).forEach(function(x){var b=dt[x];c&&(c[x]=b)}),c&&(c.paddingRight="".concat(v,"px"))}l&&mt()&&(l.addEventListener("touchmove",pt,oe),r&&(r.addEventListener("touchstart",ht,oe),r.addEventListener("touchmove",ft,oe))),re+=1}},[o]),s=p.useCallback(function(r){if(vt){var l=document.body,c=l&&l.style;re=Math.max(re-1,0),o&&re<1&&ct.forEach(function(d){var h=t.current[d];c&&(c[d]=h)}),l&&mt()&&(l.removeEventListener("touchmove",pt,oe),r&&(r.removeEventListener("touchstart",ht,oe),r.removeEventListener("touchmove",ft,oe)))}},[o]);return p.useEffect(function(){if(e){var r=a.current;return u(r),function(){s(r)}}},[e,u,s]),function(r){a.current=r}}var jo=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},No={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Ho(n){var e=n.children,i=n.lockEnabled,o=n.captureEnabled,t=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,s=n.onTopArrive,r=n.onTopLeave,l=To({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:s,onTopLeave:r}),c=Bo({isEnabled:i}),d=function(v){l(v),c(v)};return w(p.Fragment,null,i&&w("div",{onClick:jo,css:No}),e(d))}var zo={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},_o=function(e){var i=e.name,o=e.onFocus;return w("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:zo,value:"",onChange:function(){}})},Uo=_o;function Ye(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Wo(){return Ye(/^iPhone/i)}function Yt(){return Ye(/^Mac/i)}function Go(){return Ye(/^iPad/i)||Yt()&&navigator.maxTouchPoints>1}function Yo(){return Wo()||Go()}function qo(){return Yt()||Yo()}var Xo=function(e){return e.label},Ko=function(e){return e.label},Zo=function(e){return e.value},Jo=function(e){return!!e.isDisabled},Qo={clearIndicator:Li,container:Si,control:zi,dropdownIndicator:ki,group:Gi,groupHeading:qi,indicatorsContainer:Ii,indicatorSeparator:Ti,input:Ji,loadingIndicator:Ni,loadingMessage:xi,menu:pi,menuList:vi,menuPortal:wi,multiValue:io,multiValueLabel:oo,multiValueRemove:ro,noOptionsMessage:bi,option:po,placeholder:mo,singleValue:bo,valueContainer:Oi},er={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},tr=4,qt=4,nr=38,ir=qt*2,or={baseUnit:qt,controlHeight:nr,menuGutter:ir},Pe={borderRadius:tr,colors:er,spacing:or},rr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:rt(),captureMenuScroll:!rt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:ko(),formatGroupLabel:Xo,getOptionLabel:Ko,getOptionValue:Zo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Jo,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!ni(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function gt(n,e,i,o){var t=Zt(n,e,i),a=Jt(n,e,i),u=Kt(n,e),s=ye(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:s,index:o}}function ve(n,e){return n.options.map(function(i,o){if("options"in i){var t=i.options.map(function(u,s){return gt(n,u,e,s)}).filter(function(u){return xt(n,u)});return t.length>0?{type:"group",data:i,options:t,index:o}:void 0}var a=gt(n,i,e,o);return xt(n,a)?a:void 0}).filter(ri)}function Xt(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,He(i.options.map(function(o){return o.data}))):e.push(i.data),e},[])}function bt(n,e){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,He(o.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(o.index,"-").concat(t.index)}}))):i.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),i},[])}function ar(n,e){return Xt(ve(n,e))}function xt(n,e){var i=n.inputValue,o=i===void 0?"":i,t=e.data,a=e.isSelected,u=e.label,s=e.value;return(!en(n)||!a)&&Qt(n,{label:u,value:s,data:t},o)}function ur(n,e){var i=n.focusedValue,o=n.selectValue,t=o.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function sr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Me=function(e,i){var o,t=(o=e.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return t||null},Kt=function(e,i){return e.getOptionLabel(i)},ye=function(e,i){return e.getOptionValue(i)};function Zt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function Jt(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var o=ye(n,e);return i.some(function(t){return ye(n,t)===o})}function Qt(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var en=function(e){var i=e.hideSelectedOptions,o=e.isMulti;return i===void 0?o:i},lr=1,tn=function(n){In(i,n);var e=Vn(i);function i(o){var t;if(On(this,i),t=e.call(this,o),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=qo(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,l){var c=t.props,d=c.onChange,h=c.name;l.name=h,t.ariaOnChange(r,l),d(r,l)},t.setValue=function(r,l,c){var d=t.props,h=d.closeMenuOnSelect,v=d.isMulti,x=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:x}),h&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:l,option:c})},t.selectOption=function(r){var l=t.props,c=l.blurInputOnSelect,d=l.isMulti,h=l.name,v=t.state.selectValue,x=d&&t.isOptionSelected(r,v),b=t.isOptionDisabled(r,v);if(x){var f=t.getOptionValue(r);t.setValue(v.filter(function(m){return t.getOptionValue(m)!==f}),"deselect-option",r)}else if(!b)d?t.setValue([].concat(He(v),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:h});return}c&&t.blurInput()},t.removeValue=function(r){var l=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(r),h=c.filter(function(x){return t.getOptionValue(x)!==d}),v=he(l,h,h[0]||null);t.onChange(v,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(he(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,l=t.state.selectValue,c=l[l.length-1],d=l.slice(0,l.length-1),h=he(r,d,d[0]||null);t.onChange(h,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(r){return Me(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return bt(ve(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return Zn.apply(void 0,[t.props.classNamePrefix].concat(l))},t.getOptionLabel=function(r){return Kt(t.props,r)},t.getOptionValue=function(r){return ye(t.props,r)},t.getStyles=function(r,l){var c=t.props.unstyled,d=Qo[r](l,c);d.boxSizing="border-box";var h=t.props.styles[r];return h?h(d,l):d},t.getClassNames=function(r,l){var c,d;return(c=(d=t.props.classNames)[r])===null||c===void 0?void 0:c.call(d,l)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return Co(t.props)},t.buildCategorizedOptions=function(){return ve(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Xt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,l){t.setState({ariaSelection:y({value:r},l)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var l=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():l&&t.openMenu("first"):(l&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var l=t.props,c=l.isMulti,d=l.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&Se(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var l=r.touches,c=l&&l.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var l=r.touches,c=l&&l.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),h=Math.abs(c.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||h>v}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var l=t.props.inputValue,c=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:l}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var l=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:l}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var l=t.getFocusableOptions(),c=l.indexOf(r);t.setState({focusedOption:r,focusedOptionId:c>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return en(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var l=t.props,c=l.isMulti,d=l.backspaceRemovesValue,h=l.escapeClearsValue,v=l.inputValue,x=l.isClearable,b=l.isDisabled,f=l.menuIsOpen,m=l.onKeyDown,C=l.tabSelectsValue,F=l.openMenuOnFocus,D=t.state,I=D.focusedOption,A=D.focusedValue,P=D.selectValue;if(!b&&!(typeof m=="function"&&(m(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||v)return;t.focusValue("previous");break;case"ArrowRight":if(!c||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(A)t.removeValue(A);else{if(!d)return;c?t.popValue():x&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!f||!C||!I||F&&t.isOptionSelected(I,P))return;t.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(f){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":f?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):x&&h&&t.clearValue();break;case" ":if(v)return;if(!f){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":f?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":f?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!f)return;t.focusOption("pageup");break;case"PageDown":if(!f)return;t.focusOption("pagedown");break;case"Home":if(!f)return;t.focusOption("first");break;case"End":if(!f)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++lr),t.state.selectValue=it(o.value),o.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),s=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[s],t.state.focusedOptionId=Me(a,u[s])}return t}return Dn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&ot(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,s=a.menuIsOpen,r=this.state.isFocused;(r&&!u&&t.isDisabled||r&&s&&!t.menuIsOpen)&&this.focusInput(),r&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(ot(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,s=u.selectValue,r=u.isFocused,l=this.buildFocusableOptions(),c=t==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(s[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c],focusedOptionId:this.getFocusedOptionId(l[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,s=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=u.indexOf(s);s||(r=-1);var l=u.length-1,c=-1;if(u.length){switch(t){case"previous":r===0?c=0:r===-1?c=l:c=r-1;break;case"next":r>-1&&r<l&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,s=this.getFocusableOptions();if(s.length){var r=0,l=s.indexOf(u);u||(l=-1),t==="up"?r=l>0?l-1:s.length-1:t==="down"?r=(l+1)%s.length:t==="pageup"?(r=l-a,r<0&&(r=0)):t==="pagedown"?(r=l+a,r>s.length-1&&(r=s.length-1)):t==="last"&&(r=s.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:s[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(s[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Pe):y(y({},Pe),this.props.theme):Pe}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,s=this.getClassNames,r=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,v=d.isRtl,x=d.options,b=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:s,getValue:r,hasValue:b,isMulti:h,isRtl:v,options:x,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return Zt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Jt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Qt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,s=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:s})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,s=t.inputId,r=t.inputValue,l=t.tabIndex,c=t.form,d=t.menuIsOpen,h=t.required,v=this.getComponents(),x=v.Input,b=this.state,f=b.inputIsHidden,m=b.ariaSelection,C=this.commonProps,F=s||this.getElementId("input"),D=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(x,S({},C,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:r},D)):p.createElement(Lo,S({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Ce,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,s=a.MultiValueContainer,r=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,h=this.commonProps,v=this.props,x=v.controlShouldRenderValue,b=v.isDisabled,f=v.isMulti,m=v.inputValue,C=v.placeholder,F=this.state,D=F.selectValue,I=F.focusedValue,A=F.isFocused;if(!this.hasValue()||!x)return m?null:p.createElement(d,S({},h,{key:"placeholder",isDisabled:b,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),C);if(f)return D.map(function(O,M){var $=O===I,j="".concat(t.getOptionLabel(O),"-").concat(t.getOptionValue(O));return p.createElement(u,S({},h,{components:{Container:s,Label:r,Remove:l},isFocused:$,isDisabled:b,key:j,index:M,removeProps:{onClick:function(){return t.removeValue(O)},onTouchEnd:function(){return t.removeValue(O)},onMouseDown:function(W){W.preventDefault()}},data:O}),t.formatOptionLabel(O,"value"))});if(m)return null;var P=D[0];return p.createElement(c,S({},h,{data:P,isDisabled:b}),this.formatOptionLabel(P,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,s=this.props,r=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,s=this.props,r=s.isDisabled,l=s.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var s=this.commonProps,r=this.props.isDisabled,l=this.state.isFocused;return p.createElement(u,S({},s,{isDisabled:r,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,s=this.props.isDisabled,r=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:l,isDisabled:s,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,s=a.GroupHeading,r=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,h=a.NoOptionsMessage,v=a.Option,x=this.commonProps,b=this.state.focusedOption,f=this.props,m=f.captureMenuScroll,C=f.inputValue,F=f.isLoading,D=f.loadingMessage,I=f.minMenuHeight,A=f.maxMenuHeight,P=f.menuIsOpen,O=f.menuPlacement,M=f.menuPosition,$=f.menuPortalTarget,j=f.menuShouldBlockScroll,T=f.menuShouldScrollIntoView,W=f.noOptionsMessage,G=f.onMenuScrollToTop,L=f.onMenuScrollToBottom;if(!P)return null;var k=function(N,Y){var Q=N.type,z=N.data,ee=N.isDisabled,q=N.isSelected,le=N.label,un=N.value,Ke=b===z,Ze=ee?void 0:function(){return t.onOptionHover(z)},sn=ee?void 0:function(){return t.selectOption(z)},Je="".concat(t.getElementId("option"),"-").concat(Y),ln={id:Je,onClick:sn,onMouseMove:Ze,onMouseOver:Ze,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:q};return p.createElement(v,S({},x,{innerProps:ln,data:z,isDisabled:ee,isSelected:q,key:Je,label:le,type:Q,value:un,isFocused:Ke,innerRef:Ke?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(N.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var N=R.data,Y=R.options,Q=R.index,z="".concat(t.getElementId("group"),"-").concat(Q),ee="".concat(z,"-heading");return p.createElement(u,S({},x,{key:z,data:N,options:Y,Heading:s,headingProps:{id:ee,data:R.data},label:t.formatGroupLabel(R.data)}),R.options.map(function(q){return k(q,"".concat(Q,"-").concat(q.index))}))}else if(R.type==="option")return k(R,"".concat(R.index))});else if(F){var H=D({inputValue:C});if(H===null)return null;U=p.createElement(d,x,H)}else{var Z=W({inputValue:C});if(Z===null)return null;U=p.createElement(h,x,Z)}var J={minMenuHeight:I,maxMenuHeight:A,menuPlacement:O,menuPosition:M,menuShouldScrollIntoView:T},se=p.createElement(fi,S({},x,J),function(R){var N=R.ref,Y=R.placerProps,Q=Y.placement,z=Y.maxHeight;return p.createElement(r,S({},x,J,{innerRef:N,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:F,placement:Q}),p.createElement(Ho,{captureEnabled:m,onTopArrive:G,onBottomArrive:L,lockEnabled:j},function(ee){return p.createElement(l,S({},x,{innerRef:function(le){t.getMenuListRef(le),ee(le)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:t.getElementId("listbox")},isLoading:F,maxHeight:z,focusedOption:b}),U)}))});return $||M==="fixed"?p.createElement(c,S({},x,{appendTo:$,controlElement:this.controlRef,menuPlacement:O,menuPosition:M}),se):se}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,s=a.isDisabled,r=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!s)return p.createElement(Uo,{name:l,onFocus:this.onValueInputFocus});if(!(!l||s))if(r)if(u){var h=d.map(function(b){return t.getOptionValue(b)}).join(u);return p.createElement("input",{name:l,type:"hidden",value:h})}else{var v=d.length>0?d.map(function(b,f){return p.createElement("input",{key:"i-".concat(f),name:l,type:"hidden",value:t.getOptionValue(b)})}):p.createElement("input",{name:l,type:"hidden",value:""});return p.createElement("div",null,v)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:l,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,s=a.focusedOption,r=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(Ao,S({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:s,focusedValue:r,isFocused:l,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,s=t.SelectContainer,r=t.ValueContainer,l=this.props,c=l.className,d=l.id,h=l.isDisabled,v=l.menuIsOpen,x=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(s,S({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:x}),this.renderLiveRegion(),p.createElement(a,S({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:x,menuIsOpen:v}),p.createElement(r,S({},b,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,S({},b,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,s=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,h=a.instancePrefix,v=t.options,x=t.value,b=t.menuIsOpen,f=t.inputValue,m=t.isMulti,C=it(x),F={};if(u&&(x!==u.value||v!==u.options||b!==u.menuIsOpen||f!==u.inputValue)){var D=b?ar(t,C):[],I=b?bt(ve(t,C),"".concat(h,"-option")):[],A=s?ur(a,C):null,P=sr(a,D),O=Me(I,P);F={selectValue:C,focusedOption:P,focusedOptionId:O,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var M=r!=null&&t!==u?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},$=l,j=c&&d;return c&&!j&&($={value:he(m,C,C[0]||null),options:C,action:"initial-input-focus"},j=!d),(l==null?void 0:l.action)==="initial-input-focus"&&($=null),y(y(y({},F),M),{},{prevProps:t,ariaSelection:$,prevWasFocused:j})}}]),i}(p.Component);tn.defaultProps=rr;var cr=p.forwardRef(function(n,e){var i=Fn(n);return p.createElement(tn,S({ref:e},i))}),nn=cr;const on=n=>p.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M1.5 1.75L6 6.25L10.5 1.75",stroke:"#EFEDE8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Et=[{value:"Alcoholic drinks",label:"Alcoholic drinks"},{value:"Berries",label:"Berries"},{value:"Cereals",label:"Cereals"},{value:"Dairy",label:"Dairy"},{value:"Dried fruits",label:"Dried fruits"},{value:"Eggs",label:"Eggs"},{value:"Fish",label:"Fish"},{value:"Flour",label:"Flour"},{value:"Meat",label:"Meat"}],dr=n=>g.jsx(Ge.DropdownIndicator,{...n,children:g.jsx(on,{})}),pr={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),control:(n,e)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${E.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${E.orangeColor}`:0,transition:`all ${E.animation}`,"&:hover":{borderColor:`${E.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),dropdownIndicator:(n,e)=>({...n,transition:`all ${E.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${E.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${E.successColor}`:`${E.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${E.orangeColor}`,color:`${E.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.10)",width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})},fr=({dataFunc:n,currentValue:e})=>g.jsx(nn,{onChange:n,options:Et,components:{DropdownIndicator:dr},styles:pr,value:e===""?{value:"Categories",label:"Categories"}:Et.find(i=>i.value===e)}),Ct=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],hr=n=>g.jsx(Ge.DropdownIndicator,{...n,children:g.jsx(on,{})}),mr={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,e)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${E.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${E.orangeColor}`:0,transition:`all ${E.animation}`,"&:hover":{borderColor:`${E.orangeColor}`},"@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,e)=>({...n,transition:`all ${E.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${E.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${E.successColor}`:`${E.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${E.orangeColor}`,color:`${E.whiteColor}`}})},vr=({dataFunc:n,currentValue:e})=>g.jsx(nn,{onChange:n,options:Ct,components:{DropdownIndicator:hr},styles:mr,value:Ct.find(i=>i.value===e),defaultValue:e}),gr=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),qe=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M13.5 4.5L4.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M4.5 4.5L13.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),br=te(gr)`
  width: 18px;
  height: 18px;
`,xr=te(qe)`
  width: 20px;
  height: 20px;
`,Er=te.form`
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
`,Cr=()=>{const[n,e]=p.useState(!1),[i,o]=St(),t=p.useMemo(()=>Object.fromEntries([...i]),[i]),{search:a,category:u,recommended:s}=t;p.useEffect(()=>{},[a,u,s,o]);const r=Ot({initialValues:{search:a??"",category:u??"",recommended:s??"All"},onSubmit:c=>{const{search:d}=c;d&&o(h=>{const v=new URLSearchParams(h);return v.set("q",d),v})}}),l=c=>{e(!0),r.handleChange(c)};return g.jsxs(Er,{onSubmit:r.handleSubmit,children:[g.jsxs("div",{className:"input-search-block",children:[g.jsx("input",{id:"search",name:"search",type:"text",onChange:l,value:r.values.search,placeholder:"Search"}),g.jsxs("div",{className:"svgs-search-block",children:[n&&g.jsx("button",{type:"button",onClick:()=>{e(!1),o(c=>{const d=new URLSearchParams(c);return d.delete("search"),d}),r.values.search=""},children:g.jsx(xr,{})}),g.jsx("button",{type:"submit",children:g.jsx(br,{})})]})]}),g.jsxs("div",{className:"selects-block",children:[g.jsx(fr,{name:"category",dataFunc:c=>{r.setFieldValue("category",c.value),o(d=>{const h=new URLSearchParams(d);return h.set("category",c.value),h})},currentValue:r.values.category}),g.jsx(vr,{name:"recommended",currentValue:r.values.recommended,dataFunc:c=>{r.setFieldValue("recommended",c.value),o(d=>{const h=new URLSearchParams(d);return h.set("recommended",c.value),h})}})]}),g.jsx("p",{className:"filter-1440",children:"Filter"})]})},wr=te.ul`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
margin-top: 40px;

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
`,yr=te.div`
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
`,Sr=()=>g.jsxs(yr,{children:[g.jsxs("p",{className:"above-text",children:[g.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),g.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),rn=n=>p.createElement("svg",{width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M7.5 14 14 7.5m0 0L7.5 1M14 7.5H1",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),Fr=n=>p.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),p.createElement("path",{d:"M18.823 8.725a.593.593 0 0 0-.833-.074l-1.641 1.378-.755-1.87a.58.58 0 0 0-.114-.18 1.606 1.606 0 0 0-.791-.809 1.628 1.628 0 0 0-.491-.13c-.037-.02-.07-.045-.111-.058l-2.888-.805a.594.594 0 0 0-.458.063.578.578 0 0 0-.36.336L9.294 9.372a.594.594 0 0 0 .338.767.593.593 0 0 0 .766-.34l.918-2.36 1.315.365c-.032.052-.066.101-.092.156l-1.687 3.655c-.024.054-.037.108-.054.164l-2.05 3.435-3.428 1.147a.876.876 0 0 0 1.04 1.41l3.51-1.209a.841.841 0 0 0 .243-.29c.045-.047.095-.084.129-.142l1.221-2.048 2.169 1.848-2.32 2.614a.875.875 0 1 0 1.31 1.16l2.896-3.261c.09-.101.144-.217.18-.338.022-.066.022-.135.027-.203 0-.035.013-.066.01-.098a.858.858 0 0 0-.3-.637l-1.995-1.701c.143-.137.266-.3.354-.492l1.293-2.8.414 1.104c.017.098.05.194.12.274a.57.57 0 0 0 .226.16l.03.007a.564.564 0 0 0 .367.018h.003c.018-.005.036-.002.054-.01a.585.585 0 0 0 .233-.17L18.89 9.56c.25-.21.145-.583-.066-.834ZM15.846 7.301a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z",fill:"#EFEDE8"})),Xe=B.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,Or=B.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${E.animation};
  @media screen and (min-width: 768px) {
    ${Xe}:hover & {
      color: ${E.successColor};
      transform: scale(1.25);
    }
  }
`,Dr=cn`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,Ir=B(rn)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    ${Xe}:hover & {
      animation: ${Dr} 1000ms linear infinite;
      > path {
        stroke: ${E.successColor};
      }
    }
  }
`,Ar=B(Fr)`
  width: 24px;
  height: 24px;
`,an=B.li`
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
`,Pr=B.span`
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
`,Mr="1",Vr=({data:n,handleOpenModal:e})=>{const{calories:i,category:o,title:t,weight:a,groupBloodNotAllowed:u,_id:s}=n,r=u[Mr];return g.jsxs(an,{children:[g.jsx("span",{className:"diet-span",children:"diet"}),g.jsxs("div",{className:"recommended-addbtn-div",children:[g.jsx(Pr,{className:"recommended-span",$color:r,children:r?"Recommended":"Not recommended"}),g.jsxs(Xe,{onClick:()=>e({calories:i,title:t,weight:a,_id:s}),type:"button",className:"add-btn",children:[g.jsx(Or,{className:"add-btn-span",children:"Add"}),g.jsx(Ir,{})]})]}),g.jsxs("div",{className:"product-info-div",children:[g.jsxs("div",{className:"title-svg-div",children:[g.jsx(Ar,{}),g.jsxs("p",{className:"product-info-div-title",children:[" ",t]})]}),g.jsxs("div",{className:"detailed-info-div",children:[g.jsxs("p",{className:"detailed-name",children:["Calories: ",g.jsx("span",{className:"detailed-data",children:i})]}),g.jsxs("p",{className:"detailed-name",children:["Category: ",g.jsx("span",{className:"detailed-data",children:o})]}),g.jsxs("p",{className:"detailed-name",children:["Weight: ",g.jsx("span",{className:"detailed-data",children:a})]})]})]})]})},Te=B.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,kr=B(qe)`
  transition:
    stroke ${E.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  > path {
    stroke: white;
  }
  @media screen and (min-width: 768px) {
    ${Te}:hover & {
      > path {
        stroke: ${E.orangeColor};
      }
    }
    ${Te}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,Rr=B.div`
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
`,Lr=B.div`
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
`,$r=B.form`
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
  .weight-input {
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
`;function Tr(){const n=new Date,e=n.getDate(),i=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear();return`${e}-${i}-${o}`}const Br=({data:n,closeModal:e})=>{const{title:i,weight:o,calories:t,_id:a}=n||{},u=je(),s=Ot({initialValues:{title:"",weight:"",calories:""},onSubmit:l=>{const{weight:c,calories:d}=l,h={date:Tr(),product:a,amount:c,calories:d};console.log(h),u(dn(h))}});p.useEffect(()=>{n&&s.setValues({title:i,weight:o,calories:t})},[i,o,t]);const r=l=>{if(!(isNaN(l.target.value)&&l.target.value!=="")&&(l.target.value===""&&s.setValues({calories:""}),s.handleChange(l),l.target.value>0)){const c=parseFloat(Number(l.target.value)),d=c*t/100;s.setValues({...s.values,weight:c,calories:d})}};return g.jsxs($r,{onSubmit:s.handleSubmit,children:[g.jsxs("div",{className:"inputs-block",children:[g.jsx("input",{id:"title",name:"title",type:"text",value:s.values.title,disabled:!0,className:"title-input"}),g.jsxs("div",{className:"weight-input-block",children:[g.jsx("input",{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:r,value:s.values.weight,className:"weight-input"}),g.jsx("span",{className:"grams-span",children:"grams"})]})]}),g.jsxs("div",{className:"calories-block",children:[g.jsx("span",{className:"calories-span",children:"Calories: "}),g.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:s.values.calories,className:"calories-input"})]}),g.jsxs("div",{className:"button-block",children:[g.jsx("button",{className:"add-button",type:"submit",children:"Add to diary"}),g.jsx("button",{onClick:e,className:"cancel-button",type:"button",children:"Cancel"})]})]})},jr=document.querySelector("#add-product-modal"),Nr=({data:n,closeModal:e,showModal:i})=>{p.useEffect(()=>{if(!i)return;const t=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e,i]);const o=t=>{t.target===t.currentTarget&&e()};return yt.createPortal(g.jsx(Rr,{onClick:o,className:i?"":"hide-hidden",children:g.jsxs(Lr,{className:"modal",children:[g.jsx(Te,{onClick:e,type:"button",children:g.jsx(kr,{})}),g.jsx(Br,{data:n,closeModal:e})]})}),jr)};var Be=new Map,me=new WeakMap,wt=0,Hr=void 0;function zr(n){return n?(me.has(n)||(wt+=1,me.set(n,wt.toString())),me.get(n)):"0"}function _r(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?zr(n.root):n[e]}`).toString()}function Ur(n){let e=_r(n),i=Be.get(e);if(!i){const o=new Map;let t;const a=new IntersectionObserver(u=>{u.forEach(s=>{var r;const l=s.isIntersecting&&t.some(c=>s.intersectionRatio>=c);n.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=l),(r=o.get(s.target))==null||r.forEach(c=>{c(l,s)})})},n);t=a.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),i={id:e,observer:a,elements:o},Be.set(e,i)}return i}function Wr(n,e,i={},o=Hr){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const r=n.getBoundingClientRect();return e(o,{isIntersecting:o,target:n,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:t,observer:a,elements:u}=Ur(i);let s=u.get(n)||[];return u.has(n)||u.set(n,s),s.push(e),a.observe(n),function(){s.splice(s.indexOf(e),1),s.length===0&&(u.delete(n),a.unobserve(n)),u.size===0&&(a.disconnect(),Be.delete(t))}}function Gr({threshold:n,delay:e,trackVisibility:i,rootMargin:o,root:t,triggerOnce:a,skip:u,initialInView:s,fallbackInView:r,onChange:l}={}){var c;const[d,h]=p.useState(null),v=p.useRef(),[x,b]=p.useState({inView:!!s,entry:void 0});v.current=l,p.useEffect(()=>{if(u||!d)return;let F;return F=Wr(d,(D,I)=>{b({inView:D,entry:I}),v.current&&v.current(D,I),I.isIntersecting&&a&&F&&(F(),F=void 0)},{root:t,rootMargin:o,threshold:n,trackVisibility:i,delay:e},r),()=>{F&&F()}},[Array.isArray(n)?n.toString():n,d,t,o,a,u,i,r,e]);const f=(c=x.entry)==null?void 0:c.target,m=p.useRef();!d&&f&&!a&&!u&&m.current!==f&&(m.current=f,b({inView:!!s,entry:void 0}));const C=[h,x.inView,x.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}const Yr="/power-pulse-fs/assets/bgFood-46dd5bc9.png",qr="/power-pulse-fs/assets/bgFood2x-515a5477.png",ue=B(pn)`
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
`,Xr=B(rn)`
width:16px;
height: 16px;
> path {
        stroke: ${E.greyTextColor};
      }
      transition: all ${E.animation};
        @media screen and (min-width: 768px) {
    ${ue}:hover &, ${ue}:focus & {
      > path {
        stroke: ${E.orangeColor};
      }
    }
    ${ue}:hover &, ${ue}:focus & {
      transform: translateX(10px);
    }
  }
`,Kr=B(qe)`
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
`,Zr=B.div`
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

  
`,Jr=B.div`
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
   background-image: url(${Yr});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${qr});
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
`,Qr=()=>{const{isSuccessPopUpShown:n}=Ft(o=>o.products),e=je();p.useEffect(()=>{if(!n)return;const o=t=>{t.code==="Escape"&&e(ce(!1))};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n,e]);const i=o=>{o.target===o.currentTarget&&e(ce(!1))};return n&&g.jsx(Zr,{onClick:i,children:g.jsxs(Jr,{children:[g.jsx(Kr,{onClick:()=>e(ce(!1))}),g.jsx("p",{className:"title",children:"Well done"}),g.jsxs("p",{className:"calories",children:["Calories: ",g.jsx("span",{className:"calories-span",children:"96"})]}),g.jsx("button",{onClick:()=>e(ce(!1)),className:"button",type:"button",children:"Next product"}),g.jsxs(ue,{to:"/diary",children:["To the diary ",g.jsx(Xr,{})]})]})})},ne={bloodType:"1"},ea=()=>{const[n]=St(),[e,i]=p.useState(!1),[o,t]=p.useState(null),{products:a,isLoading:u}=Ft(C=>C.products),[s,r]=p.useState(1),{ref:l,inView:c}=Gr(),d=je();p.useEffect(()=>{e?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},[e]);const h=C=>{t(C),i(!0)},v=()=>{i(!1)},x=p.useMemo(()=>Object.fromEntries([...n]),[n]),{search:b,category:f,recommended:m}=x;return b?ne.q=b:delete ne.q,f&&(ne.cat=f.toLowerCase()),m&&m!=="All"?ne.rec=m:delete ne.rec,p.useEffect(()=>{u||c&&(r(s+1),ne.page=s)},[c,s,u,b,f,m]),p.useEffect(()=>{d(fn(ne))},[f,m,b,d,s]),a.length>0?g.jsxs(g.Fragment,{children:[g.jsxs(wr,{children:[a.map(C=>u?g.jsx(an,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:g.jsx("div",{className:"loader"})},C._id):g.jsx(Vr,{handleOpenModal:h,data:C},C._id)),g.jsx("div",{ref:l})]}),g.jsx(Nr,{showModal:e,closeModal:v,data:o}),g.jsx(Qr,{})]}):g.jsx(Sr,{})},ta="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",na="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",ia=te.section`

@media screen and (min-width: 1440px) {
  height: 90vh;
 background: url(${ta});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${na});
    }
}
`,oa=te.div`
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
`,ra=te.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,ca=()=>g.jsx(ia,{children:g.jsxs(oa,{children:[g.jsxs("div",{className:"title-form-block",children:[g.jsx(ra,{children:"Products"}),g.jsx(Cr,{})]}),g.jsx(ea,{})]})});export{ca as default};
