import{a as p,b as jt,j as C,d as Ht,u as Te,f as Oe,s as G,h as Pn,i as kn,N as Vn,k as tt,m as be,e as R,n as Ln,o as Rn}from"./index-643e852d.js";import{u as _t}from"./formik.esm-be3ec191.js";import{e as pe,a as zt,i as Tn,k as $n,j as O,_ as Bn,h as Ut,b as Nn,c as jn,d as Hn,g as _n}from"./defineProperty-e3ecab2c.js";import{_ as P,n as le}from"./emotion-styled.browser.esm-899a0bfa.js";import{s as S}from"./styleGuide-7c616dce.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";function mt(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),o.push.apply(o,i)}return o}function D(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?mt(Object(o),!0).forEach(function(i){pe(n,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):mt(Object(o)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(o,i))})}return n}function zn(n){if(Array.isArray(n))return n}function Un(n,e){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var i,t,a,s,l=[],r=!0,u=!1;try{if(a=(o=o.call(n)).next,e===0){if(Object(o)!==o)return;r=!1}else for(;!(r=(i=a.call(o)).done)&&(l.push(i.value),l.length!==e);r=!0);}catch(c){u=!0,t=c}finally{try{if(!r&&o.return!=null&&(s=o.return(),Object(s)!==s))return}finally{if(u)throw t}}return l}}function Wn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(n,e){return zn(n)||Un(n,e)||zt(n,e)||Wn()}function Yn(n,e){if(n==null)return{};var o={},i=Object.keys(n),t,a;for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&(o[t]=n[t]);return o}function re(n,e){if(n==null)return{};var o=Yn(n,e),i,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}var Gn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function qn(n){var e=n.defaultInputValue,o=e===void 0?"":e,i=n.defaultMenuIsOpen,t=i===void 0?!1:i,a=n.defaultValue,s=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,u=n.onChange,c=n.onInputChange,d=n.onMenuClose,g=n.onMenuOpen,v=n.value,b=re(n,Gn),h=p.useState(l!==void 0?l:o),f=ie(h,2),m=f[0],E=f[1],x=p.useState(r!==void 0?r:t),w=ie(x,2),F=w[0],I=w[1],A=p.useState(v!==void 0?v:s),y=ie(A,2),M=y[0],k=y[1],N=p.useCallback(function(_,K){typeof u=="function"&&u(_,K),k(_)},[u]),$=p.useCallback(function(_,K){var Z;typeof c=="function"&&(Z=c(_,K)),E(Z!==void 0?Z:_)},[c]),X=p.useCallback(function(){typeof g=="function"&&g(),I(!0)},[g]),q=p.useCallback(function(){typeof d=="function"&&d(),I(!1)},[d]),B=l!==void 0?l:m,j=r!==void 0?r:F,U=v!==void 0?v:M;return D(D({},b),{},{inputValue:B,menuIsOpen:j,onChange:N,onInputChange:$,onMenuClose:q,onMenuOpen:X,value:U})}function Xn(n){if(Array.isArray(n))return Tn(n)}function Kn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Zn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nt(n){return Xn(n)||Kn(n)||zt(n)||Zn()}function Qn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Jn=Math.min,eo=Math.max,Ae=Math.round,xe=Math.floor,Me=n=>({x:n,y:n});function to(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Wt(n){return Gt(n)?(n.nodeName||"").toLowerCase():"#document"}function oe(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Yt(n){var e;return(e=(Gt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Gt(n){return n instanceof Node||n instanceof oe(n).Node}function qe(n){return n instanceof Element||n instanceof oe(n).Element}function ot(n){return n instanceof HTMLElement||n instanceof oe(n).HTMLElement}function gt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof oe(n).ShadowRoot}function qt(n){const{overflow:e,overflowX:o,overflowY:i,display:t}=it(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(t)}function no(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function oo(n){return["html","body","#document"].includes(Wt(n))}function it(n){return oe(n).getComputedStyle(n)}function io(n){if(Wt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||gt(n)&&n.host||Yt(n);return gt(e)?e.host:e}function Xt(n){const e=io(n);return oo(e)?n.ownerDocument?n.ownerDocument.body:n.body:ot(e)&&qt(e)?e:Xt(e)}function Pe(n,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const t=Xt(n),a=t===((i=n.ownerDocument)==null?void 0:i.body),s=oe(t);return a?e.concat(s,s.visualViewport||[],qt(t)?t:[],s.frameElement&&o?Pe(s.frameElement):[]):e.concat(t,Pe(t,[],o))}function ro(n){const e=it(n);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const t=ot(n),a=t?n.offsetWidth:o,s=t?n.offsetHeight:i,l=Ae(o)!==a||Ae(i)!==s;return l&&(o=a,i=s),{width:o,height:i,$:l}}function rt(n){return qe(n)?n:n.contextElement}function je(n){const e=rt(n);if(!ot(e))return Me(1);const o=e.getBoundingClientRect(),{width:i,height:t,$:a}=ro(e);let s=(a?Ae(o.width):o.width)/i,l=(a?Ae(o.height):o.height)/t;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ao=Me(0);function so(n){const e=oe(n);return!no()||!e.visualViewport?ao:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function uo(n,e,o){return e===void 0&&(e=!1),!o||e&&o!==oe(n)?!1:e}function vt(n,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const t=n.getBoundingClientRect(),a=rt(n);let s=Me(1);e&&(i?qe(i)&&(s=je(i)):s=je(n));const l=uo(a,o,i)?so(a):Me(0);let r=(t.left+l.x)/s.x,u=(t.top+l.y)/s.y,c=t.width/s.x,d=t.height/s.y;if(a){const g=oe(a),v=i&&qe(i)?oe(i):i;let b=g.frameElement;for(;b&&i&&v!==g;){const h=je(b),f=b.getBoundingClientRect(),m=it(b),E=f.left+(b.clientLeft+parseFloat(m.paddingLeft))*h.x,x=f.top+(b.clientTop+parseFloat(m.paddingTop))*h.y;r*=h.x,u*=h.y,c*=h.x,d*=h.y,r+=E,u+=x,b=oe(b).frameElement}}return to({width:c,height:d,x:r,y:u})}function lo(n,e){let o=null,i;const t=Yt(n);function a(){clearTimeout(i),o&&o.disconnect(),o=null}function s(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:u,top:c,width:d,height:g}=n.getBoundingClientRect();if(l||e(),!d||!g)return;const v=xe(c),b=xe(t.clientWidth-(u+d)),h=xe(t.clientHeight-(c+g)),f=xe(u),E={rootMargin:-v+"px "+-b+"px "+-h+"px "+-f+"px",threshold:eo(0,Jn(1,r))||1};let x=!0;function w(F){const I=F[0].intersectionRatio;if(I!==r){if(!x)return s();I?s(!1,I):i=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{o=new IntersectionObserver(w,{...E,root:t.ownerDocument})}catch{o=new IntersectionObserver(w,E)}o.observe(n)}return s(!0),a}function co(n,e,o,i){i===void 0&&(i={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=i,u=rt(n),c=t||a?[...u?Pe(u):[],...Pe(e)]:[];c.forEach(m=>{t&&m.addEventListener("scroll",o,{passive:!0}),a&&m.addEventListener("resize",o)});const d=u&&l?lo(u,o):null;let g=-1,v=null;s&&(v=new ResizeObserver(m=>{let[E]=m;E&&E.target===u&&v&&(v.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{v&&v.observe(e)})),o()}),u&&!r&&v.observe(u),v.observe(e));let b,h=r?vt(n):null;r&&f();function f(){const m=vt(n);h&&(m.x!==h.x||m.y!==h.y||m.width!==h.width||m.height!==h.height)&&o(),h=m,b=requestAnimationFrame(f)}return o(),()=>{c.forEach(m=>{t&&m.removeEventListener("scroll",o),a&&m.removeEventListener("resize",o)}),d&&d(),v&&v.disconnect(),v=null,r&&cancelAnimationFrame(b)}}var Xe=p.useLayoutEffect,po=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ke=function(){};function fo(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function ho(n,e){for(var o=arguments.length,i=new Array(o>2?o-2:0),t=2;t<o;t++)i[t-2]=arguments[t];var a=[].concat(i);if(e&&n)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(fo(n,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var bt=function(e){return wo(e)?e.filter(Boolean):Bn(e)==="object"&&e!==null?[e]:[]},Kt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var o=re(e,po);return D({},o)},H=function(e,o,i){var t=e.cx,a=e.getStyles,s=e.getClassNames,l=e.className;return{css:a(o,e),className:t(i??{},s(o,e),l)}};function $e(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function mo(n){return $e(n)?window.innerHeight:n.clientHeight}function Zt(n){return $e(n)?window.pageYOffset:n.scrollTop}function Ve(n,e){if($e(n)){window.scrollTo(0,e);return}n.scrollTop=e}function go(n){var e=getComputedStyle(n),o=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(o&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function vo(n,e,o,i){return o*((n=n/i-1)*n*n+1)+e}function Ee(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ke,t=Zt(n),a=e-t,s=10,l=0;function r(){l+=s;var u=vo(l,t,a,o);Ve(n,u),l<o?window.requestAnimationFrame(r):i(n)}r()}function xt(n,e){var o=n.getBoundingClientRect(),i=e.getBoundingClientRect(),t=e.offsetHeight/3;i.bottom+t>o.bottom?Ve(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):i.top-t<o.top&&Ve(n,Math.max(e.offsetTop-t,0))}function bo(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Et(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function xo(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var Qt=!1,Eo={get passive(){return Qt=!0}},Ce=typeof window<"u"?window:{};Ce.addEventListener&&Ce.removeEventListener&&(Ce.addEventListener("p",ke,Eo),Ce.removeEventListener("p",ke,!1));var Co=Qt;function yo(n){return n!=null}function wo(n){return Array.isArray(n)}function ye(n,e,o){return n?e:o}var So=function(e){for(var o=arguments.length,i=new Array(o>1?o-1:0),t=1;t<o;t++)i[t-1]=arguments[t];var a=Object.entries(e).filter(function(s){var l=ie(s,1),r=l[0];return!i.includes(r)});return a.reduce(function(s,l){var r=ie(l,2),u=r[0],c=r[1];return s[u]=c,s},{})},Fo=["children","innerProps"],Oo=["children","innerProps"];function Io(n){var e=n.maxHeight,o=n.menuEl,i=n.minHeight,t=n.placement,a=n.shouldScroll,s=n.isFixedPosition,l=n.controlHeight,r=go(o),u={placement:"bottom",maxHeight:e};if(!o||!o.offsetParent)return u;var c=r.getBoundingClientRect(),d=c.height,g=o.getBoundingClientRect(),v=g.bottom,b=g.height,h=g.top,f=o.offsetParent.getBoundingClientRect(),m=f.top,E=s?window.innerHeight:mo(r),x=Zt(r),w=parseInt(getComputedStyle(o).marginBottom,10),F=parseInt(getComputedStyle(o).marginTop,10),I=m-F,A=E-h,y=I+x,M=d-x-h,k=v-E+x+w,N=x+h-F,$=160;switch(t){case"auto":case"bottom":if(A>=b)return{placement:"bottom",maxHeight:e};if(M>=b&&!s)return a&&Ee(r,k,$),{placement:"bottom",maxHeight:e};if(!s&&M>=i||s&&A>=i){a&&Ee(r,k,$);var X=s?A-w:M-w;return{placement:"bottom",maxHeight:X}}if(t==="auto"||s){var q=e,B=s?I:y;return B>=i&&(q=Math.min(B-w-l,e)),{placement:"top",maxHeight:q}}if(t==="bottom")return a&&Ve(r,k),{placement:"bottom",maxHeight:e};break;case"top":if(I>=b)return{placement:"top",maxHeight:e};if(y>=b&&!s)return a&&Ee(r,N,$),{placement:"top",maxHeight:e};if(!s&&y>=i||s&&I>=i){var j=e;return(!s&&y>=i||s&&I>=i)&&(j=s?I-F:y-F),a&&Ee(r,N,$),{placement:"top",maxHeight:j}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return u}function Do(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var Jt=function(e){return e==="auto"?"bottom":e},Ao=function(e,o){var i,t=e.placement,a=e.theme,s=a.borderRadius,l=a.spacing,r=a.colors;return D((i={label:"menu"},pe(i,Do(t),"100%"),pe(i,"position","absolute"),pe(i,"width","100%"),pe(i,"zIndex",1),i),o?{}:{backgroundColor:r.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},en=p.createContext(null),Mo=function(e){var o=e.children,i=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,r=e.theme,u=p.useContext(en)||{},c=u.setPortalPlacement,d=p.useRef(null),g=p.useState(t),v=ie(g,2),b=v[0],h=v[1],f=p.useState(null),m=ie(f,2),E=m[0],x=m[1],w=r.spacing.controlHeight;return Xe(function(){var F=d.current;if(F){var I=s==="fixed",A=l&&!I,y=Io({maxHeight:t,menuEl:F,minHeight:i,placement:a,shouldScroll:A,isFixedPosition:I,controlHeight:w});h(y.maxHeight),x(y.placement),c==null||c(y.placement)}},[t,a,s,l,i,c,w]),o({ref:d,placerProps:D(D({},e),{},{placement:E||Jt(a),maxHeight:b})})},Po=function(e){var o=e.children,i=e.innerRef,t=e.innerProps;return O("div",P({},H(e,"menu",{menu:!0}),{ref:i},t),o)},ko=Po,Vo=function(e,o){var i=e.maxHeight,t=e.theme.spacing.baseUnit;return D({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:t,paddingTop:t})},Lo=function(e){var o=e.children,i=e.innerProps,t=e.innerRef,a=e.isMulti;return O("div",P({},H(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},i),o)},tn=function(e,o){var i=e.theme,t=i.spacing.baseUnit,a=i.colors;return D({textAlign:"center"},o?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},Ro=tn,To=tn,$o=function(e){var o=e.children,i=o===void 0?"No options":o,t=e.innerProps,a=re(e,Fo);return O("div",P({},H(D(D({},a),{},{children:i,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),i)},Bo=function(e){var o=e.children,i=o===void 0?"Loading...":o,t=e.innerProps,a=re(e,Oo);return O("div",P({},H(D(D({},a),{},{children:i,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),i)},No=function(e){var o=e.rect,i=e.offset,t=e.position;return{left:o.left,position:t,top:i,width:o.width,zIndex:1}},jo=function(e){var o=e.appendTo,i=e.children,t=e.controlElement,a=e.innerProps,s=e.menuPlacement,l=e.menuPosition,r=p.useRef(null),u=p.useRef(null),c=p.useState(Jt(s)),d=ie(c,2),g=d[0],v=d[1],b=p.useMemo(function(){return{setPortalPlacement:v}},[]),h=p.useState(null),f=ie(h,2),m=f[0],E=f[1],x=p.useCallback(function(){if(t){var A=bo(t),y=l==="fixed"?0:window.pageYOffset,M=A[g]+y;(M!==(m==null?void 0:m.offset)||A.left!==(m==null?void 0:m.rect.left)||A.width!==(m==null?void 0:m.rect.width))&&E({offset:M,rect:A})}},[t,l,g,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Xe(function(){x()},[x]);var w=p.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),t&&r.current&&(u.current=co(t,r.current,x,{elementResize:"ResizeObserver"in window}))},[t,x]);Xe(function(){w()},[w]);var F=p.useCallback(function(A){r.current=A,w()},[w]);if(!o&&l!=="fixed"||!m)return null;var I=O("div",P({ref:F},H(D(D({},e),{},{offset:m.offset,position:l,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),i);return O(en.Provider,{value:b},o?jt.createPortal(I,o):I)},Ho=function(e){var o=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},_o=function(e){var o=e.children,i=e.innerProps,t=e.isDisabled,a=e.isRtl;return O("div",P({},H(e,"container",{"--is-disabled":t,"--is-rtl":a}),i),o)},zo=function(e,o){var i=e.theme.spacing,t=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return D({alignItems:"center",display:t&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},Uo=function(e){var o=e.children,i=e.innerProps,t=e.isMulti,a=e.hasValue;return O("div",P({},H(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),i),o)},Wo=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},Yo=function(e){var o=e.children,i=e.innerProps;return O("div",P({},H(e,"indicatorsContainer",{indicators:!0}),i),o)},Ct,Go=["size"],qo=["innerProps","isRtl","size"],Xo={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},nn=function(e){var o=e.size,i=re(e,Go);return O("svg",P({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Xo},i))},at=function(e){return O(nn,P({size:20},e),O("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},on=function(e){return O(nn,P({size:20},e),O("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},rn=function(e,o){var i=e.isFocused,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return D({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:i?s.neutral60:s.neutral20,padding:a*2,":hover":{color:i?s.neutral80:s.neutral40}})},Ko=rn,Zo=function(e){var o=e.children,i=e.innerProps;return O("div",P({},H(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),o||O(on,null))},Qo=rn,Jo=function(e){var o=e.children,i=e.innerProps;return O("div",P({},H(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),o||O(at,null))},ei=function(e,o){var i=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return D({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:i?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},ti=function(e){var o=e.innerProps;return O("span",P({},o,H(e,"indicatorSeparator",{"indicator-separator":!0})))},ni=$n(Ct||(Ct=Qn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),oi=function(e,o){var i=e.isFocused,t=e.size,a=e.theme,s=a.colors,l=a.spacing.baseUnit;return D({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},o?{}:{color:i?s.neutral60:s.neutral20,padding:l*2})},He=function(e){var o=e.delay,i=e.offset;return O("span",{css:Ut({animation:"".concat(ni," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},ii=function(e){var o=e.innerProps,i=e.isRtl,t=e.size,a=t===void 0?4:t,s=re(e,qo);return O("div",P({},H(D(D({},s),{},{innerProps:o,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),O(He,{delay:0,offset:i}),O(He,{delay:160,offset:!0}),O(He,{delay:320,offset:!i}))},ri=function(e,o){var i=e.isDisabled,t=e.isFocused,a=e.theme,s=a.colors,l=a.borderRadius,r=a.spacing;return D({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:i?s.neutral5:s.neutral0,borderColor:i?s.neutral10:t?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:t?s.primary:s.neutral30}})},ai=function(e){var o=e.children,i=e.isDisabled,t=e.isFocused,a=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return O("div",P({ref:a},H(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":t,"control--menu-is-open":l}),s,{"aria-disabled":i||void 0}),o)},si=ai,ui=["data"],li=function(e,o){var i=e.theme.spacing;return o?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},ci=function(e){var o=e.children,i=e.cx,t=e.getStyles,a=e.getClassNames,s=e.Heading,l=e.headingProps,r=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return O("div",P({},H(e,"group",{group:!0}),r),O(s,P({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:i}),u),O("div",null,o))},di=function(e,o){var i=e.theme,t=i.colors,a=i.spacing;return D({label:"group",cursor:"default",display:"block"},o?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},pi=function(e){var o=Kt(e);o.data;var i=re(o,ui);return O("div",P({},H(e,"groupHeading",{"group-heading":!0}),i))},fi=ci,hi=["innerRef","isDisabled","isHidden","inputClassName"],mi=function(e,o){var i=e.isDisabled,t=e.value,a=e.theme,s=a.spacing,l=a.colors;return D(D({visibility:i?"hidden":"visible",transform:t?"translateZ(0)":""},gi),o?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},an={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},gi={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":D({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},an)},vi=function(e){return D({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},an)},bi=function(e){var o=e.cx,i=e.value,t=Kt(e),a=t.innerRef,s=t.isDisabled,l=t.isHidden,r=t.inputClassName,u=re(t,hi);return O("div",P({},H(e,"input",{"input-container":!0}),{"data-value":i||""}),O("input",P({className:o({input:!0},r),ref:a,style:vi(l),disabled:s},u)))},xi=bi,Ei=function(e,o){var i=e.theme,t=i.spacing,a=i.borderRadius,s=i.colors;return D({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Ci=function(e,o){var i=e.theme,t=i.borderRadius,a=i.colors,s=e.cropWithEllipsis;return D({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},yi=function(e,o){var i=e.theme,t=i.spacing,a=i.borderRadius,s=i.colors,l=e.isFocused;return D({alignItems:"center",display:"flex"},o?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},sn=function(e){var o=e.children,i=e.innerProps;return O("div",i,o)},wi=sn,Si=sn;function Fi(n){var e=n.children,o=n.innerProps;return O("div",P({role:"button"},o),e||O(at,{size:14}))}var Oi=function(e){var o=e.children,i=e.components,t=e.data,a=e.innerProps,s=e.isDisabled,l=e.removeProps,r=e.selectProps,u=i.Container,c=i.Label,d=i.Remove;return O(u,{data:t,innerProps:D(D({},H(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:r},O(c,{data:t,innerProps:D({},H(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},o),O(d,{data:t,innerProps:D(D({},H(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},l),selectProps:r}))},Ii=Oi,Di=function(e,o){var i=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.theme,l=s.spacing,r=s.colors;return D({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:a?r.primary:t?r.primary25:"transparent",color:i?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?r.primary:r.primary50}})},Ai=function(e){var o=e.children,i=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.innerRef,l=e.innerProps;return O("div",P({},H(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":t,"option--is-selected":a}),{ref:s,"aria-disabled":i},l),o)},Mi=Ai,Pi=function(e,o){var i=e.theme,t=i.spacing,a=i.colors;return D({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},ki=function(e){var o=e.children,i=e.innerProps;return O("div",P({},H(e,"placeholder",{placeholder:!0}),i),o)},Vi=ki,Li=function(e,o){var i=e.isDisabled,t=e.theme,a=t.spacing,s=t.colors;return D({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:i?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Ri=function(e){var o=e.children,i=e.isDisabled,t=e.innerProps;return O("div",P({},H(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),t),o)},Ti=Ri,st={ClearIndicator:Jo,Control:si,DropdownIndicator:Zo,DownChevron:on,CrossIcon:at,Group:fi,GroupHeading:pi,IndicatorsContainer:Yo,IndicatorSeparator:ti,Input:xi,LoadingIndicator:ii,Menu:ko,MenuList:Lo,MenuPortal:jo,LoadingMessage:Bo,NoOptionsMessage:$o,MultiValue:Ii,MultiValueContainer:wi,MultiValueLabel:Si,MultiValueRemove:Fi,Option:Mi,Placeholder:Vi,SelectContainer:_o,SingleValue:Ti,ValueContainer:Uo},$i=function(e){return D(D({},st),e.components)},yt=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Bi(n,e){return!!(n===e||yt(n)&&yt(e))}function Ni(n,e){if(n.length!==e.length)return!1;for(var o=0;o<n.length;o++)if(!Bi(n[o],e[o]))return!1;return!0}function ji(n,e){e===void 0&&(e=Ni);var o=null;function i(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(o&&o.lastThis===this&&e(t,o.lastArgs))return o.lastResult;var s=n.apply(this,t);return o={lastResult:s,lastArgs:t,lastThis:this},s}return i.clear=function(){o=null},i}var Hi={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},_i=function(e){return O("span",P({css:Hi},e))},wt=_i,zi={guidance:function(e){var o=e.isSearchable,i=e.isMulti,t=e.tabSelectsValue,a=e.context,s=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var o=e.action,i=e.label,t=i===void 0?"":i,a=e.labels,s=e.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var o=e.context,i=e.focused,t=e.options,a=e.label,s=a===void 0?"":a,l=e.selectValue,r=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(h,f){return h&&h.length?"".concat(h.indexOf(f)+1," of ").concat(h.length):""};if(o==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,i),".");if(o==="menu"&&c){var g=r?" disabled":"",v="".concat(u?" selected":"").concat(g);return"".concat(s).concat(v,", ").concat(d(t,i),".")}return""},onFilter:function(e){var o=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(o?" for search term "+o:"",".")}},Ui=function(e){var o=e.ariaSelection,i=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,s=e.isFocused,l=e.selectValue,r=e.selectProps,u=e.id,c=e.isAppleDevice,d=r.ariaLiveMessages,g=r.getOptionLabel,v=r.inputValue,b=r.isMulti,h=r.isOptionDisabled,f=r.isSearchable,m=r.menuIsOpen,E=r.options,x=r.screenReaderStatus,w=r.tabSelectsValue,F=r.isLoading,I=r["aria-label"],A=r["aria-live"],y=p.useMemo(function(){return D(D({},zi),d||{})},[d]),M=p.useMemo(function(){var B="";if(o&&y.onChange){var j=o.option,U=o.options,_=o.removedValue,K=o.removedValues,Z=o.value,te=function(ne){return Array.isArray(ne)?null:ne},V=_||j||te(Z),T=V?g(V):"",z=U||K||void 0,W=z?z.map(g):[],Y=D({isDisabled:V&&h(V,l),label:T,labels:W},o);B=y.onChange(Y)}return B},[o,y,h,l,g]),k=p.useMemo(function(){var B="",j=i||t,U=!!(i&&l&&l.includes(i));if(j&&y.onFocus){var _={focused:j,label:g(j),isDisabled:h(j,l),isSelected:U,options:a,context:j===i?"menu":"value",selectValue:l,isAppleDevice:c};B=y.onFocus(_)}return B},[i,t,g,h,y,a,l,c]),N=p.useMemo(function(){var B="";if(m&&E.length&&!F&&y.onFilter){var j=x({count:a.length});B=y.onFilter({inputValue:v,resultsMessage:j})}return B},[a,v,m,y,E,x,F]),$=(o==null?void 0:o.action)==="initial-input-focus",X=p.useMemo(function(){var B="";if(y.guidance){var j=t?"value":m?"menu":"input";B=y.guidance({"aria-label":I,context:j,isDisabled:i&&h(i,l),isMulti:b,isSearchable:f,tabSelectsValue:w,isInitialFocus:$})}return B},[I,i,t,b,h,f,m,y,l,w,$]),q=O(p.Fragment,null,O("span",{id:"aria-selection"},M),O("span",{id:"aria-focused"},k),O("span",{id:"aria-results"},N),O("span",{id:"aria-guidance"},X));return O(p.Fragment,null,O(wt,{id:u},$&&q),O(wt,{"aria-live":A,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!$&&q))},Wi=Ui,Ke=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Yi=new RegExp("["+Ke.map(function(n){return n.letters}).join("")+"]","g"),un={};for(var _e=0;_e<Ke.length;_e++)for(var ze=Ke[_e],Ue=0;Ue<ze.letters.length;Ue++)un[ze.letters[Ue]]=ze.base;var ln=function(e){return e.replace(Yi,function(o){return un[o]})},Gi=ji(ln),St=function(e){return e.replace(/^\s+|\s+$/g,"")},qi=function(e){return"".concat(e.label," ").concat(e.value)},Xi=function(e){return function(o,i){if(o.data.__isNew__)return!0;var t=D({ignoreCase:!0,ignoreAccents:!0,stringify:qi,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,s=t.ignoreAccents,l=t.stringify,r=t.trim,u=t.matchFrom,c=r?St(i):i,d=r?St(l(o)):l(o);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Gi(c),d=ln(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Ki=["innerRef"];function Zi(n){var e=n.innerRef,o=re(n,Ki),i=So(o,"onExited","in","enter","exit","appear");return O("input",P({ref:e},i,{css:Ut({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Qi=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Ji(n){var e=n.isEnabled,o=n.onBottomArrive,i=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,s=p.useRef(!1),l=p.useRef(!1),r=p.useRef(0),u=p.useRef(null),c=p.useCallback(function(f,m){if(u.current!==null){var E=u.current,x=E.scrollTop,w=E.scrollHeight,F=E.clientHeight,I=u.current,A=m>0,y=w-F-x,M=!1;y>m&&s.current&&(i&&i(f),s.current=!1),A&&l.current&&(a&&a(f),l.current=!1),A&&m>y?(o&&!s.current&&o(f),I.scrollTop=w,M=!0,s.current=!0):!A&&-m>x&&(t&&!l.current&&t(f),I.scrollTop=0,M=!0,l.current=!0),M&&Qi(f)}},[o,i,t,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),g=p.useCallback(function(f){r.current=f.changedTouches[0].clientY},[]),v=p.useCallback(function(f){var m=r.current-f.changedTouches[0].clientY;c(f,m)},[c]),b=p.useCallback(function(f){if(f){var m=Co?{passive:!1}:!1;f.addEventListener("wheel",d,m),f.addEventListener("touchstart",g,m),f.addEventListener("touchmove",v,m)}},[v,g,d]),h=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",g,!1),f.removeEventListener("touchmove",v,!1))},[v,g,d]);return p.useEffect(function(){if(e){var f=u.current;return b(f),function(){h(f)}}},[e,b,h]),function(f){u.current=f}}var Ft=["boxSizing","height","overflow","paddingRight","position"],Ot={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function It(n){n.preventDefault()}function Dt(n){n.stopPropagation()}function At(){var n=this.scrollTop,e=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===e&&(this.scrollTop=n-1)}function Mt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Pt=!!(typeof window<"u"&&window.document&&window.document.createElement),de=0,ce={capture:!1,passive:!1};function er(n){var e=n.isEnabled,o=n.accountForScrollbars,i=o===void 0?!0:o,t=p.useRef({}),a=p.useRef(null),s=p.useCallback(function(r){if(Pt){var u=document.body,c=u&&u.style;if(i&&Ft.forEach(function(b){var h=c&&c[b];t.current[b]=h}),i&&de<1){var d=parseInt(t.current.paddingRight,10)||0,g=document.body?document.body.clientWidth:0,v=window.innerWidth-g+d||0;Object.keys(Ot).forEach(function(b){var h=Ot[b];c&&(c[b]=h)}),c&&(c.paddingRight="".concat(v,"px"))}u&&Mt()&&(u.addEventListener("touchmove",It,ce),r&&(r.addEventListener("touchstart",At,ce),r.addEventListener("touchmove",Dt,ce))),de+=1}},[i]),l=p.useCallback(function(r){if(Pt){var u=document.body,c=u&&u.style;de=Math.max(de-1,0),i&&de<1&&Ft.forEach(function(d){var g=t.current[d];c&&(c[d]=g)}),u&&Mt()&&(u.removeEventListener("touchmove",It,ce),r&&(r.removeEventListener("touchstart",At,ce),r.removeEventListener("touchmove",Dt,ce)))}},[i]);return p.useEffect(function(){if(e){var r=a.current;return s(r),function(){l(r)}}},[e,s,l]),function(r){a.current=r}}var tr=function(e){var o=e.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},nr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function or(n){var e=n.children,o=n.lockEnabled,i=n.captureEnabled,t=i===void 0?!0:i,a=n.onBottomArrive,s=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,u=Ji({isEnabled:t,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:r}),c=er({isEnabled:o}),d=function(v){u(v),c(v)};return O(p.Fragment,null,o&&O("div",{onClick:tr,css:nr}),e(d))}var ir={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},rr=function(e){var o=e.name,i=e.onFocus;return O("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:ir,value:"",onChange:function(){}})},ar=rr;function ut(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function sr(){return ut(/^iPhone/i)}function cn(){return ut(/^Mac/i)}function ur(){return ut(/^iPad/i)||cn()&&navigator.maxTouchPoints>1}function lr(){return sr()||ur()}function cr(){return cn()||lr()}var dr=function(e){return e.label},pr=function(e){return e.label},fr=function(e){return e.value},hr=function(e){return!!e.isDisabled},mr={clearIndicator:Qo,container:Ho,control:ri,dropdownIndicator:Ko,group:li,groupHeading:di,indicatorsContainer:Wo,indicatorSeparator:ei,input:mi,loadingIndicator:oi,loadingMessage:To,menu:Ao,menuList:Vo,menuPortal:No,multiValue:Ei,multiValueLabel:Ci,multiValueRemove:yi,noOptionsMessage:Ro,option:Di,placeholder:Pi,singleValue:Li,valueContainer:zo},gr={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},vr=4,dn=4,br=38,xr=dn*2,Er={baseUnit:dn,controlHeight:br,menuGutter:xr},We={borderRadius:vr,colors:gr,spacing:Er},Cr={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Et(),captureMenuScroll:!Et(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Xi(),formatGroupLabel:dr,getOptionLabel:pr,getOptionValue:fr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:hr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!xo(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var o=e.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function kt(n,e,o,i){var t=hn(n,e,o),a=mn(n,e,o),s=fn(n,e),l=Le(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:s,value:l,index:i}}function Ie(n,e){return n.options.map(function(o,i){if("options"in o){var t=o.options.map(function(s,l){return kt(n,s,e,l)}).filter(function(s){return Lt(n,s)});return t.length>0?{type:"group",data:o,options:t,index:i}:void 0}var a=kt(n,o,e,i);return Lt(n,a)?a:void 0}).filter(yo)}function pn(n){return n.reduce(function(e,o){return o.type==="group"?e.push.apply(e,nt(o.options.map(function(i){return i.data}))):e.push(o.data),e},[])}function Vt(n,e){return n.reduce(function(o,i){return i.type==="group"?o.push.apply(o,nt(i.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(i.index,"-").concat(t.index)}}))):o.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),o},[])}function yr(n,e){return pn(Ie(n,e))}function Lt(n,e){var o=n.inputValue,i=o===void 0?"":o,t=e.data,a=e.isSelected,s=e.label,l=e.value;return(!vn(n)||!a)&&gn(n,{label:s,value:l,data:t},i)}function wr(n,e){var o=n.focusedValue,i=n.selectValue,t=i.indexOf(o);if(t>-1){var a=e.indexOf(o);if(a>-1)return o;if(t<e.length)return e[t]}return null}function Sr(n,e){var o=n.focusedOption;return o&&e.indexOf(o)>-1?o:e[0]}var Ye=function(e,o){var i,t=(i=e.find(function(a){return a.data===o}))===null||i===void 0?void 0:i.id;return t||null},fn=function(e,o){return e.getOptionLabel(o)},Le=function(e,o){return e.getOptionValue(o)};function hn(n,e,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,o):!1}function mn(n,e,o){if(o.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,o);var i=Le(n,e);return o.some(function(t){return Le(n,t)===i})}function gn(n,e,o){return n.filterOption?n.filterOption(e,o):!0}var vn=function(e){var o=e.hideSelectedOptions,i=e.isMulti;return o===void 0?i:o},Fr=1,bn=function(n){Nn(o,n);var e=jn(o);function o(i){var t;if(Hn(this,o),t=e.call(this,i),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=cr(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,u){var c=t.props,d=c.onChange,g=c.name;u.name=g,t.ariaOnChange(r,u),d(r,u)},t.setValue=function(r,u,c){var d=t.props,g=d.closeMenuOnSelect,v=d.isMulti,b=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),g&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:u,option:c})},t.selectOption=function(r){var u=t.props,c=u.blurInputOnSelect,d=u.isMulti,g=u.name,v=t.state.selectValue,b=d&&t.isOptionSelected(r,v),h=t.isOptionDisabled(r,v);if(b){var f=t.getOptionValue(r);t.setValue(v.filter(function(m){return t.getOptionValue(m)!==f}),"deselect-option",r)}else if(!h)d?t.setValue([].concat(nt(v),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:g});return}c&&t.blurInput()},t.removeValue=function(r){var u=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(r),g=c.filter(function(b){return t.getOptionValue(b)!==d}),v=ye(u,g,g[0]||null);t.onChange(v,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(ye(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,u=t.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),g=ye(r,d,d[0]||null);t.onChange(g,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(r){return Ye(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return Vt(Ie(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return ho.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(r){return fn(t.props,r)},t.getOptionValue=function(r){return Le(t.props,r)},t.getStyles=function(r,u){var c=t.props.unstyled,d=mr[r](u,c);d.boxSizing="border-box";var g=t.props.styles[r];return g?g(d,u):d},t.getClassNames=function(r,u){var c,d;return(c=(d=t.props.classNames)[r])===null||c===void 0?void 0:c.call(d,u)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return $i(t.props)},t.buildCategorizedOptions=function(){return Ie(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return pn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,u){t.setState({ariaSelection:D({value:r},u)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var u=t.props,c=u.isMulti,d=u.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&$e(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var u=r.touches,c=u&&u.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var u=r.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),g=Math.abs(c.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||g>v}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var u=t.props.inputValue,c=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var u=t.getFocusableOptions(),c=u.indexOf(r);t.setState({focusedOption:r,focusedOptionId:c>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return vn(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var u=t.props,c=u.isMulti,d=u.backspaceRemovesValue,g=u.escapeClearsValue,v=u.inputValue,b=u.isClearable,h=u.isDisabled,f=u.menuIsOpen,m=u.onKeyDown,E=u.tabSelectsValue,x=u.openMenuOnFocus,w=t.state,F=w.focusedOption,I=w.focusedValue,A=w.selectValue;if(!h&&!(typeof m=="function"&&(m(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||v)return;t.focusValue("previous");break;case"ArrowRight":if(!c||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(I)t.removeValue(I);else{if(!d)return;c?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!f||!E||!F||x&&t.isOptionSelected(F,A))return;t.selectOption(F);break;case"Enter":if(r.keyCode===229)break;if(f){if(!F||t.isComposing)return;t.selectOption(F);break}return;case"Escape":f?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):b&&g&&t.clearValue();break;case" ":if(v)return;if(!f){t.openMenu("first");break}if(!F)return;t.selectOption(F);break;case"ArrowUp":f?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":f?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!f)return;t.focusOption("pageup");break;case"PageDown":if(!f)return;t.focusOption("pagedown");break;case"Home":if(!f)return;t.focusOption("first");break;case"End":if(!f)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Fr),t.state.selectValue=bt(i.value),i.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),s=t.buildFocusableOptions(),l=s.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=s[l],t.state.focusedOptionId=Ye(a,s[l])}return t}return _n(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&xt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!s&&t.isDisabled||r&&l&&!t.menuIsOpen)&&this.focusInput(),r&&s&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!s&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(xt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,s=this.state,l=s.selectValue,r=s.isFocused,u=this.buildFocusableOptions(),c=t==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=s.indexOf(l);l||(r=-1);var u=s.length-1,c=-1;if(s.length){switch(t){case"previous":r===0?c=0:r===-1?c=u:c=r-1;break;case"next":r>-1&&r<u&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,u=l.indexOf(s);s||(u=-1),t==="up"?r=u>0?u-1:l.length-1:t==="down"?r=(u+1)%l.length:t==="pageup"?(r=u-a,r<0&&(r=0)):t==="pagedown"?(r=u+a,r>l.length-1&&(r=l.length-1)):t==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(We):D(D({},We),this.props.theme):We}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,r=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,g=d.isMulti,v=d.isRtl,b=d.options,h=this.hasValue();return{clearValue:t,cx:a,getStyles:s,getClassNames:l,getValue:r,hasValue:h,isMulti:g,isRtl:v,options:b,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,s=t.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(t,a){return hn(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return mn(this.props,t,a)}},{key:"filterOption",value:function(t,a){return gn(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,s=t.isSearchable,l=t.inputId,r=t.inputValue,u=t.tabIndex,c=t.form,d=t.menuIsOpen,g=t.required,v=this.getComponents(),b=v.Input,h=this.state,f=h.inputIsHidden,m=h.ariaSelection,E=this.commonProps,x=l||this.getElementId("input"),w=D(D(D({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":g,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?p.createElement(b,P({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:r},w)):p.createElement(Zi,P({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ke,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,g=this.commonProps,v=this.props,b=v.controlShouldRenderValue,h=v.isDisabled,f=v.isMulti,m=v.inputValue,E=v.placeholder,x=this.state,w=x.selectValue,F=x.focusedValue,I=x.isFocused;if(!this.hasValue()||!b)return m?null:p.createElement(d,P({},g,{key:"placeholder",isDisabled:h,isFocused:I,innerProps:{id:this.getElementId("placeholder")}}),E);if(f)return w.map(function(y,M){var k=y===F,N="".concat(t.getOptionLabel(y),"-").concat(t.getOptionValue(y));return p.createElement(s,P({},g,{components:{Container:l,Label:r,Remove:u},isFocused:k,isDisabled:h,key:N,index:M,removeProps:{onClick:function(){return t.removeValue(y)},onTouchEnd:function(){return t.removeValue(y)},onMouseDown:function(X){X.preventDefault()}},data:y}),t.formatOptionLabel(y,"value"))});if(m)return null;var A=w[0];return p.createElement(c,P({},g,{data:A,isDisabled:h}),this.formatOptionLabel(A,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,P({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return p.createElement(a,P({},s,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,s=t.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,r=this.props.isDisabled,u=this.state.isFocused;return p.createElement(s,P({},l,{isDisabled:r,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,P({},s,{innerProps:u,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,r=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,g=a.NoOptionsMessage,v=a.Option,b=this.commonProps,h=this.state.focusedOption,f=this.props,m=f.captureMenuScroll,E=f.inputValue,x=f.isLoading,w=f.loadingMessage,F=f.minMenuHeight,I=f.maxMenuHeight,A=f.menuIsOpen,y=f.menuPlacement,M=f.menuPosition,k=f.menuPortalTarget,N=f.menuShouldBlockScroll,$=f.menuShouldScrollIntoView,X=f.noOptionsMessage,q=f.onMenuScrollToTop,B=f.onMenuScrollToBottom;if(!A)return null;var j=function(T,z){var W=T.type,Y=T.data,J=T.isDisabled,ne=T.isSelected,ve=T.label,Dn=T.value,pt=h===Y,ft=J?void 0:function(){return t.onOptionHover(Y)},An=J?void 0:function(){return t.selectOption(Y)},ht="".concat(t.getElementId("option"),"-").concat(z),Mn={id:ht,onClick:An,onMouseMove:ft,onMouseOver:ft,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:ne};return p.createElement(v,P({},b,{innerProps:Mn,data:Y,isDisabled:J,isSelected:ne,key:ht,label:ve,type:W,value:Dn,isFocused:pt,innerRef:pt?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(T.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(V){if(V.type==="group"){var T=V.data,z=V.options,W=V.index,Y="".concat(t.getElementId("group"),"-").concat(W),J="".concat(Y,"-heading");return p.createElement(s,P({},b,{key:Y,data:T,options:z,Heading:l,headingProps:{id:J,data:V.data},label:t.formatGroupLabel(V.data)}),V.options.map(function(ne){return j(ne,"".concat(W,"-").concat(ne.index))}))}else if(V.type==="option")return j(V,"".concat(V.index))});else if(x){var _=w({inputValue:E});if(_===null)return null;U=p.createElement(d,b,_)}else{var K=X({inputValue:E});if(K===null)return null;U=p.createElement(g,b,K)}var Z={minMenuHeight:F,maxMenuHeight:I,menuPlacement:y,menuPosition:M,menuShouldScrollIntoView:$},te=p.createElement(Mo,P({},b,Z),function(V){var T=V.ref,z=V.placerProps,W=z.placement,Y=z.maxHeight;return p.createElement(r,P({},b,Z,{innerRef:T,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:x,placement:W}),p.createElement(or,{captureEnabled:m,onTopArrive:q,onBottomArrive:B,lockEnabled:N},function(J){return p.createElement(u,P({},b,{innerRef:function(ve){t.getMenuListRef(ve),J(ve)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:t.getElementId("listbox")},isLoading:x,maxHeight:Y,focusedOption:h}),U)}))});return k||M==="fixed"?p.createElement(c,P({},b,{appendTo:k,controlElement:this.controlRef,menuPlacement:y,menuPosition:M}),te):te}},{key:"renderFormField",value:function(){var t=this,a=this.props,s=a.delimiter,l=a.isDisabled,r=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(ar,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(r)if(s){var g=d.map(function(h){return t.getOptionValue(h)}).join(s);return p.createElement("input",{name:u,type:"hidden",value:g})}else{var v=d.length>0?d.map(function(h,f){return p.createElement("input",{key:"i-".concat(f),name:u,type:"hidden",value:t.getOptionValue(h)})}):p.createElement("input",{name:u,type:"hidden",value:""});return p.createElement("div",null,v)}else{var b=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:u,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(Wi,P({},t,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:r,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,s=t.IndicatorsContainer,l=t.SelectContainer,r=t.ValueContainer,u=this.props,c=u.className,d=u.id,g=u.isDisabled,v=u.menuIsOpen,b=this.state.isFocused,h=this.commonProps=this.getCommonProps();return p.createElement(l,P({},h,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:g,isFocused:b}),this.renderLiveRegion(),p.createElement(a,P({},h,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:g,isFocused:b,menuIsOpen:v}),p.createElement(r,P({},h,{isDisabled:g}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(s,P({},h,{isDisabled:g}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,g=a.instancePrefix,v=t.options,b=t.value,h=t.menuIsOpen,f=t.inputValue,m=t.isMulti,E=bt(b),x={};if(s&&(b!==s.value||v!==s.options||h!==s.menuIsOpen||f!==s.inputValue)){var w=h?yr(t,E):[],F=h?Vt(Ie(t,E),"".concat(g,"-option")):[],I=l?wr(a,E):null,A=Sr(a,w),y=Ye(F,A);x={selectValue:E,focusedOption:A,focusedOptionId:y,focusableOptionsWithIds:F,focusedValue:I,clearFocusValueOnUpdate:!1}}var M=r!=null&&t!==s?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},k=u,N=c&&d;return c&&!N&&(k={value:ye(m,E,E[0]||null),options:E,action:"initial-input-focus"},N=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(k=null),D(D(D({},x),M),{},{prevProps:t,ariaSelection:k,prevWasFocused:N})}}]),o}(p.Component);bn.defaultProps=Cr;var Or=p.forwardRef(function(n,e){var o=qn(n);return p.createElement(bn,P({ref:e},o))}),xn=Or;const En=n=>p.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M1.5 1.75L6 6.25L10.5 1.75",stroke:"#EFEDE8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Rt=[{value:"Alcoholic drinks",label:"Alcoholic drinks"},{value:"Berries",label:"Berries"},{value:"Cereals",label:"Cereals"},{value:"Dairy",label:"Dairy"},{value:"Dried fruits",label:"Dried fruits"},{value:"Eggs",label:"Eggs"},{value:"Fish",label:"Fish"},{value:"Flour",label:"Flour"},{value:"Meat",label:"Meat"}],Ir=n=>C.jsx(st.DropdownIndicator,{...n,children:C.jsx(En,{})}),Dr={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),control:(n,e)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${S.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${S.orangeColor}`:0,transition:`all ${S.animation}`,"&:hover":{borderColor:`${S.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),dropdownIndicator:(n,e)=>({...n,transition:`all ${S.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${S.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${S.successColor}`:`${S.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${S.orangeColor}`,color:`${S.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.10)",width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})},Ar=({dataFunc:n,currentValue:e})=>C.jsx(xn,{onChange:n,options:Rt,components:{DropdownIndicator:Ir},styles:Dr,value:e===""?{value:"Categories",label:"Categories"}:Rt.find(o=>o.value===e)}),Tt=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],Mr=n=>C.jsx(st.DropdownIndicator,{...n,children:C.jsx(En,{})}),Pr={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,e)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${S.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${S.orangeColor}`:0,transition:`all ${S.animation}`,"&:hover":{borderColor:`${S.orangeColor}`},"@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,e)=>({...n,transition:`all ${S.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${S.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${S.successColor}`:`${S.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${S.orangeColor}`,color:`${S.whiteColor}`}})},kr=({dataFunc:n,currentValue:e})=>C.jsx(xn,{onChange:n,options:Tt,components:{DropdownIndicator:Mr},styles:Pr,value:Tt.find(o=>o.value===e),defaultValue:e}),Vr=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),lt=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M13.5 4.5L4.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M4.5 4.5L13.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Lr=le(Vr)`
  width: 18px;
  height: 18px;
`,Rr=le(lt)`
  width: 20px;
  height: 20px;
`,Tr=le.form`
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
`,$r=()=>{const[n,e]=p.useState(!1),[o,i]=Ht(),t=Te(),a=p.useMemo(()=>Object.fromEntries([...o]),[o]),{search:s,category:l,recommended:r}=a;p.useEffect(()=>{},[s,l,r,i]);const u=_t({initialValues:{search:s??"",category:l??"",recommended:r??"All"},onSubmit:d=>{const{search:g}=d;g&&(t(Oe(1)),i(v=>{const b=new URLSearchParams(v);return b.set("q",g),b}))}}),c=d=>{e(!0),u.handleChange(d)};return C.jsxs(Tr,{onSubmit:u.handleSubmit,children:[C.jsxs("div",{className:"input-search-block",children:[C.jsx("input",{id:"search",name:"search",type:"text",onChange:c,value:u.values.search,placeholder:"Search"}),C.jsxs("div",{className:"svgs-search-block",children:[n&&C.jsx("button",{type:"button",onClick:()=>{e(!1),i(d=>{const g=new URLSearchParams(d);return g.delete("search"),g}),u.values.search=""},children:C.jsx(Rr,{})}),C.jsx("button",{type:"submit",children:C.jsx(Lr,{})})]})]}),C.jsxs("div",{className:"selects-block",children:[C.jsx(Ar,{name:"category",dataFunc:d=>{u.setFieldValue("category",d.value),t(Oe(1)),i(g=>{const v=new URLSearchParams(g);return v.set("category",d.value),v})},currentValue:u.values.category}),C.jsx(kr,{name:"recommended",currentValue:u.values.recommended,dataFunc:d=>{t(Oe(1)),u.setFieldValue("recommended",d.value),i(g=>{const v=new URLSearchParams(g);return v.set("recommended",d.value),v})}})]}),C.jsx("p",{className:"filter-1440",children:"Filter"})]})},Br=G.div`
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

`,Nr=G.ul`
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
`,jr=le.div`
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
`,Hr=()=>C.jsxs(jr,{children:[C.jsxs("p",{className:"above-text",children:[C.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),C.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),Cn=n=>p.createElement("svg",{width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M7.5 14 14 7.5m0 0L7.5 1M14 7.5H1",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),_r=n=>p.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),p.createElement("path",{d:"M18.823 8.725a.593.593 0 0 0-.833-.074l-1.641 1.378-.755-1.87a.58.58 0 0 0-.114-.18 1.606 1.606 0 0 0-.791-.809 1.628 1.628 0 0 0-.491-.13c-.037-.02-.07-.045-.111-.058l-2.888-.805a.594.594 0 0 0-.458.063.578.578 0 0 0-.36.336L9.294 9.372a.594.594 0 0 0 .338.767.593.593 0 0 0 .766-.34l.918-2.36 1.315.365c-.032.052-.066.101-.092.156l-1.687 3.655c-.024.054-.037.108-.054.164l-2.05 3.435-3.428 1.147a.876.876 0 0 0 1.04 1.41l3.51-1.209a.841.841 0 0 0 .243-.29c.045-.047.095-.084.129-.142l1.221-2.048 2.169 1.848-2.32 2.614a.875.875 0 1 0 1.31 1.16l2.896-3.261c.09-.101.144-.217.18-.338.022-.066.022-.135.027-.203 0-.035.013-.066.01-.098a.858.858 0 0 0-.3-.637l-1.995-1.701c.143-.137.266-.3.354-.492l1.293-2.8.414 1.104c.017.098.05.194.12.274a.57.57 0 0 0 .226.16l.03.007a.564.564 0 0 0 .367.018h.003c.018-.005.036-.002.054-.01a.585.585 0 0 0 .233-.17L18.89 9.56c.25-.21.145-.583-.066-.834ZM15.846 7.301a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z",fill:"#EFEDE8"})),ct=G.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,zr=G.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${S.animation};
  @media screen and (min-width: 768px) {
    ${ct}:hover & {
      color: ${S.successColor};
      transform: scale(1.25);
    }
  }
`,Ur=Pn`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,Wr=G(Cn)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    ${ct}:hover & {
      animation: ${Ur} 1000ms linear infinite;
      > path {
        stroke: ${S.successColor};
      }
    }
  }
`,Yr=G(_r)`
  width: 24px;
  height: 24px;
`,yn=G.li`
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
`,Gr=G.span`
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
`,qr="1",Xr=({data:n,handleOpenModal:e})=>{const{calories:o,category:i,title:t,weight:a,groupBloodNotAllowed:s,_id:l}=n,r=s[qr];return C.jsxs(yn,{children:[C.jsx("span",{className:"diet-span",children:"diet"}),C.jsxs("div",{className:"recommended-addbtn-div",children:[C.jsx(Gr,{className:"recommended-span",$color:r,children:r?"Recommended":"Not recommended"}),C.jsxs(ct,{onClick:()=>e({calories:o,title:t,weight:a,_id:l}),type:"button",className:"add-btn",children:[C.jsx(zr,{className:"add-btn-span",children:"Add"}),C.jsx(Wr,{})]})]}),C.jsxs("div",{className:"product-info-div",children:[C.jsxs("div",{className:"title-svg-div",children:[C.jsx(Yr,{}),C.jsxs("p",{className:"product-info-div-title",children:[" ",t]})]}),C.jsxs("div",{className:"detailed-info-div",children:[C.jsxs("p",{className:"detailed-name",children:["Calories: ",C.jsx("span",{className:"detailed-data",children:o})]}),C.jsxs("p",{className:"detailed-name",children:["Category: ",C.jsx("span",{className:"detailed-data",children:i})]}),C.jsxs("p",{className:"detailed-name",children:["Weight: ",C.jsx("span",{className:"detailed-data",children:a})]})]})]})]})},Ze=G.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,Kr=G(lt)`
  transition:
    stroke ${S.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  > path {
    stroke: white;
  }
  @media screen and (min-width: 768px) {
    ${Ze}:hover & {
      > path {
        stroke: ${S.orangeColor};
      }
    }
    ${Ze}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,Zr=G.div`
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
`,Qr=G.div`
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
`,Jr=G.input`

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

  `,ea=G.form`
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
`;function ta(){const n=new Date,e=n.getDate(),o=String(n.getMonth()+1).padStart(2,"0"),i=n.getFullYear();return`${e}-${o}-${i}`}const na=({data:n,closeModal:e})=>{const{title:o,calories:i,_id:t}=n||{},a=Te(),s=_t({enableReinitialize:!0,initialValues:{title:o,weight:0,calories:0},onSubmit:r=>{const{weight:u,calories:c}=r,d={date:ta(),product:t,amount:u,calories:c};a(kn(d))}}),l=r=>{if(!(isNaN(r.target.value)&&r.target.value!=="")&&(r.target.value===""&&s.setValues({calories:""}),s.handleChange(r),r.target.value>0)){const u=parseFloat(Number(r.target.value)),c=u*i/100;s.setValues({...s.values,weight:u,calories:c})}};return C.jsxs(ea,{onSubmit:s.handleSubmit,children:[C.jsxs("div",{className:"inputs-block",children:[C.jsx("input",{id:"title",name:"title",type:"text",defaultValue:s.values.title,disabled:!0,className:"title-input"}),C.jsxs("div",{className:"weight-input-block",children:[C.jsx(Jr,{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:l,value:s.values.weight}),C.jsx("span",{className:"grams-span",children:"grams"})]})]}),C.jsxs("div",{className:"calories-block",children:[C.jsx("span",{className:"calories-span",children:"Calories: "}),C.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:s.values.calories,className:"calories-input"})]}),C.jsxs("div",{className:"button-block",children:[C.jsx("button",{className:"add-button",type:"submit",children:"Add to diary"}),C.jsx("button",{onClick:e,className:"cancel-button",type:"button",children:"Cancel"})]})]})},oa=document.querySelector("#add-product-modal"),ia=({data:n,closeModal:e,showModal:o})=>{p.useEffect(()=>{if(!o)return;const t=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e,o]);const i=t=>{t.target===t.currentTarget&&e()};return jt.createPortal(C.jsx(Zr,{onClick:i,className:o?"":"hide-hidden",children:C.jsxs(Qr,{className:"modal",children:[C.jsx(Ze,{onClick:e,type:"button",children:C.jsx(Kr,{})}),C.jsx(na,{data:n,closeModal:e})]})}),oa)};var Qe=new Map,we=new WeakMap,$t=0,ra=void 0;function aa(n){return n?(we.has(n)||($t+=1,we.set(n,$t.toString())),we.get(n)):"0"}function sa(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?aa(n.root):n[e]}`).toString()}function ua(n){let e=sa(n),o=Qe.get(e);if(!o){const i=new Map;let t;const a=new IntersectionObserver(s=>{s.forEach(l=>{var r;const u=l.isIntersecting&&t.some(c=>l.intersectionRatio>=c);n.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(r=i.get(l.target))==null||r.forEach(c=>{c(u,l)})})},n);t=a.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),o={id:e,observer:a,elements:i},Qe.set(e,o)}return o}function la(n,e,o={},i=ra){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const r=n.getBoundingClientRect();return e(i,{isIntersecting:i,target:n,intersectionRatio:typeof o.threshold=="number"?o.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}const{id:t,observer:a,elements:s}=ua(o);let l=s.get(n)||[];return s.has(n)||s.set(n,l),l.push(e),a.observe(n),function(){l.splice(l.indexOf(e),1),l.length===0&&(s.delete(n),a.unobserve(n)),s.size===0&&(a.disconnect(),Qe.delete(t))}}function ca({threshold:n,delay:e,trackVisibility:o,rootMargin:i,root:t,triggerOnce:a,skip:s,initialInView:l,fallbackInView:r,onChange:u}={}){var c;const[d,g]=p.useState(null),v=p.useRef(),[b,h]=p.useState({inView:!!l,entry:void 0});v.current=u,p.useEffect(()=>{if(s||!d)return;let x;return x=la(d,(w,F)=>{h({inView:w,entry:F}),v.current&&v.current(w,F),F.isIntersecting&&a&&x&&(x(),x=void 0)},{root:t,rootMargin:i,threshold:n,trackVisibility:o,delay:e},r),()=>{x&&x()}},[Array.isArray(n)?n.toString():n,d,t,i,a,s,o,r,e]);const f=(c=b.entry)==null?void 0:c.target,m=p.useRef();!d&&f&&!a&&!s&&m.current!==f&&(m.current=f,h({inView:!!l,entry:void 0}));const E=[g,b.inView,b.entry];return E.ref=E[0],E.inView=E[1],E.entry=E[2],E}const da="/power-pulse-fs/assets/bgFood-46dd5bc9.png",pa="/power-pulse-fs/assets/bgFood2x-515a5477.png",fe=G(Vn)`
display: flex;
align-items:center;
gap: 8px;
color: rgba(239, 237, 232, 0.30);
line-height: 1.29;
 transition: all ${S.animation};
 &:hover  {
      color: ${S.orangeColor};
      }
      &:focus  {
      color: ${S.orangeColor};
      }
`,fa=G(Cn)`
width:16px;
height: 16px;
> path {
        stroke: ${S.greyTextColor};
      }
      transition: all ${S.animation};
        @media screen and (min-width: 768px) {
    ${fe}:hover &, ${fe}:focus & {
      > path {
        stroke: ${S.orangeColor};
      }
    }
    ${fe}:hover &, ${fe}:focus & {
      transform: translateX(10px);
    }
  }
`,ha=G(lt)`
position: absolute;
top: 14px;
right: 14px;
width: 22px;
height: 22px;
cursor: pointer;
 > path {
        stroke: ${S.whiteColor};
      }
      transition: stroke ${S.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    &:hover {
      > path {
        stroke: ${S.orangeColor};
      }
    }
    &:hover {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,ma=G.div`
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

  
`,ga=G.div`
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
   background-image: url(${da});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${pa});
    }


    .title{
        color: ${S.whiteColor};
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.33;
    }

    .calories {
        margin-top: 16px;
        margin-bottom: 24px;
        color: ${S.greyTextColor};
font-family: Roboto;
line-height: 1.29;
    }

    .calories-span{
color: ${S.orangeColor};
font-family: Roboto;
line-height: 1.29;
    }

    .button{
        margin-bottom: 16px;
        color: ${S.whiteColor};
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 1.13;
padding: 12px 32px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: ${S.orangeColor};
transition: all ${S.animation};
&:hover, &:focus {
  background: ${S.orange2Color};
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
`,va=()=>{const{isSuccessPopUpShown:n}=tt(i=>i.products),e=Te();p.useEffect(()=>{if(!n)return;const i=t=>{t.code==="Escape"&&e(be(!1))};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[n,e]);const o=i=>{i.target===i.currentTarget&&e(be(!1))};return n&&C.jsx(ma,{onClick:o,children:C.jsxs(ga,{children:[C.jsx(ha,{onClick:()=>e(be(!1))}),C.jsx("p",{className:"title",children:"Well done"}),C.jsxs("p",{className:"calories",children:["Calories: ",C.jsx("span",{className:"calories-span",children:"96"})]}),C.jsx("button",{onClick:()=>e(be(!1)),className:"button",type:"button",children:"Next product"}),C.jsxs(fe,{to:"/diary",children:["To the diary ",C.jsx(fa,{})]})]})})};function wn(n){var e,o,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var t=n.length;for(e=0;e<t;e++)n[e]&&(o=wn(n[e]))&&(i&&(i+=" "),i+=o)}else for(o in n)n[o]&&(i&&(i+=" "),i+=o);return i}function ae(){for(var n,e,o=0,i="",t=arguments.length;o<t;o++)(n=arguments[o])&&(e=wn(n))&&(i&&(i+=" "),i+=e);return i}const me=n=>typeof n=="number"&&!isNaN(n),ue=n=>typeof n=="string",ee=n=>typeof n=="function",De=n=>ue(n)||ee(n)?n:null,Je=n=>p.isValidElement(n)||ue(n)||ee(n)||me(n);function ba(n,e,o){o===void 0&&(o=300);const{scrollHeight:i,style:t}=n;requestAnimationFrame(()=>{t.minHeight="initial",t.height=i+"px",t.transition=`all ${o}ms`,requestAnimationFrame(()=>{t.height="0",t.padding="0",t.margin="0",setTimeout(e,o)})})}function Be(n){let{enter:e,exit:o,appendPosition:i=!1,collapse:t=!0,collapseDuration:a=300}=n;return function(s){let{children:l,position:r,preventExitTransition:u,done:c,nodeRef:d,isIn:g,playToast:v}=s;const b=i?`${e}--${r}`:e,h=i?`${o}--${r}`:o,f=p.useRef(0);return p.useLayoutEffect(()=>{const m=d.current,E=b.split(" "),x=w=>{w.target===d.current&&(v(),m.removeEventListener("animationend",x),m.removeEventListener("animationcancel",x),f.current===0&&w.type!=="animationcancel"&&m.classList.remove(...E))};m.classList.add(...E),m.addEventListener("animationend",x),m.addEventListener("animationcancel",x)},[]),p.useEffect(()=>{const m=d.current,E=()=>{m.removeEventListener("animationend",E),t?ba(m,c,a):c()};g||(u?E():(f.current=1,m.className+=` ${h}`,m.addEventListener("animationend",E)))},[g]),R.createElement(R.Fragment,null,l)}}function Bt(n,e){return n!=null?{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:e}:{}}const Q=new Map;let ge=[];const et=new Set,xa=n=>et.forEach(e=>e(n)),Sn=()=>Q.size>0;function Fn(n,e){var o;if(e)return!((o=Q.get(e))==null||!o.isToastActive(n));let i=!1;return Q.forEach(t=>{t.isToastActive(n)&&(i=!0)}),i}function On(n,e){Je(n)&&(Sn()||ge.push({content:n,options:e}),Q.forEach(o=>{o.buildToast(n,e)}))}function Nt(n,e){Q.forEach(o=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===o.id&&o.toggle(n,e==null?void 0:e.id):o.toggle(n,e==null?void 0:e.id)})}function Ea(n){const{subscribe:e,getSnapshot:o,setProps:i}=p.useRef(function(a){const s=a.containerId||1;return{subscribe(l){const r=function(c,d,g){let v=1,b=0,h=[],f=[],m=[],E=d;const x=new Map,w=new Set,F=()=>{m=Array.from(x.values()),w.forEach(y=>y())},I=y=>{f=y==null?[]:f.filter(M=>M!==y),F()},A=y=>{const{toastId:M,onOpen:k,updateId:N,children:$}=y.props,X=N==null;y.staleId&&x.delete(y.staleId),x.set(M,y),f=[...f,y.props.toastId].filter(q=>q!==y.staleId),F(),g(Bt(y,X?"added":"updated")),X&&ee(k)&&k(p.isValidElement($)&&$.props)};return{id:c,props:E,observe:y=>(w.add(y),()=>w.delete(y)),toggle:(y,M)=>{x.forEach(k=>{M!=null&&M!==k.props.toastId||ee(k.toggle)&&k.toggle(y)})},removeToast:I,toasts:x,clearQueue:()=>{b-=h.length,h=[]},buildToast:(y,M)=>{if((V=>{let{containerId:T,toastId:z,updateId:W}=V;const Y=T?T!==c:c!==1,J=x.has(z)&&W==null;return Y||J})(M))return;const{toastId:k,updateId:N,data:$,staleId:X,delay:q}=M,B=()=>{I(k)},j=N==null;j&&b++;const U={...E,style:E.toastStyle,key:v++,...Object.fromEntries(Object.entries(M).filter(V=>{let[T,z]=V;return z!=null})),toastId:k,updateId:N,data:$,closeToast:B,isIn:!1,className:De(M.className||E.toastClassName),bodyClassName:De(M.bodyClassName||E.bodyClassName),progressClassName:De(M.progressClassName||E.progressClassName),autoClose:!M.isLoading&&(_=M.autoClose,K=E.autoClose,_===!1||me(_)&&_>0?_:K),deleteToast(){const V=x.get(k),{onClose:T,children:z}=V.props;ee(T)&&T(p.isValidElement(z)&&z.props),g(Bt(V,"removed")),x.delete(k),b--,b<0&&(b=0),h.length>0?A(h.shift()):F()}};var _,K;U.closeButton=E.closeButton,M.closeButton===!1||Je(M.closeButton)?U.closeButton=M.closeButton:M.closeButton===!0&&(U.closeButton=!Je(E.closeButton)||E.closeButton);let Z=y;p.isValidElement(y)&&!ue(y.type)?Z=p.cloneElement(y,{closeToast:B,toastProps:U,data:$}):ee(y)&&(Z=y({closeToast:B,toastProps:U,data:$}));const te={content:Z,props:U,staleId:X};E.limit&&E.limit>0&&b>E.limit&&j?h.push(te):me(q)?setTimeout(()=>{A(te)},q):A(te)},setProps(y){E=y},setToggle:(y,M)=>{x.get(y).toggle=M},isToastActive:y=>f.some(M=>M===y),getSnapshot:()=>E.newestOnTop?m.reverse():m}}(s,a,xa);Q.set(s,r);const u=r.observe(l);return ge.forEach(c=>On(c.content,c.options)),ge=[],()=>{u(),Q.delete(s)}},setProps(l){var r;(r=Q.get(s))==null||r.setProps(l)},getSnapshot(){var l;return(l=Q.get(s))==null?void 0:l.getSnapshot()}}}(n)).current;i(n);const t=p.useSyncExternalStore(e,o,o);return{getToastToRender:function(a){if(!t)return[];const s=new Map;return t.forEach(l=>{const{position:r}=l.props;s.has(r)||s.set(r,[]),s.get(r).push(l)}),Array.from(s,l=>a(l[0],l[1]))},isToastActive:Fn,count:t==null?void 0:t.length}}function Ca(n){const[e,o]=p.useState(!1),[i,t]=p.useState(!1),a=p.useRef(null),s=p.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:r,closeToast:u,onClick:c,closeOnClick:d}=n;var g,v;function b(){o(!0)}function h(){o(!1)}function f(x){const w=a.current;s.canDrag&&w&&(s.didMove=!0,e&&h(),s.delta=n.draggableDirection==="x"?x.clientX-s.start:x.clientY-s.start,s.start!==x.clientX&&(s.canCloseOnClick=!1),w.style.transform=`translate3d(${n.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,w.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function m(){document.removeEventListener("pointermove",f),document.removeEventListener("pointerup",m);const x=a.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return t(!0),n.closeToast(),void n.collapseAll();x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}(v=Q.get((g={id:n.toastId,containerId:n.containerId,fn:o}).containerId||1))==null||v.setToggle(g.id,g.fn),p.useEffect(()=>{if(n.pauseOnFocusLoss)return document.hasFocus()||h(),window.addEventListener("focus",b),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",h)}},[n.pauseOnFocusLoss]);const E={onPointerDown:function(x){if(n.draggable===!0||n.draggable===x.pointerType){s.didMove=!1,document.addEventListener("pointermove",f),document.addEventListener("pointerup",m);const w=a.current;s.canCloseOnClick=!0,s.canDrag=!0,w.style.transition="none",n.draggableDirection==="x"?(s.start=x.clientX,s.removalDistance=w.offsetWidth*(n.draggablePercent/100)):(s.start=x.clientY,s.removalDistance=w.offsetHeight*(n.draggablePercent===80?1.5*n.draggablePercent:n.draggablePercent)/100)}},onPointerUp:function(x){const{top:w,bottom:F,left:I,right:A}=a.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&n.pauseOnHover&&x.clientX>=I&&x.clientX<=A&&x.clientY>=w&&x.clientY<=F?h():b()}};return l&&r&&(E.onMouseEnter=h,n.stacked||(E.onMouseLeave=b)),d&&(E.onClick=x=>{c&&c(x),s.canCloseOnClick&&u()}),{playToast:b,pauseToast:h,isRunning:e,preventExitTransition:i,toastRef:a,eventHandlers:E}}function ya(n){let{delay:e,isRunning:o,closeToast:i,type:t="default",hide:a,className:s,style:l,controlledProgress:r,progress:u,rtl:c,isIn:d,theme:g}=n;const v=a||r&&u===0,b={...l,animationDuration:`${e}ms`,animationPlayState:o?"running":"paused"};r&&(b.transform=`scaleX(${u})`);const h=ae("Toastify__progress-bar",r?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${t}`,{"Toastify__progress-bar--rtl":c}),f=ee(s)?s({rtl:c,type:t,defaultClassName:h}):ae(h,s),m={[r&&u>=1?"onTransitionEnd":"onAnimationEnd"]:r&&u<1?null:()=>{d&&i()}};return R.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},R.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${t}`}),R.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:f,style:b,...m}))}let wa=1;const In=()=>""+wa++;function Sa(n){return n&&(ue(n.toastId)||me(n.toastId))?n.toastId:In()}function he(n,e){return On(n,e),e.toastId}function Re(n,e){return{...e,type:e&&e.type||n,toastId:Sa(e)}}function Se(n){return(e,o)=>he(e,Re(n,o))}function L(n,e){return he(n,Re("default",e))}L.loading=(n,e)=>he(n,Re("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),L.promise=function(n,e,o){let i,{pending:t,error:a,success:s}=e;t&&(i=ue(t)?L.loading(t,o):L.loading(t.render,{...o,...t}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},r=(c,d,g)=>{if(d==null)return void L.dismiss(i);const v={type:c,...l,...o,data:g},b=ue(d)?{render:d}:d;return i?L.update(i,{...v,...b}):L(b.render,{...v,...b}),g},u=ee(n)?n():n;return u.then(c=>r("success",s,c)).catch(c=>r("error",a,c)),u},L.success=Se("success"),L.info=Se("info"),L.error=Se("error"),L.warning=Se("warning"),L.warn=L.warning,L.dark=(n,e)=>he(n,Re("default",{theme:"dark",...e})),L.dismiss=function(n){(function(e){var o;if(Sn()){if(e==null||ue(o=e)||me(o))Q.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){var i;(i=Q.get(e.containerId))!=null&&i.removeToast(e.id)||Q.forEach(t=>{t.removeToast(e.id)})}}else ge=ge.filter(t=>e!=null&&t.options.toastId!==e)})(n)},L.clearWaitingQueue=function(n){n===void 0&&(n={}),Q.forEach(e=>{!e.props.limit||n.containerId&&e.id!==n.containerId||e.clearQueue()})},L.isActive=Fn,L.update=function(n,e){e===void 0&&(e={});const o=((i,t)=>{var a;let{containerId:s}=t;return(a=Q.get(s||1))==null?void 0:a.toasts.get(i)})(n,e);if(o){const{props:i,content:t}=o,a={delay:100,...i,...e,toastId:e.toastId||n,updateId:In()};a.toastId!==n&&(a.staleId=n);const s=a.render||t;delete a.render,he(s,a)}},L.done=n=>{L.update(n,{progress:1})},L.onChange=function(n){return et.add(n),()=>{et.delete(n)}},L.play=n=>Nt(!0,n),L.pause=n=>Nt(!1,n);const Fe=n=>{let{theme:e,type:o,isLoading:i,...t}=n;return R.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...t})},Ge={info:function(n){return R.createElement(Fe,{...n},R.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return R.createElement(Fe,{...n},R.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return R.createElement(Fe,{...n},R.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return R.createElement(Fe,{...n},R.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return R.createElement("div",{className:"Toastify__spinner"})}},Fa=n=>{const{isRunning:e,preventExitTransition:o,toastRef:i,eventHandlers:t,playToast:a}=Ca(n),{closeButton:s,children:l,autoClose:r,onClick:u,type:c,hideProgressBar:d,closeToast:g,transition:v,position:b,className:h,style:f,bodyClassName:m,bodyStyle:E,progressClassName:x,progressStyle:w,updateId:F,role:I,progress:A,rtl:y,toastId:M,deleteToast:k,isIn:N,isLoading:$,closeOnClick:X,theme:q}=n,B=ae("Toastify__toast",`Toastify__toast-theme--${q}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":y},{"Toastify__toast--close-on-click":X}),j=ee(h)?h({rtl:y,position:b,type:c,defaultClassName:B}):ae(B,h),U=function(te){let{theme:V,type:T,isLoading:z,icon:W}=te,Y=null;const J={theme:V,type:T,isLoading:z};return W===!1||(ee(W)?Y=W(J):p.isValidElement(W)?Y=p.cloneElement(W,J):z?Y=Ge.spinner():(ne=>ne in Ge)(T)&&(Y=Ge[T](J))),Y}(n),_=!!A||!r,K={closeToast:g,type:c,theme:q};let Z=null;return s===!1||(Z=ee(s)?s(K):p.isValidElement(s)?p.cloneElement(s,K):function(te){let{closeToast:V,theme:T,ariaLabel:z="close"}=te;return R.createElement("button",{className:`Toastify__close-button Toastify__close-button--${T}`,type:"button",onClick:W=>{W.stopPropagation(),V(W)},"aria-label":z},R.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},R.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(K)),R.createElement(v,{isIn:N,done:k,position:b,preventExitTransition:o,nodeRef:i,playToast:a},R.createElement("div",{id:M,onClick:u,"data-in":N,className:j,...t,style:f,ref:i},R.createElement("div",{...N&&{role:I},className:ee(m)?m({type:c}):ae("Toastify__toast-body",m),style:E},U!=null&&R.createElement("div",{className:ae("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},U),R.createElement("div",null,l)),Z,R.createElement(ya,{...F&&!_?{key:`pb-${F}`}:{},rtl:y,theme:q,delay:r,isRunning:e,isIn:N,closeToast:g,hide:d,type:c,style:w,className:x,controlledProgress:_,progress:A||0})))},Ne=function(n,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}},dt=Be(Ne("bounce",!0));Be(Ne("slide",!0));Be(Ne("zoom"));Be(Ne("flip"));const Oa={position:"top-right",transition:dt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Ia(n){let e={...Oa,...n};const o=n.stacked,[i,t]=p.useState(!0),a=p.useRef(null),{getToastToRender:s,isToastActive:l,count:r}=Ea(e),{className:u,style:c,rtl:d,containerId:g}=e;function v(h){const f=ae("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":d});return ee(u)?u({position:h,rtl:d,defaultClassName:f}):ae(f,De(u))}function b(){o&&(t(!0),L.play())}return p.useLayoutEffect(()=>{if(o){var h;const f=a.current.querySelectorAll('[data-in="true"]'),m=12,E=(h=e.position)==null?void 0:h.includes("top");let x=0,w=0;Array.from(f).reverse().forEach((F,I)=>{const A=F;A.classList.add("Toastify__toast--stacked"),I>0&&(A.dataset.collapsed=`${i}`),A.dataset.pos||(A.dataset.pos=E?"top":"bot");const y=x*(i?.2:1)+(i?0:m*I);A.style.setProperty("--y",`${E?y:-1*y}px`),A.style.setProperty("--g",`${m}`),A.style.setProperty("--s",""+(1-(i?w:0))),x+=A.offsetHeight,w+=.025})}},[i,r,o]),R.createElement("div",{ref:a,className:"Toastify",id:g,onMouseEnter:()=>{o&&(t(!1),L.pause())},onMouseLeave:b},s((h,f)=>{const m=f.length?{...c}:{...c,pointerEvents:"none"};return R.createElement("div",{className:v(h),style:m,key:`container-${h}`},f.map(E=>{let{content:x,props:w}=E;return R.createElement(Fa,{...w,stacked:o,collapseAll:b,isIn:l(w.toastId,w.containerId),style:w.style,key:`toast-${w.key}`},x)}))}))}const se={bloodType:"1",page:1},Da=()=>{const[n]=Ht(),[e,o]=p.useState(!1),[i,t]=p.useState(null),{products:a,isLoading:s,pageStore:l,totalPages:r,isSuccessPopUpShown:u}=tt(I=>I.products),[c,d]=p.useState(!0),g=p.useRef(null),{ref:v,inView:b}=ca({skip:!c,threshold:.7}),h=Te();p.useEffect(()=>{u&&o(!1)},[u]),p.useEffect(()=>{e?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},[e]);const f=I=>{t(I),o(!0)},m=()=>{h(Rn(!1)),o(!1)},E=p.useMemo(()=>Object.fromEntries([...n]),[n]),{search:x,category:w,recommended:F}=E;return x?se.q=x:delete se.q,w&&(se.cat=w.toLowerCase()),F&&F!=="All"?se.rec=F:delete se.rec,p.useEffect(()=>{l===1&&a&&(g.current.scrollTop=0,d(!0))},[l,a]),p.useEffect(()=>{if(!(s||l===1&r===1)){if(l>=r&&c)return L.info("You have reached the end of search results",{position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:dt}),d(!1);if(b){if(l===r)return;h(Oe(l+1))}}},[b,l,s,h,r,c]),p.useEffect(()=>{se.page=l,h(Ln(se))},[w,F,x,h,l,r]),s&&a===null?C.jsx(Br,{className:"loader-1"}):a&&a.length>0?C.jsxs(C.Fragment,{children:[C.jsxs(Nr,{ref:g,children:[a.map(I=>s?C.jsx(yn,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:C.jsx("div",{className:"loader"})},I._id):C.jsx(Xr,{handleOpenModal:f,data:I},I._id)),C.jsx("div",{ref:v})]}),C.jsx(ia,{showModal:e,closeModal:m,data:i}),C.jsx(va,{})]}):C.jsx(Hr,{})},Aa="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",Ma="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",Pa=le.section`

@media screen and (min-width: 1440px) {
  height: 90vh;
 background: url(${Aa});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${Ma});
    }
}
`,ka=le.div`
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
`,Va=le.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,ja=()=>{const{addProductFalse:n}=tt(e=>e.products);return p.useEffect(()=>{n&&L.error("Enter correct data!",{position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:dt})},[n]),C.jsx(Pa,{children:C.jsxs(ka,{children:[C.jsxs("div",{className:"title-form-block",children:[C.jsx(Va,{children:"Products"}),C.jsx($r,{})]}),C.jsx(Da,{}),C.jsx(Ia,{})]})})};export{ja as default};
