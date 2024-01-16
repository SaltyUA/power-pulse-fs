import{a as p,b as Wt,j as y,c as Yt,u as Be,d as Ie,s as G,e as $n,f as Bn,N as jn,h as it,i as xe,k as Nn,m as _n,n as L}from"./index-13d08a15.js";import{u as Gt}from"./formik.esm-ab78b007.js";import{h as Hn,E as zn,c as Un,s as Wn,_ as A,n as ce}from"./emotion-styled.browser.esm-c1364d88.js";import{s as S}from"./styleGuide-7c616dce.js";var F=function(e,o){var r=arguments;if(o==null||!Hn.call(o,"css"))return p.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=zn,a[1]=Un(e,o);for(var s=2;s<n;s++)a[s]=r[s];return p.createElement.apply(null,a)};function at(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return Wn(e)}var Yn=function(){var e=at.apply(void 0,arguments),o="animation-"+e.name;return{name:o,styles:"@keyframes "+o+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function le(t){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(t)}function Gn(t,e){if(le(t)!=="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e||"default");if(le(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function qt(t){var e=Gn(t,"string");return le(e)==="symbol"?e:String(e)}function fe(t,e,o){return e=qt(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function xt(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),o.push.apply(o,r)}return o}function O(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?xt(Object(o),!0).forEach(function(r){fe(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):xt(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function qn(t){if(Array.isArray(t))return t}function Xn(t,e){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var r,n,a,s,l=[],i=!0,u=!1;try{if(a=(o=o.call(t)).next,e===0){if(Object(o)!==o)return;i=!1}else for(;!(i=(r=a.call(o)).done)&&(l.push(r.value),l.length!==e);i=!0);}catch(c){u=!0,n=c}finally{try{if(!i&&o.return!=null&&(s=o.return(),Object(s)!==s))return}finally{if(u)throw n}}return l}}function Ke(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function Xt(t,e){if(t){if(typeof t=="string")return Ke(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Ke(t,e)}}function Kn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(t,e){return qn(t)||Xn(t,e)||Xt(t,e)||Kn()}function Zn(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,a;for(a=0;a<r.length;a++)n=r[a],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function ie(t,e){if(t==null)return{};var o=Zn(t,e),r,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var Qn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Jn(t){var e=t.defaultInputValue,o=e===void 0?"":e,r=t.defaultMenuIsOpen,n=r===void 0?!1:r,a=t.defaultValue,s=a===void 0?null:a,l=t.inputValue,i=t.menuIsOpen,u=t.onChange,c=t.onInputChange,d=t.onMenuClose,m=t.onMenuOpen,v=t.value,b=ie(t,Qn),g=p.useState(l!==void 0?l:o),f=re(g,2),h=f[0],E=f[1],x=p.useState(i!==void 0?i:n),w=re(x,2),I=w[0],M=w[1],D=p.useState(v!==void 0?v:s),C=re(D,2),P=C[0],k=C[1],j=p.useCallback(function(H,K){typeof u=="function"&&u(H,K),k(H)},[u]),$=p.useCallback(function(H,K){var Z;typeof c=="function"&&(Z=c(H,K)),E(Z!==void 0?Z:H)},[c]),X=p.useCallback(function(){typeof m=="function"&&m(),M(!0)},[m]),q=p.useCallback(function(){typeof d=="function"&&d(),M(!1)},[d]),B=l!==void 0?l:h,N=i!==void 0?i:I,U=v!==void 0?v:P;return O(O({},b),{},{inputValue:B,menuIsOpen:N,onChange:j,onInputChange:$,onMenuClose:q,onMenuOpen:X,value:U})}function eo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Et(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,qt(r.key),r)}}function to(t,e,o){return e&&Et(t.prototype,e),o&&Et(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ze(t,e){return Ze=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},Ze(t,e)}function no(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ze(t,e)}function Ae(t){return Ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Ae(t)}function oo(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ro(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function io(t,e){if(e&&(le(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ro(t)}function ao(t){var e=oo();return function(){var r=Ae(t),n;if(e){var a=Ae(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return io(this,n)}}function so(t){if(Array.isArray(t))return Ke(t)}function uo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(t){return so(t)||uo(t)||Xt(t)||lo()}function co(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const po=Math.min,fo=Math.max,Me=Math.round,Ee=Math.floor,ke=t=>({x:t,y:t});function mo(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Kt(t){return Qt(t)?(t.nodeName||"").toLowerCase():"#document"}function oe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Zt(t){var e;return(e=(Qt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Qt(t){return t instanceof Node||t instanceof oe(t).Node}function Qe(t){return t instanceof Element||t instanceof oe(t).Element}function ut(t){return t instanceof HTMLElement||t instanceof oe(t).HTMLElement}function yt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof oe(t).ShadowRoot}function Jt(t){const{overflow:e,overflowX:o,overflowY:r,display:n}=lt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(n)}function ho(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function go(t){return["html","body","#document"].includes(Kt(t))}function lt(t){return oe(t).getComputedStyle(t)}function vo(t){if(Kt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yt(t)&&t.host||Zt(t);return yt(e)?e.host:e}function en(t){const e=vo(t);return go(e)?t.ownerDocument?t.ownerDocument.body:t.body:ut(e)&&Jt(e)?e:en(e)}function Ve(t,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const n=en(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),s=oe(n);return a?e.concat(s,s.visualViewport||[],Jt(n)?n:[],s.frameElement&&o?Ve(s.frameElement):[]):e.concat(n,Ve(n,[],o))}function bo(t){const e=lt(t);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const n=ut(t),a=n?t.offsetWidth:o,s=n?t.offsetHeight:r,l=Me(o)!==a||Me(r)!==s;return l&&(o=a,r=s),{width:o,height:r,$:l}}function ct(t){return Qe(t)?t:t.contextElement}function He(t){const e=ct(t);if(!ut(e))return ke(1);const o=e.getBoundingClientRect(),{width:r,height:n,$:a}=bo(e);let s=(a?Me(o.width):o.width)/r,l=(a?Me(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const xo=ke(0);function Eo(t){const e=oe(t);return!ho()||!e.visualViewport?xo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function yo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==oe(t)?!1:e}function Ct(t,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect(),a=ct(t);let s=ke(1);e&&(r?Qe(r)&&(s=He(r)):s=He(t));const l=yo(a,o,r)?Eo(a):ke(0);let i=(n.left+l.x)/s.x,u=(n.top+l.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const m=oe(a),v=r&&Qe(r)?oe(r):r;let b=m.frameElement;for(;b&&r&&v!==m;){const g=He(b),f=b.getBoundingClientRect(),h=lt(b),E=f.left+(b.clientLeft+parseFloat(h.paddingLeft))*g.x,x=f.top+(b.clientTop+parseFloat(h.paddingTop))*g.y;i*=g.x,u*=g.y,c*=g.x,d*=g.y,i+=E,u+=x,b=oe(b).frameElement}}return mo({width:c,height:d,x:i,y:u})}function Co(t,e){let o=null,r;const n=Zt(t);function a(){clearTimeout(r),o&&o.disconnect(),o=null}function s(l,i){l===void 0&&(l=!1),i===void 0&&(i=1),a();const{left:u,top:c,width:d,height:m}=t.getBoundingClientRect();if(l||e(),!d||!m)return;const v=Ee(c),b=Ee(n.clientWidth-(u+d)),g=Ee(n.clientHeight-(c+m)),f=Ee(u),E={rootMargin:-v+"px "+-b+"px "+-g+"px "+-f+"px",threshold:fo(0,po(1,i))||1};let x=!0;function w(I){const M=I[0].intersectionRatio;if(M!==i){if(!x)return s();M?s(!1,M):r=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{o=new IntersectionObserver(w,{...E,root:n.ownerDocument})}catch{o=new IntersectionObserver(w,E)}o.observe(t)}return s(!0),a}function wo(t,e,o,r){r===void 0&&(r={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:i=!1}=r,u=ct(t),c=n||a?[...u?Ve(u):[],...Ve(e)]:[];c.forEach(h=>{n&&h.addEventListener("scroll",o,{passive:!0}),a&&h.addEventListener("resize",o)});const d=u&&l?Co(u,o):null;let m=-1,v=null;s&&(v=new ResizeObserver(h=>{let[E]=h;E&&E.target===u&&v&&(v.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{v&&v.observe(e)})),o()}),u&&!i&&v.observe(u),v.observe(e));let b,g=i?Ct(t):null;i&&f();function f(){const h=Ct(t);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&o(),g=h,b=requestAnimationFrame(f)}return o(),()=>{c.forEach(h=>{n&&h.removeEventListener("scroll",o),a&&h.removeEventListener("resize",o)}),d&&d(),v&&v.disconnect(),v=null,i&&cancelAnimationFrame(b)}}var Je=p.useLayoutEffect,So=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Le=function(){};function Fo(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function Oo(t,e){for(var o=arguments.length,r=new Array(o>2?o-2:0),n=2;n<o;n++)r[n-2]=arguments[n];var a=[].concat(r);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(Fo(t,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var wt=function(e){return Ro(e)?e.filter(Boolean):le(e)==="object"&&e!==null?[e]:[]},tn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var o=ie(e,So);return O({},o)},_=function(e,o,r){var n=e.cx,a=e.getStyles,s=e.getClassNames,l=e.className;return{css:a(o,e),className:n(r??{},s(o,e),l)}};function je(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function Io(t){return je(t)?window.innerHeight:t.clientHeight}function nn(t){return je(t)?window.pageYOffset:t.scrollTop}function Re(t,e){if(je(t)){window.scrollTo(0,e);return}t.scrollTop=e}function Do(t){var e=getComputedStyle(t),o=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var n=t;n=n.parentElement;)if(e=getComputedStyle(n),!(o&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return n;return document.documentElement}function Po(t,e,o,r){return o*((t=t/r-1)*t*t+1)+e}function ye(t,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Le,n=nn(t),a=e-n,s=10,l=0;function i(){l+=s;var u=Po(l,n,a,o);Re(t,u),l<o?window.requestAnimationFrame(i):r(t)}i()}function St(t,e){var o=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=e.offsetHeight/3;r.bottom+n>o.bottom?Re(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+n,t.scrollHeight)):r.top-n<o.top&&Re(t,Math.max(e.offsetTop-n,0))}function Ao(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ft(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Mo(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var on=!1,ko={get passive(){return on=!0}},Ce=typeof window<"u"?window:{};Ce.addEventListener&&Ce.removeEventListener&&(Ce.addEventListener("p",Le,ko),Ce.removeEventListener("p",Le,!1));var Vo=on;function Lo(t){return t!=null}function Ro(t){return Array.isArray(t)}function we(t,e,o){return t?e:o}var To=function(e){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];var a=Object.entries(e).filter(function(s){var l=re(s,1),i=l[0];return!r.includes(i)});return a.reduce(function(s,l){var i=re(l,2),u=i[0],c=i[1];return s[u]=c,s},{})},$o=["children","innerProps"],Bo=["children","innerProps"];function jo(t){var e=t.maxHeight,o=t.menuEl,r=t.minHeight,n=t.placement,a=t.shouldScroll,s=t.isFixedPosition,l=t.controlHeight,i=Do(o),u={placement:"bottom",maxHeight:e};if(!o||!o.offsetParent)return u;var c=i.getBoundingClientRect(),d=c.height,m=o.getBoundingClientRect(),v=m.bottom,b=m.height,g=m.top,f=o.offsetParent.getBoundingClientRect(),h=f.top,E=s?window.innerHeight:Io(i),x=nn(i),w=parseInt(getComputedStyle(o).marginBottom,10),I=parseInt(getComputedStyle(o).marginTop,10),M=h-I,D=E-g,C=M+x,P=d-x-g,k=v-E+x+w,j=x+g-I,$=160;switch(n){case"auto":case"bottom":if(D>=b)return{placement:"bottom",maxHeight:e};if(P>=b&&!s)return a&&ye(i,k,$),{placement:"bottom",maxHeight:e};if(!s&&P>=r||s&&D>=r){a&&ye(i,k,$);var X=s?D-w:P-w;return{placement:"bottom",maxHeight:X}}if(n==="auto"||s){var q=e,B=s?M:C;return B>=r&&(q=Math.min(B-w-l,e)),{placement:"top",maxHeight:q}}if(n==="bottom")return a&&Re(i,k),{placement:"bottom",maxHeight:e};break;case"top":if(M>=b)return{placement:"top",maxHeight:e};if(C>=b&&!s)return a&&ye(i,j,$),{placement:"top",maxHeight:e};if(!s&&C>=r||s&&M>=r){var N=e;return(!s&&C>=r||s&&M>=r)&&(N=s?M-I:C-I),a&&ye(i,j,$),{placement:"top",maxHeight:N}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return u}function No(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var rn=function(e){return e==="auto"?"bottom":e},_o=function(e,o){var r,n=e.placement,a=e.theme,s=a.borderRadius,l=a.spacing,i=a.colors;return O((r={label:"menu"},fe(r,No(n),"100%"),fe(r,"position","absolute"),fe(r,"width","100%"),fe(r,"zIndex",1),r),o?{}:{backgroundColor:i.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},an=p.createContext(null),Ho=function(e){var o=e.children,r=e.minMenuHeight,n=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,i=e.theme,u=p.useContext(an)||{},c=u.setPortalPlacement,d=p.useRef(null),m=p.useState(n),v=re(m,2),b=v[0],g=v[1],f=p.useState(null),h=re(f,2),E=h[0],x=h[1],w=i.spacing.controlHeight;return Je(function(){var I=d.current;if(I){var M=s==="fixed",D=l&&!M,C=jo({maxHeight:n,menuEl:I,minHeight:r,placement:a,shouldScroll:D,isFixedPosition:M,controlHeight:w});g(C.maxHeight),x(C.placement),c==null||c(C.placement)}},[n,a,s,l,r,c,w]),o({ref:d,placerProps:O(O({},e),{},{placement:E||rn(a),maxHeight:b})})},zo=function(e){var o=e.children,r=e.innerRef,n=e.innerProps;return F("div",A({},_(e,"menu",{menu:!0}),{ref:r},n),o)},Uo=zo,Wo=function(e,o){var r=e.maxHeight,n=e.theme.spacing.baseUnit;return O({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:n,paddingTop:n})},Yo=function(e){var o=e.children,r=e.innerProps,n=e.innerRef,a=e.isMulti;return F("div",A({},_(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},r),o)},sn=function(e,o){var r=e.theme,n=r.spacing.baseUnit,a=r.colors;return O({textAlign:"center"},o?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},Go=sn,qo=sn,Xo=function(e){var o=e.children,r=o===void 0?"No options":o,n=e.innerProps,a=ie(e,$o);return F("div",A({},_(O(O({},a),{},{children:r,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),r)},Ko=function(e){var o=e.children,r=o===void 0?"Loading...":o,n=e.innerProps,a=ie(e,Bo);return F("div",A({},_(O(O({},a),{},{children:r,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),r)},Zo=function(e){var o=e.rect,r=e.offset,n=e.position;return{left:o.left,position:n,top:r,width:o.width,zIndex:1}},Qo=function(e){var o=e.appendTo,r=e.children,n=e.controlElement,a=e.innerProps,s=e.menuPlacement,l=e.menuPosition,i=p.useRef(null),u=p.useRef(null),c=p.useState(rn(s)),d=re(c,2),m=d[0],v=d[1],b=p.useMemo(function(){return{setPortalPlacement:v}},[]),g=p.useState(null),f=re(g,2),h=f[0],E=f[1],x=p.useCallback(function(){if(n){var D=Ao(n),C=l==="fixed"?0:window.pageYOffset,P=D[m]+C;(P!==(h==null?void 0:h.offset)||D.left!==(h==null?void 0:h.rect.left)||D.width!==(h==null?void 0:h.rect.width))&&E({offset:P,rect:D})}},[n,l,m,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);Je(function(){x()},[x]);var w=p.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),n&&i.current&&(u.current=wo(n,i.current,x,{elementResize:"ResizeObserver"in window}))},[n,x]);Je(function(){w()},[w]);var I=p.useCallback(function(D){i.current=D,w()},[w]);if(!o&&l!=="fixed"||!h)return null;var M=F("div",A({ref:I},_(O(O({},e),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),a),r);return F(an.Provider,{value:b},o?Wt.createPortal(M,o):M)},Jo=function(e){var o=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},er=function(e){var o=e.children,r=e.innerProps,n=e.isDisabled,a=e.isRtl;return F("div",A({},_(e,"container",{"--is-disabled":n,"--is-rtl":a}),r),o)},tr=function(e,o){var r=e.theme.spacing,n=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return O({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},nr=function(e){var o=e.children,r=e.innerProps,n=e.isMulti,a=e.hasValue;return F("div",A({},_(e,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),r),o)},or=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},rr=function(e){var o=e.children,r=e.innerProps;return F("div",A({},_(e,"indicatorsContainer",{indicators:!0}),r),o)},Ot,ir=["size"],ar=["innerProps","isRtl","size"],sr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},un=function(e){var o=e.size,r=ie(e,ir);return F("svg",A({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:sr},r))},dt=function(e){return F(un,A({size:20},e),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},ln=function(e){return F(un,A({size:20},e),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},cn=function(e,o){var r=e.isFocused,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return O({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:r?s.neutral60:s.neutral20,padding:a*2,":hover":{color:r?s.neutral80:s.neutral40}})},ur=cn,lr=function(e){var o=e.children,r=e.innerProps;return F("div",A({},_(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),o||F(ln,null))},cr=cn,dr=function(e){var o=e.children,r=e.innerProps;return F("div",A({},_(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),o||F(dt,null))},pr=function(e,o){var r=e.isDisabled,n=e.theme,a=n.spacing.baseUnit,s=n.colors;return O({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},fr=function(e){var o=e.innerProps;return F("span",A({},o,_(e,"indicatorSeparator",{"indicator-separator":!0})))},mr=Yn(Ot||(Ot=co([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),hr=function(e,o){var r=e.isFocused,n=e.size,a=e.theme,s=a.colors,l=a.spacing.baseUnit;return O({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},o?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},ze=function(e){var o=e.delay,r=e.offset;return F("span",{css:at({animation:"".concat(mr," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},gr=function(e){var o=e.innerProps,r=e.isRtl,n=e.size,a=n===void 0?4:n,s=ie(e,ar);return F("div",A({},_(O(O({},s),{},{innerProps:o,isRtl:r,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),F(ze,{delay:0,offset:r}),F(ze,{delay:160,offset:!0}),F(ze,{delay:320,offset:!r}))},vr=function(e,o){var r=e.isDisabled,n=e.isFocused,a=e.theme,s=a.colors,l=a.borderRadius,i=a.spacing;return O({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:i.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:n?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},br=function(e){var o=e.children,r=e.isDisabled,n=e.isFocused,a=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return F("div",A({ref:a},_(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":n,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),o)},xr=br,Er=["data"],yr=function(e,o){var r=e.theme.spacing;return o?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},Cr=function(e){var o=e.children,r=e.cx,n=e.getStyles,a=e.getClassNames,s=e.Heading,l=e.headingProps,i=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return F("div",A({},_(e,"group",{group:!0}),i),F(s,A({},l,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:r}),u),F("div",null,o))},wr=function(e,o){var r=e.theme,n=r.colors,a=r.spacing;return O({label:"group",cursor:"default",display:"block"},o?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Sr=function(e){var o=tn(e);o.data;var r=ie(o,Er);return F("div",A({},_(e,"groupHeading",{"group-heading":!0}),r))},Fr=Cr,Or=["innerRef","isDisabled","isHidden","inputClassName"],Ir=function(e,o){var r=e.isDisabled,n=e.value,a=e.theme,s=a.spacing,l=a.colors;return O(O({visibility:r?"hidden":"visible",transform:n?"translateZ(0)":""},Dr),o?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},dn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Dr={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":O({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},dn)},Pr=function(e){return O({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},dn)},Ar=function(e){var o=e.cx,r=e.value,n=tn(e),a=n.innerRef,s=n.isDisabled,l=n.isHidden,i=n.inputClassName,u=ie(n,Or);return F("div",A({},_(e,"input",{"input-container":!0}),{"data-value":r||""}),F("input",A({className:o({input:!0},i),ref:a,style:Pr(l),disabled:s},u)))},Mr=Ar,kr=function(e,o){var r=e.theme,n=r.spacing,a=r.borderRadius,s=r.colors;return O({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},Vr=function(e,o){var r=e.theme,n=r.borderRadius,a=r.colors,s=e.cropWithEllipsis;return O({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Lr=function(e,o){var r=e.theme,n=r.spacing,a=r.borderRadius,s=r.colors,l=e.isFocused;return O({alignItems:"center",display:"flex"},o?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},pn=function(e){var o=e.children,r=e.innerProps;return F("div",r,o)},Rr=pn,Tr=pn;function $r(t){var e=t.children,o=t.innerProps;return F("div",A({role:"button"},o),e||F(dt,{size:14}))}var Br=function(e){var o=e.children,r=e.components,n=e.data,a=e.innerProps,s=e.isDisabled,l=e.removeProps,i=e.selectProps,u=r.Container,c=r.Label,d=r.Remove;return F(u,{data:n,innerProps:O(O({},_(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:i},F(c,{data:n,innerProps:O({},_(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:i},o),F(d,{data:n,innerProps:O(O({},_(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},l),selectProps:i}))},jr=Br,Nr=function(e,o){var r=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.theme,l=s.spacing,i=s.colors;return O({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:a?i.primary:n?i.primary25:"transparent",color:r?i.neutral20:a?i.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:a?i.primary:i.primary50}})},_r=function(e){var o=e.children,r=e.isDisabled,n=e.isFocused,a=e.isSelected,s=e.innerRef,l=e.innerProps;return F("div",A({},_(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":r},l),o)},Hr=_r,zr=function(e,o){var r=e.theme,n=r.spacing,a=r.colors;return O({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},Ur=function(e){var o=e.children,r=e.innerProps;return F("div",A({},_(e,"placeholder",{placeholder:!0}),r),o)},Wr=Ur,Yr=function(e,o){var r=e.isDisabled,n=e.theme,a=n.spacing,s=n.colors;return O({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:r?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Gr=function(e){var o=e.children,r=e.isDisabled,n=e.innerProps;return F("div",A({},_(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),n),o)},qr=Gr,pt={ClearIndicator:dr,Control:xr,DropdownIndicator:lr,DownChevron:ln,CrossIcon:dt,Group:Fr,GroupHeading:Sr,IndicatorsContainer:rr,IndicatorSeparator:fr,Input:Mr,LoadingIndicator:gr,Menu:Uo,MenuList:Yo,MenuPortal:Qo,LoadingMessage:Ko,NoOptionsMessage:Xo,MultiValue:jr,MultiValueContainer:Rr,MultiValueLabel:Tr,MultiValueRemove:$r,Option:Hr,Placeholder:Wr,SelectContainer:er,SingleValue:qr,ValueContainer:nr},Xr=function(e){return O(O({},pt),e.components)},It=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Kr(t,e){return!!(t===e||It(t)&&It(e))}function Zr(t,e){if(t.length!==e.length)return!1;for(var o=0;o<t.length;o++)if(!Kr(t[o],e[o]))return!1;return!0}function Qr(t,e){e===void 0&&(e=Zr);var o=null;function r(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(o&&o.lastThis===this&&e(n,o.lastArgs))return o.lastResult;var s=t.apply(this,n);return o={lastResult:s,lastArgs:n,lastThis:this},s}return r.clear=function(){o=null},r}var Jr={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ei=function(e){return F("span",A({css:Jr},e))},Dt=ei,ti={guidance:function(e){var o=e.isSearchable,r=e.isMulti,n=e.tabSelectsValue,a=e.context,s=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var o=e.action,r=e.label,n=r===void 0?"":r,a=e.labels,s=e.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(e){var o=e.context,r=e.focused,n=e.options,a=e.label,s=a===void 0?"":a,l=e.selectValue,i=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(g,f){return g&&g.length?"".concat(g.indexOf(f)+1," of ").concat(g.length):""};if(o==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,r),".");if(o==="menu"&&c){var m=i?" disabled":"",v="".concat(u?" selected":"").concat(m);return"".concat(s).concat(v,", ").concat(d(n,r),".")}return""},onFilter:function(e){var o=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(o?" for search term "+o:"",".")}},ni=function(e){var o=e.ariaSelection,r=e.focusedOption,n=e.focusedValue,a=e.focusableOptions,s=e.isFocused,l=e.selectValue,i=e.selectProps,u=e.id,c=e.isAppleDevice,d=i.ariaLiveMessages,m=i.getOptionLabel,v=i.inputValue,b=i.isMulti,g=i.isOptionDisabled,f=i.isSearchable,h=i.menuIsOpen,E=i.options,x=i.screenReaderStatus,w=i.tabSelectsValue,I=i.isLoading,M=i["aria-label"],D=i["aria-live"],C=p.useMemo(function(){return O(O({},ti),d||{})},[d]),P=p.useMemo(function(){var B="";if(o&&C.onChange){var N=o.option,U=o.options,H=o.removedValue,K=o.removedValues,Z=o.value,te=function(ne){return Array.isArray(ne)?null:ne},V=H||N||te(Z),R=V?m(V):"",z=U||K||void 0,W=z?z.map(m):[],Y=O({isDisabled:V&&g(V,l),label:R,labels:W},o);B=C.onChange(Y)}return B},[o,C,g,l,m]),k=p.useMemo(function(){var B="",N=r||n,U=!!(r&&l&&l.includes(r));if(N&&C.onFocus){var H={focused:N,label:m(N),isDisabled:g(N,l),isSelected:U,options:a,context:N===r?"menu":"value",selectValue:l,isAppleDevice:c};B=C.onFocus(H)}return B},[r,n,m,g,C,a,l,c]),j=p.useMemo(function(){var B="";if(h&&E.length&&!I&&C.onFilter){var N=x({count:a.length});B=C.onFilter({inputValue:v,resultsMessage:N})}return B},[a,v,h,C,E,x,I]),$=(o==null?void 0:o.action)==="initial-input-focus",X=p.useMemo(function(){var B="";if(C.guidance){var N=n?"value":h?"menu":"input";B=C.guidance({"aria-label":M,context:N,isDisabled:r&&g(r,l),isMulti:b,isSearchable:f,tabSelectsValue:w,isInitialFocus:$})}return B},[M,r,n,b,g,f,h,C,l,w,$]),q=F(p.Fragment,null,F("span",{id:"aria-selection"},P),F("span",{id:"aria-focused"},k),F("span",{id:"aria-results"},j),F("span",{id:"aria-guidance"},X));return F(p.Fragment,null,F(Dt,{id:u},$&&q),F(Dt,{"aria-live":D,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!$&&q))},oi=ni,et=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],ri=new RegExp("["+et.map(function(t){return t.letters}).join("")+"]","g"),fn={};for(var Ue=0;Ue<et.length;Ue++)for(var We=et[Ue],Ye=0;Ye<We.letters.length;Ye++)fn[We.letters[Ye]]=We.base;var mn=function(e){return e.replace(ri,function(o){return fn[o]})},ii=Qr(mn),Pt=function(e){return e.replace(/^\s+|\s+$/g,"")},ai=function(e){return"".concat(e.label," ").concat(e.value)},si=function(e){return function(o,r){if(o.data.__isNew__)return!0;var n=O({ignoreCase:!0,ignoreAccents:!0,stringify:ai,trim:!0,matchFrom:"any"},e),a=n.ignoreCase,s=n.ignoreAccents,l=n.stringify,i=n.trim,u=n.matchFrom,c=i?Pt(r):r,d=i?Pt(l(o)):l(o);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=ii(c),d=mn(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},ui=["innerRef"];function li(t){var e=t.innerRef,o=ie(t,ui),r=To(o,"onExited","in","enter","exit","appear");return F("input",A({ref:e},r,{css:at({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ci=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function di(t){var e=t.isEnabled,o=t.onBottomArrive,r=t.onBottomLeave,n=t.onTopArrive,a=t.onTopLeave,s=p.useRef(!1),l=p.useRef(!1),i=p.useRef(0),u=p.useRef(null),c=p.useCallback(function(f,h){if(u.current!==null){var E=u.current,x=E.scrollTop,w=E.scrollHeight,I=E.clientHeight,M=u.current,D=h>0,C=w-I-x,P=!1;C>h&&s.current&&(r&&r(f),s.current=!1),D&&l.current&&(a&&a(f),l.current=!1),D&&h>C?(o&&!s.current&&o(f),M.scrollTop=w,P=!0,s.current=!0):!D&&-h>x&&(n&&!l.current&&n(f),M.scrollTop=0,P=!0,l.current=!0),P&&ci(f)}},[o,r,n,a]),d=p.useCallback(function(f){c(f,f.deltaY)},[c]),m=p.useCallback(function(f){i.current=f.changedTouches[0].clientY},[]),v=p.useCallback(function(f){var h=i.current-f.changedTouches[0].clientY;c(f,h)},[c]),b=p.useCallback(function(f){if(f){var h=Vo?{passive:!1}:!1;f.addEventListener("wheel",d,h),f.addEventListener("touchstart",m,h),f.addEventListener("touchmove",v,h)}},[v,m,d]),g=p.useCallback(function(f){f&&(f.removeEventListener("wheel",d,!1),f.removeEventListener("touchstart",m,!1),f.removeEventListener("touchmove",v,!1))},[v,m,d]);return p.useEffect(function(){if(e){var f=u.current;return b(f),function(){g(f)}}},[e,b,g]),function(f){u.current=f}}var At=["boxSizing","height","overflow","paddingRight","position"],Mt={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function kt(t){t.preventDefault()}function Vt(t){t.stopPropagation()}function Lt(){var t=this.scrollTop,e=this.scrollHeight,o=t+this.offsetHeight;t===0?this.scrollTop=1:o===e&&(this.scrollTop=t-1)}function Rt(){return"ontouchstart"in window||navigator.maxTouchPoints}var Tt=!!(typeof window<"u"&&window.document&&window.document.createElement),pe=0,de={capture:!1,passive:!1};function pi(t){var e=t.isEnabled,o=t.accountForScrollbars,r=o===void 0?!0:o,n=p.useRef({}),a=p.useRef(null),s=p.useCallback(function(i){if(Tt){var u=document.body,c=u&&u.style;if(r&&At.forEach(function(b){var g=c&&c[b];n.current[b]=g}),r&&pe<1){var d=parseInt(n.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,v=window.innerWidth-m+d||0;Object.keys(Mt).forEach(function(b){var g=Mt[b];c&&(c[b]=g)}),c&&(c.paddingRight="".concat(v,"px"))}u&&Rt()&&(u.addEventListener("touchmove",kt,de),i&&(i.addEventListener("touchstart",Lt,de),i.addEventListener("touchmove",Vt,de))),pe+=1}},[r]),l=p.useCallback(function(i){if(Tt){var u=document.body,c=u&&u.style;pe=Math.max(pe-1,0),r&&pe<1&&At.forEach(function(d){var m=n.current[d];c&&(c[d]=m)}),u&&Rt()&&(u.removeEventListener("touchmove",kt,de),i&&(i.removeEventListener("touchstart",Lt,de),i.removeEventListener("touchmove",Vt,de)))}},[r]);return p.useEffect(function(){if(e){var i=a.current;return s(i),function(){l(i)}}},[e,s,l]),function(i){a.current=i}}var fi=function(e){var o=e.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},mi={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function hi(t){var e=t.children,o=t.lockEnabled,r=t.captureEnabled,n=r===void 0?!0:r,a=t.onBottomArrive,s=t.onBottomLeave,l=t.onTopArrive,i=t.onTopLeave,u=di({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:i}),c=pi({isEnabled:o}),d=function(v){u(v),c(v)};return F(p.Fragment,null,o&&F("div",{onClick:fi,css:mi}),e(d))}var gi={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},vi=function(e){var o=e.name,r=e.onFocus;return F("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:gi,value:"",onChange:function(){}})},bi=vi;function ft(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function xi(){return ft(/^iPhone/i)}function hn(){return ft(/^Mac/i)}function Ei(){return ft(/^iPad/i)||hn()&&navigator.maxTouchPoints>1}function yi(){return xi()||Ei()}function Ci(){return hn()||yi()}var wi=function(e){return e.label},Si=function(e){return e.label},Fi=function(e){return e.value},Oi=function(e){return!!e.isDisabled},Ii={clearIndicator:cr,container:Jo,control:vr,dropdownIndicator:ur,group:yr,groupHeading:wr,indicatorsContainer:or,indicatorSeparator:pr,input:Ir,loadingIndicator:hr,loadingMessage:qo,menu:_o,menuList:Wo,menuPortal:Zo,multiValue:kr,multiValueLabel:Vr,multiValueRemove:Lr,noOptionsMessage:Go,option:Nr,placeholder:zr,singleValue:Yr,valueContainer:tr},Di={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Pi=4,gn=4,Ai=38,Mi=gn*2,ki={baseUnit:gn,controlHeight:Ai,menuGutter:Mi},Ge={borderRadius:Pi,colors:Di,spacing:ki},Vi={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ft(),captureMenuScroll:!Ft(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:si(),formatGroupLabel:wi,getOptionLabel:Si,getOptionValue:Fi,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Oi,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Mo(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var o=e.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function $t(t,e,o,r){var n=xn(t,e,o),a=En(t,e,o),s=bn(t,e),l=Te(t,e);return{type:"option",data:e,isDisabled:n,isSelected:a,label:s,value:l,index:r}}function De(t,e){return t.options.map(function(o,r){if("options"in o){var n=o.options.map(function(s,l){return $t(t,s,e,l)}).filter(function(s){return jt(t,s)});return n.length>0?{type:"group",data:o,options:n,index:r}:void 0}var a=$t(t,o,e,r);return jt(t,a)?a:void 0}).filter(Lo)}function vn(t){return t.reduce(function(e,o){return o.type==="group"?e.push.apply(e,st(o.options.map(function(r){return r.data}))):e.push(o.data),e},[])}function Bt(t,e){return t.reduce(function(o,r){return r.type==="group"?o.push.apply(o,st(r.options.map(function(n){return{data:n.data,id:"".concat(e,"-").concat(r.index,"-").concat(n.index)}}))):o.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),o},[])}function Li(t,e){return vn(De(t,e))}function jt(t,e){var o=t.inputValue,r=o===void 0?"":o,n=e.data,a=e.isSelected,s=e.label,l=e.value;return(!Cn(t)||!a)&&yn(t,{label:s,value:l,data:n},r)}function Ri(t,e){var o=t.focusedValue,r=t.selectValue,n=r.indexOf(o);if(n>-1){var a=e.indexOf(o);if(a>-1)return o;if(n<e.length)return e[n]}return null}function Ti(t,e){var o=t.focusedOption;return o&&e.indexOf(o)>-1?o:e[0]}var qe=function(e,o){var r,n=(r=e.find(function(a){return a.data===o}))===null||r===void 0?void 0:r.id;return n||null},bn=function(e,o){return e.getOptionLabel(o)},Te=function(e,o){return e.getOptionValue(o)};function xn(t,e,o){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,o):!1}function En(t,e,o){if(o.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,o);var r=Te(t,e);return o.some(function(n){return Te(t,n)===r})}function yn(t,e,o){return t.filterOption?t.filterOption(e,o):!0}var Cn=function(e){var o=e.hideSelectedOptions,r=e.isMulti;return o===void 0?r:o},$i=1,wn=function(t){no(o,t);var e=ao(o);function o(r){var n;if(eo(this,o),n=e.call(this,r),n.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.isAppleDevice=Ci(),n.controlRef=null,n.getControlRef=function(i){n.controlRef=i},n.focusedOptionRef=null,n.getFocusedOptionRef=function(i){n.focusedOptionRef=i},n.menuListRef=null,n.getMenuListRef=function(i){n.menuListRef=i},n.inputRef=null,n.getInputRef=function(i){n.inputRef=i},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(i,u){var c=n.props,d=c.onChange,m=c.name;u.name=m,n.ariaOnChange(i,u),d(i,u)},n.setValue=function(i,u,c){var d=n.props,m=d.closeMenuOnSelect,v=d.isMulti,b=d.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:b}),m&&(n.setState({inputIsHiddenAfterUpdate:!v}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(i,{action:u,option:c})},n.selectOption=function(i){var u=n.props,c=u.blurInputOnSelect,d=u.isMulti,m=u.name,v=n.state.selectValue,b=d&&n.isOptionSelected(i,v),g=n.isOptionDisabled(i,v);if(b){var f=n.getOptionValue(i);n.setValue(v.filter(function(h){return n.getOptionValue(h)!==f}),"deselect-option",i)}else if(!g)d?n.setValue([].concat(st(v),[i]),"select-option",i):n.setValue(i,"select-option");else{n.ariaOnChange(i,{action:"select-option",option:i,name:m});return}c&&n.blurInput()},n.removeValue=function(i){var u=n.props.isMulti,c=n.state.selectValue,d=n.getOptionValue(i),m=c.filter(function(b){return n.getOptionValue(b)!==d}),v=we(u,m,m[0]||null);n.onChange(v,{action:"remove-value",removedValue:i}),n.focusInput()},n.clearValue=function(){var i=n.state.selectValue;n.onChange(we(n.props.isMulti,[],null),{action:"clear",removedValues:i})},n.popValue=function(){var i=n.props.isMulti,u=n.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),m=we(i,d,d[0]||null);n.onChange(m,{action:"pop-value",removedValue:c})},n.getFocusedOptionId=function(i){return qe(n.state.focusableOptionsWithIds,i)},n.getFocusableOptionsWithIds=function(){return Bt(De(n.props,n.state.selectValue),n.getElementId("option"))},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return Oo.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(i){return bn(n.props,i)},n.getOptionValue=function(i){return Te(n.props,i)},n.getStyles=function(i,u){var c=n.props.unstyled,d=Ii[i](u,c);d.boxSizing="border-box";var m=n.props.styles[i];return m?m(d,u):d},n.getClassNames=function(i,u){var c,d;return(c=(d=n.props.classNames)[i])===null||c===void 0?void 0:c.call(d,u)},n.getElementId=function(i){return"".concat(n.state.instancePrefix,"-").concat(i)},n.getComponents=function(){return Xr(n.props)},n.buildCategorizedOptions=function(){return De(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return vn(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(i,u){n.setState({ariaSelection:O({value:i},u)})},n.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(i){n.blockOptionHover=!1},n.onControlMouseDown=function(i){if(!i.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()}},n.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!n.props.isDisabled){var u=n.props,c=u.isMulti,d=u.menuIsOpen;n.focusInput(),d?(n.setState({inputIsHiddenAfterUpdate:!c}),n.onMenuClose()):n.openMenu("first"),i.preventDefault()}},n.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(n.clearValue(),i.preventDefault(),n.openAfterFocus=!1,i.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(i){typeof n.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&je(i.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(i)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(i){var u=i.touches,c=u&&u.item(0);c&&(n.initialTouchX=c.clientX,n.initialTouchY=c.clientY,n.userIsDragging=!1)},n.onTouchMove=function(i){var u=i.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-n.initialTouchX),m=Math.abs(c.clientY-n.initialTouchY),v=5;n.userIsDragging=d>v||m>v}},n.onTouchEnd=function(i){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(i.target)&&n.menuListRef&&!n.menuListRef.contains(i.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(i){n.userIsDragging||n.onControlMouseDown(i)},n.onClearIndicatorTouchEnd=function(i){n.userIsDragging||n.onClearIndicatorMouseDown(i)},n.onDropdownIndicatorTouchEnd=function(i){n.userIsDragging||n.onDropdownIndicatorMouseDown(i)},n.handleInputChange=function(i){var u=n.props.inputValue,c=i.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(c,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(i){n.props.onFocus&&n.props.onFocus(i),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(i){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(i),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(i){if(!(n.blockOptionHover||n.state.focusedOption===i)){var u=n.getFocusableOptions(),c=u.indexOf(i);n.setState({focusedOption:i,focusedOptionId:c>-1?n.getFocusedOptionId(i):null})}},n.shouldHideSelectedOptions=function(){return Cn(n.props)},n.onValueInputFocus=function(i){i.preventDefault(),i.stopPropagation(),n.focus()},n.onKeyDown=function(i){var u=n.props,c=u.isMulti,d=u.backspaceRemovesValue,m=u.escapeClearsValue,v=u.inputValue,b=u.isClearable,g=u.isDisabled,f=u.menuIsOpen,h=u.onKeyDown,E=u.tabSelectsValue,x=u.openMenuOnFocus,w=n.state,I=w.focusedOption,M=w.focusedValue,D=w.selectValue;if(!g&&!(typeof h=="function"&&(h(i),i.defaultPrevented))){switch(n.blockOptionHover=!0,i.key){case"ArrowLeft":if(!c||v)return;n.focusValue("previous");break;case"ArrowRight":if(!c||v)return;n.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(M)n.removeValue(M);else{if(!d)return;c?n.popValue():b&&n.clearValue()}break;case"Tab":if(n.isComposing||i.shiftKey||!f||!E||!I||x&&n.isOptionSelected(I,D))return;n.selectOption(I);break;case"Enter":if(i.keyCode===229)break;if(f){if(!I||n.isComposing)return;n.selectOption(I);break}return;case"Escape":f?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:v}),n.onMenuClose()):b&&m&&n.clearValue();break;case" ":if(v)return;if(!f){n.openMenu("first");break}if(!I)return;n.selectOption(I);break;case"ArrowUp":f?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":f?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!f)return;n.focusOption("pageup");break;case"PageDown":if(!f)return;n.focusOption("pagedown");break;case"Home":if(!f)return;n.focusOption("first");break;case"End":if(!f)return;n.focusOption("last");break;default:return}i.preventDefault()}},n.state.instancePrefix="react-select-"+(n.props.instanceId||++$i),n.state.selectValue=wt(r.value),r.menuIsOpen&&n.state.selectValue.length){var a=n.getFocusableOptionsWithIds(),s=n.buildFocusableOptions(),l=s.indexOf(n.state.selectValue[0]);n.state.focusableOptionsWithIds=a,n.state.focusedOption=s[l],n.state.focusedOptionId=qe(a,s[l])}return n}return to(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&St(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,i=this.state.isFocused;(i&&!s&&n.isDisabled||i&&l&&!n.menuIsOpen)&&this.focusInput(),i&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!i&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(St(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,l=s.selectValue,i=s.isFocused,u=this.buildFocusableOptions(),c=n==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(i&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var i=s.indexOf(l);l||(i=-1);var u=s.length-1,c=-1;if(s.length){switch(n){case"previous":i===0?c=0:i===-1?c=u:c=i-1;break;case"next":i>-1&&i<u&&(c=i+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var i=0,u=l.indexOf(s);s||(u=-1),n==="up"?i=u>0?u-1:l.length-1:n==="down"?i=(u+1)%l.length:n==="pageup"?(i=u-a,i<0&&(i=0)):n==="pagedown"?(i=u+a,i>l.length-1&&(i=l.length-1)):n==="last"&&(i=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[i],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[i])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Ge):O(O({},Ge),this.props.theme):Ge}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,i=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,v=d.isRtl,b=d.options,g=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:l,getValue:i,hasValue:g,isMulti:m,isRtl:v,options:b,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return xn(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return En(this.props,n,a)}},{key:"filterOption",value:function(n,a){return yn(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,l=n.inputId,i=n.inputValue,u=n.tabIndex,c=n.form,d=n.menuIsOpen,m=n.required,v=this.getComponents(),b=v.Input,g=this.state,f=g.inputIsHidden,h=g.ariaSelection,E=this.commonProps,x=l||this.getElementId("input"),w=O(O(O({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?p.createElement(b,A({},E,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:a,isHidden:f,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:i},w)):p.createElement(li,A({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Le,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,i=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,v=this.props,b=v.controlShouldRenderValue,g=v.isDisabled,f=v.isMulti,h=v.inputValue,E=v.placeholder,x=this.state,w=x.selectValue,I=x.focusedValue,M=x.isFocused;if(!this.hasValue()||!b)return h?null:p.createElement(d,A({},m,{key:"placeholder",isDisabled:g,isFocused:M,innerProps:{id:this.getElementId("placeholder")}}),E);if(f)return w.map(function(C,P){var k=C===I,j="".concat(n.getOptionLabel(C),"-").concat(n.getOptionValue(C));return p.createElement(s,A({},m,{components:{Container:l,Label:i,Remove:u},isFocused:k,isDisabled:g,key:j,index:P,removeProps:{onClick:function(){return n.removeValue(C)},onTouchEnd:function(){return n.removeValue(C)},onMouseDown:function(X){X.preventDefault()}},data:C}),n.formatOptionLabel(C,"value"))});if(h)return null;var D=w[0];return p.createElement(c,A({},m,{data:D,isDisabled:g}),this.formatOptionLabel(D,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,l=this.props,i=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||i||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,A({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,l=this.props,i=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return p.createElement(a,A({},s,{innerProps:d,isDisabled:i,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,i=this.props.isDisabled,u=this.state.isFocused;return p.createElement(s,A({},l,{isDisabled:i,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,i=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,A({},s,{innerProps:u,isDisabled:l,isFocused:i}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,i=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,v=a.Option,b=this.commonProps,g=this.state.focusedOption,f=this.props,h=f.captureMenuScroll,E=f.inputValue,x=f.isLoading,w=f.loadingMessage,I=f.minMenuHeight,M=f.maxMenuHeight,D=f.menuIsOpen,C=f.menuPlacement,P=f.menuPosition,k=f.menuPortalTarget,j=f.menuShouldBlockScroll,$=f.menuShouldScrollIntoView,X=f.noOptionsMessage,q=f.onMenuScrollToTop,B=f.onMenuScrollToBottom;if(!D)return null;var N=function(R,z){var W=R.type,Y=R.data,J=R.isDisabled,ne=R.isSelected,be=R.label,Ln=R.value,gt=g===Y,vt=J?void 0:function(){return n.onOptionHover(Y)},Rn=J?void 0:function(){return n.selectOption(Y)},bt="".concat(n.getElementId("option"),"-").concat(z),Tn={id:bt,onClick:Rn,onMouseMove:vt,onMouseOver:vt,tabIndex:-1,role:"option","aria-selected":n.isAppleDevice?void 0:ne};return p.createElement(v,A({},b,{innerProps:Tn,data:Y,isDisabled:J,isSelected:ne,key:bt,label:be,type:W,value:Ln,isFocused:gt,innerRef:gt?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(R.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(V){if(V.type==="group"){var R=V.data,z=V.options,W=V.index,Y="".concat(n.getElementId("group"),"-").concat(W),J="".concat(Y,"-heading");return p.createElement(s,A({},b,{key:Y,data:R,options:z,Heading:l,headingProps:{id:J,data:V.data},label:n.formatGroupLabel(V.data)}),V.options.map(function(ne){return N(ne,"".concat(W,"-").concat(ne.index))}))}else if(V.type==="option")return N(V,"".concat(V.index))});else if(x){var H=w({inputValue:E});if(H===null)return null;U=p.createElement(d,b,H)}else{var K=X({inputValue:E});if(K===null)return null;U=p.createElement(m,b,K)}var Z={minMenuHeight:I,maxMenuHeight:M,menuPlacement:C,menuPosition:P,menuShouldScrollIntoView:$},te=p.createElement(Ho,A({},b,Z),function(V){var R=V.ref,z=V.placerProps,W=z.placement,Y=z.maxHeight;return p.createElement(i,A({},b,Z,{innerRef:R,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove},isLoading:x,placement:W}),p.createElement(hi,{captureEnabled:h,onTopArrive:q,onBottomArrive:B,lockEnabled:j},function(J){return p.createElement(u,A({},b,{innerRef:function(be){n.getMenuListRef(be),J(be)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:n.getElementId("listbox")},isLoading:x,maxHeight:Y,focusedOption:g}),U)}))});return k||P==="fixed"?p.createElement(c,A({},b,{appendTo:k,controlElement:this.controlRef,menuPlacement:C,menuPosition:P}),te):te}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,l=a.isDisabled,i=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(bi,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(i)if(s){var m=d.map(function(g){return n.getOptionValue(g)}).join(s);return p.createElement("input",{name:u,type:"hidden",value:m})}else{var v=d.length>0?d.map(function(g,f){return p.createElement("input",{key:"i-".concat(f),name:u,type:"hidden",value:n.getOptionValue(g)})}):p.createElement("input",{name:u,type:"hidden",value:""});return p.createElement("div",null,v)}else{var b=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:u,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,i=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(oi,A({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:i,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,l=n.SelectContainer,i=n.ValueContainer,u=this.props,c=u.className,d=u.id,m=u.isDisabled,v=u.menuIsOpen,b=this.state.isFocused,g=this.commonProps=this.getCommonProps();return p.createElement(l,A({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:b}),this.renderLiveRegion(),p.createElement(a,A({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:b,menuIsOpen:v}),p.createElement(i,A({},g,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(s,A({},g,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,i=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=a.instancePrefix,v=n.options,b=n.value,g=n.menuIsOpen,f=n.inputValue,h=n.isMulti,E=wt(b),x={};if(s&&(b!==s.value||v!==s.options||g!==s.menuIsOpen||f!==s.inputValue)){var w=g?Li(n,E):[],I=g?Bt(De(n,E),"".concat(m,"-option")):[],M=l?Ri(a,E):null,D=Ti(a,w),C=qe(I,D);x={selectValue:E,focusedOption:D,focusedOptionId:C,focusableOptionsWithIds:I,focusedValue:M,clearFocusValueOnUpdate:!1}}var P=i!=null&&n!==s?{inputIsHidden:i,inputIsHiddenAfterUpdate:void 0}:{},k=u,j=c&&d;return c&&!j&&(k={value:we(h,E,E[0]||null),options:E,action:"initial-input-focus"},j=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(k=null),O(O(O({},x),P),{},{prevProps:n,ariaSelection:k,prevWasFocused:j})}}]),o}(p.Component);wn.defaultProps=Vi;var Bi=p.forwardRef(function(t,e){var o=Jn(t);return p.createElement(wn,A({ref:e},o))}),Sn=Bi;const Fn=t=>p.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("path",{d:"M1.5 1.75L6 6.25L10.5 1.75",stroke:"#EFEDE8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Nt=[{value:"Alcoholic drinks",label:"Alcoholic drinks"},{value:"Berries",label:"Berries"},{value:"Cereals",label:"Cereals"},{value:"Dairy",label:"Dairy"},{value:"Dried fruits",label:"Dried fruits"},{value:"Eggs",label:"Eggs"},{value:"Fish",label:"Fish"},{value:"Flour",label:"Flour"},{value:"Meat",label:"Meat"}],ji=t=>y.jsx(pt.DropdownIndicator,{...t,children:y.jsx(Fn,{})}),Ni={container:t=>({...t,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),control:(t,e)=>({...t,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${S.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${S.orangeColor}`:0,transition:`all ${S.animation}`,"&:hover":{borderColor:`${S.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),dropdownIndicator:(t,e)=>({...t,transition:`all ${S.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:t=>({...t,display:"none"}),menu:t=>({...t,borderRadius:"12px",background:"#1C1C1C"}),singleValue:t=>({...t,fontSize:"14px",color:`${S.whiteColor}`}),option:(t,e)=>({...t,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${S.successColor}`:`${S.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${S.orangeColor}`,color:`${S.whiteColor}`}}),menuList:t=>({...t,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.10)",width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})},_i=({dataFunc:t,currentValue:e})=>y.jsx(Sn,{onChange:t,options:Nt,components:{DropdownIndicator:ji},styles:Ni,value:e===""?{value:"Categories",label:"Categories"}:Nt.find(o=>o.value===e)}),_t=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],Hi=t=>y.jsx(pt.DropdownIndicator,{...t,children:y.jsx(Fn,{})}),zi={container:t=>({...t,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(t,e)=>({...t,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${S.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${S.orangeColor}`:0,transition:`all ${S.animation}`,"&:hover":{borderColor:`${S.orangeColor}`},"@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:t=>({...t,display:"none"}),dropdownIndicator:(t,e)=>({...t,transition:`all ${S.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:t=>({...t,borderRadius:"12px",background:"#1C1C1C"}),singleValue:t=>({...t,fontSize:"14px",color:`${S.whiteColor}`}),option:(t,e)=>({...t,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${S.successColor}`:`${S.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${S.orangeColor}`,color:`${S.whiteColor}`}})},Ui=({dataFunc:t,currentValue:e})=>y.jsx(Sn,{onChange:t,options:_t,components:{DropdownIndicator:Hi},styles:zi,value:_t.find(o=>o.value===e),defaultValue:e}),Wi=t=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),mt=t=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("path",{d:"M13.5 4.5L4.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M4.5 4.5L13.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Yi=ce(Wi)`
  width: 18px;
  height: 18px;
`,Gi=ce(mt)`
  width: 20px;
  height: 20px;
`,qi=ce.form`
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
`,Xi=()=>{const[t,e]=p.useState(!1),[o,r]=Yt(),n=Be(),a=p.useMemo(()=>Object.fromEntries([...o]),[o]),{search:s,category:l,recommended:i}=a;p.useEffect(()=>{},[s,l,i,r]);const u=Gt({initialValues:{search:s??"",category:l??"",recommended:i??"All"},onSubmit:d=>{const{search:m}=d;m&&(n(Ie(1)),r(v=>{const b=new URLSearchParams(v);return b.set("q",m),b}))}}),c=d=>{e(!0),u.handleChange(d)};return y.jsxs(qi,{onSubmit:u.handleSubmit,children:[y.jsxs("div",{className:"input-search-block",children:[y.jsx("input",{id:"search",name:"search",type:"text",onChange:c,value:u.values.search,placeholder:"Search"}),y.jsxs("div",{className:"svgs-search-block",children:[t&&y.jsx("button",{type:"button",onClick:()=>{e(!1),r(d=>{const m=new URLSearchParams(d);return m.delete("search"),m}),u.values.search=""},children:y.jsx(Gi,{})}),y.jsx("button",{type:"submit",children:y.jsx(Yi,{})})]})]}),y.jsxs("div",{className:"selects-block",children:[y.jsx(_i,{name:"category",dataFunc:d=>{u.setFieldValue("category",d.value),n(Ie(1)),r(m=>{const v=new URLSearchParams(m);return v.set("category",d.value),v})},currentValue:u.values.category}),y.jsx(Ui,{name:"recommended",currentValue:u.values.recommended,dataFunc:d=>{n(Ie(1)),u.setFieldValue("recommended",d.value),r(m=>{const v=new URLSearchParams(m);return v.set("recommended",d.value),v})}})]}),y.jsx("p",{className:"filter-1440",children:"Filter"})]})},Ki=G.div`
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

`,Zi=G.ul`
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
`,Qi=ce.div`
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
`,Ji=()=>y.jsxs(Qi,{children:[y.jsxs("p",{className:"above-text",children:[y.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),y.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),On=t=>p.createElement("svg",{width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("path",{d:"M7.5 14 14 7.5m0 0L7.5 1M14 7.5H1",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),ea=t=>p.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},p.createElement("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),p.createElement("path",{d:"M18.823 8.725a.593.593 0 0 0-.833-.074l-1.641 1.378-.755-1.87a.58.58 0 0 0-.114-.18 1.606 1.606 0 0 0-.791-.809 1.628 1.628 0 0 0-.491-.13c-.037-.02-.07-.045-.111-.058l-2.888-.805a.594.594 0 0 0-.458.063.578.578 0 0 0-.36.336L9.294 9.372a.594.594 0 0 0 .338.767.593.593 0 0 0 .766-.34l.918-2.36 1.315.365c-.032.052-.066.101-.092.156l-1.687 3.655c-.024.054-.037.108-.054.164l-2.05 3.435-3.428 1.147a.876.876 0 0 0 1.04 1.41l3.51-1.209a.841.841 0 0 0 .243-.29c.045-.047.095-.084.129-.142l1.221-2.048 2.169 1.848-2.32 2.614a.875.875 0 1 0 1.31 1.16l2.896-3.261c.09-.101.144-.217.18-.338.022-.066.022-.135.027-.203 0-.035.013-.066.01-.098a.858.858 0 0 0-.3-.637l-1.995-1.701c.143-.137.266-.3.354-.492l1.293-2.8.414 1.104c.017.098.05.194.12.274a.57.57 0 0 0 .226.16l.03.007a.564.564 0 0 0 .367.018h.003c.018-.005.036-.002.054-.01a.585.585 0 0 0 .233-.17L18.89 9.56c.25-.21.145-.583-.066-.834ZM15.846 7.301a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z",fill:"#EFEDE8"})),ht=G.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,ta=G.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${S.animation};
  @media screen and (min-width: 768px) {
    ${ht}:hover & {
      color: ${S.successColor};
      transform: scale(1.25);
    }
  }
`,na=$n`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,oa=G(On)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    ${ht}:hover & {
      animation: ${na} 1000ms linear infinite;
      > path {
        stroke: ${S.successColor};
      }
    }
  }
`,ra=G(ea)`
  width: 24px;
  height: 24px;
`,In=G.li`
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
`,ia=G.span`
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
    background-color: ${t=>t.$color?"#419B09":"#E9101D"};
    display: inline-block;
  }
`,aa="1",sa=({data:t,handleOpenModal:e})=>{const{calories:o,category:r,title:n,weight:a,groupBloodNotAllowed:s,_id:l}=t,i=s[aa];return y.jsxs(In,{children:[y.jsx("span",{className:"diet-span",children:"diet"}),y.jsxs("div",{className:"recommended-addbtn-div",children:[y.jsx(ia,{className:"recommended-span",$color:i,children:i?"Recommended":"Not recommended"}),y.jsxs(ht,{onClick:()=>e({calories:o,title:n,weight:a,_id:l}),type:"button",className:"add-btn",children:[y.jsx(ta,{className:"add-btn-span",children:"Add"}),y.jsx(oa,{})]})]}),y.jsxs("div",{className:"product-info-div",children:[y.jsxs("div",{className:"title-svg-div",children:[y.jsx(ra,{}),y.jsxs("p",{className:"product-info-div-title",children:[" ",n]})]}),y.jsxs("div",{className:"detailed-info-div",children:[y.jsxs("p",{className:"detailed-name",children:["Calories: ",y.jsx("span",{className:"detailed-data",children:o})]}),y.jsxs("p",{className:"detailed-name",children:["Category: ",y.jsx("span",{className:"detailed-data",children:r})]}),y.jsxs("p",{className:"detailed-name",children:["Weight: ",y.jsx("span",{className:"detailed-data",children:a})]})]})]})]})},tt=G.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,ua=G(mt)`
  transition:
    stroke ${S.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  > path {
    stroke: white;
  }
  @media screen and (min-width: 768px) {
    ${tt}:hover & {
      > path {
        stroke: ${S.orangeColor};
      }
    }
    ${tt}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,la=G.div`
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
`,ca=G.div`
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
`,da=G.input`

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

  `,pa=G.form`
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
`;function fa(){const t=new Date,e=t.getDate(),o=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${e}-${o}-${r}`}const ma=({data:t,closeModal:e})=>{const{title:o,weight:r,calories:n,_id:a}=t||{},s=Be(),l=Gt({initialValues:{title:o,weight:r,calories:n},onSubmit:u=>{const{weight:c,calories:d}=u,m={date:fa(),product:a,amount:c,calories:d};s(Bn(m))}});p.useEffect(()=>{t&&l.setValues({title:o,weight:r,calories:n})},[o,r,n]);const i=u=>{if(!(isNaN(u.target.value)&&u.target.value!=="")&&(u.target.value===""&&l.setValues({calories:""}),l.handleChange(u),u.target.value>0)){const c=parseFloat(Number(u.target.value)),d=c*n/100;l.setValues({...l.values,weight:c,calories:d})}};return y.jsxs(pa,{onSubmit:l.handleSubmit,children:[y.jsxs("div",{className:"inputs-block",children:[y.jsx("input",{id:"title",name:"title",type:"text",value:l.values.title,disabled:!0,className:"title-input"}),y.jsxs("div",{className:"weight-input-block",children:[y.jsx(da,{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:i,value:l.values.weight}),y.jsx("span",{className:"grams-span",children:"grams"})]})]}),y.jsxs("div",{className:"calories-block",children:[y.jsx("span",{className:"calories-span",children:"Calories: "}),y.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:l.values.calories,className:"calories-input"})]}),y.jsxs("div",{className:"button-block",children:[y.jsx("button",{className:"add-button",type:"submit",children:"Add to diary"}),y.jsx("button",{onClick:e,className:"cancel-button",type:"button",children:"Cancel"})]})]})},ha=document.querySelector("#add-product-modal"),ga=({data:t,closeModal:e,showModal:o})=>{p.useEffect(()=>{if(!o)return;const n=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[e,o]);const r=n=>{n.target===n.currentTarget&&e()};return Wt.createPortal(y.jsx(la,{onClick:r,className:o?"":"hide-hidden",children:y.jsxs(ca,{className:"modal",children:[y.jsx(tt,{onClick:e,type:"button",children:y.jsx(ua,{})}),y.jsx(ma,{data:t,closeModal:e})]})}),ha)};var nt=new Map,Se=new WeakMap,Ht=0,va=void 0;function ba(t){return t?(Se.has(t)||(Ht+=1,Se.set(t,Ht.toString())),Se.get(t)):"0"}function xa(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?ba(t.root):t[e]}`).toString()}function Ea(t){let e=xa(t),o=nt.get(e);if(!o){const r=new Map;let n;const a=new IntersectionObserver(s=>{s.forEach(l=>{var i;const u=l.isIntersecting&&n.some(c=>l.intersectionRatio>=c);t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(i=r.get(l.target))==null||i.forEach(c=>{c(u,l)})})},t);n=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),o={id:e,observer:a,elements:r},nt.set(e,o)}return o}function ya(t,e,o={},r=va){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const i=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof o.threshold=="number"?o.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:n,observer:a,elements:s}=Ea(o);let l=s.get(t)||[];return s.has(t)||s.set(t,l),l.push(e),a.observe(t),function(){l.splice(l.indexOf(e),1),l.length===0&&(s.delete(t),a.unobserve(t)),s.size===0&&(a.disconnect(),nt.delete(n))}}function Ca({threshold:t,delay:e,trackVisibility:o,rootMargin:r,root:n,triggerOnce:a,skip:s,initialInView:l,fallbackInView:i,onChange:u}={}){var c;const[d,m]=p.useState(null),v=p.useRef(),[b,g]=p.useState({inView:!!l,entry:void 0});v.current=u,p.useEffect(()=>{if(s||!d)return;let x;return x=ya(d,(w,I)=>{g({inView:w,entry:I}),v.current&&v.current(w,I),I.isIntersecting&&a&&x&&(x(),x=void 0)},{root:n,rootMargin:r,threshold:t,trackVisibility:o,delay:e},i),()=>{x&&x()}},[Array.isArray(t)?t.toString():t,d,n,r,a,s,o,i,e]);const f=(c=b.entry)==null?void 0:c.target,h=p.useRef();!d&&f&&!a&&!s&&h.current!==f&&(h.current=f,g({inView:!!l,entry:void 0}));const E=[m,b.inView,b.entry];return E.ref=E[0],E.inView=E[1],E.entry=E[2],E}const wa="/power-pulse-fs/assets/bgFood-46dd5bc9.png",Sa="/power-pulse-fs/assets/bgFood2x-515a5477.png",me=G(jn)`
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
`,Fa=G(On)`
width:16px;
height: 16px;
> path {
        stroke: ${S.greyTextColor};
      }
      transition: all ${S.animation};
        @media screen and (min-width: 768px) {
    ${me}:hover &, ${me}:focus & {
      > path {
        stroke: ${S.orangeColor};
      }
    }
    ${me}:hover &, ${me}:focus & {
      transform: translateX(10px);
    }
  }
`,Oa=G(mt)`
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
`,Ia=G.div`
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

  
`,Da=G.div`
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
   background-image: url(${wa});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${Sa});
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
`,Pa=()=>{const{isSuccessPopUpShown:t}=it(r=>r.products),e=Be();p.useEffect(()=>{if(!t)return;const r=n=>{n.code==="Escape"&&e(xe(!1))};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[t,e]);const o=r=>{r.target===r.currentTarget&&e(xe(!1))};return t&&y.jsx(Ia,{onClick:o,children:y.jsxs(Da,{children:[y.jsx(Oa,{onClick:()=>e(xe(!1))}),y.jsx("p",{className:"title",children:"Well done"}),y.jsxs("p",{className:"calories",children:["Calories: ",y.jsx("span",{className:"calories-span",children:"96"})]}),y.jsx("button",{onClick:()=>e(xe(!1)),className:"button",type:"button",children:"Next product"}),y.jsxs(me,{to:"/diary",children:["To the diary ",y.jsx(Fa,{})]})]})})},ae={bloodType:"1"},Aa=()=>{const[t]=Yt(),[e,o]=p.useState(!1),[r,n]=p.useState(null),{products:a,isLoading:s,pageStore:l,totalPages:i,isSuccessPopUpShown:u}=it(x=>x.products),{ref:c,inView:d}=Ca(),m=Be();p.useEffect(()=>{u&&o(!1)},[u]),p.useEffect(()=>{e?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"},[e]);const v=x=>{n(x),o(!0)},b=()=>{m(_n(!1)),o(!1)},g=p.useMemo(()=>Object.fromEntries([...t]),[t]),{search:f,category:h,recommended:E}=g;return f?ae.q=f:delete ae.q,h&&(ae.cat=h.toLowerCase()),E&&E!=="All"?ae.rec=E:delete ae.rec,p.useEffect(()=>{if(!s){if(l>=i&&i!==1)return console.log("enough");d&&(m(Ie(l+1)),ae.page=l)}},[d,l,s,m,i]),p.useEffect(()=>{ae.page=l,m(Nn(ae))},[h,E,f,m,l,i]),s&&a===null?y.jsx(Ki,{className:"loader-1"}):a&&a.length>0?y.jsxs(y.Fragment,{children:[y.jsxs(Zi,{children:[a.map(x=>s?y.jsx(In,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:y.jsx("div",{className:"loader"})},x._id):y.jsx(sa,{handleOpenModal:v,data:x},x._id)),y.jsx("div",{ref:c})]}),y.jsx(ga,{showModal:e,closeModal:b,data:r}),y.jsx(Pa,{})]}):y.jsx(Ji,{})},Ma="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",ka="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",Va=ce.section`

@media screen and (min-width: 1440px) {
  height: 90vh;
 background: url(${Ma});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${ka});
    }
}
`,La=ce.div`
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
`,Ra=ce.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`;function Dn(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(o=Dn(t[e]))&&(r&&(r+=" "),r+=o)}else for(o in t)t[o]&&(r&&(r+=" "),r+=o);return r}function se(){for(var t,e,o=0,r="",n=arguments.length;o<n;o++)(t=arguments[o])&&(e=Dn(t))&&(r&&(r+=" "),r+=e);return r}const ge=t=>typeof t=="number"&&!isNaN(t),ue=t=>typeof t=="string",ee=t=>typeof t=="function",Pe=t=>ue(t)||ee(t)?t:null,ot=t=>p.isValidElement(t)||ue(t)||ee(t)||ge(t);function Ta(t,e,o){o===void 0&&(o=300);const{scrollHeight:r,style:n}=t;requestAnimationFrame(()=>{n.minHeight="initial",n.height=r+"px",n.transition=`all ${o}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(e,o)})})}function Ne(t){let{enter:e,exit:o,appendPosition:r=!1,collapse:n=!0,collapseDuration:a=300}=t;return function(s){let{children:l,position:i,preventExitTransition:u,done:c,nodeRef:d,isIn:m,playToast:v}=s;const b=r?`${e}--${i}`:e,g=r?`${o}--${i}`:o,f=p.useRef(0);return p.useLayoutEffect(()=>{const h=d.current,E=b.split(" "),x=w=>{w.target===d.current&&(v(),h.removeEventListener("animationend",x),h.removeEventListener("animationcancel",x),f.current===0&&w.type!=="animationcancel"&&h.classList.remove(...E))};h.classList.add(...E),h.addEventListener("animationend",x),h.addEventListener("animationcancel",x)},[]),p.useEffect(()=>{const h=d.current,E=()=>{h.removeEventListener("animationend",E),n?Ta(h,c,a):c()};m||(u?E():(f.current=1,h.className+=` ${g}`,h.addEventListener("animationend",E)))},[m]),L.createElement(L.Fragment,null,l)}}function zt(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Q=new Map;let ve=[];const rt=new Set,$a=t=>rt.forEach(e=>e(t)),Pn=()=>Q.size>0;function An(t,e){var o;if(e)return!((o=Q.get(e))==null||!o.isToastActive(t));let r=!1;return Q.forEach(n=>{n.isToastActive(t)&&(r=!0)}),r}function Mn(t,e){ot(t)&&(Pn()||ve.push({content:t,options:e}),Q.forEach(o=>{o.buildToast(t,e)}))}function Ut(t,e){Q.forEach(o=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===o.id&&o.toggle(t,e==null?void 0:e.id):o.toggle(t,e==null?void 0:e.id)})}function Ba(t){const{subscribe:e,getSnapshot:o,setProps:r}=p.useRef(function(a){const s=a.containerId||1;return{subscribe(l){const i=function(c,d,m){let v=1,b=0,g=[],f=[],h=[],E=d;const x=new Map,w=new Set,I=()=>{h=Array.from(x.values()),w.forEach(C=>C())},M=C=>{f=C==null?[]:f.filter(P=>P!==C),I()},D=C=>{const{toastId:P,onOpen:k,updateId:j,children:$}=C.props,X=j==null;C.staleId&&x.delete(C.staleId),x.set(P,C),f=[...f,C.props.toastId].filter(q=>q!==C.staleId),I(),m(zt(C,X?"added":"updated")),X&&ee(k)&&k(p.isValidElement($)&&$.props)};return{id:c,props:E,observe:C=>(w.add(C),()=>w.delete(C)),toggle:(C,P)=>{x.forEach(k=>{P!=null&&P!==k.props.toastId||ee(k.toggle)&&k.toggle(C)})},removeToast:M,toasts:x,clearQueue:()=>{b-=g.length,g=[]},buildToast:(C,P)=>{if((V=>{let{containerId:R,toastId:z,updateId:W}=V;const Y=R?R!==c:c!==1,J=x.has(z)&&W==null;return Y||J})(P))return;const{toastId:k,updateId:j,data:$,staleId:X,delay:q}=P,B=()=>{M(k)},N=j==null;N&&b++;const U={...E,style:E.toastStyle,key:v++,...Object.fromEntries(Object.entries(P).filter(V=>{let[R,z]=V;return z!=null})),toastId:k,updateId:j,data:$,closeToast:B,isIn:!1,className:Pe(P.className||E.toastClassName),bodyClassName:Pe(P.bodyClassName||E.bodyClassName),progressClassName:Pe(P.progressClassName||E.progressClassName),autoClose:!P.isLoading&&(H=P.autoClose,K=E.autoClose,H===!1||ge(H)&&H>0?H:K),deleteToast(){const V=x.get(k),{onClose:R,children:z}=V.props;ee(R)&&R(p.isValidElement(z)&&z.props),m(zt(V,"removed")),x.delete(k),b--,b<0&&(b=0),g.length>0?D(g.shift()):I()}};var H,K;U.closeButton=E.closeButton,P.closeButton===!1||ot(P.closeButton)?U.closeButton=P.closeButton:P.closeButton===!0&&(U.closeButton=!ot(E.closeButton)||E.closeButton);let Z=C;p.isValidElement(C)&&!ue(C.type)?Z=p.cloneElement(C,{closeToast:B,toastProps:U,data:$}):ee(C)&&(Z=C({closeToast:B,toastProps:U,data:$}));const te={content:Z,props:U,staleId:X};E.limit&&E.limit>0&&b>E.limit&&N?g.push(te):ge(q)?setTimeout(()=>{D(te)},q):D(te)},setProps(C){E=C},setToggle:(C,P)=>{x.get(C).toggle=P},isToastActive:C=>f.some(P=>P===C),getSnapshot:()=>E.newestOnTop?h.reverse():h}}(s,a,$a);Q.set(s,i);const u=i.observe(l);return ve.forEach(c=>Mn(c.content,c.options)),ve=[],()=>{u(),Q.delete(s)}},setProps(l){var i;(i=Q.get(s))==null||i.setProps(l)},getSnapshot(){var l;return(l=Q.get(s))==null?void 0:l.getSnapshot()}}}(t)).current;r(t);const n=p.useSyncExternalStore(e,o,o);return{getToastToRender:function(a){if(!n)return[];const s=new Map;return n.forEach(l=>{const{position:i}=l.props;s.has(i)||s.set(i,[]),s.get(i).push(l)}),Array.from(s,l=>a(l[0],l[1]))},isToastActive:An,count:n==null?void 0:n.length}}function ja(t){const[e,o]=p.useState(!1),[r,n]=p.useState(!1),a=p.useRef(null),s=p.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:i,closeToast:u,onClick:c,closeOnClick:d}=t;var m,v;function b(){o(!0)}function g(){o(!1)}function f(x){const w=a.current;s.canDrag&&w&&(s.didMove=!0,e&&g(),s.delta=t.draggableDirection==="x"?x.clientX-s.start:x.clientY-s.start,s.start!==x.clientX&&(s.canCloseOnClick=!1),w.style.transform=`translate3d(${t.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,w.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function h(){document.removeEventListener("pointermove",f),document.removeEventListener("pointerup",h);const x=a.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return n(!0),t.closeToast(),void t.collapseAll();x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}(v=Q.get((m={id:t.toastId,containerId:t.containerId,fn:o}).containerId||1))==null||v.setToggle(m.id,m.fn),p.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",b),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",g)}},[t.pauseOnFocusLoss]);const E={onPointerDown:function(x){if(t.draggable===!0||t.draggable===x.pointerType){s.didMove=!1,document.addEventListener("pointermove",f),document.addEventListener("pointerup",h);const w=a.current;s.canCloseOnClick=!0,s.canDrag=!0,w.style.transition="none",t.draggableDirection==="x"?(s.start=x.clientX,s.removalDistance=w.offsetWidth*(t.draggablePercent/100)):(s.start=x.clientY,s.removalDistance=w.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(x){const{top:w,bottom:I,left:M,right:D}=a.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&x.clientX>=M&&x.clientX<=D&&x.clientY>=w&&x.clientY<=I?g():b()}};return l&&i&&(E.onMouseEnter=g,t.stacked||(E.onMouseLeave=b)),d&&(E.onClick=x=>{c&&c(x),s.canCloseOnClick&&u()}),{playToast:b,pauseToast:g,isRunning:e,preventExitTransition:r,toastRef:a,eventHandlers:E}}function Na(t){let{delay:e,isRunning:o,closeToast:r,type:n="default",hide:a,className:s,style:l,controlledProgress:i,progress:u,rtl:c,isIn:d,theme:m}=t;const v=a||i&&u===0,b={...l,animationDuration:`${e}ms`,animationPlayState:o?"running":"paused"};i&&(b.transform=`scaleX(${u})`);const g=se("Toastify__progress-bar",i?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${n}`,{"Toastify__progress-bar--rtl":c}),f=ee(s)?s({rtl:c,type:n,defaultClassName:g}):se(g,s),h={[i&&u>=1?"onTransitionEnd":"onAnimationEnd"]:i&&u<1?null:()=>{d&&r()}};return L.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},L.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${n}`}),L.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:f,style:b,...h}))}let _a=1;const kn=()=>""+_a++;function Ha(t){return t&&(ue(t.toastId)||ge(t.toastId))?t.toastId:kn()}function he(t,e){return Mn(t,e),e.toastId}function $e(t,e){return{...e,type:e&&e.type||t,toastId:Ha(e)}}function Fe(t){return(e,o)=>he(e,$e(t,o))}function T(t,e){return he(t,$e("default",e))}T.loading=(t,e)=>he(t,$e("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),T.promise=function(t,e,o){let r,{pending:n,error:a,success:s}=e;n&&(r=ue(n)?T.loading(n,o):T.loading(n.render,{...o,...n}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},i=(c,d,m)=>{if(d==null)return void T.dismiss(r);const v={type:c,...l,...o,data:m},b=ue(d)?{render:d}:d;return r?T.update(r,{...v,...b}):T(b.render,{...v,...b}),m},u=ee(t)?t():t;return u.then(c=>i("success",s,c)).catch(c=>i("error",a,c)),u},T.success=Fe("success"),T.info=Fe("info"),T.error=Fe("error"),T.warning=Fe("warning"),T.warn=T.warning,T.dark=(t,e)=>he(t,$e("default",{theme:"dark",...e})),T.dismiss=function(t){(function(e){var o;if(Pn()){if(e==null||ue(o=e)||ge(o))Q.forEach(n=>{n.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){var r;(r=Q.get(e.containerId))!=null&&r.removeToast(e.id)||Q.forEach(n=>{n.removeToast(e.id)})}}else ve=ve.filter(n=>e!=null&&n.options.toastId!==e)})(t)},T.clearWaitingQueue=function(t){t===void 0&&(t={}),Q.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},T.isActive=An,T.update=function(t,e){e===void 0&&(e={});const o=((r,n)=>{var a;let{containerId:s}=n;return(a=Q.get(s||1))==null?void 0:a.toasts.get(r)})(t,e);if(o){const{props:r,content:n}=o,a={delay:100,...r,...e,toastId:e.toastId||t,updateId:kn()};a.toastId!==t&&(a.staleId=t);const s=a.render||n;delete a.render,he(s,a)}},T.done=t=>{T.update(t,{progress:1})},T.onChange=function(t){return rt.add(t),()=>{rt.delete(t)}},T.play=t=>Ut(!0,t),T.pause=t=>Ut(!1,t);const Oe=t=>{let{theme:e,type:o,isLoading:r,...n}=t;return L.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...n})},Xe={info:function(t){return L.createElement(Oe,{...t},L.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return L.createElement(Oe,{...t},L.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return L.createElement(Oe,{...t},L.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return L.createElement(Oe,{...t},L.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return L.createElement("div",{className:"Toastify__spinner"})}},za=t=>{const{isRunning:e,preventExitTransition:o,toastRef:r,eventHandlers:n,playToast:a}=ja(t),{closeButton:s,children:l,autoClose:i,onClick:u,type:c,hideProgressBar:d,closeToast:m,transition:v,position:b,className:g,style:f,bodyClassName:h,bodyStyle:E,progressClassName:x,progressStyle:w,updateId:I,role:M,progress:D,rtl:C,toastId:P,deleteToast:k,isIn:j,isLoading:$,closeOnClick:X,theme:q}=t,B=se("Toastify__toast",`Toastify__toast-theme--${q}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":X}),N=ee(g)?g({rtl:C,position:b,type:c,defaultClassName:B}):se(B,g),U=function(te){let{theme:V,type:R,isLoading:z,icon:W}=te,Y=null;const J={theme:V,type:R,isLoading:z};return W===!1||(ee(W)?Y=W(J):p.isValidElement(W)?Y=p.cloneElement(W,J):z?Y=Xe.spinner():(ne=>ne in Xe)(R)&&(Y=Xe[R](J))),Y}(t),H=!!D||!i,K={closeToast:m,type:c,theme:q};let Z=null;return s===!1||(Z=ee(s)?s(K):p.isValidElement(s)?p.cloneElement(s,K):function(te){let{closeToast:V,theme:R,ariaLabel:z="close"}=te;return L.createElement("button",{className:`Toastify__close-button Toastify__close-button--${R}`,type:"button",onClick:W=>{W.stopPropagation(),V(W)},"aria-label":z},L.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},L.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(K)),L.createElement(v,{isIn:j,done:k,position:b,preventExitTransition:o,nodeRef:r,playToast:a},L.createElement("div",{id:P,onClick:u,"data-in":j,className:N,...n,style:f,ref:r},L.createElement("div",{...j&&{role:M},className:ee(h)?h({type:c}):se("Toastify__toast-body",h),style:E},U!=null&&L.createElement("div",{className:se("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},U),L.createElement("div",null,l)),Z,L.createElement(Na,{...I&&!H?{key:`pb-${I}`}:{},rtl:C,theme:q,delay:i,isRunning:e,isIn:j,closeToast:m,hide:d,type:c,style:w,className:x,controlledProgress:H,progress:D||0})))},_e=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},Vn=Ne(_e("bounce",!0));Ne(_e("slide",!0));Ne(_e("zoom"));Ne(_e("flip"));const Ua={position:"top-right",transition:Vn,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Wa(t){let e={...Ua,...t};const o=t.stacked,[r,n]=p.useState(!0),a=p.useRef(null),{getToastToRender:s,isToastActive:l,count:i}=Ba(e),{className:u,style:c,rtl:d,containerId:m}=e;function v(g){const f=se("Toastify__toast-container",`Toastify__toast-container--${g}`,{"Toastify__toast-container--rtl":d});return ee(u)?u({position:g,rtl:d,defaultClassName:f}):se(f,Pe(u))}function b(){o&&(n(!0),T.play())}return p.useLayoutEffect(()=>{if(o){var g;const f=a.current.querySelectorAll('[data-in="true"]'),h=12,E=(g=e.position)==null?void 0:g.includes("top");let x=0,w=0;Array.from(f).reverse().forEach((I,M)=>{const D=I;D.classList.add("Toastify__toast--stacked"),M>0&&(D.dataset.collapsed=`${r}`),D.dataset.pos||(D.dataset.pos=E?"top":"bot");const C=x*(r?.2:1)+(r?0:h*M);D.style.setProperty("--y",`${E?C:-1*C}px`),D.style.setProperty("--g",`${h}`),D.style.setProperty("--s",""+(1-(r?w:0))),x+=D.offsetHeight,w+=.025})}},[r,i,o]),L.createElement("div",{ref:a,className:"Toastify",id:m,onMouseEnter:()=>{o&&(n(!1),T.pause())},onMouseLeave:b},s((g,f)=>{const h=f.length?{...c}:{...c,pointerEvents:"none"};return L.createElement("div",{className:v(g),style:h,key:`container-${g}`},f.map(E=>{let{content:x,props:w}=E;return L.createElement(za,{...w,stacked:o,collapseAll:b,isIn:l(w.toastId,w.containerId),style:w.style,key:`toast-${w.key}`},x)}))}))}const Ka=()=>{const{addProductFalse:t}=it(e=>e.products);return p.useEffect(()=>{t&&T.error("Enter correct data!",{position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:Vn})},[t]),y.jsx(Va,{children:y.jsxs(La,{children:[y.jsxs("div",{className:"title-form-block",children:[y.jsx(Ra,{children:"Products"}),y.jsx(Xi,{})]}),y.jsx(Aa,{}),y.jsx(Wa,{})]})})};export{Ka as default};
