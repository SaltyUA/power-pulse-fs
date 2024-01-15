import{g as Ht,a as d}from"./index-0eb5bb2f.js";var Xr={exports:{}},h={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=typeof Symbol=="function"&&Symbol.for,qe=j?Symbol.for("react.element"):60103,Xe=j?Symbol.for("react.portal"):60106,he=j?Symbol.for("react.fragment"):60107,ge=j?Symbol.for("react.strict_mode"):60108,be=j?Symbol.for("react.profiler"):60114,me=j?Symbol.for("react.provider"):60109,Te=j?Symbol.for("react.context"):60110,Ze=j?Symbol.for("react.async_mode"):60111,Se=j?Symbol.for("react.concurrent_mode"):60111,Ee=j?Symbol.for("react.forward_ref"):60112,_e=j?Symbol.for("react.suspense"):60113,Kt=j?Symbol.for("react.suspense_list"):60120,$e=j?Symbol.for("react.memo"):60115,Ae=j?Symbol.for("react.lazy"):60116,Wt=j?Symbol.for("react.block"):60121,kt=j?Symbol.for("react.fundamental"):60117,Yt=j?Symbol.for("react.responder"):60118,qt=j?Symbol.for("react.scope"):60119;function C(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case qe:switch(e=e.type,e){case Ze:case Se:case he:case be:case ge:case _e:return e;default:switch(e=e&&e.$$typeof,e){case Te:case Ee:case Ae:case $e:case me:return e;default:return r}}case Xe:return r}}}function Zr(e){return C(e)===Se}h.AsyncMode=Ze;h.ConcurrentMode=Se;h.ContextConsumer=Te;h.ContextProvider=me;h.Element=qe;h.ForwardRef=Ee;h.Fragment=he;h.Lazy=Ae;h.Memo=$e;h.Portal=Xe;h.Profiler=be;h.StrictMode=ge;h.Suspense=_e;h.isAsyncMode=function(e){return Zr(e)||C(e)===Ze};h.isConcurrentMode=Zr;h.isContextConsumer=function(e){return C(e)===Te};h.isContextProvider=function(e){return C(e)===me};h.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qe};h.isForwardRef=function(e){return C(e)===Ee};h.isFragment=function(e){return C(e)===he};h.isLazy=function(e){return C(e)===Ae};h.isMemo=function(e){return C(e)===$e};h.isPortal=function(e){return C(e)===Xe};h.isProfiler=function(e){return C(e)===be};h.isStrictMode=function(e){return C(e)===ge};h.isSuspense=function(e){return C(e)===_e};h.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===he||e===Se||e===be||e===ge||e===_e||e===Kt||typeof e=="object"&&e!==null&&(e.$$typeof===Ae||e.$$typeof===$e||e.$$typeof===me||e.$$typeof===Te||e.$$typeof===Ee||e.$$typeof===kt||e.$$typeof===Yt||e.$$typeof===qt||e.$$typeof===Wt)};h.typeOf=C;Xr.exports=h;var Xt=Xr.exports,Jr=Xt,Zt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qr={};Qr[Jr.ForwardRef]=Zt;Qr[Jr.Memo]=Jt;var Qt=function(r){return en(r)&&!rn(r)};function en(e){return!!e&&typeof e=="object"}function rn(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||an(e)}var tn=typeof Symbol=="function"&&Symbol.for,nn=tn?Symbol.for("react.element"):60103;function an(e){return e.$$typeof===nn}function on(e){return Array.isArray(e)?[]:{}}function ve(e,r){return r.clone!==!1&&r.isMergeableObject(e)?oe(on(e),e,r):e}function un(e,r,t){return e.concat(r).map(function(n){return ve(n,t)})}function cn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ve(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ve(r[i],t):n[i]=oe(e[i],r[i],t)}),n}function oe(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||un,t.isMergeableObject=t.isMergeableObject||Qt;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):cn(e,r,t):ve(r,t)}oe.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return oe(n,i,t)},{})};var Ge=oe,sn=typeof global=="object"&&global&&global.Object===Object&&global;const et=sn;var ln=typeof self=="object"&&self&&self.Object===Object&&self,fn=et||ln||Function("return this")();const x=fn;var dn=x.Symbol;const G=dn;var rt=Object.prototype,pn=rt.hasOwnProperty,yn=rt.toString,ae=G?G.toStringTag:void 0;function vn(e){var r=pn.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch{}var i=yn.call(e);return n&&(r?e[ae]=t:delete e[ae]),i}var hn=Object.prototype,gn=hn.toString;function bn(e){return gn.call(e)}var mn="[object Null]",Tn="[object Undefined]",Er=G?G.toStringTag:void 0;function q(e){return e==null?e===void 0?Tn:mn:Er&&Er in Object(e)?vn(e):bn(e)}function tt(e,r){return function(t){return e(r(t))}}var Sn=tt(Object.getPrototypeOf,Object);const Je=Sn;function X(e){return e!=null&&typeof e=="object"}var En="[object Object]",_n=Function.prototype,$n=Object.prototype,nt=_n.toString,An=$n.hasOwnProperty,jn=nt.call(Object);function _r(e){if(!X(e)||q(e)!=En)return!1;var r=Je(e);if(r===null)return!0;var t=An.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&nt.call(t)==jn}var $r=Array.isArray,Ar=Object.keys,On=Object.prototype.hasOwnProperty,wn=typeof Element<"u";function ze(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=$r(e),n=$r(r),i,o,c;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!ze(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,E=r instanceof Date;if(p!=E)return!1;if(p&&E)return e.getTime()==r.getTime();var m=e instanceof RegExp,N=r instanceof RegExp;if(m!=N)return!1;if(m&&N)return e.toString()==r.toString();var F=Ar(e);if(o=F.length,o!==Ar(r).length)return!1;for(i=o;i--!==0;)if(!On.call(r,F[i]))return!1;if(wn&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(c=F[i],!(c==="_owner"&&e.$$typeof)&&!ze(e[c],r[c]))return!1;return!0}return e!==e&&r!==r}var In=function(r,t){try{return ze(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const K=Ht(In);var Cn=!0;function Fn(e,r){if(!Cn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Mn(){this.__data__=[],this.size=0}function at(e,r){return e===r||e!==e&&r!==r}function je(e,r){for(var t=e.length;t--;)if(at(e[t][0],r))return t;return-1}var Pn=Array.prototype,Rn=Pn.splice;function Ln(e){var r=this.__data__,t=je(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Rn.call(r,t,1),--this.size,!0}function xn(e){var r=this.__data__,t=je(r,e);return t<0?void 0:r[t][1]}function Dn(e){return je(this.__data__,e)>-1}function Vn(e,r){var t=this.__data__,n=je(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=Mn;U.prototype.delete=Ln;U.prototype.get=xn;U.prototype.has=Dn;U.prototype.set=Vn;function Un(){this.__data__=new U,this.size=0}function Nn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Bn(e){return this.__data__.get(e)}function Gn(e){return this.__data__.has(e)}function se(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var zn="[object AsyncFunction]",Hn="[object Function]",Kn="[object GeneratorFunction]",Wn="[object Proxy]";function it(e){if(!se(e))return!1;var r=q(e);return r==Hn||r==Kn||r==zn||r==Wn}var kn=x["__core-js_shared__"];const Ve=kn;var jr=function(){var e=/[^.]+$/.exec(Ve&&Ve.keys&&Ve.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Yn(e){return!!jr&&jr in e}var qn=Function.prototype,Xn=qn.toString;function Z(e){if(e!=null){try{return Xn.call(e)}catch{}try{return e+""}catch{}}return""}var Zn=/[\\^$.*+?()[\]{}|]/g,Jn=/^\[object .+?Constructor\]$/,Qn=Function.prototype,ea=Object.prototype,ra=Qn.toString,ta=ea.hasOwnProperty,na=RegExp("^"+ra.call(ta).replace(Zn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function aa(e){if(!se(e)||Yn(e))return!1;var r=it(e)?na:Jn;return r.test(Z(e))}function ia(e,r){return e==null?void 0:e[r]}function J(e,r){var t=ia(e,r);return aa(t)?t:void 0}var oa=J(x,"Map");const ue=oa;var ua=J(Object,"create");const ce=ua;function ca(){this.__data__=ce?ce(null):{},this.size=0}function sa(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var la="__lodash_hash_undefined__",fa=Object.prototype,da=fa.hasOwnProperty;function pa(e){var r=this.__data__;if(ce){var t=r[e];return t===la?void 0:t}return da.call(r,e)?r[e]:void 0}var ya=Object.prototype,va=ya.hasOwnProperty;function ha(e){var r=this.__data__;return ce?r[e]!==void 0:va.call(r,e)}var ga="__lodash_hash_undefined__";function ba(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ce&&r===void 0?ga:r,this}function Y(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Y.prototype.clear=ca;Y.prototype.delete=sa;Y.prototype.get=pa;Y.prototype.has=ha;Y.prototype.set=ba;function ma(){this.size=0,this.__data__={hash:new Y,map:new(ue||U),string:new Y}}function Ta(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Oe(e,r){var t=e.__data__;return Ta(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Sa(e){var r=Oe(this,e).delete(e);return this.size-=r?1:0,r}function Ea(e){return Oe(this,e).get(e)}function _a(e){return Oe(this,e).has(e)}function $a(e,r){var t=Oe(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}z.prototype.clear=ma;z.prototype.delete=Sa;z.prototype.get=Ea;z.prototype.has=_a;z.prototype.set=$a;var Aa=200;function ja(e,r){var t=this.__data__;if(t instanceof U){var n=t.__data__;if(!ue||n.length<Aa-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new z(n)}return t.set(e,r),this.size=t.size,this}function te(e){var r=this.__data__=new U(e);this.size=r.size}te.prototype.clear=Un;te.prototype.delete=Nn;te.prototype.get=Bn;te.prototype.has=Gn;te.prototype.set=ja;function Oa(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var wa=function(){try{var e=J(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Or=wa;function ot(e,r,t){r=="__proto__"&&Or?Or(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var Ia=Object.prototype,Ca=Ia.hasOwnProperty;function ut(e,r,t){var n=e[r];(!(Ca.call(e,r)&&at(n,t))||t===void 0&&!(r in e))&&ot(e,r,t)}function we(e,r,t,n){var i=!t;t||(t={});for(var o=-1,c=r.length;++o<c;){var p=r[o],E=n?n(t[p],e[p],p,t,e):void 0;E===void 0&&(E=e[p]),i?ot(t,p,E):ut(t,p,E)}return t}function Fa(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Ma="[object Arguments]";function wr(e){return X(e)&&q(e)==Ma}var ct=Object.prototype,Pa=ct.hasOwnProperty,Ra=ct.propertyIsEnumerable,La=wr(function(){return arguments}())?wr:function(e){return X(e)&&Pa.call(e,"callee")&&!Ra.call(e,"callee")};const xa=La;var Da=Array.isArray;const le=Da;function Va(){return!1}var st=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ir=st&&typeof module=="object"&&module&&!module.nodeType&&module,Ua=Ir&&Ir.exports===st,Cr=Ua?x.Buffer:void 0,Na=Cr?Cr.isBuffer:void 0,Ba=Na||Va;const lt=Ba;var Ga=9007199254740991,za=/^(?:0|[1-9]\d*)$/;function Ha(e,r){var t=typeof e;return r=r??Ga,!!r&&(t=="number"||t!="symbol"&&za.test(e))&&e>-1&&e%1==0&&e<r}var Ka=9007199254740991;function ft(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ka}var Wa="[object Arguments]",ka="[object Array]",Ya="[object Boolean]",qa="[object Date]",Xa="[object Error]",Za="[object Function]",Ja="[object Map]",Qa="[object Number]",ei="[object Object]",ri="[object RegExp]",ti="[object Set]",ni="[object String]",ai="[object WeakMap]",ii="[object ArrayBuffer]",oi="[object DataView]",ui="[object Float32Array]",ci="[object Float64Array]",si="[object Int8Array]",li="[object Int16Array]",fi="[object Int32Array]",di="[object Uint8Array]",pi="[object Uint8ClampedArray]",yi="[object Uint16Array]",vi="[object Uint32Array]",S={};S[ui]=S[ci]=S[si]=S[li]=S[fi]=S[di]=S[pi]=S[yi]=S[vi]=!0;S[Wa]=S[ka]=S[ii]=S[Ya]=S[oi]=S[qa]=S[Xa]=S[Za]=S[Ja]=S[Qa]=S[ei]=S[ri]=S[ti]=S[ni]=S[ai]=!1;function hi(e){return X(e)&&ft(e.length)&&!!S[q(e)]}function Qe(e){return function(r){return e(r)}}var dt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=dt&&typeof module=="object"&&module&&!module.nodeType&&module,gi=ie&&ie.exports===dt,Ue=gi&&et.process,bi=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Ue&&Ue.binding&&Ue.binding("util")}catch{}}();const re=bi;var Fr=re&&re.isTypedArray,mi=Fr?Qe(Fr):hi;const Ti=mi;var Si=Object.prototype,Ei=Si.hasOwnProperty;function pt(e,r){var t=le(e),n=!t&&xa(e),i=!t&&!n&&lt(e),o=!t&&!n&&!i&&Ti(e),c=t||n||i||o,p=c?Fa(e.length,String):[],E=p.length;for(var m in e)(r||Ei.call(e,m))&&!(c&&(m=="length"||i&&(m=="offset"||m=="parent")||o&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Ha(m,E)))&&p.push(m);return p}var _i=Object.prototype;function er(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||_i;return e===t}var $i=tt(Object.keys,Object);const Ai=$i;var ji=Object.prototype,Oi=ji.hasOwnProperty;function wi(e){if(!er(e))return Ai(e);var r=[];for(var t in Object(e))Oi.call(e,t)&&t!="constructor"&&r.push(t);return r}function yt(e){return e!=null&&ft(e.length)&&!it(e)}function rr(e){return yt(e)?pt(e):wi(e)}function Ii(e,r){return e&&we(r,rr(r),e)}function Ci(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Fi=Object.prototype,Mi=Fi.hasOwnProperty;function Pi(e){if(!se(e))return Ci(e);var r=er(e),t=[];for(var n in e)n=="constructor"&&(r||!Mi.call(e,n))||t.push(n);return t}function tr(e){return yt(e)?pt(e,!0):Pi(e)}function Ri(e,r){return e&&we(r,tr(r),e)}var vt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Mr=vt&&typeof module=="object"&&module&&!module.nodeType&&module,Li=Mr&&Mr.exports===vt,Pr=Li?x.Buffer:void 0,Rr=Pr?Pr.allocUnsafe:void 0;function xi(e,r){if(r)return e.slice();var t=e.length,n=Rr?Rr(t):new e.constructor(t);return e.copy(n),n}function ht(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Di(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var c=e[t];r(c,t,e)&&(o[i++]=c)}return o}function gt(){return[]}var Vi=Object.prototype,Ui=Vi.propertyIsEnumerable,Lr=Object.getOwnPropertySymbols,Ni=Lr?function(e){return e==null?[]:(e=Object(e),Di(Lr(e),function(r){return Ui.call(e,r)}))}:gt;const nr=Ni;function Bi(e,r){return we(e,nr(e),r)}function bt(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Gi=Object.getOwnPropertySymbols,zi=Gi?function(e){for(var r=[];e;)bt(r,nr(e)),e=Je(e);return r}:gt;const mt=zi;function Hi(e,r){return we(e,mt(e),r)}function Tt(e,r,t){var n=r(e);return le(e)?n:bt(n,t(e))}function Ki(e){return Tt(e,rr,nr)}function Wi(e){return Tt(e,tr,mt)}var ki=J(x,"DataView");const He=ki;var Yi=J(x,"Promise");const Ke=Yi;var qi=J(x,"Set");const We=qi;var Xi=J(x,"WeakMap");const ke=Xi;var xr="[object Map]",Zi="[object Object]",Dr="[object Promise]",Vr="[object Set]",Ur="[object WeakMap]",Nr="[object DataView]",Ji=Z(He),Qi=Z(ue),eo=Z(Ke),ro=Z(We),to=Z(ke),W=q;(He&&W(new He(new ArrayBuffer(1)))!=Nr||ue&&W(new ue)!=xr||Ke&&W(Ke.resolve())!=Dr||We&&W(new We)!=Vr||ke&&W(new ke)!=Ur)&&(W=function(e){var r=q(e),t=r==Zi?e.constructor:void 0,n=t?Z(t):"";if(n)switch(n){case Ji:return Nr;case Qi:return xr;case eo:return Dr;case ro:return Vr;case to:return Ur}return r});const ar=W;var no=Object.prototype,ao=no.hasOwnProperty;function io(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&ao.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var oo=x.Uint8Array;const Br=oo;function ir(e){var r=new e.constructor(e.byteLength);return new Br(r).set(new Br(e)),r}function uo(e,r){var t=r?ir(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var co=/\w*$/;function so(e){var r=new e.constructor(e.source,co.exec(e));return r.lastIndex=e.lastIndex,r}var Gr=G?G.prototype:void 0,zr=Gr?Gr.valueOf:void 0;function lo(e){return zr?Object(zr.call(e)):{}}function fo(e,r){var t=r?ir(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var po="[object Boolean]",yo="[object Date]",vo="[object Map]",ho="[object Number]",go="[object RegExp]",bo="[object Set]",mo="[object String]",To="[object Symbol]",So="[object ArrayBuffer]",Eo="[object DataView]",_o="[object Float32Array]",$o="[object Float64Array]",Ao="[object Int8Array]",jo="[object Int16Array]",Oo="[object Int32Array]",wo="[object Uint8Array]",Io="[object Uint8ClampedArray]",Co="[object Uint16Array]",Fo="[object Uint32Array]";function Mo(e,r,t){var n=e.constructor;switch(r){case So:return ir(e);case po:case yo:return new n(+e);case Eo:return uo(e,t);case _o:case $o:case Ao:case jo:case Oo:case wo:case Io:case Co:case Fo:return fo(e,t);case vo:return new n;case ho:case mo:return new n(e);case go:return so(e);case bo:return new n;case To:return lo(e)}}var Hr=Object.create,Po=function(){function e(){}return function(r){if(!se(r))return{};if(Hr)return Hr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Ro=Po;function Lo(e){return typeof e.constructor=="function"&&!er(e)?Ro(Je(e)):{}}var xo="[object Map]";function Do(e){return X(e)&&ar(e)==xo}var Kr=re&&re.isMap,Vo=Kr?Qe(Kr):Do;const Uo=Vo;var No="[object Set]";function Bo(e){return X(e)&&ar(e)==No}var Wr=re&&re.isSet,Go=Wr?Qe(Wr):Bo;const zo=Go;var Ho=1,Ko=2,Wo=4,St="[object Arguments]",ko="[object Array]",Yo="[object Boolean]",qo="[object Date]",Xo="[object Error]",Et="[object Function]",Zo="[object GeneratorFunction]",Jo="[object Map]",Qo="[object Number]",_t="[object Object]",eu="[object RegExp]",ru="[object Set]",tu="[object String]",nu="[object Symbol]",au="[object WeakMap]",iu="[object ArrayBuffer]",ou="[object DataView]",uu="[object Float32Array]",cu="[object Float64Array]",su="[object Int8Array]",lu="[object Int16Array]",fu="[object Int32Array]",du="[object Uint8Array]",pu="[object Uint8ClampedArray]",yu="[object Uint16Array]",vu="[object Uint32Array]",T={};T[St]=T[ko]=T[iu]=T[ou]=T[Yo]=T[qo]=T[uu]=T[cu]=T[su]=T[lu]=T[fu]=T[Jo]=T[Qo]=T[_t]=T[eu]=T[ru]=T[tu]=T[nu]=T[du]=T[pu]=T[yu]=T[vu]=!0;T[Xo]=T[Et]=T[au]=!1;function ye(e,r,t,n,i,o){var c,p=r&Ho,E=r&Ko,m=r&Wo;if(t&&(c=i?t(e,n,i,o):t(e)),c!==void 0)return c;if(!se(e))return e;var N=le(e);if(N){if(c=io(e),!p)return ht(e,c)}else{var F=ar(e),f=F==Et||F==Zo;if(lt(e))return xi(e,p);if(F==_t||F==St||f&&!i){if(c=E||f?{}:Lo(e),!p)return E?Hi(e,Ri(c,e)):Bi(e,Ii(c,e))}else{if(!T[F])return i?e:{};c=Mo(e,F,p)}}o||(o=new te);var w=o.get(e);if(w)return w;o.set(e,c),zo(e)?e.forEach(function(O){c.add(ye(O,r,t,O,e,o))}):Uo(e)&&e.forEach(function(O,_){c.set(_,ye(O,r,t,_,e,o))});var D=m?E?Wi:Ki:E?tr:rr,L=N?void 0:D(e);return Oa(L||e,function(O,_){L&&(_=O,O=e[_]),ut(c,_,ye(O,r,t,_,e,o))}),c}var hu=4;function kr(e){return ye(e,hu)}function $t(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var gu="[object Symbol]";function or(e){return typeof e=="symbol"||X(e)&&q(e)==gu}var bu="Expected a function";function ur(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(bu);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var c=e.apply(this,n);return t.cache=o.set(i,c)||o,c};return t.cache=new(ur.Cache||z),t}ur.Cache=z;var mu=500;function Tu(e){var r=ur(e,function(n){return t.size===mu&&t.clear(),n}),t=r.cache;return r}var Su=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Eu=/\\(\\)?/g,_u=Tu(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Su,function(t,n,i,o){r.push(i?o.replace(Eu,"$1"):n||t)}),r});const $u=_u;var Au=1/0;function ju(e){if(typeof e=="string"||or(e))return e;var r=e+"";return r=="0"&&1/e==-Au?"-0":r}var Ou=1/0,Yr=G?G.prototype:void 0,qr=Yr?Yr.toString:void 0;function At(e){if(typeof e=="string")return e;if(le(e))return $t(e,At)+"";if(or(e))return qr?qr.call(e):"";var r=e+"";return r=="0"&&1/e==-Ou?"-0":r}function wu(e){return e==null?"":At(e)}function jt(e){return le(e)?$t(e,ju):or(e)?[e]:ht($u(wu(e)))}function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},A.apply(this,arguments)}function Ot(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Ie=d.createContext(void 0);Ie.displayName="FormikContext";Ie.Provider;Ie.Consumer;function Iu(){var e=d.useContext(Ie);return e||Fn(!1),e}var R=function(r){return typeof r=="function"},Ce=function(r){return r!==null&&typeof r=="object"},Cu=function(r){return String(Math.floor(Number(r)))===r},Ne=function(r){return Object.prototype.toString.call(r)==="[object String]"},Be=function(r){return Ce(r)&&R(r.then)};function I(e,r,t,n){n===void 0&&(n=0);for(var i=jt(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function k(e,r,t){for(var n=kr(e),i=n,o=0,c=jt(r);o<c.length-1;o++){var p=c[o],E=I(e,c.slice(0,o+1));if(E&&(Ce(E)||Array.isArray(E)))i=i[p]=kr(E);else{var m=c[o+1];i=i[p]=Cu(m)&&Number(m)>=0?[]:{}}}return(o===0?e:i)[c[o]]===t?e:(t===void 0?delete i[c[o]]:i[c[o]]=t,o===0&&t===void 0&&delete n[c[o]],n)}function wt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var c=o[i],p=e[c];Ce(p)?t.get(p)||(t.set(p,!0),n[c]=Array.isArray(p)?[]:{},wt(p,r,t,n[c])):n[c]=r}return n}function Fu(e,r){switch(r.type){case"SET_VALUES":return A({},e,{values:r.payload});case"SET_TOUCHED":return A({},e,{touched:r.payload});case"SET_ERRORS":return K(e.errors,r.payload)?e:A({},e,{errors:r.payload});case"SET_STATUS":return A({},e,{status:r.payload});case"SET_ISSUBMITTING":return A({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return A({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return A({},e,{values:k(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return A({},e,{touched:k(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return A({},e,{errors:k(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return A({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return A({},e,{touched:wt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return A({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},e,{isSubmitting:!1});default:return e}}var H={},pe={};function Bu(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,c=o===void 0?!1:o,p=e.isInitialValid,E=e.enableReinitialize,m=E===void 0?!1:E,N=e.onSubmit,F=Ot(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=A({validateOnChange:t,validateOnBlur:i,validateOnMount:c,onSubmit:N},F),w=d.useRef(f.initialValues),D=d.useRef(f.initialErrors||H),L=d.useRef(f.initialTouched||pe),O=d.useRef(f.initialStatus),_=d.useRef(!1),B=d.useRef({});d.useEffect(function(){return _.current=!0,function(){_.current=!1}},[]);var It=d.useState(0),Ct=It[1],fe=d.useRef({values:f.initialValues,errors:f.initialErrors||H,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),b=fe.current,g=d.useCallback(function(a){var u=fe.current;fe.current=Fu(u,a),u!==fe.current&&Ct(function(s){return s+1})},[]),cr=d.useCallback(function(a,u){return new Promise(function(s,l){var y=f.validate(a,u);y==null?s(H):Be(y)?y.then(function(v){s(v||H)},function(v){l(v)}):s(y)})},[f.validate]),Fe=d.useCallback(function(a,u){var s=f.validationSchema,l=R(s)?s(u):s,y=u&&l.validateAt?l.validateAt(u,a):Pu(a,l);return new Promise(function(v,$){y.then(function(){v(H)},function(V){V.name==="ValidationError"?v(Mu(V)):$(V)})})},[f.validationSchema]),sr=d.useCallback(function(a,u){return new Promise(function(s){return s(B.current[a].validate(u))})},[]),lr=d.useCallback(function(a){var u=Object.keys(B.current).filter(function(l){return R(B.current[l].validate)}),s=u.length>0?u.map(function(l){return sr(l,I(a,l))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(s).then(function(l){return l.reduce(function(y,v,$){return v==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||v&&(y=k(y,u[$],v)),y},{})})},[sr]),Ft=d.useCallback(function(a){return Promise.all([lr(a),f.validationSchema?Fe(a):{},f.validate?cr(a):{}]).then(function(u){var s=u[0],l=u[1],y=u[2],v=Ge.all([s,l,y],{arrayMerge:Ru});return v})},[f.validate,f.validationSchema,lr,cr,Fe]),P=M(function(a){return a===void 0&&(a=b.values),g({type:"SET_ISVALIDATING",payload:!0}),Ft(a).then(function(u){return _.current&&(g({type:"SET_ISVALIDATING",payload:!1}),g({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){c&&_.current===!0&&K(w.current,f.initialValues)&&P(w.current)},[c,P]);var ne=d.useCallback(function(a){var u=a&&a.values?a.values:w.current,s=a&&a.errors?a.errors:D.current?D.current:f.initialErrors||{},l=a&&a.touched?a.touched:L.current?L.current:f.initialTouched||{},y=a&&a.status?a.status:O.current?O.current:f.initialStatus;w.current=u,D.current=s,L.current=l,O.current=y;var v=function(){g({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:s,touched:l,status:y,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var $=f.onReset(b.values,Tr);Be($)?$.then(v):v()}else v()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);d.useEffect(function(){_.current===!0&&!K(w.current,f.initialValues)&&m&&(w.current=f.initialValues,ne(),c&&P(w.current))},[m,f.initialValues,ne,c,P]),d.useEffect(function(){m&&_.current===!0&&!K(D.current,f.initialErrors)&&(D.current=f.initialErrors||H,g({type:"SET_ERRORS",payload:f.initialErrors||H}))},[m,f.initialErrors]),d.useEffect(function(){m&&_.current===!0&&!K(L.current,f.initialTouched)&&(L.current=f.initialTouched||pe,g({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[m,f.initialTouched]),d.useEffect(function(){m&&_.current===!0&&!K(O.current,f.initialStatus)&&(O.current=f.initialStatus,g({type:"SET_STATUS",payload:f.initialStatus}))},[m,f.initialStatus,f.initialTouched]);var fr=M(function(a){if(B.current[a]&&R(B.current[a].validate)){var u=I(b.values,a),s=B.current[a].validate(u);return Be(s)?(g({type:"SET_ISVALIDATING",payload:!0}),s.then(function(l){return l}).then(function(l){g({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),g({type:"SET_ISVALIDATING",payload:!1})})):(g({type:"SET_FIELD_ERROR",payload:{field:a,value:s}}),Promise.resolve(s))}else if(f.validationSchema)return g({type:"SET_ISVALIDATING",payload:!0}),Fe(b.values,a).then(function(l){return l}).then(function(l){g({type:"SET_FIELD_ERROR",payload:{field:a,value:I(l,a)}}),g({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Mt=d.useCallback(function(a,u){var s=u.validate;B.current[a]={validate:s}},[]),Pt=d.useCallback(function(a){delete B.current[a]},[]),dr=M(function(a,u){g({type:"SET_TOUCHED",payload:a});var s=u===void 0?i:u;return s?P(b.values):Promise.resolve()}),pr=d.useCallback(function(a){g({type:"SET_ERRORS",payload:a})},[]),yr=M(function(a,u){var s=R(a)?a(b.values):a;g({type:"SET_VALUES",payload:s});var l=u===void 0?t:u;return l?P(s):Promise.resolve()}),de=d.useCallback(function(a,u){g({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),Q=M(function(a,u,s){g({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var l=s===void 0?t:s;return l?P(k(b.values,a,u)):Promise.resolve()}),vr=d.useCallback(function(a,u){var s=u,l=a,y;if(!Ne(a)){a.persist&&a.persist();var v=a.target?a.target:a.currentTarget,$=v.type,V=v.name,xe=v.id,De=v.value,Gt=v.checked,Uu=v.outerHTML,Sr=v.options,zt=v.multiple;s=u||V||xe,l=/number|range/.test($)?(y=parseFloat(De),isNaN(y)?"":y):/checkbox/.test($)?xu(I(b.values,s),Gt,De):Sr&&zt?Lu(Sr):De}s&&Q(s,l)},[Q,b.values]),Me=M(function(a){if(Ne(a))return function(u){return vr(u,a)};vr(a)}),ee=M(function(a,u,s){u===void 0&&(u=!0),g({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var l=s===void 0?i:s;return l?P(b.values):Promise.resolve()}),hr=d.useCallback(function(a,u){a.persist&&a.persist();var s=a.target,l=s.name,y=s.id,v=s.outerHTML,$=u||l||y;ee($,!0)},[ee]),Pe=M(function(a){if(Ne(a))return function(u){return hr(u,a)};hr(a)}),gr=d.useCallback(function(a){R(a)?g({type:"SET_FORMIK_STATE",payload:a}):g({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),br=d.useCallback(function(a){g({type:"SET_STATUS",payload:a})},[]),mr=d.useCallback(function(a){g({type:"SET_ISSUBMITTING",payload:a})},[]),Re=M(function(){return g({type:"SUBMIT_ATTEMPT"}),P().then(function(a){var u=a instanceof Error,s=!u&&Object.keys(a).length===0;if(s){var l;try{if(l=Lt(),l===void 0)return}catch(y){throw y}return Promise.resolve(l).then(function(y){return _.current&&g({type:"SUBMIT_SUCCESS"}),y}).catch(function(y){if(_.current)throw g({type:"SUBMIT_FAILURE"}),y})}else if(_.current&&(g({type:"SUBMIT_FAILURE"}),u))throw a})}),Rt=M(function(a){a&&a.preventDefault&&R(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&R(a.stopPropagation)&&a.stopPropagation(),Re().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),Tr={resetForm:ne,validateForm:P,validateField:fr,setErrors:pr,setFieldError:de,setFieldTouched:ee,setFieldValue:Q,setStatus:br,setSubmitting:mr,setTouched:dr,setValues:yr,setFormikState:gr,submitForm:Re},Lt=M(function(){return N(b.values,Tr)}),xt=M(function(a){a&&a.preventDefault&&R(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&R(a.stopPropagation)&&a.stopPropagation(),ne()}),Dt=d.useCallback(function(a){return{value:I(b.values,a),error:I(b.errors,a),touched:!!I(b.touched,a),initialValue:I(w.current,a),initialTouched:!!I(L.current,a),initialError:I(D.current,a)}},[b.errors,b.touched,b.values]),Vt=d.useCallback(function(a){return{setValue:function(s,l){return Q(a,s,l)},setTouched:function(s,l){return ee(a,s,l)},setError:function(s){return de(a,s)}}},[Q,ee,de]),Ut=d.useCallback(function(a){var u=Ce(a),s=u?a.name:a,l=I(b.values,s),y={name:s,value:l,onChange:Me,onBlur:Pe};if(u){var v=a.type,$=a.value,V=a.as,xe=a.multiple;v==="checkbox"?$===void 0?y.checked=!!l:(y.checked=!!(Array.isArray(l)&&~l.indexOf($)),y.value=$):v==="radio"?(y.checked=l===$,y.value=$):V==="select"&&xe&&(y.value=y.value||[],y.multiple=!0)}return y},[Pe,Me,b.values]),Le=d.useMemo(function(){return!K(w.current,b.values)},[w.current,b.values]),Nt=d.useMemo(function(){return typeof p<"u"?Le?b.errors&&Object.keys(b.errors).length===0:p!==!1&&R(p)?p(f):p:b.errors&&Object.keys(b.errors).length===0},[p,Le,b.errors,f]),Bt=A({},b,{initialValues:w.current,initialErrors:D.current,initialTouched:L.current,initialStatus:O.current,handleBlur:Pe,handleChange:Me,handleReset:xt,handleSubmit:Rt,resetForm:ne,setErrors:pr,setFormikState:gr,setFieldTouched:ee,setFieldValue:Q,setFieldError:de,setStatus:br,setSubmitting:mr,setTouched:dr,setValues:yr,submitForm:Re,validateForm:P,validateField:fr,isValid:Nt,dirty:Le,unregisterField:Pt,registerField:Mt,getFieldProps:Ut,getFieldMeta:Dt,getFieldHelpers:Vt,validateOnBlur:i,validateOnChange:t,validateOnMount:c});return Bt}function Mu(e){var r={};if(e.inner){if(e.inner.length===0)return k(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;I(r,c.path)||(r=k(r,c.path,c.message))}}return r}function Pu(e,r,t,n){t===void 0&&(t=!1);var i=Ye(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Ye(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||_r(i)?Ye(i):i!==""?i:void 0}):_r(e[n])?r[n]=Ye(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Ru(e,r,t){var n=e.slice();return r.forEach(function(o,c){if(typeof n[c]>"u"){var p=t.clone!==!1,E=p&&t.isMergeableObject(o);n[c]=E?Ge(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[c]=Ge(e[c],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Lu(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function xu(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Du=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function M(e){var r=d.useRef(e);return Du(function(){r.current=e}),d.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var Vu=d.forwardRef(function(e,r){var t=e.action,n=Ot(e,["action"]),i=t??"#",o=Iu(),c=o.handleReset,p=o.handleSubmit;return d.createElement("form",A({onSubmit:p,ref:r,onReset:c,action:i},n))});Vu.displayName="Form";export{Bu as u};