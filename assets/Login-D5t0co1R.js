import{b as g,_ as v,a as w,c as h,d as V}from"./CardContent-GcMVgPHr.js";import{_ as f,a as $}from"./Input-DfTegJpT.js";import{r as d,L as k,e as b,b as e,w as l,u as a,o as B,k as s,f as _,_ as c,I as r,J as m,M as E,E as y}from"./index-BbfXLm-8.js";const C={class:"bg-gradient-to-r from-blue-300 w-lvw h-lvh flex items-center justify-center"},L={class:"flex gap-4 flex-col"},N={class:"flex gap-2 flex-col"},I={class:"flex gap-2 flex-col"},j={__name:"Login",setup(P){let t=d(""),o=d(""),p=k();function x(){E(y,t.value,o.value).then(u=>{p.push("/list")}).catch(u=>{console.log(u)})}return(u,i)=>(B(),b("div",C,[e(a(V),{class:"w-[450px]"},{default:l(()=>[e(a(g),null,{default:l(()=>[e(a(v),null,{default:l(()=>[s("Card Scanner")]),_:1}),e(a(w),null,{default:l(()=>[s("Scan Business cards in one-click.")]),_:1})]),_:1}),e(a(h),null,{default:l(()=>[_("div",L,[_("div",N,[e(a(c),null,{default:l(()=>[s("Email")]),_:1}),e(a(f),{type:"email",modelValue:a(t),"onUpdate:modelValue":i[0]||(i[0]=n=>r(t)?t.value=n:t=n)},null,8,["modelValue"])]),_("div",I,[e(a(c),null,{default:l(()=>[s("Password")]),_:1}),e(a(f),{type:"password",modelValue:a(o),"onUpdate:modelValue":i[1]||(i[1]=n=>r(o)?o.value=n:o=n)},null,8,["modelValue"])])])]),_:1}),e(a($),{class:"flex flex-col px-6 pb-6 gap-2"},{default:l(()=>[e(a(m),{variant:"outline",onClick:x},{default:l(()=>[s(" Login ")]),_:1}),e(a(m),{variant:"link"},{default:l(()=>[s(" forgot password? ")]),_:1})]),_:1})]),_:1})]))}};export{j as default};