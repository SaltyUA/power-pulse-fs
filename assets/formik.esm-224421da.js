import{g as At,a as d}from"./index-fe5b48f6.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";var $t=function(r){return jt(r)&&!Ot(r)};function jt(e){return!!e&&typeof e=="object"}function Ot(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Ct(e)}var It=typeof Symbol=="function"&&Symbol.for,wt=It?Symbol.for("react.element"):60103;function Ct(e){return e.$$typeof===wt}function Ft(e){return Array.isArray(e)?[]:{}}function de(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ne(Ft(e),e,r):e}function Mt(e,r,t){return e.concat(r).map(function(n){return de(n,t)})}function Rt(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=de(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=de(r[i],t):n[i]=ne(e[i],r[i],t)}),n}function ne(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||Mt,t.isMergeableObject=t.isMergeableObject||$t;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):Rt(e,r,t):de(r,t)}ne.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return ne(n,i,t)},{})};var we=ne,Pt=typeof global=="object"&&global&&global.Object===Object&&global;const Pr=Pt;var Lt=typeof self=="object"&&self&&self.Object===Object&&self,Dt=Pr||Lt||Function("return this")();const R=Dt;var xt=R.Symbol;const U=xt;var Lr=Object.prototype,Vt=Lr.hasOwnProperty,Ut=Lr.toString,re=U?U.toStringTag:void 0;function Nt(e){var r=Vt.call(e,re),t=e[re];try{e[re]=void 0;var n=!0}catch{}var i=Ut.call(e);return n&&(r?e[re]=t:delete e[re]),i}var Bt=Object.prototype,Gt=Bt.toString;function Ht(e){return Gt.call(e)}var zt="[object Null]",Kt="[object Undefined]",or=U?U.toStringTag:void 0;function W(e){return e==null?e===void 0?Kt:zt:or&&or in Object(e)?Nt(e):Ht(e)}function Dr(e,r){return function(t){return e(r(t))}}var Wt=Dr(Object.getPrototypeOf,Object);const De=Wt;function k(e){return e!=null&&typeof e=="object"}var kt="[object Object]",Yt=Function.prototype,qt=Object.prototype,xr=Yt.toString,Xt=qt.hasOwnProperty,Zt=xr.call(Object);function ur(e){if(!k(e)||W(e)!=kt)return!1;var r=De(e);if(r===null)return!0;var t=Xt.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&xr.call(t)==Zt}var cr=Array.isArray,sr=Object.keys,Jt=Object.prototype.hasOwnProperty,Qt=typeof Element<"u";function Ce(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=cr(e),n=cr(r),i,o,c;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Ce(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,S=r instanceof Date;if(p!=S)return!1;if(p&&S)return e.getTime()==r.getTime();var b=e instanceof RegExp,x=r instanceof RegExp;if(b!=x)return!1;if(b&&x)return e.toString()==r.toString();var I=sr(e);if(o=I.length,o!==sr(r).length)return!1;for(i=o;i--!==0;)if(!Jt.call(r,I[i]))return!1;if(Qt&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(c=I[i],!(c==="_owner"&&e.$$typeof)&&!Ce(e[c],r[c]))return!1;return!0}return e!==e&&r!==r}var en=function(r,t){try{return Ce(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const G=At(en);var rn=!0;function tn(e,r){if(!rn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function nn(){this.__data__=[],this.size=0}function Vr(e,r){return e===r||e!==e&&r!==r}function pe(e,r){for(var t=e.length;t--;)if(Vr(e[t][0],r))return t;return-1}var an=Array.prototype,on=an.splice;function un(e){var r=this.__data__,t=pe(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():on.call(r,t,1),--this.size,!0}function cn(e){var r=this.__data__,t=pe(r,e);return t<0?void 0:r[t][1]}function sn(e){return pe(this.__data__,e)>-1}function ln(e,r){var t=this.__data__,n=pe(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function D(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}D.prototype.clear=nn;D.prototype.delete=un;D.prototype.get=cn;D.prototype.has=sn;D.prototype.set=ln;function fn(){this.__data__=new D,this.size=0}function dn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function pn(e){return this.__data__.get(e)}function hn(e){return this.__data__.has(e)}function oe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var vn="[object AsyncFunction]",yn="[object Function]",gn="[object GeneratorFunction]",bn="[object Proxy]";function Ur(e){if(!oe(e))return!1;var r=W(e);return r==yn||r==gn||r==vn||r==bn}var Tn=R["__core-js_shared__"];const $e=Tn;var lr=function(){var e=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function mn(e){return!!lr&&lr in e}var Sn=Function.prototype,En=Sn.toString;function Y(e){if(e!=null){try{return En.call(e)}catch{}try{return e+""}catch{}}return""}var _n=/[\\^$.*+?()[\]{}|]/g,An=/^\[object .+?Constructor\]$/,$n=Function.prototype,jn=Object.prototype,On=$n.toString,In=jn.hasOwnProperty,wn=RegExp("^"+On.call(In).replace(_n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Cn(e){if(!oe(e)||mn(e))return!1;var r=Ur(e)?wn:An;return r.test(Y(e))}function Fn(e,r){return e==null?void 0:e[r]}function q(e,r){var t=Fn(e,r);return Cn(t)?t:void 0}var Mn=q(R,"Map");const ae=Mn;var Rn=q(Object,"create");const ie=Rn;function Pn(){this.__data__=ie?ie(null):{},this.size=0}function Ln(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Dn="__lodash_hash_undefined__",xn=Object.prototype,Vn=xn.hasOwnProperty;function Un(e){var r=this.__data__;if(ie){var t=r[e];return t===Dn?void 0:t}return Vn.call(r,e)?r[e]:void 0}var Nn=Object.prototype,Bn=Nn.hasOwnProperty;function Gn(e){var r=this.__data__;return ie?r[e]!==void 0:Bn.call(r,e)}var Hn="__lodash_hash_undefined__";function zn(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ie&&r===void 0?Hn:r,this}function K(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}K.prototype.clear=Pn;K.prototype.delete=Ln;K.prototype.get=Un;K.prototype.has=Gn;K.prototype.set=zn;function Kn(){this.size=0,this.__data__={hash:new K,map:new(ae||D),string:new K}}function Wn(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function he(e,r){var t=e.__data__;return Wn(r)?t[typeof r=="string"?"string":"hash"]:t.map}function kn(e){var r=he(this,e).delete(e);return this.size-=r?1:0,r}function Yn(e){return he(this,e).get(e)}function qn(e){return he(this,e).has(e)}function Xn(e,r){var t=he(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function N(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}N.prototype.clear=Kn;N.prototype.delete=kn;N.prototype.get=Yn;N.prototype.has=qn;N.prototype.set=Xn;var Zn=200;function Jn(e,r){var t=this.__data__;if(t instanceof D){var n=t.__data__;if(!ae||n.length<Zn-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new N(n)}return t.set(e,r),this.size=t.size,this}function Q(e){var r=this.__data__=new D(e);this.size=r.size}Q.prototype.clear=fn;Q.prototype.delete=dn;Q.prototype.get=pn;Q.prototype.has=hn;Q.prototype.set=Jn;function Qn(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var ea=function(){try{var e=q(Object,"defineProperty");return e({},"",{}),e}catch{}}();const fr=ea;function Nr(e,r,t){r=="__proto__"&&fr?fr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var ra=Object.prototype,ta=ra.hasOwnProperty;function Br(e,r,t){var n=e[r];(!(ta.call(e,r)&&Vr(n,t))||t===void 0&&!(r in e))&&Nr(e,r,t)}function ve(e,r,t,n){var i=!t;t||(t={});for(var o=-1,c=r.length;++o<c;){var p=r[o],S=n?n(t[p],e[p],p,t,e):void 0;S===void 0&&(S=e[p]),i?Nr(t,p,S):Br(t,p,S)}return t}function na(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var aa="[object Arguments]";function dr(e){return k(e)&&W(e)==aa}var Gr=Object.prototype,ia=Gr.hasOwnProperty,oa=Gr.propertyIsEnumerable,ua=dr(function(){return arguments}())?dr:function(e){return k(e)&&ia.call(e,"callee")&&!oa.call(e,"callee")};const ca=ua;var sa=Array.isArray;const ue=sa;function la(){return!1}var Hr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,pr=Hr&&typeof module=="object"&&module&&!module.nodeType&&module,fa=pr&&pr.exports===Hr,hr=fa?R.Buffer:void 0,da=hr?hr.isBuffer:void 0,pa=da||la;const zr=pa;var ha=9007199254740991,va=/^(?:0|[1-9]\d*)$/;function ya(e,r){var t=typeof e;return r=r??ha,!!r&&(t=="number"||t!="symbol"&&va.test(e))&&e>-1&&e%1==0&&e<r}var ga=9007199254740991;function Kr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ga}var ba="[object Arguments]",Ta="[object Array]",ma="[object Boolean]",Sa="[object Date]",Ea="[object Error]",_a="[object Function]",Aa="[object Map]",$a="[object Number]",ja="[object Object]",Oa="[object RegExp]",Ia="[object Set]",wa="[object String]",Ca="[object WeakMap]",Fa="[object ArrayBuffer]",Ma="[object DataView]",Ra="[object Float32Array]",Pa="[object Float64Array]",La="[object Int8Array]",Da="[object Int16Array]",xa="[object Int32Array]",Va="[object Uint8Array]",Ua="[object Uint8ClampedArray]",Na="[object Uint16Array]",Ba="[object Uint32Array]",m={};m[Ra]=m[Pa]=m[La]=m[Da]=m[xa]=m[Va]=m[Ua]=m[Na]=m[Ba]=!0;m[ba]=m[Ta]=m[Fa]=m[ma]=m[Ma]=m[Sa]=m[Ea]=m[_a]=m[Aa]=m[$a]=m[ja]=m[Oa]=m[Ia]=m[wa]=m[Ca]=!1;function Ga(e){return k(e)&&Kr(e.length)&&!!m[W(e)]}function xe(e){return function(r){return e(r)}}var Wr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,te=Wr&&typeof module=="object"&&module&&!module.nodeType&&module,Ha=te&&te.exports===Wr,je=Ha&&Pr.process,za=function(){try{var e=te&&te.require&&te.require("util").types;return e||je&&je.binding&&je.binding("util")}catch{}}();const J=za;var vr=J&&J.isTypedArray,Ka=vr?xe(vr):Ga;const Wa=Ka;var ka=Object.prototype,Ya=ka.hasOwnProperty;function kr(e,r){var t=ue(e),n=!t&&ca(e),i=!t&&!n&&zr(e),o=!t&&!n&&!i&&Wa(e),c=t||n||i||o,p=c?na(e.length,String):[],S=p.length;for(var b in e)(r||Ya.call(e,b))&&!(c&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||ya(b,S)))&&p.push(b);return p}var qa=Object.prototype;function Ve(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||qa;return e===t}var Xa=Dr(Object.keys,Object);const Za=Xa;var Ja=Object.prototype,Qa=Ja.hasOwnProperty;function ei(e){if(!Ve(e))return Za(e);var r=[];for(var t in Object(e))Qa.call(e,t)&&t!="constructor"&&r.push(t);return r}function Yr(e){return e!=null&&Kr(e.length)&&!Ur(e)}function Ue(e){return Yr(e)?kr(e):ei(e)}function ri(e,r){return e&&ve(r,Ue(r),e)}function ti(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var ni=Object.prototype,ai=ni.hasOwnProperty;function ii(e){if(!oe(e))return ti(e);var r=Ve(e),t=[];for(var n in e)n=="constructor"&&(r||!ai.call(e,n))||t.push(n);return t}function Ne(e){return Yr(e)?kr(e,!0):ii(e)}function oi(e,r){return e&&ve(r,Ne(r),e)}var qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yr=qr&&typeof module=="object"&&module&&!module.nodeType&&module,ui=yr&&yr.exports===qr,gr=ui?R.Buffer:void 0,br=gr?gr.allocUnsafe:void 0;function ci(e,r){if(r)return e.slice();var t=e.length,n=br?br(t):new e.constructor(t);return e.copy(n),n}function Xr(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function si(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var c=e[t];r(c,t,e)&&(o[i++]=c)}return o}function Zr(){return[]}var li=Object.prototype,fi=li.propertyIsEnumerable,Tr=Object.getOwnPropertySymbols,di=Tr?function(e){return e==null?[]:(e=Object(e),si(Tr(e),function(r){return fi.call(e,r)}))}:Zr;const Be=di;function pi(e,r){return ve(e,Be(e),r)}function Jr(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var hi=Object.getOwnPropertySymbols,vi=hi?function(e){for(var r=[];e;)Jr(r,Be(e)),e=De(e);return r}:Zr;const Qr=vi;function yi(e,r){return ve(e,Qr(e),r)}function et(e,r,t){var n=r(e);return ue(e)?n:Jr(n,t(e))}function gi(e){return et(e,Ue,Be)}function bi(e){return et(e,Ne,Qr)}var Ti=q(R,"DataView");const Fe=Ti;var mi=q(R,"Promise");const Me=mi;var Si=q(R,"Set");const Re=Si;var Ei=q(R,"WeakMap");const Pe=Ei;var mr="[object Map]",_i="[object Object]",Sr="[object Promise]",Er="[object Set]",_r="[object WeakMap]",Ar="[object DataView]",Ai=Y(Fe),$i=Y(ae),ji=Y(Me),Oi=Y(Re),Ii=Y(Pe),H=W;(Fe&&H(new Fe(new ArrayBuffer(1)))!=Ar||ae&&H(new ae)!=mr||Me&&H(Me.resolve())!=Sr||Re&&H(new Re)!=Er||Pe&&H(new Pe)!=_r)&&(H=function(e){var r=W(e),t=r==_i?e.constructor:void 0,n=t?Y(t):"";if(n)switch(n){case Ai:return Ar;case $i:return mr;case ji:return Sr;case Oi:return Er;case Ii:return _r}return r});const Ge=H;var wi=Object.prototype,Ci=wi.hasOwnProperty;function Fi(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Ci.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Mi=R.Uint8Array;const $r=Mi;function He(e){var r=new e.constructor(e.byteLength);return new $r(r).set(new $r(e)),r}function Ri(e,r){var t=r?He(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Pi=/\w*$/;function Li(e){var r=new e.constructor(e.source,Pi.exec(e));return r.lastIndex=e.lastIndex,r}var jr=U?U.prototype:void 0,Or=jr?jr.valueOf:void 0;function Di(e){return Or?Object(Or.call(e)):{}}function xi(e,r){var t=r?He(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Vi="[object Boolean]",Ui="[object Date]",Ni="[object Map]",Bi="[object Number]",Gi="[object RegExp]",Hi="[object Set]",zi="[object String]",Ki="[object Symbol]",Wi="[object ArrayBuffer]",ki="[object DataView]",Yi="[object Float32Array]",qi="[object Float64Array]",Xi="[object Int8Array]",Zi="[object Int16Array]",Ji="[object Int32Array]",Qi="[object Uint8Array]",eo="[object Uint8ClampedArray]",ro="[object Uint16Array]",to="[object Uint32Array]";function no(e,r,t){var n=e.constructor;switch(r){case Wi:return He(e);case Vi:case Ui:return new n(+e);case ki:return Ri(e,t);case Yi:case qi:case Xi:case Zi:case Ji:case Qi:case eo:case ro:case to:return xi(e,t);case Ni:return new n;case Bi:case zi:return new n(e);case Gi:return Li(e);case Hi:return new n;case Ki:return Di(e)}}var Ir=Object.create,ao=function(){function e(){}return function(r){if(!oe(r))return{};if(Ir)return Ir(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const io=ao;function oo(e){return typeof e.constructor=="function"&&!Ve(e)?io(De(e)):{}}var uo="[object Map]";function co(e){return k(e)&&Ge(e)==uo}var wr=J&&J.isMap,so=wr?xe(wr):co;const lo=so;var fo="[object Set]";function po(e){return k(e)&&Ge(e)==fo}var Cr=J&&J.isSet,ho=Cr?xe(Cr):po;const vo=ho;var yo=1,go=2,bo=4,rt="[object Arguments]",To="[object Array]",mo="[object Boolean]",So="[object Date]",Eo="[object Error]",tt="[object Function]",_o="[object GeneratorFunction]",Ao="[object Map]",$o="[object Number]",nt="[object Object]",jo="[object RegExp]",Oo="[object Set]",Io="[object String]",wo="[object Symbol]",Co="[object WeakMap]",Fo="[object ArrayBuffer]",Mo="[object DataView]",Ro="[object Float32Array]",Po="[object Float64Array]",Lo="[object Int8Array]",Do="[object Int16Array]",xo="[object Int32Array]",Vo="[object Uint8Array]",Uo="[object Uint8ClampedArray]",No="[object Uint16Array]",Bo="[object Uint32Array]",T={};T[rt]=T[To]=T[Fo]=T[Mo]=T[mo]=T[So]=T[Ro]=T[Po]=T[Lo]=T[Do]=T[xo]=T[Ao]=T[$o]=T[nt]=T[jo]=T[Oo]=T[Io]=T[wo]=T[Vo]=T[Uo]=T[No]=T[Bo]=!0;T[Eo]=T[tt]=T[Co]=!1;function fe(e,r,t,n,i,o){var c,p=r&yo,S=r&go,b=r&bo;if(t&&(c=i?t(e,n,i,o):t(e)),c!==void 0)return c;if(!oe(e))return e;var x=ue(e);if(x){if(c=Fi(e),!p)return Xr(e,c)}else{var I=Ge(e),f=I==tt||I==_o;if(zr(e))return ci(e,p);if(I==nt||I==rt||f&&!i){if(c=S||f?{}:oo(e),!p)return S?yi(e,oi(c,e)):pi(e,ri(c,e))}else{if(!T[I])return i?e:{};c=no(e,I,p)}}o||(o=new Q);var j=o.get(e);if(j)return j;o.set(e,c),vo(e)?e.forEach(function($){c.add(fe($,r,t,$,e,o))}):lo(e)&&e.forEach(function($,E){c.set(E,fe($,r,t,E,e,o))});var P=b?S?bi:gi:S?Ne:Ue,M=x?void 0:P(e);return Qn(M||e,function($,E){M&&(E=$,$=e[E]),Br(c,E,fe($,r,t,E,e,o))}),c}var Go=4;function Fr(e){return fe(e,Go)}function at(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var Ho="[object Symbol]";function ze(e){return typeof e=="symbol"||k(e)&&W(e)==Ho}var zo="Expected a function";function Ke(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(zo);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var c=e.apply(this,n);return t.cache=o.set(i,c)||o,c};return t.cache=new(Ke.Cache||N),t}Ke.Cache=N;var Ko=500;function Wo(e){var r=Ke(e,function(n){return t.size===Ko&&t.clear(),n}),t=r.cache;return r}var ko=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yo=/\\(\\)?/g,qo=Wo(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(ko,function(t,n,i,o){r.push(i?o.replace(Yo,"$1"):n||t)}),r});const Xo=qo;var Zo=1/0;function Jo(e){if(typeof e=="string"||ze(e))return e;var r=e+"";return r=="0"&&1/e==-Zo?"-0":r}var Qo=1/0,Mr=U?U.prototype:void 0,Rr=Mr?Mr.toString:void 0;function it(e){if(typeof e=="string")return e;if(ue(e))return at(e,it)+"";if(ze(e))return Rr?Rr.call(e):"";var r=e+"";return r=="0"&&1/e==-Qo?"-0":r}function eu(e){return e==null?"":it(e)}function ot(e){return ue(e)?at(e,Jo):ze(e)?[e]:Xr(Xo(eu(e)))}function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},A.apply(this,arguments)}function ut(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var ye=d.createContext(void 0);ye.displayName="FormikContext";ye.Provider;ye.Consumer;function ru(){var e=d.useContext(ye);return e||tn(!1),e}var F=function(r){return typeof r=="function"},ge=function(r){return r!==null&&typeof r=="object"},tu=function(r){return String(Math.floor(Number(r)))===r},Oe=function(r){return Object.prototype.toString.call(r)==="[object String]"},Ie=function(r){return ge(r)&&F(r.then)};function O(e,r,t,n){n===void 0&&(n=0);for(var i=ot(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function z(e,r,t){for(var n=Fr(e),i=n,o=0,c=ot(r);o<c.length-1;o++){var p=c[o],S=O(e,c.slice(0,o+1));if(S&&(ge(S)||Array.isArray(S)))i=i[p]=Fr(S);else{var b=c[o+1];i=i[p]=tu(b)&&Number(b)>=0?[]:{}}}return(o===0?e:i)[c[o]]===t?e:(t===void 0?delete i[c[o]]:i[c[o]]=t,o===0&&t===void 0&&delete n[c[o]],n)}function ct(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var c=o[i],p=e[c];ge(p)?t.get(p)||(t.set(p,!0),n[c]=Array.isArray(p)?[]:{},ct(p,r,t,n[c])):n[c]=r}return n}function nu(e,r){switch(r.type){case"SET_VALUES":return A({},e,{values:r.payload});case"SET_TOUCHED":return A({},e,{touched:r.payload});case"SET_ERRORS":return G(e.errors,r.payload)?e:A({},e,{errors:r.payload});case"SET_STATUS":return A({},e,{status:r.payload});case"SET_ISSUBMITTING":return A({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return A({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return A({},e,{values:z(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return A({},e,{touched:z(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return A({},e,{errors:z(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return A({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return A({},e,{touched:ct(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return A({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},e,{isSubmitting:!1});default:return e}}var B={},le={};function hu(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,c=o===void 0?!1:o,p=e.isInitialValid,S=e.enableReinitialize,b=S===void 0?!1:S,x=e.onSubmit,I=ut(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=A({validateOnChange:t,validateOnBlur:i,validateOnMount:c,onSubmit:x},I),j=d.useRef(f.initialValues),P=d.useRef(f.initialErrors||B),M=d.useRef(f.initialTouched||le),$=d.useRef(f.initialStatus),E=d.useRef(!1),V=d.useRef({});d.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var st=d.useState(0),lt=st[1],ce=d.useRef({values:f.initialValues,errors:f.initialErrors||B,touched:f.initialTouched||le,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),g=ce.current,y=d.useCallback(function(a){var u=ce.current;ce.current=nu(u,a),u!==ce.current&&lt(function(s){return s+1})},[]),We=d.useCallback(function(a,u){return new Promise(function(s,l){var h=f.validate(a,u);h==null?s(B):Ie(h)?h.then(function(v){s(v||B)},function(v){l(v)}):s(h)})},[f.validate]),be=d.useCallback(function(a,u){var s=f.validationSchema,l=F(s)?s(u):s,h=u&&l.validateAt?l.validateAt(u,a):iu(a,l);return new Promise(function(v,_){h.then(function(){v(B)},function(L){L.name==="ValidationError"?v(au(L)):_(L)})})},[f.validationSchema]),ke=d.useCallback(function(a,u){return new Promise(function(s){return s(V.current[a].validate(u))})},[]),Ye=d.useCallback(function(a){var u=Object.keys(V.current).filter(function(l){return F(V.current[l].validate)}),s=u.length>0?u.map(function(l){return ke(l,O(a,l))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(l){return l.reduce(function(h,v,_){return v==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||v&&(h=z(h,u[_],v)),h},{})})},[ke]),ft=d.useCallback(function(a){return Promise.all([Ye(a),f.validationSchema?be(a):{},f.validate?We(a):{}]).then(function(u){var s=u[0],l=u[1],h=u[2],v=we.all([s,l,h],{arrayMerge:ou});return v})},[f.validate,f.validationSchema,Ye,We,be]),C=w(function(a){return a===void 0&&(a=g.values),y({type:"SET_ISVALIDATING",payload:!0}),ft(a).then(function(u){return E.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){c&&E.current===!0&&G(j.current,f.initialValues)&&C(j.current)},[c,C]);var ee=d.useCallback(function(a){var u=a&&a.values?a.values:j.current,s=a&&a.errors?a.errors:P.current?P.current:f.initialErrors||{},l=a&&a.touched?a.touched:M.current?M.current:f.initialTouched||{},h=a&&a.status?a.status:$.current?$.current:f.initialStatus;j.current=u,P.current=s,M.current=l,$.current=h;var v=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:l,status:h,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var _=f.onReset(g.values,ar);Ie(_)?_.then(v):v()}else v()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){E.current===!0&&!G(j.current,f.initialValues)&&b&&(j.current=f.initialValues,ee(),c&&C(j.current))},[b,f.initialValues,ee,c,C]),d.useEffect(function(){b&&E.current===!0&&!G(P.current,f.initialErrors)&&(P.current=f.initialErrors||B,y({type:"SET_ERRORS",payload:f.initialErrors||B}))},[b,f.initialErrors]),d.useEffect(function(){b&&E.current===!0&&!G(M.current,f.initialTouched)&&(M.current=f.initialTouched||le,y({type:"SET_TOUCHED",payload:f.initialTouched||le}))},[b,f.initialTouched]),d.useEffect(function(){b&&E.current===!0&&!G($.current,f.initialStatus)&&($.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[b,f.initialStatus,f.initialTouched]);var qe=w(function(a){if(V.current[a]&&F(V.current[a].validate)){var u=O(g.values,a),s=V.current[a].validate(u);return Ie(s)?(y({type:"SET_ISVALIDATING",payload:!0}),s.then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),be(g.values,a).then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:O(l,a)}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),dt=d.useCallback(function(a,u){var s=u.validate;V.current[a]={validate:s}},[]),pt=d.useCallback(function(a){delete V.current[a]},[]),Xe=w(function(a,u){y({type:"SET_TOUCHED",payload:a});var s=u===void 0?i:u;return s?C(g.values):Promise.resolve()}),Ze=d.useCallback(function(a){y({type:"SET_ERRORS",payload:a})},[]),Je=w(function(a,u){var s=F(a)?a(g.values):a;y({type:"SET_VALUES",payload:s});var l=u===void 0?t:u;return l?C(s):Promise.resolve()}),se=d.useCallback(function(a,u){y({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),X=w(function(a,u,s){y({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var l=s===void 0?t:s;return l?C(z(g.values,a,u)):Promise.resolve()}),Qe=d.useCallback(function(a,u){var s=u,l=a,h;if(!Oe(a)){a.persist&&a.persist();var v=a.target?a.target:a.currentTarget,_=v.type,L=v.name,_e=v.id,Ae=v.value,Et=v.checked,fu=v.outerHTML,ir=v.options,_t=v.multiple;s=u||L||_e,l=/number|range/.test(_)?(h=parseFloat(Ae),isNaN(h)?"":h):/checkbox/.test(_)?cu(O(g.values,s),Et,Ae):ir&&_t?uu(ir):Ae}s&&X(s,l)},[X,g.values]),Te=w(function(a){if(Oe(a))return function(u){return Qe(u,a)};Qe(a)}),Z=w(function(a,u,s){u===void 0&&(u=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var l=s===void 0?i:s;return l?C(g.values):Promise.resolve()}),er=d.useCallback(function(a,u){a.persist&&a.persist();var s=a.target,l=s.name,h=s.id,v=s.outerHTML,_=u||l||h;Z(_,!0)},[Z]),me=w(function(a){if(Oe(a))return function(u){return er(u,a)};er(a)}),rr=d.useCallback(function(a){F(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),tr=d.useCallback(function(a){y({type:"SET_STATUS",payload:a})},[]),nr=d.useCallback(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),Se=w(function(){return y({type:"SUBMIT_ATTEMPT"}),C().then(function(a){var u=a instanceof Error,s=!u&&Object.keys(a).length===0;if(s){var l;try{if(l=vt(),l===void 0)return}catch(h){throw h}return Promise.resolve(l).then(function(h){return E.current&&y({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(E.current)throw y({type:"SUBMIT_FAILURE"}),h})}else if(E.current&&(y({type:"SUBMIT_FAILURE"}),u))throw a})}),ht=w(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),Se().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),ar={resetForm:ee,validateForm:C,validateField:qe,setErrors:Ze,setFieldError:se,setFieldTouched:Z,setFieldValue:X,setStatus:tr,setSubmitting:nr,setTouched:Xe,setValues:Je,setFormikState:rr,submitForm:Se},vt=w(function(){return x(g.values,ar)}),yt=w(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),ee()}),gt=d.useCallback(function(a){return{value:O(g.values,a),error:O(g.errors,a),touched:!!O(g.touched,a),initialValue:O(j.current,a),initialTouched:!!O(M.current,a),initialError:O(P.current,a)}},[g.errors,g.touched,g.values]),bt=d.useCallback(function(a){return{setValue:function(s,l){return X(a,s,l)},setTouched:function(s,l){return Z(a,s,l)},setError:function(s){return se(a,s)}}},[X,Z,se]),Tt=d.useCallback(function(a){var u=ge(a),s=u?a.name:a,l=O(g.values,s),h={name:s,value:l,onChange:Te,onBlur:me};if(u){var v=a.type,_=a.value,L=a.as,_e=a.multiple;v==="checkbox"?_===void 0?h.checked=!!l:(h.checked=!!(Array.isArray(l)&&~l.indexOf(_)),h.value=_):v==="radio"?(h.checked=l===_,h.value=_):L==="select"&&_e&&(h.value=h.value||[],h.multiple=!0)}return h},[me,Te,g.values]),Ee=d.useMemo(function(){return!G(j.current,g.values)},[j.current,g.values]),mt=d.useMemo(function(){return typeof p<"u"?Ee?g.errors&&Object.keys(g.errors).length===0:p!==!1&&F(p)?p(f):p:g.errors&&Object.keys(g.errors).length===0},[p,Ee,g.errors,f]),St=A({},g,{initialValues:j.current,initialErrors:P.current,initialTouched:M.current,initialStatus:$.current,handleBlur:me,handleChange:Te,handleReset:yt,handleSubmit:ht,resetForm:ee,setErrors:Ze,setFormikState:rr,setFieldTouched:Z,setFieldValue:X,setFieldError:se,setStatus:tr,setSubmitting:nr,setTouched:Xe,setValues:Je,submitForm:Se,validateForm:C,validateField:qe,isValid:mt,dirty:Ee,unregisterField:pt,registerField:dt,getFieldProps:Tt,getFieldMeta:gt,getFieldHelpers:bt,validateOnBlur:i,validateOnChange:t,validateOnMount:c});return St}function au(e){var r={};if(e.inner){if(e.inner.length===0)return z(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;O(r,c.path)||(r=z(r,c.path,c.message))}}return r}function iu(e,r,t,n){t===void 0&&(t=!1);var i=Le(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Le(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||ur(i)?Le(i):i!==""?i:void 0}):ur(e[n])?r[n]=Le(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function ou(e,r,t){var n=e.slice();return r.forEach(function(o,c){if(typeof n[c]>"u"){var p=t.clone!==!1,S=p&&t.isMergeableObject(o);n[c]=S?we(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[c]=we(e[c],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function uu(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function cu(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var su=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function w(e){var r=d.useRef(e);return su(function(){r.current=e}),d.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var lu=d.forwardRef(function(e,r){var t=e.action,n=ut(e,["action"]),i=t??"#",o=ru(),c=o.handleReset,p=o.handleSubmit;return d.createElement("form",A({onSubmit:p,ref:r,onReset:c,action:i},n))});lu.displayName="Form";export{hu as u};
