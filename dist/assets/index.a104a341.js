import{c as L,m as j,f as w,t as C,y as E,s as N,u as v,z as R,w as B}from"./base.fd59f32f.js";import{a as y}from"./index.c59f0326.js";import{u as _}from"./use-tab-status.79ae5414.js";import{L as q}from"./index.28066979.js";import{q as z,e as h,N as b,W as F,l as H,p as i,m as I}from"./vendor.f9b4ed9a.js";const[M,o,U]=L("list"),V={error:Boolean,offset:j(300),loading:Boolean,finished:Boolean,errorText:String,direction:w("down"),loadingText:String,finishedText:String,immediateCheck:C};var W=z({name:M,props:V,emits:["load","update:error","update:loading"],setup(e,{emit:c,slots:a}){const s=h(!1),f=h(),m=h(),d=_(),g=E(f),n=()=>{I(()=>{if(s.value||e.finished||e.error||(d==null?void 0:d.value)===!1)return;const{offset:t,direction:l}=e,r=v(g);if(!r.height||R(f))return;let u=!1;const x=v(m);l==="up"?u=r.top-x.top<=t:u=x.bottom-r.bottom<=t,u&&(s.value=!0,c("update:loading",!0),c("load"))})},T=()=>{if(e.finished){const t=a.finished?a.finished():e.finishedText;if(t)return i("div",{class:o("finished-text")},[t])}},k=()=>{c("update:error",!1),n()},P=()=>{if(e.error){const t=a.error?a.error():e.errorText;if(t)return i("div",{role:"button",class:o("error-text"),tabindex:0,onClick:k},[t])}},S=()=>{if(s.value&&!e.finished)return i("div",{class:o("loading")},[a.loading?a.loading():i(q,{class:o("loading-icon")},{default:()=>[e.loadingText||U("loading")]})])};return b(()=>[e.loading,e.finished,e.error],n),d&&b(d,t=>{t&&n()}),F(()=>{s.value=e.loading}),H(()=>{e.immediateCheck&&n()}),y({check:n}),N("scroll",n,{target:g}),()=>{var t;const l=(t=a.default)==null?void 0:t.call(a),r=i("div",{ref:m,class:o("placeholder")},null);return i("div",{ref:f,role:"feed",class:o(),"aria-busy":s.value},[e.direction==="down"?l:r,S(),T(),P(),e.direction==="up"?l:r])}}});const O=B(W);export{O as L};