import{q as v,p as n,T as x}from"./vendor.f9b4ed9a.js";import{I as k}from"./index.c59f0326.js";import{c as p,t as S,f as T,w as h}from"./base.fd59f32f.js";const[w,r]=p("tag"),y={size:String,mark:Boolean,show:S,type:T("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var B=v({name:w,props:y,emits:["close"],setup(o,{slots:t,emit:s}){const c=e=>{e.stopPropagation(),s("close",e)},i=()=>o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},d=()=>{var e;const{type:f,mark:m,plain:u,round:g,size:a,closeable:b}=o,l={mark:m,plain:u,round:g};a&&(l[a]=a);const C=b&&n(k,{name:"cross",class:r("close"),onClick:c},null);return n("span",{style:i(),class:r([l,f])},[(e=t.default)==null?void 0:e.call(t),C])};return()=>n(x,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?d():null]})}});const z=h(B);export{z as T};
