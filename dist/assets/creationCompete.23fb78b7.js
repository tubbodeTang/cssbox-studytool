import"./base.8cd46ad1.js";import"./index.5a3fded9.js";import"./index.adda227c.js";import{B as p}from"./index.7c2cb9b8.js";import{C as l}from"./index.b0ed8658.js";import{e as u,C as h,u as f,o as g,f as v,E as t,t as n,i as s,v as i,D as j,S as x,U as S,g as C}from"./vendor.006c88a1.js";import{_ as I}from"./index.2176fcd6.js";import"./constant.50ba7d8c.js";const a=[{id:1,competeName:"\u57CE\u5E02\u9AD8\u697C",content:"\u6BD4\u6BD4\u8C01\u7684\u57CE\u5E02\u66F4\u7E41\u534E\uFF1F",imgSrc:"/src/assets/lessonImg/occupyImg.jpg",joinNum:Math.floor(Math.random()*10)},{id:2,competeName:"\u6708\u591C",content:"\u5728\u6708\u8272\u8FF7\u4EBA\u7684\u591C\u665A\uFF0C\u4F60\u80FD\u60F3\u8C61\u5230\u4EC0\u4E48\u6837\u7684\u573A\u666F\uFF1F",imgSrc:"/src/assets/lessonImg/occupyImg.jpg",joinNum:Math.floor(Math.random()*10)}];function N(){const o=Math.floor(Math.random()*10);return a[o]||a[a.length-1]}const b=o=>(x("data-v-15179aa1"),o=o(),S(),o),y={class:"compete-content"},M={class:"title"},w={class:"content"},B={class:"imgContainer"},D=["src"],k={class:"bottom-container"},V={class:"data"},E={class:"join-num"},H={class:"time-num"},A=b(()=>t("span",null,"\u7ED3\u675F",-1)),F={class:"fight"},L=C("\u53C2\u4E0E\u6311\u6218"),R={setup(o){const c=u(30*60*60*1e3),e=N(),d=h();f();function m(){d.push({name:"AddCreation"})}return(T,U)=>{const r=l,_=p;return g(),v("div",null,[t("div",y,[t("p",M,"\u672C\u671F\u4E3B\u9898\uFF1A"+n(s(e).competeName),1),t("div",w,[t("p",null,n(s(e).content),1),t("div",B,[t("img",{src:s(e).imgSrc},null,8,D)])])]),t("div",k,[t("div",V,[t("span",E,"\u5DF2\u6709"+n(s(e).joinNum)+"\u4EBA\u53C2\u52A0",1),t("div",H,[i(r,{millisecond:"",time:c.value,class:"count-down",format:"HH:mm:ss:SS"},null,8,["time"]),A])]),t("div",F,[i(_,{class:"fight-btn",round:"",type:"primary",onClick:m},{default:j(()=>[L]),_:1})])])])}}};var W=I(R,[["__scopeId","data-v-15179aa1"]]);export{W as default};