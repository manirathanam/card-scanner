import{b as z,_ as F,a as O,c as j,d as E}from"./CardContent-GcMVgPHr.js";import{_ as g,a as I}from"./Input-DfTegJpT.js";import{s as P,o as h,a as V,w as t,v as w,l as H,p as K,u as e,C as L,e as U,x as R,d as k,c as q,y as A,m as $,G as S,U as T,z as B,b as a,A as G,H as M,B as X,D as J,f as p,r as _,E as N,k as c,_ as v,I as y,J as D,K as Z,j as Q,q as W}from"./index-BbfXLm-8.js";const Y={__name:"Dialog",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(i,{emit:s}){const o=P(i,s);return(n,f)=>(h(),V(e(L),H(K(e(o))),{default:t(()=>[w(n.$slots,"default")]),_:3},16))}},ee={__name:"DialogHeader",props:{class:{type:null,required:!1}},setup(i){const s=i;return(l,d)=>(h(),U("div",{class:R(e(k)("flex flex-col gap-y-1.5 text-center sm:text-left",s.class))},[w(l.$slots,"default")],2))}},ae={__name:"DialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(i){const s=i,l=q(()=>{const{class:o,...n}=s;return n}),d=A(l);return(o,n)=>(h(),V(e(S),$(e(d),{class:e(k)("text-lg font-semibold leading-none tracking-tight",s.class)}),{default:t(()=>[w(o.$slots,"default")]),_:3},16,["class"]))}},te={__name:"DialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(i){const s=i,l=q(()=>{const{class:o,...n}=s;return n}),d=A(l);return(o,n)=>(h(),V(e(T),$(e(d),{class:e(k)("text-sm text-muted-foreground",s.class)}),{default:t(()=>[w(o.$slots,"default")]),_:3},16,["class"]))}};/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(i,s)=>({size:l,strokeWidth:d=2,absoluteStrokeWidth:o,color:n,class:f,...m},{attrs:C,slots:b})=>B("svg",{...x,width:l||x.width,height:l||x.height,stroke:n||x.stroke,"stroke-width":o?Number(d)*24/Number(l):d,...C,class:["lucide",`lucide-${se(i)}`],...m},[...s.map(u=>B(...u)),...b.default?[b.default()]:[]]);/**
 * @license lucide-vue-next v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=le("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ne=p("span",{class:"sr-only"},"Close",-1),de={__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(i,{emit:s}){const l=i,d=s,o=q(()=>{const{class:f,...m}=l;return m}),n=P(o,d);return(f,m)=>(h(),V(e(J),null,{default:t(()=>[a(e(G),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),a(e(M),$(e(n),{class:e(k)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",l.class)}),{default:t(()=>[w(f.$slots,"default"),a(e(X),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:t(()=>[a(e(oe),{class:"w-4 h-4"}),ne]),_:1})]),_:3},16,["class"])]),_:3}))}},re={class:"flex justify-center pt-8"},ue={class:"grid gap-4"},ie={class:"grid gap-4 grid-cols-2"},ce={class:"grid gap-2"},pe={class:"grid gap-2"},fe={class:"grid gap-4 grid-cols-2"},me={class:"grid gap-2"},_e={class:"grid gap-2"},ge={class:"grid gap-4"},ve={class:"grid gap-2"},ye={class:"grid gap-2"},xe={__name:"Create",setup(i){_(null);let s=_(""),l=_(""),d=_(""),o=_(""),n=_(""),f=_(""),m=_(!1);console.log(N.currentUser);async function C(){m.value=!0,console.log(s.value,l.value,d.value,o.value,n.value);let b={companyname:f.value,firstname:s.value,lastname:l.value,website:n.value,email:d.value,phone:o.value,ownerid:N.currentUser.uid};const u=await Z(Q(W,"contacts"),b);debugger;console.log(u),setTimeout(()=>{m.value=!1},1e3)}return(b,u)=>(h(),U("div",re,[a(e(E),{class:"w-1/2"},{default:t(()=>[a(e(z),null,{default:t(()=>[a(e(F),null,{default:t(()=>[c("Create")]),_:1}),a(e(O),null,{default:t(()=>[c("Add new business card.")]),_:1})]),_:1}),a(e(j),null,{default:t(()=>[p("div",ue,[p("div",ie,[p("div",ce,[a(e(v),null,{default:t(()=>[c("First Name")]),_:1}),a(e(g),{type:"firstName",modelValue:e(s),"onUpdate:modelValue":u[0]||(u[0]=r=>y(s)?s.value=r:s=r)},null,8,["modelValue"])]),p("div",pe,[a(e(v),null,{default:t(()=>[c("Last Name")]),_:1}),a(e(g),{type:"lastName",modelValue:e(l),"onUpdate:modelValue":u[1]||(u[1]=r=>y(l)?l.value=r:l=r)},null,8,["modelValue"])])]),p("div",fe,[p("div",me,[a(e(v),null,{default:t(()=>[c("Website")]),_:1}),a(e(g),{type:"website",modelValue:e(n),"onUpdate:modelValue":u[2]||(u[2]=r=>y(n)?n.value=r:n=r)},null,8,["modelValue"])]),p("div",_e,[a(e(v),null,{default:t(()=>[c("Phone")]),_:1}),a(e(g),{type:"phone",modelValue:e(o),"onUpdate:modelValue":u[3]||(u[3]=r=>y(o)?o.value=r:o=r)},null,8,["modelValue"])])]),p("div",ge,[p("div",ve,[a(e(v),null,{default:t(()=>[c("Email")]),_:1}),a(e(g),{type:"email",modelValue:e(d),"onUpdate:modelValue":u[4]||(u[4]=r=>y(d)?d.value=r:d=r)},null,8,["modelValue"])]),p("div",ye,[a(e(v),null,{default:t(()=>[c("Company")]),_:1}),a(e(g),{type:"text",modelValue:e(f),"onUpdate:modelValue":u[5]||(u[5]=r=>y(f)?f.value=r:f=r)},null,8,["modelValue"])])])])]),_:1}),a(e(I),{class:"flex flex-col px-6 pb-6 gap-2"},{default:t(()=>[a(e(D),{variant:"outline",onClick:C},{default:t(()=>[c(" Create ")]),_:1}),a(e(D),{variant:"ghost"},{default:t(()=>[c(" Auto Create by Scanning ")]),_:1})]),_:1})]),_:1}),a(e(Y),{open:e(m)},{default:t(()=>[a(e(de),null,{default:t(()=>[a(e(ee),null,{default:t(()=>[a(e(ae),null,{default:t(()=>[c("Saving...")]),_:1}),a(e(te),null,{default:t(()=>[c(" Please wait while we saving your information. ")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]))}};export{xe as default};
