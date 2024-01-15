import{a as p,b as St,j as g,c as Ft,u as Fe,d as ve,s as B,e as dn,f as pn,N as fn,h as Ot,i as ce,k as hn}from"./index-0eb5bb2f.js";import{u as Dt}from"./formik.esm-7d18aff8.js";import{h as mn,E as vn,c as gn,s as bn,_ as S,n as ne}from"./emotion-styled.browser.esm-a0dcc0b5.js";import{s as E}from"./styleGuide-7c616dce.js";var w=function(e,i){var o=arguments;if(i==null||!mn.call(i,"css"))return p.createElement.apply(void 0,o);var t=o.length,a=new Array(t);a[0]=vn,a[1]=gn(e,i);for(var u=2;u<t;u++)a[u]=o[u];return p.createElement.apply(null,a)};function He(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return bn(e)}var xn=function(){var e=He.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function ie(n){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(n)}function En(n,e){if(ie(n)!=="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var o=i.call(n,e||"default");if(ie(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function It(n){var e=En(n,"string");return ie(e)==="symbol"?e:String(e)}function ae(n,e,i){return e=It(e),e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function et(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,o)}return i}function y(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?et(Object(i),!0).forEach(function(o){ae(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):et(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function Cn(n){if(Array.isArray(n))return n}function wn(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,t,a,u,l=[],r=!0,s=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==e);r=!0);}catch(c){s=!0,t=c}finally{try{if(!r&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw t}}return l}}function Re(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=n[i];return o}function At(n,e){if(n){if(typeof n=="string")return Re(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Re(n,e)}}function yn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,e){return Cn(n)||wn(n,e)||At(n,e)||yn()}function Sn(n,e){if(n==null)return{};var i={},o=Object.keys(n),t,a;for(a=0;a<o.length;a++)t=o[a],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}function K(n,e){if(n==null)return{};var i=Sn(n,e),o,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var Fn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function On(n){var e=n.defaultInputValue,i=e===void 0?"":e,o=n.defaultMenuIsOpen,t=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,h=n.onMenuOpen,m=n.value,x=K(n,Fn),b=p.useState(l!==void 0?l:i),f=X(b,2),v=f[0],C=f[1],F=p.useState(r!==void 0?r:t),D=X(F,2),I=D[0],A=D[1],P=p.useState(m!==void 0?m:u),O=X(P,2),M=O[0],$=O[1],j=p.useCallback(function(H,Z){typeof s=="function"&&s(H,Z),$(H)},[s]),T=p.useCallback(function(H,Z){var J;typeof c=="function"&&(J=c(H,Z)),C(J!==void 0?J:H)},[c]),W=p.useCallback(function(){typeof h=="function"&&h(),A(!0)},[h]),G=p.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),L=l!==void 0?l:v,k=r!==void 0?r:I,U=m!==void 0?m:M;return y(y({},x),{},{inputValue:L,menuIsOpen:k,onChange:j,onInputChange:T,onMenuClose:G,onMenuOpen:W,value:U})}function Dn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function tt(n,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,It(o.key),o)}}function In(n,e,i){return e&&tt(n.prototype,e),i&&tt(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function Le(n,e){return Le=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},Le(n,e)}function An(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Le(n,e)}function be(n){return be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},be(n)}function Pn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Mn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Vn(n,e){if(e&&(ie(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mn(n)}function kn(n){var e=Pn();return function(){var o=be(n),t;if(e){var a=be(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return Vn(this,t)}}function Rn(n){if(Array.isArray(n))return Re(n)}function Ln(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ze(n){return Rn(n)||Ln(n)||At(n)||$n()}function Tn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Bn=Math.min,jn=Math.max,xe=Math.round,de=Math.floor,Ee=n=>({x:n,y:n});function Nn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Pt(n){return Vt(n)?(n.nodeName||"").toLowerCase():"#document"}function _(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Mt(n){var e;return(e=(Vt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Vt(n){return n instanceof Node||n instanceof _(n).Node}function $e(n){return n instanceof Element||n instanceof _(n).Element}function _e(n){return n instanceof HTMLElement||n instanceof _(n).HTMLElement}function nt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof _(n).ShadowRoot}function kt(n){const{overflow:e,overflowX:i,overflowY:o,display:t}=Ue(n);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(t)}function Hn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function zn(n){return["html","body","#document"].includes(Pt(n))}function Ue(n){return _(n).getComputedStyle(n)}function _n(n){if(Pt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||nt(n)&&n.host||Mt(n);return nt(e)?e.host:e}function Rt(n){const e=_n(n);return zn(e)?n.ownerDocument?n.ownerDocument.body:n.body:_e(e)&&kt(e)?e:Rt(e)}function Ce(n,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=Rt(n),a=t===((o=n.ownerDocument)==null?void 0:o.body),u=_(t);return a?e.concat(u,u.visualViewport||[],kt(t)?t:[],u.frameElement&&i?Ce(u.frameElement):[]):e.concat(t,Ce(t,[],i))}function Un(n){const e=Ue(n);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const t=_e(n),a=t?n.offsetWidth:i,u=t?n.offsetHeight:o,l=xe(i)!==a||xe(o)!==u;return l&&(i=a,o=u),{width:i,height:o,$:l}}function We(n){return $e(n)?n:n.contextElement}function De(n){const e=We(n);if(!_e(e))return Ee(1);const i=e.getBoundingClientRect(),{width:o,height:t,$:a}=Un(e);let u=(a?xe(i.width):i.width)/o,l=(a?xe(i.height):i.height)/t;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const Wn=Ee(0);function Gn(n){const e=_(n);return!Hn()||!e.visualViewport?Wn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Yn(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==_(n)?!1:e}function it(n,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=We(n);let u=Ee(1);e&&(o?$e(o)&&(u=De(o)):u=De(n));const l=Yn(a,i,o)?Gn(a):Ee(0);let r=(t.left+l.x)/u.x,s=(t.top+l.y)/u.y,c=t.width/u.x,d=t.height/u.y;if(a){const h=_(a),m=o&&$e(o)?_(o):o;let x=h.frameElement;for(;x&&o&&m!==h;){const b=De(x),f=x.getBoundingClientRect(),v=Ue(x),C=f.left+(x.clientLeft+parseFloat(v.paddingLeft))*b.x,F=f.top+(x.clientTop+parseFloat(v.paddingTop))*b.y;r*=b.x,s*=b.y,c*=b.x,d*=b.y,r+=C,s+=F,x=_(x).frameElement}}return Nn({width:c,height:d,x:r,y:s})}function qn(n,e){let i=null,o;const t=Mt(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function u(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:s,top:c,width:d,height:h}=n.getBoundingClientRect();if(l||e(),!d||!h)return;const m=de(c),x=de(t.clientWidth-(s+d)),b=de(t.clientHeight-(c+h)),f=de(s),C={rootMargin:-m+"px "+-x+"px "+-b+"px "+-f+"px",threshold:jn(0,Bn(1,r))||1};let F=!0;function D(I){const A=I[0].intersectionRatio;if(A!==r){if(!F)return u();A?u(!1,A):o=setTimeout(()=>{u(!1,1e-7)},100)}F=!1}try{i=new IntersectionObserver(D,{...C,root:t.ownerDocument})}catch{i=new IntersectionObserver(D,C)}i.observe(n)}return u(!0),a}function Xn(n,e,i,o){o===void 0&&(o={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,s=We(n),c=t||a?[...s?Ce(s):[],...Ce(e)]:[];c.forEach(v=>{t&&v.addEventListener("scroll",i,{passive:!0}),a&&v.addEventListener("resize",i)});const d=s&&l?qn(s,i):null;let h=-1,m=null;u&&(m=new ResizeObserver(v=>{let[C]=v;C&&C.target===s&&m&&(m.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{m&&m.observe(e)})),i()}),s&&!r&&m.observe(s),m.observe(e));let x,b=r?it(n):null;r&&f();function f(){const v=it(n);b&&(v.x!==b.x||v.y!==b.y||v.width!==b.width||v.height!==b.height)&&i(),b=v,x=requestAnimationFrame(f)}return i(),()=>{c.forEach(v=>{t&&v.removeEventListener("scroll",i),a&&v.removeEventListener("resize",i)}),d&&d(),m&&m.disconnect(),m=null,r&&cancelAnimationFrame(x)}}var Te=p.useLayoutEffect,Kn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],we=function(){};function Zn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Jn(n,e){for(var i=arguments.length,o=new Array(i>2?i-2:0),t=2;t<i;t++)o[t-2]=arguments[t];var a=[].concat(o);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(Zn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var ot=function(e){return ui(e)?e.filter(Boolean):ie(e)==="object"&&e!==null?[e]:[]},Lt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=K(e,Kn);return y({},i)},V=function(e,i,o){var t=e.cx,a=e.getStyles,u=e.getClassNames,l=e.className;return{css:a(i,e),className:t(o??{},u(i,e),l)}};function Oe(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Qn(n){return Oe(n)?window.innerHeight:n.clientHeight}function $t(n){return Oe(n)?window.pageYOffset:n.scrollTop}function ye(n,e){if(Oe(n)){window.scrollTo(0,e);return}n.scrollTop=e}function ei(n){var e=getComputedStyle(n),i=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function ti(n,e,i,o){return i*((n=n/o-1)*n*n+1)+e}function pe(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:we,t=$t(n),a=e-t,u=10,l=0;function r(){l+=u;var s=ti(l,t,a,i);ye(n,s),l<i?window.requestAnimationFrame(r):o(n)}r()}function rt(n,e){var i=n.getBoundingClientRect(),o=e.getBoundingClientRect(),t=e.offsetHeight/3;o.bottom+t>i.bottom?ye(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):o.top-t<i.top&&ye(n,Math.max(e.offsetTop-t,0))}function ni(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function at(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function ii(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Tt=!1,oi={get passive(){return Tt=!0}},fe=typeof window<"u"?window:{};fe.addEventListener&&fe.removeEventListener&&(fe.addEventListener("p",we,oi),fe.removeEventListener("p",we,!1));var ri=Tt;function ai(n){return n!=null}function ui(n){return Array.isArray(n)}function he(n,e,i){return n?e:i}var si=function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),t=1;t<i;t++)o[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var l=X(u,1),r=l[0];return!o.includes(r)});return a.reduce(function(u,l){var r=X(l,2),s=r[0],c=r[1];return u[s]=c,u},{})},li=["children","innerProps"],ci=["children","innerProps"];function di(n){var e=n.maxHeight,i=n.menuEl,o=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,r=ei(i),s={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return s;var c=r.getBoundingClientRect(),d=c.height,h=i.getBoundingClientRect(),m=h.bottom,x=h.height,b=h.top,f=i.offsetParent.getBoundingClientRect(),v=f.top,C=u?window.innerHeight:Qn(r),F=$t(r),D=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=v-I,P=C-b,O=A+F,M=d-F-b,$=m-C+F+D,j=F+b-I,T=160;switch(t){case"auto":case"bottom":if(P>=x)return{placement:"bottom",maxHeight:e};if(M>=x&&!u)return a&&pe(r,$,T),{placement:"bottom",maxHeight:e};if(!u&&M>=o||u&&P>=o){a&&pe(r,$,T);var W=u?P-D:M-D;return{placement:"bottom",maxHeight:W}}if(t==="auto"||u){var G=e,L=u?A:O;return L>=o&&(G=Math.min(L-D-l,e)),{placement:"top",maxHeight:G}}if(t==="bottom")return a&&ye(r,$),{placement:"bottom",maxHeight:e};break;case"top":if(A>=x)return{placement:"top",maxHeight:e};if(O>=x&&!u)return a&&pe(r,j,T),{placement:"top",maxHeight:e};if(!u&&O>=o||u&&A>=o){var k=e;return(!u&&O>=o||u&&A>=o)&&(k=u?A-I:O-I),a&&pe(r,j,T),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return s}function pi(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Bt=function(e){return e==="auto"?"bottom":e},fi=function(e,i){var o,t=e.placement,a=e.theme,u=a.borderRadius,l=a.spacing,r=a.colors;return y((o={label:"menu"},ae(o,pi(t),"100%"),ae(o,"position","absolute"),ae(o,"width","100%"),ae(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},jt=p.createContext(null),hi=function(e){var i=e.children,o=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,r=e.theme,s=p.useContext(jt)||{},c=s.setPortalPlacement,d=p.useRef(null),h=p.useState(t),m=X(h,2),x=m[0],b=m[1],f=p.useState(null),v=X(f,2),C=v[0],F=v[1],D=r.spacing.controlHeight;return Te(function(){var I=d.current;if(I){var A=u==="fixed",P=l&&!A,O=di({maxHeight:t,menuEl:I,minHeight:o,placement:a,shouldScroll:P,isFixedPosition:A,controlHeight:D});b(O.maxHeight),F(O.placement),c==null||c(O.placement)}},[t,a,u,l,o,c,D]),i({ref:d,placerProps:y(y({},e),{},{placement:C||Bt(a),maxHeight:x})})},mi=function(e){var i=e.children,o=e.innerRef,t=e.innerProps;return w("div",S({},V(e,"menu",{menu:!0}),{ref:o},t),i)},vi=mi,gi=function(e,i){var o=e.maxHeight,t=e.theme.spacing.baseUnit;return y({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},bi=function(e){var i=e.children,o=e.innerProps,t=e.innerRef,a=e.isMulti;return w("div",S({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},o),i)},Nt=function(e,i){var o=e.theme,t=o.spacing.baseUnit,a=o.colors;return y({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},xi=Nt,Ei=Nt,Ci=function(e){var i=e.children,o=i===void 0?"No options":i,t=e.innerProps,a=K(e,li);return w("div",S({},V(y(y({},a),{},{children:o,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),o)},wi=function(e){var i=e.children,o=i===void 0?"Loading...":i,t=e.innerProps,a=K(e,ci);return w("div",S({},V(y(y({},a),{},{children:o,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),o)},yi=function(e){var i=e.rect,o=e.offset,t=e.position;return{left:i.left,position:t,top:o,width:i.width,zIndex:1}},Si=function(e){var i=e.appendTo,o=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,l=e.menuPosition,r=p.useRef(null),s=p.useRef(null),c=p.useState(Bt(u)),d=X(c,2),h=d[0],m=d[1],x=p.useMemo(function(){return{setPortalPlacement:m}},[]),b=p.useState(null),f=X(b,2),v=f[0],C=f[1],F=p.useCallback(function(){if(t){var P=ni(t),O=l==="fixed"?0:window.pageYOffset,M=P[h]+O;(M!==(v==null?void 0:v.offset)||P.left!==(v==null?void 0:v.rect.left)||P.width!==(v==null?void 0:v.rect.width))&&C({offset:M,rect:P})}},[t,l,h,v==null?void 0:v.offset,v==null?void 0:v.rect.left,v==null?void 0:v.rect.width]);Te(function(){F()},[F]);var D=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),t&&r.current&&(s.current=Xn(t,r.current,F,{elementResize:"ResizeObserver"in window}))},[t,F]);Te(function(){D()},[D]);var I=p.useCallback(function(P){r.current=P,D()},[D]);if(!i&&l!=="fixed"||!v)return null;var A=w("div",S({ref:I},V(y(y({},e),{},{offset:v.offset,position:l,rect:v.rect}),"menuPortal",{"menu-portal":!0}),a),o);return w(jt.Provider,{value:x},i?St.createPortal(A,i):A)},Fi=function(e){var i=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},Oi=function(e){var i=e.children,o=e.innerProps,t=e.isDisabled,a=e.isRtl;return w("div",S({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),o),i)},Di=function(e,i){var o=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},Ii=function(e){var i=e.children,o=e.innerProps,t=e.isMulti,a=e.hasValue;return w("div",S({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),o),i)},Ai=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Pi=function(e){var i=e.children,o=e.innerProps;return w("div",S({},V(e,"indicatorsContainer",{indicators:!0}),o),i)},ut,Mi=["size"],Vi=["innerProps","isRtl","size"],ki={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Ht=function(e){var i=e.size,o=K(e,Mi);return w("svg",S({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ki},o))},Ge=function(e){return w(Ht,S({size:20},e),w("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},zt=function(e){return w(Ht,S({size:20},e),w("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},_t=function(e,i){var o=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},Ri=_t,Li=function(e){var i=e.children,o=e.innerProps;return w("div",S({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||w(zt,null))},$i=_t,Ti=function(e){var i=e.children,o=e.innerProps;return w("div",S({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||w(Ge,null))},Bi=function(e,i){var o=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},ji=function(e){var i=e.innerProps;return w("span",S({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},Ni=xn(ut||(ut=Tn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Hi=function(e,i){var o=e.isFocused,t=e.size,a=e.theme,u=a.colors,l=a.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?u.neutral60:u.neutral20,padding:l*2})},Ie=function(e){var i=e.delay,o=e.offset;return w("span",{css:He({animation:"".concat(Ni," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},zi=function(e){var i=e.innerProps,o=e.isRtl,t=e.size,a=t===void 0?4:t,u=K(e,Vi);return w("div",S({},V(y(y({},u),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),w(Ie,{delay:0,offset:o}),w(Ie,{delay:160,offset:!0}),w(Ie,{delay:320,offset:!o}))},_i=function(e,i){var o=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,l=a.borderRadius,r=a.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:t?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},Ui=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return w("div",S({ref:a},V(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":t,"control--menu-is-open":l}),u,{"aria-disabled":o||void 0}),i)},Wi=Ui,Gi=["data"],Yi=function(e,i){var o=e.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},qi=function(e){var i=e.children,o=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,l=e.headingProps,r=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return w("div",S({},V(e,"group",{group:!0}),r),w(u,S({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:o}),s),w("div",null,i))},Xi=function(e,i){var o=e.theme,t=o.colors,a=o.spacing;return y({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Ki=function(e){var i=Lt(e);i.data;var o=K(i,Gi);return w("div",S({},V(e,"groupHeading",{"group-heading":!0}),o))},Zi=qi,Ji=["innerRef","isDisabled","isHidden","inputClassName"],Qi=function(e,i){var o=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,l=a.colors;return y(y({visibility:o?"hidden":"visible",transform:t?"translateZ(0)":""},eo),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Ut={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},eo={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ut)},to=function(e){return y({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Ut)},no=function(e){var i=e.cx,o=e.value,t=Lt(e),a=t.innerRef,u=t.isDisabled,l=t.isHidden,r=t.inputClassName,s=K(t,Ji);return w("div",S({},V(e,"input",{"input-container":!0}),{"data-value":o||""}),w("input",S({className:i({input:!0},r),ref:a,style:to(l),disabled:u},s)))},io=no,oo=function(e,i){var o=e.theme,t=o.spacing,a=o.borderRadius,u=o.colors;return y({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},ro=function(e,i){var o=e.theme,t=o.borderRadius,a=o.colors,u=e.cropWithEllipsis;return y({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},ao=function(e,i){var o=e.theme,t=o.spacing,a=o.borderRadius,u=o.colors,l=e.isFocused;return y({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Wt=function(e){var i=e.children,o=e.innerProps;return w("div",o,i)},uo=Wt,so=Wt;function lo(n){var e=n.children,i=n.innerProps;return w("div",S({role:"button"},i),e||w(Ge,{size:14}))}var co=function(e){var i=e.children,o=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,l=e.removeProps,r=e.selectProps,s=o.Container,c=o.Label,d=o.Remove;return w(s,{data:t,innerProps:y(y({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:r},w(c,{data:t,innerProps:y({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),w(d,{data:t,innerProps:y(y({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},po=co,fo=function(e,i){var o=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,l=u.spacing,r=u.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:t?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},ho=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,l=e.innerProps;return w("div",S({},V(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":o},l),i)},mo=ho,vo=function(e,i){var o=e.theme,t=o.spacing,a=o.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},go=function(e){var i=e.children,o=e.innerProps;return w("div",S({},V(e,"placeholder",{placeholder:!0}),o),i)},bo=go,xo=function(e,i){var o=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Eo=function(e){var i=e.children,o=e.isDisabled,t=e.innerProps;return w("div",S({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),t),i)},Co=Eo,Ye={ClearIndicator:Ti,Control:Wi,DropdownIndicator:Li,DownChevron:zt,CrossIcon:Ge,Group:Zi,GroupHeading:Ki,IndicatorsContainer:Pi,IndicatorSeparator:ji,Input:io,LoadingIndicator:zi,Menu:vi,MenuList:bi,MenuPortal:Si,LoadingMessage:wi,NoOptionsMessage:Ci,MultiValue:po,MultiValueContainer:uo,MultiValueLabel:so,MultiValueRemove:lo,Option:mo,Placeholder:bo,SelectContainer:Oi,SingleValue:Co,ValueContainer:Ii},wo=function(e){return y(y({},Ye),e.components)},st=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function yo(n,e){return!!(n===e||st(n)&&st(e))}function So(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!yo(n[i],e[i]))return!1;return!0}function Fo(n,e){e===void 0&&(e=So);var i=null;function o(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var u=n.apply(this,t);return i={lastResult:u,lastArgs:t,lastThis:this},u}return o.clear=function(){i=null},o}var Oo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Do=function(e){return w("span",S({css:Oo},e))},lt=Do,Io={guidance:function(e){var i=e.isSearchable,o=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,o=e.label,t=o===void 0?"":o,a=e.labels,u=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,o=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,l=e.selectValue,r=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(b,f){return b&&b.length?"".concat(b.indexOf(f)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var h=r?" disabled":"",m="".concat(s?" selected":"").concat(h);return"".concat(u).concat(m,", ").concat(d(t,o),".")}return""},onFilter:function(e){var i=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},Ao=function(e){var i=e.ariaSelection,o=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,l=e.selectValue,r=e.selectProps,s=e.id,c=e.isAppleDevice,d=r.ariaLiveMessages,h=r.getOptionLabel,m=r.inputValue,x=r.isMulti,b=r.isOptionDisabled,f=r.isSearchable,v=r.menuIsOpen,C=r.options,F=r.screenReaderStatus,D=r.tabSelectsValue,I=r.isLoading,A=r["aria-label"],P=r["aria-live"],O=p.useMemo(function(){return y(y({},Io),d||{})},[d]),M=p.useMemo(function(){var L="";if(i&&O.onChange){var k=i.option,U=i.options,H=i.removedValue,Z=i.removedValues,J=i.value,se=function(q){return Array.isArray(q)?null:q},R=H||k||se(J),N=R?h(R):"",Y=U||Z||void 0,Q=Y?Y.map(h):[],z=y({isDisabled:R&&b(R,l),label:N,labels:Q},i);L=O.onChange(z)}return L},[i,O,b,l,h]),$=p.useMemo(function(){var L="",k=o||t,U=!!(o&&l&&l.includes(o));if(k&&O.onFocus){var H={focused:k,label:h(k),isDisabled:b(k,l),isSelected:U,options:a,context:k===o?"menu":"value",selectValue:l,isAppleDevice:c};L=O.onFocus(H)}return L},[o,t,h,b,O,a,l,c]),j=p.useMemo(function(){var L="";if(v&&C.length&&!I&&O.onFilter){var k=F({count:a.length});L=O.onFilter({inputValue:m,resultsMessage:k})}return L},[a,m,v,O,C,F,I]),T=(i==null?void 0:i.action)==="initial-input-focus",W=p.useMemo(function(){var L="";if(O.guidance){var k=t?"value":v?"menu":"input";L=O.guidance({"aria-label":A,context:k,isDisabled:o&&b(o,l),isMulti:x,isSearchable:f,tabSelectsValue:D,isInitialFocus:T})}return L},[A,o,t,x,b,f,v,O,l,D,T]),G=w(p.Fragment,null,w("span",{id:"aria-selection"},M),w("span",{id:"aria-focused"},$),w("span",{id:"aria-results"},j),w("span",{id:"aria-guidance"},W));return w(p.Fragment,null,w(lt,{id:s},T&&G),w(lt,{"aria-live":P,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!T&&G))},Po=Ao,Be=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Mo=new RegExp("["+Be.map(function(n){return n.letters}).join("")+"]","g"),Gt={};for(var Ae=0;Ae<Be.length;Ae++)for(var Pe=Be[Ae],Me=0;Me<Pe.letters.length;Me++)Gt[Pe.letters[Me]]=Pe.base;var Yt=function(e){return e.replace(Mo,function(i){return Gt[i]})},Vo=Fo(Yt),ct=function(e){return e.replace(/^\s+|\s+$/g,"")},ko=function(e){return"".concat(e.label," ").concat(e.value)},Ro=function(e){return function(i,o){if(i.data.__isNew__)return!0;var t=y({ignoreCase:!0,ignoreAccents:!0,stringify:ko,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,l=t.stringify,r=t.trim,s=t.matchFrom,c=r?ct(o):o,d=r?ct(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Vo(c),d=Yt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Lo=["innerRef"];function $o(n){var e=n.innerRef,i=K(n,Lo),o=si(i,"onExited","in","enter","exit","appear");return w("input",S({ref:e},o,{css:He({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var To=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Bo(n){var e=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),r=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(f,v){if(s.current!==null){var C=s.current,F=C.scrollTop,D=C.scrollHeight,I=C.clientHeight,A=s.current,P=v>0,O=D-I-F,M=!1;O>v&&u.current&&(o&&o(f),u.current=!1),P&&l.current&&(a&&a(f),l.current=!1),P&&v>O?(i&&!u.current&&i(f),A.scrollTop=D,M=!0,u.current=!0):!P&&-v>F&&(t&&!l.current&&t(f),A.scrollTop=0,M=!0,l.current=!0),M&&To(f)}},[i,o,t,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),h=p.useCallback(function(f){r.current=f.changedTouches[0].clientY},[]),m=p.useCallback(function(f){var v=r.current-f.changedTouches[0].clientY;c(f,v)},[c]),x=p.useCallback(function(f){if(f){var v=ri?{passive:!1}:!1;f.addEventListener("wheel",d,v),f.addEventListener("touchstart",h,v),f.addEventListener("touchmove",m,v)}},[m,h,d]),b=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",h,!1),f.removeEventListener("touchmove",m,!1))},[m,h,d]);return p.useEffect(function(){if(e){var f=s.current;return x(f),function(){b(f)}}},[e,x,b]),function(f){s.current=f}}var dt=["boxSizing","height","overflow","paddingRight","position"],pt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function ft(n){n.preventDefault()}function ht(n){n.stopPropagation()}function mt(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function vt(){return"ontouchstart"in window||navigator.maxTouchPoints}var gt=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,oe={capture:!1,passive:!1};function jo(n){var e=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,t=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(r){if(gt){var s=document.body,c=s&&s.style;if(o&&dt.forEach(function(x){var b=c&&c[x];t.current[x]=b}),o&&re<1){var d=parseInt(t.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,m=window.innerWidth-h+d||0;Object.keys(pt).forEach(function(x){var b=pt[x];c&&(c[x]=b)}),c&&(c.paddingRight="".concat(m,"px"))}s&&vt()&&(s.addEventListener("touchmove",ft,oe),r&&(r.addEventListener("touchstart",mt,oe),r.addEventListener("touchmove",ht,oe))),re+=1}},[o]),l=p.useCallback(function(r){if(gt){var s=document.body,c=s&&s.style;re=Math.max(re-1,0),o&&re<1&&dt.forEach(function(d){var h=t.current[d];c&&(c[d]=h)}),s&&vt()&&(s.removeEventListener("touchmove",ft,oe),r&&(r.removeEventListener("touchstart",mt,oe),r.removeEventListener("touchmove",ht,oe)))}},[o]);return p.useEffect(function(){if(e){var r=a.current;return u(r),function(){l(r)}}},[e,u,l]),function(r){a.current=r}}var No=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Ho={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function zo(n){var e=n.children,i=n.lockEnabled,o=n.captureEnabled,t=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,s=Bo({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:r}),c=jo({isEnabled:i}),d=function(m){s(m),c(m)};return w(p.Fragment,null,i&&w("div",{onClick:No,css:Ho}),e(d))}var _o={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Uo=function(e){var i=e.name,o=e.onFocus;return w("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:_o,value:"",onChange:function(){}})},Wo=Uo;function qe(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Go(){return qe(/^iPhone/i)}function qt(){return qe(/^Mac/i)}function Yo(){return qe(/^iPad/i)||qt()&&navigator.maxTouchPoints>1}function qo(){return Go()||Yo()}function Xo(){return qt()||qo()}var Ko=function(e){return e.label},Zo=function(e){return e.label},Jo=function(e){return e.value},Qo=function(e){return!!e.isDisabled},er={clearIndicator:$i,container:Fi,control:_i,dropdownIndicator:Ri,group:Yi,groupHeading:Xi,indicatorsContainer:Ai,indicatorSeparator:Bi,input:Qi,loadingIndicator:Hi,loadingMessage:Ei,menu:fi,menuList:gi,menuPortal:yi,multiValue:oo,multiValueLabel:ro,multiValueRemove:ao,noOptionsMessage:xi,option:fo,placeholder:vo,singleValue:xo,valueContainer:Di},tr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},nr=4,Xt=4,ir=38,or=Xt*2,rr={baseUnit:Xt,controlHeight:ir,menuGutter:or},Ve={borderRadius:nr,colors:tr,spacing:rr},ar={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:at(),captureMenuScroll:!at(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Ro(),formatGroupLabel:Ko,getOptionLabel:Zo,getOptionValue:Jo,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Qo,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!ii(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function bt(n,e,i,o){var t=Jt(n,e,i),a=Qt(n,e,i),u=Zt(n,e),l=Se(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:l,index:o}}function ge(n,e){return n.options.map(function(i,o){if("options"in i){var t=i.options.map(function(u,l){return bt(n,u,e,l)}).filter(function(u){return Et(n,u)});return t.length>0?{type:"group",data:i,options:t,index:o}:void 0}var a=bt(n,i,e,o);return Et(n,a)?a:void 0}).filter(ai)}function Kt(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,ze(i.options.map(function(o){return o.data}))):e.push(i.data),e},[])}function xt(n,e){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,ze(o.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(o.index,"-").concat(t.index)}}))):i.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),i},[])}function ur(n,e){return Kt(ge(n,e))}function Et(n,e){var i=n.inputValue,o=i===void 0?"":i,t=e.data,a=e.isSelected,u=e.label,l=e.value;return(!tn(n)||!a)&&en(n,{label:u,value:l,data:t},o)}function sr(n,e){var i=n.focusedValue,o=n.selectValue,t=o.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function lr(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var ke=function(e,i){var o,t=(o=e.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return t||null},Zt=function(e,i){return e.getOptionLabel(i)},Se=function(e,i){return e.getOptionValue(i)};function Jt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function Qt(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var o=Se(n,e);return i.some(function(t){return Se(n,t)===o})}function en(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var tn=function(e){var i=e.hideSelectedOptions,o=e.isMulti;return i===void 0?o:i},cr=1,nn=function(n){An(i,n);var e=kn(i);function i(o){var t;if(Dn(this,i),t=e.call(this,o),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Xo(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,s){var c=t.props,d=c.onChange,h=c.name;s.name=h,t.ariaOnChange(r,s),d(r,s)},t.setValue=function(r,s,c){var d=t.props,h=d.closeMenuOnSelect,m=d.isMulti,x=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:x}),h&&(t.setState({inputIsHiddenAfterUpdate:!m}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:s,option:c})},t.selectOption=function(r){var s=t.props,c=s.blurInputOnSelect,d=s.isMulti,h=s.name,m=t.state.selectValue,x=d&&t.isOptionSelected(r,m),b=t.isOptionDisabled(r,m);if(x){var f=t.getOptionValue(r);t.setValue(m.filter(function(v){return t.getOptionValue(v)!==f}),"deselect-option",r)}else if(!b)d?t.setValue([].concat(ze(m),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:h});return}c&&t.blurInput()},t.removeValue=function(r){var s=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(r),h=c.filter(function(x){return t.getOptionValue(x)!==d}),m=he(s,h,h[0]||null);t.onChange(m,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(he(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,s=t.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),h=he(r,d,d[0]||null);t.onChange(h,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(r){return ke(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return xt(ge(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return Jn.apply(void 0,[t.props.classNamePrefix].concat(s))},t.getOptionLabel=function(r){return Zt(t.props,r)},t.getOptionValue=function(r){return Se(t.props,r)},t.getStyles=function(r,s){var c=t.props.unstyled,d=er[r](s,c);d.boxSizing="border-box";var h=t.props.styles[r];return h?h(d,s):d},t.getClassNames=function(r,s){var c,d;return(c=(d=t.props.classNames)[r])===null||c===void 0?void 0:c.call(d,s)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return wo(t.props)},t.buildCategorizedOptions=function(){return ge(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Kt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,s){t.setState({ariaSelection:y({value:r},s)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var s=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():s&&t.openMenu("first"):(s&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var s=t.props,c=s.isMulti,d=s.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&Oe(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var s=r.touches,c=s&&s.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var s=r.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),h=Math.abs(c.clientY-t.initialTouchY),m=5;t.userIsDragging=d>m||h>m}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var s=t.props.inputValue,c=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:s}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var s=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:s}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var s=t.getFocusableOptions(),c=s.indexOf(r);t.setState({focusedOption:r,focusedOptionId:c>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return tn(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var s=t.props,c=s.isMulti,d=s.backspaceRemovesValue,h=s.escapeClearsValue,m=s.inputValue,x=s.isClearable,b=s.isDisabled,f=s.menuIsOpen,v=s.onKeyDown,C=s.tabSelectsValue,F=s.openMenuOnFocus,D=t.state,I=D.focusedOption,A=D.focusedValue,P=D.selectValue;if(!b&&!(typeof v=="function"&&(v(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||m)return;t.focusValue("previous");break;case"ArrowRight":if(!c||m)return;t.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(A)t.removeValue(A);else{if(!d)return;c?t.popValue():x&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!f||!C||!I||F&&t.isOptionSelected(I,P))return;t.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(f){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":f?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:m}),t.onMenuClose()):x&&h&&t.clearValue();break;case" ":if(m)return;if(!f){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":f?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":f?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!f)return;t.focusOption("pageup");break;case"PageDown":if(!f)return;t.focusOption("pagedown");break;case"Home":if(!f)return;t.focusOption("first");break;case"End":if(!f)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++cr),t.state.selectValue=ot(o.value),o.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),l=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[l],t.state.focusedOptionId=ke(a,u[l])}return t}return In(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&rt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!u&&t.isDisabled||r&&l&&!t.menuIsOpen)&&this.focusInput(),r&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(rt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,l=u.selectValue,r=u.isFocused,s=this.buildFocusableOptions(),c=t==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=u.indexOf(l);l||(r=-1);var s=u.length-1,c=-1;if(u.length){switch(t){case"previous":r===0?c=0:r===-1?c=s:c=r-1;break;case"next":r>-1&&r<s&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,s=l.indexOf(u);u||(s=-1),t==="up"?r=s>0?s-1:l.length-1:t==="down"?r=(s+1)%l.length:t==="pageup"?(r=s-a,r<0&&(r=0)):t==="pagedown"?(r=s+a,r>l.length-1&&(r=l.length-1)):t==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ve):y(y({},Ve),this.props.theme):Ve}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,r=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,m=d.isRtl,x=d.options,b=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:l,getValue:r,hasValue:b,isMulti:h,isRtl:m,options:x,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return Jt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Qt(this.props,t,a)}},{key:"filterOption",value:function(t,a){return en(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,l=t.inputId,r=t.inputValue,s=t.tabIndex,c=t.form,d=t.menuIsOpen,h=t.required,m=this.getComponents(),x=m.Input,b=this.state,f=b.inputIsHidden,v=b.ariaSelection,C=this.commonProps,F=l||this.getElementId("input"),D=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(v==null?void 0:v.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(x,S({},C,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:F,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:r},D)):p.createElement($o,S({id:F,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:we,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,h=this.commonProps,m=this.props,x=m.controlShouldRenderValue,b=m.isDisabled,f=m.isMulti,v=m.inputValue,C=m.placeholder,F=this.state,D=F.selectValue,I=F.focusedValue,A=F.isFocused;if(!this.hasValue()||!x)return v?null:p.createElement(d,S({},h,{key:"placeholder",isDisabled:b,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),C);if(f)return D.map(function(O,M){var $=O===I,j="".concat(t.getOptionLabel(O),"-").concat(t.getOptionValue(O));return p.createElement(u,S({},h,{components:{Container:l,Label:r,Remove:s},isFocused:$,isDisabled:b,key:j,index:M,removeProps:{onClick:function(){return t.removeValue(O)},onTouchEnd:function(){return t.removeValue(O)},onMouseDown:function(W){W.preventDefault()}},data:O}),t.formatOptionLabel(O,"value"))});if(v)return null;var P=D[0];return p.createElement(c,S({},h,{data:P,isDisabled:b}),this.formatOptionLabel(P,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,r=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,S({},l,{isDisabled:r,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,S({},u,{innerProps:s,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,r=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,h=a.NoOptionsMessage,m=a.Option,x=this.commonProps,b=this.state.focusedOption,f=this.props,v=f.captureMenuScroll,C=f.inputValue,F=f.isLoading,D=f.loadingMessage,I=f.minMenuHeight,A=f.maxMenuHeight,P=f.menuIsOpen,O=f.menuPlacement,M=f.menuPosition,$=f.menuPortalTarget,j=f.menuShouldBlockScroll,T=f.menuShouldScrollIntoView,W=f.noOptionsMessage,G=f.onMenuScrollToTop,L=f.onMenuScrollToBottom;if(!P)return null;var k=function(N,Y){var Q=N.type,z=N.data,ee=N.isDisabled,q=N.isSelected,le=N.label,sn=N.value,Ze=b===z,Je=ee?void 0:function(){return t.onOptionHover(z)},ln=ee?void 0:function(){return t.selectOption(z)},Qe="".concat(t.getElementId("option"),"-").concat(Y),cn={id:Qe,onClick:ln,onMouseMove:Je,onMouseOver:Je,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:q};return p.createElement(m,S({},x,{innerProps:cn,data:z,isDisabled:ee,isSelected:q,key:Qe,label:le,type:Q,value:sn,isFocused:Ze,innerRef:Ze?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(N.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var N=R.data,Y=R.options,Q=R.index,z="".concat(t.getElementId("group"),"-").concat(Q),ee="".concat(z,"-heading");return p.createElement(u,S({},x,{key:z,data:N,options:Y,Heading:l,headingProps:{id:ee,data:R.data},label:t.formatGroupLabel(R.data)}),R.options.map(function(q){return k(q,"".concat(Q,"-").concat(q.index))}))}else if(R.type==="option")return k(R,"".concat(R.index))});else if(F){var H=D({inputValue:C});if(H===null)return null;U=p.createElement(d,x,H)}else{var Z=W({inputValue:C});if(Z===null)return null;U=p.createElement(h,x,Z)}var J={minMenuHeight:I,maxMenuHeight:A,menuPlacement:O,menuPosition:M,menuShouldScrollIntoView:T},se=p.createElement(hi,S({},x,J),function(R){var N=R.ref,Y=R.placerProps,Q=Y.placement,z=Y.maxHeight;return p.createElement(r,S({},x,J,{innerRef:N,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:F,placement:Q}),p.createElement(zo,{captureEnabled:v,onTopArrive:G,onBottomArrive:L,lockEnabled:j},function(ee){return p.createElement(s,S({},x,{innerRef:function(le){t.getMenuListRef(le),ee(le)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:t.getElementId("listbox")},isLoading:F,maxHeight:z,focusedOption:b}),U)}))});return $||M==="fixed"?p.createElement(c,S({},x,{appendTo:$,controlElement:this.controlRef,menuPlacement:O,menuPosition:M}),se):se}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,l=a.isDisabled,r=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Wo,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(r)if(u){var h=d.map(function(b){return t.getOptionValue(b)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:h})}else{var m=d.length>0?d.map(function(b,f){return p.createElement("input",{key:"i-".concat(f),name:s,type:"hidden",value:t.getOptionValue(b)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,m)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(Po,S({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:r,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,l=t.SelectContainer,r=t.ValueContainer,s=this.props,c=s.className,d=s.id,h=s.isDisabled,m=s.menuIsOpen,x=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(l,S({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:x}),this.renderLiveRegion(),p.createElement(a,S({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:x,menuIsOpen:m}),p.createElement(r,S({},b,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,S({},b,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,h=a.instancePrefix,m=t.options,x=t.value,b=t.menuIsOpen,f=t.inputValue,v=t.isMulti,C=ot(x),F={};if(u&&(x!==u.value||m!==u.options||b!==u.menuIsOpen||f!==u.inputValue)){var D=b?ur(t,C):[],I=b?xt(ge(t,C),"".concat(h,"-option")):[],A=l?sr(a,C):null,P=lr(a,D),O=ke(I,P);F={selectValue:C,focusedOption:P,focusedOptionId:O,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var M=r!=null&&t!==u?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},$=s,j=c&&d;return c&&!j&&($={value:he(v,C,C[0]||null),options:C,action:"initial-input-focus"},j=!d),(s==null?void 0:s.action)==="initial-input-focus"&&($=null),y(y(y({},F),M),{},{prevProps:t,ariaSelection:$,prevWasFocused:j})}}]),i}(p.Component);nn.defaultProps=ar;var dr=p.forwardRef(function(n,e){var i=On(n);return p.createElement(nn,S({ref:e},i))}),on=dr;const rn=n=>p.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M1.5 1.75L6 6.25L10.5 1.75",stroke:"#EFEDE8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ct=[{value:"Alcoholic drinks",label:"Alcoholic drinks"},{value:"Berries",label:"Berries"},{value:"Cereals",label:"Cereals"},{value:"Dairy",label:"Dairy"},{value:"Dried fruits",label:"Dried fruits"},{value:"Eggs",label:"Eggs"},{value:"Fish",label:"Fish"},{value:"Flour",label:"Flour"},{value:"Meat",label:"Meat"}],pr=n=>g.jsx(Ye.DropdownIndicator,{...n,children:g.jsx(rn,{})}),fr={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),control:(n,e)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${E.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${E.orangeColor}`:0,transition:`all ${E.animation}`,"&:hover":{borderColor:`${E.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),dropdownIndicator:(n,e)=>({...n,transition:`all ${E.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${E.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${E.successColor}`:`${E.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${E.orangeColor}`,color:`${E.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.10)",width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})},hr=({dataFunc:n,currentValue:e})=>g.jsx(on,{onChange:n,options:Ct,components:{DropdownIndicator:pr},styles:fr,value:e===""?{value:"Categories",label:"Categories"}:Ct.find(i=>i.value===e)}),wt=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],mr=n=>g.jsx(Ye.DropdownIndicator,{...n,children:g.jsx(rn,{})}),vr={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,e)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${E.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${E.orangeColor}`:0,transition:`all ${E.animation}`,"&:hover":{borderColor:`${E.orangeColor}`},"@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,e)=>({...n,transition:`all ${E.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${E.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${E.successColor}`:`${E.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${E.orangeColor}`,color:`${E.whiteColor}`}})},gr=({dataFunc:n,currentValue:e})=>g.jsx(on,{onChange:n,options:wt,components:{DropdownIndicator:mr},styles:vr,value:wt.find(i=>i.value===e),defaultValue:e}),br=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Xe=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M13.5 4.5L4.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M4.5 4.5L13.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),xr=ne(br)`
  width: 18px;
  height: 18px;
`,Er=ne(Xe)`
  width: 20px;
  height: 20px;
`,Cr=ne.form`
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
`,wr=()=>{const[n,e]=p.useState(!1),[i,o]=Ft(),t=Fe(),a=p.useMemo(()=>Object.fromEntries([...i]),[i]),{search:u,category:l,recommended:r}=a;p.useEffect(()=>{},[u,l,r,o]);const s=Dt({initialValues:{search:u??"",category:l??"",recommended:r??"All"},onSubmit:d=>{const{search:h}=d;h&&(t(ve(1)),o(m=>{const x=new URLSearchParams(m);return x.set("q",h),x}))}}),c=d=>{e(!0),s.handleChange(d)};return g.jsxs(Cr,{onSubmit:s.handleSubmit,children:[g.jsxs("div",{className:"input-search-block",children:[g.jsx("input",{id:"search",name:"search",type:"text",onChange:c,value:s.values.search,placeholder:"Search"}),g.jsxs("div",{className:"svgs-search-block",children:[n&&g.jsx("button",{type:"button",onClick:()=>{e(!1),o(d=>{const h=new URLSearchParams(d);return h.delete("search"),h}),s.values.search=""},children:g.jsx(Er,{})}),g.jsx("button",{type:"submit",children:g.jsx(xr,{})})]})]}),g.jsxs("div",{className:"selects-block",children:[g.jsx(hr,{name:"category",dataFunc:d=>{s.setFieldValue("category",d.value),t(ve(1)),o(h=>{const m=new URLSearchParams(h);return m.set("category",d.value),m})},currentValue:s.values.category}),g.jsx(gr,{name:"recommended",currentValue:s.values.recommended,dataFunc:d=>{t(ve(1)),s.setFieldValue("recommended",d.value),o(h=>{const m=new URLSearchParams(h);return m.set("recommended",d.value),m})}})]}),g.jsx("p",{className:"filter-1440",children:"Filter"})]})},yr=ne.ul`
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
`,Sr=ne.div`
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
`,Fr=()=>g.jsxs(Sr,{children:[g.jsxs("p",{className:"above-text",children:[g.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),g.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),an=n=>p.createElement("svg",{width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M7.5 14 14 7.5m0 0L7.5 1M14 7.5H1",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),Or=n=>p.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),p.createElement("path",{d:"M18.823 8.725a.593.593 0 0 0-.833-.074l-1.641 1.378-.755-1.87a.58.58 0 0 0-.114-.18 1.606 1.606 0 0 0-.791-.809 1.628 1.628 0 0 0-.491-.13c-.037-.02-.07-.045-.111-.058l-2.888-.805a.594.594 0 0 0-.458.063.578.578 0 0 0-.36.336L9.294 9.372a.594.594 0 0 0 .338.767.593.593 0 0 0 .766-.34l.918-2.36 1.315.365c-.032.052-.066.101-.092.156l-1.687 3.655c-.024.054-.037.108-.054.164l-2.05 3.435-3.428 1.147a.876.876 0 0 0 1.04 1.41l3.51-1.209a.841.841 0 0 0 .243-.29c.045-.047.095-.084.129-.142l1.221-2.048 2.169 1.848-2.32 2.614a.875.875 0 1 0 1.31 1.16l2.896-3.261c.09-.101.144-.217.18-.338.022-.066.022-.135.027-.203 0-.035.013-.066.01-.098a.858.858 0 0 0-.3-.637l-1.995-1.701c.143-.137.266-.3.354-.492l1.293-2.8.414 1.104c.017.098.05.194.12.274a.57.57 0 0 0 .226.16l.03.007a.564.564 0 0 0 .367.018h.003c.018-.005.036-.002.054-.01a.585.585 0 0 0 .233-.17L18.89 9.56c.25-.21.145-.583-.066-.834ZM15.846 7.301a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z",fill:"#EFEDE8"})),Ke=B.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,Dr=B.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${E.animation};
  @media screen and (min-width: 768px) {
    ${Ke}:hover & {
      color: ${E.successColor};
      transform: scale(1.25);
    }
  }
`,Ir=dn`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,Ar=B(an)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    ${Ke}:hover & {
      animation: ${Ir} 1000ms linear infinite;
      > path {
        stroke: ${E.successColor};
      }
    }
  }
`,Pr=B(Or)`
  width: 24px;
  height: 24px;
`,un=B.li`
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
`,Mr=B.span`
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
`,Vr="1",kr=({data:n,handleOpenModal:e})=>{const{calories:i,category:o,title:t,weight:a,groupBloodNotAllowed:u,_id:l}=n,r=u[Vr];return g.jsxs(un,{children:[g.jsx("span",{className:"diet-span",children:"diet"}),g.jsxs("div",{className:"recommended-addbtn-div",children:[g.jsx(Mr,{className:"recommended-span",$color:r,children:r?"Recommended":"Not recommended"}),g.jsxs(Ke,{onClick:()=>e({calories:i,title:t,weight:a,_id:l}),type:"button",className:"add-btn",children:[g.jsx(Dr,{className:"add-btn-span",children:"Add"}),g.jsx(Ar,{})]})]}),g.jsxs("div",{className:"product-info-div",children:[g.jsxs("div",{className:"title-svg-div",children:[g.jsx(Pr,{}),g.jsxs("p",{className:"product-info-div-title",children:[" ",t]})]}),g.jsxs("div",{className:"detailed-info-div",children:[g.jsxs("p",{className:"detailed-name",children:["Calories: ",g.jsx("span",{className:"detailed-data",children:i})]}),g.jsxs("p",{className:"detailed-name",children:["Category: ",g.jsx("span",{className:"detailed-data",children:o})]}),g.jsxs("p",{className:"detailed-name",children:["Weight: ",g.jsx("span",{className:"detailed-data",children:a})]})]})]})]})},je=B.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,Rr=B(Xe)`
  transition:
    stroke ${E.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  > path {
    stroke: white;
  }
  @media screen and (min-width: 768px) {
    ${je}:hover & {
      > path {
        stroke: ${E.orangeColor};
      }
    }
    ${je}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,Lr=B.div`
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
`,$r=B.div`
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
`,Tr=B.form`
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
`;function Br(){const n=new Date,e=n.getDate(),i=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear();return`${e}-${i}-${o}`}const jr=({data:n,closeModal:e})=>{const{title:i,weight:o,calories:t,_id:a}=n||{},u=Fe(),l=Dt({initialValues:{title:"",weight:"",calories:""},onSubmit:s=>{const{weight:c,calories:d}=s,h={date:Br(),product:a,amount:c,calories:d};console.log(h),u(pn(h))}});p.useEffect(()=>{n&&l.setValues({title:i,weight:o,calories:t})},[i,o,t]);const r=s=>{if(!(isNaN(s.target.value)&&s.target.value!=="")&&(s.target.value===""&&l.setValues({calories:""}),l.handleChange(s),s.target.value>0)){const c=parseFloat(Number(s.target.value)),d=c*t/100;l.setValues({...l.values,weight:c,calories:d})}};return g.jsxs(Tr,{onSubmit:l.handleSubmit,children:[g.jsxs("div",{className:"inputs-block",children:[g.jsx("input",{id:"title",name:"title",type:"text",value:l.values.title,disabled:!0,className:"title-input"}),g.jsxs("div",{className:"weight-input-block",children:[g.jsx("input",{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:r,value:l.values.weight,className:"weight-input"}),g.jsx("span",{className:"grams-span",children:"grams"})]})]}),g.jsxs("div",{className:"calories-block",children:[g.jsx("span",{className:"calories-span",children:"Calories: "}),g.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:l.values.calories,className:"calories-input"})]}),g.jsxs("div",{className:"button-block",children:[g.jsx("button",{className:"add-button",type:"submit",children:"Add to diary"}),g.jsx("button",{onClick:e,className:"cancel-button",type:"button",children:"Cancel"})]})]})},Nr=document.querySelector("#add-product-modal"),Hr=({data:n,closeModal:e,showModal:i})=>{p.useEffect(()=>{if(!i)return;const t=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e,i]);const o=t=>{t.target===t.currentTarget&&e()};return St.createPortal(g.jsx(Lr,{onClick:o,className:i?"":"hide-hidden",children:g.jsxs($r,{className:"modal",children:[g.jsx(je,{onClick:e,type:"button",children:g.jsx(Rr,{})}),g.jsx(jr,{data:n,closeModal:e})]})}),Nr)};var Ne=new Map,me=new WeakMap,yt=0,zr=void 0;function _r(n){return n?(me.has(n)||(yt+=1,me.set(n,yt.toString())),me.get(n)):"0"}function Ur(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?_r(n.root):n[e]}`).toString()}function Wr(n){let e=Ur(n),i=Ne.get(e);if(!i){const o=new Map;let t;const a=new IntersectionObserver(u=>{u.forEach(l=>{var r;const s=l.isIntersecting&&t.some(c=>l.intersectionRatio>=c);n.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=s),(r=o.get(l.target))==null||r.forEach(c=>{c(s,l)})})},n);t=a.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),i={id:e,observer:a,elements:o},Ne.set(e,i)}return i}function Gr(n,e,i={},o=zr){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const r=n.getBoundingClientRect();return e(o,{isIntersecting:o,target:n,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:t,observer:a,elements:u}=Wr(i);let l=u.get(n)||[];return u.has(n)||u.set(n,l),l.push(e),a.observe(n),function(){l.splice(l.indexOf(e),1),l.length===0&&(u.delete(n),a.unobserve(n)),u.size===0&&(a.disconnect(),Ne.delete(t))}}function Yr({threshold:n,delay:e,trackVisibility:i,rootMargin:o,root:t,triggerOnce:a,skip:u,initialInView:l,fallbackInView:r,onChange:s}={}){var c;const[d,h]=p.useState(null),m=p.useRef(),[x,b]=p.useState({inView:!!l,entry:void 0});m.current=s,p.useEffect(()=>{if(u||!d)return;let F;return F=Gr(d,(D,I)=>{b({inView:D,entry:I}),m.current&&m.current(D,I),I.isIntersecting&&a&&F&&(F(),F=void 0)},{root:t,rootMargin:o,threshold:n,trackVisibility:i,delay:e},r),()=>{F&&F()}},[Array.isArray(n)?n.toString():n,d,t,o,a,u,i,r,e]);const f=(c=x.entry)==null?void 0:c.target,v=p.useRef();!d&&f&&!a&&!u&&v.current!==f&&(v.current=f,b({inView:!!l,entry:void 0}));const C=[h,x.inView,x.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}const qr="/power-pulse-fs/assets/bgFood-46dd5bc9.png",Xr="/power-pulse-fs/assets/bgFood2x-515a5477.png",ue=B(fn)`
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
`,Kr=B(an)`
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
`,Zr=B(Xe)`
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
`,Jr=B.div`
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

  
`,Qr=B.div`
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
   background-image: url(${qr});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${Xr});
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
`,ea=()=>{const{isSuccessPopUpShown:n}=Ot(o=>o.products),e=Fe();p.useEffect(()=>{if(!n)return;const o=t=>{t.code==="Escape"&&e(ce(!1))};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[n,e]);const i=o=>{o.target===o.currentTarget&&e(ce(!1))};return n&&g.jsx(Jr,{onClick:i,children:g.jsxs(Qr,{children:[g.jsx(Zr,{onClick:()=>e(ce(!1))}),g.jsx("p",{className:"title",children:"Well done"}),g.jsxs("p",{className:"calories",children:["Calories: ",g.jsx("span",{className:"calories-span",children:"96"})]}),g.jsx("button",{onClick:()=>e(ce(!1)),className:"button",type:"button",children:"Next product"}),g.jsxs(ue,{to:"/diary",children:["To the diary ",g.jsx(Kr,{})]})]})})},te={bloodType:"1"},ta=()=>{const[n]=Ft(),[e,i]=p.useState(!1),[o,t]=p.useState(null),{products:a,isLoading:u,pageStore:l,totalPages:r}=Ot(C=>C.products),{ref:s,inView:c}=Yr(),d=Fe();p.useEffect(()=>{e?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},[e]);const h=C=>{t(C),i(!0)},m=()=>{i(!1)},x=p.useMemo(()=>Object.fromEntries([...n]),[n]),{search:b,category:f,recommended:v}=x;return b?te.q=b:delete te.q,f&&(te.cat=f.toLowerCase()),v&&v!=="All"?te.rec=v:delete te.rec,p.useEffect(()=>{if(!u){if(l>=r&&r!==1)return console.log("enough");c&&(d(ve(l+1)),te.page=l)}},[c,l,u,d,r]),p.useEffect(()=>{te.page=l,d(hn(te))},[f,v,b,d,l,r]),a.length>0?g.jsxs(g.Fragment,{children:[g.jsxs(yr,{children:[a.map(C=>u?g.jsx(un,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:g.jsx("div",{className:"loader"})},C._id):g.jsx(kr,{handleOpenModal:h,data:C},C._id)),g.jsx("div",{ref:s})]}),g.jsx(Hr,{showModal:e,closeModal:m,data:o}),g.jsx(ea,{})]}):g.jsx(Fr,{})},na="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",ia="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",oa=ne.section`

@media screen and (min-width: 1440px) {
  height: 90vh;
 background: url(${na});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${ia});
    }
}
`,ra=ne.div`
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
`,aa=ne.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,da=()=>g.jsx(oa,{children:g.jsxs(ra,{children:[g.jsxs("div",{className:"title-form-block",children:[g.jsx(aa,{children:"Products"}),g.jsx(wr,{})]}),g.jsx(ta,{})]})});export{da as default};
