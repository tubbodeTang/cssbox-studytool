import{u as re,c as C,n as P,t as V,g as E,w as k,m as L,a as M,e as z,b as D,i as ce}from"./base.fd59f32f.js";import{I as R,r as F,u as H,B as K}from"./index.c59f0326.js";import{P as ie}from"./index.bb7009e5.js";import{e as T,l as le,m as de,p as a,q as y,s as Y,v as ue,x as A,u as me,y as fe,z as ve,r as he,o as j,f as _e,i as I,A as g,B as p,F as be,c as q,C as U,g as O}from"./vendor.f9b4ed9a.js";import{m as ge}from"./index.08dc9ccc.js";import{H as Z,B as pe,a as xe}from"./constant.26cafd46.js";import{c as Be}from"./on-popup-reopen.4964c803.js";import"./use-touch.f540989d.js";import"./use-lazy-render.01417c4d.js";const Ce=e=>{const o=T();return le(()=>de(()=>{o.value=re(e).height})),o};function G(e,o){const t=Ce(e);return l=>a("div",{class:o("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[l()])}const[Pe,h]=C("nav-bar"),ke={title:String,fixed:Boolean,zIndex:P,border:V,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var Te=y({name:Pe,props:ke,emits:["click-left","click-right"],setup(e,{emit:o,slots:t}){const l=T(),d=G(l,h),s=n=>o("click-left",n),c=n=>o("click-right",n),i=()=>t.left?t.left():[e.leftArrow&&a(R,{class:h("arrow"),name:"arrow-left"},null),e.leftText&&a("span",{class:h("text")},[e.leftText])],_=()=>t.right?t.right():a("span",{class:h("text")},[e.rightText]),r=()=>{const{title:n,fixed:u,border:f,zIndex:x}=e,m=E(x),v=e.leftArrow||e.leftText||t.left,b=e.rightText||t.right;return a("div",{ref:l,style:m,class:[h({fixed:u,"safe-area-inset-top":e.safeAreaInsetTop}),{[pe]:f}]},[a("div",{class:h("content")},[v&&a("div",{class:[h("left"),Z],onClick:s},[i()]),a("div",{class:[h("title"),"van-ellipsis"]},[t.title?t.title():n]),b&&a("div",{class:[h("right"),Z],onClick:c},[_()])])])};return()=>e.fixed&&e.placeholder?d(r):r()}});const ye=k(Te),[J,Ae]=C("sidebar"),Q=Symbol(J),Ie={modelValue:L(0)};var we=y({name:J,props:Ie,emits:["change","update:modelValue"],setup(e,{emit:o,slots:t}){const{linkChildren:l}=M(Q),d=()=>+e.modelValue;return l({getActive:d,setActive:c=>{c!==d()&&(o("update:modelValue",c),o("change",c))}}),()=>{var c;return a("div",{role:"tablist",class:Ae()},[(c=t.default)==null?void 0:c.call(t)])}}});const $e=k(we),[Se,W]=C("sidebar-item"),Ve=z({},F,{dot:Boolean,title:String,badge:P,disabled:Boolean,badgeProps:Object});var Re=y({name:Se,props:Ve,emits:["click"],setup(e,{emit:o,slots:t}){const l=H(),{parent:d,index:s}=D(Q);if(!d)return;const c=()=>{e.disabled||(o("click",s.value),d.setActive(s.value),l())};return()=>{const{dot:i,badge:_,title:r,disabled:n}=e,u=s.value===d.getActive();return a("div",{role:"tab",class:W({select:u,disabled:n}),tabindex:n?void 0:0,"aria-selected":u,onClick:c},[a(K,Y({dot:i,class:W("text"),content:_},e.badgeProps),{default:()=>[t.title?t.title():r]})])}}});const je=k(Re),[X,ee]=C("tabbar"),Oe={route:Boolean,fixed:V,border:V,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:L(0),safeAreaInsetBottom:{type:Boolean,default:null}},te=Symbol(X);var Ne=y({name:X,props:Oe,emits:["change","update:modelValue"],setup(e,{emit:o,slots:t}){const l=T(),{linkChildren:d}=M(te),s=G(l,ee),c=()=>{var r;return(r=e.safeAreaInsetBottom)!=null?r:e.fixed},i=()=>{var r;const{fixed:n,zIndex:u,border:f}=e;return a("div",{ref:l,role:"tablist",style:E(u),class:[ee({fixed:n}),{[xe]:f,"van-safe-area-bottom":c()}]},[(r=t.default)==null?void 0:r.call(t)])};return d({props:e,setActive:(r,n)=>{Be(e.beforeChange,{args:[r],done(){o("update:modelValue",r),o("change",r),n()}})}}),()=>e.fixed&&e.placeholder?s(i):i()}});const Ee=k(Ne),[Le,N]=C("tabbar-item"),Me=z({},F,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String});var ze=y({name:Le,props:Me,emits:["click"],setup(e,{emit:o,slots:t}){const l=H(),d=ue().proxy,{parent:s,index:c}=D(te);if(!s)return;const i=A(()=>{var n;const{route:u,modelValue:f}=s.props;if(u&&"$route"in d){const{$route:x}=d,{to:m}=e,v=ce(m)?m:{path:m};return!!x.matched.find(b=>{const w="path"in v&&v.path===b.path,$="name"in v&&v.name===b.name;return w||$})}return((n=e.name)!=null?n:c.value)===f}),_=n=>{var u;i.value||s.setActive((u=e.name)!=null?u:c.value,l),o("click",n)},r=()=>{if(t.icon)return t.icon({active:i.value});if(e.icon)return a(R,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var n;const{dot:u,badge:f}=e,{activeColor:x,inactiveColor:m}=s.props,v=i.value?x:m;return a("div",{role:"tab",class:N({active:i.value}),style:{color:v},tabindex:0,"aria-selected":i.value,onClick:_},[a(K,Y({dot:u,class:N("icon"),content:f},e.badgeProps),{default:r}),a("div",{class:N("text")},[(n=t.default)==null?void 0:n.call(t,{active:i.value})])])}}});const De=k(ze);const Fe={class:"container"},He={class:"user-info"},Ke={class:"avatar"},Ye=["innerHTML"],qe=p("div",{class:"user-name"},"txb406",-1),Ue=p("div",{class:"achieve"},null,-1),Ze={class:"group"},Ge={class:"group"},Je=O("\u5B66\u4E60\u4E2D\u5FC3"),Qe=O("\u521B\u610F\u533A"),We=O("\u8BA8\u8BBA\u533A"),it={setup(e){let o=T(ge("txb406"));const t=me();let l=A(()=>t.state.pageTitle),d=A(()=>t.state.showBackBtn);const s=fe();let c=A(()=>(console.log(s.fullPath),s.fullPath==="/study/studyList"||s.fullPath==="/creationCenter/creation"||s.fullPath==="/discussCenter/discuss"));const i=ve();function _(){i.go(-1),t.commit("popOldPageName"),t.commit("createEleIDClear")}function r(){i.push({name:"CardList"}),t.commit("changePageName","\u6536\u96C6\u9875")}const n=m=>t.commit("changePageName",m),u=m=>{f.value=!1},f=T(!1),x=()=>{f.value=!0};return(m,v)=>{const b=R,w=ye,$=he("router-view"),B=je,ae=$e,ne=ie,S=De,oe=Ee;return j(),_e(be,null,[a(w,{title:I(l),"safe-area-inset-top":""},{left:g(()=>[I(d)?(j(),q(b,{key:0,name:"arrow-left",onClick:_})):U("",!0),I(c)?(j(),q(b,{key:1,class:"big-icon",name:"smile-o",onClick:x})):U("",!0)]),right:g(()=>[a(b,{class:"big-icon yellow",name:"diamond",onClick:r})]),_:1},8,["title"]),p("div",Fe,[a($),a(ne,{show:f.value,position:"left",style:{height:"100%",width:"150px"},onClickOverlay:u},{default:g(()=>[p("div",He,[p("div",Ke,[p("span",{innerHTML:I(o)},null,8,Ye)]),qe,Ue]),a(ae,{modelValue:m.active,"onUpdate:modelValue":v[0]||(v[0]=se=>m.active=se)},{default:g(()=>[p("div",Ze,[a(B,{title:"\u6570\u636E\u7EDF\u8BA1",dot:""}),a(B,{title:"\u65B0\u6D88\u606F",badge:"5"}),a(B,{title:"\u5185\u5BB9\u6536\u85CF"})]),p("div",Ge,[a(B,{title:"\u91CD\u7F6E\u5B66\u4E60\u8BB0\u5F55"}),a(B,{title:"\u5B66\u4E60\u63D0\u9192"}),a(B,{title:"\u591C\u95F4\u6A21\u5F0F"})])]),_:1},8,["modelValue"])]),_:1},8,["show"])]),a(oe,{route:"","safe-area-inset-bottom":"",onChange:n},{default:g(()=>[a(S,{replace:"",to:"/study",icon:"home-o",name:"\u5B66\u4E60\u4E2D\u5FC3"},{default:g(()=>[Je]),_:1}),a(S,{replace:"",to:"/creationCenter",icon:"flower-o",name:"\u521B\u610F\u533A"},{default:g(()=>[Qe]),_:1}),a(S,{replace:"",to:"/discussCenter",icon:"friends-o",name:"\u8BA8\u8BBA\u533A",badge:"5"},{default:g(()=>[We]),_:1})]),_:1})],64)}}};export{it as default};