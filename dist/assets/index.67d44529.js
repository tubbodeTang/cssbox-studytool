import{c as x,n as j,f as B,m as D,t as E,A as U,B as G,q as J,d as K,u as L,w as O}from"./base.fd59f32f.js";import{u as Q}from"./use-refs.1326f0cb.js";import{u as W}from"./use-touch.f540989d.js";import{I as T}from"./index.c59f0326.js";import{q as Y,x as Z,p as d}from"./vendor.f9b4ed9a.js";const[$,f]=x("rate");function p(e,o,l,i){if(e>=o)return{status:"full",value:1};if(e+.5>=o&&l&&!i)return{status:"half",value:.5};if(e+1>=o&&l&&i){const c=10**10;return{status:"half",value:Math.round((e-o+1)*c)/c}}return{status:"void",value:0}}const ee={size:j,icon:B("star"),color:String,count:D(5),gutter:j,readonly:Boolean,disabled:Boolean,voidIcon:B("star-o"),allowHalf:Boolean,voidColor:String,touchable:E,iconPrefix:String,modelValue:U(0),disabledColor:String};var ae=Y({name:$,props:ee,emits:["change","update:modelValue"],setup(e,{emit:o}){const l=W(),[i,c]=Q(),b=()=>e.readonly||e.disabled||!e.touchable,N=Z(()=>Array(+e.count).fill("").map((a,t)=>p(e.modelValue,t+1,e.allowHalf,e.readonly)));let s;const v=()=>{const a=i.value.map(L);s=[],a.forEach((t,r)=>{e.allowHalf?s.push({score:r+.5,left:t.left},{score:r+1,left:t.left+t.width/2}):s.push({score:r+1,left:t.left})})},g=a=>{for(let t=s.length-1;t>0;t--)if(a>s[t].left)return s[t].score;return e.allowHalf?.5:1},y=a=>{!e.disabled&&!e.readonly&&a!==e.modelValue&&(o("update:modelValue",a),o("change",a))},q=a=>{b()||(l.start(a),v())},A=a=>{if(!b()&&(l.move(a),l.isHorizontal())){const{clientX:t}=a.touches[0];J(a),y(g(t))}},F=(a,t)=>{const{icon:r,size:P,color:R,count:S,gutter:V,voidIcon:w,disabled:n,voidColor:C,allowHalf:k,iconPrefix:I,disabledColor:z}=e,m=t+1,h=a.status==="full",u=a.status==="void",M=k&&a.value>0&&a.value<1;let H;V&&m!==+S&&(H={paddingRight:K(V)});const X=_=>{v(),y(k?g(_.clientX):m)};return d("div",{key:t,ref:c(t),role:"radio",style:H,class:f("item"),tabindex:n?void 0:0,"aria-setsize":S,"aria-posinset":m,"aria-checked":!u,onClick:X},[d(T,{size:P,name:h?r:w,class:f("icon",{disabled:n,full:h}),color:n?z:h?R:C,classPrefix:I},null),M&&d(T,{size:P,style:{width:a.value+"em"},name:u?w:r,class:f("icon",["half",{disabled:n,full:!u}]),color:n?z:u?C:R,classPrefix:I},null)])};return G(()=>e.modelValue),()=>d("div",{role:"radiogroup",class:f({readonly:e.readonly,disabled:e.disabled}),tabindex:e.disabled?void 0:0,"aria-disabled":e.disabled,"aria-readonly":e.readonly,onTouchstart:q,onTouchmove:A},[N.value.map(F)])}});const ne=O(ae);export{ne as R};