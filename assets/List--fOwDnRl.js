import{c as w,o as n,a as y,w as s,b as t,u as e,X as v,n as b,m as $,d as S,Y as V,e as p,f as c,g as d,t as u,_,r as h,F as k,h as q,i as D,j as B,k as N,l as P,p as j}from"./index-Dvmwkh4T.js";import{_ as C,a as F,b as L,c as X,d as z}from"./CardContent-B5QvssFT.js";const E={__name:"Progress",props:{modelValue:{type:[Number,null],required:!1,default:0},max:{type:Number,required:!1},getValueLabel:{type:Function,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(a){const l=a,r=w(()=>{const{class:f,...i}=l;return i});return(f,i)=>(n(),y(e(V),$(r.value,{class:e(S)("relative h-4 w-full overflow-hidden rounded-full bg-secondary",l.class)}),{default:s(()=>[t(e(v),{class:"h-full w-full flex-1 bg-primary transition-all",style:b(`transform: translateX(-${100-(l.modelValue??0)}%);`)},null,8,["style"])]),_:1},16,["class"]))}},I={class:"w-full flex bg-white p-3 rounded-lg gap-8 items-center shadow-sm hover:shadow-lg hover:bg-slate-200 transition-all"},T={class:"flex w-full flex-col gap-2"},Y={class:"flex w-full md:gap-8 flex-col gap-2 md:flex-row justify-between"},R=["href"],U={class:"flex w-full md:gap-8 flex-col gap-2 md:flex-row justify-between"},A=["href"],G=["href"],H={__name:"ContactCard",props:{firstname:{type:String},lastname:{type:String},phone:{type:String},email:{type:String},website:{type:String},companyname:{type:String}},setup(a){return(l,r)=>(n(),p("div",I,[c("div",T,[c("div",Y,[t(e(_),{class:"text-lg"},{default:s(()=>[d(" 👤 "+u(a.firstname)+" "+u(a.lastname),1)]),_:1}),c("a",{href:`mailto:${a.email}`,target:"_blank"},[t(e(_),{class:"text-md"},{default:s(()=>[d("💌 "+u(a.email),1)]),_:1})],8,R)]),c("div",U,[c("a",{class:"",href:`tel:${a.phone}`},[t(e(_),{class:"text-md"},{default:s(()=>[d("📞 "+u(a.phone),1)]),_:1})],8,A),c("a",{href:a.website,target:"_blank"},[t(e(_),{class:"text-md"},{default:s(()=>[d("🌍 "+u(a.website),1)]),_:1})],8,G)])])]))}},J={class:"md:p-8 p-4 flex items-center justify-center"},K={key:1,class:"grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 w-full"},Q={__name:"List",setup(a){let l=h([]);const r=h(1);let f="",i=h(!0);async function x(){let m=[];(await D(B(j,"contacts"))).forEach(o=>{m.push({...o.data(),id:o.id})}),console.log(m),l.value=m,i.value=!1,clearInterval(f)}return setTimeout(x,3e3),f=setInterval(()=>{r.value=r.value+1},100),(m,g)=>(n(),p("div",J,[e(i)?(n(),y(e(z),{key:0,class:"w-2/4 mt-8"},{default:s(()=>[t(e(L),null,{default:s(()=>[t(e(C),null,{default:s(()=>[d("Fetching Data")]),_:1}),t(e(F),{class:"p-4"},{default:s(()=>[t(e(E),{modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=o=>r.value=o)},null,8,["modelValue"])]),_:1})]),_:1}),t(e(X))]),_:1})):(n(),p("div",K,[(n(!0),p(k,null,q(e(l),o=>(n(),y(H,N(P(o)),null,16))),256))]))]))}};export{Q as default};