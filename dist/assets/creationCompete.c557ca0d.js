import"./base.8cd46ad1.js";import"./index.5a3fded9.js";import"./index.adda227c.js";import{B as l}from"./index.7c2cb9b8.js";import{C as u}from"./index.b0ed8658.js";import{e as h,C as f,u as v,o as g,f as j,E as t,t as n,i as s,v as i,D as x,S,U as b,g as C}from"./vendor.006c88a1.js";import{o as d}from"./occupyImg.018cc833.js";import{_ as N}from"./index.83f52b4b.js";import"./constant.50ba7d8c.js";const a=[{id:1,competeName:"\u57CE\u5E02\u9AD8\u697C",content:"\u6BD4\u6BD4\u8C01\u7684\u57CE\u5E02\u66F4\u7E41\u534E\uFF1F",imgSrc:d,joinNum:Math.floor(Math.random()*10)},{id:2,competeName:"\u6708\u591C",content:"\u5728\u6708\u8272\u8FF7\u4EBA\u7684\u591C\u665A\uFF0C\u4F60\u80FD\u60F3\u8C61\u5230\u4EC0\u4E48\u6837\u7684\u573A\u666F\uFF1F",imgSrc:d,joinNum:Math.floor(Math.random()*10)}];function y(){const o=Math.floor(Math.random()*10);return a[o]||a[a.length-1]}const I=o=>(S("data-v-15179aa1"),o=o(),b(),o),M={class:"compete-content"},w={class:"title"},B={class:"content"},D={class:"imgContainer"},k=["src"],V={class:"bottom-container"},E={class:"data"},H={class:"join-num"},A={class:"time-num"},F=I(()=>t("span",null,"\u7ED3\u675F",-1)),L={class:"fight"},R=C("\u53C2\u4E0E\u6311\u6218"),T={setup(o){const c=h(30*60*60*1e3),e=y(),m=f();v();function r(){m.push({name:"AddCreation"})}return(U,q)=>{const _=u,p=l;return g(),j("div",null,[t("div",M,[t("p",w,"\u672C\u671F\u4E3B\u9898\uFF1A"+n(s(e).competeName),1),t("div",B,[t("p",null,n(s(e).content),1),t("div",D,[t("img",{src:s(e).imgSrc},null,8,k)])])]),t("div",V,[t("div",E,[t("span",H,"\u5DF2\u6709"+n(s(e).joinNum)+"\u4EBA\u53C2\u52A0",1),t("div",A,[i(_,{millisecond:"",time:c.value,class:"count-down",format:"HH:mm:ss:SS"},null,8,["time"]),F])]),t("div",L,[i(p,{class:"fight-btn",round:"",type:"primary",onClick:r},{default:x(()=>[R]),_:1})])])])}}};var Y=N(T,[["__scopeId","data-v-15179aa1"]]);export{Y as default};
