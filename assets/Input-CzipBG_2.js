import{o as y,e as N,s as O,v as h,u as m,d as $,r as C,M as S,c as F,N as J,O as M,P as T,Q as B,E as D}from"./index-BAag0gC9.js";const k={__name:"CardFooter",props:{class:{type:null,required:!1}},setup(e){const t=e;return(n,c)=>(y(),N("div",{class:h(m($)("flex items-center p-6 pt-0",t.class))},[O(n.$slots,"default")],2))}};typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const G=e=>typeof e<"u";function I(e){return JSON.parse(JSON.stringify(e))}function U(e,t,n,c={}){var o,f,i;const{clone:a=!1,passive:q=!1,eventName:w,deep:b=!1,defaultValue:E,shouldEmit:g}=c,s=J(),v=n||(s==null?void 0:s.emit)||((o=s==null?void 0:s.$emit)==null?void 0:o.bind(s))||((i=(f=s==null?void 0:s.proxy)==null?void 0:f.$emit)==null?void 0:i.bind(s==null?void 0:s.proxy));let r=w;t||(t="modelValue"),r=r||`update:${t.toString()}`;const _=l=>a?typeof a=="function"?a(l):I(l):l,x=()=>G(e[t])?_(e[t]):E,V=l=>{g?g(l)&&v(r,l):v(r,l)};if(q){const l=x(),p=C(l);let u=!1;return S(()=>e[t],d=>{u||(u=!0,p.value=_(d),M(()=>u=!1))}),S(p,d=>{!u&&(d!==e[t]||b)&&V(d)},{deep:b}),p}else return F({get(){return x()},set(l){V(l)}})}const z={__name:"Input",props:{defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1},class:{type:null,required:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=U(n,"modelValue",t,{passive:!0,defaultValue:n.defaultValue});return(f,i)=>T((y(),N("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>D(o)?o.value=a:null),class:h(m($)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n.class))},null,2)),[[B,m(o)]])}};export{z as _,k as a};