import"./base.8cd46ad1.js";import"./index.adda227c.js";import{L as W}from"./index.c6cb9799.js";import{I as H}from"./index.5a3fded9.js";import{C as q}from"./index.5cf6a02c.js";import{e as p,o as l,f as a,j as h,t as U,u as G,C as J,A as K,q as Q,z as X,E as e,v as o,F as u,h as f,D as m,S as Y,U as Z,g as v,c as L,n as I,i as S}from"./vendor.006c88a1.js";import{_ as y}from"./index.83f52b4b.js";import{g as ee,a as B}from"./getLessonData.68adea16.js";import"./use-tab-status.aafe5ade.js";import"./occupyImg.018cc833.js";var te="/assets/browserBg.1e2f5dc3.png";const se={props:{styleObj:{type:Object,default:()=>({})}},setup(c){const d=p(c.styleObj);return(b,k)=>(l(),a("span",{class:"inlineD",style:h(d.value)},"This is an inline division",4))}};var oe=y(se,[["__scopeId","data-v-6d98d5f0"]]);const le={props:{styleObj:{type:Object,default:()=>({})}},setup(c){const r=c;return p(r.styleObj),(d,b)=>(l(),a("span",{class:"inlineBlockD",style:h(r.styleObj)}," This is an inline-block division ",4))}};var ne=y(le,[["__scopeId","data-v-34394a5e"]]);const ce={props:{styleObj:{type:Object,default:()=>({})},text:{type:String,default:()=>"This is a inline content"}},setup(c){return(r,d)=>U(c.text)}};const ae={props:{styleObj:{type:Object,default:()=>({})}},setup(c){const d=p(c.styleObj);return(b,k)=>(l(),a("div",{class:"blockD",style:h(d.value)},"This is a block division",4))}};var ie=y(ae,[["__scopeId","data-v-2ef39ce8"]]);const g=c=>(Y("data-v-d95cff6a"),c=c(),Z(),c),re=g(()=>e("div",{class:"browser-head"},[e("img",{src:te})],-1)),de={class:"module flowModule"},_e=v("\u6D41\u4E0E\u5E03\u5C40 "),ue={class:"show-stage"},pe={class:"module boxModule"},fe=v("\u5757\u7EA7\u6392\u5217 "),ve={class:"show-stage"},me={class:"module inlineModule"},be=v("\u884C\u7EA7\u6392\u5217 "),he={class:"show-stage"},ye=v("\u884C\u5185\u5757\u7EA7\u6392\u5217 "),ge={class:"show-stage"},ke={class:"module breakFlowModule"},je=v("\u6D6E\u52A8 "),xe=g(()=>e("div",{class:"show-stage"},null,-1)),Oe={class:"module breakFlowModule"},we=v("\u5B9A\u4F4D "),Ce=g(()=>e("div",{class:"show-stage"},null,-1)),Le={class:"module breakFlowModule"},Ie=v("\u5C42\u53E0 "),Se=g(()=>e("div",{class:"show-stage"},null,-1)),Be={setup(c){const r=G(),d={color:"#999",borderWidth:"1px",borderStyle:"solid",borderColor:ee("block","bgColor"),borderRadius:"5px"},b={borderWidth:"1px",borderStyle:"solid",borderColor:"#207227"},k={display:"inline-block",borderWidth:"1px",borderStyle:"solid",borderColor:"#964b4b"},F=J();function j(s,_){F.push({name:"StudyPage"}),r.commit("changeActiveModule",s),r.commit("changeActiveLesson",_)}const A="\u4F60\u6CE8\u610F\u5230\u6587\u5B57\u6392\u5E03\u7684\u65B9\u5411\u4E86\u5417\uFF1F\u548C\u5199\u5B57\u7684\u65B9\u5411\u662F\u4E00\u6837\u7684\u3002",T=p([]),E=p([]),x=p([]),M=K(()=>E.value.concat(x.value).concat(T.value));M.value.forEach(s=>{s.style.opacity=0});const V=(s,_=10)=>s.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)*(_/100),z=s=>{s.classList.add("scrolled")},N=s=>{s.classList.remove("scrolled")},P=()=>{M.value.forEach(s=>{V(s,50)?z(s):N(s)})};let O=!1;const R=(s,_)=>{O||(O=!0,setTimeout(()=>{s(),O=!1},_))},$=p(null);return Q(()=>{X(()=>{$.value.addEventListener("scroll",()=>{R(P,250)})})}),(s,_)=>{const i=H,w=q,C=W;return l(),a(u,null,[re,e("div",{class:"module-list",ref_key:"container",ref:$},[e("div",de,[e("p",null,[o(i,{name:"flag-o"}),_e]),e("div",ue,[(l(),a(u,null,f(A,(t,n)=>e("span",{class:"js-scroll fade-in",style:h({animationDuration:`${n/2}s`}),ref_for:!0,ref:D=>{D&&T.value.push(D)},key:t},[o(ce,{class:"test",text:t,styleObj:d},null,8,["text"])],4)),64))]),o(C,{class:"lesson-list"},{default:m(()=>[(l(!0),a(u,null,f(S(B)("flow"),t=>(l(),L(w,{onClick:n=>j("flow",t.title),key:t,title:t.title,class:I({active:t.canLearn})},null,8,["onClick","title","class"]))),128))]),_:1})]),e("div",pe,[e("p",null,[o(i,{name:"flag-o"}),fe]),e("div",ve,[(l(),a(u,null,f(4,t=>e("div",{class:"js-scroll fade-in-bottom",ref_for:!0,ref:n=>{n&&E.value.push(n)},key:t},[o(ie,{class:"test",styleObj:d})])),64))]),o(C,{class:"lesson-list"},{default:m(()=>[(l(!0),a(u,null,f(S(B)("box_block"),t=>(l(),L(w,{onClick:n=>j("box_block",t.title),key:t,title:t.title,class:I({active:t.canLearn})},{"right-icon":m(()=>[o(i,{name:"lock",class:"lock-icon"})]),_:2},1032,["onClick","title","class"]))),128))]),_:1})]),e("div",me,[e("p",null,[o(i,{name:"flag-o"}),be]),e("div",he,[(l(),a(u,null,f(4,t=>e("span",{class:"js-scroll slide-right",ref_for:!0,ref:n=>{n&&x.value.push(n)},key:t},[o(oe,{class:"test",styleObj:b})])),64))]),o(C,{class:"lesson-list"},{default:m(()=>[(l(!0),a(u,null,f(S(B)("box_inline"),t=>(l(),L(w,{onClick:n=>j("box_inline",t.title),key:t,title:t.title,class:I({active:t.canLearn})},{"right-icon":m(()=>[o(i,{name:"lock",class:"lock-icon"})]),_:2},1032,["onClick","title","class"]))),128))]),_:1})]),e("div",{class:"module inlineboxModule",onClick:_[0]||(_[0]=t=>s.toListPage("box_inline_block"))},[e("p",null,[o(i,{name:"flag-o"}),ye]),e("div",ge,[(l(),a(u,null,f(4,t=>e("span",{class:"js-scroll slide-right",ref_for:!0,ref:n=>{n&&x.value.push(n)},key:t},[o(ne,{styleObj:k})])),64))])]),e("div",ke,[e("p",null,[o(i,{name:"flag-o"}),je]),xe]),e("div",Oe,[e("p",null,[o(i,{name:"flag-o"}),we]),Ce]),e("div",Le,[e("p",null,[o(i,{name:"flag-o"}),Ie]),Se])],512)],64)}}};var Pe=y(Be,[["__scopeId","data-v-d95cff6a"]]);export{Pe as default};
