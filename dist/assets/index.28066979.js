import{c,e as d,x as u,n as l,f,d as x,w as m}from"./base.fd59f32f.js";import{p as t,q as p,x as S}from"./vendor.f9b4ed9a.js";const[v,a]=c("loading"),g=Array(12).fill(null).map((e,r)=>t("i",{class:a("line",String(r+1))},null)),y=t("svg",{class:a("circular"),viewBox:"25 25 50 50"},[t("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),z={size:l,type:f("circular"),color:String,vertical:Boolean,textSize:l,textColor:String};var C=p({name:v,props:z,setup(e,{slots:r}){const s=S(()=>d({color:e.color},u(e.size))),o=()=>{var n;if(r.default)return t("span",{class:a("text"),style:{fontSize:x(e.textSize),color:(n=e.textColor)!=null?n:e.color}},[r.default()])};return()=>{const{type:n,vertical:i}=e;return t("div",{class:a([n,{vertical:i}])},[t("span",{class:a("spinner",n),style:s.value},[n==="spinner"?g:y]),o()])}}});const I=m(C);export{I as L};
