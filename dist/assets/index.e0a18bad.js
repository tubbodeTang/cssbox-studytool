import"./base.8cd46ad1.js";import{C as v,R as C}from"./index.c3e14898.js";import{b as h}from"./getCardsData.965411a8.js";import{u as g,A as x,C as N,o,f as n,v as k,D as c,F as y,h as b,c as j,E as t,t as w,j as D,n as L,i as S}from"./vendor.006c88a1.js";import{_ as B}from"./index.272251ba.js";const R={class:"card-list"},A=["onClick"],E={class:"card-icon"},O=["src"],z={class:"card-name"},F={class:"card-process"},I={setup(J){const l=g(),d=h(),i=_();function _(){return l.state.activeCardList.map(a=>a.attr)}const u=x(()=>{const a=[];return d.forEach(r=>{let e=JSON.parse(JSON.stringify(r));e.state=i.indexOf(r.attr)>-1,a.push(e)}),a}),p=N();function m(a){p.push({name:"CardPage",params:{attrName:a.attr}})}return(a,r)=>{const e=v,f=C;return o(),n("div",R,[k(f,null,{default:c(()=>[(o(!0),n(y,null,b(S(u),s=>(o(),j(e,{span:"12",key:s},{default:c(()=>[t("div",{class:L(["card-item",{inactive:!s.state}]),onClick:V=>m(s)},[t("div",E,[t("img",{src:"/src/assets/attrIcon/"+s.attr+".png"},null,8,O)]),t("p",z,w(s.name),1),t("div",F,[t("span",{class:"process-bar",style:D({width:s.curRankNum/s.rankNum*100+"%"})},null,4)])],10,A)]),_:2},1024))),128))]),_:1})])}}};var K=B(I,[["__scopeId","data-v-4eab397b"]]);export{K as default};
