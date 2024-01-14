import{a as p,b as vt,j as x,c as gt,s as z,d as en,e as tn}from"./index-1bd9c0e2.js";import{u as bt}from"./formik.esm-fa62608d.js";import{h as nn,E as on,c as rn,s as an,_ as y,n as te}from"./emotion-styled.browser.esm-da3af4be.js";import{s as S}from"./styleGuide-7c616dce.js";var E=function(e,i){var o=arguments;if(i==null||!nn.call(i,"css"))return p.createElement.apply(void 0,o);var t=o.length,a=new Array(t);a[0]=on,a[1]=rn(e,i);for(var u=2;u<t;u++)a[u]=o[u];return p.createElement.apply(null,a)};function Le(){for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return an(e)}var un=function(){var e=Le.apply(void 0,arguments),i="animation-"+e.name;return{name:i,styles:"@keyframes "+i+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function ne(n){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(n)}function sn(n,e){if(ne(n)!=="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var o=i.call(n,e||"default");if(ne(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function xt(n){var e=sn(n,"string");return ne(e)==="symbol"?e:String(e)}function ae(n,e,i){return e=xt(e),e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function Ye(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),i.push.apply(i,o)}return i}function C(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Ye(Object(i),!0).forEach(function(o){ae(n,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):Ye(Object(i)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(i,o))})}return n}function ln(n){if(Array.isArray(n))return n}function cn(n,e){var i=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var o,t,a,u,l=[],r=!0,s=!1;try{if(a=(i=i.call(n)).next,e===0){if(Object(i)!==i)return;r=!1}else for(;!(r=(o=a.call(i)).done)&&(l.push(o.value),l.length!==e);r=!0);}catch(c){s=!0,t=c}finally{try{if(!r&&i.return!=null&&(u=i.return(),Object(u)!==u))return}finally{if(s)throw t}}return l}}function Ae(n,e){(e==null||e>n.length)&&(e=n.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=n[i];return o}function Et(n,e){if(n){if(typeof n=="string")return Ae(n,e);var i=Object.prototype.toString.call(n).slice(8,-1);if(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")return Array.from(n);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ae(n,e)}}function dn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(n,e){return ln(n)||cn(n,e)||Et(n,e)||dn()}function pn(n,e){if(n==null)return{};var i={},o=Object.keys(n),t,a;for(a=0;a<o.length;a++)t=o[a],!(e.indexOf(t)>=0)&&(i[t]=n[t]);return i}function K(n,e){if(n==null)return{};var i=pn(n,e),o,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var fn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function hn(n){var e=n.defaultInputValue,i=e===void 0?"":e,o=n.defaultMenuIsOpen,t=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,m=n.value,g=K(n,fn),b=p.useState(l!==void 0?l:i),h=X(b,2),v=h[0],F=h[1],O=p.useState(r!==void 0?r:t),D=X(O,2),I=D[0],A=D[1],M=p.useState(m!==void 0?m:u),w=X(M,2),P=w[0],T=w[1],B=p.useCallback(function(H,Z){typeof s=="function"&&s(H,Z),T(H)},[s]),$=p.useCallback(function(H,Z){var J;typeof c=="function"&&(J=c(H,Z)),F(J!==void 0?J:H)},[c]),W=p.useCallback(function(){typeof f=="function"&&f(),A(!0)},[f]),G=p.useCallback(function(){typeof d=="function"&&d(),A(!1)},[d]),L=l!==void 0?l:v,R=r!==void 0?r:I,U=m!==void 0?m:P;return C(C({},g),{},{inputValue:L,menuIsOpen:R,onChange:B,onInputChange:$,onMenuClose:G,onMenuOpen:W,value:U})}function mn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function qe(n,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,xt(o.key),o)}}function vn(n,e,i){return e&&qe(n.prototype,e),i&&qe(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function Me(n,e){return Me=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},Me(n,e)}function gn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Me(n,e)}function he(n){return he=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},he(n)}function bn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function xn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function En(n,e){if(e&&(ne(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xn(n)}function Cn(n){var e=bn();return function(){var o=he(n),t;if(e){var a=he(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return En(this,t)}}function Sn(n){if(Array.isArray(n))return Ae(n)}function yn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function wn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Te(n){return Sn(n)||yn(n)||Et(n)||wn()}function Fn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const On=Math.min,Dn=Math.max,me=Math.round,le=Math.floor,ve=n=>({x:n,y:n});function In(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Ct(n){return yt(n)?(n.nodeName||"").toLowerCase():"#document"}function _(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function St(n){var e;return(e=(yt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function yt(n){return n instanceof Node||n instanceof _(n).Node}function Pe(n){return n instanceof Element||n instanceof _(n).Element}function $e(n){return n instanceof HTMLElement||n instanceof _(n).HTMLElement}function Xe(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof _(n).ShadowRoot}function wt(n){const{overflow:e,overflowX:i,overflowY:o,display:t}=Be(n);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(t)}function An(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Mn(n){return["html","body","#document"].includes(Ct(n))}function Be(n){return _(n).getComputedStyle(n)}function Pn(n){if(Ct(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Xe(n)&&n.host||St(n);return Xe(e)?e.host:e}function Ft(n){const e=Pn(n);return Mn(e)?n.ownerDocument?n.ownerDocument.body:n.body:$e(e)&&wt(e)?e:Ft(e)}function ge(n,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const t=Ft(n),a=t===((o=n.ownerDocument)==null?void 0:o.body),u=_(t);return a?e.concat(u,u.visualViewport||[],wt(t)?t:[],u.frameElement&&i?ge(u.frameElement):[]):e.concat(t,ge(t,[],i))}function Vn(n){const e=Be(n);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const t=$e(n),a=t?n.offsetWidth:i,u=t?n.offsetHeight:o,l=me(i)!==a||me(o)!==u;return l&&(i=a,o=u),{width:i,height:o,$:l}}function je(n){return Pe(n)?n:n.contextElement}function Se(n){const e=je(n);if(!$e(e))return ve(1);const i=e.getBoundingClientRect(),{width:o,height:t,$:a}=Vn(e);let u=(a?me(i.width):i.width)/o,l=(a?me(i.height):i.height)/t;return(!u||!Number.isFinite(u))&&(u=1),(!l||!Number.isFinite(l))&&(l=1),{x:u,y:l}}const Rn=ve(0);function kn(n){const e=_(n);return!An()||!e.visualViewport?Rn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ln(n,e,i){return e===void 0&&(e=!1),!i||e&&i!==_(n)?!1:e}function Ke(n,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const t=n.getBoundingClientRect(),a=je(n);let u=ve(1);e&&(o?Pe(o)&&(u=Se(o)):u=Se(n));const l=Ln(a,i,o)?kn(a):ve(0);let r=(t.left+l.x)/u.x,s=(t.top+l.y)/u.y,c=t.width/u.x,d=t.height/u.y;if(a){const f=_(a),m=o&&Pe(o)?_(o):o;let g=f.frameElement;for(;g&&o&&m!==f;){const b=Se(g),h=g.getBoundingClientRect(),v=Be(g),F=h.left+(g.clientLeft+parseFloat(v.paddingLeft))*b.x,O=h.top+(g.clientTop+parseFloat(v.paddingTop))*b.y;r*=b.x,s*=b.y,c*=b.x,d*=b.y,r+=F,s+=O,g=_(g).frameElement}}return In({width:c,height:d,x:r,y:s})}function Tn(n,e){let i=null,o;const t=St(n);function a(){clearTimeout(o),i&&i.disconnect(),i=null}function u(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:s,top:c,width:d,height:f}=n.getBoundingClientRect();if(l||e(),!d||!f)return;const m=le(c),g=le(t.clientWidth-(s+d)),b=le(t.clientHeight-(c+f)),h=le(s),F={rootMargin:-m+"px "+-g+"px "+-b+"px "+-h+"px",threshold:Dn(0,On(1,r))||1};let O=!0;function D(I){const A=I[0].intersectionRatio;if(A!==r){if(!O)return u();A?u(!1,A):o=setTimeout(()=>{u(!1,1e-7)},100)}O=!1}try{i=new IntersectionObserver(D,{...F,root:t.ownerDocument})}catch{i=new IntersectionObserver(D,F)}i.observe(n)}return u(!0),a}function $n(n,e,i,o){o===void 0&&(o={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:u=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=o,s=je(n),c=t||a?[...s?ge(s):[],...ge(e)]:[];c.forEach(v=>{t&&v.addEventListener("scroll",i,{passive:!0}),a&&v.addEventListener("resize",i)});const d=s&&l?Tn(s,i):null;let f=-1,m=null;u&&(m=new ResizeObserver(v=>{let[F]=v;F&&F.target===s&&m&&(m.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{m&&m.observe(e)})),i()}),s&&!r&&m.observe(s),m.observe(e));let g,b=r?Ke(n):null;r&&h();function h(){const v=Ke(n);b&&(v.x!==b.x||v.y!==b.y||v.width!==b.width||v.height!==b.height)&&i(),b=v,g=requestAnimationFrame(h)}return i(),()=>{c.forEach(v=>{t&&v.removeEventListener("scroll",i),a&&v.removeEventListener("resize",i)}),d&&d(),m&&m.disconnect(),m=null,r&&cancelAnimationFrame(g)}}var Ve=p.useLayoutEffect,Bn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],be=function(){};function jn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Hn(n,e){for(var i=arguments.length,o=new Array(i>2?i-2:0),t=2;t<i;t++)o[t-2]=arguments[t];var a=[].concat(o);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(jn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Ze=function(e){return Xn(e)?e.filter(Boolean):ne(e)==="object"&&e!==null?[e]:[]},Ot=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var i=K(e,Bn);return C({},i)},V=function(e,i,o){var t=e.cx,a=e.getStyles,u=e.getClassNames,l=e.className;return{css:a(i,e),className:t(o??{},u(i,e),l)}};function Ce(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Nn(n){return Ce(n)?window.innerHeight:n.clientHeight}function Dt(n){return Ce(n)?window.pageYOffset:n.scrollTop}function xe(n,e){if(Ce(n)){window.scrollTo(0,e);return}n.scrollTop=e}function _n(n){var e=getComputedStyle(n),i=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(i&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function zn(n,e,i,o){return i*((n=n/o-1)*n*n+1)+e}function ce(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:be,t=Dt(n),a=e-t,u=10,l=0;function r(){l+=u;var s=zn(l,t,a,i);xe(n,s),l<i?window.requestAnimationFrame(r):o(n)}r()}function Je(n,e){var i=n.getBoundingClientRect(),o=e.getBoundingClientRect(),t=e.offsetHeight/3;o.bottom+t>i.bottom?xe(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):o.top-t<i.top&&xe(n,Math.max(e.offsetTop-t,0))}function Un(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Qe(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Wn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var It=!1,Gn={get passive(){return It=!0}},de=typeof window<"u"?window:{};de.addEventListener&&de.removeEventListener&&(de.addEventListener("p",be,Gn),de.removeEventListener("p",be,!1));var Yn=It;function qn(n){return n!=null}function Xn(n){return Array.isArray(n)}function pe(n,e,i){return n?e:i}var Kn=function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),t=1;t<i;t++)o[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var l=X(u,1),r=l[0];return!o.includes(r)});return a.reduce(function(u,l){var r=X(l,2),s=r[0],c=r[1];return u[s]=c,u},{})},Zn=["children","innerProps"],Jn=["children","innerProps"];function Qn(n){var e=n.maxHeight,i=n.menuEl,o=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,r=_n(i),s={placement:"bottom",maxHeight:e};if(!i||!i.offsetParent)return s;var c=r.getBoundingClientRect(),d=c.height,f=i.getBoundingClientRect(),m=f.bottom,g=f.height,b=f.top,h=i.offsetParent.getBoundingClientRect(),v=h.top,F=u?window.innerHeight:Nn(r),O=Dt(r),D=parseInt(getComputedStyle(i).marginBottom,10),I=parseInt(getComputedStyle(i).marginTop,10),A=v-I,M=F-b,w=A+O,P=d-O-b,T=m-F+O+D,B=O+b-I,$=160;switch(t){case"auto":case"bottom":if(M>=g)return{placement:"bottom",maxHeight:e};if(P>=g&&!u)return a&&ce(r,T,$),{placement:"bottom",maxHeight:e};if(!u&&P>=o||u&&M>=o){a&&ce(r,T,$);var W=u?M-D:P-D;return{placement:"bottom",maxHeight:W}}if(t==="auto"||u){var G=e,L=u?A:w;return L>=o&&(G=Math.min(L-D-l,e)),{placement:"top",maxHeight:G}}if(t==="bottom")return a&&xe(r,T),{placement:"bottom",maxHeight:e};break;case"top":if(A>=g)return{placement:"top",maxHeight:e};if(w>=g&&!u)return a&&ce(r,B,$),{placement:"top",maxHeight:e};if(!u&&w>=o||u&&A>=o){var R=e;return(!u&&w>=o||u&&A>=o)&&(R=u?A-I:w-I),a&&ce(r,B,$),{placement:"top",maxHeight:R}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return s}function ei(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var At=function(e){return e==="auto"?"bottom":e},ti=function(e,i){var o,t=e.placement,a=e.theme,u=a.borderRadius,l=a.spacing,r=a.colors;return C((o={label:"menu"},ae(o,ei(t),"100%"),ae(o,"position","absolute"),ae(o,"width","100%"),ae(o,"zIndex",1),o),i?{}:{backgroundColor:r.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},Mt=p.createContext(null),ni=function(e){var i=e.children,o=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,r=e.theme,s=p.useContext(Mt)||{},c=s.setPortalPlacement,d=p.useRef(null),f=p.useState(t),m=X(f,2),g=m[0],b=m[1],h=p.useState(null),v=X(h,2),F=v[0],O=v[1],D=r.spacing.controlHeight;return Ve(function(){var I=d.current;if(I){var A=u==="fixed",M=l&&!A,w=Qn({maxHeight:t,menuEl:I,minHeight:o,placement:a,shouldScroll:M,isFixedPosition:A,controlHeight:D});b(w.maxHeight),O(w.placement),c==null||c(w.placement)}},[t,a,u,l,o,c,D]),i({ref:d,placerProps:C(C({},e),{},{placement:F||At(a),maxHeight:g})})},ii=function(e){var i=e.children,o=e.innerRef,t=e.innerProps;return E("div",y({},V(e,"menu",{menu:!0}),{ref:o},t),i)},oi=ii,ri=function(e,i){var o=e.maxHeight,t=e.theme.spacing.baseUnit;return C({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},i?{}:{paddingBottom:t,paddingTop:t})},ai=function(e){var i=e.children,o=e.innerProps,t=e.innerRef,a=e.isMulti;return E("div",y({},V(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},o),i)},Pt=function(e,i){var o=e.theme,t=o.spacing.baseUnit,a=o.colors;return C({textAlign:"center"},i?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},ui=Pt,si=Pt,li=function(e){var i=e.children,o=i===void 0?"No options":i,t=e.innerProps,a=K(e,Zn);return E("div",y({},V(C(C({},a),{},{children:o,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),o)},ci=function(e){var i=e.children,o=i===void 0?"Loading...":i,t=e.innerProps,a=K(e,Jn);return E("div",y({},V(C(C({},a),{},{children:o,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),o)},di=function(e){var i=e.rect,o=e.offset,t=e.position;return{left:i.left,position:t,top:o,width:i.width,zIndex:1}},pi=function(e){var i=e.appendTo,o=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,l=e.menuPosition,r=p.useRef(null),s=p.useRef(null),c=p.useState(At(u)),d=X(c,2),f=d[0],m=d[1],g=p.useMemo(function(){return{setPortalPlacement:m}},[]),b=p.useState(null),h=X(b,2),v=h[0],F=h[1],O=p.useCallback(function(){if(t){var M=Un(t),w=l==="fixed"?0:window.pageYOffset,P=M[f]+w;(P!==(v==null?void 0:v.offset)||M.left!==(v==null?void 0:v.rect.left)||M.width!==(v==null?void 0:v.rect.width))&&F({offset:P,rect:M})}},[t,l,f,v==null?void 0:v.offset,v==null?void 0:v.rect.left,v==null?void 0:v.rect.width]);Ve(function(){O()},[O]);var D=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),t&&r.current&&(s.current=$n(t,r.current,O,{elementResize:"ResizeObserver"in window}))},[t,O]);Ve(function(){D()},[D]);var I=p.useCallback(function(M){r.current=M,D()},[D]);if(!i&&l!=="fixed"||!v)return null;var A=E("div",y({ref:I},V(C(C({},e),{},{offset:v.offset,position:l,rect:v.rect}),"menuPortal",{"menu-portal":!0}),a),o);return E(Mt.Provider,{value:g},i?vt.createPortal(A,i):A)},fi=function(e){var i=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:i?"none":void 0,position:"relative"}},hi=function(e){var i=e.children,o=e.innerProps,t=e.isDisabled,a=e.isRtl;return E("div",y({},V(e,"container",{"--is-disabled":t,"--is-rtl":a}),o),i)},mi=function(e,i){var o=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return C({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},i?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},vi=function(e){var i=e.children,o=e.innerProps,t=e.isMulti,a=e.hasValue;return E("div",y({},V(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),o),i)},gi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},bi=function(e){var i=e.children,o=e.innerProps;return E("div",y({},V(e,"indicatorsContainer",{indicators:!0}),o),i)},et,xi=["size"],Ei=["innerProps","isRtl","size"],Ci={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Vt=function(e){var i=e.size,o=K(e,xi);return E("svg",y({height:i,width:i,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Ci},o))},He=function(e){return E(Vt,y({size:20},e),E("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Rt=function(e){return E(Vt,y({size:20},e),E("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},kt=function(e,i){var o=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return C({label:"indicatorContainer",display:"flex",transition:"color 150ms"},i?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},Si=kt,yi=function(e){var i=e.children,o=e.innerProps;return E("div",y({},V(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),i||E(Rt,null))},wi=kt,Fi=function(e){var i=e.children,o=e.innerProps;return E("div",y({},V(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),i||E(He,null))},Oi=function(e,i){var o=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return C({label:"indicatorSeparator",alignSelf:"stretch",width:1},i?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Di=function(e){var i=e.innerProps;return E("span",y({},i,V(e,"indicatorSeparator",{"indicator-separator":!0})))},Ii=un(et||(et=Fn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Ai=function(e,i){var o=e.isFocused,t=e.size,a=e.theme,u=a.colors,l=a.spacing.baseUnit;return C({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},i?{}:{color:o?u.neutral60:u.neutral20,padding:l*2})},ye=function(e){var i=e.delay,o=e.offset;return E("span",{css:Le({animation:"".concat(Ii," 1s ease-in-out ").concat(i,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Mi=function(e){var i=e.innerProps,o=e.isRtl,t=e.size,a=t===void 0?4:t,u=K(e,Ei);return E("div",y({},V(C(C({},u),{},{innerProps:i,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),i),E(ye,{delay:0,offset:o}),E(ye,{delay:160,offset:!0}),E(ye,{delay:320,offset:!o}))},Pi=function(e,i){var o=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,l=a.borderRadius,r=a.spacing;return C({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},i?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:t?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},Vi=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return E("div",y({ref:a},V(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":t,"control--menu-is-open":l}),u,{"aria-disabled":o||void 0}),i)},Ri=Vi,ki=["data"],Li=function(e,i){var o=e.theme.spacing;return i?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Ti=function(e){var i=e.children,o=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,l=e.headingProps,r=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return E("div",y({},V(e,"group",{group:!0}),r),E(u,y({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:o}),s),E("div",null,i))},$i=function(e,i){var o=e.theme,t=o.colors,a=o.spacing;return C({label:"group",cursor:"default",display:"block"},i?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Bi=function(e){var i=Ot(e);i.data;var o=K(i,ki);return E("div",y({},V(e,"groupHeading",{"group-heading":!0}),o))},ji=Ti,Hi=["innerRef","isDisabled","isHidden","inputClassName"],Ni=function(e,i){var o=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,l=a.colors;return C(C({visibility:o?"hidden":"visible",transform:t?"translateZ(0)":""},_i),i?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Lt={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},_i={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":C({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Lt)},zi=function(e){return C({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Lt)},Ui=function(e){var i=e.cx,o=e.value,t=Ot(e),a=t.innerRef,u=t.isDisabled,l=t.isHidden,r=t.inputClassName,s=K(t,Hi);return E("div",y({},V(e,"input",{"input-container":!0}),{"data-value":o||""}),E("input",y({className:i({input:!0},r),ref:a,style:zi(l),disabled:u},s)))},Wi=Ui,Gi=function(e,i){var o=e.theme,t=o.spacing,a=o.borderRadius,u=o.colors;return C({label:"multiValue",display:"flex",minWidth:0},i?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Yi=function(e,i){var o=e.theme,t=o.borderRadius,a=o.colors,u=e.cropWithEllipsis;return C({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},i?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},qi=function(e,i){var o=e.theme,t=o.spacing,a=o.borderRadius,u=o.colors,l=e.isFocused;return C({alignItems:"center",display:"flex"},i?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},Tt=function(e){var i=e.children,o=e.innerProps;return E("div",o,i)},Xi=Tt,Ki=Tt;function Zi(n){var e=n.children,i=n.innerProps;return E("div",y({role:"button"},i),e||E(He,{size:14}))}var Ji=function(e){var i=e.children,o=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,l=e.removeProps,r=e.selectProps,s=o.Container,c=o.Label,d=o.Remove;return E(s,{data:t,innerProps:C(C({},V(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:r},E(c,{data:t,innerProps:C({},V(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},i),E(d,{data:t,innerProps:C(C({},V(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(i||"option")},l),selectProps:r}))},Qi=Ji,eo=function(e,i){var o=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,l=u.spacing,r=u.colors;return C({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},i?{}:{backgroundColor:a?r.primary:t?r.primary25:"transparent",color:o?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?r.primary:r.primary50}})},to=function(e){var i=e.children,o=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,l=e.innerProps;return E("div",y({},V(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":o},l),i)},no=to,io=function(e,i){var o=e.theme,t=o.spacing,a=o.colors;return C({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},i?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},oo=function(e){var i=e.children,o=e.innerProps;return E("div",y({},V(e,"placeholder",{placeholder:!0}),o),i)},ro=oo,ao=function(e,i){var o=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return C({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},i?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},uo=function(e){var i=e.children,o=e.isDisabled,t=e.innerProps;return E("div",y({},V(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),t),i)},so=uo,Ne={ClearIndicator:Fi,Control:Ri,DropdownIndicator:yi,DownChevron:Rt,CrossIcon:He,Group:ji,GroupHeading:Bi,IndicatorsContainer:bi,IndicatorSeparator:Di,Input:Wi,LoadingIndicator:Mi,Menu:oi,MenuList:ai,MenuPortal:pi,LoadingMessage:ci,NoOptionsMessage:li,MultiValue:Qi,MultiValueContainer:Xi,MultiValueLabel:Ki,MultiValueRemove:Zi,Option:no,Placeholder:ro,SelectContainer:hi,SingleValue:so,ValueContainer:vi},lo=function(e){return C(C({},Ne),e.components)},tt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function co(n,e){return!!(n===e||tt(n)&&tt(e))}function po(n,e){if(n.length!==e.length)return!1;for(var i=0;i<n.length;i++)if(!co(n[i],e[i]))return!1;return!0}function fo(n,e){e===void 0&&(e=po);var i=null;function o(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(i&&i.lastThis===this&&e(t,i.lastArgs))return i.lastResult;var u=n.apply(this,t);return i={lastResult:u,lastArgs:t,lastThis:this},u}return o.clear=function(){i=null},o}var ho={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},mo=function(e){return E("span",y({css:ho},e))},nt=mo,vo={guidance:function(e){var i=e.isSearchable,o=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(i?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var i=e.action,o=e.label,t=o===void 0?"":o,a=e.labels,u=e.isDisabled;switch(i){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var i=e.context,o=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,l=e.selectValue,r=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(b,h){return b&&b.length?"".concat(b.indexOf(h)+1," of ").concat(b.length):""};if(i==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,o),".");if(i==="menu"&&c){var f=r?" disabled":"",m="".concat(s?" selected":"").concat(f);return"".concat(u).concat(m,", ").concat(d(t,o),".")}return""},onFilter:function(e){var i=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(i?" for search term "+i:"",".")}},go=function(e){var i=e.ariaSelection,o=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,l=e.selectValue,r=e.selectProps,s=e.id,c=e.isAppleDevice,d=r.ariaLiveMessages,f=r.getOptionLabel,m=r.inputValue,g=r.isMulti,b=r.isOptionDisabled,h=r.isSearchable,v=r.menuIsOpen,F=r.options,O=r.screenReaderStatus,D=r.tabSelectsValue,I=r.isLoading,A=r["aria-label"],M=r["aria-live"],w=p.useMemo(function(){return C(C({},vo),d||{})},[d]),P=p.useMemo(function(){var L="";if(i&&w.onChange){var R=i.option,U=i.options,H=i.removedValue,Z=i.removedValues,J=i.value,ue=function(q){return Array.isArray(q)?null:q},k=H||R||ue(J),j=k?f(k):"",Y=U||Z||void 0,Q=Y?Y.map(f):[],N=C({isDisabled:k&&b(k,l),label:j,labels:Q},i);L=w.onChange(N)}return L},[i,w,b,l,f]),T=p.useMemo(function(){var L="",R=o||t,U=!!(o&&l&&l.includes(o));if(R&&w.onFocus){var H={focused:R,label:f(R),isDisabled:b(R,l),isSelected:U,options:a,context:R===o?"menu":"value",selectValue:l,isAppleDevice:c};L=w.onFocus(H)}return L},[o,t,f,b,w,a,l,c]),B=p.useMemo(function(){var L="";if(v&&F.length&&!I&&w.onFilter){var R=O({count:a.length});L=w.onFilter({inputValue:m,resultsMessage:R})}return L},[a,m,v,w,F,O,I]),$=(i==null?void 0:i.action)==="initial-input-focus",W=p.useMemo(function(){var L="";if(w.guidance){var R=t?"value":v?"menu":"input";L=w.guidance({"aria-label":A,context:R,isDisabled:o&&b(o,l),isMulti:g,isSearchable:h,tabSelectsValue:D,isInitialFocus:$})}return L},[A,o,t,g,b,h,v,w,l,D,$]),G=E(p.Fragment,null,E("span",{id:"aria-selection"},P),E("span",{id:"aria-focused"},T),E("span",{id:"aria-results"},B),E("span",{id:"aria-guidance"},W));return E(p.Fragment,null,E(nt,{id:s},$&&G),E(nt,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!$&&G))},bo=go,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],xo=new RegExp("["+Re.map(function(n){return n.letters}).join("")+"]","g"),$t={};for(var we=0;we<Re.length;we++)for(var Fe=Re[we],Oe=0;Oe<Fe.letters.length;Oe++)$t[Fe.letters[Oe]]=Fe.base;var Bt=function(e){return e.replace(xo,function(i){return $t[i]})},Eo=fo(Bt),it=function(e){return e.replace(/^\s+|\s+$/g,"")},Co=function(e){return"".concat(e.label," ").concat(e.value)},So=function(e){return function(i,o){if(i.data.__isNew__)return!0;var t=C({ignoreCase:!0,ignoreAccents:!0,stringify:Co,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,l=t.stringify,r=t.trim,s=t.matchFrom,c=r?it(o):o,d=r?it(l(i)):l(i);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=Eo(c),d=Bt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},yo=["innerRef"];function wo(n){var e=n.innerRef,i=K(n,yo),o=Kn(i,"onExited","in","enter","exit","appear");return E("input",y({ref:e},o,{css:Le({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Fo=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Oo(n){var e=n.isEnabled,i=n.onBottomArrive,o=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),r=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(h,v){if(s.current!==null){var F=s.current,O=F.scrollTop,D=F.scrollHeight,I=F.clientHeight,A=s.current,M=v>0,w=D-I-O,P=!1;w>v&&u.current&&(o&&o(h),u.current=!1),M&&l.current&&(a&&a(h),l.current=!1),M&&v>w?(i&&!u.current&&i(h),A.scrollTop=D,P=!0,u.current=!0):!M&&-v>O&&(t&&!l.current&&t(h),A.scrollTop=0,P=!0,l.current=!0),P&&Fo(h)}},[i,o,t,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),f=p.useCallback(function(h){r.current=h.changedTouches[0].clientY},[]),m=p.useCallback(function(h){var v=r.current-h.changedTouches[0].clientY;c(h,v)},[c]),g=p.useCallback(function(h){if(h){var v=Yn?{passive:!1}:!1;h.addEventListener("wheel",d,v),h.addEventListener("touchstart",f,v),h.addEventListener("touchmove",m,v)}},[m,f,d]),b=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",f,!1),h.removeEventListener("touchmove",m,!1))},[m,f,d]);return p.useEffect(function(){if(e){var h=s.current;return g(h),function(){b(h)}}},[e,g,b]),function(h){s.current=h}}var ot=["boxSizing","height","overflow","paddingRight","position"],rt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function at(n){n.preventDefault()}function ut(n){n.stopPropagation()}function st(){var n=this.scrollTop,e=this.scrollHeight,i=n+this.offsetHeight;n===0?this.scrollTop=1:i===e&&(this.scrollTop=n-1)}function lt(){return"ontouchstart"in window||navigator.maxTouchPoints}var ct=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,ie={capture:!1,passive:!1};function Do(n){var e=n.isEnabled,i=n.accountForScrollbars,o=i===void 0?!0:i,t=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(r){if(ct){var s=document.body,c=s&&s.style;if(o&&ot.forEach(function(g){var b=c&&c[g];t.current[g]=b}),o&&re<1){var d=parseInt(t.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,m=window.innerWidth-f+d||0;Object.keys(rt).forEach(function(g){var b=rt[g];c&&(c[g]=b)}),c&&(c.paddingRight="".concat(m,"px"))}s&&lt()&&(s.addEventListener("touchmove",at,ie),r&&(r.addEventListener("touchstart",st,ie),r.addEventListener("touchmove",ut,ie))),re+=1}},[o]),l=p.useCallback(function(r){if(ct){var s=document.body,c=s&&s.style;re=Math.max(re-1,0),o&&re<1&&ot.forEach(function(d){var f=t.current[d];c&&(c[d]=f)}),s&&lt()&&(s.removeEventListener("touchmove",at,ie),r&&(r.removeEventListener("touchstart",st,ie),r.removeEventListener("touchmove",ut,ie)))}},[o]);return p.useEffect(function(){if(e){var r=a.current;return u(r),function(){l(r)}}},[e,u,l]),function(r){a.current=r}}var Io=function(e){var i=e.target;return i.ownerDocument.activeElement&&i.ownerDocument.activeElement.blur()},Ao={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Mo(n){var e=n.children,i=n.lockEnabled,o=n.captureEnabled,t=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,s=Oo({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:r}),c=Do({isEnabled:i}),d=function(m){s(m),c(m)};return E(p.Fragment,null,i&&E("div",{onClick:Io,css:Ao}),e(d))}var Po={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Vo=function(e){var i=e.name,o=e.onFocus;return E("input",{required:!0,name:i,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Po,value:"",onChange:function(){}})},Ro=Vo;function _e(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function ko(){return _e(/^iPhone/i)}function jt(){return _e(/^Mac/i)}function Lo(){return _e(/^iPad/i)||jt()&&navigator.maxTouchPoints>1}function To(){return ko()||Lo()}function $o(){return jt()||To()}var Bo=function(e){return e.label},jo=function(e){return e.label},Ho=function(e){return e.value},No=function(e){return!!e.isDisabled},_o={clearIndicator:wi,container:fi,control:Pi,dropdownIndicator:Si,group:Li,groupHeading:$i,indicatorsContainer:gi,indicatorSeparator:Oi,input:Ni,loadingIndicator:Ai,loadingMessage:si,menu:ti,menuList:ri,menuPortal:di,multiValue:Gi,multiValueLabel:Yi,multiValueRemove:qi,noOptionsMessage:ui,option:eo,placeholder:io,singleValue:ao,valueContainer:mi},zo={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Uo=4,Ht=4,Wo=38,Go=Ht*2,Yo={baseUnit:Ht,controlHeight:Wo,menuGutter:Go},De={borderRadius:Uo,colors:zo,spacing:Yo},qo={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Qe(),captureMenuScroll:!Qe(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:So(),formatGroupLabel:Bo,getOptionLabel:jo,getOptionValue:Ho,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:No,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Wn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var i=e.count;return"".concat(i," result").concat(i!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function dt(n,e,i,o){var t=zt(n,e,i),a=Ut(n,e,i),u=_t(n,e),l=Ee(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:l,index:o}}function fe(n,e){return n.options.map(function(i,o){if("options"in i){var t=i.options.map(function(u,l){return dt(n,u,e,l)}).filter(function(u){return ft(n,u)});return t.length>0?{type:"group",data:i,options:t,index:o}:void 0}var a=dt(n,i,e,o);return ft(n,a)?a:void 0}).filter(qn)}function Nt(n){return n.reduce(function(e,i){return i.type==="group"?e.push.apply(e,Te(i.options.map(function(o){return o.data}))):e.push(i.data),e},[])}function pt(n,e){return n.reduce(function(i,o){return o.type==="group"?i.push.apply(i,Te(o.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(o.index,"-").concat(t.index)}}))):i.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),i},[])}function Xo(n,e){return Nt(fe(n,e))}function ft(n,e){var i=n.inputValue,o=i===void 0?"":i,t=e.data,a=e.isSelected,u=e.label,l=e.value;return(!Gt(n)||!a)&&Wt(n,{label:u,value:l,data:t},o)}function Ko(n,e){var i=n.focusedValue,o=n.selectValue,t=o.indexOf(i);if(t>-1){var a=e.indexOf(i);if(a>-1)return i;if(t<e.length)return e[t]}return null}function Zo(n,e){var i=n.focusedOption;return i&&e.indexOf(i)>-1?i:e[0]}var Ie=function(e,i){var o,t=(o=e.find(function(a){return a.data===i}))===null||o===void 0?void 0:o.id;return t||null},_t=function(e,i){return e.getOptionLabel(i)},Ee=function(e,i){return e.getOptionValue(i)};function zt(n,e,i){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,i):!1}function Ut(n,e,i){if(i.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,i);var o=Ee(n,e);return i.some(function(t){return Ee(n,t)===o})}function Wt(n,e,i){return n.filterOption?n.filterOption(e,i):!0}var Gt=function(e){var i=e.hideSelectedOptions,o=e.isMulti;return i===void 0?o:i},Jo=1,Yt=function(n){gn(i,n);var e=Cn(i);function i(o){var t;if(mn(this,i),t=e.call(this,o),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=$o(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,s){var c=t.props,d=c.onChange,f=c.name;s.name=f,t.ariaOnChange(r,s),d(r,s)},t.setValue=function(r,s,c){var d=t.props,f=d.closeMenuOnSelect,m=d.isMulti,g=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:g}),f&&(t.setState({inputIsHiddenAfterUpdate:!m}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:s,option:c})},t.selectOption=function(r){var s=t.props,c=s.blurInputOnSelect,d=s.isMulti,f=s.name,m=t.state.selectValue,g=d&&t.isOptionSelected(r,m),b=t.isOptionDisabled(r,m);if(g){var h=t.getOptionValue(r);t.setValue(m.filter(function(v){return t.getOptionValue(v)!==h}),"deselect-option",r)}else if(!b)d?t.setValue([].concat(Te(m),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:f});return}c&&t.blurInput()},t.removeValue=function(r){var s=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(r),f=c.filter(function(g){return t.getOptionValue(g)!==d}),m=pe(s,f,f[0]||null);t.onChange(m,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(pe(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,s=t.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),f=pe(r,d,d[0]||null);t.onChange(f,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(r){return Ie(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return pt(fe(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return Hn.apply(void 0,[t.props.classNamePrefix].concat(s))},t.getOptionLabel=function(r){return _t(t.props,r)},t.getOptionValue=function(r){return Ee(t.props,r)},t.getStyles=function(r,s){var c=t.props.unstyled,d=_o[r](s,c);d.boxSizing="border-box";var f=t.props.styles[r];return f?f(d,s):d},t.getClassNames=function(r,s){var c,d;return(c=(d=t.props.classNames)[r])===null||c===void 0?void 0:c.call(d,s)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return lo(t.props)},t.buildCategorizedOptions=function(){return fe(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Nt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,s){t.setState({ariaSelection:C({value:r},s)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var s=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():s&&t.openMenu("first"):(s&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var s=t.props,c=s.isMulti,d=s.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&Ce(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var s=r.touches,c=s&&s.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var s=r.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),f=Math.abs(c.clientY-t.initialTouchY),m=5;t.userIsDragging=d>m||f>m}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var s=t.props.inputValue,c=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:s}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var s=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:s}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var s=t.getFocusableOptions(),c=s.indexOf(r);t.setState({focusedOption:r,focusedOptionId:c>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return Gt(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var s=t.props,c=s.isMulti,d=s.backspaceRemovesValue,f=s.escapeClearsValue,m=s.inputValue,g=s.isClearable,b=s.isDisabled,h=s.menuIsOpen,v=s.onKeyDown,F=s.tabSelectsValue,O=s.openMenuOnFocus,D=t.state,I=D.focusedOption,A=D.focusedValue,M=D.selectValue;if(!b&&!(typeof v=="function"&&(v(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||m)return;t.focusValue("previous");break;case"ArrowRight":if(!c||m)return;t.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(A)t.removeValue(A);else{if(!d)return;c?t.popValue():g&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!h||!F||!I||O&&t.isOptionSelected(I,M))return;t.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(h){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":h?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:m}),t.onMenuClose()):g&&f&&t.clearValue();break;case" ":if(m)return;if(!h){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":h?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":h?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!h)return;t.focusOption("pageup");break;case"PageDown":if(!h)return;t.focusOption("pagedown");break;case"Home":if(!h)return;t.focusOption("first");break;case"End":if(!h)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Jo),t.state.selectValue=Ze(o.value),o.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),l=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[l],t.state.focusedOptionId=Ie(a,u[l])}return t}return vn(i,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Je(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!u&&t.isDisabled||r&&l&&!t.menuIsOpen)&&this.focusInput(),r&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Je(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,l=u.selectValue,r=u.isFocused,s=this.buildFocusableOptions(),c=t==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=u.indexOf(l);l||(r=-1);var s=u.length-1,c=-1;if(u.length){switch(t){case"previous":r===0?c=0:r===-1?c=s:c=r-1;break;case"next":r>-1&&r<s&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,s=l.indexOf(u);u||(s=-1),t==="up"?r=s>0?s-1:l.length-1:t==="down"?r=(s+1)%l.length:t==="pageup"?(r=s-a,r<0&&(r=0)):t==="pagedown"?(r=s+a,r>l.length-1&&(r=l.length-1)):t==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(De):C(C({},De),this.props.theme):De}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,r=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,m=d.isRtl,g=d.options,b=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:l,getValue:r,hasValue:b,isMulti:f,isRtl:m,options:g,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return zt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return Ut(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Wt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,l=t.inputId,r=t.inputValue,s=t.tabIndex,c=t.form,d=t.menuIsOpen,f=t.required,m=this.getComponents(),g=m.Input,b=this.state,h=b.inputIsHidden,v=b.ariaSelection,F=this.commonProps,O=l||this.getElementId("input"),D=C(C(C({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(v==null?void 0:v.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(g,y({},F,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:O,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:r},D)):p.createElement(wo,y({id:O,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:be,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},D))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,f=this.commonProps,m=this.props,g=m.controlShouldRenderValue,b=m.isDisabled,h=m.isMulti,v=m.inputValue,F=m.placeholder,O=this.state,D=O.selectValue,I=O.focusedValue,A=O.isFocused;if(!this.hasValue()||!g)return v?null:p.createElement(d,y({},f,{key:"placeholder",isDisabled:b,isFocused:A,innerProps:{id:this.getElementId("placeholder")}}),F);if(h)return D.map(function(w,P){var T=w===I,B="".concat(t.getOptionLabel(w),"-").concat(t.getOptionValue(w));return p.createElement(u,y({},f,{components:{Container:l,Label:r,Remove:s},isFocused:T,isDisabled:b,key:B,index:P,removeProps:{onClick:function(){return t.removeValue(w)},onTouchEnd:function(){return t.removeValue(w)},onMouseDown:function(W){W.preventDefault()}},data:w}),t.formatOptionLabel(w,"value"))});if(v)return null;var M=D[0];return p.createElement(c,y({},f,{data:M,isDisabled:b}),this.formatOptionLabel(M,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,l=this.props,r=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,r=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,y({},l,{isDisabled:r,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,y({},u,{innerProps:s,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,r=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,f=a.NoOptionsMessage,m=a.Option,g=this.commonProps,b=this.state.focusedOption,h=this.props,v=h.captureMenuScroll,F=h.inputValue,O=h.isLoading,D=h.loadingMessage,I=h.minMenuHeight,A=h.maxMenuHeight,M=h.menuIsOpen,w=h.menuPlacement,P=h.menuPosition,T=h.menuPortalTarget,B=h.menuShouldBlockScroll,$=h.menuShouldScrollIntoView,W=h.noOptionsMessage,G=h.onMenuScrollToTop,L=h.onMenuScrollToBottom;if(!M)return null;var R=function(j,Y){var Q=j.type,N=j.data,ee=j.isDisabled,q=j.isSelected,se=j.label,Zt=j.value,Ue=b===N,We=ee?void 0:function(){return t.onOptionHover(N)},Jt=ee?void 0:function(){return t.selectOption(N)},Ge="".concat(t.getElementId("option"),"-").concat(Y),Qt={id:Ge,onClick:Jt,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:q};return p.createElement(m,y({},g,{innerProps:Qt,data:N,isDisabled:ee,isSelected:q,key:Ge,label:se,type:Q,value:Zt,isFocused:Ue,innerRef:Ue?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(j.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(k){if(k.type==="group"){var j=k.data,Y=k.options,Q=k.index,N="".concat(t.getElementId("group"),"-").concat(Q),ee="".concat(N,"-heading");return p.createElement(u,y({},g,{key:N,data:j,options:Y,Heading:l,headingProps:{id:ee,data:k.data},label:t.formatGroupLabel(k.data)}),k.options.map(function(q){return R(q,"".concat(Q,"-").concat(q.index))}))}else if(k.type==="option")return R(k,"".concat(k.index))});else if(O){var H=D({inputValue:F});if(H===null)return null;U=p.createElement(d,g,H)}else{var Z=W({inputValue:F});if(Z===null)return null;U=p.createElement(f,g,Z)}var J={minMenuHeight:I,maxMenuHeight:A,menuPlacement:w,menuPosition:P,menuShouldScrollIntoView:$},ue=p.createElement(ni,y({},g,J),function(k){var j=k.ref,Y=k.placerProps,Q=Y.placement,N=Y.maxHeight;return p.createElement(r,y({},g,J,{innerRef:j,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:O,placement:Q}),p.createElement(Mo,{captureEnabled:v,onTopArrive:G,onBottomArrive:L,lockEnabled:B},function(ee){return p.createElement(s,y({},g,{innerRef:function(se){t.getMenuListRef(se),ee(se)},innerProps:{role:"listbox","aria-multiselectable":g.isMulti,id:t.getElementId("listbox")},isLoading:O,maxHeight:N,focusedOption:b}),U)}))});return T||P==="fixed"?p.createElement(c,y({},g,{appendTo:T,controlElement:this.controlRef,menuPlacement:w,menuPosition:P}),ue):ue}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,l=a.isDisabled,r=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Ro,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(r)if(u){var f=d.map(function(b){return t.getOptionValue(b)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:f})}else{var m=d.length>0?d.map(function(b,h){return p.createElement("input",{key:"i-".concat(h),name:s,type:"hidden",value:t.getOptionValue(b)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,m)}else{var g=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:g})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(bo,y({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:r,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,l=t.SelectContainer,r=t.ValueContainer,s=this.props,c=s.className,d=s.id,f=s.isDisabled,m=s.menuIsOpen,g=this.state.isFocused,b=this.commonProps=this.getCommonProps();return p.createElement(l,y({},b,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:g}),this.renderLiveRegion(),p.createElement(a,y({},b,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:g,menuIsOpen:m}),p.createElement(r,y({},b,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,y({},b,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,f=a.instancePrefix,m=t.options,g=t.value,b=t.menuIsOpen,h=t.inputValue,v=t.isMulti,F=Ze(g),O={};if(u&&(g!==u.value||m!==u.options||b!==u.menuIsOpen||h!==u.inputValue)){var D=b?Xo(t,F):[],I=b?pt(fe(t,F),"".concat(f,"-option")):[],A=l?Ko(a,F):null,M=Zo(a,D),w=Ie(I,M);O={selectValue:F,focusedOption:M,focusedOptionId:w,focusableOptionsWithIds:I,focusedValue:A,clearFocusValueOnUpdate:!1}}var P=r!=null&&t!==u?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},T=s,B=c&&d;return c&&!B&&(T={value:pe(v,F,F[0]||null),options:F,action:"initial-input-focus"},B=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(T=null),C(C(C({},O),P),{},{prevProps:t,ariaSelection:T,prevWasFocused:B})}}]),i}(p.Component);Yt.defaultProps=qo;var Qo=p.forwardRef(function(n,e){var i=hn(n);return p.createElement(Yt,y({ref:e},i))}),qt=Qo;const Xt=n=>p.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M1.5 1.75L6 6.25L10.5 1.75",stroke:"#EFEDE8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ht=[{value:"Alcoholic drinks",label:"Alcoholic drinks"},{value:"Berries",label:"Berries"},{value:"Cereals",label:"Cereals"},{value:"Dairy",label:"Dairy"},{value:"Dried fruits",label:"Dried fruits"},{value:"Eggs",label:"Eggs"},{value:"Fish",label:"Fish"},{value:"Flour",label:"Flour"},{value:"Meat",label:"Meat"}],er=n=>x.jsx(Ne.DropdownIndicator,{...n,children:x.jsx(Xt,{})}),tr={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),control:(n,e)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${S.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${S.orangeColor}`:0,transition:`all ${S.animation}`,"&:hover":{borderColor:`${S.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),dropdownIndicator:(n,e)=>({...n,transition:`all ${S.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${S.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${S.successColor}`:`${S.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${S.orangeColor}`,color:`${S.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.10)",width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})},nr=({dataFunc:n,currentValue:e})=>x.jsx(qt,{onChange:n,options:ht,components:{DropdownIndicator:er},styles:tr,value:e===""?{value:"Categories",label:"Categories"}:ht.find(i=>i.value===e)}),mt=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],ir=n=>x.jsx(Ne.DropdownIndicator,{...n,children:x.jsx(Xt,{})}),or={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,e)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${S.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${S.orangeColor}`:0,transition:`all ${S.animation}`,"&:hover":{borderColor:`${S.orangeColor}`},"@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,e)=>({...n,transition:`all ${S.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${S.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${S.successColor}`:`${S.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${S.orangeColor}`,color:`${S.whiteColor}`}})},rr=({dataFunc:n,currentValue:e})=>x.jsx(qt,{onChange:n,options:mt,components:{DropdownIndicator:ir},styles:or,value:mt.find(i=>i.value===e),defaultValue:e}),ar=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Kt=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M13.5 4.5L4.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M4.5 4.5L13.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ur=te(ar)`
  width: 18px;
  height: 18px;
`,sr=te(Kt)`
  width: 20px;
  height: 20px;
`,lr=te.form`
  margin-top: 40px;
  position: relative;
  #search {
    max-width: 335px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${S.greyTextColor};
    padding: 14px;
    background-color: inherit;
    outline: none;

    color: ${S.whiteColor};
    font-family: Roboto;
    line-height: 1.29;
    transition: all ${S.animation};
    &::placeholder {
      color: ${S.whiteColor};
    }

    &:hover,
    &:focus {
      border-color: ${S.orangeColor};
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
    color: ${S.greyTextColor};
    font-family: Roboto;
    line-height: 1.29;
    position: absolute;
    right: 0px;
    top: -20px;
  }
`,cr=()=>{const[n,e]=p.useState(!1),[i,o]=gt(),t=p.useMemo(()=>Object.fromEntries([...i]),[i]),{search:a,category:u,recommended:l}=t;p.useEffect(()=>{},[a,u,l,o]);const r=bt({initialValues:{search:a??"",category:u??"",recommended:l??"All"},onSubmit:c=>{const{search:d}=c;d&&o(f=>{const m=new URLSearchParams(f);return m.set("q",d),m})}}),s=c=>{e(!0),r.handleChange(c)};return x.jsxs(lr,{onSubmit:r.handleSubmit,children:[x.jsxs("div",{className:"input-search-block",children:[x.jsx("input",{id:"search",name:"search",type:"text",onChange:s,value:r.values.search,placeholder:"Search"}),x.jsxs("div",{className:"svgs-search-block",children:[n&&x.jsx("button",{type:"button",onClick:()=>{e(!1),o(c=>{const d=new URLSearchParams(c);return d.delete("search"),d}),r.values.search=""},children:x.jsx(sr,{})}),x.jsx("button",{type:"submit",children:x.jsx(ur,{})})]})]}),x.jsxs("div",{className:"selects-block",children:[x.jsx(nr,{name:"category",dataFunc:c=>{r.setFieldValue("category",c.value),o(d=>{const f=new URLSearchParams(d);return f.set("category",c.value),f})},currentValue:r.values.category}),x.jsx(rr,{name:"recommended",currentValue:r.values.recommended,dataFunc:c=>{r.setFieldValue("recommended",c.value),o(d=>{const f=new URLSearchParams(d);return f.set("recommended",c.value),f})}})]}),x.jsx("p",{className:"filter-1440",children:"Filter"})]})},dr=te.ul`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
margin-top: 40px;

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
`,pr=te.div`
margin-top: 64px;
max-width: 335px;

.above-text {
margin-bottom: 16px;
color: ${S.greyTextColor};
font-family: Roboto;
font-size: 14px;
line-height: 1.29;

}

.above-text-span {
color: ${S.orangeColor};
}

.below-text {
color: ${S.orangeColor};
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
`,fr=()=>x.jsxs(pr,{children:[x.jsxs("p",{className:"above-text",children:[x.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),x.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),hr=n=>p.createElement("svg",{width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M7.5 14 14 7.5m0 0L7.5 1M14 7.5H1",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),mr=n=>p.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),p.createElement("path",{d:"M18.823 8.725a.593.593 0 0 0-.833-.074l-1.641 1.378-.755-1.87a.58.58 0 0 0-.114-.18 1.606 1.606 0 0 0-.791-.809 1.628 1.628 0 0 0-.491-.13c-.037-.02-.07-.045-.111-.058l-2.888-.805a.594.594 0 0 0-.458.063.578.578 0 0 0-.36.336L9.294 9.372a.594.594 0 0 0 .338.767.593.593 0 0 0 .766-.34l.918-2.36 1.315.365c-.032.052-.066.101-.092.156l-1.687 3.655c-.024.054-.037.108-.054.164l-2.05 3.435-3.428 1.147a.876.876 0 0 0 1.04 1.41l3.51-1.209a.841.841 0 0 0 .243-.29c.045-.047.095-.084.129-.142l1.221-2.048 2.169 1.848-2.32 2.614a.875.875 0 1 0 1.31 1.16l2.896-3.261c.09-.101.144-.217.18-.338.022-.066.022-.135.027-.203 0-.035.013-.066.01-.098a.858.858 0 0 0-.3-.637l-1.995-1.701c.143-.137.266-.3.354-.492l1.293-2.8.414 1.104c.017.098.05.194.12.274a.57.57 0 0 0 .226.16l.03.007a.564.564 0 0 0 .367.018h.003c.018-.005.036-.002.054-.01a.585.585 0 0 0 .233-.17L18.89 9.56c.25-.21.145-.583-.066-.834ZM15.846 7.301a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z",fill:"#EFEDE8"})),ze=z.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,vr=z.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${S.animation};
  @media screen and (min-width: 768px) {
    ${ze}:hover & {
      color: ${S.successColor};
      transform: scale(1.25);
    }
  }
`,gr=en`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,br=z(hr)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    ${ze}:hover & {
      animation: ${gr} 1000ms linear infinite;
      > path {
        stroke: ${S.successColor};
      }
    }
  }
`,xr=z(mr)`
  width: 24px;
  height: 24px;
`,Er=z.li`
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
    color: ${S.whiteColor};
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
    color: ${S.whiteColor};
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
`,Cr=z.span`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${S.whiteColor};
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
`,Sr="1",yr=({data:n,handleOpenModal:e})=>{const{calories:i,category:o,title:t,weight:a,groupBloodNotAllowed:u,_id:l}=n,r=u[Sr];return x.jsxs(Er,{children:[x.jsx("span",{className:"diet-span",children:"diet"}),x.jsxs("div",{className:"recommended-addbtn-div",children:[x.jsx(Cr,{className:"recommended-span",$color:r,children:r?"Recommended":"Not recommended"}),x.jsxs(ze,{onClick:()=>e({calories:i,title:t,weight:a,_id:l}),type:"button",className:"add-btn",children:[x.jsx(vr,{className:"add-btn-span",children:"Add"}),x.jsx(br,{})]})]}),x.jsxs("div",{className:"product-info-div",children:[x.jsxs("div",{className:"title-svg-div",children:[x.jsx(xr,{}),x.jsxs("p",{className:"product-info-div-title",children:[" ",t]})]}),x.jsxs("div",{className:"detailed-info-div",children:[x.jsxs("p",{className:"detailed-name",children:["Calories: ",x.jsx("span",{className:"detailed-data",children:i})]}),x.jsxs("p",{className:"detailed-name",children:["Category: ",x.jsx("span",{className:"detailed-data",children:o})]}),x.jsxs("p",{className:"detailed-name",children:["Weight: ",x.jsx("span",{className:"detailed-data",children:a})]})]})]})]})},ke=z.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,wr=z(Kt)`
  transition:
    stroke ${S.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  > path {
    stroke: white;
  }
  @media screen and (min-width: 768px) {
    ${ke}:hover & {
      > path {
        stroke: ${S.orangeColor};
      }
    }
    ${ke}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,Fr=z.div`
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
`,Or=z.div`
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
`,Dr=z.form`
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
    border: 1px solid ${S.orangeColor};
    background-color: inherit;
    padding-left: 8px;
    padding-right: 8px;
    color: ${S.greyTextColor};
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
    border: 1px solid ${S.orangeColor};
    background-color: inherit;
    padding-left: 8px;
    padding-right: 48px;
    color: ${S.whiteColor};
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
    color: ${S.whiteColor};
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
    background: ${S.orangeColor};

    color: ${S.whiteColor};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;
    transition: background 250ms linear;
    &:hover {
      background: ${S.orange2Color};
    }
    &:focus {
      background: ${S.orange2Color};
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
    color: ${S.whiteColor};
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.13;

    transition: background ${S.animation};
    &:hover {
      background: ${S.orange2Color};
    }
    &:focus {
      background: ${S.orange2Color};
    }
  }
`;function Ir(){const n=new Date,e=n.getDate(),i=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear();return`${e}/${i}/${o}`}const Ar=({data:n,closeModal:e})=>{const{title:i,weight:o,calories:t,_id:a}=n,u=bt({initialValues:{title:i,weight:o,calories:t},onSubmit:r=>{const{weight:s,calories:c}=r,d={_id:a,date:Ir(),weight:s,calories:c};console.log(d)}}),l=r=>{if(!(isNaN(r.target.value)&&r.target.value!=="")&&(r.target.value===""&&u.setValues({calories:""}),u.handleChange(r),r.target.value>0)){const s=parseFloat(Number(r.target.value)),c=s*t/100;u.setValues({...u.values,weight:s,calories:c})}};return x.jsxs(Dr,{onSubmit:u.handleSubmit,children:[x.jsxs("div",{className:"inputs-block",children:[x.jsx("input",{id:"title",name:"title",type:"text",readOnly:!0,value:i,disabled:!0,className:"title-input"}),x.jsxs("div",{className:"weight-input-block",children:[x.jsx("input",{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:l,value:u.values.weight,className:"weight-input"}),x.jsx("span",{className:"grams-span",children:"grams"})]})]}),x.jsxs("div",{className:"calories-block",children:[x.jsx("span",{className:"calories-span",children:"Calories: "}),x.jsx("input",{id:"calories",name:"calories",type:"number",readOnly:!0,disabled:!0,value:u.values.calories,className:"calories-input"})]}),x.jsxs("div",{className:"button-block",children:[x.jsx("button",{className:"add-button",type:"submit",children:"Add to diary"}),x.jsx("button",{onClick:e,className:"cancel-button",type:"button",children:"Cancel"})]})]})},Mr=document.querySelector("#add-product-modal"),Pr=({data:n,closeModal:e,showModal:i})=>{p.useEffect(()=>{if(!i)return;const t=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e,i]);const o=t=>{t.target===t.currentTarget&&e()};return vt.createPortal(x.jsx(Fr,{onClick:o,className:i?"":"hide-hidden",children:x.jsxs(Or,{className:"modal",children:[x.jsx(ke,{onClick:e,type:"button",children:x.jsx(wr,{})}),x.jsx(Ar,{data:n,closeModal:e})]})}),Mr)},Vr="https://power-4vwy.onrender.com/api/v1/",oe={bloodType:"1"},Rr=()=>{const[n,e]=p.useState([]),[i]=gt(),[o,t]=p.useState(!1),[a,u]=p.useState(null);p.useEffect(()=>{o?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},[o]);const l=m=>{u(m),t(!0)},r=()=>{t(!1)},s=p.useMemo(()=>Object.fromEntries([...i]),[i]),{search:c,category:d,recommended:f}=s;return c?oe.q=c:delete oe.q,d&&(oe.cat=d.toLowerCase()),f&&f!=="All"?oe.rec=f:delete oe.rec,p.useEffect(()=>{(async()=>{try{const{data:g}=await tn.get(`${Vr}products`,{params:oe});e(g)}catch(g){console.log(g.message),e([])}})()},[d,f,c]),n.length>0?x.jsxs(x.Fragment,{children:[x.jsx(dr,{children:n.map(m=>x.jsx(yr,{handleOpenModal:l,data:m},m._id))}),x.jsx(Pr,{showModal:o,closeModal:r,data:a})]}):x.jsx(fr,{})},kr="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",Lr="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",Tr=te.section`
@media screen and (min-width: 768px) {
  overflow-y: hidden;
}

@media screen and (min-width: 1440px) {
  height: 90vh;
 background: url(${kr});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${Lr});
    }
}
`,$r=te.div`
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
`,Br=te.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,zr=()=>x.jsx(Tr,{children:x.jsxs($r,{children:[x.jsxs("div",{className:"title-form-block",children:[x.jsx(Br,{children:"Products"}),x.jsx(cr,{})]}),x.jsx(Rr,{})]})});export{zr as default};
