import{b as W,s as S,c as p,f as T,u as Ze,i as Mn,j as E,e as Bt,k as Qe,m as jt,n as Je,o as Pn,p as Vn,N as Ln,q as be}from"./index-e78a3f75.js";import{u as Nt,c as Tn,a as Rn}from"./index.esm-4f40be70.js";import{e as pe,a as Ht,i as $n,k as Bn,j as F,_ as jn,h as _t,b as Nn,c as Hn,d as _n,g as zn}from"./defineProperty-d93e102b.js";import{_ as A,n as ue}from"./emotion-styled.browser.esm-71dbf967.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const Un=W.input`

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

  `,Wn=W.form`
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
  .error-message{
position: absolute;
bottom: -50px;
height: 36px;
color: ${S.errorColor};
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
`,Yn=()=>{const n=new Date,e=n.getDate(),o=String(n.getMonth()+1).padStart(2,"0"),i=n.getFullYear();return`${e}-${o}-${i}`},qn=n=>{n?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"};function zt(n){var e,o,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var t=n.length;for(e=0;e<t;e++)n[e]&&(o=zt(n[e]))&&(i&&(i+=" "),i+=o)}else for(o in n)n[o]&&(i&&(i+=" "),i+=o);return i}function ae(){for(var n,e,o=0,i="",t=arguments.length;o<t;o++)(n=arguments[o])&&(e=zt(n))&&(i&&(i+=" "),i+=e);return i}const me=n=>typeof n=="number"&&!isNaN(n),se=n=>typeof n=="string",ee=n=>typeof n=="function",Fe=n=>se(n)||ee(n)?n:null,We=n=>p.isValidElement(n)||se(n)||ee(n)||me(n);function Gn(n,e,o){o===void 0&&(o=300);const{scrollHeight:i,style:t}=n;requestAnimationFrame(()=>{t.minHeight="initial",t.height=i+"px",t.transition=`all ${o}ms`,requestAnimationFrame(()=>{t.height="0",t.padding="0",t.margin="0",setTimeout(e,o)})})}function Le(n){let{enter:e,exit:o,appendPosition:i=!1,collapse:t=!0,collapseDuration:a=300}=n;return function(s){let{children:l,position:r,preventExitTransition:u,done:c,nodeRef:d,isIn:f,playToast:v}=s;const b=i?`${e}--${r}`:e,g=i?`${o}--${r}`:o,h=p.useRef(0);return p.useLayoutEffect(()=>{const m=d.current,y=b.split(" "),x=w=>{w.target===d.current&&(v(),m.removeEventListener("animationend",x),m.removeEventListener("animationcancel",x),h.current===0&&w.type!=="animationcancel"&&m.classList.remove(...y))};m.classList.add(...y),m.addEventListener("animationend",x),m.addEventListener("animationcancel",x)},[]),p.useEffect(()=>{const m=d.current,y=()=>{m.removeEventListener("animationend",y),t?Gn(m,c,a):c()};f||(u?y():(h.current=1,m.className+=` ${g}`,m.addEventListener("animationend",y)))},[f]),T.createElement(T.Fragment,null,l)}}function pt(n,e){return n!=null?{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:e}:{}}const Q=new Map;let ge=[];const Ye=new Set,Xn=n=>Ye.forEach(e=>e(n)),Ut=()=>Q.size>0;function Wt(n,e){var o;if(e)return!((o=Q.get(e))==null||!o.isToastActive(n));let i=!1;return Q.forEach(t=>{t.isToastActive(n)&&(i=!0)}),i}function Yt(n,e){We(n)&&(Ut()||ge.push({content:n,options:e}),Q.forEach(o=>{o.buildToast(n,e)}))}function ft(n,e){Q.forEach(o=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===o.id&&o.toggle(n,e==null?void 0:e.id):o.toggle(n,e==null?void 0:e.id)})}function Kn(n){const{subscribe:e,getSnapshot:o,setProps:i}=p.useRef(function(a){const s=a.containerId||1;return{subscribe(l){const r=function(c,d,f){let v=1,b=0,g=[],h=[],m=[],y=d;const x=new Map,w=new Set,I=()=>{m=Array.from(x.values()),w.forEach(C=>C())},M=C=>{h=C==null?[]:h.filter(k=>k!==C),I()},D=C=>{const{toastId:k,onOpen:P,updateId:j,children:$}=C.props,X=j==null;C.staleId&&x.delete(C.staleId),x.set(k,C),h=[...h,C.props.toastId].filter(G=>G!==C.staleId),I(),f(pt(C,X?"added":"updated")),X&&ee(P)&&P(p.isValidElement($)&&$.props)};return{id:c,props:y,observe:C=>(w.add(C),()=>w.delete(C)),toggle:(C,k)=>{x.forEach(P=>{k!=null&&k!==P.props.toastId||ee(P.toggle)&&P.toggle(C)})},removeToast:M,toasts:x,clearQueue:()=>{b-=g.length,g=[]},buildToast:(C,k)=>{if((V=>{let{containerId:R,toastId:z,updateId:Y}=V;const q=R?R!==c:c!==1,J=x.has(z)&&Y==null;return q||J})(k))return;const{toastId:P,updateId:j,data:$,staleId:X,delay:G}=k,B=()=>{M(P)},N=j==null;N&&b++;const U={...y,style:y.toastStyle,key:v++,...Object.fromEntries(Object.entries(k).filter(V=>{let[R,z]=V;return z!=null})),toastId:P,updateId:j,data:$,closeToast:B,isIn:!1,className:Fe(k.className||y.toastClassName),bodyClassName:Fe(k.bodyClassName||y.bodyClassName),progressClassName:Fe(k.progressClassName||y.progressClassName),autoClose:!k.isLoading&&(_=k.autoClose,K=y.autoClose,_===!1||me(_)&&_>0?_:K),deleteToast(){const V=x.get(P),{onClose:R,children:z}=V.props;ee(R)&&R(p.isValidElement(z)&&z.props),f(pt(V,"removed")),x.delete(P),b--,b<0&&(b=0),g.length>0?D(g.shift()):I()}};var _,K;U.closeButton=y.closeButton,k.closeButton===!1||We(k.closeButton)?U.closeButton=k.closeButton:k.closeButton===!0&&(U.closeButton=!We(y.closeButton)||y.closeButton);let Z=C;p.isValidElement(C)&&!se(C.type)?Z=p.cloneElement(C,{closeToast:B,toastProps:U,data:$}):ee(C)&&(Z=C({closeToast:B,toastProps:U,data:$}));const te={content:Z,props:U,staleId:X};y.limit&&y.limit>0&&b>y.limit&&N?g.push(te):me(G)?setTimeout(()=>{D(te)},G):D(te)},setProps(C){y=C},setToggle:(C,k)=>{x.get(C).toggle=k},isToastActive:C=>h.some(k=>k===C),getSnapshot:()=>y.newestOnTop?m.reverse():m}}(s,a,Xn);Q.set(s,r);const u=r.observe(l);return ge.forEach(c=>Yt(c.content,c.options)),ge=[],()=>{u(),Q.delete(s)}},setProps(l){var r;(r=Q.get(s))==null||r.setProps(l)},getSnapshot(){var l;return(l=Q.get(s))==null?void 0:l.getSnapshot()}}}(n)).current;i(n);const t=p.useSyncExternalStore(e,o,o);return{getToastToRender:function(a){if(!t)return[];const s=new Map;return t.forEach(l=>{const{position:r}=l.props;s.has(r)||s.set(r,[]),s.get(r).push(l)}),Array.from(s,l=>a(l[0],l[1]))},isToastActive:Wt,count:t==null?void 0:t.length}}function Zn(n){const[e,o]=p.useState(!1),[i,t]=p.useState(!1),a=p.useRef(null),s=p.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:r,closeToast:u,onClick:c,closeOnClick:d}=n;var f,v;function b(){o(!0)}function g(){o(!1)}function h(x){const w=a.current;s.canDrag&&w&&(s.didMove=!0,e&&g(),s.delta=n.draggableDirection==="x"?x.clientX-s.start:x.clientY-s.start,s.start!==x.clientX&&(s.canCloseOnClick=!1),w.style.transform=`translate3d(${n.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,w.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function m(){document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",m);const x=a.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return t(!0),n.closeToast(),void n.collapseAll();x.style.transition="transform 0.2s, opacity 0.2s",x.style.removeProperty("transform"),x.style.removeProperty("opacity")}}(v=Q.get((f={id:n.toastId,containerId:n.containerId,fn:o}).containerId||1))==null||v.setToggle(f.id,f.fn),p.useEffect(()=>{if(n.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",b),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",g)}},[n.pauseOnFocusLoss]);const y={onPointerDown:function(x){if(n.draggable===!0||n.draggable===x.pointerType){s.didMove=!1,document.addEventListener("pointermove",h),document.addEventListener("pointerup",m);const w=a.current;s.canCloseOnClick=!0,s.canDrag=!0,w.style.transition="none",n.draggableDirection==="x"?(s.start=x.clientX,s.removalDistance=w.offsetWidth*(n.draggablePercent/100)):(s.start=x.clientY,s.removalDistance=w.offsetHeight*(n.draggablePercent===80?1.5*n.draggablePercent:n.draggablePercent)/100)}},onPointerUp:function(x){const{top:w,bottom:I,left:M,right:D}=a.current.getBoundingClientRect();x.nativeEvent.type!=="touchend"&&n.pauseOnHover&&x.clientX>=M&&x.clientX<=D&&x.clientY>=w&&x.clientY<=I?g():b()}};return l&&r&&(y.onMouseEnter=g,n.stacked||(y.onMouseLeave=b)),d&&(y.onClick=x=>{c&&c(x),s.canCloseOnClick&&u()}),{playToast:b,pauseToast:g,isRunning:e,preventExitTransition:i,toastRef:a,eventHandlers:y}}function Qn(n){let{delay:e,isRunning:o,closeToast:i,type:t="default",hide:a,className:s,style:l,controlledProgress:r,progress:u,rtl:c,isIn:d,theme:f}=n;const v=a||r&&u===0,b={...l,animationDuration:`${e}ms`,animationPlayState:o?"running":"paused"};r&&(b.transform=`scaleX(${u})`);const g=ae("Toastify__progress-bar",r?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${t}`,{"Toastify__progress-bar--rtl":c}),h=ee(s)?s({rtl:c,type:t,defaultClassName:g}):ae(g,s),m={[r&&u>=1?"onTransitionEnd":"onAnimationEnd"]:r&&u<1?null:()=>{d&&i()}};return T.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},T.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${t}`}),T.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:h,style:b,...m}))}let Jn=1;const qt=()=>""+Jn++;function eo(n){return n&&(se(n.toastId)||me(n.toastId))?n.toastId:qt()}function he(n,e){return Yt(n,e),e.toastId}function Ie(n,e){return{...e,type:e&&e.type||n,toastId:eo(e)}}function xe(n){return(e,o)=>he(e,Ie(n,o))}function L(n,e){return he(n,Ie("default",e))}L.loading=(n,e)=>he(n,Ie("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),L.promise=function(n,e,o){let i,{pending:t,error:a,success:s}=e;t&&(i=se(t)?L.loading(t,o):L.loading(t.render,{...o,...t}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},r=(c,d,f)=>{if(d==null)return void L.dismiss(i);const v={type:c,...l,...o,data:f},b=se(d)?{render:d}:d;return i?L.update(i,{...v,...b}):L(b.render,{...v,...b}),f},u=ee(n)?n():n;return u.then(c=>r("success",s,c)).catch(c=>r("error",a,c)),u},L.success=xe("success"),L.info=xe("info"),L.error=xe("error"),L.warning=xe("warning"),L.warn=L.warning,L.dark=(n,e)=>he(n,Ie("default",{theme:"dark",...e})),L.dismiss=function(n){(function(e){var o;if(Ut()){if(e==null||se(o=e)||me(o))Q.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){var i;(i=Q.get(e.containerId))!=null&&i.removeToast(e.id)||Q.forEach(t=>{t.removeToast(e.id)})}}else ge=ge.filter(t=>e!=null&&t.options.toastId!==e)})(n)},L.clearWaitingQueue=function(n){n===void 0&&(n={}),Q.forEach(e=>{!e.props.limit||n.containerId&&e.id!==n.containerId||e.clearQueue()})},L.isActive=Wt,L.update=function(n,e){e===void 0&&(e={});const o=((i,t)=>{var a;let{containerId:s}=t;return(a=Q.get(s||1))==null?void 0:a.toasts.get(i)})(n,e);if(o){const{props:i,content:t}=o,a={delay:100,...i,...e,toastId:e.toastId||n,updateId:qt()};a.toastId!==n&&(a.staleId=n);const s=a.render||t;delete a.render,he(s,a)}},L.done=n=>{L.update(n,{progress:1})},L.onChange=function(n){return Ye.add(n),()=>{Ye.delete(n)}},L.play=n=>ft(!0,n),L.pause=n=>ft(!1,n);const Ee=n=>{let{theme:e,type:o,isLoading:i,...t}=n;return T.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...t})},$e={info:function(n){return T.createElement(Ee,{...n},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return T.createElement(Ee,{...n},T.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return T.createElement(Ee,{...n},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return T.createElement(Ee,{...n},T.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return T.createElement("div",{className:"Toastify__spinner"})}},to=n=>{const{isRunning:e,preventExitTransition:o,toastRef:i,eventHandlers:t,playToast:a}=Zn(n),{closeButton:s,children:l,autoClose:r,onClick:u,type:c,hideProgressBar:d,closeToast:f,transition:v,position:b,className:g,style:h,bodyClassName:m,bodyStyle:y,progressClassName:x,progressStyle:w,updateId:I,role:M,progress:D,rtl:C,toastId:k,deleteToast:P,isIn:j,isLoading:$,closeOnClick:X,theme:G}=n,B=ae("Toastify__toast",`Toastify__toast-theme--${G}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":X}),N=ee(g)?g({rtl:C,position:b,type:c,defaultClassName:B}):ae(B,g),U=function(te){let{theme:V,type:R,isLoading:z,icon:Y}=te,q=null;const J={theme:V,type:R,isLoading:z};return Y===!1||(ee(Y)?q=Y(J):p.isValidElement(Y)?q=p.cloneElement(Y,J):z?q=$e.spinner():(ne=>ne in $e)(R)&&(q=$e[R](J))),q}(n),_=!!D||!r,K={closeToast:f,type:c,theme:G};let Z=null;return s===!1||(Z=ee(s)?s(K):p.isValidElement(s)?p.cloneElement(s,K):function(te){let{closeToast:V,theme:R,ariaLabel:z="close"}=te;return T.createElement("button",{className:`Toastify__close-button Toastify__close-button--${R}`,type:"button",onClick:Y=>{Y.stopPropagation(),V(Y)},"aria-label":z},T.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},T.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(K)),T.createElement(v,{isIn:j,done:P,position:b,preventExitTransition:o,nodeRef:i,playToast:a},T.createElement("div",{id:k,onClick:u,"data-in":j,className:N,...t,style:h,ref:i},T.createElement("div",{...j&&{role:M},className:ee(m)?m({type:c}):ae("Toastify__toast-body",m),style:y},U!=null&&T.createElement("div",{className:ae("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},U),T.createElement("div",null,l)),Z,T.createElement(Qn,{...I&&!_?{key:`pb-${I}`}:{},rtl:C,theme:G,delay:r,isRunning:e,isIn:j,closeToast:f,hide:d,type:c,style:w,className:x,controlledProgress:_,progress:D||0})))},Te=function(n,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}},Gt=Le(Te("bounce",!0));Le(Te("slide",!0));Le(Te("zoom"));Le(Te("flip"));const no={position:"top-right",transition:Gt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function oo(n){let e={...no,...n};const o=n.stacked,[i,t]=p.useState(!0),a=p.useRef(null),{getToastToRender:s,isToastActive:l,count:r}=Kn(e),{className:u,style:c,rtl:d,containerId:f}=e;function v(g){const h=ae("Toastify__toast-container",`Toastify__toast-container--${g}`,{"Toastify__toast-container--rtl":d});return ee(u)?u({position:g,rtl:d,defaultClassName:h}):ae(h,Fe(u))}function b(){o&&(t(!0),L.play())}return p.useLayoutEffect(()=>{if(o){var g;const h=a.current.querySelectorAll('[data-in="true"]'),m=12,y=(g=e.position)==null?void 0:g.includes("top");let x=0,w=0;Array.from(h).reverse().forEach((I,M)=>{const D=I;D.classList.add("Toastify__toast--stacked"),M>0&&(D.dataset.collapsed=`${i}`),D.dataset.pos||(D.dataset.pos=y?"top":"bot");const C=x*(i?.2:1)+(i?0:m*M);D.style.setProperty("--y",`${y?C:-1*C}px`),D.style.setProperty("--g",`${m}`),D.style.setProperty("--s",""+(1-(i?w:0))),x+=D.offsetHeight,w+=.025})}},[i,r,o]),T.createElement("div",{ref:a,className:"Toastify",id:f,onMouseEnter:()=>{o&&(t(!1),L.pause())},onMouseLeave:b},s((g,h)=>{const m=h.length?{...c}:{...c,pointerEvents:"none"};return T.createElement("div",{className:v(g),style:m,key:`container-${g}`},h.map(y=>{let{content:x,props:w}=y;return T.createElement(to,{...w,stacked:o,collapseAll:b,isIn:l(w.toastId,w.containerId),style:w.style,key:`toast-${w.key}`},x)}))}))}const Xt=(n,e)=>{const o={position:"top-center",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:Gt};switch(n){case"info":L.info(e,o);break;case"error":L.error(e,o);break}},io=({data:n,closeModal:e})=>{const{title:o,calories:i,_id:t}=n||{},a=Ze(),s=Nt({enableReinitialize:!0,initialValues:{title:o,weight:0,calories:0},validationSchema:Tn().shape({weight:Rn().required("Please enter weight").min(2,"Weight must be at least 2 characters").max(4,"Weight cannot be more than 4 characters")}),onSubmit:r=>{const{weight:u,calories:c}=r,d={date:Yn(),product:t,amount:u,calories:Math.ceil(c)};a(Mn(d))}}),l=r=>{if(!(isNaN(r.target.value)&&r.target.value!=="")&&(r.target.value===""&&s.setValues({...s.values,calories:""}),s.handleChange(r),r.target.value>0)){const u=parseFloat(Number(r.target.value)),c=u*i/100;s.setValues({...s.values,weight:u,calories:c})}};return E.jsxs(Wn,{onSubmit:s.handleSubmit,children:[E.jsxs("div",{className:"inputs-block",children:[E.jsx("input",{id:"title",name:"title",type:"text",defaultValue:s.values.title,disabled:!0,className:"title-input"}),E.jsxs("div",{className:"weight-input-block",children:[E.jsx(Un,{id:"weight",name:"weight",type:"text",required:!0,pattern:"\\d*\\.?\\d*",onChange:l,value:s.values.weight}),E.jsx("p",{className:"error-message",children:s.errors.weight}),E.jsx("span",{className:"grams-span",children:"grams"})]})]}),E.jsxs("div",{className:"calories-block",children:[E.jsx("span",{className:"calories-span",children:"Calories: "}),E.jsx("input",{id:"calories",name:"calories",type:"number",disabled:!0,value:s.values.calories,className:"calories-input"})]}),E.jsxs("div",{className:"button-block",children:[E.jsx("button",{className:"add-button",type:"submit",disabled:!!(s.errors.weight||s.values.weight===0),children:"Add to diary"}),E.jsx("button",{onClick:e,className:"cancel-button",type:"button",children:"Cancel"})]})]})},et=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M13.5 4.5L4.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M4.5 4.5L13.5 13.5",stroke:"#E6533C",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),qe=W.button`
  position: absolute;
  top: 14px;
  right: 14px;
`,ro=W(et)`
  transition:
    stroke ${S.animation},
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  > path {
    stroke: white;
  }
  @media screen and (min-width: 768px) {
    ${qe}:hover & {
      > path {
        stroke: ${S.orangeColor};
      }
    }
    ${qe}:hover & {
      scale: 1.25;
      transform: rotate(180deg);
    }
  }
`,ao=W.div`
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
`,so=W.div`
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
`,uo=document.querySelector("#add-product-modal"),lo=({data:n,closeModal:e,showModal:o})=>{p.useEffect(()=>{if(!o)return;const t=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e,o]);const i=t=>{t.target===t.currentTarget&&e()};return Bt.createPortal(E.jsx(ao,{onClick:i,className:o?"":"hide-hidden",children:E.jsxs(so,{className:"modal",children:[E.jsx(qe,{onClick:e,type:"button",children:E.jsx(ro,{})}),E.jsx(io,{data:n,closeModal:e})]})}),uo)};function ht(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),o.push.apply(o,i)}return o}function O(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?ht(Object(o),!0).forEach(function(i){pe(n,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):ht(Object(o)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(o,i))})}return n}function co(n){if(Array.isArray(n))return n}function po(n,e){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var i,t,a,s,l=[],r=!0,u=!1;try{if(a=(o=o.call(n)).next,e===0){if(Object(o)!==o)return;r=!1}else for(;!(r=(i=a.call(o)).done)&&(l.push(i.value),l.length!==e);r=!0);}catch(c){u=!0,t=c}finally{try{if(!r&&o.return!=null&&(s=o.return(),Object(s)!==s))return}finally{if(u)throw t}}return l}}function fo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(n,e){return co(n)||po(n,e)||Ht(n,e)||fo()}function ho(n,e){if(n==null)return{};var o={},i=Object.keys(n),t,a;for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&(o[t]=n[t]);return o}function re(n,e){if(n==null)return{};var o=ho(n,e),i,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}var mo=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function go(n){var e=n.defaultInputValue,o=e===void 0?"":e,i=n.defaultMenuIsOpen,t=i===void 0?!1:i,a=n.defaultValue,s=a===void 0?null:a,l=n.inputValue,r=n.menuIsOpen,u=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,v=n.value,b=re(n,mo),g=p.useState(l!==void 0?l:o),h=ie(g,2),m=h[0],y=h[1],x=p.useState(r!==void 0?r:t),w=ie(x,2),I=w[0],M=w[1],D=p.useState(v!==void 0?v:s),C=ie(D,2),k=C[0],P=C[1],j=p.useCallback(function(_,K){typeof u=="function"&&u(_,K),P(_)},[u]),$=p.useCallback(function(_,K){var Z;typeof c=="function"&&(Z=c(_,K)),y(Z!==void 0?Z:_)},[c]),X=p.useCallback(function(){typeof f=="function"&&f(),M(!0)},[f]),G=p.useCallback(function(){typeof d=="function"&&d(),M(!1)},[d]),B=l!==void 0?l:m,N=r!==void 0?r:I,U=v!==void 0?v:k;return O(O({},b),{},{inputValue:B,menuIsOpen:N,onChange:j,onInputChange:$,onMenuClose:G,onMenuOpen:X,value:U})}function vo(n){if(Array.isArray(n))return $n(n)}function bo(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function xo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tt(n){return vo(n)||bo(n)||Ht(n)||xo()}function Eo(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}const Co=Math.min,yo=Math.max,De=Math.round,Ce=Math.floor,ke=n=>({x:n,y:n});function wo(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Kt(n){return Qt(n)?(n.nodeName||"").toLowerCase():"#document"}function oe(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Zt(n){var e;return(e=(Qt(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function Qt(n){return n instanceof Node||n instanceof oe(n).Node}function Ge(n){return n instanceof Element||n instanceof oe(n).Element}function nt(n){return n instanceof HTMLElement||n instanceof oe(n).HTMLElement}function mt(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof oe(n).ShadowRoot}function Jt(n){const{overflow:e,overflowX:o,overflowY:i,display:t}=ot(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(t)}function So(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Fo(n){return["html","body","#document"].includes(Kt(n))}function ot(n){return oe(n).getComputedStyle(n)}function Oo(n){if(Kt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||mt(n)&&n.host||Zt(n);return mt(e)?e.host:e}function en(n){const e=Oo(n);return Fo(e)?n.ownerDocument?n.ownerDocument.body:n.body:nt(e)&&Jt(e)?e:en(e)}function Ae(n,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const t=en(n),a=t===((i=n.ownerDocument)==null?void 0:i.body),s=oe(t);return a?e.concat(s,s.visualViewport||[],Jt(t)?t:[],s.frameElement&&o?Ae(s.frameElement):[]):e.concat(t,Ae(t,[],o))}function Io(n){const e=ot(n);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const t=nt(n),a=t?n.offsetWidth:o,s=t?n.offsetHeight:i,l=De(o)!==a||De(i)!==s;return l&&(o=a,i=s),{width:o,height:i,$:l}}function it(n){return Ge(n)?n:n.contextElement}function Be(n){const e=it(n);if(!nt(e))return ke(1);const o=e.getBoundingClientRect(),{width:i,height:t,$:a}=Io(e);let s=(a?De(o.width):o.width)/i,l=(a?De(o.height):o.height)/t;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Do=ke(0);function ko(n){const e=oe(n);return!So()||!e.visualViewport?Do:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ao(n,e,o){return e===void 0&&(e=!1),!o||e&&o!==oe(n)?!1:e}function gt(n,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const t=n.getBoundingClientRect(),a=it(n);let s=ke(1);e&&(i?Ge(i)&&(s=Be(i)):s=Be(n));const l=Ao(a,o,i)?ko(a):ke(0);let r=(t.left+l.x)/s.x,u=(t.top+l.y)/s.y,c=t.width/s.x,d=t.height/s.y;if(a){const f=oe(a),v=i&&Ge(i)?oe(i):i;let b=f.frameElement;for(;b&&i&&v!==f;){const g=Be(b),h=b.getBoundingClientRect(),m=ot(b),y=h.left+(b.clientLeft+parseFloat(m.paddingLeft))*g.x,x=h.top+(b.clientTop+parseFloat(m.paddingTop))*g.y;r*=g.x,u*=g.y,c*=g.x,d*=g.y,r+=y,u+=x,b=oe(b).frameElement}}return wo({width:c,height:d,x:r,y:u})}function Mo(n,e){let o=null,i;const t=Zt(n);function a(){clearTimeout(i),o&&o.disconnect(),o=null}function s(l,r){l===void 0&&(l=!1),r===void 0&&(r=1),a();const{left:u,top:c,width:d,height:f}=n.getBoundingClientRect();if(l||e(),!d||!f)return;const v=Ce(c),b=Ce(t.clientWidth-(u+d)),g=Ce(t.clientHeight-(c+f)),h=Ce(u),y={rootMargin:-v+"px "+-b+"px "+-g+"px "+-h+"px",threshold:yo(0,Co(1,r))||1};let x=!0;function w(I){const M=I[0].intersectionRatio;if(M!==r){if(!x)return s();M?s(!1,M):i=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{o=new IntersectionObserver(w,{...y,root:t.ownerDocument})}catch{o=new IntersectionObserver(w,y)}o.observe(n)}return s(!0),a}function Po(n,e,o,i){i===void 0&&(i={});const{ancestorScroll:t=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:r=!1}=i,u=it(n),c=t||a?[...u?Ae(u):[],...Ae(e)]:[];c.forEach(m=>{t&&m.addEventListener("scroll",o,{passive:!0}),a&&m.addEventListener("resize",o)});const d=u&&l?Mo(u,o):null;let f=-1,v=null;s&&(v=new ResizeObserver(m=>{let[y]=m;y&&y.target===u&&v&&(v.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{v&&v.observe(e)})),o()}),u&&!r&&v.observe(u),v.observe(e));let b,g=r?gt(n):null;r&&h();function h(){const m=gt(n);g&&(m.x!==g.x||m.y!==g.y||m.width!==g.width||m.height!==g.height)&&o(),g=m,b=requestAnimationFrame(h)}return o(),()=>{c.forEach(m=>{t&&m.removeEventListener("scroll",o),a&&m.removeEventListener("resize",o)}),d&&d(),v&&v.disconnect(),v=null,r&&cancelAnimationFrame(b)}}var Xe=p.useLayoutEffect,Vo=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Me=function(){};function Lo(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function To(n,e){for(var o=arguments.length,i=new Array(o>2?o-2:0),t=2;t<o;t++)i[t-2]=arguments[t];var a=[].concat(i);if(e&&n)for(var s in e)e.hasOwnProperty(s)&&e[s]&&a.push("".concat(Lo(n,s)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var vt=function(e){return Uo(e)?e.filter(Boolean):jn(e)==="object"&&e!==null?[e]:[]},tn=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var o=re(e,Vo);return O({},o)},H=function(e,o,i){var t=e.cx,a=e.getStyles,s=e.getClassNames,l=e.className;return{css:a(o,e),className:t(i??{},s(o,e),l)}};function Re(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Ro(n){return Re(n)?window.innerHeight:n.clientHeight}function nn(n){return Re(n)?window.pageYOffset:n.scrollTop}function Pe(n,e){if(Re(n)){window.scrollTo(0,e);return}n.scrollTop=e}function $o(n){var e=getComputedStyle(n),o=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(o&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Bo(n,e,o,i){return o*((n=n/i-1)*n*n+1)+e}function ye(n,e){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Me,t=nn(n),a=e-t,s=10,l=0;function r(){l+=s;var u=Bo(l,t,a,o);Pe(n,u),l<o?window.requestAnimationFrame(r):i(n)}r()}function bt(n,e){var o=n.getBoundingClientRect(),i=e.getBoundingClientRect(),t=e.offsetHeight/3;i.bottom+t>o.bottom?Pe(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):i.top-t<o.top&&Pe(n,Math.max(e.offsetTop-t,0))}function jo(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function xt(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function No(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var on=!1,Ho={get passive(){return on=!0}},we=typeof window<"u"?window:{};we.addEventListener&&we.removeEventListener&&(we.addEventListener("p",Me,Ho),we.removeEventListener("p",Me,!1));var _o=on;function zo(n){return n!=null}function Uo(n){return Array.isArray(n)}function Se(n,e,o){return n?e:o}var Wo=function(e){for(var o=arguments.length,i=new Array(o>1?o-1:0),t=1;t<o;t++)i[t-1]=arguments[t];var a=Object.entries(e).filter(function(s){var l=ie(s,1),r=l[0];return!i.includes(r)});return a.reduce(function(s,l){var r=ie(l,2),u=r[0],c=r[1];return s[u]=c,s},{})},Yo=["children","innerProps"],qo=["children","innerProps"];function Go(n){var e=n.maxHeight,o=n.menuEl,i=n.minHeight,t=n.placement,a=n.shouldScroll,s=n.isFixedPosition,l=n.controlHeight,r=$o(o),u={placement:"bottom",maxHeight:e};if(!o||!o.offsetParent)return u;var c=r.getBoundingClientRect(),d=c.height,f=o.getBoundingClientRect(),v=f.bottom,b=f.height,g=f.top,h=o.offsetParent.getBoundingClientRect(),m=h.top,y=s?window.innerHeight:Ro(r),x=nn(r),w=parseInt(getComputedStyle(o).marginBottom,10),I=parseInt(getComputedStyle(o).marginTop,10),M=m-I,D=y-g,C=M+x,k=d-x-g,P=v-y+x+w,j=x+g-I,$=160;switch(t){case"auto":case"bottom":if(D>=b)return{placement:"bottom",maxHeight:e};if(k>=b&&!s)return a&&ye(r,P,$),{placement:"bottom",maxHeight:e};if(!s&&k>=i||s&&D>=i){a&&ye(r,P,$);var X=s?D-w:k-w;return{placement:"bottom",maxHeight:X}}if(t==="auto"||s){var G=e,B=s?M:C;return B>=i&&(G=Math.min(B-w-l,e)),{placement:"top",maxHeight:G}}if(t==="bottom")return a&&Pe(r,P),{placement:"bottom",maxHeight:e};break;case"top":if(M>=b)return{placement:"top",maxHeight:e};if(C>=b&&!s)return a&&ye(r,j,$),{placement:"top",maxHeight:e};if(!s&&C>=i||s&&M>=i){var N=e;return(!s&&C>=i||s&&M>=i)&&(N=s?M-I:C-I),a&&ye(r,j,$),{placement:"top",maxHeight:N}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return u}function Xo(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var rn=function(e){return e==="auto"?"bottom":e},Ko=function(e,o){var i,t=e.placement,a=e.theme,s=a.borderRadius,l=a.spacing,r=a.colors;return O((i={label:"menu"},pe(i,Xo(t),"100%"),pe(i,"position","absolute"),pe(i,"width","100%"),pe(i,"zIndex",1),i),o?{}:{backgroundColor:r.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},an=p.createContext(null),Zo=function(e){var o=e.children,i=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,r=e.theme,u=p.useContext(an)||{},c=u.setPortalPlacement,d=p.useRef(null),f=p.useState(t),v=ie(f,2),b=v[0],g=v[1],h=p.useState(null),m=ie(h,2),y=m[0],x=m[1],w=r.spacing.controlHeight;return Xe(function(){var I=d.current;if(I){var M=s==="fixed",D=l&&!M,C=Go({maxHeight:t,menuEl:I,minHeight:i,placement:a,shouldScroll:D,isFixedPosition:M,controlHeight:w});g(C.maxHeight),x(C.placement),c==null||c(C.placement)}},[t,a,s,l,i,c,w]),o({ref:d,placerProps:O(O({},e),{},{placement:y||rn(a),maxHeight:b})})},Qo=function(e){var o=e.children,i=e.innerRef,t=e.innerProps;return F("div",A({},H(e,"menu",{menu:!0}),{ref:i},t),o)},Jo=Qo,ei=function(e,o){var i=e.maxHeight,t=e.theme.spacing.baseUnit;return O({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:t,paddingTop:t})},ti=function(e){var o=e.children,i=e.innerProps,t=e.innerRef,a=e.isMulti;return F("div",A({},H(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},i),o)},sn=function(e,o){var i=e.theme,t=i.spacing.baseUnit,a=i.colors;return O({textAlign:"center"},o?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},ni=sn,oi=sn,ii=function(e){var o=e.children,i=o===void 0?"No options":o,t=e.innerProps,a=re(e,Yo);return F("div",A({},H(O(O({},a),{},{children:i,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),i)},ri=function(e){var o=e.children,i=o===void 0?"Loading...":o,t=e.innerProps,a=re(e,qo);return F("div",A({},H(O(O({},a),{},{children:i,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),i)},ai=function(e){var o=e.rect,i=e.offset,t=e.position;return{left:o.left,position:t,top:i,width:o.width,zIndex:1}},si=function(e){var o=e.appendTo,i=e.children,t=e.controlElement,a=e.innerProps,s=e.menuPlacement,l=e.menuPosition,r=p.useRef(null),u=p.useRef(null),c=p.useState(rn(s)),d=ie(c,2),f=d[0],v=d[1],b=p.useMemo(function(){return{setPortalPlacement:v}},[]),g=p.useState(null),h=ie(g,2),m=h[0],y=h[1],x=p.useCallback(function(){if(t){var D=jo(t),C=l==="fixed"?0:window.pageYOffset,k=D[f]+C;(k!==(m==null?void 0:m.offset)||D.left!==(m==null?void 0:m.rect.left)||D.width!==(m==null?void 0:m.rect.width))&&y({offset:k,rect:D})}},[t,l,f,m==null?void 0:m.offset,m==null?void 0:m.rect.left,m==null?void 0:m.rect.width]);Xe(function(){x()},[x]);var w=p.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),t&&r.current&&(u.current=Po(t,r.current,x,{elementResize:"ResizeObserver"in window}))},[t,x]);Xe(function(){w()},[w]);var I=p.useCallback(function(D){r.current=D,w()},[w]);if(!o&&l!=="fixed"||!m)return null;var M=F("div",A({ref:I},H(O(O({},e),{},{offset:m.offset,position:l,rect:m.rect}),"menuPortal",{"menu-portal":!0}),a),i);return F(an.Provider,{value:b},o?Bt.createPortal(M,o):M)},ui=function(e){var o=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},li=function(e){var o=e.children,i=e.innerProps,t=e.isDisabled,a=e.isRtl;return F("div",A({},H(e,"container",{"--is-disabled":t,"--is-rtl":a}),i),o)},ci=function(e,o){var i=e.theme.spacing,t=e.isMulti,a=e.hasValue,s=e.selectProps.controlShouldRenderValue;return O({alignItems:"center",display:t&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},di=function(e){var o=e.children,i=e.innerProps,t=e.isMulti,a=e.hasValue;return F("div",A({},H(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),i),o)},pi=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},fi=function(e){var o=e.children,i=e.innerProps;return F("div",A({},H(e,"indicatorsContainer",{indicators:!0}),i),o)},Et,hi=["size"],mi=["innerProps","isRtl","size"],gi={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},un=function(e){var o=e.size,i=re(e,hi);return F("svg",A({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:gi},i))},rt=function(e){return F(un,A({size:20},e),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},ln=function(e){return F(un,A({size:20},e),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},cn=function(e,o){var i=e.isFocused,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return O({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:i?s.neutral60:s.neutral20,padding:a*2,":hover":{color:i?s.neutral80:s.neutral40}})},vi=cn,bi=function(e){var o=e.children,i=e.innerProps;return F("div",A({},H(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),o||F(ln,null))},xi=cn,Ei=function(e){var o=e.children,i=e.innerProps;return F("div",A({},H(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),o||F(rt,null))},Ci=function(e,o){var i=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,s=t.colors;return O({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:i?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},yi=function(e){var o=e.innerProps;return F("span",A({},o,H(e,"indicatorSeparator",{"indicator-separator":!0})))},wi=Bn(Et||(Et=Eo([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Si=function(e,o){var i=e.isFocused,t=e.size,a=e.theme,s=a.colors,l=a.spacing.baseUnit;return O({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},o?{}:{color:i?s.neutral60:s.neutral20,padding:l*2})},je=function(e){var o=e.delay,i=e.offset;return F("span",{css:_t({animation:"".concat(wi," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Fi=function(e){var o=e.innerProps,i=e.isRtl,t=e.size,a=t===void 0?4:t,s=re(e,mi);return F("div",A({},H(O(O({},s),{},{innerProps:o,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),F(je,{delay:0,offset:i}),F(je,{delay:160,offset:!0}),F(je,{delay:320,offset:!i}))},Oi=function(e,o){var i=e.isDisabled,t=e.isFocused,a=e.theme,s=a.colors,l=a.borderRadius,r=a.spacing;return O({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:r.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:i?s.neutral5:s.neutral0,borderColor:i?s.neutral10:t?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:t?s.primary:s.neutral30}})},Ii=function(e){var o=e.children,i=e.isDisabled,t=e.isFocused,a=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return F("div",A({ref:a},H(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":t,"control--menu-is-open":l}),s,{"aria-disabled":i||void 0}),o)},Di=Ii,ki=["data"],Ai=function(e,o){var i=e.theme.spacing;return o?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},Mi=function(e){var o=e.children,i=e.cx,t=e.getStyles,a=e.getClassNames,s=e.Heading,l=e.headingProps,r=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return F("div",A({},H(e,"group",{group:!0}),r),F(s,A({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:i}),u),F("div",null,o))},Pi=function(e,o){var i=e.theme,t=i.colors,a=i.spacing;return O({label:"group",cursor:"default",display:"block"},o?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Vi=function(e){var o=tn(e);o.data;var i=re(o,ki);return F("div",A({},H(e,"groupHeading",{"group-heading":!0}),i))},Li=Mi,Ti=["innerRef","isDisabled","isHidden","inputClassName"],Ri=function(e,o){var i=e.isDisabled,t=e.value,a=e.theme,s=a.spacing,l=a.colors;return O(O({visibility:i?"hidden":"visible",transform:t?"translateZ(0)":""},$i),o?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},dn={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},$i={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":O({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},dn)},Bi=function(e){return O({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},dn)},ji=function(e){var o=e.cx,i=e.value,t=tn(e),a=t.innerRef,s=t.isDisabled,l=t.isHidden,r=t.inputClassName,u=re(t,Ti);return F("div",A({},H(e,"input",{"input-container":!0}),{"data-value":i||""}),F("input",A({className:o({input:!0},r),ref:a,style:Bi(l),disabled:s},u)))},Ni=ji,Hi=function(e,o){var i=e.theme,t=i.spacing,a=i.borderRadius,s=i.colors;return O({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},_i=function(e,o){var i=e.theme,t=i.borderRadius,a=i.colors,s=e.cropWithEllipsis;return O({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},zi=function(e,o){var i=e.theme,t=i.spacing,a=i.borderRadius,s=i.colors,l=e.isFocused;return O({alignItems:"center",display:"flex"},o?{}:{borderRadius:a/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},pn=function(e){var o=e.children,i=e.innerProps;return F("div",i,o)},Ui=pn,Wi=pn;function Yi(n){var e=n.children,o=n.innerProps;return F("div",A({role:"button"},o),e||F(rt,{size:14}))}var qi=function(e){var o=e.children,i=e.components,t=e.data,a=e.innerProps,s=e.isDisabled,l=e.removeProps,r=e.selectProps,u=i.Container,c=i.Label,d=i.Remove;return F(u,{data:t,innerProps:O(O({},H(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:r},F(c,{data:t,innerProps:O({},H(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:r},o),F(d,{data:t,innerProps:O(O({},H(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},l),selectProps:r}))},Gi=qi,Xi=function(e,o){var i=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.theme,l=s.spacing,r=s.colors;return O({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:a?r.primary:t?r.primary25:"transparent",color:i?r.neutral20:a?r.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?r.primary:r.primary50}})},Ki=function(e){var o=e.children,i=e.isDisabled,t=e.isFocused,a=e.isSelected,s=e.innerRef,l=e.innerProps;return F("div",A({},H(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":t,"option--is-selected":a}),{ref:s,"aria-disabled":i},l),o)},Zi=Ki,Qi=function(e,o){var i=e.theme,t=i.spacing,a=i.colors;return O({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Ji=function(e){var o=e.children,i=e.innerProps;return F("div",A({},H(e,"placeholder",{placeholder:!0}),i),o)},er=Ji,tr=function(e,o){var i=e.isDisabled,t=e.theme,a=t.spacing,s=t.colors;return O({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:i?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},nr=function(e){var o=e.children,i=e.isDisabled,t=e.innerProps;return F("div",A({},H(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),t),o)},or=nr,at={ClearIndicator:Ei,Control:Di,DropdownIndicator:bi,DownChevron:ln,CrossIcon:rt,Group:Li,GroupHeading:Vi,IndicatorsContainer:fi,IndicatorSeparator:yi,Input:Ni,LoadingIndicator:Fi,Menu:Jo,MenuList:ti,MenuPortal:si,LoadingMessage:ri,NoOptionsMessage:ii,MultiValue:Gi,MultiValueContainer:Ui,MultiValueLabel:Wi,MultiValueRemove:Yi,Option:Zi,Placeholder:er,SelectContainer:li,SingleValue:or,ValueContainer:di},ir=function(e){return O(O({},at),e.components)},Ct=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function rr(n,e){return!!(n===e||Ct(n)&&Ct(e))}function ar(n,e){if(n.length!==e.length)return!1;for(var o=0;o<n.length;o++)if(!rr(n[o],e[o]))return!1;return!0}function sr(n,e){e===void 0&&(e=ar);var o=null;function i(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(o&&o.lastThis===this&&e(t,o.lastArgs))return o.lastResult;var s=n.apply(this,t);return o={lastResult:s,lastArgs:t,lastThis:this},s}return i.clear=function(){o=null},i}var ur={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},lr=function(e){return F("span",A({css:ur},e))},yt=lr,cr={guidance:function(e){var o=e.isSearchable,i=e.isMulti,t=e.tabSelectsValue,a=e.context,s=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var o=e.action,i=e.label,t=i===void 0?"":i,a=e.labels,s=e.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var o=e.context,i=e.focused,t=e.options,a=e.label,s=a===void 0?"":a,l=e.selectValue,r=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(g,h){return g&&g.length?"".concat(g.indexOf(h)+1," of ").concat(g.length):""};if(o==="value"&&l)return"value ".concat(s," focused, ").concat(d(l,i),".");if(o==="menu"&&c){var f=r?" disabled":"",v="".concat(u?" selected":"").concat(f);return"".concat(s).concat(v,", ").concat(d(t,i),".")}return""},onFilter:function(e){var o=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(o?" for search term "+o:"",".")}},dr=function(e){var o=e.ariaSelection,i=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,s=e.isFocused,l=e.selectValue,r=e.selectProps,u=e.id,c=e.isAppleDevice,d=r.ariaLiveMessages,f=r.getOptionLabel,v=r.inputValue,b=r.isMulti,g=r.isOptionDisabled,h=r.isSearchable,m=r.menuIsOpen,y=r.options,x=r.screenReaderStatus,w=r.tabSelectsValue,I=r.isLoading,M=r["aria-label"],D=r["aria-live"],C=p.useMemo(function(){return O(O({},cr),d||{})},[d]),k=p.useMemo(function(){var B="";if(o&&C.onChange){var N=o.option,U=o.options,_=o.removedValue,K=o.removedValues,Z=o.value,te=function(ne){return Array.isArray(ne)?null:ne},V=_||N||te(Z),R=V?f(V):"",z=U||K||void 0,Y=z?z.map(f):[],q=O({isDisabled:V&&g(V,l),label:R,labels:Y},o);B=C.onChange(q)}return B},[o,C,g,l,f]),P=p.useMemo(function(){var B="",N=i||t,U=!!(i&&l&&l.includes(i));if(N&&C.onFocus){var _={focused:N,label:f(N),isDisabled:g(N,l),isSelected:U,options:a,context:N===i?"menu":"value",selectValue:l,isAppleDevice:c};B=C.onFocus(_)}return B},[i,t,f,g,C,a,l,c]),j=p.useMemo(function(){var B="";if(m&&y.length&&!I&&C.onFilter){var N=x({count:a.length});B=C.onFilter({inputValue:v,resultsMessage:N})}return B},[a,v,m,C,y,x,I]),$=(o==null?void 0:o.action)==="initial-input-focus",X=p.useMemo(function(){var B="";if(C.guidance){var N=t?"value":m?"menu":"input";B=C.guidance({"aria-label":M,context:N,isDisabled:i&&g(i,l),isMulti:b,isSearchable:h,tabSelectsValue:w,isInitialFocus:$})}return B},[M,i,t,b,g,h,m,C,l,w,$]),G=F(p.Fragment,null,F("span",{id:"aria-selection"},k),F("span",{id:"aria-focused"},P),F("span",{id:"aria-results"},j),F("span",{id:"aria-guidance"},X));return F(p.Fragment,null,F(yt,{id:u},$&&G),F(yt,{"aria-live":D,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!$&&G))},pr=dr,Ke=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],fr=new RegExp("["+Ke.map(function(n){return n.letters}).join("")+"]","g"),fn={};for(var Ne=0;Ne<Ke.length;Ne++)for(var He=Ke[Ne],_e=0;_e<He.letters.length;_e++)fn[He.letters[_e]]=He.base;var hn=function(e){return e.replace(fr,function(o){return fn[o]})},hr=sr(hn),wt=function(e){return e.replace(/^\s+|\s+$/g,"")},mr=function(e){return"".concat(e.label," ").concat(e.value)},gr=function(e){return function(o,i){if(o.data.__isNew__)return!0;var t=O({ignoreCase:!0,ignoreAccents:!0,stringify:mr,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,s=t.ignoreAccents,l=t.stringify,r=t.trim,u=t.matchFrom,c=r?wt(i):i,d=r?wt(l(o)):l(o);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=hr(c),d=hn(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},vr=["innerRef"];function br(n){var e=n.innerRef,o=re(n,vr),i=Wo(o,"onExited","in","enter","exit","appear");return F("input",A({ref:e},i,{css:_t({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var xr=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function Er(n){var e=n.isEnabled,o=n.onBottomArrive,i=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,s=p.useRef(!1),l=p.useRef(!1),r=p.useRef(0),u=p.useRef(null),c=p.useCallback(function(h,m){if(u.current!==null){var y=u.current,x=y.scrollTop,w=y.scrollHeight,I=y.clientHeight,M=u.current,D=m>0,C=w-I-x,k=!1;C>m&&s.current&&(i&&i(h),s.current=!1),D&&l.current&&(a&&a(h),l.current=!1),D&&m>C?(o&&!s.current&&o(h),M.scrollTop=w,k=!0,s.current=!0):!D&&-m>x&&(t&&!l.current&&t(h),M.scrollTop=0,k=!0,l.current=!0),k&&xr(h)}},[o,i,t,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),f=p.useCallback(function(h){r.current=h.changedTouches[0].clientY},[]),v=p.useCallback(function(h){var m=r.current-h.changedTouches[0].clientY;c(h,m)},[c]),b=p.useCallback(function(h){if(h){var m=_o?{passive:!1}:!1;h.addEventListener("wheel",d,m),h.addEventListener("touchstart",f,m),h.addEventListener("touchmove",v,m)}},[v,f,d]),g=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",f,!1),h.removeEventListener("touchmove",v,!1))},[v,f,d]);return p.useEffect(function(){if(e){var h=u.current;return b(h),function(){g(h)}}},[e,b,g]),function(h){u.current=h}}var St=["boxSizing","height","overflow","paddingRight","position"],Ft={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ot(n){n.preventDefault()}function It(n){n.stopPropagation()}function Dt(){var n=this.scrollTop,e=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===e&&(this.scrollTop=n-1)}function kt(){return"ontouchstart"in window||navigator.maxTouchPoints}var At=!!(typeof window<"u"&&window.document&&window.document.createElement),de=0,le={capture:!1,passive:!1};function Cr(n){var e=n.isEnabled,o=n.accountForScrollbars,i=o===void 0?!0:o,t=p.useRef({}),a=p.useRef(null),s=p.useCallback(function(r){if(At){var u=document.body,c=u&&u.style;if(i&&St.forEach(function(b){var g=c&&c[b];t.current[b]=g}),i&&de<1){var d=parseInt(t.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,v=window.innerWidth-f+d||0;Object.keys(Ft).forEach(function(b){var g=Ft[b];c&&(c[b]=g)}),c&&(c.paddingRight="".concat(v,"px"))}u&&kt()&&(u.addEventListener("touchmove",Ot,le),r&&(r.addEventListener("touchstart",Dt,le),r.addEventListener("touchmove",It,le))),de+=1}},[i]),l=p.useCallback(function(r){if(At){var u=document.body,c=u&&u.style;de=Math.max(de-1,0),i&&de<1&&St.forEach(function(d){var f=t.current[d];c&&(c[d]=f)}),u&&kt()&&(u.removeEventListener("touchmove",Ot,le),r&&(r.removeEventListener("touchstart",Dt,le),r.removeEventListener("touchmove",It,le)))}},[i]);return p.useEffect(function(){if(e){var r=a.current;return s(r),function(){l(r)}}},[e,s,l]),function(r){a.current=r}}var yr=function(e){var o=e.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},wr={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Sr(n){var e=n.children,o=n.lockEnabled,i=n.captureEnabled,t=i===void 0?!0:i,a=n.onBottomArrive,s=n.onBottomLeave,l=n.onTopArrive,r=n.onTopLeave,u=Er({isEnabled:t,onBottomArrive:a,onBottomLeave:s,onTopArrive:l,onTopLeave:r}),c=Cr({isEnabled:o}),d=function(v){u(v),c(v)};return F(p.Fragment,null,o&&F("div",{onClick:yr,css:wr}),e(d))}var Fr={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Or=function(e){var o=e.name,i=e.onFocus;return F("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:Fr,value:"",onChange:function(){}})},Ir=Or;function st(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Dr(){return st(/^iPhone/i)}function mn(){return st(/^Mac/i)}function kr(){return st(/^iPad/i)||mn()&&navigator.maxTouchPoints>1}function Ar(){return Dr()||kr()}function Mr(){return mn()||Ar()}var Pr=function(e){return e.label},Vr=function(e){return e.label},Lr=function(e){return e.value},Tr=function(e){return!!e.isDisabled},Rr={clearIndicator:xi,container:ui,control:Oi,dropdownIndicator:vi,group:Ai,groupHeading:Pi,indicatorsContainer:pi,indicatorSeparator:Ci,input:Ri,loadingIndicator:Si,loadingMessage:oi,menu:Ko,menuList:ei,menuPortal:ai,multiValue:Hi,multiValueLabel:_i,multiValueRemove:zi,noOptionsMessage:ni,option:Xi,placeholder:Qi,singleValue:tr,valueContainer:ci},$r={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Br=4,gn=4,jr=38,Nr=gn*2,Hr={baseUnit:gn,controlHeight:jr,menuGutter:Nr},ze={borderRadius:Br,colors:$r,spacing:Hr},_r={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:xt(),captureMenuScroll:!xt(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:gr(),formatGroupLabel:Pr,getOptionLabel:Vr,getOptionValue:Lr,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Tr,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!No(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var o=e.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Mt(n,e,o,i){var t=xn(n,e,o),a=En(n,e,o),s=bn(n,e),l=Ve(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:s,value:l,index:i}}function Oe(n,e){return n.options.map(function(o,i){if("options"in o){var t=o.options.map(function(s,l){return Mt(n,s,e,l)}).filter(function(s){return Vt(n,s)});return t.length>0?{type:"group",data:o,options:t,index:i}:void 0}var a=Mt(n,o,e,i);return Vt(n,a)?a:void 0}).filter(zo)}function vn(n){return n.reduce(function(e,o){return o.type==="group"?e.push.apply(e,tt(o.options.map(function(i){return i.data}))):e.push(o.data),e},[])}function Pt(n,e){return n.reduce(function(o,i){return i.type==="group"?o.push.apply(o,tt(i.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(i.index,"-").concat(t.index)}}))):o.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),o},[])}function zr(n,e){return vn(Oe(n,e))}function Vt(n,e){var o=n.inputValue,i=o===void 0?"":o,t=e.data,a=e.isSelected,s=e.label,l=e.value;return(!yn(n)||!a)&&Cn(n,{label:s,value:l,data:t},i)}function Ur(n,e){var o=n.focusedValue,i=n.selectValue,t=i.indexOf(o);if(t>-1){var a=e.indexOf(o);if(a>-1)return o;if(t<e.length)return e[t]}return null}function Wr(n,e){var o=n.focusedOption;return o&&e.indexOf(o)>-1?o:e[0]}var Ue=function(e,o){var i,t=(i=e.find(function(a){return a.data===o}))===null||i===void 0?void 0:i.id;return t||null},bn=function(e,o){return e.getOptionLabel(o)},Ve=function(e,o){return e.getOptionValue(o)};function xn(n,e,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,o):!1}function En(n,e,o){if(o.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,o);var i=Ve(n,e);return o.some(function(t){return Ve(n,t)===i})}function Cn(n,e,o){return n.filterOption?n.filterOption(e,o):!0}var yn=function(e){var o=e.hideSelectedOptions,i=e.isMulti;return o===void 0?i:o},Yr=1,wn=function(n){Nn(o,n);var e=Hn(o);function o(i){var t;if(_n(this,o),t=e.call(this,i),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Mr(),t.controlRef=null,t.getControlRef=function(r){t.controlRef=r},t.focusedOptionRef=null,t.getFocusedOptionRef=function(r){t.focusedOptionRef=r},t.menuListRef=null,t.getMenuListRef=function(r){t.menuListRef=r},t.inputRef=null,t.getInputRef=function(r){t.inputRef=r},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(r,u){var c=t.props,d=c.onChange,f=c.name;u.name=f,t.ariaOnChange(r,u),d(r,u)},t.setValue=function(r,u,c){var d=t.props,f=d.closeMenuOnSelect,v=d.isMulti,b=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:b}),f&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(r,{action:u,option:c})},t.selectOption=function(r){var u=t.props,c=u.blurInputOnSelect,d=u.isMulti,f=u.name,v=t.state.selectValue,b=d&&t.isOptionSelected(r,v),g=t.isOptionDisabled(r,v);if(b){var h=t.getOptionValue(r);t.setValue(v.filter(function(m){return t.getOptionValue(m)!==h}),"deselect-option",r)}else if(!g)d?t.setValue([].concat(tt(v),[r]),"select-option",r):t.setValue(r,"select-option");else{t.ariaOnChange(r,{action:"select-option",option:r,name:f});return}c&&t.blurInput()},t.removeValue=function(r){var u=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(r),f=c.filter(function(b){return t.getOptionValue(b)!==d}),v=Se(u,f,f[0]||null);t.onChange(v,{action:"remove-value",removedValue:r}),t.focusInput()},t.clearValue=function(){var r=t.state.selectValue;t.onChange(Se(t.props.isMulti,[],null),{action:"clear",removedValues:r})},t.popValue=function(){var r=t.props.isMulti,u=t.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),f=Se(r,d,d[0]||null);t.onChange(f,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(r){return Ue(t.state.focusableOptionsWithIds,r)},t.getFocusableOptionsWithIds=function(){return Pt(Oe(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return To.apply(void 0,[t.props.classNamePrefix].concat(u))},t.getOptionLabel=function(r){return bn(t.props,r)},t.getOptionValue=function(r){return Ve(t.props,r)},t.getStyles=function(r,u){var c=t.props.unstyled,d=Rr[r](u,c);d.boxSizing="border-box";var f=t.props.styles[r];return f?f(d,u):d},t.getClassNames=function(r,u){var c,d;return(c=(d=t.props.classNames)[r])===null||c===void 0?void 0:c.call(d,u)},t.getElementId=function(r){return"".concat(t.state.instancePrefix,"-").concat(r)},t.getComponents=function(){return ir(t.props)},t.buildCategorizedOptions=function(){return Oe(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return vn(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(r,u){t.setState({ariaSelection:O({value:r},u)})},t.onMenuMouseDown=function(r){r.button===0&&(r.stopPropagation(),r.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(r){t.blockOptionHover=!1},t.onControlMouseDown=function(r){if(!r.defaultPrevented){var u=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&t.onMenuClose():u&&t.openMenu("first"):(u&&(t.openAfterFocus=!0),t.focusInput()),r.target.tagName!=="INPUT"&&r.target.tagName!=="TEXTAREA"&&r.preventDefault()}},t.onDropdownIndicatorMouseDown=function(r){if(!(r&&r.type==="mousedown"&&r.button!==0)&&!t.props.isDisabled){var u=t.props,c=u.isMulti,d=u.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),r.preventDefault()}},t.onClearIndicatorMouseDown=function(r){r&&r.type==="mousedown"&&r.button!==0||(t.clearValue(),r.preventDefault(),t.openAfterFocus=!1,r.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(r){typeof t.props.closeMenuOnScroll=="boolean"?r.target instanceof HTMLElement&&Re(r.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(r)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(r){var u=r.touches,c=u&&u.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(r){var u=r.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),f=Math.abs(c.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||f>v}},t.onTouchEnd=function(r){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(r.target)&&t.menuListRef&&!t.menuListRef.contains(r.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(r){t.userIsDragging||t.onControlMouseDown(r)},t.onClearIndicatorTouchEnd=function(r){t.userIsDragging||t.onClearIndicatorMouseDown(r)},t.onDropdownIndicatorTouchEnd=function(r){t.userIsDragging||t.onDropdownIndicatorMouseDown(r)},t.handleInputChange=function(r){var u=t.props.inputValue,c=r.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:u}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(r){t.props.onFocus&&t.props.onFocus(r),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(r){var u=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(r),t.onInputChange("",{action:"input-blur",prevInputValue:u}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(r){if(!(t.blockOptionHover||t.state.focusedOption===r)){var u=t.getFocusableOptions(),c=u.indexOf(r);t.setState({focusedOption:r,focusedOptionId:c>-1?t.getFocusedOptionId(r):null})}},t.shouldHideSelectedOptions=function(){return yn(t.props)},t.onValueInputFocus=function(r){r.preventDefault(),r.stopPropagation(),t.focus()},t.onKeyDown=function(r){var u=t.props,c=u.isMulti,d=u.backspaceRemovesValue,f=u.escapeClearsValue,v=u.inputValue,b=u.isClearable,g=u.isDisabled,h=u.menuIsOpen,m=u.onKeyDown,y=u.tabSelectsValue,x=u.openMenuOnFocus,w=t.state,I=w.focusedOption,M=w.focusedValue,D=w.selectValue;if(!g&&!(typeof m=="function"&&(m(r),r.defaultPrevented))){switch(t.blockOptionHover=!0,r.key){case"ArrowLeft":if(!c||v)return;t.focusValue("previous");break;case"ArrowRight":if(!c||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(M)t.removeValue(M);else{if(!d)return;c?t.popValue():b&&t.clearValue()}break;case"Tab":if(t.isComposing||r.shiftKey||!h||!y||!I||x&&t.isOptionSelected(I,D))return;t.selectOption(I);break;case"Enter":if(r.keyCode===229)break;if(h){if(!I||t.isComposing)return;t.selectOption(I);break}return;case"Escape":h?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):b&&f&&t.clearValue();break;case" ":if(v)return;if(!h){t.openMenu("first");break}if(!I)return;t.selectOption(I);break;case"ArrowUp":h?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":h?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!h)return;t.focusOption("pageup");break;case"PageDown":if(!h)return;t.focusOption("pagedown");break;case"Home":if(!h)return;t.focusOption("first");break;case"End":if(!h)return;t.focusOption("last");break;default:return}r.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Yr),t.state.selectValue=vt(i.value),i.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),s=t.buildFocusableOptions(),l=s.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=s[l],t.state.focusedOptionId=Ue(a,s[l])}return t}return zn(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&bt(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,s=a.isDisabled,l=a.menuIsOpen,r=this.state.isFocused;(r&&!s&&t.isDisabled||r&&l&&!t.menuIsOpen)&&this.focusInput(),r&&s&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!r&&!s&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(bt(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,s=this.state,l=s.selectValue,r=s.isFocused,u=this.buildFocusableOptions(),c=t==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(r&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,s=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var r=s.indexOf(l);l||(r=-1);var u=s.length-1,c=-1;if(s.length){switch(t){case"previous":r===0?c=0:r===-1?c=u:c=r-1;break;case"next":r>-1&&r<u&&(c=r+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var r=0,u=l.indexOf(s);s||(u=-1),t==="up"?r=u>0?u-1:l.length-1:t==="down"?r=(u+1)%l.length:t==="pageup"?(r=u-a,r<0&&(r=0)):t==="pagedown"?(r=u+a,r>l.length-1&&(r=l.length-1)):t==="last"&&(r=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[r],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[r])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ze):O(O({},ze),this.props.theme):ze}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,s=this.getStyles,l=this.getClassNames,r=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,v=d.isRtl,b=d.options,g=this.hasValue();return{clearValue:t,cx:a,getStyles:s,getClassNames:l,getValue:r,hasValue:g,isMulti:f,isRtl:v,options:b,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,s=t.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(t,a){return xn(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return En(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Cn(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:s,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,s=t.isSearchable,l=t.inputId,r=t.inputValue,u=t.tabIndex,c=t.form,d=t.menuIsOpen,f=t.required,v=this.getComponents(),b=v.Input,g=this.state,h=g.inputIsHidden,m=g.ariaSelection,y=this.commonProps,x=l||this.getElementId("input"),w=O(O(O({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(m==null?void 0:m.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?p.createElement(b,A({},y,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:x,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:r},w)):p.createElement(br,A({id:x,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Me,onFocus:this.onInputFocus,disabled:a,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),s=a.MultiValue,l=a.MultiValueContainer,r=a.MultiValueLabel,u=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,f=this.commonProps,v=this.props,b=v.controlShouldRenderValue,g=v.isDisabled,h=v.isMulti,m=v.inputValue,y=v.placeholder,x=this.state,w=x.selectValue,I=x.focusedValue,M=x.isFocused;if(!this.hasValue()||!b)return m?null:p.createElement(d,A({},f,{key:"placeholder",isDisabled:g,isFocused:M,innerProps:{id:this.getElementId("placeholder")}}),y);if(h)return w.map(function(C,k){var P=C===I,j="".concat(t.getOptionLabel(C),"-").concat(t.getOptionValue(C));return p.createElement(s,A({},f,{components:{Container:l,Label:r,Remove:u},isFocused:P,isDisabled:g,key:j,index:k,removeProps:{onClick:function(){return t.removeValue(C)},onTouchEnd:function(){return t.removeValue(C)},onMouseDown:function(X){X.preventDefault()}},data:C}),t.formatOptionLabel(C,"value"))});if(m)return null;var D=w[0];return p.createElement(c,A({},f,{data:D,isDisabled:g}),this.formatOptionLabel(D,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||r||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,A({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,s=this.commonProps,l=this.props,r=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!a||!u)return null;var d={"aria-hidden":"true"};return p.createElement(a,A({},s,{innerProps:d,isDisabled:r,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,s=t.IndicatorSeparator;if(!a||!s)return null;var l=this.commonProps,r=this.props.isDisabled,u=this.state.isFocused;return p.createElement(s,A({},l,{isDisabled:r,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var s=this.commonProps,l=this.props.isDisabled,r=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,A({},s,{innerProps:u,isDisabled:l,isFocused:r}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),s=a.Group,l=a.GroupHeading,r=a.Menu,u=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,f=a.NoOptionsMessage,v=a.Option,b=this.commonProps,g=this.state.focusedOption,h=this.props,m=h.captureMenuScroll,y=h.inputValue,x=h.isLoading,w=h.loadingMessage,I=h.minMenuHeight,M=h.maxMenuHeight,D=h.menuIsOpen,C=h.menuPlacement,k=h.menuPosition,P=h.menuPortalTarget,j=h.menuShouldBlockScroll,$=h.menuShouldScrollIntoView,X=h.noOptionsMessage,G=h.onMenuScrollToTop,B=h.onMenuScrollToBottom;if(!D)return null;var N=function(R,z){var Y=R.type,q=R.data,J=R.isDisabled,ne=R.isSelected,ve=R.label,Dn=R.value,lt=g===q,ct=J?void 0:function(){return t.onOptionHover(q)},kn=J?void 0:function(){return t.selectOption(q)},dt="".concat(t.getElementId("option"),"-").concat(z),An={id:dt,onClick:kn,onMouseMove:ct,onMouseOver:ct,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:ne};return p.createElement(v,A({},b,{innerProps:An,data:q,isDisabled:J,isSelected:ne,key:dt,label:ve,type:Y,value:Dn,isFocused:lt,innerRef:lt?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(R.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function(V){if(V.type==="group"){var R=V.data,z=V.options,Y=V.index,q="".concat(t.getElementId("group"),"-").concat(Y),J="".concat(q,"-heading");return p.createElement(s,A({},b,{key:q,data:R,options:z,Heading:l,headingProps:{id:J,data:V.data},label:t.formatGroupLabel(V.data)}),V.options.map(function(ne){return N(ne,"".concat(Y,"-").concat(ne.index))}))}else if(V.type==="option")return N(V,"".concat(V.index))});else if(x){var _=w({inputValue:y});if(_===null)return null;U=p.createElement(d,b,_)}else{var K=X({inputValue:y});if(K===null)return null;U=p.createElement(f,b,K)}var Z={minMenuHeight:I,maxMenuHeight:M,menuPlacement:C,menuPosition:k,menuShouldScrollIntoView:$},te=p.createElement(Zo,A({},b,Z),function(V){var R=V.ref,z=V.placerProps,Y=z.placement,q=z.maxHeight;return p.createElement(r,A({},b,Z,{innerRef:R,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:x,placement:Y}),p.createElement(Sr,{captureEnabled:m,onTopArrive:G,onBottomArrive:B,lockEnabled:j},function(J){return p.createElement(u,A({},b,{innerRef:function(ve){t.getMenuListRef(ve),J(ve)},innerProps:{role:"listbox","aria-multiselectable":b.isMulti,id:t.getElementId("listbox")},isLoading:x,maxHeight:q,focusedOption:g}),U)}))});return P||k==="fixed"?p.createElement(c,A({},b,{appendTo:P,controlElement:this.controlRef,menuPlacement:C,menuPosition:k}),te):te}},{key:"renderFormField",value:function(){var t=this,a=this.props,s=a.delimiter,l=a.isDisabled,r=a.isMulti,u=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Ir,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(r)if(s){var f=d.map(function(g){return t.getOptionValue(g)}).join(s);return p.createElement("input",{name:u,type:"hidden",value:f})}else{var v=d.length>0?d.map(function(g,h){return p.createElement("input",{key:"i-".concat(h),name:u,type:"hidden",value:t.getOptionValue(g)})}):p.createElement("input",{name:u,type:"hidden",value:""});return p.createElement("div",null,v)}else{var b=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:u,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,s=a.ariaSelection,l=a.focusedOption,r=a.focusedValue,u=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(pr,A({},t,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:r,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,s=t.IndicatorsContainer,l=t.SelectContainer,r=t.ValueContainer,u=this.props,c=u.className,d=u.id,f=u.isDisabled,v=u.menuIsOpen,b=this.state.isFocused,g=this.commonProps=this.getCommonProps();return p.createElement(l,A({},g,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:b}),this.renderLiveRegion(),p.createElement(a,A({},g,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:b,menuIsOpen:v}),p.createElement(r,A({},g,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(s,A({},g,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var s=a.prevProps,l=a.clearFocusValueOnUpdate,r=a.inputIsHiddenAfterUpdate,u=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,f=a.instancePrefix,v=t.options,b=t.value,g=t.menuIsOpen,h=t.inputValue,m=t.isMulti,y=vt(b),x={};if(s&&(b!==s.value||v!==s.options||g!==s.menuIsOpen||h!==s.inputValue)){var w=g?zr(t,y):[],I=g?Pt(Oe(t,y),"".concat(f,"-option")):[],M=l?Ur(a,y):null,D=Wr(a,w),C=Ue(I,D);x={selectValue:y,focusedOption:D,focusedOptionId:C,focusableOptionsWithIds:I,focusedValue:M,clearFocusValueOnUpdate:!1}}var k=r!=null&&t!==s?{inputIsHidden:r,inputIsHiddenAfterUpdate:void 0}:{},P=u,j=c&&d;return c&&!j&&(P={value:Se(m,y,y[0]||null),options:y,action:"initial-input-focus"},j=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(P=null),O(O(O({},x),k),{},{prevProps:t,ariaSelection:P,prevWasFocused:j})}}]),o}(p.Component);wn.defaultProps=_r;var qr=p.forwardRef(function(n,e){var o=go(n);return p.createElement(wn,A({ref:e},o))}),Sn=qr;const Fn=n=>p.createElement("svg",{width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M1.5 1.75L6 6.25L10.5 1.75",stroke:"#EFEDE8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Lt=[{value:"Alcoholic drinks",label:"Alcoholic drinks"},{value:"Berries",label:"Berries"},{value:"Cereals",label:"Cereals"},{value:"Dairy",label:"Dairy"},{value:"Dried fruits",label:"Dried fruits"},{value:"Eggs",label:"Eggs"},{value:"Fish",label:"Fish"},{value:"Flour",label:"Flour"},{value:"Meat",label:"Meat"}],Gr=n=>E.jsx(at.DropdownIndicator,{...n,children:E.jsx(Fn,{})}),Xr={container:n=>({...n,width:"146px",height:"46px","@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),control:(n,e)=>({...n,width:"146px",height:"46px",borderRadius:"12px",border:`1px solid ${S.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${S.orangeColor}`:0,transition:`all ${S.animation}`,"&:hover":{borderColor:`${S.orangeColor}`},"@media (max-width: 374px)":{width:"120px"},"@media (min-width: 768px)":{width:"192px"}}),dropdownIndicator:(n,e)=>({...n,transition:`all ${S.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),indicatorSeparator:n=>({...n,display:"none"}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${S.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${S.successColor}`:`${S.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${S.orangeColor}`,color:`${S.whiteColor}`}}),menuList:n=>({...n,marginRight:"7px","::-webkit-scrollbar":{width:"6px",height:"0"},"::-webkit-scrollbar-track":{background:"transparent"},"::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.10)",width:"6px",height:"147px"},"::-webkit-scrollbar-thumb:hover":{background:"#555"}})},Kr=({dataFunc:n,currentValue:e})=>E.jsx(Sn,{onChange:n,options:Lt,components:{DropdownIndicator:Gr},styles:Xr,value:e===""?{value:"Categories",label:"Categories"}:Lt.find(o=>o.value===e)}),Tt=[{value:"All",label:"All"},{value:"true",label:"Recommended"},{value:"false",label:"Not recommended"}],Zr=n=>E.jsx(at.DropdownIndicator,{...n,children:E.jsx(Fn,{})}),Qr={container:n=>({...n,width:"173px",height:"46px","@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),control:(n,e)=>({...n,width:"173px",height:"46px",borderRadius:"12px",border:`1px solid ${S.greyTextColor}`,backgroundColor:"inherit",cursor:"pointer",outline:"none !important",boxShadow:e.isFocused?`0 0 0 2px ${S.orangeColor}`:0,transition:`all ${S.animation}`,"&:hover":{borderColor:`${S.orangeColor}`},"@media (min-width: 768px)":{width:"204px"},"@media (max-width: 374px)":{width:"160px"},"@media (max-width: 334px)":{width:"140px"}}),indicatorSeparator:n=>({...n,display:"none"}),dropdownIndicator:(n,e)=>({...n,transition:`all ${S.animation}`,transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),menu:n=>({...n,borderRadius:"12px",background:"#1C1C1C"}),singleValue:n=>({...n,fontSize:"14px",color:`${S.whiteColor}`}),option:(n,e)=>({...n,cursor:"pointer",borderRadius:"12px",backgroundColor:"inherit",color:e.isSelected?`${S.successColor}`:`${S.whiteColor}`,fontSize:"16px","&:hover":{backgroundColor:`${S.orangeColor}`,color:`${S.whiteColor}`}})},Jr=({dataFunc:n,currentValue:e})=>E.jsx(Sn,{onChange:n,options:Tt,components:{DropdownIndicator:Zr},styles:Qr,value:Tt.find(o=>o.value===e),defaultValue:e}),On=n=>p.createElement("svg",{width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M7.5 14 14 7.5m0 0L7.5 1M14 7.5H1",stroke:"#E6533C",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),ea=n=>p.createElement("svg",{width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("circle",{cx:12,cy:12,r:12,fill:"#EFA082"}),p.createElement("path",{d:"M18.823 8.725a.593.593 0 0 0-.833-.074l-1.641 1.378-.755-1.87a.58.58 0 0 0-.114-.18 1.606 1.606 0 0 0-.791-.809 1.628 1.628 0 0 0-.491-.13c-.037-.02-.07-.045-.111-.058l-2.888-.805a.594.594 0 0 0-.458.063.578.578 0 0 0-.36.336L9.294 9.372a.594.594 0 0 0 .338.767.593.593 0 0 0 .766-.34l.918-2.36 1.315.365c-.032.052-.066.101-.092.156l-1.687 3.655c-.024.054-.037.108-.054.164l-2.05 3.435-3.428 1.147a.876.876 0 0 0 1.04 1.41l3.51-1.209a.841.841 0 0 0 .243-.29c.045-.047.095-.084.129-.142l1.221-2.048 2.169 1.848-2.32 2.614a.875.875 0 1 0 1.31 1.16l2.896-3.261c.09-.101.144-.217.18-.338.022-.066.022-.135.027-.203 0-.035.013-.066.01-.098a.858.858 0 0 0-.3-.637l-1.995-1.701c.143-.137.266-.3.354-.492l1.293-2.8.414 1.104c.017.098.05.194.12.274a.57.57 0 0 0 .226.16l.03.007a.564.564 0 0 0 .367.018h.003c.018-.005.036-.002.054-.01a.585.585 0 0 0 .233-.17L18.89 9.56c.25-.21.145-.583-.066-.834ZM15.846 7.301a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3Z",fill:"#EFEDE8"})),ut=W.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,ta=W.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${S.animation};
  @media screen and (min-width: 768px) {
    ${ut}:hover & {
      color: ${S.successColor};
      transform: scale(1.25);
    }
  }
`,na=Qe`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,oa=W(On)`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    ${ut}:hover & {
      animation: ${na} 1000ms linear infinite;
      > path {
        stroke: ${S.successColor};
      }
    }
  }
`,ia=W(ea)`
  width: 24px;
  height: 24px;
`,In=W.li`
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
`,ra=W.span`
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
`,aa=W.div`
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

`,Rt=Qe`
  0%   {transform: rotate(0deg)}
        100%   {transform: rotate(360deg)}
`,$t=Qe`
0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
          25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
          50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
          75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
          100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`,sa=W.div`
         width: 100px;
        height: 100px;
                border-radius: 50%;
        position: relative;
        left: 50%;
        bottom: 80px;
        transform: translateX(80%);
        animation: ${Rt} 1s linear infinite;
    
      &::before,
      &::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #FFF;
        animation: ${$t} 2s linear infinite ;
      }
      &::after{
        border-color: #FF3D00;
        animation: ${$t} 2s linear infinite , ${Rt} 0.5s linear infinite reverse;
        inset: 6px;
      }
`,ua=W.ul`
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
`,ce={bloodType:"1",page:1},la=()=>{const[n]=jt(),[e,o]=p.useState(!1),[i,t]=p.useState(null),{products:a,isLoading:s,isSuccessPopUpShown:l,totalPages:r}=Je(w=>w.products),u=p.useRef(null),c=p.useRef(null),d=Ze(),[f,v]=p.useState(1);p.useEffect(()=>{l&&o(!1)},[l]),p.useEffect(()=>{qn(e)},[e]);const b=w=>{t(w),o(!0)},g=()=>{d(Vn(!1)),o(!1)},h=p.useMemo(()=>Object.fromEntries([...n]),[n]),{q:m,category:y,recommended:x}=h;return m?ce.q=m:delete ce.q,y&&(ce.cat=y.toLowerCase()),x&&x!=="All"?ce.rec=x:delete ce.rec,p.useEffect(()=>{v(1),u.current&&(u.current.scrollTop=0)},[x,m,y]),p.useEffect(()=>{if(f===r||f===r&&f>1&&r>1)return;const w=new IntersectionObserver(I=>{I[0].isIntersecting&&!s&&(v(f+1),u.current&&(u.current.scrollTop=u.current.scrollTop-200))},{threshold:.1});return c.current&&w.observe(c.current),()=>{const I=c.current;c.current&&w.unobserve(I)}},[s]),p.useEffect(()=>{f===r&&f!==1&&Xt("info","You have reached the end of search results"),!(f>r)&&d(Pn({queryParams:ce,page:f}))},[x,m,y,d,f,r]),s&&a===null?E.jsx(aa,{className:"loader-1"}):a&&a.length>0?E.jsxs(E.Fragment,{children:[E.jsxs(ua,{ref:u,children:[a.map(w=>s?E.jsx(In,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:E.jsx("div",{className:"loader"})},w._id):E.jsx(da,{handleOpenModal:b,data:w},w._id)),E.jsx("div",{style:{width:"100%",height:"1px"},children:s&&E.jsx(sa,{})}),E.jsx("div",{ref:c,style:{opacity:0},children:"refdiv"})]}),E.jsx(lo,{showModal:e,closeModal:g,data:i}),E.jsx(Ea,{})]}):E.jsx(fa,{})},ca="1",da=({data:n,handleOpenModal:e})=>{const{calories:o,category:i,title:t,weight:a,groupBloodNotAllowed:s,_id:l}=n,r=s[ca];return E.jsxs(In,{children:[E.jsx("span",{className:"diet-span",children:"diet"}),E.jsxs("div",{className:"recommended-addbtn-div",children:[E.jsx(ra,{className:"recommended-span",$color:r,children:r?"Recommended":"Not recommended"}),E.jsxs(ut,{onClick:()=>e({calories:o,title:t,weight:a,_id:l}),type:"button",className:"add-btn",children:[E.jsx(ta,{className:"add-btn-span",children:"Add"}),E.jsx(oa,{})]})]}),E.jsxs("div",{className:"product-info-div",children:[E.jsxs("div",{className:"title-svg-div",children:[E.jsx(ia,{}),E.jsxs("p",{className:"product-info-div-title",children:[" ",t]})]}),E.jsxs("div",{className:"detailed-info-div",children:[E.jsxs("p",{className:"detailed-name",children:["Calories: ",E.jsx("span",{className:"detailed-data",children:o})]}),E.jsxs("p",{className:"detailed-name",children:["Category: ",E.jsx("span",{className:"detailed-data",children:i})]}),E.jsxs("p",{className:"detailed-name",children:["Weight: ",E.jsx("span",{className:"detailed-data",children:a})]})]})]})]})},pa=ue.div`
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
`,fa=()=>E.jsxs(pa,{children:[E.jsxs("p",{className:"above-text",children:[E.jsx("span",{className:"above-text-span",children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),E.jsx("p",{className:"below-text",children:"Try changing the search parameters."})]}),ha="/power-pulse-fs/assets/bgFood-46dd5bc9.png",ma="/power-pulse-fs/assets/bgFood2x-515a5477.png",fe=W(Ln)`
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
`,ga=W(On)`
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
`,va=W(et)`
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
`,ba=W.div`
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

  
`,xa=W.div`
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
   background-image: url(${ha});
    background-repeat: no-repeat;
    background-size: 123px 97px;
    background-position: top 48px right 106px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${ma});
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
`,Ea=()=>{const{isSuccessPopUpShown:n}=Je(i=>i.products),e=Ze();p.useEffect(()=>{if(!n)return;const i=t=>{t.code==="Escape"&&e(be(!1))};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[n,e]);const o=i=>{i.target===i.currentTarget&&e(be(!1))};return n&&E.jsx(ba,{onClick:o,children:E.jsxs(xa,{children:[E.jsx(va,{onClick:()=>e(be(!1))}),E.jsx("p",{className:"title",children:"Well done"}),E.jsxs("p",{className:"calories",children:["Calories: ",E.jsx("span",{className:"calories-span",children:"96"})]}),E.jsx("button",{onClick:()=>e(be(!1)),className:"button",type:"button",children:"Next product"}),E.jsxs(fe,{to:"/diary",children:["To the diary ",E.jsx(ga,{})]})]})})},Ca=n=>p.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},p.createElement("path",{d:"M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.createElement("path",{d:"M15.7508 15.75L12.4883 12.4875",stroke:"#EFEDE8",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ya=ue(Ca)`
  width: 18px;
  height: 18px;
`,wa=ue(et)`
  width: 20px;
  height: 20px;
`,Sa=ue.form`
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
`,Fa=()=>{const[n,e]=p.useState(!1),[o,i]=jt(),t=p.useMemo(()=>Object.fromEntries([...o]),[o]),{q:a,category:s,recommended:l}=t,r=Nt({initialValues:{search:a??"",category:s??"",recommended:l??"All"},onSubmit:c=>{const{search:d}=c;d&&i(f=>{const v=new URLSearchParams(f);return v.set("q",d),v})}}),u=c=>{e(!0),r.handleChange(c)};return E.jsxs(Sa,{onSubmit:r.handleSubmit,children:[E.jsxs("div",{className:"input-search-block",children:[E.jsx("input",{id:"search",name:"search",type:"text",onChange:u,value:r.values.search,placeholder:"Search"}),E.jsxs("div",{className:"svgs-search-block",children:[n&&E.jsx("button",{type:"button",onClick:()=>{e(!1),i(c=>{const d=new URLSearchParams(c);return d.delete("q"),d}),r.values.search=""},children:E.jsx(wa,{})}),E.jsx("button",{type:"submit",children:E.jsx(ya,{})})]})]}),E.jsxs("div",{className:"selects-block",children:[E.jsx(Kr,{name:"category",dataFunc:c=>{r.setFieldValue("category",c.value),i(d=>{const f=new URLSearchParams(d);return f.set("category",c.value),f})},currentValue:r.values.category}),E.jsx(Jr,{name:"recommended",currentValue:r.values.recommended,dataFunc:c=>{r.setFieldValue("recommended",c.value),i(d=>{const f=new URLSearchParams(d);return f.set("recommended",c.value),f})}})]}),E.jsx("p",{className:"filter-1440",children:"Filter"})]})},Oa="/power-pulse-fs/assets/sideView1x-5b62dba4.jpg",Ia="/power-pulse-fs/assets/sideView2x-dcbcfa1b.jpg",Da=ue.section`

@media screen and (min-width: 1440px) {
  height: 90vh;
 background: url(${Oa});
 background-repeat: no-repeat;
  background-size: 420px 716px;
    background-position: top 0px right 0px;
      @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
        background-image: url(${Ia});
    }
}
`,ka=ue.div`
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
`,Aa=ue.h1`
 color: #EFEDE8;
font-family: Roboto;
font-size: 24px;
font-weight: 700;
line-height: 1.17;

@media screen and (min-width: 768px) {
font-size: 32px;
line-height: 1.38;
}
`,Ra=()=>{const{addProductFalse:n}=Je(e=>e.products);return p.useEffect(()=>{n&&Xt("error","Enter correct data!")},[n]),E.jsx(Da,{children:E.jsxs(ka,{children:[E.jsxs("div",{className:"title-form-block",children:[E.jsx(Aa,{children:"Products"}),E.jsx(Fa,{})]}),E.jsx(la,{}),E.jsx(oo,{})]})})};export{Ra as default};
