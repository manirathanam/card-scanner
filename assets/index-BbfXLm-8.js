function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/List-DjFlMLe1.js","assets/CardContent-GcMVgPHr.js","assets/Create-CW_vphAi.js","assets/Input-DfTegJpT.js","assets/Login-D5t0co1R.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zc(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const we={},Hr=[],Ot=()=>{},sv=()=>!1,fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hc=t=>t.startsWith("onUpdate:"),rt=Object.assign,Kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iv=Object.prototype.hasOwnProperty,le=(t,e)=>iv.call(t,e),Q=Array.isArray,Kr=t=>pa(t)==="[object Map]",mp=t=>pa(t)==="[object Set]",Z=t=>typeof t=="function",Fe=t=>typeof t=="string",ms=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",gp=t=>(Ae(t)||Z(t))&&Z(t.then)&&Z(t.catch),_p=Object.prototype.toString,pa=t=>_p.call(t),ov=t=>pa(t).slice(8,-1),yp=t=>pa(t)==="[object Object]",Wc=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},av=/-(\w)/g,Nt=ma(t=>t.replace(av,(e,n)=>n?n.toUpperCase():"")),lv=/\B([A-Z])/g,gs=ma(t=>t.replace(lv,"-$1").toLowerCase()),ga=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),To=ma(t=>t?`on${ga(t)}`:""),Jn=(t,e)=>!Object.is(t,e),Io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Sh;const vp=()=>Sh||(Sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ci(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?dv(r):Ci(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||Ae(t))return t}const cv=/;(?![^(]*\))/g,uv=/:([^]+)/,hv=/\/\*[^]*?\*\//g;function dv(t){const e={};return t.replace(hv,"").split(cv).forEach(n=>{if(n){const r=n.split(uv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ki(t){let e="";if(Fe(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=ki(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function fv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Fe(e)&&(t.class=ki(e)),n&&(t.style=Ci(n)),t}const pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mv=zc(pv);function Ep(t){return!!t||t===""}const gv=t=>Fe(t)?t:t==null?"":Q(t)||Ae(t)&&(t.toString===_p||!Z(t.toString))?JSON.stringify(t,wp,2):String(t),wp=(t,e)=>e&&e.__v_isRef?wp(t,e.value):Kr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ul(r,i)+" =>"]=s,n),{})}:mp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ul(n))}:ms(e)?ul(e):Ae(e)&&!Q(e)&&!yp(e)?String(e):e,ul=(t,e="")=>{var n;return ms(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class Tp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Gc(t){return new Tp(t)}function _v(t,e=Rt){e&&e.active&&e.effects.push(t)}function Ip(){return Rt}function yv(t){Rt&&Rt.cleanups.push(t)}let mr;class Qc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,_v(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,br();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(vv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Rr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=qn,n=mr;try{return qn=!0,mr=this,this._runnings++,Ch(this),this.fn()}finally{kh(this),this._runnings--,mr=n,qn=e}}stop(){var e;this.active&&(Ch(this),kh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function vv(t){return t.value}function Ch(t){t._trackId++,t._depsLength=0}function kh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ap(t.deps[e],t);t.deps.length=t._depsLength}}function Ap(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let qn=!0,Gl=0;const bp=[];function br(){bp.push(qn),qn=!1}function Rr(){const t=bp.pop();qn=t===void 0?!0:t}function Jc(){Gl++}function Yc(){for(Gl--;!Gl&&Ql.length;)Ql.shift()()}function Rp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ap(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ql=[];function Pp(t,e,n){Jc();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ql.push(r.scheduler)))}Yc()}const Sp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Mo=new WeakMap,gr=Symbol(""),Jl=Symbol("");function Et(t,e,n){if(qn&&mr){let r=Mo.get(t);r||Mo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Sp(()=>r.delete(n))),Rp(mr,s)}}function vn(t,e,n,r,s,i){const o=Mo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!ms(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Wc(n)&&a.push(o.get("length")):(a.push(o.get(gr)),Kr(t)&&a.push(o.get(Jl)));break;case"delete":Q(t)||(a.push(o.get(gr)),Kr(t)&&a.push(o.get(Jl)));break;case"set":Kr(t)&&a.push(o.get(gr));break}Jc();for(const l of a)l&&Pp(l,4);Yc()}function Ev(t,e){var n;return(n=Mo.get(t))==null?void 0:n.get(e)}const wv=zc("__proto__,__v_isRef,__isVue"),Cp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ms)),Oh=Tv();function Tv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ue(this);for(let i=0,o=this.length;i<o;i++)Et(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){br(),Jc();const r=ue(this)[e].apply(this,n);return Yc(),Rr(),r}}),t}function Iv(t){const e=ue(this);return Et(e,"has",t),e.hasOwnProperty(t)}class kp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Mv:xp:i?Dp:Np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Q(e);if(!s){if(o&&le(Oh,n))return Reflect.get(Oh,n,r);if(n==="hasOwnProperty")return Iv}const a=Reflect.get(e,n,r);return(ms(n)?Cp.has(n):wv(n))||(s||Et(e,"get",n),i)?a:ft(a)?o&&Wc(n)?a:a.value:Ae(a)?s?Mp(a):_s(a):a}}class Op extends kp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ns(i);if(!Lo(r)&&!ns(r)&&(i=ue(i),r=ue(r)),!Q(e)&&ft(i)&&!ft(r))return l?!1:(i.value=r,!0)}const o=Q(e)&&Wc(n)?Number(n)<e.length:le(e,n),a=Reflect.set(e,n,r,s);return e===ue(s)&&(o?Jn(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),a}deleteProperty(e,n){const r=le(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ms(n)||!Cp.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",Q(e)?"length":gr),Reflect.ownKeys(e)}}class Av extends kp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bv=new Op,Rv=new Av,Pv=new Op(!0),Xc=t=>t,_a=t=>Reflect.getPrototypeOf(t);function Zi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ue(t),i=ue(e);n||(Jn(e,i)&&Et(s,"get",e),Et(s,"get",i));const{has:o}=_a(s),a=r?Xc:n?nu:ii;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function eo(t,e=!1){const n=this.__v_raw,r=ue(n),s=ue(t);return e||(Jn(t,s)&&Et(r,"has",t),Et(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function to(t,e=!1){return t=t.__v_raw,!e&&Et(ue(t),"iterate",gr),Reflect.get(t,"size",t)}function Nh(t){t=ue(t);const e=ue(this);return _a(e).has.call(e,t)||(e.add(t),vn(e,"add",t,t)),this}function Dh(t,e){e=ue(e);const n=ue(this),{has:r,get:s}=_a(n);let i=r.call(n,t);i||(t=ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Jn(e,o)&&vn(n,"set",t,e):vn(n,"add",t,e),this}function xh(t){const e=ue(this),{has:n,get:r}=_a(e);let s=n.call(e,t);s||(t=ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&vn(e,"delete",t,void 0),i}function Vh(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function no(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ue(o),l=e?Xc:t?nu:ii;return!t&&Et(a,"iterate",gr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function ro(t,e,n){return function(...r){const s=this.__v_raw,i=ue(s),o=Kr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Xc:e?nu:ii;return!e&&Et(i,"iterate",l?Jl:gr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Sv(){const t={get(i){return Zi(this,i)},get size(){return to(this)},has:eo,add:Nh,set:Dh,delete:xh,clear:Vh,forEach:no(!1,!1)},e={get(i){return Zi(this,i,!1,!0)},get size(){return to(this)},has:eo,add:Nh,set:Dh,delete:xh,clear:Vh,forEach:no(!1,!0)},n={get(i){return Zi(this,i,!0)},get size(){return to(this,!0)},has(i){return eo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:no(!0,!1)},r={get(i){return Zi(this,i,!0,!0)},get size(){return to(this,!0)},has(i){return eo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:no(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ro(i,!1,!1),n[i]=ro(i,!0,!1),e[i]=ro(i,!1,!0),r[i]=ro(i,!0,!0)}),[t,n,e,r]}const[Cv,kv,Ov,Nv]=Sv();function Zc(t,e){const n=e?t?Nv:Ov:t?kv:Cv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const Dv={get:Zc(!1,!1)},xv={get:Zc(!1,!0)},Vv={get:Zc(!0,!1)},Np=new WeakMap,Dp=new WeakMap,xp=new WeakMap,Mv=new WeakMap;function Lv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fv(t){return t.__v_skip||!Object.isExtensible(t)?0:Lv(ov(t))}function _s(t){return ns(t)?t:eu(t,!1,bv,Dv,Np)}function Vp(t){return eu(t,!1,Pv,xv,Dp)}function Mp(t){return eu(t,!0,Rv,Vv,xp)}function eu(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Fv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Wr(t){return ns(t)?Wr(t.__v_raw):!!(t&&t.__v_isReactive)}function ns(t){return!!(t&&t.__v_isReadonly)}function Lo(t){return!!(t&&t.__v_isShallow)}function Lp(t){return Wr(t)||ns(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function tu(t){return Object.isExtensible(t)&&Vo(t,"__v_skip",!0),t}const ii=t=>Ae(t)?_s(t):t,nu=t=>Ae(t)?Mp(t):t;class Fp{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Qc(()=>e(this._value),()=>Ao(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ue(this);return(!e._cacheable||e.effect.dirty)&&Jn(e._value,e._value=e.effect.run())&&Ao(e,4),Up(e),e.effect._dirtyLevel>=2&&Ao(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Uv(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=Ot):(r=t.get,s=t.set),new Fp(r,s,i||!s,n)}function Up(t){var e;qn&&mr&&(t=ue(t),Rp(mr,(e=t.dep)!=null?e:t.dep=Sp(()=>t.dep=void 0,t instanceof Fp?t:void 0)))}function Ao(t,e=4,n){t=ue(t);const r=t.dep;r&&Pp(r,e)}function ft(t){return!!(t&&t.__v_isRef===!0)}function Ve(t){return Bp(t,!1)}function Bv(t){return Bp(t,!0)}function Bp(t,e){return ft(t)?t:new $v(t,e)}class $v{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:ii(e)}get value(){return Up(this),this._value}set value(e){const n=this.__v_isShallow||Lo(e)||ns(e);e=n?e:ue(e),Jn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ii(e),Ao(this,4))}}function N(t){return ft(t)?t.value:t}const jv={get:(t,e,n)=>N(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $p(t){return Wr(t)?t:new Proxy(t,jv)}function jp(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=qp(t,n);return e}class qv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ev(ue(this._object),this._key)}}class zv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Hv(t,e,n){return ft(t)?t:Z(t)?new zv(t):Ae(t)&&arguments.length>1?qp(t,e,n):Ve(t)}function qp(t,e,n){const r=t[e];return ft(r)?r:new qv(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zn(t,e,n,r){try{return r?t(...r):t()}catch(s){ya(s,e,n)}}function Ft(t,e,n,r){if(Z(t)){const i=zn(t,e,n,r);return i&&gp(i)&&i.catch(o=>{ya(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ft(t[i],e,n,r));return s}function ya(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){zn(l,null,10,[t,o,a]);return}}Kv(t,n,s,r)}function Kv(t,e,n,r=!0){console.error(t)}let oi=!1,Yl=!1;const ut=[];let Gt=0;const Gr=[];let xn=null,lr=0;const zp=Promise.resolve();let ru=null;function bn(t){const e=ru||zp;return t?e.then(this?t.bind(this):t):e}function Wv(t){let e=Gt+1,n=ut.length;for(;e<n;){const r=e+n>>>1,s=ut[r],i=ai(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function su(t){(!ut.length||!ut.includes(t,oi&&t.allowRecurse?Gt+1:Gt))&&(t.id==null?ut.push(t):ut.splice(Wv(t.id),0,t),Hp())}function Hp(){!oi&&!Yl&&(Yl=!0,ru=zp.then(Wp))}function Gv(t){const e=ut.indexOf(t);e>Gt&&ut.splice(e,1)}function Qv(t){Q(t)?Gr.push(...t):(!xn||!xn.includes(t,t.allowRecurse?lr+1:lr))&&Gr.push(t),Hp()}function Mh(t,e,n=oi?Gt+1:0){for(;n<ut.length;n++){const r=ut[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ut.splice(n,1),n--,r()}}}function Kp(t){if(Gr.length){const e=[...new Set(Gr)].sort((n,r)=>ai(n)-ai(r));if(Gr.length=0,xn){xn.push(...e);return}for(xn=e,lr=0;lr<xn.length;lr++)xn[lr]();xn=null,lr=0}}const ai=t=>t.id==null?1/0:t.id,Jv=(t,e)=>{const n=ai(t)-ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wp(t){Yl=!1,oi=!0,ut.sort(Jv);try{for(Gt=0;Gt<ut.length;Gt++){const e=ut[Gt];e&&e.active!==!1&&zn(e,null,14)}}finally{Gt=0,ut.length=0,Kp(),oi=!1,ru=null,(ut.length||Gr.length)&&Wp()}}function Yv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||we;d&&(s=n.map(f=>Fe(f)?f.trim():f)),h&&(s=n.map(Wl))}let a,l=r[a=To(e)]||r[a=To(Nt(e))];!l&&i&&(l=r[a=To(gs(e))]),l&&Ft(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(c,t,6,s)}}function Gp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=Gp(c,e,!0);u&&(a=!0,rt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(Q(i)?i.forEach(l=>o[l]=null):rt(o,i),Ae(t)&&r.set(t,o),o)}function va(t,e){return!t||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,gs(e))||le(t,e))}let ze=null,Qp=null;function Fo(t){const e=ze;return ze=t,Qp=t&&t.type.__scopeId||null,e}function ye(t,e=ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jh(-1);const i=Fo(e);let o;try{o=t(...s)}finally{Fo(i),r._d&&Jh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:_}=t;let y,I;const S=Fo(t);try{if(n.shapeFlag&4){const L=s||r,W=L;y=Wt(u.call(W,L,h,i,f,d,g)),I=l}else{const L=e;y=Wt(L.length>1?L(i,{attrs:l,slots:a,emit:c}):L(i,null)),I=e.props?l:Xv(l)}}catch(L){Js.length=0,ya(L,t,1),y=Ne(Yn)}let C=y;if(I&&_!==!1){const L=Object.keys(I),{shapeFlag:W}=C;L.length&&W&7&&(o&&L.some(Hc)&&(I=Zv(I,o)),C=yr(C,I))}return n.dirs&&(C=yr(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),y=C,Fo(S),y}const Xv=t=>{let e;for(const n in t)(n==="class"||n==="style"||fa(n))&&((e||(e={}))[n]=t[n]);return e},Zv=(t,e)=>{const n={};for(const r in t)(!Hc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function eE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Lh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!va(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Lh(r,o,c):!0:!!o;return!1}function Lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!va(n,i))return!0}return!1}function tE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Jp="components";function Fh(t,e){return rE(Jp,t,!0,e)||t}const nE=Symbol.for("v-ndc");function rE(t,e,n=!0,r=!1){const s=ze||Ze;if(s){const i=s.type;if(t===Jp){const a=JE(i,!1);if(a&&(a===e||a===Nt(e)||a===ga(Nt(e))))return i}const o=Uh(s[t]||i[t],e)||Uh(s.appContext[t],e);return!o&&r?i:o}}function Uh(t,e){return t&&(t[e]||t[Nt(e)]||t[ga(Nt(e))])}const sE=t=>t.__isSuspense;function iE(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):Qv(t)}const oE=Symbol.for("v-scx"),aE=()=>Ut(oE);function rs(t,e){return iu(t,null,e)}const so={};function vt(t,e,n){return iu(t,e,n)}function iu(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=we){if(e&&i){const x=e;e=(...ne)=>{x(...ne),W()}}const l=Ze,c=x=>r===!0?x:ur(x,r===!1?1:void 0);let u,h=!1,d=!1;if(ft(t)?(u=()=>t.value,h=Lo(t)):Wr(t)?(u=()=>c(t),h=!0):Q(t)?(d=!0,h=t.some(x=>Wr(x)||Lo(x)),u=()=>t.map(x=>{if(ft(x))return x.value;if(Wr(x))return c(x);if(Z(x))return zn(x,l,2)})):Z(t)?e?u=()=>zn(t,l,2):u=()=>(f&&f(),Ft(t,l,3,[g])):u=Ot,e&&r){const x=u;u=()=>ur(x())}let f,g=x=>{f=C.onStop=()=>{zn(x,l,4),f=C.onStop=void 0}},_;if(Aa)if(g=Ot,e?n&&Ft(e,l,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const x=aE();_=x.__watcherHandles||(x.__watcherHandles=[])}else return Ot;let y=d?new Array(t.length).fill(so):so;const I=()=>{if(!(!C.active||!C.dirty))if(e){const x=C.run();(r||h||(d?x.some((ne,fe)=>Jn(ne,y[fe])):Jn(x,y)))&&(f&&f(),Ft(e,l,3,[x,y===so?void 0:d&&y[0]===so?[]:y,g]),y=x)}else C.run()};I.allowRecurse=!!e;let S;s==="sync"?S=I:s==="post"?S=()=>yt(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),S=()=>su(I));const C=new Qc(u,Ot,S),L=Ip(),W=()=>{C.stop(),L&&Kc(L.effects,C)};return e?n?I():y=C.run():s==="post"?yt(C.run.bind(C),l&&l.suspense):C.run(),_&&_.push(W),W}function lE(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Yp(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Oi(this),a=iu(s,i.bind(r),n);return o(),a}function Yp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ur(t,e,n=0,r){if(!Ae(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ft(t))ur(t.value,e,n,r);else if(Q(t))for(let s=0;s<t.length;s++)ur(t[s],e,n,r);else if(mp(t)||Kr(t))t.forEach(s=>{ur(s,e,n,r)});else if(yp(t))for(const s in t)ur(t[s],e,n,r);return t}function a1(t,e){if(ze===null)return t;const n=ba(ze)||ze.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=we]=e[s];i&&(Z(i)&&(i={mounted:i,updated:i}),i.deep&&ur(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(br(),Ft(l,n,8,[t.el,a,t,e]),Rr())}}/*! #__NO_SIDE_EFFECTS__ */function Le(t,e){return Z(t)?rt({name:t.name},e,{setup:t}):t}const Hs=t=>!!t.type.__asyncLoader,Xp=t=>t.type.__isKeepAlive;function cE(t,e){Zp(t,"a",e)}function uE(t,e){Zp(t,"da",e)}function Zp(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xp(s.parent.vnode)&&hE(r,e,n,s),s=s.parent}}function hE(t,e,n,r){const s=Ea(e,t,r,!0);wa(()=>{Kc(r[e],s)},n)}function Ea(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;br();const a=Oi(n),l=Ft(e,n,t,o);return a(),Rr(),l});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=Ze)=>(!Aa||t==="sp")&&Ea(t,(...r)=>e(...r),n),dE=Rn("bm"),ou=Rn("m"),fE=Rn("bu"),pE=Rn("u"),em=Rn("bum"),wa=Rn("um"),mE=Rn("sp"),gE=Rn("rtg"),_E=Rn("rtc");function yE(t,e=Ze){Ea("ec",t,e)}function l1(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||Fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function $e(t,e,n={},r,s){if(ze.isCE||ze.parent&&Hs(ze.parent)&&ze.parent.isCE)return e!=="default"&&(n.name=e),Ne("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Se();const o=i&&tm(i(n)),a=De(St,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function tm(t){return t.some(e=>Bo(e)?!(e.type===Yn||e.type===St&&!tm(e.children)):!0)?t:null}const Xl=t=>t?mm(t)?ba(t)||t.proxy:Xl(t.parent):null,Ks=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$emit:t=>t.emit,$options:t=>au(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,su(t.update)}),$nextTick:t=>t.n||(t.n=bn.bind(t.proxy)),$watch:t=>lE.bind(t)}),dl=(t,e)=>t!==we&&!t.__isScriptSetup&&le(t,e),vE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(dl(r,e))return o[e]=1,r[e];if(s!==we&&le(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,i[e];if(n!==we&&le(n,e))return o[e]=4,n[e];Zl&&(o[e]=0)}}const u=Ks[e];let h,d;if(u)return e==="$attrs"&&Et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&le(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return dl(s,e)?(s[e]=n,!0):r!==we&&le(r,e)?(r[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&le(t,o)||dl(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(Ks,o)||le(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bh(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zl=!0;function EE(t){const e=au(t),n=t.proxy,r=t.ctx;Zl=!1,e.beforeCreate&&$h(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:_,deactivated:y,beforeDestroy:I,beforeUnmount:S,destroyed:C,unmounted:L,render:W,renderTracked:x,renderTriggered:ne,errorCaptured:fe,serverPrefetch:Ce,expose:ke,inheritAttrs:Je,components:ce,directives:At,filters:zt}=e;if(c&&wE(c,r,null),o)for(const he in o){const oe=o[he];Z(oe)&&(r[he]=oe.bind(n))}if(s){const he=s.call(n,n);Ae(he)&&(t.data=_s(he))}if(Zl=!0,i)for(const he in i){const oe=i[he],mt=Z(oe)?oe.bind(n,n):Z(oe.get)?oe.get.bind(n,n):Ot,Dt=!Z(oe)&&Z(oe.set)?oe.set.bind(n):Ot,it=Ie({get:mt,set:Dt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>it.value,set:je=>it.value=je})}if(a)for(const he in a)nm(a[he],r,n,he);if(l){const he=Z(l)?l.call(n):l;Reflect.ownKeys(he).forEach(oe=>{Gs(oe,he[oe])})}u&&$h(u,t,"c");function Oe(he,oe){Q(oe)?oe.forEach(mt=>he(mt.bind(n))):oe&&he(oe.bind(n))}if(Oe(dE,h),Oe(ou,d),Oe(fE,f),Oe(pE,g),Oe(cE,_),Oe(uE,y),Oe(yE,fe),Oe(_E,x),Oe(gE,ne),Oe(em,S),Oe(wa,L),Oe(mE,Ce),Q(ke))if(ke.length){const he=t.exposed||(t.exposed={});ke.forEach(oe=>{Object.defineProperty(he,oe,{get:()=>n[oe],set:mt=>n[oe]=mt})})}else t.exposed||(t.exposed={});W&&t.render===Ot&&(t.render=W),Je!=null&&(t.inheritAttrs=Je),ce&&(t.components=ce),At&&(t.directives=At)}function wE(t,e,n=Ot){Q(t)&&(t=ec(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Ut(s.from||r,s.default,!0):i=Ut(s.from||r):i=Ut(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function $h(t,e,n){Ft(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function nm(t,e,n,r){const s=r.includes(".")?Yp(n,r):()=>n[r];if(Fe(t)){const i=e[t];Z(i)&&vt(s,i)}else if(Z(t))vt(s,t.bind(n));else if(Ae(t))if(Q(t))t.forEach(i=>nm(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&vt(s,i,t)}}function au(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Uo(l,c,o,!0)),Uo(l,e,o)),Ae(e)&&i.set(e,l),l}function Uo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Uo(t,i,n,!0),s&&s.forEach(o=>Uo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=TE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TE={data:jh,props:qh,emits:qh,methods:Ms,computed:Ms,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Ms,directives:Ms,watch:AE,provide:jh,inject:IE};function jh(t,e){return e?t?function(){return rt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function IE(t,e){return Ms(ec(t),ec(e))}function ec(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ms(t,e){return t?rt(Object.create(null),t,e):e}function qh(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:rt(Object.create(null),Bh(t),Bh(e??{})):e}function AE(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function rm(){return{app:null,config:{isNativeTag:sv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bE=0;function RE(t,e){return function(r,s=null){Z(r)||(r=rt({},r)),s!=null&&!Ae(s)&&(s=null);const i=rm(),o=new WeakSet;let a=!1;const l=i.app={_uid:bE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:XE,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=Ne(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ba(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Ws;Ws=l;try{return c()}finally{Ws=u}}};return l}}let Ws=null;function Gs(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function Ut(t,e,n=!1){const r=Ze||ze;if(r||Ws){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ws._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r&&r.proxy):e}}function PE(t,e,n,r=!1){const s={},i={};Vo(i,Ia,1),t.propsDefaults=Object.create(null),sm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function SE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ue(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(va(t.emitsOptions,d))continue;const f=e[d];if(l)if(le(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const g=Nt(d);s[g]=tc(l,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{sm(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=gs(h))===h||!le(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=tc(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],c=!0)}c&&vn(t,"set","$attrs")}function sm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(zs(l))continue;const c=e[l];let u;s&&le(s,u=Nt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:va(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=ue(n),c=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=tc(s,l,h,c[h],t,!le(c,h))}}return o}function tc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Z(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Oi(s);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gs(n))&&(r=!0))}return r}function im(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=h=>{l=!0;const[d,f]=im(h,e,!0);rt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ae(t)&&r.set(t,Hr),Hr;if(Q(i))for(let u=0;u<i.length;u++){const h=Nt(i[u]);zh(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Nt(u);if(zh(h)){const d=i[u],f=o[h]=Q(d)||Z(d)?{type:d}:rt({},d);if(f){const g=Wh(Boolean,f.type),_=Wh(String,f.type);f[0]=g>-1,f[1]=_<0||g<_,(g>-1||le(f,"default"))&&a.push(h)}}}const c=[o,a];return Ae(t)&&r.set(t,c),c}function zh(t){return t[0]!=="$"&&!zs(t)}function Hh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Kh(t,e){return Hh(t)===Hh(e)}function Wh(t,e){return Q(e)?e.findIndex(n=>Kh(n,t)):Z(e)&&Kh(e,t)?0:-1}const om=t=>t[0]==="_"||t==="$stable",lu=t=>Q(t)?t.map(Wt):[Wt(t)],CE=(t,e,n)=>{if(e._n)return e;const r=ye((...s)=>lu(e(...s)),n);return r._c=!1,r},am=(t,e,n)=>{const r=t._ctx;for(const s in t){if(om(s))continue;const i=t[s];if(Z(i))e[s]=CE(s,i,r);else if(i!=null){const o=lu(i);e[s]=()=>o}}},lm=(t,e)=>{const n=lu(e);t.slots.default=()=>n},kE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Vo(e,"_",n)):am(e,t.slots={})}else t.slots={},e&&lm(t,e);Vo(t.slots,Ia,1)},OE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(rt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,am(e,s)),o=e}else e&&(lm(t,e),o={default:1});if(i)for(const a in s)!om(a)&&o[a]==null&&delete s[a]};function nc(t,e,n,r,s=!1){if(Q(t)){t.forEach((d,f)=>nc(d,e&&(Q(e)?e[f]:e),n,r,s));return}if(Hs(r)&&!s)return;const i=r.shapeFlag&4?ba(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Fe(c)?(u[c]=null,le(h,c)&&(h[c]=null)):ft(c)&&(c.value=null)),Z(l))zn(l,a,12,[o,u]);else{const d=Fe(l),f=ft(l);if(d||f){const g=()=>{if(t.f){const _=d?le(h,l)?h[l]:u[l]:l.value;s?Q(_)&&Kc(_,i):Q(_)?_.includes(i)||_.push(i):d?(u[l]=[i],le(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,le(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,yt(g,n)):g()}}}const yt=iE;function NE(t){return DE(t)}function DE(t,e){const n=vp();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ot,insertStaticContent:g}=t,_=(p,m,v,T=null,E=null,k=null,M=void 0,P=null,O=!!m.dynamicChildren)=>{if(p===m)return;p&&!Cs(p,m)&&(T=w(p),je(p,E,k,!0),p=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:R,ref:U,shapeFlag:H}=m;switch(R){case Ta:y(p,m,v,T);break;case Yn:I(p,m,v,T);break;case pl:p==null&&S(m,v,T,M);break;case St:ce(p,m,v,T,E,k,M,P,O);break;default:H&1?W(p,m,v,T,E,k,M,P,O):H&6?At(p,m,v,T,E,k,M,P,O):(H&64||H&128)&&R.process(p,m,v,T,E,k,M,P,O,$)}U!=null&&E&&nc(U,p&&p.ref,k,m||p,!m)},y=(p,m,v,T)=>{if(p==null)r(m.el=a(m.children),v,T);else{const E=m.el=p.el;m.children!==p.children&&c(E,m.children)}},I=(p,m,v,T)=>{p==null?r(m.el=l(m.children||""),v,T):m.el=p.el},S=(p,m,v,T)=>{[p.el,p.anchor]=g(p.children,m,v,T,p.el,p.anchor)},C=({el:p,anchor:m},v,T)=>{let E;for(;p&&p!==m;)E=d(p),r(p,v,T),p=E;r(m,v,T)},L=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=d(p),s(p),p=v;s(m)},W=(p,m,v,T,E,k,M,P,O)=>{m.type==="svg"?M="svg":m.type==="math"&&(M="mathml"),p==null?x(m,v,T,E,k,M,P,O):Ce(p,m,E,k,M,P,O)},x=(p,m,v,T,E,k,M,P)=>{let O,R;const{props:U,shapeFlag:H,transition:j,dirs:Y}=p;if(O=p.el=o(p.type,k,U&&U.is,U),H&8?u(O,p.children):H&16&&fe(p.children,O,null,T,E,fl(p,k),M,P),Y&&ir(p,null,T,"created"),ne(O,p,p.scopeId,M,T),U){for(const _e in U)_e!=="value"&&!zs(_e)&&i(O,_e,null,U[_e],k,p.children,T,E,ot);"value"in U&&i(O,"value",null,U.value,k),(R=U.onVnodeBeforeMount)&&Kt(R,T,p)}Y&&ir(p,null,T,"beforeMount");const re=xE(E,j);re&&j.beforeEnter(O),r(O,m,v),((R=U&&U.onVnodeMounted)||re||Y)&&yt(()=>{R&&Kt(R,T,p),re&&j.enter(O),Y&&ir(p,null,T,"mounted")},E)},ne=(p,m,v,T,E)=>{if(v&&f(p,v),T)for(let k=0;k<T.length;k++)f(p,T[k]);if(E){let k=E.subTree;if(m===k){const M=E.vnode;ne(p,M,M.scopeId,M.slotScopeIds,E.parent)}}},fe=(p,m,v,T,E,k,M,P,O=0)=>{for(let R=O;R<p.length;R++){const U=p[R]=P?Vn(p[R]):Wt(p[R]);_(null,U,m,v,T,E,k,M,P)}},Ce=(p,m,v,T,E,k,M)=>{const P=m.el=p.el;let{patchFlag:O,dynamicChildren:R,dirs:U}=m;O|=p.patchFlag&16;const H=p.props||we,j=m.props||we;let Y;if(v&&or(v,!1),(Y=j.onVnodeBeforeUpdate)&&Kt(Y,v,m,p),U&&ir(m,p,v,"beforeUpdate"),v&&or(v,!0),R?ke(p.dynamicChildren,R,P,v,T,fl(m,E),k):M||oe(p,m,P,null,v,T,fl(m,E),k,!1),O>0){if(O&16)Je(P,m,H,j,v,T,E);else if(O&2&&H.class!==j.class&&i(P,"class",null,j.class,E),O&4&&i(P,"style",H.style,j.style,E),O&8){const re=m.dynamicProps;for(let _e=0;_e<re.length;_e++){const Re=re[_e],Ke=H[Re],xt=j[Re];(xt!==Ke||Re==="value")&&i(P,Re,Ke,xt,E,p.children,v,T,ot)}}O&1&&p.children!==m.children&&u(P,m.children)}else!M&&R==null&&Je(P,m,H,j,v,T,E);((Y=j.onVnodeUpdated)||U)&&yt(()=>{Y&&Kt(Y,v,m,p),U&&ir(m,p,v,"updated")},T)},ke=(p,m,v,T,E,k,M)=>{for(let P=0;P<m.length;P++){const O=p[P],R=m[P],U=O.el&&(O.type===St||!Cs(O,R)||O.shapeFlag&70)?h(O.el):v;_(O,R,U,null,T,E,k,M,!0)}},Je=(p,m,v,T,E,k,M)=>{if(v!==T){if(v!==we)for(const P in v)!zs(P)&&!(P in T)&&i(p,P,v[P],null,M,m.children,E,k,ot);for(const P in T){if(zs(P))continue;const O=T[P],R=v[P];O!==R&&P!=="value"&&i(p,P,R,O,M,m.children,E,k,ot)}"value"in T&&i(p,"value",v.value,T.value,M)}},ce=(p,m,v,T,E,k,M,P,O)=>{const R=m.el=p?p.el:a(""),U=m.anchor=p?p.anchor:a("");let{patchFlag:H,dynamicChildren:j,slotScopeIds:Y}=m;Y&&(P=P?P.concat(Y):Y),p==null?(r(R,v,T),r(U,v,T),fe(m.children||[],v,U,E,k,M,P,O)):H>0&&H&64&&j&&p.dynamicChildren?(ke(p.dynamicChildren,j,v,E,k,M,P),(m.key!=null||E&&m===E.subTree)&&cu(p,m,!0)):oe(p,m,v,U,E,k,M,P,O)},At=(p,m,v,T,E,k,M,P,O)=>{m.slotScopeIds=P,p==null?m.shapeFlag&512?E.ctx.activate(m,v,T,M,O):zt(m,v,T,E,k,M,O):un(p,m,O)},zt=(p,m,v,T,E,k,M)=>{const P=p.component=HE(p,T,E);if(Xp(p)&&(P.ctx.renderer=$),KE(P),P.asyncDep){if(E&&E.registerDep(P,Oe),!p.el){const O=P.subTree=Ne(Yn);I(null,O,m,v)}}else Oe(P,p,m,v,E,k,M)},un=(p,m,v)=>{const T=m.component=p.component;if(eE(p,m,v))if(T.asyncDep&&!T.asyncResolved){he(T,m,v);return}else T.next=m,Gv(T.update),T.effect.dirty=!0,T.update();else m.el=p.el,T.vnode=m},Oe=(p,m,v,T,E,k,M)=>{const P=()=>{if(p.isMounted){let{next:U,bu:H,u:j,parent:Y,vnode:re}=p;{const Vr=cm(p);if(Vr){U&&(U.el=re.el,he(p,U,M)),Vr.asyncDep.then(()=>{p.isUnmounted||P()});return}}let _e=U,Re;or(p,!1),U?(U.el=re.el,he(p,U,M)):U=re,H&&Io(H),(Re=U.props&&U.props.onVnodeBeforeUpdate)&&Kt(Re,Y,U,re),or(p,!0);const Ke=hl(p),xt=p.subTree;p.subTree=Ke,_(xt,Ke,h(xt.el),w(xt),p,E,k),U.el=Ke.el,_e===null&&tE(p,Ke.el),j&&yt(j,E),(Re=U.props&&U.props.onVnodeUpdated)&&yt(()=>Kt(Re,Y,U,re),E)}else{let U;const{el:H,props:j}=m,{bm:Y,m:re,parent:_e}=p,Re=Hs(m);if(or(p,!1),Y&&Io(Y),!Re&&(U=j&&j.onVnodeBeforeMount)&&Kt(U,_e,m),or(p,!0),H&&be){const Ke=()=>{p.subTree=hl(p),be(H,p.subTree,p,E,null)};Re?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ke()):Ke()}else{const Ke=p.subTree=hl(p);_(null,Ke,v,T,p,E,k),m.el=Ke.el}if(re&&yt(re,E),!Re&&(U=j&&j.onVnodeMounted)){const Ke=m;yt(()=>Kt(U,_e,Ke),E)}(m.shapeFlag&256||_e&&Hs(_e.vnode)&&_e.vnode.shapeFlag&256)&&p.a&&yt(p.a,E),p.isMounted=!0,m=v=T=null}},O=p.effect=new Qc(P,Ot,()=>su(R),p.scope),R=p.update=()=>{O.dirty&&O.run()};R.id=p.uid,or(p,!0),R()},he=(p,m,v)=>{m.component=p;const T=p.vnode.props;p.vnode=m,p.next=null,SE(p,m.props,T,v),OE(p,m.children,v),br(),Mh(p),Rr()},oe=(p,m,v,T,E,k,M,P,O=!1)=>{const R=p&&p.children,U=p?p.shapeFlag:0,H=m.children,{patchFlag:j,shapeFlag:Y}=m;if(j>0){if(j&128){Dt(R,H,v,T,E,k,M,P,O);return}else if(j&256){mt(R,H,v,T,E,k,M,P,O);return}}Y&8?(U&16&&ot(R,E,k),H!==R&&u(v,H)):U&16?Y&16?Dt(R,H,v,T,E,k,M,P,O):ot(R,E,k,!0):(U&8&&u(v,""),Y&16&&fe(H,v,T,E,k,M,P,O))},mt=(p,m,v,T,E,k,M,P,O)=>{p=p||Hr,m=m||Hr;const R=p.length,U=m.length,H=Math.min(R,U);let j;for(j=0;j<H;j++){const Y=m[j]=O?Vn(m[j]):Wt(m[j]);_(p[j],Y,v,null,E,k,M,P,O)}R>U?ot(p,E,k,!0,!1,H):fe(m,v,T,E,k,M,P,O,H)},Dt=(p,m,v,T,E,k,M,P,O)=>{let R=0;const U=m.length;let H=p.length-1,j=U-1;for(;R<=H&&R<=j;){const Y=p[R],re=m[R]=O?Vn(m[R]):Wt(m[R]);if(Cs(Y,re))_(Y,re,v,null,E,k,M,P,O);else break;R++}for(;R<=H&&R<=j;){const Y=p[H],re=m[j]=O?Vn(m[j]):Wt(m[j]);if(Cs(Y,re))_(Y,re,v,null,E,k,M,P,O);else break;H--,j--}if(R>H){if(R<=j){const Y=j+1,re=Y<U?m[Y].el:T;for(;R<=j;)_(null,m[R]=O?Vn(m[R]):Wt(m[R]),v,re,E,k,M,P,O),R++}}else if(R>j)for(;R<=H;)je(p[R],E,k,!0),R++;else{const Y=R,re=R,_e=new Map;for(R=re;R<=j;R++){const bt=m[R]=O?Vn(m[R]):Wt(m[R]);bt.key!=null&&_e.set(bt.key,R)}let Re,Ke=0;const xt=j-re+1;let Vr=!1,bh=0;const Ss=new Array(xt);for(R=0;R<xt;R++)Ss[R]=0;for(R=Y;R<=H;R++){const bt=p[R];if(Ke>=xt){je(bt,E,k,!0);continue}let Ht;if(bt.key!=null)Ht=_e.get(bt.key);else for(Re=re;Re<=j;Re++)if(Ss[Re-re]===0&&Cs(bt,m[Re])){Ht=Re;break}Ht===void 0?je(bt,E,k,!0):(Ss[Ht-re]=R+1,Ht>=bh?bh=Ht:Vr=!0,_(bt,m[Ht],v,null,E,k,M,P,O),Ke++)}const Rh=Vr?VE(Ss):Hr;for(Re=Rh.length-1,R=xt-1;R>=0;R--){const bt=re+R,Ht=m[bt],Ph=bt+1<U?m[bt+1].el:T;Ss[R]===0?_(null,Ht,v,Ph,E,k,M,P,O):Vr&&(Re<0||R!==Rh[Re]?it(Ht,v,Ph,2):Re--)}}},it=(p,m,v,T,E=null)=>{const{el:k,type:M,transition:P,children:O,shapeFlag:R}=p;if(R&6){it(p.component.subTree,m,v,T);return}if(R&128){p.suspense.move(m,v,T);return}if(R&64){M.move(p,m,v,$);return}if(M===St){r(k,m,v);for(let H=0;H<O.length;H++)it(O[H],m,v,T);r(p.anchor,m,v);return}if(M===pl){C(p,m,v);return}if(T!==2&&R&1&&P)if(T===0)P.beforeEnter(k),r(k,m,v),yt(()=>P.enter(k),E);else{const{leave:H,delayLeave:j,afterLeave:Y}=P,re=()=>r(k,m,v),_e=()=>{H(k,()=>{re(),Y&&Y()})};j?j(k,re,_e):_e()}else r(k,m,v)},je=(p,m,v,T=!1,E=!1)=>{const{type:k,props:M,ref:P,children:O,dynamicChildren:R,shapeFlag:U,patchFlag:H,dirs:j}=p;if(P!=null&&nc(P,null,v,p,!0),U&256){m.ctx.deactivate(p);return}const Y=U&1&&j,re=!Hs(p);let _e;if(re&&(_e=M&&M.onVnodeBeforeUnmount)&&Kt(_e,m,p),U&6)Xi(p.component,v,T);else{if(U&128){p.suspense.unmount(v,T);return}Y&&ir(p,null,m,"beforeUnmount"),U&64?p.type.remove(p,m,v,E,$,T):R&&(k!==St||H>0&&H&64)?ot(R,m,v,!1,!0):(k===St&&H&384||!E&&U&16)&&ot(O,m,v),T&&Dr(p)}(re&&(_e=M&&M.onVnodeUnmounted)||Y)&&yt(()=>{_e&&Kt(_e,m,p),Y&&ir(p,null,m,"unmounted")},v)},Dr=p=>{const{type:m,el:v,anchor:T,transition:E}=p;if(m===St){xr(v,T);return}if(m===pl){L(p);return}const k=()=>{s(v),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:M,delayLeave:P}=E,O=()=>M(v,k);P?P(p.el,k,O):O()}else k()},xr=(p,m)=>{let v;for(;p!==m;)v=d(p),s(p),p=v;s(m)},Xi=(p,m,v)=>{const{bum:T,scope:E,update:k,subTree:M,um:P}=p;T&&Io(T),E.stop(),k&&(k.active=!1,je(M,p,m,v)),P&&yt(P,m),yt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ot=(p,m,v,T=!1,E=!1,k=0)=>{for(let M=k;M<p.length;M++)je(p[M],m,v,T,E)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let F=!1;const V=(p,m,v)=>{p==null?m._vnode&&je(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,v),F||(F=!0,Mh(),Kp(),F=!1),m._vnode=p},$={p:_,um:je,m:it,r:Dr,mt:zt,mc:fe,pc:oe,pbc:ke,n:w,o:t};let pe,be;return e&&([pe,be]=e($)),{render:V,hydrate:pe,createApp:RE(V,pe)}}function fl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cu(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vn(s[i]),a.el=o.el),n||cu(o,a)),a.type===Ta&&(a.el=o.el)}}function VE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cm(e)}const ME=t=>t.__isTeleport,Qs=t=>t&&(t.disabled||t.disabled===""),Gh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Qh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,rc=(t,e)=>{const n=t&&t.to;return Fe(n)?e?e(n):null:n},LE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:g,createText:_,createComment:y}}=c,I=Qs(e.props);let{shapeFlag:S,children:C,dynamicChildren:L}=e;if(t==null){const W=e.el=_(""),x=e.anchor=_("");f(W,n,r),f(x,n,r);const ne=e.target=rc(e.props,g),fe=e.targetAnchor=_("");ne&&(f(fe,ne),o==="svg"||Gh(ne)?o="svg":(o==="mathml"||Qh(ne))&&(o="mathml"));const Ce=(ke,Je)=>{S&16&&u(C,ke,Je,s,i,o,a,l)};I?Ce(n,x):ne&&Ce(ne,fe)}else{e.el=t.el;const W=e.anchor=t.anchor,x=e.target=t.target,ne=e.targetAnchor=t.targetAnchor,fe=Qs(t.props),Ce=fe?n:x,ke=fe?W:ne;if(o==="svg"||Gh(x)?o="svg":(o==="mathml"||Qh(x))&&(o="mathml"),L?(d(t.dynamicChildren,L,Ce,s,i,o,a),cu(t,e,!0)):l||h(t,e,Ce,ke,s,i,o,a,!1),I)fe?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):io(e,n,W,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Je=e.target=rc(e.props,g);Je&&io(e,Je,null,c,0)}else fe&&io(e,x,ne,c,1)}um(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:d}=t;if(h&&i(u),o&&i(c),a&16){const f=o||!Qs(d);for(let g=0;g<l.length;g++){const _=l[g];s(_,e,n,f,!!_.dynamicChildren)}}},move:io,hydrate:FE};function io(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=i===2;if(h&&r(o,e,n),(!h||Qs(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);h&&r(a,e,n)}function FE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=rc(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Qs(e.props))e.anchor=c(o(t),e,a(t),n,r,s,i),e.targetAnchor=h;else{e.anchor=o(t);let d=h;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,r,s,i)}um(e)}return e.anchor&&o(e.anchor)}const UE=LE;function um(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const St=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),pl=Symbol.for("v-stc"),Js=[];let Vt=null;function Se(t=!1){Js.push(Vt=t?null:[])}function BE(){Js.pop(),Vt=Js[Js.length-1]||null}let li=1;function Jh(t){li+=t}function hm(t){return t.dynamicChildren=li>0?Vt||Hr:null,BE(),li>0&&Vt&&Vt.push(t),t}function $E(t,e,n,r,s,i){return hm(cr(t,e,n,r,s,i,!0))}function De(t,e,n,r,s){return hm(Ne(t,e,n,r,s,!0))}function Bo(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Ia="__vInternal",dm=({key:t})=>t??null,bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||ft(t)||Z(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function cr(t,e=null,n=null,r=0,s=null,i=t===St?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dm(e),ref:e&&bo(e),scopeId:Qp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ze};return a?(uu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),li>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const Ne=jE;function jE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nE)&&(t=Yn),Bo(t)){const a=yr(t,e,!0);return n&&uu(a,n),li>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(YE(t)&&(t=t.__vccOpts),e){e=fm(e);let{class:a,style:l}=e;a&&!Fe(a)&&(e.class=ki(a)),Ae(l)&&(Lp(l)&&!Q(l)&&(l=rt({},l)),e.style=Ci(l))}const o=Fe(t)?1:sE(t)?128:ME(t)?64:Ae(t)?4:Z(t)?2:0;return cr(t,e,n,r,s,o,i,!0)}function fm(t){return t?Lp(t)||Ia in t?rt({},t):t:null}function yr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?wt(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&dm(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(bo(e)):[s,bo(e)]:bo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==St?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yr(t.ssContent),ssFallback:t.ssFallback&&yr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ls(t=" ",e=0){return Ne(Ta,null,t,e)}function pm(t="",e=!1){return e?(Se(),De(Yn,null,t)):Ne(Yn,null,t)}function Wt(t){return t==null||typeof t=="boolean"?Ne(Yn):Q(t)?Ne(St,null,t.slice()):typeof t=="object"?Vn(t):Ne(Ta,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yr(t)}function uu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ia in e)?e._ctx=ze:s===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),r&64?(n=16,e=[Ls(e)]):n=8);t.children=e,t.shapeFlag|=n}function wt(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ki([e.class,r.class]));else if(s==="style")e.style=Ci([e.style,r.style]);else if(fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Ft(t,e,7,[n,r])}const qE=rm();let zE=0;function HE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qE,i={uid:zE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:im(r,s),emitsOptions:Gp(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yv.bind(null,i),t.ce&&t.ce(i),i}let Ze=null;const Pr=()=>Ze||ze;let $o,sc;{const t=vp(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$o=e("__VUE_INSTANCE_SETTERS__",n=>Ze=n),sc=e("__VUE_SSR_SETTERS__",n=>Aa=n)}const Oi=t=>{const e=Ze;return $o(t),t.scope.on(),()=>{t.scope.off(),$o(e)}},Yh=()=>{Ze&&Ze.scope.off(),$o(null)};function mm(t){return t.vnode.shapeFlag&4}let Aa=!1;function KE(t,e=!1){e&&sc(e);const{props:n,children:r}=t.vnode,s=mm(t);PE(t,n,s,e),kE(t,r);const i=s?WE(t,e):void 0;return e&&sc(!1),i}function WE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=tu(new Proxy(t.ctx,vE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?QE(t):null,i=Oi(t);br();const o=zn(r,t,0,[t.props,s]);if(Rr(),i(),gp(o)){if(o.then(Yh,Yh),e)return o.then(a=>{Xh(t,a,e)}).catch(a=>{ya(a,t,0)});t.asyncDep=o}else Xh(t,o,e)}else gm(t,e)}function Xh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=$p(e)),gm(t,n)}let Zh;function gm(t,e,n){const r=t.type;if(!t.render){if(!e&&Zh&&!r.render){const s=r.template||au(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=rt(rt({isCustomElement:i,delimiters:a},o),l);r.render=Zh(s,c)}}t.render=r.render||Ot}{const s=Oi(t);br();try{EE(t)}finally{Rr(),s()}}}function GE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Et(t,"get","$attrs"),e[n]}}))}function QE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return GE(t)},slots:t.slots,emit:t.emit,expose:e}}function ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($p(tu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}}))}function JE(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function YE(t){return Z(t)&&"__vccOpts"in t}const Ie=(t,e)=>Uv(t,e,Aa);function Qr(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!Q(e)?Bo(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bo(n)&&(n=[n]),Ne(t,e,n))}const XE="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ZE="http://www.w3.org/2000/svg",ew="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,ed=Mn&&Mn.createElement("template"),tw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Mn.createElementNS(ZE,t):e==="mathml"?Mn.createElementNS(ew,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ed.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=ed.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nw=Symbol("_vtc");function rw(t,e,n){const r=t[nw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const td=Symbol("_vod"),sw=Symbol("_vsh"),iw=Symbol(""),ow=/(^|;)\s*display\s*:/;function aw(t,e,n){const r=t.style,s=Fe(n);let i=!1;if(n&&!s){if(e)if(Fe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ro(r,a,"")}else for(const o in e)n[o]==null&&Ro(r,o,"");for(const o in n)o==="display"&&(i=!0),Ro(r,o,n[o])}else if(s){if(e!==n){const o=r[iw];o&&(n+=";"+o),r.cssText=n,i=ow.test(n)}}else e&&t.removeAttribute("style");td in t&&(t[td]=i?r.display:"",t[sw]&&(r.display="none"))}const nd=/\s*!important$/;function Ro(t,e,n){if(Q(n))n.forEach(r=>Ro(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lw(t,e);nd.test(n)?t.setProperty(gs(r),n.replace(nd,""),"important"):t[r]=n}}const rd=["Webkit","Moz","ms"],ml={};function lw(t,e){const n=ml[e];if(n)return n;let r=Nt(e);if(r!=="filter"&&r in t)return ml[e]=r;r=ga(r);for(let s=0;s<rd.length;s++){const i=rd[s]+r;if(i in t)return ml[e]=i}return e}const sd="http://www.w3.org/1999/xlink";function cw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sd,e.slice(6,e.length)):t.setAttributeNS(sd,e,n);else{const i=mv(e);n==null||i&&!Ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function uw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ep(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Fr(t,e,n,r){t.addEventListener(e,n,r)}function hw(t,e,n,r){t.removeEventListener(e,n,r)}const id=Symbol("_vei");function dw(t,e,n,r,s=null){const i=t[id]||(t[id]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=fw(e);if(r){const c=i[e]=gw(r,s);Fr(t,a,c,l)}else o&&(hw(t,a,o,l),i[e]=void 0)}}const od=/(?:Once|Passive|Capture)$/;function fw(t){let e;if(od.test(t)){e={};let r;for(;r=t.match(od);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gs(t.slice(2)),e]}let gl=0;const pw=Promise.resolve(),mw=()=>gl||(pw.then(()=>gl=0),gl=Date.now());function gw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(_w(r,n.value),e,5,[r])};return n.value=t,n.attached=mw(),n}function _w(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ad=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yw=(t,e,n,r,s,i,o,a,l)=>{const c=s==="svg";e==="class"?rw(t,r,c):e==="style"?aw(t,n,r):fa(e)?Hc(e)||dw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vw(t,e,r,c))?uw(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),cw(t,e,r,c))};function vw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ad(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ad(e)&&Fe(n)?!1:e in t}const ld=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>Io(e,n):e};function Ew(t){t.target.composing=!0}function cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _l=Symbol("_assign"),c1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[_l]=ld(s);const i=r||s.props&&s.props.type==="number";Fr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Wl(a)),t[_l](a)}),n&&Fr(t,"change",()=>{t.value=t.value.trim()}),e||(Fr(t,"compositionstart",Ew),Fr(t,"compositionend",cd),Fr(t,"change",cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[_l]=ld(i),t.composing)return;const o=s||t.type==="number"?Wl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},ww=rt({patchProp:yw},tw);let ud;function Tw(){return ud||(ud=NE(ww))}const Iw=(...t)=>{const e=Tw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bw(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Aw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Aw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function bw(t){return Fe(t)?document.querySelector(t):t}var Rw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const Pw=Symbol();var hd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hd||(hd={}));function Sw(){const t=Gc(!0),e=t.run(()=>Ve({}));let n=[],r=[];const s=tu({install(i){s._a=i,i.provide(Pw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Rw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ur=typeof document<"u";function Cw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function yl(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const Ys=()=>{},$t=Array.isArray,_m=/#/g,kw=/&/g,Ow=/\//g,Nw=/=/g,Dw=/\?/g,ym=/\+/g,xw=/%5B/g,Vw=/%5D/g,vm=/%5E/g,Mw=/%60/g,Em=/%7B/g,Lw=/%7C/g,wm=/%7D/g,Fw=/%20/g;function hu(t){return encodeURI(""+t).replace(Lw,"|").replace(xw,"[").replace(Vw,"]")}function Uw(t){return hu(t).replace(Em,"{").replace(wm,"}").replace(vm,"^")}function ic(t){return hu(t).replace(ym,"%2B").replace(Fw,"+").replace(_m,"%23").replace(kw,"%26").replace(Mw,"`").replace(Em,"{").replace(wm,"}").replace(vm,"^")}function Bw(t){return ic(t).replace(Nw,"%3D")}function $w(t){return hu(t).replace(_m,"%23").replace(Dw,"%3F")}function jw(t){return t==null?"":$w(t).replace(Ow,"%2F")}function ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const qw=/\/$/,zw=t=>t.replace(qw,"");function vl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Gw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ci(o)}}function Hw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Kw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ss(e.matched[r],n.matched[s])&&Tm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ww(t[n],e[n]))return!1;return!0}function Ww(t,e){return $t(t)?fd(t,e):$t(e)?fd(e,t):t===e}function fd(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Gw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function Qw(t){if(!t)if(Ur){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zw(t)}const Jw=/^[^#]+#/;function Yw(t,e){return t.replace(Jw,"#")+e}function Xw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function Zw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Xw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pd(t,e){return(history.state?history.state.position-e:-1)+t}const oc=new Map;function eT(t,e){oc.set(t,e)}function tT(t){const e=oc.get(t);return oc.delete(t),e}let nT=()=>location.protocol+"//"+location.host;function Im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),dd(l,"")}return dd(n,t)+r+s}function rT(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=Im(t,location),g=n.value,_=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}y=_?d.position-_.position:0}else r(f);s.forEach(I=>{I(n.value,g,{delta:y,type:ui.pop,direction:y?y>0?Xs.forward:Xs.back:Xs.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:Ra()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function md(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ra():null}}function sT(t){const{history:e,location:n}=window,r={value:Im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:nT()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=me({},e.state,md(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=me({},s.value,e.state,{forward:l,scroll:Ra()});i(u.current,u,!0);const h=me({},md(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function iT(t){t=Qw(t);const e=sT(t),n=rT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:Yw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function oT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),iT(t)}function aT(t){return typeof t=="string"||t&&typeof t=="object"}function Am(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bm=Symbol("");var gd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gd||(gd={}));function is(t,e){return me(new Error,{type:t,[bm]:!0},e)}function hn(t,e){return t instanceof Error&&bm in t&&(e==null||!!(t.type&e))}const _d="[^/]+?",lT={sensitive:!1,strict:!1,start:!0,end:!0},cT=/[.+*?^${}()[\]/\\]/g;function uT(t,e){const n=me({},lT,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(cT,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:_,optional:y,regexp:I}=d;i.push({name:g,repeatable:_,optional:y});const S=I||_d;if(S!==_d){f+=10;try{new RegExp(`(${S})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+L.message)}}let C=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(C=y&&c.length<2?`(?:/${C})`:"/"+C),y&&(C+="?"),s+=C,f+=20,y&&(f+=-8),_&&(f+=-20),S===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:_,optional:y}=f,I=g in c?c[g]:"";if($t(I)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=$t(I)?I.join("/"):I;if(!S)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function hT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function dT(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=hT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(yd(r))return 1;if(yd(s))return-1}return s.length-r.length}function yd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const fT={type:0,value:""},pT=/[a-zA-Z0-9_]/;function mT(t){if(!t)return[[]];if(t==="/")return[[fT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:pT.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function gT(t,e,n){const r=uT(mT(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function _T(t,e){const n=[],r=new Map;e=wd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,g=yT(u);g.aliasOf=d&&d.record;const _=wd(e,u),y=[g];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of C)y.push(me({},g,{components:d?d.record.components:g.components,path:L,aliasOf:d?d.record:g}))}let I,S;for(const C of y){const{path:L}=C;if(h&&L[0]!=="/"){const W=h.record.path,x=W[W.length-1]==="/"?"":"/";C.path=h.record.path+(L&&x+L)}if(I=gT(C,h,_),d?d.alias.push(I):(S=S||I,S!==I&&S.alias.push(I),f&&u.name&&!Ed(I)&&o(u.name)),g.children){const W=g.children;for(let x=0;x<W.length;x++)i(W[x],I,d&&d.children[x])}d=d||I,(I.record.components&&Object.keys(I.record.components).length||I.record.name||I.record.redirect)&&l(I)}return S?()=>{o(S)}:Ys}function o(u){if(Am(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&dT(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Rm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ed(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},g,_;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw is(1,{location:u});_=d.record.name,f=me(vd(h.params,d.keys.filter(S=>!S.optional).concat(d.parent?d.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),u.params&&vd(u.params,d.keys.map(S=>S.name))),g=d.stringify(f)}else if(u.path!=null)g=u.path,d=n.find(S=>S.re.test(g)),d&&(f=d.parse(g),_=d.record.name);else{if(d=h.name?r.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw is(1,{location:u,currentLocation:h});_=d.record.name,f=me({},h.params,u.params),g=d.stringify(f)}const y=[];let I=d;for(;I;)y.unshift(I.record),I=I.parent;return{name:_,path:g,params:f,matched:y,meta:ET(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function vd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function yT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:vT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function vT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ed(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ET(t){return t.reduce((e,n)=>me(e,n.meta),{})}function wd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rm(t,e){return e.children.some(n=>n===t||Rm(t,n))}function wT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ym," "),o=i.indexOf("="),a=ci(o<0?i:i.slice(0,o)),l=o<0?null:ci(i.slice(o+1));if(a in e){let c=e[a];$t(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Td(t){let e="";for(let n in t){const r=t[n];if(n=Bw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&ic(i)):[r&&ic(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function TT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const IT=Symbol(""),Id=Symbol(""),Pa=Symbol(""),Pm=Symbol(""),ac=Symbol("");function ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ln(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(is(4,{from:n,to:e})):d instanceof Error?l(d):aT(d)?l(is(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function El(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(AT(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Ln(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Cw(u)?u.default:u;o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&Ln(f,n,r,o,a,s)()}))}}return i}function AT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ad(t){const e=Ut(Pa),n=Ut(Pm),r=Ie(()=>e.resolve(N(t.to))),s=Ie(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ss.bind(null,u));if(d>-1)return d;const f=bd(l[c-2]);return c>1&&bd(u)===f&&h[h.length-1].path!==f?h.findIndex(ss.bind(null,l[c-2])):d}),i=Ie(()=>s.value>-1&&ST(n.params,r.value.params)),o=Ie(()=>s.value>-1&&s.value===n.matched.length-1&&Tm(n.params,r.value.params));function a(l={}){return PT(l)?e[N(t.replace)?"replace":"push"](N(t.to)).catch(Ys):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const bT=Le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ad,setup(t,{slots:e}){const n=_s(Ad(t)),{options:r}=Ut(Pa),s=Ie(()=>({[Rd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Qr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),RT=bT;function PT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ST(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function bd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rd=(t,e,n)=>t??e??n,CT=Le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ut(ac),s=Ie(()=>t.route||r.value),i=Ut(Id,0),o=Ie(()=>{let c=N(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ie(()=>s.value.matched[o.value]);Gs(Id,Ie(()=>o.value+1)),Gs(IT,a),Gs(ac,s);const l=Ve();return vt(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ss(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Pd(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=Qr(d,me({},g,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Pd(n.default,{Component:y,route:c})||y}}});function Pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sm=CT;function kT(t){const e=_T(t.routes,t),n=t.parseQuery||wT,r=t.stringifyQuery||Td,s=t.history,i=ks(),o=ks(),a=ks(),l=Bv(Cn);let c=Cn;Ur&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yl.bind(null,w=>""+w),h=yl.bind(null,jw),d=yl.bind(null,ci);function f(w,F){let V,$;return Am(w)?(V=e.getRecordMatcher(w),$=F):$=w,e.addRoute($,V)}function g(w){const F=e.getRecordMatcher(w);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(w=>w.record)}function y(w){return!!e.getRecordMatcher(w)}function I(w,F){if(F=me({},F||l.value),typeof w=="string"){const m=vl(n,w,F.path),v=e.resolve({path:m.path},F),T=s.createHref(m.fullPath);return me(m,v,{params:d(v.params),hash:ci(m.hash),redirectedFrom:void 0,href:T})}let V;if(w.path!=null)V=me({},w,{path:vl(n,w.path,F.path).path});else{const m=me({},w.params);for(const v in m)m[v]==null&&delete m[v];V=me({},w,{params:h(m)}),F.params=h(F.params)}const $=e.resolve(V,F),pe=w.hash||"";$.params=u(d($.params));const be=Hw(r,me({},w,{hash:Uw(pe),path:$.path})),p=s.createHref(be);return me({fullPath:be,hash:pe,query:r===Td?TT(w.query):w.query||{}},$,{redirectedFrom:void 0,href:p})}function S(w){return typeof w=="string"?vl(n,w,l.value.path):me({},w)}function C(w,F){if(c!==w)return is(8,{from:F,to:w})}function L(w){return ne(w)}function W(w){return L(me(S(w),{replace:!0}))}function x(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:V}=F;let $=typeof V=="function"?V(w):V;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=S($):{path:$},$.params={}),me({query:w.query,hash:w.hash,params:$.path!=null?{}:w.params},$)}}function ne(w,F){const V=c=I(w),$=l.value,pe=w.state,be=w.force,p=w.replace===!0,m=x(V);if(m)return ne(me(S(m),{state:typeof m=="object"?me({},pe,m.state):pe,force:be,replace:p}),F||V);const v=V;v.redirectedFrom=F;let T;return!be&&Kw(r,$,V)&&(T=is(16,{to:v,from:$}),it($,$,!0,!1)),(T?Promise.resolve(T):ke(v,$)).catch(E=>hn(E)?hn(E,2)?E:Dt(E):oe(E,v,$)).then(E=>{if(E){if(hn(E,2))return ne(me({replace:p},S(E.to),{state:typeof E.to=="object"?me({},pe,E.to.state):pe,force:be}),F||v)}else E=ce(v,$,!0,p,pe);return Je(v,$,E),E})}function fe(w,F){const V=C(w,F);return V?Promise.reject(V):Promise.resolve()}function Ce(w){const F=xr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function ke(w,F){let V;const[$,pe,be]=OT(w,F);V=El($.reverse(),"beforeRouteLeave",w,F);for(const m of $)m.leaveGuards.forEach(v=>{V.push(Ln(v,w,F))});const p=fe.bind(null,w,F);return V.push(p),ot(V).then(()=>{V=[];for(const m of i.list())V.push(Ln(m,w,F));return V.push(p),ot(V)}).then(()=>{V=El(pe,"beforeRouteUpdate",w,F);for(const m of pe)m.updateGuards.forEach(v=>{V.push(Ln(v,w,F))});return V.push(p),ot(V)}).then(()=>{V=[];for(const m of be)if(m.beforeEnter)if($t(m.beforeEnter))for(const v of m.beforeEnter)V.push(Ln(v,w,F));else V.push(Ln(m.beforeEnter,w,F));return V.push(p),ot(V)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),V=El(be,"beforeRouteEnter",w,F,Ce),V.push(p),ot(V))).then(()=>{V=[];for(const m of o.list())V.push(Ln(m,w,F));return V.push(p),ot(V)}).catch(m=>hn(m,8)?m:Promise.reject(m))}function Je(w,F,V){a.list().forEach($=>Ce(()=>$(w,F,V)))}function ce(w,F,V,$,pe){const be=C(w,F);if(be)return be;const p=F===Cn,m=Ur?history.state:{};V&&($||p?s.replace(w.fullPath,me({scroll:p&&m&&m.scroll},pe)):s.push(w.fullPath,pe)),l.value=w,it(w,F,V,p),Dt()}let At;function zt(){At||(At=s.listen((w,F,V)=>{if(!Xi.listening)return;const $=I(w),pe=x($);if(pe){ne(me(pe,{replace:!0}),$).catch(Ys);return}c=$;const be=l.value;Ur&&eT(pd(be.fullPath,V.delta),Ra()),ke($,be).catch(p=>hn(p,12)?p:hn(p,2)?(ne(p.to,$).then(m=>{hn(m,20)&&!V.delta&&V.type===ui.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(V.delta&&s.go(-V.delta,!1),oe(p,$,be))).then(p=>{p=p||ce($,be,!1),p&&(V.delta&&!hn(p,8)?s.go(-V.delta,!1):V.type===ui.pop&&hn(p,20)&&s.go(-1,!1)),Je($,be,p)}).catch(Ys)}))}let un=ks(),Oe=ks(),he;function oe(w,F,V){Dt(w);const $=Oe.list();return $.length?$.forEach(pe=>pe(w,F,V)):console.error(w),Promise.reject(w)}function mt(){return he&&l.value!==Cn?Promise.resolve():new Promise((w,F)=>{un.add([w,F])})}function Dt(w){return he||(he=!w,zt(),un.list().forEach(([F,V])=>w?V(w):F()),un.reset()),w}function it(w,F,V,$){const{scrollBehavior:pe}=t;if(!Ur||!pe)return Promise.resolve();const be=!V&&tT(pd(w.fullPath,0))||($||!V)&&history.state&&history.state.scroll||null;return bn().then(()=>pe(w,F,be)).then(p=>p&&Zw(p)).catch(p=>oe(p,w,F))}const je=w=>s.go(w);let Dr;const xr=new Set,Xi={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:y,getRoutes:_,resolve:I,options:t,push:L,replace:W,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Oe.add,isReady:mt,install(w){const F=this;w.component("RouterLink",RT),w.component("RouterView",Sm),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>N(l)}),Ur&&!Dr&&l.value===Cn&&(Dr=!0,L(s.location).catch(pe=>{}));const V={};for(const pe in Cn)Object.defineProperty(V,pe,{get:()=>l.value[pe],enumerable:!0});w.provide(Pa,F),w.provide(Pm,Vp(V)),w.provide(ac,l);const $=w.unmount;xr.add(w),w.unmount=function(){xr.delete(w),xr.size<1&&(c=Cn,At&&At(),At=null,l.value=Cn,Dr=!1,he=!1),$()}}};function ot(w){return w.reduce((F,V)=>F.then(()=>Ce(V)),Promise.resolve())}return Xi}function OT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>ss(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ss(c,l))||s.push(l))}return[n,r,s]}function NT(){return Ut(Pa)}const DT={__name:"App",setup(t){return(e,n)=>(Se(),De(N(Sm)))}},xT="modulepreload",VT=function(t){return"/card-scanner/"+t},Sd={},wl=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=VT(l),l in Sd)return;Sd[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const g=i[f];if(g.href===l&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":xT,c||(d.as="script",d.crossOrigin=""),d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var Cd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},MT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},km={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new LT;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FT=function(t){const e=Cm(t);return km.encodeByteArray(e,!0)},jo=function(t){return FT(t).replace(/\./g,"")},Om=function(t){try{return km.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=()=>UT().__FIREBASE_DEFAULTS__,$T=()=>{if(typeof process>"u"||typeof Cd>"u")return;const t=Cd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Om(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return BT()||$T()||jT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nm=t=>{var e,n;return(n=(e=Sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dm=t=>{const e=Nm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xm=()=>{var t;return(t=Sa())===null||t===void 0?void 0:t.config},Vm=t=>{var e;return(e=Sa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jo(JSON.stringify(n)),jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function HT(){var t;const e=(t=Sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GT(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QT(){return!HT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JT(){try{return typeof indexedDB=="object"}catch{return!1}}function YT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XT,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new an(s,a,r)}}function ZT(t,e){return t.replace(eI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eI=/\{\$([^}]+)}/g;function tI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kd(i)&&kd(o)){if(!qo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Us(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nI(t,e){const n=new rI(t,e);return n.subscribe.bind(n)}class rI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Tl),s.error===void 0&&(s.error=Tl),s.complete===void 0&&(s.complete=Tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aI(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oI(t){return t===ar?void 0:t}function aI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const cI={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},uI=ie.INFO,hI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},dI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class du{constructor(e){this.name=e,this._logLevel=uI,this._logHandler=dI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const fI=(t,e)=>e.some(n=>t instanceof n);let Od,Nd;function pI(){return Od||(Od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mI(){return Nd||(Nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lm=new WeakMap,lc=new WeakMap,Fm=new WeakMap,Il=new WeakMap,fu=new WeakMap;function gI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lm.set(n,t)}).catch(()=>{}),fu.set(e,t),e}function _I(t){if(lc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});lc.set(t,e)}let cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yI(t){cc=t(cc)}function vI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Al(this),e,...n);return Fm.set(r,e.sort?e.sort():[e]),Hn(r)}:mI().includes(t)?function(...e){return t.apply(Al(this),e),Hn(Lm.get(this))}:function(...e){return Hn(t.apply(Al(this),e))}}function EI(t){return typeof t=="function"?vI(t):(t instanceof IDBTransaction&&_I(t),fI(t,pI())?new Proxy(t,cc):t)}function Hn(t){if(t instanceof IDBRequest)return gI(t);if(Il.has(t))return Il.get(t);const e=EI(t);return e!==t&&(Il.set(t,e),fu.set(e,t)),e}const Al=t=>fu.get(t);function wI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const TI=["get","getKey","getAll","getAllKeys","count"],II=["put","add","delete","clear"],bl=new Map;function Dd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bl.get(e))return bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=II.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return bl.set(e,i),i}yI(t=>({...t,get:(e,n,r)=>Dd(e,n)||t.get(e,n,r),has:(e,n)=>!!Dd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uc="@firebase/app",xd="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new du("@firebase/app"),RI="@firebase/app-compat",PI="@firebase/analytics-compat",SI="@firebase/analytics",CI="@firebase/app-check-compat",kI="@firebase/app-check",OI="@firebase/auth",NI="@firebase/auth-compat",DI="@firebase/database",xI="@firebase/database-compat",VI="@firebase/functions",MI="@firebase/functions-compat",LI="@firebase/installations",FI="@firebase/installations-compat",UI="@firebase/messaging",BI="@firebase/messaging-compat",$I="@firebase/performance",jI="@firebase/performance-compat",qI="@firebase/remote-config",zI="@firebase/remote-config-compat",HI="@firebase/storage",KI="@firebase/storage-compat",WI="@firebase/firestore",GI="@firebase/firestore-compat",QI="firebase",JI="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="[DEFAULT]",YI={[uc]:"fire-core",[RI]:"fire-core-compat",[SI]:"fire-analytics",[PI]:"fire-analytics-compat",[kI]:"fire-app-check",[CI]:"fire-app-check-compat",[OI]:"fire-auth",[NI]:"fire-auth-compat",[DI]:"fire-rtdb",[xI]:"fire-rtdb-compat",[VI]:"fire-fn",[MI]:"fire-fn-compat",[LI]:"fire-iid",[FI]:"fire-iid-compat",[UI]:"fire-fcm",[BI]:"fire-fcm-compat",[$I]:"fire-perf",[jI]:"fire-perf-compat",[qI]:"fire-rc",[zI]:"fire-rc-compat",[HI]:"fire-gcs",[KI]:"fire-gcs-compat",[WI]:"fire-fst",[GI]:"fire-fst-compat","fire-js":"fire-js",[QI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,XI=new Map,dc=new Map;function Vd(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Er(t){const e=t.name;if(dc.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;dc.set(e,t);for(const n of zo.values())Vd(n,t);for(const n of XI.values())Vd(n,t);return!0}function Ca(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new Ni("app","Firebase",ZI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=JI;function Um(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(n||(n=xm()),!n)throw Kn.create("no-options");const i=zo.get(s);if(i){if(qo(n,i.options)&&qo(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const o=new lI(s);for(const l of dc.values())o.addComponent(l);const a=new eA(n,r,o);return zo.set(s,a),a}function pu(t=hc){const e=zo.get(t);if(!e&&t===hc&&xm())return Um();if(!e)throw Kn.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let s=(r=YI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(a.join(" "));return}Er(new Xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="firebase-heartbeat-database",nA=1,hi="firebase-heartbeat-store";let Rl=null;function Bm(){return Rl||(Rl=wI(tA,nA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),Rl}async function rA(t){try{const n=(await Bm()).transaction(hi),r=await n.objectStore(hi).get($m(t));return await n.done,r}catch(e){if(e instanceof an)vr.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function Md(t,e){try{const r=(await Bm()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,$m(t)),await r.done}catch(n){if(n instanceof an)vr.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function $m(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=1024,iA=30*24*60*60*1e3;class oA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ld();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=iA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ld(),{heartbeatsToSend:r,unsentEntries:s}=aA(this._heartbeatsCache.heartbeats),i=jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ld(){return new Date().toISOString().substring(0,10)}function aA(t,e=sA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JT()?YT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fd(t){return jo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){Er(new Xn("platform-logger",e=>new AI(e),"PRIVATE")),Er(new Xn("heartbeat",e=>new oA(e),"PRIVATE")),Xt(uc,xd,t),Xt(uc,xd,"esm2017"),Xt("fire-js","")}cA("");var uA="firebase",hA="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(uA,hA,"app");function mu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function jm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dA=jm,qm=new Ni("auth","Firebase",jm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new du("@firebase/auth");function fA(t,...e){Ho.logLevel<=ie.WARN&&Ho.warn(`Auth (${Sr}): ${t}`,...e)}function Po(t,...e){Ho.logLevel<=ie.ERROR&&Ho.error(`Auth (${Sr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw gu(t,...e)}function Zt(t,...e){return gu(t,...e)}function zm(t,e,n){const r=Object.assign(Object.assign({},dA()),{[e]:n});return new Ni("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return zm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qm.create(t,...e)}function K(t,e,...n){if(!t)throw gu(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function wn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pA(){return Ud()==="http:"||Ud()==="https:"}function Ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pA()||KT()||"connection"in navigator)?navigator.onLine:!0}function gA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=zT()||WT()}get(){return mA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new xi(3e4,6e4);function Cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return Km(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Hm.fetch()(Wm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Km(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_A),e);try{const s=new EA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw oo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zm(t,u,c);jt(t,u)}}catch(s){if(s instanceof an)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function ka(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Wm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_u(t.config,s):`${t.config.apiScheme}://${s}`}function vA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),yA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}function Bd(t){return t!==void 0&&t.enterprise!==void 0}class wA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function TA(t,e){return nr(t,"GET","/v2/recaptchaConfig",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function Gm(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AA(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),s=yu(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(Pl(s.auth_time)),issuedAtTime:Zs(Pl(s.iat)),expirationTime:Zs(Pl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pl(t){return Number(t)*1e3}function yu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=Om(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $d(t){const e=yu(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&bA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,Gm(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qm(i.providerUserInfo):[],a=SA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new pc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function PA(t){const e=Tt(t);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qm(t){return t.map(e=>{var{providerId:n}=e,r=mu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e){const n=await Km(t,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Wm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kA(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$d(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=$d(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await CA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jr;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await di(this,IA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:L,isAnonymous:W,providerData:x,stsTokenManager:ne}=n;K(C&&ne,e,"internal-error");const fe=Jr.fromJSON(this.name,ne);K(typeof C=="string",e,"internal-error"),kn(h,e.name),kn(d,e.name),K(typeof L=="boolean",e,"internal-error"),K(typeof W=="boolean",e,"internal-error"),kn(f,e.name),kn(g,e.name),kn(_,e.name),kn(y,e.name),kn(I,e.name),kn(S,e.name);const Ce=new gn({uid:C,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:W,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:fe,createdAt:I,lastLoginAt:S});return x&&Array.isArray(x)&&(Ce.providerData=x.map(ke=>Object.assign({},ke))),y&&(Ce._redirectEventId=y),Ce}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jr;s.updateFromServerResponse(n);const i=new gn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ko(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Jr;a.updateFromIdToken(r);const l=new gn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map;function _n(t){wn(t instanceof Function,"Expected a class definition");let e=jd.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jm.type="NONE";const qd=Jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=So(this.userKey,s.apiKey,i),this.fullPersistenceKey=So("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(_n(qd),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||_n(qd);const o=So(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=gn._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Yr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ym(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tg(e))return"Blackberry";if(ng(e))return"Webos";if(vu(e))return"Safari";if((e.includes("chrome/")||Xm(e))&&!e.includes("edge/"))return"Chrome";if(eg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ym(t=st()){return/firefox\//i.test(t)}function vu(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xm(t=st()){return/crios\//i.test(t)}function Zm(t=st()){return/iemobile/i.test(t)}function eg(t=st()){return/android/i.test(t)}function tg(t=st()){return/blackberry/i.test(t)}function ng(t=st()){return/webos/i.test(t)}function Oa(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OA(t=st()){var e;return Oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NA(){return GT()&&document.documentMode===10}function rg(t=st()){return Oa(t)||eg(t)||ng(t)||tg(t)||/windows phone/i.test(t)||Zm(t)}function DA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e=[]){let n;switch(t){case"Browser":n=zd(st());break;case"Worker":n=`${zd(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=6;class LA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hd(this),this.idTokenSubscription=new Hd(this),this.beforeStateQueue=new xA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gm(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Wn(this));const n=e?Tt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VA(this),n=new LA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ys(t){return Tt(t)}class Hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=nI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UA(t){Na=t}function ig(t){return Na.loadJS(t)}function BA(){return Na.recaptchaEnterpriseScript}function $A(){return Na.gapiScript}function jA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qA="recaptcha-enterprise",zA="NO_RECAPTCHA";class HA{constructor(e){this.type=qA,this.auth=ys(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{TA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new wA(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Bd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(zA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=BA();l.length!==0&&(l+=a),ig(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Kd(t,e,n,r=!1){const s=new HA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Kd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t,e){const n=Ca(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qo(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function WA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GA(t,e,n){const r=ys(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=og(e),{host:o,port:a}=QA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||JA()}function og(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QA(t){const e=og(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gd(o)}}}function Gd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function YA(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e){return ka(t,"POST","/v1/accounts:signInWithPassword",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}async function e0(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Eu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wd(e,n,"signInWithPassword",XA);case"emailLink":return ZA(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wd(e,r,"signUpPassword",YA);case"emailLink":return e0(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t,e){return ka(t,"POST","/v1/accounts:signInWithIdp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="http://localhost";class wr extends Eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xr(e,n)}buildRequest(){const e={requestUri:t0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r0(t){const e=Fs(Us(t)).link,n=e?Fs(Us(e)).deep_link_id:null,r=Fs(Us(t)).deep_link_id;return(r?Fs(Us(r)).link:null)||r||n||e||t}class wu{constructor(e){var n,r,s,i,o,a;const l=Fs(Us(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=n0((s=l.mode)!==null&&s!==void 0?s:null);K(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=r0(e);try{return new wu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(e,n){return fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wu.parseLink(n);return K(r,"argument-error"),fi._fromEmailAndCode(e,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends ag{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Vi{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Vi{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Vi{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await gn._fromIdTokenResponse(e,r,s),o=Qd(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qd(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends an{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wo(e,n,r,s)}}function lg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wo._fromErrorAndOperation(t,i,e,r):i})}async function s0(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await di(t,lg(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=yu(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e,n=!1){if(pn(t.app))return Promise.reject(Wn(t));const r="signIn",s=await lg(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function o0(t,e){return cg(ys(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t){const e=ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function u1(t,e,n){return pn(t.app)?Promise.reject(Wn(t)):o0(Tt(t),vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&a0(t),r})}function l0(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function c0(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}function u0(t){return Tt(t).signOut()}const Go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(){const t=st();return vu(t)||Oa(t)}const d0=1e3,f0=10;class hg extends ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=h0()&&DA(),this.fallbackToPolling=rg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,f0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},d0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hg.type="LOCAL";const p0=hg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg extends ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dg.type="SESSION";const fg=dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await m0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Tu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function _0(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function y0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function E0(){return pg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="firebaseLocalStorageDb",w0=1,Qo="firebaseLocalStorage",gg="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([Qo],e?"readwrite":"readonly").objectStore(Qo)}function T0(){const t=indexedDB.deleteDatabase(mg);return new Mi(t).toPromise()}function mc(){const t=indexedDB.open(mg,w0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qo,{keyPath:gg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qo)?e(r):(r.close(),await T0(),e(await mc()))})})}async function Jd(t,e,n){const r=xa(t,!0).put({[gg]:e,value:n});return new Mi(r).toPromise()}async function I0(t,e){const n=xa(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function Yd(t,e){const n=xa(t,!0).delete(e);return new Mi(n).toPromise()}const A0=800,b0=3;class _g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>b0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(E0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await y0(),!this.activeServiceWorker)return;this.sender=new g0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await Jd(e,Go,"1"),await Yd(e,Go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>I0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xa(s,!1).getAll();return new Mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_g.type="LOCAL";const R0=_g;new xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(t,e){return e?_n(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends Eu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function S0(t){return cg(t.auth,new Iu(t),t.bypassAuthState)}function C0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),i0(n,new Iu(t),t.bypassAuthState)}async function k0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),s0(n,new Iu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return S0;case"linkViaPopup":case"linkViaRedirect":return k0;case"reauthViaPopup":case"reauthViaRedirect":return C0;default:jt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new xi(2e3,1e4);class qr extends yg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O0.get())};e()}}qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="pendingRedirect",Co=new Map;class D0 extends yg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await x0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x0(t,e){const n=L0(e),r=M0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function V0(t,e){Co.set(t._key(),e)}function M0(t){return _n(t._redirectPersistence)}function L0(t){return So(N0,t.config.apiKey,t.name)}async function F0(t,e,n=!1){if(pn(t.app))return Promise.reject(Wn(t));const r=ys(t),s=P0(r,e),o=await new D0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=10*60*1e3;class B0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xd(e))}saveEventToCache(e){this.cachedEventUids.add(Xd(e)),this.lastProcessedEventTime=Date.now()}}function Xd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z0=/^https?/;async function H0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await j0(t);for(const n of e)try{if(K0(n))return}catch{}jt(t,"unauthorized-domain")}function K0(t){const e=fc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!z0.test(n))return!1;if(q0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new xi(3e4,6e4);function Zd(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function G0(t){return new Promise((e,n)=>{var r,s,i;function o(){Zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zd(),n(Zt(t,"network-request-failed"))},timeout:W0.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const a=jA("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},ig(`${$A()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ko=null,e})}let ko=null;function Q0(t){return ko=ko||G0(t),ko}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=new xi(5e3,15e3),Y0="__/auth/iframe",X0="emulator/auth/iframe",Z0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tb(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_u(e,X0):`https://${t.config.authDomain}/${Y0}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},s=eb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Di(r).slice(1)}`}async function nb(t){const e=await Q0(t),n=en().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:tb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{i(o)},J0.get());function l(){en().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sb=500,ib=600,ob="_blank",ab="http://localhost";class ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lb(t,e,n,r=sb,s=ib){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rb),{width:r.toString(),height:s.toString(),top:i,left:o}),c=st().toLowerCase();n&&(a=Xm(c)?ob:n),Ym(c)&&(e=e||ab,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(OA(c)&&a!=="_self")return cb(e||"",a),new ef(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new ef(h)}function cb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="__/auth/handler",hb="emulator/auth/handler",db=encodeURIComponent("fac");async function tf(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:s};if(e instanceof ag){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Vi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${db}=${encodeURIComponent(l)}`:"";return`${fb(t)}?${Di(a).slice(1)}${c}`}function fb({config:t}){return t.emulator?_u(t,hb):`https://${t.authDomain}/${ub}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="webStorageSupport";class pb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fg,this._completeRedirectFn=F0,this._overrideRedirectResult=V0}async _openPopup(e,n,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tf(e,n,r,fc(),s);return lb(e,o,Tu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tf(e,n,r,fc(),s);return _0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nb(e),r=new B0(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sl,{type:Sl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sl];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rg()||vu()||Oa()}}const mb=pb;var nf="@firebase/auth",rf="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yb(t){Er(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sg(t)},c=new FA(r,s,i,l);return WA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Er(new Xn("auth-internal",e=>{const n=ys(e.getProvider("auth").getImmediate());return(r=>new gb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(nf,rf,_b(t)),Xt(nf,rf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=5*60,Eb=Vm("authIdTokenMaxAge")||vb;let sf=null;const wb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Eb)return;const s=n==null?void 0:n.token;sf!==s&&(sf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tb(t=pu()){const e=Ca(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KA(t,{popupRedirectResolver:mb,persistence:[R0,p0,fg]}),r=Vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wb(i.toString());c0(n,o,()=>o(n.currentUser)),l0(n,a=>o(a))}}const s=Nm("auth");return s&&GA(n,`http://${s}`),n}function Ib(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ib().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yb("Browser");var Ab=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Au=Au||{},J=Ab||self;function Va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Li(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bb(t){return Object.prototype.hasOwnProperty.call(t,Cl)&&t[Cl]||(t[Cl]=++Rb)}var Cl="closure_uid_"+(1e9*Math.random()>>>0),Rb=0;function Pb(t,e,n){return t.call.apply(t.bind,arguments)}function Sb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=Pb:ht=Sb,ht.apply(null,arguments)}function ao(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function rr(){this.s=this.s,this.o=this.o}var Cb=0;rr.prototype.s=!1;rr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Cb!=0)&&bb(this)};rr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function of(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Va(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var kb=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};J.addEventListener("test",n,e),J.removeEventListener("test",n,e)}catch{}return t}();function pi(t){return/^[\s\xa0]*$/.test(t)}function Ma(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return Ma().indexOf(t)!=-1}function Ru(t){return Ru[" "](t),t}Ru[" "]=function(){};function Ob(t,e){var n=IR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Nb=Qt("Opera"),as=Qt("Trident")||Qt("MSIE"),wg=Qt("Edge"),gc=wg||as,Tg=Qt("Gecko")&&!(Ma().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),Db=Ma().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function Ig(){var t=J.document;return t?t.documentMode:void 0}var _c;e:{var kl="",Ol=function(){var t=Ma();if(Tg)return/rv:([^\);]+)(\)|;)/.exec(t);if(wg)return/Edge\/([\d\.]+)/.exec(t);if(as)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Db)return/WebKit\/(\S+)/.exec(t);if(Nb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ol&&(kl=Ol?Ol[1]:""),as){var Nl=Ig();if(Nl!=null&&Nl>parseFloat(kl)){_c=String(Nl);break e}}_c=kl}var yc;if(J.document&&as){var af=Ig();yc=af||parseInt(_c,10)||void 0}else yc=void 0;var xb=yc;function mi(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tg){e:{try{Ru(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Vb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&mi.$.h.call(this)}}Qe(mi,dt);var Vb={2:"touch",3:"pen",4:"mouse"};mi.prototype.h=function(){mi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fi="closure_listenable_"+(1e6*Math.random()|0),Mb=0;function Lb(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Mb,this.fa=this.ia=!1}function La(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Pu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Fb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ag(t){const e={};for(const n in t)e[n]=t[n];return e}const lf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<lf.length;i++)n=lf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fa(t){this.src=t,this.g={},this.h=0}Fa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ec(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Lb(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function vc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Eg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(La(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ec(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Su="closure_lm_"+(1e6*Math.random()|0),Dl={};function Rg(t,e,n,r,s){if(r&&r.once)return Sg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Rg(t,e[i],n,r,s);return null}return n=Ou(n),t&&t[Fi]?t.O(e,n,Li(r)?!!r.capture:!!r,s):Pg(t,e,n,!1,r,s)}function Pg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Li(s)?!!s.capture:!!s,a=ku(t);if(a||(t[Su]=a=new Fa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Ub(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kb||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(kg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ub(){function t(n){return e.call(t.src,t.listener,n)}const e=Bb;return t}function Sg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Sg(t,e[i],n,r,s);return null}return n=Ou(n),t&&t[Fi]?t.P(e,n,Li(r)?!!r.capture:!!r,s):Pg(t,e,n,!0,r,s)}function Cg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Cg(t,e[i],n,r,s);else r=Li(r)?!!r.capture:!!r,n=Ou(n),t&&t[Fi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ec(i,n,r,s),-1<n&&(La(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ku(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ec(e,n,r,s)),(n=-1<t?e[t]:null)&&Cu(n))}function Cu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fi])vc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ku(e))?(vc(n,t),n.h==0&&(n.src=null,e[Su]=null)):La(t)}}}function kg(t){return t in Dl?Dl[t]:Dl[t]="on"+t}function Bb(t,e){if(t.fa)t=!0;else{e=new mi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Cu(t),t=n.call(r,e)}return t}function ku(t){return t=t[Su],t instanceof Fa?t:null}var xl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ou(t){return typeof t=="function"?t:(t[xl]||(t[xl]=function(e){return t.handleEvent(e)}),t[xl])}function Ge(){rr.call(this),this.i=new Fa(this),this.S=this,this.J=null}Qe(Ge,rr);Ge.prototype[Fi]=!0;Ge.prototype.removeEventListener=function(t,e,n,r){Cg(this,t,e,n,r)};function tt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var s=e;e=new dt(r,t),bg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=lo(o,r,!0,e)&&s}if(o=e.g=t,s=lo(o,r,!0,e)&&s,s=lo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=lo(o,r,!1,e)&&s}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)La(n[r]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ge.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function lo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&vc(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Nu=J.JSON.stringify;class $b{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function jb(){var t=Du;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qb{constructor(){this.h=this.g=null}add(e,n){const r=Og.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Og=new $b(()=>new zb,t=>t.reset());class zb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Hb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Kb(t){J.setTimeout(()=>{throw t},0)}let gi,_i=!1,Du=new qb,Ng=()=>{const t=J.Promise.resolve(void 0);gi=()=>{t.then(Wb)}};var Wb=()=>{for(var t;t=jb();){try{t.h.call(t.g)}catch(n){Kb(n)}var e=Og;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_i=!1};function Ua(t,e){Ge.call(this),this.h=t||1,this.g=e||J,this.j=ht(this.qb,this),this.l=Date.now()}Qe(Ua,Ge);D=Ua.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tt(this,"tick"),this.ga&&(xu(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Ua.$.N.call(this),xu(this),delete this.g};function Vu(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Dg(t){t.g=Vu(()=>{t.g=null,t.i&&(t.i=!1,Dg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Gb extends rr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Dg(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(t){rr.call(this),this.h=t,this.g={}}Qe(yi,rr);var cf=[];function xg(t,e,n,r){Array.isArray(n)||(n&&(cf[0]=n.toString()),n=cf);for(var s=0;s<n.length;s++){var i=Rg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Vg(t){Pu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cu(e)},t),t.g={}}yi.prototype.N=function(){yi.$.N.call(this),Vg(this)};yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ba(){this.g=!0}Ba.prototype.Ea=function(){this.g=!1};function Qb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Jb(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function zr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Xb(t,n)+(r?" "+r:"")})}function Yb(t,e){t.info(function(){return"TIMEOUT: "+e})}Ba.prototype.info=function(){};function Xb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Nu(n)}catch{return e}}var kr={},uf=null;function $a(){return uf=uf||new Ge}kr.Ta="serverreachability";function Mg(t){dt.call(this,kr.Ta,t)}Qe(Mg,dt);function vi(t){const e=$a();tt(e,new Mg(e))}kr.STAT_EVENT="statevent";function Lg(t,e){dt.call(this,kr.STAT_EVENT,t),this.stat=e}Qe(Lg,dt);function _t(t){const e=$a();tt(e,new Lg(e,t))}kr.Ua="timingevent";function Fg(t,e){dt.call(this,kr.Ua,t),this.size=e}Qe(Fg,dt);function Ui(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var ja={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ug={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mu(){}Mu.prototype.h=null;function hf(t){return t.h||(t.h=t.i())}function Bg(){}var Bi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lu(){dt.call(this,"d")}Qe(Lu,dt);function Fu(){dt.call(this,"c")}Qe(Fu,dt);var wc;function qa(){}Qe(qa,Mu);qa.prototype.g=function(){return new XMLHttpRequest};qa.prototype.i=function(){return{}};wc=new qa;function $i(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new yi(this),this.P=Zb,t=gc?125:void 0,this.V=new Ua(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $g}function $g(){this.i=null,this.g="",this.h=!1}var Zb=45e3,jg={},Tc={};D=$i.prototype;D.setTimeout=function(t){this.P=t};function Ic(t,e,n){t.L=1,t.A=Ha(Tn(e)),t.u=n,t.S=!0,qg(t,null)}function qg(t,e){t.G=Date.now(),ji(t),t.B=Tn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Yg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new $g,t.g=y_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Gb(ht(t.Pa,t,t.g),t.O)),xg(t.U,t.g,"readystatechange",t.nb),e=t.I?Ag(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),vi(),Qb(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||gc||this.g&&(this.h.h||this.g.ja()||mf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?vi(3):vi(2)),za(this);var n=this.g.da();this.ca=n;t:if(zg(this)){var r=mf(this.g);t="";var s=r.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),ei(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Jb(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pi(a)){var c=a;break t}}c=null}if(n=c)zr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ac(this,n);else{this.i=!1,this.s=3,_t(12),hr(this),ei(this);break e}}this.S?(Hg(this,u,o),gc&&this.i&&u==3&&(xg(this.U,this.V,"tick",this.mb),this.V.start())):(zr(this.j,this.m,o,null),Ac(this,o)),u==4&&hr(this),this.i&&!this.J&&(u==4?p_(this.l,this):(this.i=!1,ji(this)))}else ER(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),hr(this),ei(this)}}}catch{}finally{}};function zg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Hg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=eR(t,n),s==Tc){e==4&&(t.s=4,_t(14),r=!1),zr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==jg){t.s=4,_t(15),zr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else zr(t.j,t.m,s,null),Ac(t,s);zg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,_t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zu(e),e.M=!0,_t(11))):(zr(t.j,t.m,n,"[Invalid Chunked Response]"),hr(t),ei(t))}D.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.o<e.length&&(za(this),Hg(this,t,e),this.i&&t!=4&&ji(this))}};function eR(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Tc:(n=Number(e.substring(n,r)),isNaN(n)?jg:(r+=1,r+n>e.length?Tc:(e=e.slice(r,r+n),t.o=r+n,e)))}D.cancel=function(){this.J=!0,hr(this)};function ji(t){t.Y=Date.now()+t.P,Kg(t,t.P)}function Kg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ui(ht(t.lb,t),e)}function za(t){t.C&&(J.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Yb(this.j,this.B),this.L!=2&&(vi(),_t(17)),hr(this),this.s=2,ei(this)):Kg(this,this.Y-t)};function ei(t){t.l.H==0||t.J||p_(t.l,t)}function hr(t){za(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,xu(t.V),Vg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ac(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||bc(n.i,t))){if(!t.K&&bc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Xo(n),Ga(n);else break e;qu(n),_t(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ui(ht(n.ib,n),6e3));if(1>=e_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else dr(n,11)}else if((t.K||n.g==t)&&Xo(n),!pi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Uu(i,i.h),i.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Te(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=__(r,r.J?r.pa:null,r.Y),o.K){t_(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(za(a),ji(a)),r.g=o}else d_(r);0<n.j.length&&Qa(n)}else c[0]!="stop"&&c[0]!="close"||dr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?dr(n,7):ju(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}vi(4)}catch{}}function tR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Va(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Wg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nR(t),r=tR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Gg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _r(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _r){this.h=t.h,Jo(this,t.j),this.s=t.s,this.g=t.g,Yo(this,t.m),this.l=t.l;var e=t.i,n=new Ei;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),df(this,n),this.o=t.o}else t&&(e=String(t).match(Gg))?(this.h=!1,Jo(this,e[1]||"",!0),this.s=Bs(e[2]||""),this.g=Bs(e[3]||"",!0),Yo(this,e[4]),this.l=Bs(e[5]||"",!0),df(this,e[6]||"",!0),this.o=Bs(e[7]||"")):(this.h=!1,this.i=new Ei(null,this.h))}_r.prototype.toString=function(){var t=[],e=this.j;e&&t.push($s(e,ff,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($s(e,ff,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push($s(n,n.charAt(0)=="/"?oR:iR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$s(n,lR)),t.join("")};function Tn(t){return new _r(t)}function Jo(t,e,n){t.j=n?Bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function df(t,e,n){e instanceof Ei?(t.i=e,cR(t.i,t.h)):(n||(e=$s(e,aR)),t.i=new Ei(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function Ha(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $s(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ff=/[#\/\?@]/g,iR=/[#\?:]/g,oR=/[#\?]/g,aR=/[#\?@]/g,lR=/#/g;function Ei(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sr(t){t.g||(t.g=new Map,t.h=0,t.i&&rR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ei.prototype;D.add=function(t,e){sr(this),this.i=null,t=Es(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Qg(t,e){sr(t),e=Es(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jg(t,e){return sr(t),e=Es(t,e),t.g.has(e)}D.forEach=function(t,e){sr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){sr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){sr(this);let e=[];if(typeof t=="string")Jg(this,t)&&(e=e.concat(this.g.get(Es(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return sr(this),this.i=null,t=Es(this,t),Jg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Yg(t,e,n){Qg(t,e),0<n.length&&(t.i=null,t.g.set(Es(t,e),bu(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Es(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cR(t,e){e&&!t.j&&(sr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Qg(this,r),Yg(this,s,n))},t)),t.j=e}var uR=class{constructor(t,e){this.g=t,this.map=e}};function Xg(t){this.l=t||hR,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var hR=10;function Zg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function e_(t){return t.h?1:t.g?t.g.size:0}function bc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Uu(t,e){t.g?t.g.add(e):t.h=e}function t_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Xg.prototype.cancel=function(){if(this.i=n_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function n_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bu(t.i)}var dR=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function fR(){this.g=new dR}function pR(t,e,n){const r=n||"";try{Wg(t,function(s,i){let o=s;Li(s)&&(o=Nu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function mR(t,e){const n=new Ba;if(J.Image){const r=new Image;r.onload=ao(co,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ao(co,n,r,"TestLoadImage: error",!1,e),r.onabort=ao(co,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ao(co,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function co(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function qi(t){this.l=t.ec||null,this.j=t.ob||!1}Qe(qi,Mu);qi.prototype.g=function(){return new Ka(this.l,this.j)};qi.prototype.i=function(t){return function(){return t}}({});function Ka(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Ka,Ge);var Bu=0;D=Ka.prototype;D.open=function(t,e){if(this.readyState!=Bu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wi(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=Bu};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;r_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function r_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zi(this):wi(this),this.readyState==3&&r_(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,zi(this))};D.Ya=function(t){this.g&&(this.response=t,zi(this))};D.ka=function(){this.g&&zi(this)};function zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wi(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function wi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gR=J.JSON.parse;function Me(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=s_,this.L=this.M=!1}Qe(Me,Ge);var s_="",_R=/^https?$/i,yR=["POST","PUT"];D=Me.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wc.g(),this.C=this.u?hf(this.u):hf(wc),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){pf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=Eg(yR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{a_(this),0<this.B&&((this.L=vR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=Vu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){pf(this,i)}};function vR(t){return as&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Au<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function pf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,i_(t),Wa(t)}function i_(t){t.F||(t.F=!0,tt(t,"complete"),tt(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tt(this,"complete"),tt(this,"abort"),Wa(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wa(this,!0)),Me.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?o_(this):this.kb())};D.kb=function(){o_(this)};function o_(t){if(t.h&&typeof Au<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)Vu(t.La,0,t);else if(tt(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Gg)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!_R.test(s?s.toLowerCase():"")}n=r}if(n)tt(t,"complete"),tt(t,"success");else{t.m=6;try{var i=2<Jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",i_(t)}}finally{Wa(t)}}}}function Wa(t,e){if(t.g){a_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||tt(t,"ready");try{n.onreadystatechange=r}catch{}}}function a_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gR(e)}};function mf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case s_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ER(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(pi(t[r]))continue;var n=Hb(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Fb(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function l_(t){let e="";return Pu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $u(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=l_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function c_(t){this.Ga=0,this.j=[],this.l=new Ba,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Os("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Os("baseRetryDelayMs",5e3,t),this.hb=Os("retryDelaySeedMs",1e4,t),this.eb=Os("forwardChannelMaxRetries",2,t),this.xa=Os("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Xg(t&&t.concurrentRequestLimit),this.Ja=new fR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=c_.prototype;D.ra=8;D.H=1;function ju(t){if(u_(t),t.H==3){var e=t.W++,n=Tn(t.I);if(Te(n,"SID",t.K),Te(n,"RID",e),Te(n,"TYPE","terminate"),Hi(t,n),e=new $i(t,t.l,e),e.L=2,e.A=Ha(Tn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.A,n=!0),n||(e.g=y_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ji(e)}g_(t)}function Ga(t){t.g&&(zu(t),t.g.cancel(),t.g=null)}function u_(t){Ga(t),t.u&&(J.clearTimeout(t.u),t.u=null),Xo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Qa(t){if(!Zg(t.i)&&!t.m){t.m=!0;var e=t.Na;gi||Ng(),_i||(gi(),_i=!0),Du.add(e,t),t.C=0}}function wR(t,e){return e_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ui(ht(t.Na,t,e),m_(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new $i(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Ag(i),bg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=h_(this,s,e),n=Tn(this.I),Te(n,"RID",t),Te(n,"CVER",22),this.F&&Te(n,"X-HTTP-Session-Id",this.F),Hi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(l_(i)))+"&"+e:this.o&&$u(n,this.o,i)),Uu(this.i,s),this.bb&&Te(n,"TYPE","init"),this.P?(Te(n,"$req",e),Te(n,"SID","null"),s.aa=!0,Ic(s,n,null)):Ic(s,n,e),this.H=2}}else this.H==3&&(t?gf(this,t):this.j.length==0||Zg(this.i)||gf(this))};function gf(t,e){var n;e?n=e.m:n=t.W++;const r=Tn(t.I);Te(r,"SID",t.K),Te(r,"RID",n),Te(r,"AID",t.V),Hi(t,r),t.o&&t.s&&$u(r,t.o,t.s),n=new $i(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=h_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Uu(t.i,n),Ic(n,r,e)}function Hi(t,e){t.na&&Pu(t.na,function(n,r){Te(e,r,n)}),t.h&&Wg({},function(n,r){Te(e,r,n)})}function h_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ht(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{pR(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function d_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;gi||Ng(),_i||(gi(),_i=!0),Du.add(e,t),t.A=0}}function qu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ui(ht(t.Ma,t),m_(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,f_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ui(ht(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,_t(10),Ga(this),f_(this))};function zu(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function f_(t){t.g=new $i(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Tn(t.wa);Te(e,"RID","rpc"),Te(e,"SID",t.K),Te(e,"AID",t.V),Te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Te(e,"TO",t.qa),Te(e,"TYPE","xmlhttp"),Hi(t,e),t.o&&t.s&&$u(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ha(Tn(e)),n.u=null,n.S=!0,qg(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Ga(this),qu(this),_t(19))};function Xo(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function p_(t,e){var n=null;if(t.g==e){Xo(t),zu(t),t.g=null;var r=2}else if(bc(t.i,e))n=e.F,t_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=$a(),tt(r,new Fg(r,n)),Qa(t)}else d_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&wR(t,e)||r==2&&qu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:dr(t,5);break;case 4:dr(t,10);break;case 3:dr(t,6);break;default:dr(t,2)}}}function m_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function dr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ht(t.pb,t);n||(n=new _r("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Jo(n,"https"),Ha(n)),mR(n.toString(),r)}else _t(2);t.H=0,t.h&&t.h.za(e),g_(t),u_(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),_t(2)):(this.l.info("Failed to ping google.com"),_t(1))};function g_(t){if(t.H=0,t.ma=[],t.h){const e=n_(t.i);(e.length!=0||t.j.length!=0)&&(of(t.ma,e),of(t.ma,t.j),t.i.i.length=0,bu(t.j),t.j.length=0),t.h.ya()}}function __(t,e,n){var r=n instanceof _r?Tn(n):new _r(n);if(r.g!="")e&&(r.g=e+"."+r.g),Yo(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new _r(null);r&&Jo(i,r),e&&(i.g=e),s&&Yo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Te(r,n,e),Te(r,"VER",t.ra),Hi(t,r),r}function y_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Me(new qi({ob:n})):new Me(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function v_(){}D=v_.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Zo(){if(as&&!(10<=Number(xb)))throw Error("Environmental error: no available transport.")}Zo.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Ge.call(this),this.g=new c_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!pi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ws(this)}Qe(Pt,Ge);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;_t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=__(t,null,t.Y),Qa(t)};Pt.prototype.close=function(){ju(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Nu(t),t=n);e.j.push(new uR(e.fb++,t)),e.H==3&&Qa(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,ju(this.g),delete this.g,Pt.$.N.call(this)};function E_(t){Lu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(E_,Lu);function w_(){Fu.call(this),this.status=1}Qe(w_,Fu);function ws(t){this.g=t}Qe(ws,v_);ws.prototype.Ba=function(){tt(this.g,"a")};ws.prototype.Aa=function(t){tt(this.g,new E_(t))};ws.prototype.za=function(t){tt(this.g,new w_)};ws.prototype.ya=function(){tt(this.g,"b")};function TR(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(qt,TR);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Vl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Vl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Vl(this,r),s=0;break}}this.h=s,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var IR={};function Hu(t){return-128<=t&&128>t?Ob(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function Yt(t){if(isNaN(t)||!isFinite(t))return Zr;if(0>t)return Xe(Yt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Rc;return new ge(e,0)}function T_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(T_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Yt(Math.pow(e,8)),r=Zr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Yt(Math.pow(e,i)),r=r.R(i).add(Yt(o))):(r=r.R(n),r=r.add(Yt(o)))}return r}var Rc=4294967296,Zr=Hu(0),Pc=Hu(1),_f=Hu(16777216);D=ge.prototype;D.ea=function(){if(Ct(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Rc+r)*e,e*=Rc}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(yn(this))return"0";if(Ct(this))return"-"+Xe(this).toString(t);for(var e=Yt(Math.pow(t,6)),n=this,r="";;){var s=ta(n,e).g;n=ea(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,yn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function yn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ct(t){return t.h==-1}D.X=function(t){return t=ea(this,t),Ct(t)?-1:yn(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(Pc)}D.abs=function(){return Ct(this)?Xe(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function ea(t,e){return t.add(Xe(e))}D.R=function(t){if(yn(this)||yn(t))return Zr;if(Ct(this))return Ct(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(Ct(t))return Xe(this.R(Xe(t)));if(0>this.X(_f)&&0>t.X(_f))return Yt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,uo(n,2*r+2*s),n[2*r+2*s+1]+=i*l,uo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,uo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,uo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function uo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ns(t,e){this.g=t,this.h=e}function ta(t,e){if(yn(e))throw Error("division by zero");if(yn(t))return new Ns(Zr,Zr);if(Ct(t))return e=ta(Xe(t),e),new Ns(Xe(e.g),Xe(e.h));if(Ct(e))return e=ta(t,Xe(e)),new Ns(Xe(e.g),e.h);if(30<t.g.length){if(Ct(t)||Ct(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Pc,r=e;0>=r.X(t);)n=yf(n),r=yf(r);var s=Mr(n,1),i=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!yn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Mr(r,1),n=Mr(n,1)}return e=ea(t,s.R(e)),new Ns(s,e)}for(s=Zr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Yt(n),o=i.R(e);Ct(o)||0<o.X(t);)n-=r,i=Yt(n),o=i.R(e);yn(i)&&(i=Pc),s=s.add(i),t=ea(t,o)}return new Ns(s,t)}D.gb=function(t){return ta(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function yf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function Mr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ge(s,t.h)}Zo.prototype.createWebChannel=Zo.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;ja.NO_ERROR=0;ja.TIMEOUT=8;ja.HTTP_ERROR=6;Ug.COMPLETE="complete";Bg.EventType=Bi;Bi.OPEN="a";Bi.CLOSE="b";Bi.ERROR="c";Bi.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;Me.prototype.listenOnce=Me.prototype.P;Me.prototype.getLastError=Me.prototype.Sa;Me.prototype.getLastErrorCode=Me.prototype.Ia;Me.prototype.getStatus=Me.prototype.da;Me.prototype.getResponseJson=Me.prototype.Wa;Me.prototype.getResponseText=Me.prototype.ja;Me.prototype.send=Me.prototype.ha;Me.prototype.setWithCredentials=Me.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=Yt;ge.fromString=T_;var AR=function(){return new Zo},bR=function(){return $a()},Ml=ja,RR=Ug,PR=kr,vf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},SR=qi,ho=Bg,CR=Me,kR=qt,es=ge;const Ef="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new du("@firebase/firestore");function Ds(){return Tr.logLevel}function B(t,...e){if(Tr.logLevel<=ie.DEBUG){const n=e.map(Ku);Tr.debug(`Firestore (${Ts}): ${t}`,...n)}}function In(t,...e){if(Tr.logLevel<=ie.ERROR){const n=e.map(Ku);Tr.error(`Firestore (${Ts}): ${t}`,...n)}}function ls(t,...e){if(Tr.logLevel<=ie.WARN){const n=e.map(Ku);Tr.warn(`Firestore (${Ts}): ${t}`,...n)}}function Ku(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function ve(t,e){t||G()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class NR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DR{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new I_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new lt(e)}}class xR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class VR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new MR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=FR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function cs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new He(0,0))}static max(){return new X(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ti?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Ti{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const UR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Ti{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return UR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Pe.fromString(e))}static fromName(e){return new z(Pe.fromString(e).popFirst(5))}static empty(){return new z(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Pe(e.slice()))}}function BR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Zn(s,z.empty(),e)}function $R(t){return new Zn(t.readTime,t.key,-1)}class Zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zn(X.min(),z.empty(),-1)}static max(){return new Zn(X.max(),z.empty(),-1)}}function jR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==qR)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function HR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wu.oe=-1;function Ja(t){return t==null}function na(t){return t===0&&1/t==-1/0}function KR(t){return typeof t=="number"&&Number.isInteger(t)&&!na(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tf(this.data.getIterator())}getIteratorFrom(e){return new Tf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class Tf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new nt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return cs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new R_("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const WR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(t){if(ve(!!t),typeof t=="string"){let e=0;const n=WR.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qu(t){const e=t.mapValue.fields.__previous_value__;return Gu(e)?Qu(e):e}function Ii(t){const e=er(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gu(t)?4:QR(t)?9007199254740991:10:G()}function rn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ii(t).isEqual(Ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=er(s.timestampValue),a=er(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),a=Be(i.doubleValue);return o===a?na(o)===na(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return cs(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(wf(o)!==wf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!rn(o[l],a[l])))return!1;return!0}(t,e);default:return G()}}function bi(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function us(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Be(i.integerValue||i.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return If(t.timestampValue,e.timestampValue);case 4:return If(Ii(t),Ii(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ir(i),l=Ir(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=de(a[c],l[c]);if(u!==0)return u}return de(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=de(Be(i.latitude),Be(o.latitude));return a!==0?a:de(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=us(a[c],l[c]);if(u)return u}return de(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===po.mapValue&&o===po.mapValue)return 0;if(i===po.mapValue)return 1;if(o===po.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=de(l[h],u[h]);if(d!==0)return d;const f=us(a[l[h]],c[u[h]]);if(f!==0)return f}return de(l.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function If(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=er(t),r=er(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function hs(t){return Sc(t)}function Sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sc(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function Cc(t){return!!t&&"integerValue"in t}function Ju(t){return!!t&&"arrayValue"in t}function Af(t){return!!t&&"nullValue"in t}function bf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oo(t){return!!t&&"mapValue"in t}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Oo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(ti(this.value))}}function P_(t){const e=[];return Is(t.fields,(n,r)=>{const s=new et([n]);if(Oo(r)){const i=P_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,X.min(),X.min(),X.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,X.min(),X.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,X.min(),X.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.position=e,this.inclusive=n}}function Rf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=us(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function JR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{}class qe extends S_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new XR(e,n,r):n==="array-contains"?new tP(e,r):n==="in"?new nP(e,r):n==="not-in"?new rP(e,r):n==="array-contains-any"?new sP(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ZR(e,r):new eP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(us(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends S_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new sn(e,n)}matches(e){return C_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function C_(t){return t.op==="and"}function k_(t){return YR(t)&&C_(t)}function YR(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function kc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(k_(t))return t.filters.map(e=>kc(e)).join(",");{const e=t.filters.map(n=>kc(n)).join(",");return`${t.op}(${e})`}}function O_(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&rn(r.value,s.value)}(t,e):t instanceof sn?function(r,s){return s instanceof sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&O_(o,s.filters[a]),!0):!1}(t,e):void G()}function N_(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(N_).join(" ,")+"}"}(t):"Filter"}class XR extends qe{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class ZR extends qe{constructor(e,n){super(e,"in",n),this.keys=D_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eP extends qe{constructor(e,n){super(e,"not-in",n),this.keys=D_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function D_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class tP extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ju(n)&&bi(n.arrayValue,this.value)}}class nP extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bi(this.value.arrayValue,n)}}class rP extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bi(this.value.arrayValue,n)}}class sP extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ju(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Sf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new iP(t,e,n,r,s,i,o)}function Yu(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hs(r)).join(",")),e.ue=n}return e.ue}function Xu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pf(t.startAt,e.startAt)&&Pf(t.endAt,e.endAt)}function Oc(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oP(t,e,n,r,s,i,o,a){return new Ya(t,e,n,r,s,i,o,a)}function x_(t){return new Ya(t)}function Cf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function aP(t){return t.collectionGroup!==null}function ni(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new sa(i,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new sa(et.keyField(),r))}return e.ce}function tn(t){const e=ee(t);return e.le||(e.le=lP(e,ni(t))),e.le}function lP(t,e){if(t.limitType==="F")return Sf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new sa(s.field,i)});const n=t.endAt?new ra(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ra(t.startAt.position,t.startAt.inclusive):null;return Sf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nc(t,e,n){return new Ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return Xu(tn(t),tn(e))&&t.limitType===e.limitType}function V_(t){return`${Yu(tn(t))}|lt:${t.limitType}`}function Br(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>N_(s)).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>hs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>hs(s)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function Za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=Rf(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ni(r),s)||r.endAt&&!function(o,a,l){const c=Rf(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ni(r),s))}(t,e)}function cP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function M_(t){return(e,n)=>{let r=!1;for(const s of ni(t)){const i=uP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uP(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?us(l,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return b_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=new xe(z.comparator);function An(){return hP}const L_=new xe(z.comparator);function js(...t){let e=L_;for(const n of t)e=e.insert(n.key,n);return e}function F_(t){let e=L_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fr(){return ri()}function U_(){return ri()}function ri(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const dP=new xe(z.comparator),fP=new nt(z.comparator);function se(...t){let e=fP;for(const n of t)e=e.add(n);return e}const pP=new nt(de);function mP(){return pP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:na(e)?"-0":e}}function $_(t){return{integerValue:""+t}}function gP(t,e){return KR(e)?$_(e):B_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this._=void 0}}function _P(t,e,n){return t instanceof ia?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gu(i)&&(i=Qu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ri?q_(t,e):t instanceof Pi?z_(t,e):function(s,i){const o=j_(s,i),a=kf(o)+kf(s.Pe);return Cc(o)&&Cc(s.Pe)?$_(a):B_(s.serializer,a)}(t,e)}function yP(t,e,n){return t instanceof Ri?q_(t,e):t instanceof Pi?z_(t,e):n}function j_(t,e){return t instanceof oa?function(r){return Cc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ia extends el{}class Ri extends el{constructor(e){super(),this.elements=e}}function q_(t,e){const n=H_(e);for(const r of t.elements)n.some(s=>rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Pi extends el{constructor(e){super(),this.elements=e}}function z_(t,e){let n=H_(e);for(const r of t.elements)n=n.filter(s=>!rn(s,r));return{arrayValue:{values:n}}}class oa extends el{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function kf(t){return Be(t.integerValue||t.doubleValue)}function H_(t){return Ju(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Pi&&s instanceof Pi?cs(r.elements,s.elements,rn):r instanceof oa&&s instanceof oa?rn(r.Pe,s.Pe):r instanceof ia&&s instanceof ia}(t.transform,e.transform)}class EP{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function No(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tl{}function K_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new G_(t.key,En.none()):new Gi(t.key,t.data,En.none());{const n=t.data,r=kt.empty();let s=new nt(et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Or(t.key,r,new Mt(s.toArray()),En.none())}}function wP(t,e,n){t instanceof Gi?function(s,i,o){const a=s.value.clone(),l=Nf(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(s,i,o){if(!No(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Nf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(W_(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof Gi?function(i,o,a,l){if(!No(i.precondition,o))return a;const c=i.value.clone(),u=Df(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(i,o,a,l){if(!No(i.precondition,o))return a;const c=Df(i.fieldTransforms,l,o),u=o.data;return u.setAll(W_(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return No(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function TP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=j_(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function Of(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&cs(r,s,(i,o)=>vP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gi extends tl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Or extends tl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function W_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,yP(o,a,n[s]))}return r}function Df(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,_P(i,o,e))}return r}class G_ extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IP extends tl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=U_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=K_(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&cs(this.mutations,e.mutations,(n,r)=>Of(n,r))&&cs(this.baseMutations,e.baseMutations,(n,r)=>Of(n,r))}}class Zu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=function(){return dP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ae;function PP(t){switch(t){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Q_(t){if(t===void 0)return In("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ue.OK:return b.OK;case Ue.CANCELLED:return b.CANCELLED;case Ue.UNKNOWN:return b.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return b.INTERNAL;case Ue.UNAVAILABLE:return b.UNAVAILABLE;case Ue.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ue.NOT_FOUND:return b.NOT_FOUND;case Ue.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ue.ABORTED:return b.ABORTED;case Ue.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ue.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(ae=Ue||(Ue={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=new es([4294967295,4294967295],0);function xf(t){const e=SP().encode(t),n=new kR;return n.update(e),new Uint8Array(n.digest())}function Vf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class eh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare(CP)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=xf(e),[r,s]=Vf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new eh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=xf(e),[r,s]=Vf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nl(X.min(),s,new xe(de),An(),se())}}class Qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qi(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class J_{constructor(e,n){this.targetId=e,this.me=n}}class Y_{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Mf{constructor(){this.fe=0,this.ge=Ff(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=se(),n=se(),r=se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Qi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Ff()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kP{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=Lf(),this.Qe=new xe(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Oc(i))if(r===0){const o=new z(i.path);this.Ue(n,o,ct.newNoDocument(o,X.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ir(r).toUint8Array()}catch(l){if(l instanceof R_)return ls("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new eh(o,s,i)}catch(l){return ls(l instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Oc(a.target)){const l=new z(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ct.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=se();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new nl(e,n,this.Qe,this.ke,r);return this.ke=An(),this.qe=Lf(),this.Qe=new xe(de),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Mf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Mf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Lf(){return new xe(z.comparator)}function Ff(){return new xe(z.comparator)}const OP={asc:"ASCENDING",desc:"DESCENDING"},NP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DP={and:"AND",or:"OR"};class xP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dc(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function X_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VP(t,e){return aa(t,e.toTimestamp())}function nn(t){return ve(!!t),X.fromTimestamp(function(n){const r=er(n);return new He(r.seconds,r.nanos)}(t))}function th(t,e){return xc(t,e).canonicalString()}function xc(t,e){const n=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Z_(t){const e=Pe.fromString(t);return ve(sy(e)),e}function Vc(t,e){return th(t.databaseId,e.path)}function Ll(t,e){const n=Z_(e);if(n.get(1)!==t.databaseId.projectId)throw new q(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(ty(n))}function ey(t,e){return th(t.databaseId,e)}function MP(t){const e=Z_(t);return e.length===4?Pe.emptyPath():ty(e)}function Mc(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ty(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uf(t,e,n){return{name:Vc(t,e),fields:n.value.mapValue.fields}}function LP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ve(u===void 0||typeof u=="string"),pt.fromBase64String(u||"")):(ve(u===void 0||u instanceof Buffer||u instanceof Uint8Array),pt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:Q_(c.code);return new q(u,c.message||"")}(o);n=new Y_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ll(t,r.document.name),i=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):X.min(),a=new kt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Do(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ll(t,r.document),i=r.readTime?nn(r.readTime):X.min(),o=ct.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Do([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ll(t,r.document),i=r.removedTargetIds||[];n=new Do([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RP(s,i),a=r.targetId;n=new J_(a,o)}}return n}function FP(t,e){let n;if(e instanceof Gi)n={update:Uf(t,e.key,e.value)};else if(e instanceof G_)n={delete:Vc(t,e.key)};else if(e instanceof Or)n={update:Uf(t,e.key,e.data),updateMask:WP(e.fieldMask)};else{if(!(e instanceof IP))return G();n={verify:Vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof oa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:VP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function UP(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?nn(s.updateTime):nn(i);return o.isEqual(X.min())&&(o=nn(i)),new EP(o,s.transformResults||[])}(n,e))):[]}function BP(t,e){return{documents:[ey(t,e.path)]}}function $P(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ey(t,s);const i=function(c){if(c.length!==0)return ry(sn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:$r(d.field),direction:zP(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Dc(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function jP(t){let e=MP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=ny(h);return d instanceof sn&&k_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new sa(jr(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ja(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ra(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ra(f,d)}(n.endAt)),oP(e,s,o,i,a,"F",l,c)}function qP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ny(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=jr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=jr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jr(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>ny(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function zP(t){return OP[t]}function HP(t){return NP[t]}function KP(t){return DP[t]}function $r(t){return{fieldPath:t.canonicalString()}}function jr(t){return et.fromServerFormat(t.fieldPath)}function ry(t){return t instanceof qe?function(n){if(n.op==="=="){if(bf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NAN"}};if(Af(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NAN"}};if(Af(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(n.field),op:HP(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(s=>ry(s));return r.length===1?r[0]:{compositeFilter:{op:KP(n.op),filters:r}}}(t):G()}function WP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,s,i=X.min(),o=X.min(),a=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.ut=e}}function QP(t){const e=jP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.on=new YP}addToCollectionParentIndex(e,n){return this.on.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Zn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class YP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ds(0)}static Nn(){return new ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,Mt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=js();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=An();const o=ri(),a=function(){return ri()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Or)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),si(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new ZP(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new xe((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Mt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||se()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=U_();u.forEach(d=>{if(!i.has(d)){const f=K_(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(fr());let a=-1,l=i;return o.next(c=>A.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,se())).next(u=>({batchId:a,changes:F_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let s=js();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=js();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,l=>{const c=function(h,d){return new Ya(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,ct.newInvalidDocument(u)))});let a=js();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&si(u.mutation,c,Mt.empty(),He.now()),Za(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:QP(s.bundledQuery),readTime:nn(s.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.overlays=new xe(z.comparator),this.lr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=fr(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=fr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return A.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bP(n,r));let i=this.lr.get(n);i===void 0&&(i=se(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.hr=new nt(We.Pr),this.Ir=new nt(We.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new We(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new We(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new z(new Pe([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new z(new Pe([])),r=new We(n,e),s=new We(n,e+1);let i=se();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return z.comparator(e.key,n.key)||de(e.gr,n.gr)}static Tr(e,n){return de(e.gr,n.gr)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new nt(We.Pr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(de);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new We(new z(i),0);let a=new nt(de);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),A.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new We(n,0),s=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.Cr=e,this.docs=function(){return new xe(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=An();const o=n.path,a=new z(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||jR($R(u),r)<=0||(s.has(u.key)||Za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iS(this)}getSize(e){return A.resolve(this.size)}}class iS extends XP{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.persistence=e,this.Fr=new As(n=>Yu(n),Xu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new nh,this.targetCount=0,this.Nr=ds.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.kn(n),A.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.Lr={},this.overlays={},this.Br=new Wu(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new oS(this),this.indexManager=new JP,this.remoteDocumentCache=function(s){return new sS(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new GP(n),this.Kr=new tS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new rS(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const s=new lS(this.Br.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return A.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class lS extends zR{constructor(e){super(),this.currentSequenceNumber=e}}class rh{constructor(e){this.persistence=e,this.Gr=new nh,this.zr=null}static jr(e){return new rh(e)}get Hr(){if(this.zr)return this.zr;throw G()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const s=z.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return QT()?8:HR(st())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new cS;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Ds()<=ie.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Br(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(Ds()<=ie.DEBUG&&B("QueryEngine","Query:",Br(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Ds()<=ie.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Br(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):A.resolve())}zi(e,n){if(Cf(n))return A.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Nc(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Nc(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,s){return Cf(n)||s.isEqual(X.min())?A.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?A.resolve(null):(Ds()<=ie.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Br(n)),this.Xi(e,o,n,BR(s,-1)).next(a=>a))})}Yi(e,n){let r=new nt(M_(e));return n.forEach((s,i)=>{Za(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Ds()<=ie.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Br(n)),this.Gi.getDocumentsMatchingQuery(e,n,Zn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new xe(de),this.ns=new As(i=>Yu(i),Xu),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eS(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function dS(t,e,n,r){return new hS(t,e,n,r)}async function iy(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=se();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function fS(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=A.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(_=>{const y=c.docVersions.get(g);ve(y!==null),_.version.compareTo(y)<0&&(h.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function oy(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function pS(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(pt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(_,y,I){return _.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(i,f))});let l=An(),c=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(mS(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(X.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function mS(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=An();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function gS(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _S(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Lc(t,e,n){const r=ee(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wi(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Bf(t,e,n){const r=ee(t);let s=X.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ee(l),d=h.ns.get(u);return d!==void 0?A.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,tn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:se())).next(a=>(yS(r,cP(e),a),{documents:a,ls:i})))}function yS(t,e,n){let r=t.rs.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class $f{constructor(){this.activeTargetIds=mP()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vS{constructor(){this.eo=new $f,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new $f,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo=null;function Fl(){return mo===null?mo=function(){return 268435456+Math.round(2147483648*Math.random())}():mo++,"0x"+mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class IS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${s}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get bo(){return!1}Do(n,r,s,i,o){const a=Fl(),l=this.Co(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(c,i,o),this.Fo(n,l,c,s).then(u=>(B("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ls("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Mo(n,r,s,i,o,a){return this.Do(n,r,s,i,o)}vo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Co(n,r){const s=wS[n];return`${this.yo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,s){const i=Fl();return new Promise((o,a)=>{const l=new CR;l.setWithCredentials(!0),l.listenOnce(RR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ml.NO_ERROR:const u=l.getResponseJson();B(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ml.TIMEOUT:B(at,`RPC '${e}' ${i} timed out`),a(new q(b.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const h=l.getStatus();if(B(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(f.status);a(new q(g,f.message))}else a(new q(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B(at,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);B(at,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}xo(e,n,r){const s=Fl(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=AR(),a=bR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new SR({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");B(at,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new TS({co:y=>{f?B(at,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(B(at,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),B(at,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},lo:()=>h.close()}),_=(y,I,S)=>{y.listen(I,C=>{try{S(C)}catch(L){setTimeout(()=>{throw L},0)}})};return _(h,ho.EventType.OPEN,()=>{f||(B(at,`RPC '${e}' stream ${s} transport opened.`),g.Vo())}),_(h,ho.EventType.CLOSE,()=>{f||(f=!0,B(at,`RPC '${e}' stream ${s} transport closed`),g.fo())}),_(h,ho.EventType.ERROR,y=>{f||(f=!0,ls(at,`RPC '${e}' stream ${s} transport errored:`,y),g.fo(new q(b.UNAVAILABLE,"The operation could not be completed")))}),_(h,ho.EventType.MESSAGE,y=>{var I;if(!f){const S=y.data[0];ve(!!S);const C=S,L=C.error||((I=C[0])===null||I===void 0?void 0:I.error);if(L){B(at,`RPC '${e}' stream ${s} received error:`,L);const W=L.status;let x=function(Ce){const ke=Ue[Ce];if(ke!==void 0)return Q_(ke)}(W),ne=L.message;x===void 0&&(x=b.INTERNAL,ne="Unknown error status: "+W+" with message "+L.message),f=!0,g.fo(new q(x,ne)),h.close()}else B(at,`RPC '${e}' stream ${s} received:`,S),g.po(S)}}),_(a,PR.STAT_EVENT,y=>{y.stat===vf.PROXY?B(at,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===vf.NOPROXY&&B(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.mo()},0),g}}function Ul(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){return new xP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=s,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),s=Math.max(0,n-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Wo=r,this.Go=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new ay(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.zo===n&&this.a_(r,s)},r=>{e(()=>{const s=new q(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(s)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.u_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AS extends ly{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=LP(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?nn(o.readTime):X.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=Mc(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Oc(l)?{documents:BP(i,l)}:{query:$P(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=X_(i,o.resumeToken);const c=Dc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=aa(i,o.snapshotVersion.toTimestamp());const c=Dc(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=qP(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=Mc(this.serializer),n.removeTarget=e,this.r_(n)}}class bS extends ly{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=UP(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.d_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Mc(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FP(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.V_=!1}m_(){if(this.V_)throw new q(b.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,xc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(b.UNKNOWN,i.toString())})}Mo(e,n,r,s,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,xc(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(b.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class PS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(In(n),this.y_=!1):B("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ee(l);c.M_.add(4),await Ji(c),c.N_.set("Unknown"),c.M_.delete(4),await sl(c)}(this))})}),this.N_=new PS(r,s)}}async function sl(t){if(Nr(t))for(const e of t.x_)await e(!0)}async function Ji(t){for(const e of t.x_)await e(!1)}function cy(t,e){const n=ee(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),lh(n)?ah(n):bs(n).Zo()&&oh(n,e))}function ih(t,e){const n=ee(t),r=bs(n);n.F_.delete(e),r.Zo()&&uy(n,e),n.F_.size===0&&(r.Zo()?r.t_():Nr(n)&&n.N_.set("Unknown"))}function oh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bs(t).h_(e)}function uy(t,e){t.L_.xe(e),bs(t).P_(e)}function ah(t){t.L_=new kP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),bs(t).start(),t.N_.w_()}function lh(t){return Nr(t)&&!bs(t).Yo()&&t.F_.size>0}function Nr(t){return ee(t).M_.size===0}function hy(t){t.L_=void 0}async function CS(t){t.N_.set("Online")}async function kS(t){t.F_.forEach((e,n)=>{oh(t,e)})}async function OS(t,e){hy(t),lh(t)?(t.N_.D_(e),ah(t)):t.N_.set("Unknown")}async function NS(t,e,n){if(t.N_.set("Online"),e instanceof Y_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Do?t.L_.Ke(e):e instanceof J_?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await oy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.F_.get(c);u&&i.F_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.F_.get(l);if(!u)return;i.F_.set(l,u.withResumeToken(pt.EMPTY_BYTE_STRING,u.snapshotVersion)),uy(i,l);const h=new jn(u.target,l,c,u.sequenceNumber);oh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Wi(e))throw e;t.M_.add(1),await Ji(t),t.N_.set("Offline"),n||(n=()=>oy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await sl(t)})}function dy(t,e){return e().catch(n=>la(t,n,e))}async function il(t){const e=ee(t),n=tr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;DS(e);)try{const s=await gS(e.localStore,r);if(s===null){e.v_.length===0&&n.t_();break}r=s.batchId,xS(e,s)}catch(s){await la(e,s)}fy(e)&&py(e)}function DS(t){return Nr(t)&&t.v_.length<10}function xS(t,e){t.v_.push(e);const n=tr(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function fy(t){return Nr(t)&&!tr(t).Yo()&&t.v_.length>0}function py(t){tr(t).start()}async function VS(t){tr(t).R_()}async function MS(t){const e=tr(t);for(const n of t.v_)e.E_(n.mutations)}async function LS(t,e,n){const r=t.v_.shift(),s=Zu.from(r,e,n);await dy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await il(t)}async function FS(t,e){e&&tr(t).T_&&await async function(r,s){if(function(o){return PP(o)&&o!==b.ABORTED}(s.code)){const i=r.v_.shift();tr(r).e_(),await dy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await il(r)}}(t,e),fy(t)&&py(t)}async function qf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Nr(n);n.M_.add(3),await Ji(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await sl(n)}async function US(t,e){const n=ee(t);e?(n.M_.delete(2),await sl(n)):e||(n.M_.add(2),await Ji(n),n.N_.set("Unknown"))}function bs(t){return t.B_||(t.B_=function(n,r,s){const i=ee(n);return i.m_(),new AS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:CS.bind(null,t),Io:kS.bind(null,t),Eo:OS.bind(null,t),l_:NS.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),lh(t)?ah(t):t.N_.set("Unknown")):(await t.B_.stop(),hy(t))})),t.B_}function tr(t){return t.k_||(t.k_=function(n,r,s){const i=ee(n);return i.m_(),new bS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:VS.bind(null,t),Eo:FS.bind(null,t),A_:MS.bind(null,t),d_:LS.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await il(t)):(await t.k_.stop(),t.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ch(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uh(t,e){if(In("AsyncQueue",`${e}: ${t}`),Wi(t))return new q(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=js(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.q_=new xe(z.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):G():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fs{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fs(e,n,ts.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class $S{constructor(){this.queries=new As(e=>V_(e),Xa),this.onlineState="Unknown",this.z_=new Set}}async function jS(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new BS,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=uh(o,`Initialization of query '${Br(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&hh(n)}async function qS(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zS(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&hh(n)}function HS(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function hh(t){t.z_.forEach(e=>{e.next()})}var Fc,Hf;(Hf=Fc||(Fc={})).J_="default",Hf.Cache="cache";class KS{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Fc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.key=e}}class gy{constructor(e){this.key=e}}class WS{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=se(),this.mutatedKeys=se(),this.Ia=M_(e),this.Ta=new ts(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new zf,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Za(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(r.track({type:3,doc:f}),y=!0):this.Ra(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.Ia(f,l)>0||c&&this.Ia(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),i=_?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(f,g){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return _(f)-_(g)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new fs(this.query,e.Ta,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new zf,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=se(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new gy(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new my(r))}),n}pa(e){this.la=e.ls,this.Pa=se();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return fs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class GS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QS{constructor(e){this.key=e,this.wa=!1}}class JS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new As(a=>V_(a),Xa),this.Da=new Map,this.Ca=new Set,this.va=new xe(z.comparator),this.Fa=new Map,this.Ma=new nh,this.xa={},this.Oa=new Map,this.Na=ds.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function YS(t,e,n=!0){const r=Ty(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await _y(r,e,n,!0),s}async function XS(t,e){const n=Ty(t);await _y(n,e,!0,!1)}async function _y(t,e,n,r){const s=await _S(t.localStore,tn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await ZS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&cy(t.remoteStore,s),a}async function ZS(t,e,n,r,s){t.Ba=(h,d,f)=>async function(_,y,I,S){let C=y.view.da(I);C.Zi&&(C=await Bf(_.localStore,y.query,!1).then(({documents:ne})=>y.view.da(ne,C)));const L=S&&S.targetChanges.get(y.targetId),W=S&&S.targetMismatches.get(y.targetId)!=null,x=y.view.applyChanges(C,_.isPrimaryClient,L,W);return Wf(_,y.targetId,x.fa),x.snapshot}(t,h,d,f);const i=await Bf(t.localStore,e,!0),o=new WS(e,i.ls),a=o.da(i.documents),l=Qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Wf(t,n,c.fa);const u=new GS(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function eC(t,e,n){const r=ee(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Xa(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ih(r.remoteStore,s.targetId),Uc(r,s.targetId)}).catch(Ki)):(Uc(r,s.targetId),await Lc(r.localStore,s.targetId,!0))}async function tC(t,e){const n=ee(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ih(n.remoteStore,r.targetId))}async function nC(t,e,n){const r=cC(t);try{const s=await function(o,a){const l=ee(o),c=He.now(),u=a.reduce((f,g)=>f.add(g.key),se());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=An(),_=se();return l.ss.getEntries(f,u).next(y=>{g=y,g.forEach((I,S)=>{S.isValidDocument()||(_=_.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(y=>{h=y;const I=[];for(const S of a){const C=TP(S,h.get(S.key).overlayedDocument);C!=null&&I.push(new Or(S.key,C,P_(C.value.mapValue),En.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,I,a)}).next(y=>{d=y;const I=y.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(f,y.batchId,I)})}).then(()=>({batchId:d.batchId,changes:F_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new xe(de)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Yi(r,s.changes),await il(r.remoteStore)}catch(s){const i=uh(s,"Failed to persist write");n.reject(i)}}async function yy(t,e){const n=ee(t);try{const r=await pS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?ve(o.wa):s.removedDocuments.size>0&&(ve(o.wa),o.wa=!1))}),await Yi(n,r,e)}catch(r){await Ki(r)}}function Kf(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.U_)d.j_(a)&&(c=!0)}),c&&hh(l)}(r.eventManager,e),s.length&&r.Sa.l_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rC(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new xe(z.comparator);o=o.insert(i,ct.newNoDocument(i,X.min()));const a=se().add(i),l=new nl(X.min(),new Map,new xe(de),o,a);await yy(r,l),r.va=r.va.remove(i),r.Fa.delete(e),dh(r)}else await Lc(r.localStore,e,!1).then(()=>Uc(r,e,n)).catch(Ki)}async function sC(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await fS(n.localStore,e);Ey(n,r,null),vy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yi(n,s)}catch(s){await Ki(s)}}async function iC(t,e,n){const r=ee(t);try{const s=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ve(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Ey(r,e,n),vy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yi(r,s)}catch(s){await Ki(s)}}function vy(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Ey(t,e,n){const r=ee(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Uc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||wy(t,r)})}function wy(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(ih(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),dh(t))}function Wf(t,e,n){for(const r of n)r instanceof my?(t.Ma.addReference(r.key,e),oC(t,r)):r instanceof gy?(B("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||wy(t,r.key)):G()}function oC(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(B("SyncEngine","New document in limbo: "+n),t.Ca.add(r),dh(t))}function dh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new z(Pe.fromString(e)),r=t.Na.next();t.Fa.set(r,new QS(n)),t.va=t.va.insert(n,r),cy(t.remoteStore,new jn(tn(x_(n.path)),r,"TargetPurposeLimboResolution",Wu.oe))}}async function Yi(t,e,n){const r=ee(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=sh.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Sa.l_(s),await async function(l,c){const u=ee(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(c,d=>A.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>A.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Wi(h))throw h;B("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),g=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(g);u.ts=u.ts.insert(d,_)}}}(r.localStore,i))}async function aC(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await iy(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(l=>{l.reject(new q(b.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yi(n,r._s)}}function lC(t,e){const n=ee(t),r=n.Fa.get(e);if(r&&r.wa)return se().add(r.key);{let s=se();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function Ty(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rC.bind(null,e),e.Sa.l_=zS.bind(null,e.eventManager),e.Sa.ka=HS.bind(null,e.eventManager),e}function cC(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iC.bind(null,e),e}class Gf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dS(this.persistence,new uS,e.initialUser,this.serializer)}createPersistence(e){return new aS(rh.jr,this.serializer)}createSharedClientState(e){return new vS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aC.bind(null,this.syncEngine),await US(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $S}()}createDatastore(e){const n=rl(e.databaseInfo.databaseId),r=function(i){return new IS(i)}(e.databaseInfo);return function(i,o,a,l){return new RS(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new SS(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Kf(this.syncEngine,n,0),function(){return jf.D()?new jf:new ES}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new JS(s,i,o,a,l,c);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ee(r);B("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Ji(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=A_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{B("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(B("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bl(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await iy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pC(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>qf(e.remoteStore,s)),t._onlineComponents=e}function fC(t){return t.name==="FirebaseError"?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function pC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fC(n))throw n;ls("Error using user provided cache. Falling back to memory cache: "+n),await Bl(t,new Gf)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Bl(t,new Gf);return t._offlineComponents}async function Iy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Qf(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Qf(t,new uC))),t._onlineComponents}function mC(t){return Iy(t).then(e=>e.syncEngine)}async function gC(t){const e=await Iy(t),n=e.eventManager;return n.onListen=YS.bind(null,e.syncEngine),n.onUnlisten=eC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tC.bind(null,e.syncEngine),n}function _C(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new hC({next:d=>{o.enqueueAndForget(()=>qS(i,h)),d.fromCache&&l.source==="server"?c.reject(new q(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new KS(a,u,{includeMetadataChanges:!0,ra:!0});return jS(i,h)}(await gC(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t,e,n){if(!n)throw new q(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yC(t,e,n,r){if(e===!0&&r===!0)throw new q(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yf(t){if(!z.isDocumentKey(t))throw new q(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xf(t){if(z.isDocumentKey(t))throw new q(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ca(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fh(t);throw new q(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ay((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ol{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OR;switch(r.type){case"firstParty":return new VR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jf.get(n);r&&(B("ComponentProvider","Removing Datastore"),Jf.delete(n),r.terminate())}(this),Promise.resolve()}}function vC(t,e,n,r={}){var s;const i=(t=ca(t,ol))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=lt.MOCK_USER;else{a=Mm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new lt(c)}t._authCredentials=new NR(new I_(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new al(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Qn extends al{constructor(e,n,r){super(e,n,x_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new z(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function p1(t,e,...n){if(t=Tt(t),by("collection","path",e),t instanceof ol){const r=Pe.fromString(e,...n);return Xf(r),new Qn(t,null,r)}{if(!(t instanceof Bt||t instanceof Qn))throw new q(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Xf(r),new Qn(t.firestore,null,r)}}function EC(t,e,...n){if(t=Tt(t),arguments.length===1&&(e=A_.newId()),by("doc","path",e),t instanceof ol){const r=Pe.fromString(e,...n);return Yf(r),new Bt(t,null,new z(r))}{if(!(t instanceof Bt||t instanceof Qn))throw new q(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Yf(r),new Bt(t.firestore,t instanceof Qn?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new ay(this,"async_queue_retry"),this.hu=()=>{const n=Ul();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=Ul();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Gn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!Wi(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=ch.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&G()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class ph extends ol{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new wC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Py(this),this._firestoreClient.terminate()}}function TC(t,e){const n=typeof t=="object"?t:pu(),r=typeof t=="string"?t:e||"(default)",s=Ca(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dm("firestore");i&&vC(s,...i)}return s}function Ry(t){return t._firestoreClient||Py(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Py(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new GR(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ay(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new dC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ps(pt.fromBase64String(e))}catch(n){throw new q(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ps(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=/^__.*__$/;class AC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gi(e,this.data,n,this.fieldTransforms)}}function Cy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ua(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Cy(this.fu)&&IC.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class bC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rl(e)}Fu(e,n,r,s=!1){return new _h({fu:e,methodName:n,vu:r,path:et.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RC(t){const e=t._freezeSettings(),n=rl(t._databaseId);return new bC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function PC(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);Dy("Data must be an object, but it was:",o,r);const a=Oy(r,o);let l,c;if(i.merge)l=new Mt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=SC(e,h,n);if(!o.contains(d))throw new q(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kC(u,d)||u.push(d)}l=new Mt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new AC(new kt(a),l,c)}function ky(t,e){if(Ny(t=Tt(t)))return Dy("Unsupported field value:",e,t),Oy(t,e);if(t instanceof Sy)return function(r,s){if(!Cy(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ky(a,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:aa(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:aa(s.serializer,i)}}if(r instanceof gh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ps)return{bytesValue:X_(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:th(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${fh(r)}`)}(t,e)}function Oy(t,e){const n={};return b_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(r,s)=>{const i=ky(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ny(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof gh||t instanceof ps||t instanceof Bt||t instanceof Sy)}function Dy(t,e,n){if(!Ny(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=fh(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function SC(t,e,n){if((e=Tt(e))instanceof mh)return e._internalPath;if(typeof e=="string")return xy(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const CC=new RegExp("[~\\*/\\[\\]]");function xy(t,e,n){if(e.search(CC)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mh(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new q(b.INVALID_ARGUMENT,a+t+l)}function kC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(My("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OC extends Vy{data(){return super.data()}}function My(t,e){return typeof e=="string"?xy(t,e):e instanceof mh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class DC{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new gh(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const n=er(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);ve(sy(r));const s=new Ai(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VC extends Vy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(My("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xo extends VC{data(e={}){return super.data(e)}}class MC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new go(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xo(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new xo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new go(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new xo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new go(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:LC(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class FC extends DC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ps(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function m1(t){t=ca(t,al);const e=ca(t.firestore,ph),n=Ry(e),r=new FC(e);return NC(t._query),_C(n,t._query).then(s=>new MC(e,r,t,s))}function g1(t,e){const n=ca(t.firestore,ph),r=EC(t),s=xC(t.converter,e);return UC(n,[PC(RC(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,En.exists(!1))]).then(()=>r)}function UC(t,e){return function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget(async()=>nC(await mC(r),s,i)),i.promise}(Ry(t),e)}(function(e,n=!0){(function(s){Ts=s})(Sr),Er(new Xn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ph(new DR(r.getProvider("auth-internal")),new LR(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Xt(Ef,"4.6.1",e),Xt(Ef,"4.6.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="firebasestorage.googleapis.com",BC="storageBucket",$C=2*60*1e3,jC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends an{constructor(e,n,r=0){super($l(e),`Firebase Storage: ${n} (${$l(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ln.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $l(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var on;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(on||(on={}));function $l(t){return"storage/"+t}function qC(){const t="An unknown error occurred, please check the error payload for server response.";return new ln(on.UNKNOWN,t)}function zC(){return new ln(on.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HC(){return new ln(on.CANCELED,"User canceled the upload/download.")}function KC(t){return new ln(on.INVALID_URL,"Invalid URL '"+t+"'.")}function WC(t){return new ln(on.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ep(t){return new ln(on.INVALID_ARGUMENT,t)}function Fy(){return new ln(on.APP_DELETED,"The Firebase app was deleted.")}function GC(t){return new ln(on.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(r.path==="")return r;throw WC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),g={bucket:1,path:3},_=n===Ly?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",I=new RegExp(`^https?://${_}/${s}/${y}`,"i"),C=[{regex:a,indices:l,postModify:i},{regex:f,indices:g,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<C.length;L++){const W=C[L],x=W.regex.exec(e);if(x){const ne=x[W.indices.bucket];let fe=x[W.indices.path];fe||(fe=""),r=new Lt(ne,fe),W.postModify(r);break}}if(r==null)throw KC(e);return r}}class QC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(f,l())},y)}function d(){i&&clearTimeout(i)}function f(y,...I){if(c){d();return}if(y){d(),u.call(null,y,...I);return}if(l()||o){d(),u.call(null,y,...I);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,h(C)}let g=!1;function _(y){g||(g=!0,d(),!c&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function YC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t){return t!==void 0}function tp(t,e,n,r){if(r<e)throw ep(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ep(`Invalid value for '${t}'. Expected ${n} or less.`)}function ZC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ha;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ha||(ha={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new _o(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ha.NO_ERROR,l=i.getStatus();if(!a||ek(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===ha.ABORT;r(!1,new _o(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new _o(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());XC(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=qC();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Fy():HC();o(l)}else{const l=zC();o(l)}};this.canceled_?n(!1,new _o(!1,null,!0)):this.backoffId_=JC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _o{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ik(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ok(t,e,n,r,s,i,o=!0){const a=ZC(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return sk(c,e),nk(c,n),rk(c,i),ik(c,r),new tk(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new da(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lk(this._location.path)}get storage(){return this._service}get parent(){const e=ak(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new da(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw GC(e)}}function np(t,e){const n=e==null?void 0:e[BC];return n==null?null:Lt.makeFromBucketSpec(n,t)}function ck(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Mm(s,t.app.options.projectId))}class uk{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ly,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$C,this._maxUploadRetryTime=jC,this._requests=new Set,s!=null?this._bucket=Lt.makeFromBucketSpec(s,this._host):this._bucket=np(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=np(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new da(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new QC(Fy());{const o=ok(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const rp="@firebase/storage",sp="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="storage";function hk(t=pu(),e){t=Tt(t);const r=Ca(t,Uy).getImmediate({identifier:e}),s=Dm("storage");return s&&dk(r,...s),r}function dk(t,e,n,r={}){ck(t,e,n,r)}function fk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new uk(n,r,s,e,Sr)}function pk(){Er(new Xn(Uy,fk,"PUBLIC").setMultipleInstances(!0)),Xt(rp,sp,""),Xt(rp,sp,"esm2017")}pk();const mk={apiKey:"AIzaSyDkl0Q1I7_KM2gQnZQ8UnIcFkIjFL6cMJA",authDomain:"cardscanner-101.firebaseapp.com",projectId:"cardscanner-101",storageBucket:"cardscanner-101.appspot.com",messagingSenderId:"356088795075",appId:"1:356088795075:web:520456ff55d9ab317e7776"},yh=Um(mk),Bc=Tb(yh),_1=TC(yh);hk(yh);function By(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=By(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function gk(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=By(t))&&(r&&(r+=" "),r+=e);return r}const ip=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,op=gk,_k=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return op(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:i}=e,o=Object.keys(s).map(c=>{const u=n==null?void 0:n[c],h=i==null?void 0:i[c];if(u===null)return null;const d=ip(u)||ip(h);return s[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,d]=u;return d===void 0||(c[h]=d),c},{}),l=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:h,className:d,...f}=u;return Object.entries(f).every(g=>{let[_,y]=g;return Array.isArray(y)?y.includes({...i,...a}[_]):{...i,...a}[_]===y})?[...c,h,d]:c},[]);return op(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};function vh(t,e){const n=typeof t=="string"&&!e?`${t}Context`:e,r=Symbol(n);return[s=>{const i=Ut(r,s);if(i||i===null)return i;throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(t)?`one of the following components: ${t.join(", ")}`:`\`${t}\``}`)},s=>(Gs(r,s),s)]}function $y(t,e,n){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),r.dispatchEvent(s)}function jy(t){return Ip()?(yv(t),!0):!1}function yk(t){let e=!1,n;const r=Gc(!0);return(...s)=>(e||(n=r.run(()=>t(...s)),e=!0),n)}function vk(t){let e=0,n,r;const s=()=>{e-=1,r&&e<=0&&(r.stop(),n=void 0,r=void 0)};return(...i)=>(e+=1,n||(r=Gc(!0),n=r.run(()=>t(...i))),jy(s),n)}function Eh(t){return typeof t=="function"?t():N(t)}const Rs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ek=t=>typeof t<"u",wk=Object.prototype.toString,Tk=t=>wk.call(t)==="[object Object]",Ik=()=>{},ap=Ak();function Ak(){var t,e;return Rs&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function bk(t){return t||Pr()}function Rk(t,e){bk(e)&&em(t,e)}function ll(t){var e;const n=Eh(t);return(e=n==null?void 0:n.$el)!=null?e:n}const qy=Rs?window:void 0;function zy(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=qy):[e,n,r,s]=t,!e)return Ik;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=vt(()=>[ll(e),Eh(s)],([u,h])=>{if(o(),!u)return;const d=Tk(h)?{...h}:h;i.push(...n.flatMap(f=>r.map(g=>a(u,f,g,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return jy(c),c}function Pk(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function Sk(...t){let e,n,r={};t.length===3?(e=t[0],n=t[1],r=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],r=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:s=qy,eventName:i="keydown",passive:o=!1,dedupe:a=!1}=r,l=Pk(e);return zy(s,i,c=>{c.repeat&&Eh(a)||l(c)&&n(c)},o)}function Ck(){const t=Ve(!1),e=Pr();return e&&ou(()=>{t.value=!0},e),t}function kk(t){return JSON.parse(JSON.stringify(t))}function $c(t,e,n,r={}){var s,i,o;const{clone:a=!1,passive:l=!1,eventName:c,deep:u=!1,defaultValue:h,shouldEmit:d}=r,f=Pr(),g=n||(f==null?void 0:f.emit)||((s=f==null?void 0:f.$emit)==null?void 0:s.bind(f))||((o=(i=f==null?void 0:f.proxy)==null?void 0:i.$emit)==null?void 0:o.bind(f==null?void 0:f.proxy));let _=c;e||(e="modelValue"),_=_||`update:${e.toString()}`;const y=C=>a?typeof a=="function"?a(C):kk(C):C,I=()=>Ek(t[e])?y(t[e]):h,S=C=>{d?d(C)&&g(_,C):g(_,C)};if(l){const C=I(),L=Ve(C);let W=!1;return vt(()=>t[e],x=>{W||(W=!0,L.value=y(x),bn(()=>W=!1))}),vt(L,x=>{!W&&(x!==t[e]||u)&&S(x)},{deep:u}),L}else return Ie({get(){return I()},set(C){S(C)}})}function wh(t){return t?t.flatMap(e=>e.type===St?wh(e.children):[e]):[]}function jl(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function jc(t,e,n=".",r){if(!jl(e))return jc(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:jl(o)&&jl(s[i])?s[i]=jc(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function Ok(t){return(...e)=>e.reduce((n,r)=>jc(n,r,"",t),{})}const Nk=Ok(),[Hy,y1]=vh("ConfigProvider");let Dk="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",xk=(t=21)=>{let e="",n=t;for(;n--;)e+=Dk[Math.random()*64|0];return e};const Vk=vk(()=>{const t=Ve(new Map),e=Ve(),n=Ie(()=>{for(const o of t.value.values())if(o)return!0;return!1}),r=Hy({scrollBody:Ve(!0)});let s=null;const i=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.body.style.removeProperty("--scrollbar-width"),document.body.style.overflow=e.value??"",ap&&(s==null||s()),e.value=void 0};return vt(n,(o,a)=>{var l;if(!Rs)return;if(!o){a&&i();return}e.value===void 0&&(e.value=document.body.style.overflow);const c=window.innerWidth-document.documentElement.clientWidth,u={padding:c,margin:0},h=(l=r.scrollBody)!=null&&l.value?typeof r.scrollBody.value=="object"?Nk({padding:r.scrollBody.value.padding===!0?c:r.scrollBody.value.padding,margin:r.scrollBody.value.margin===!0?c:r.scrollBody.value.margin},u):u:{padding:0,margin:0};c>0&&(document.body.style.paddingRight=`${h.padding}px`,document.body.style.marginRight=`${h.margin}px`,document.body.style.setProperty("--scrollbar-width",`${c}px`),document.body.style.overflow="hidden"),ap&&(s=zy(document,"touchmove",d=>{var f;d.target===document.documentElement&&(d.touches.length>1||(f=d.preventDefault)==null||f.call(d))},{passive:!1})),bn(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),t});function Mk(t){const e=xk(6),n=Vk();n.value.set(e,t??!1);const r=Ie({get:()=>n.value.get(e)??!1,set:s=>n.value.set(e,s)});return Rk(()=>{n.value.delete(e)}),r}function cl(t){const e=Pr(),n=e==null?void 0:e.type.emits,r={};return n!=null&&n.length||console.warn(`No emitted event found. Please check component: ${e==null?void 0:e.type.__name}`),n==null||n.forEach(s=>{r[To(Nt(s))]=(...i)=>t(s,...i)}),r}function Lk(t){const e=Pr(),n=Object.keys((e==null?void 0:e.type.props)??{}).reduce((s,i)=>{const o=(e==null?void 0:e.type.props[i]).default;return o!==void 0&&(s[i]=o),s},{}),r=Hv(t);return Ie(()=>{const s={},i=(e==null?void 0:e.vnode.props)??{};return Object.keys(i).forEach(o=>{s[Nt(o)]=i[o]}),Object.keys({...n,...s}).reduce((o,a)=>(r.value[a]!==void 0&&(o[a]=r.value[a]),o),{})})}function v1(t,e){const n=Lk(t),r=e?cl(e):{};return Ie(()=>({...n.value,...r}))}function It(){const t=Pr(),e=Ve(),n=Ie(()=>{var o,a;return["#text","#comment"].includes((o=e.value)==null?void 0:o.$el.nodeName)?(a=e.value)==null?void 0:a.$el.nextElementSibling:ll(e)}),r=Object.assign({},t.exposed),s={};for(const o in t.props)Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>t.props[o]});if(Object.keys(r).length>0)for(const o in r)Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>r[o]});Object.defineProperty(s,"$el",{enumerable:!0,configurable:!0,get:()=>t.vnode.el}),t.exposed=s;function i(o){e.value=o,!(o instanceof Element||!o)&&(Object.defineProperty(s,"$el",{enumerable:!0,configurable:!0,get:()=>o.$el}),t.exposed=s)}return{forwardRef:i,currentRef:e,currentElement:n}}var Fk=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},Lr=new WeakMap,yo=new WeakMap,vo={},ql=0,Ky=function(t){return t&&(t.host||Ky(t.parentNode))},Uk=function(t,e){return e.map(function(n){if(t.contains(n))return n;var r=Ky(n);return r&&t.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},Bk=function(t,e,n,r){var s=Uk(e,Array.isArray(t)?t:[t]);vo[n]||(vo[n]=new WeakMap);var i=vo[n],o=[],a=new Set,l=new Set(s),c=function(h){!h||a.has(h)||(a.add(h),c(h.parentNode))};s.forEach(c);var u=function(h){!h||l.has(h)||Array.prototype.forEach.call(h.children,function(d){if(a.has(d))u(d);else{var f=d.getAttribute(r),g=f!==null&&f!=="false",_=(Lr.get(d)||0)+1,y=(i.get(d)||0)+1;Lr.set(d,_),i.set(d,y),o.push(d),_===1&&g&&yo.set(d,!0),y===1&&d.setAttribute(n,"true"),g||d.setAttribute(r,"true")}})};return u(e),a.clear(),ql++,function(){o.forEach(function(h){var d=Lr.get(h)-1,f=i.get(h)-1;Lr.set(h,d),i.set(h,f),d||(yo.has(h)||h.removeAttribute(r),yo.delete(h)),f||h.removeAttribute(n)}),ql--,ql||(Lr=new WeakMap,Lr=new WeakMap,yo=new WeakMap,vo={})}},$k=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),s=e||Fk(t);return s?(r.push.apply(r,Array.from(s.querySelectorAll("[aria-live]"))),Bk(r,s,n,"aria-hidden")):function(){return null}};function jk(t){let e;vt(()=>ll(t),n=>{n?e=$k(n):e&&e()}),wa(()=>{e&&e()})}let qk=0;function lp(t,e="radix"){if(t)return t;const{useId:n}=Hy({useId:void 0});return n&&typeof n=="function"?`${e}-${n()}`:`${e}-${++qk}`}function zk(t,e){const n=Ve(t);function r(s){return e[n.value][s]??n.value}return{state:n,dispatch:s=>{n.value=r(s)}}}function Hk(t){let e;const n=[],r=[];for(let s=0;s<t.length;s++){const i=t[s];if(e)r.push(i);else{if(i.type===Symbol.for("v-cmt")){n.push(i);continue}e=i}}return{firstChildren:e,otherChildren:r,commentChildrenBeforeFirst:n}}const Kk=Le({name:"PrimitiveSlot",inheritAttrs:!1,setup(t,{attrs:e,slots:n}){return()=>{var r,s;if(!n.default)return null;const i=wh(n.default()),{firstChildren:o,otherChildren:a,commentChildrenBeforeFirst:l}=Hk(i);if(o){(r=o.props)==null||delete r.ref;const c=wt(e,o.props??{});e.class&&(s=o.props)!=null&&s.class&&delete o.props.class;const u=yr(o,c);for(const h in c)h.startsWith("on")&&(u.props||(u.props={}),u.props[h]=c[h]);return l.length?[...l,u,...a]:[u,...a]}return i}}}),cn=Le({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(t,{attrs:e,slots:n}){const r=t.asChild?"template":t.as;return typeof r=="string"&&["area","img","input"].includes(r)?()=>Qr(r,e):r!=="template"?()=>Qr(t.as,e,{default:n.default}):()=>Qr(Kk,e,{default:n.default})}});function Wk(t,e){const n=Ve({}),r=Ve("none"),s=t.value?"mounted":"unmounted",{state:i,dispatch:o}=zk(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});vt(t,async(h,d)=>{var f;const g=d!==h;if(await bn(),g){const _=r.value,y=Eo(e.value);h?o("MOUNT"):y==="none"||((f=n.value)==null?void 0:f.display)==="none"?o("UNMOUNT"):o(d&&_!==y?"ANIMATION_OUT":"UNMOUNT")}},{immediate:!0});const a=h=>{const d=Eo(e.value),f=d.includes(h.animationName);h.target===e.value&&f&&o("ANIMATION_END"),h.target===e.value&&d==="none"&&o("ANIMATION_END")},l=h=>{h.target===e.value&&(r.value=Eo(e.value))},c=vt(e,(h,d)=>{h?(n.value=getComputedStyle(h),h.addEventListener("animationstart",l),h.addEventListener("animationcancel",a),h.addEventListener("animationend",a)):(o("ANIMATION_END"),d==null||d.removeEventListener("animationstart",l),d==null||d.removeEventListener("animationcancel",a),d==null||d.removeEventListener("animationend",a))},{immediate:!0}),u=vt(i,()=>{const h=Eo(e.value);r.value=i.value==="mounted"?h:"none"});return wa(()=>{c(),u()}),{isPresent:Ie(()=>["mounted","unmountSuspended"].includes(i.value))}}function Eo(t){return t&&getComputedStyle(t).animationName||"none"}const Wy=Le({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(t,{slots:e,expose:n}){var r;const{present:s,forceMount:i}=jp(t),o=Ve(),{isPresent:a}=Wk(s,o);n({present:a});let l=e.default({present:a});l=wh(l||[]);const c=Pr();if(l&&(l==null?void 0:l.length)>1){const u=(r=c==null?void 0:c.parent)!=null&&r.type.name?`<${c.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${u}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(h=>`  - ${h}`).join(`
`)].join(`
`))}return()=>i.value||s.value||a.value?Qr(e.default({present:a})[0],{ref:u=>{const h=ll(u);return typeof(h==null?void 0:h.hasAttribute)>"u"||(h!=null&&h.hasAttribute("data-radix-popper-content-wrapper")?o.value=h.firstElementChild:o.value=h),h}}):null}}),[Pn,Gk]=vh("DialogRoot"),E1=Le({__name:"DialogRoot",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(t,{emit:e}){const n=t,r=$c(n,"open",e,{defaultValue:n.defaultOpen,passive:n.open===void 0}),s=Ve(),i=Ve(),{modal:o}=jp(n);return Gk({open:r,modal:o,openModal:()=>{r.value=!0},onOpenChange:a=>{r.value=a},onOpenToggle:()=>{r.value=!r.value},contentId:"",titleId:"",descriptionId:"",triggerElement:s,contentElement:i}),(a,l)=>$e(a.$slots,"default")}}),Qk=Le({__name:"Teleport",props:{to:{default:"body"},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=Ck();return(n,r)=>N(e)||n.forceMount?(Se(),De(UE,{key:0,to:n.to,disabled:n.disabled},[$e(n.$slots,"default")],8,["to","disabled"])):pm("",!0)}}),w1=Le({__name:"DialogPortal",props:{to:{},disabled:{type:Boolean},forceMount:{type:Boolean}},setup(t){const e=t;return(n,r)=>(Se(),De(N(Qk),fv(fm(e)),{default:ye(()=>[$e(n.$slots,"default")]),_:3},16))}}),Jk="dismissableLayer.pointerDownOutside",Yk="dismissableLayer.focusOutside";function Gy(t,e){const n=e.closest("[data-dismissable-layer]"),r=t.querySelector("[data-dismissable-layer]"),s=Array.from(t.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(n&&r===n||s.indexOf(r)<s.indexOf(n))}function Xk(t,e){var n;const r=((n=e==null?void 0:e.value)==null?void 0:n.ownerDocument)??(globalThis==null?void 0:globalThis.document),s=Ve(!1),i=Ve(()=>{});return rs(o=>{if(!Rs)return;const a=async c=>{const u=c.target;if(e!=null&&e.value){if(Gy(e.value,u)){s.value=!1;return}if(c.target&&!s.value){let h=function(){$y(Jk,t,d)};const d={originalEvent:c};c.pointerType==="touch"?(r.removeEventListener("click",i.value),i.value=h,r.addEventListener("click",i.value,{once:!0})):h()}else r.removeEventListener("click",i.value);s.value=!1}},l=window.setTimeout(()=>{r.addEventListener("pointerdown",a)},0);o(()=>{window.clearTimeout(l),r.removeEventListener("pointerdown",a),r.removeEventListener("click",i.value)})}),{onPointerDownCapture:()=>s.value=!0}}function Zk(t,e){var n;const r=((n=e==null?void 0:e.value)==null?void 0:n.ownerDocument)??(globalThis==null?void 0:globalThis.document),s=Ve(!1);return rs(i=>{if(!Rs)return;const o=async a=>{e!=null&&e.value&&(await bn(),!(!e.value||Gy(e.value,a.target))&&a.target&&!s.value&&$y(Yk,t,{originalEvent:a}))};r.addEventListener("focusin",o),i(()=>r.removeEventListener("focusin",o))}),{onFocusCapture:()=>s.value=!0,onBlurCapture:()=>s.value=!1}}const dn=_s({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),eO=Le({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(t,{emit:e}){const n=t,r=e,{forwardRef:s,currentElement:i}=It(),o=Ie(()=>{var g;return((g=i.value)==null?void 0:g.ownerDocument)??globalThis.document}),a=Ie(()=>dn.layersRoot),l=Ie(()=>i.value?Array.from(a.value).indexOf(i.value):-1),c=Ie(()=>dn.layersWithOutsidePointerEventsDisabled.size>0),u=Ie(()=>{const g=Array.from(a.value),[_]=[...dn.layersWithOutsidePointerEventsDisabled].slice(-1),y=g.indexOf(_);return l.value>=y}),h=Xk(async g=>{const _=[...dn.branches].some(y=>y.contains(g.target));!u.value||_||(r("pointerDownOutside",g),r("interactOutside",g),await bn(),g.defaultPrevented||r("dismiss"))},i),d=Zk(g=>{[...dn.branches].some(_=>_.contains(g.target))||(r("focusOutside",g),r("interactOutside",g),g.defaultPrevented||r("dismiss"))},i);Sk("Escape",g=>{l.value===a.value.size-1&&(r("escapeKeyDown",g),g.defaultPrevented||r("dismiss"))});let f;return rs(g=>{i.value&&(n.disableOutsidePointerEvents&&(dn.layersWithOutsidePointerEventsDisabled.size===0&&(f=o.value.body.style.pointerEvents,o.value.body.style.pointerEvents="none"),dn.layersWithOutsidePointerEventsDisabled.add(i.value)),a.value.add(i.value),g(()=>{n.disableOutsidePointerEvents&&dn.layersWithOutsidePointerEventsDisabled.size===1&&(o.value.body.style.pointerEvents=f)}))}),rs(g=>{g(()=>{i.value&&(a.value.delete(i.value),dn.layersWithOutsidePointerEventsDisabled.delete(i.value))})}),(g,_)=>(Se(),De(N(cn),{ref:N(s),"as-child":g.asChild,as:g.as,"data-dismissable-layer":"",style:Ci({pointerEvents:c.value?u.value?"auto":"none":void 0}),onFocusCapture:N(d).onFocusCapture,onBlurCapture:N(d).onBlurCapture,onPointerdownCapture:N(h).onPointerDownCapture},{default:ye(()=>[$e(g.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),zl="focusScope.autoFocusOnMount",Hl="focusScope.autoFocusOnUnmount",cp={bubbles:!1,cancelable:!0};function tO(t,{select:e=!1}={}){const n=document.activeElement;for(const r of t)if(Dn(r,{select:e}),document.activeElement!==n)return!0}function nO(t){const e=Qy(t),n=up(e,t),r=up(e.reverse(),t);return[n,r]}function Qy(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function up(t,e){for(const n of t)if(!rO(n,{upTo:e}))return n}function rO(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function sO(t){return t instanceof HTMLInputElement&&"select"in t}function Dn(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&sO(t)&&e&&t.select()}}const iO=yk(()=>Ve([]));function oO(){const t=iO();return{add(e){const n=t.value[0];e!==n&&(n==null||n.pause()),t.value=hp(t.value,e),t.value.unshift(e)},remove(e){var n;t.value=hp(t.value,e),(n=t.value[0])==null||n.resume()}}}function hp(t,e){const n=[...t],r=n.indexOf(e);return r!==-1&&n.splice(r,1),n}function aO(t){return t.filter(e=>e.tagName!=="A")}const lO=Le({__name:"FocusScope",props:{loop:{type:Boolean,default:!1},trapped:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["mountAutoFocus","unmountAutoFocus"],setup(t,{emit:e}){const n=t,r=e,{currentRef:s,currentElement:i}=It(),o=Ve(null),a=oO(),l=_s({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});rs(u=>{if(!Rs)return;const h=i.value;if(!n.trapped)return;function d(y){if(l.paused||!h)return;const I=y.target;h.contains(I)?o.value=I:Dn(o.value,{select:!0})}function f(y){if(l.paused||!h)return;const I=y.relatedTarget;I!==null&&(h.contains(I)||Dn(o.value,{select:!0}))}function g(y){h.contains(o.value)||Dn(h)}document.addEventListener("focusin",d),document.addEventListener("focusout",f);const _=new MutationObserver(g);h&&_.observe(h,{childList:!0,subtree:!0}),u(()=>{document.removeEventListener("focusin",d),document.removeEventListener("focusout",f),_.disconnect()})}),rs(async u=>{const h=i.value;if(await bn(),!h)return;a.add(l);const d=document.activeElement;if(!h.contains(d)){const f=new CustomEvent(zl,cp);h.addEventListener(zl,g=>r("mountAutoFocus",g)),h.dispatchEvent(f),f.defaultPrevented||(tO(aO(Qy(h)),{select:!0}),document.activeElement===d&&Dn(h))}u(()=>{h.removeEventListener(zl,_=>r("mountAutoFocus",_));const f=new CustomEvent(Hl,cp),g=_=>{r("unmountAutoFocus",_)};h.addEventListener(Hl,g),h.dispatchEvent(f),setTimeout(()=>{f.defaultPrevented||Dn(d??document.body,{select:!0}),h.removeEventListener(Hl,g),a.remove(l)},0)})});function c(u){if(!n.loop&&!n.trapped||l.paused)return;const h=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,d=document.activeElement;if(h&&d){const f=u.currentTarget,[g,_]=nO(f);g&&_?!u.shiftKey&&d===_?(u.preventDefault(),n.loop&&Dn(g,{select:!0})):u.shiftKey&&d===g&&(u.preventDefault(),n.loop&&Dn(_,{select:!0})):d===f&&u.preventDefault()}}return(u,h)=>(Se(),De(N(cn),{ref_key:"currentRef",ref:s,tabindex:"-1","as-child":u.asChild,as:u.as,onKeydown:c},{default:ye(()=>[$e(u.$slots,"default")]),_:3},8,["as-child","as"]))}});function cO(t){return t?"open":"closed"}const Jy=Le({__name:"DialogContentImpl",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=Pn(),{forwardRef:i,currentElement:o}=It();return s.titleId||(s.titleId=lp(void 0,"radix-vue-dialog-title")),s.descriptionId||(s.descriptionId=lp(void 0,"radix-vue-dialog-description")),ou(()=>{s.contentElement=o}),(a,l)=>(Se(),De(N(lO),{"as-child":"",loop:"",trapped:n.trapFocus,onMountAutoFocus:l[5]||(l[5]=c=>r("openAutoFocus",c)),onUnmountAutoFocus:l[6]||(l[6]=c=>r("closeAutoFocus",c))},{default:ye(()=>[Ne(N(eO),wt({id:N(s).contentId,ref:N(i),as:a.as,"as-child":a.asChild,"disable-outside-pointer-events":a.disableOutsidePointerEvents,role:"dialog","aria-describedby":N(s).descriptionId,"aria-labelledby":N(s).titleId,"data-state":N(cO)(N(s).open.value)},a.$attrs,{onDismiss:l[0]||(l[0]=c=>N(s).onOpenChange(!1)),onEscapeKeyDown:l[1]||(l[1]=c=>r("escapeKeyDown",c)),onFocusOutside:l[2]||(l[2]=c=>r("focusOutside",c)),onInteractOutside:l[3]||(l[3]=c=>r("interactOutside",c)),onPointerDownOutside:l[4]||(l[4]=c=>r("pointerDownOutside",c))}),{default:ye(()=>[$e(a.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),uO=Le({__name:"DialogContentModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=Pn(),i=cl(r),{forwardRef:o,currentElement:a}=It();return jk(a),(l,c)=>(Se(),De(Jy,wt({...n,...N(i)},{ref:N(o),"trap-focus":N(s).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:c[0]||(c[0]=u=>{var h;r("closeAutoFocus",u),u.defaultPrevented||(u.preventDefault(),(h=N(s).triggerElement.value)==null||h.focus())}),onPointerDownOutside:c[1]||(c[1]=u=>{const h=u.detail.originalEvent,d=h.button===0&&h.ctrlKey===!0;(h.button===2||d)&&u.preventDefault()}),onFocusOutside:c[2]||(c[2]=u=>{u.preventDefault()}),onOpenAutoFocus:c[3]||(c[3]=u=>r("openAutoFocus",u))}),{default:ye(()=>[$e(l.$slots,"default")]),_:3},16,["trap-focus"]))}}),hO=Le({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=cl(r);It();const i=Pn(),o=Ve(!1),a=Ve(!1);return(l,c)=>(Se(),De(Jy,wt({...n,...N(s)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:c[0]||(c[0]=u=>{var h;r("closeAutoFocus",u),u.defaultPrevented||(o.value||(h=N(i).triggerElement.value)==null||h.focus(),u.preventDefault()),o.value=!1,a.value=!1}),onInteractOutside:c[1]||(c[1]=u=>{var h;u.defaultPrevented||(o.value=!0,u.detail.originalEvent.type==="pointerdown"&&(a.value=!0));const d=u.target;(h=N(i).triggerElement.value)!=null&&h.contains(d)&&u.preventDefault(),u.detail.originalEvent.type==="focusin"&&a.value&&u.preventDefault()})}),{default:ye(()=>[$e(l.$slots,"default")]),_:3},16))}}),T1=Le({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:e}){const n=t,r=e,s=Pn(),i=cl(r),{forwardRef:o}=It();return(a,l)=>(Se(),De(N(Wy),{present:a.forceMount||N(s).open.value},{default:ye(()=>[N(s).modal.value?(Se(),De(uO,wt({key:0,ref:N(o)},{...n,...N(i),...a.$attrs},{onOpenAutoFocus:l[0]||(l[0]=c=>r("openAutoFocus",c))}),{default:ye(()=>[$e(a.$slots,"default")]),_:3},16)):(Se(),De(hO,wt({key:1,ref:N(o)},{...n,...N(i),...a.$attrs}),{default:ye(()=>[$e(a.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),dO=Le({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean},as:{}},setup(t){const e=Pn();return Mk(!0),It(),(n,r)=>(Se(),De(N(cn),{as:n.as,"as-child":n.asChild,"data-state":N(e).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:ye(()=>[$e(n.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),I1=Le({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const e=Pn(),{forwardRef:n}=It();return(r,s)=>{var i;return(i=N(e))!=null&&i.modal.value?(Se(),De(N(Wy),{key:0,present:r.forceMount||N(e).open.value},{default:ye(()=>[Ne(dO,wt(r.$attrs,{ref:N(n),as:r.as,"as-child":r.asChild}),{default:ye(()=>[$e(r.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):pm("",!0)}}}),A1=Le({__name:"DialogClose",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const e=t;It();const n=Pn();return(r,s)=>(Se(),De(N(cn),wt(e,{type:r.as==="button"?"button":void 0,onClick:s[0]||(s[0]=i=>N(n).onOpenChange(!1))}),{default:ye(()=>[$e(r.$slots,"default")]),_:3},16,["type"]))}}),b1=Le({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{default:"h2"}},setup(t){const e=t,n=Pn();return It(),(r,s)=>(Se(),De(N(cn),wt(e,{id:N(n).titleId}),{default:ye(()=>[$e(r.$slots,"default")]),_:3},16,["id"]))}}),R1=Le({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(t){const e=t;It();const n=Pn();return(r,s)=>(Se(),De(N(cn),wt(e,{id:N(n).descriptionId}),{default:ye(()=>[$e(r.$slots,"default")]),_:3},16,["id"]))}}),fO=Le({__name:"Label",props:{for:{},asChild:{type:Boolean},as:{default:"label"}},setup(t){const e=t;return It(),(n,r)=>(Se(),De(N(cn),wt(e,{onMousedown:r[0]||(r[0]=s=>{!s.defaultPrevented&&s.detail>1&&s.preventDefault()})}),{default:ye(()=>[$e(n.$slots,"default")]),_:3},16))}}),Si=100,[pO,mO]=vh("ProgressRoot"),Th=t=>typeof t=="number";function gO(t,e){return t===null||Th(t)&&!Number.isNaN(t)&&t<=e&&t>=0?t:(console.error(`Invalid prop \`value\` of value \`${t}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Si} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`),null)}function _O(t){return Th(t)&&!Number.isNaN(t)&&t>0?t:(console.error(`Invalid prop \`max\` of value \`${t}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Si}\`.`),Si)}const P1=Le({__name:"ProgressRoot",props:{modelValue:{},max:{default:Si},getValueLabel:{type:Function,default:(t,e)=>`${Math.round(t/e*Si)}%`},asChild:{type:Boolean},as:{}},emits:["update:modelValue","update:max"],setup(t,{emit:e}){const n=t,r=e;It();const s=$c(n,"modelValue",r,{passive:n.modelValue===void 0}),i=$c(n,"max",r,{passive:n.max===void 0});vt(()=>s.value,async a=>{const l=gO(a,n.max);l!==a&&(await bn(),s.value=l)},{immediate:!0}),vt(()=>n.max,a=>{const l=_O(n.max);l!==a&&(i.value=l)},{immediate:!0});const o=Ie(()=>s.value?s.value===i.value?"complete":"loading":"indeterminate");return mO({modelValue:s,max:i,progressState:o}),(a,l)=>(Se(),De(N(cn),{"as-child":a.asChild,as:a.as,"aria-valuemax":N(i),"aria-valuemin":0,"aria-valuenow":Th(N(s))?N(s):void 0,"aria-valuetext":a.getValueLabel(N(s),N(i)),"aria-label":a.getValueLabel(N(s),N(i)),role:"progressbar","data-state":o.value,"data-value":N(s)??void 0,"data-max":N(i)},{default:ye(()=>[$e(a.$slots,"default")]),_:3},8,["as-child","as","aria-valuemax","aria-valuenow","aria-valuetext","aria-label","data-state","data-value","data-max"]))}}),S1=Le({__name:"ProgressIndicator",props:{asChild:{type:Boolean},as:{}},setup(t){const e=t,n=pO();return It(),(r,s)=>{var i;return Se(),De(N(cn),wt(e,{"data-state":N(n).progressState.value,"data-value":((i=N(n).modelValue)==null?void 0:i.value)??void 0,"data-max":N(n).max.value}),{default:ye(()=>[$e(r.$slots,"default")]),_:3},16,["data-state","data-value","data-max"])}}});function yO(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}yO();function Yy(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=Yy(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function vO(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=Yy(t))&&(r&&(r+=" "),r+=e);return r}const Ih="-";function EO(t){const e=TO(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;function s(o){const a=o.split(Ih);return a[0]===""&&a.length!==1&&a.shift(),Xy(a,e)||wO(o)}function i(o,a){const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}return{getClassGroupId:s,getConflictingClassGroupIds:i}}function Xy(t,e){var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?Xy(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(Ih);return(o=e.validators.find(({validator:a})=>a(i)))==null?void 0:o.classGroupId}const dp=/^\[(.+)\]$/;function wO(t){if(dp.test(t)){const e=dp.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function TO(t){const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return AO(Object.entries(t.classGroups),n).forEach(([i,o])=>{qc(o,r,i,e)}),r}function qc(t,e,n,r){t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:fp(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(IO(s)){qc(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{qc(o,fp(e,i),n,r)})})}function fp(t,e){let n=t;return e.split(Ih).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function IO(t){return t.isThemeGetter}function AO(t,e){return e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,a])=>[e+o,a])):i);return[n,s]}):t}function bO(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;function s(i,o){n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)}return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}}const Zy="!";function RO(t){const e=t.separator,n=e.length===1,r=e[0],s=e.length;return function(o){const a=[];let l=0,c=0,u;for(let _=0;_<o.length;_++){let y=o[_];if(l===0){if(y===r&&(n||o.slice(_,_+s)===e)){a.push(o.slice(c,_)),c=_+s;continue}if(y==="/"){u=_;continue}}y==="["?l++:y==="]"&&l--}const h=a.length===0?o:o.substring(c),d=h.startsWith(Zy),f=d?h.substring(1):h,g=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:g}}}function PO(t){if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e}function SO(t){return{cache:bO(t.cacheSize),splitModifiers:RO(t),...EO(t)}}const CO=/\s+/;function kO(t,e){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=new Set;return t.trim().split(CO).map(o=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=n(o);let h=r(u?c.substring(0,u):c),d=!!u;if(!h){if(!u)return{isTailwindClass:!1,originalClassName:o};if(h=r(c),!h)return{isTailwindClass:!1,originalClassName:o};d=!1}const f=PO(a).join(":");return{isTailwindClass:!0,modifierId:l?f+Zy:f,classGroupId:h,originalClassName:o,hasPostfixModifier:d}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=o,u=a+l;return i.has(u)?!1:(i.add(u),s(l,c).forEach(h=>i.add(a+h)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function OO(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=ev(e))&&(r&&(r+=" "),r+=n);return r}function ev(t){if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=ev(t[r]))&&(n&&(n+=" "),n+=e);return n}function NO(t,...e){let n,r,s,i=o;function o(l){const c=e.reduce((u,h)=>h(u),t());return n=SO(c),r=n.cache.get,s=n.cache.set,i=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=kO(l,n);return s(l,u),u}return function(){return i(OO.apply(null,arguments))}}function Ee(t){const e=n=>n[t]||[];return e.isThemeGetter=!0,e}const tv=/^\[(?:([a-z-]+):)?(.+)\]$/i,DO=/^\d+\/\d+$/,xO=new Set(["px","full","screen"]),VO=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,MO=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,LO=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,FO=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,UO=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function fn(t){return pr(t)||xO.has(t)||DO.test(t)}function On(t){return Ps(t,"length",WO)}function pr(t){return!!t&&!Number.isNaN(Number(t))}function wo(t){return Ps(t,"number",pr)}function xs(t){return!!t&&Number.isInteger(Number(t))}function BO(t){return t.endsWith("%")&&pr(t.slice(0,-1))}function te(t){return tv.test(t)}function Nn(t){return VO.test(t)}const $O=new Set(["length","size","percentage"]);function jO(t){return Ps(t,$O,nv)}function qO(t){return Ps(t,"position",nv)}const zO=new Set(["image","url"]);function HO(t){return Ps(t,zO,QO)}function KO(t){return Ps(t,"",GO)}function Vs(){return!0}function Ps(t,e,n){const r=tv.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1}function WO(t){return MO.test(t)&&!LO.test(t)}function nv(){return!1}function GO(t){return FO.test(t)}function QO(t){return UO.test(t)}function JO(){const t=Ee("colors"),e=Ee("spacing"),n=Ee("blur"),r=Ee("brightness"),s=Ee("borderColor"),i=Ee("borderRadius"),o=Ee("borderSpacing"),a=Ee("borderWidth"),l=Ee("contrast"),c=Ee("grayscale"),u=Ee("hueRotate"),h=Ee("invert"),d=Ee("gap"),f=Ee("gradientColorStops"),g=Ee("gradientColorStopPositions"),_=Ee("inset"),y=Ee("margin"),I=Ee("opacity"),S=Ee("padding"),C=Ee("saturate"),L=Ee("scale"),W=Ee("sepia"),x=Ee("skew"),ne=Ee("space"),fe=Ee("translate"),Ce=()=>["auto","contain","none"],ke=()=>["auto","hidden","clip","visible","scroll"],Je=()=>["auto",te,e],ce=()=>[te,e],At=()=>["",fn,On],zt=()=>["auto",pr,te],un=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Oe=()=>["solid","dashed","dotted","double","none"],he=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],oe=()=>["start","end","center","between","around","evenly","stretch"],mt=()=>["","0",te],Dt=()=>["auto","avoid","all","avoid-page","page","left","right","column"],it=()=>[pr,wo],je=()=>[pr,te];return{cacheSize:500,separator:":",theme:{colors:[Vs],spacing:[fn,On],blur:["none","",Nn,te],brightness:it(),borderColor:[t],borderRadius:["none","","full",Nn,te],borderSpacing:ce(),borderWidth:At(),contrast:it(),grayscale:mt(),hueRotate:je(),invert:mt(),gap:ce(),gradientColorStops:[t],gradientColorStopPositions:[BO,On],inset:Je(),margin:Je(),opacity:it(),padding:ce(),saturate:it(),scale:it(),sepia:mt(),skew:je(),space:ce(),translate:ce()},classGroups:{aspect:[{aspect:["auto","square","video",te]}],container:["container"],columns:[{columns:[Nn]}],"break-after":[{"break-after":Dt()}],"break-before":[{"break-before":Dt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...un(),te]}],overflow:[{overflow:ke()}],"overflow-x":[{"overflow-x":ke()}],"overflow-y":[{"overflow-y":ke()}],overscroll:[{overscroll:Ce()}],"overscroll-x":[{"overscroll-x":Ce()}],"overscroll-y":[{"overscroll-y":Ce()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",xs,te]}],basis:[{basis:Je()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",te]}],grow:[{grow:mt()}],shrink:[{shrink:mt()}],order:[{order:["first","last","none",xs,te]}],"grid-cols":[{"grid-cols":[Vs]}],"col-start-end":[{col:["auto",{span:["full",xs,te]},te]}],"col-start":[{"col-start":zt()}],"col-end":[{"col-end":zt()}],"grid-rows":[{"grid-rows":[Vs]}],"row-start-end":[{row:["auto",{span:[xs,te]},te]}],"row-start":[{"row-start":zt()}],"row-end":[{"row-end":zt()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",te]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...oe()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...oe(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...oe(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[ne]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ne]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",te,e]}],"min-w":[{"min-w":[te,e,"min","max","fit"]}],"max-w":[{"max-w":[te,e,"none","full","min","max","fit","prose",{screen:[Nn]},Nn]}],h:[{h:[te,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[te,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[te,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[te,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Nn,On]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",wo]}],"font-family":[{font:[Vs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",te]}],"line-clamp":[{"line-clamp":["none",pr,wo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",fn,te]}],"list-image":[{"list-image":["none",te]}],"list-style-type":[{list:["none","disc","decimal",te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[I]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Oe(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",fn,On]}],"underline-offset":[{"underline-offset":["auto",fn,te]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ce()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[I]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...un(),qO]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",jO]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},HO]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[I]}],"border-style":[{border:[...Oe(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[I]}],"divide-style":[{divide:Oe()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...Oe()]}],"outline-offset":[{"outline-offset":[fn,te]}],"outline-w":[{outline:[fn,On]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:At()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[I]}],"ring-offset-w":[{"ring-offset":[fn,On]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Nn,KO]}],"shadow-color":[{shadow:[Vs]}],opacity:[{opacity:[I]}],"mix-blend":[{"mix-blend":he()}],"bg-blend":[{"bg-blend":he()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Nn,te]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[h]}],saturate:[{saturate:[C]}],sepia:[{sepia:[W]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[I]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[W]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",te]}],duration:[{duration:je()}],ease:[{ease:["linear","in","out","in-out",te]}],delay:[{delay:je()}],animate:[{animate:["none","spin","ping","pulse","bounce",te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[xs,te]}],"translate-x":[{"translate-x":[fe]}],"translate-y":[{"translate-y":[fe]}],"skew-x":[{"skew-x":[x]}],"skew-y":[{"skew-y":[x]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",te]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ce()}],"scroll-mx":[{"scroll-mx":ce()}],"scroll-my":[{"scroll-my":ce()}],"scroll-ms":[{"scroll-ms":ce()}],"scroll-me":[{"scroll-me":ce()}],"scroll-mt":[{"scroll-mt":ce()}],"scroll-mr":[{"scroll-mr":ce()}],"scroll-mb":[{"scroll-mb":ce()}],"scroll-ml":[{"scroll-ml":ce()}],"scroll-p":[{"scroll-p":ce()}],"scroll-px":[{"scroll-px":ce()}],"scroll-py":[{"scroll-py":ce()}],"scroll-ps":[{"scroll-ps":ce()}],"scroll-pe":[{"scroll-pe":ce()}],"scroll-pt":[{"scroll-pt":ce()}],"scroll-pr":[{"scroll-pr":ce()}],"scroll-pb":[{"scroll-pb":ce()}],"scroll-pl":[{"scroll-pl":ce()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[fn,On,wo]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const YO=NO(JO);function rv(...t){return YO(vO(t))}const Kl={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const e=t;return(n,r)=>(Se(),De(N(cn),{as:t.as,"as-child":t.asChild,class:ki(N(rv)(N(XO)({variant:t.variant,size:t.size}),e.class))},{default:ye(()=>[$e(n.$slots,"default")]),_:3},8,["as","as-child","class"]))}},XO=_k("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ZO={__name:"Label",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const e=t,n=Ie(()=>{const{class:r,...s}=e;return s});return(r,s)=>(Se(),De(N(fO),wt(n.value,{class:N(rv)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e.class)}),{default:ye(()=>[$e(r.$slots,"default")]),_:3},16,["class"]))}},e1={class:"bg-gradient-to-r from-blue-300 w-lvw h-lvh"},t1={class:"w-full relative top-0 p-2 bg-white shadow-md"},n1={class:"flex gap-4 justify-between items-center"},r1={class:"flex gap-4 items-center"},s1={class:"flex gap-4 items-center"},i1={__name:"Layout",setup(t){const e=Bc.currentUser,n=NT();function r(){u0(Bc),n.push("/login")}return(s,i)=>{const o=Fh("RouterLink"),a=Fh("RouterView");return Se(),$E("div",e1,[cr("header",t1,[cr("div",n1,[cr("div",r1,[Ne(o,{to:"/list"},{default:ye(()=>[Ne(N(Kl),{variant:"ghost"},{default:ye(()=>[Ls("List")]),_:1})]),_:1}),Ne(o,{to:"/create"},{default:ye(()=>[Ne(N(Kl),{variant:"ghost"},{default:ye(()=>[Ls("Create")]),_:1})]),_:1})]),cr("div",s1,[Ne(N(ZO),null,{default:ye(()=>[Ls(gv(N(e).email),1)]),_:1}),Ne(N(Kl),{variant:"ghost",onClick:r},{default:ye(()=>[Ls("Logout")]),_:1})])])]),cr("div",null,[Ne(a)])])}}};function pp(t,e,n){Bc.onAuthStateChanged(r=>{r?n():n("/login")})}const o1=kT({history:oT("/card-scanner/"),routes:[{path:"/",name:"main",component:i1,children:[{path:"/list",name:"list",beforeEnter:pp,component:()=>wl(()=>import("./List-DjFlMLe1.js"),__vite__mapDeps([0,1]))},{path:"/create",name:"create",beforeEnter:pp,component:()=>wl(()=>import("./Create-CW_vphAi.js"),__vite__mapDeps([2,1,3]))}]},{path:"/login",name:"login",component:()=>wl(()=>import("./Login-D5t0co1R.js"),__vite__mapDeps([4,1,3]))}]}),Ah=Iw(DT);Ah.use(Sw());Ah.use(o1);Ah.mount("#app");export{I1 as A,A1 as B,E1 as C,w1 as D,Bc as E,St as F,b1 as G,T1 as H,ft as I,Kl as J,g1 as K,NT as L,u1 as M,vt as N,Pr as O,bn as P,a1 as Q,c1 as R,R1 as U,S1 as X,P1 as Y,ZO as _,De as a,Ne as b,Ie as c,rv as d,$E as e,cr as f,pm as g,l1 as h,m1 as i,p1 as j,Ls as k,fv as l,wt as m,Ci as n,Se as o,fm as p,_1 as q,Ve as r,v1 as s,gv as t,N as u,$e as v,ye as w,ki as x,Lk as y,Qr as z};
