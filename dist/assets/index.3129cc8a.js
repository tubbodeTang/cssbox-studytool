import{e as C,c as $,p as se,m as U,n as O,a as qe,u as M,i as We,b as ie,w as A,d as ce,f as Ye,g as re,h as Ge,t as D,j as Ze,k as ue,l as de,o as fe,q as me}from"./base.8cd46ad1.js";import{u as Je,I as K,r as ge,a as ve,B as he}from"./index.5a3fded9.js";import{P as Q,p as Qe,a as Xe}from"./index.b5f7e56f.js";import{L as be}from"./index.adda227c.js";import{k as et,l as Ce,m as I,p as X,q as _e,s as tt,v as n,x as z,e as T,y as pe,z as nt,A as q,u as at,B as ot,C as lt,r as st,o as ee,f as it,i as j,D as w,E as P,F as ct,c as ke,G as Be,I as xe,g as te}from"./vendor.006c88a1.js";import{m as rt}from"./index.08dc9ccc.js";import{A as ye,a as ut}from"./index.75529f66.js";import{B as we}from"./index.7c2cb9b8.js";import{B as dt,a as ft,H as Pe,b as mt,c as gt}from"./constant.50ba7d8c.js";import{c as Se}from"./on-popup-reopen.15a0f405.js";import"./use-touch.abe69874.js";import"./use-lazy-render.f7e708c4.js";function Oe(){const e=Ce({show:!1}),a=i=>{e.show=i},t=i=>{C(e,i,{transitionAppear:!0}),a(!0)},o=()=>a(!1);return Je({open:t,close:o,toggle:a}),{open:t,close:o,state:e,toggle:a}}function Te(e){const a=et(e),t=document.createElement("div");return document.body.appendChild(t),{instance:a.mount(t),unmount(){a.unmount(),document.body.removeChild(t)}}}let E=0;function vt(e){e?(E||document.body.classList.add("van-toast--unclickable"),E++):E&&(E--,E||document.body.classList.remove("van-toast--unclickable"))}const[ht,F]=$("toast"),bt=["show","overlay","transition","overlayClass","overlayStyle","closeOnClickOverlay"],Ct={icon:String,show:Boolean,type:U("text"),overlay:Boolean,message:O,iconSize:O,duration:qe(2e3),position:U("middle"),className:M,iconPrefix:String,transition:U("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:M,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var Ve=I({name:ht,props:Ct,emits:["update:show"],setup(e,{emit:a}){let t,o=!1;const i=()=>{const s=e.show&&e.forbidClick;o!==s&&(o=s,vt(o))},r=s=>a("update:show",s),l=()=>{e.closeOnClick&&r(!1)},f=()=>clearTimeout(t),g=()=>{const{icon:s,type:d,iconSize:b,iconPrefix:k,loadingType:_}=e;if(s||d==="success"||d==="fail")return n(K,{name:s||d,size:b,class:F("icon"),classPrefix:k},null);if(d==="loading")return n(be,{class:F("loading"),size:b,type:_},null)},u=()=>{const{type:s,message:d}=e;if(We(d)&&d!=="")return s==="html"?n("div",{class:F("text"),innerHTML:String(d)},null):n("div",{class:F("text")},[d])};return X(()=>[e.show,e.forbidClick],i),X(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(t=setTimeout(()=>{r(!1)},e.duration))}),_e(i),tt(i),()=>n(Q,z({class:[F([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:l,onClosed:f,"onUpdate:show":r},se(e,bt)),{default:()=>[g(),u()]})}});const $e={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let x=[],W=!1,Y=C({},$e);const G=new Map;function Ae(e){return ce(e)?e:{message:e}}function _t(){const{instance:e,unmount:a}=Te({setup(){const t=T(""),{open:o,state:i,close:r,toggle:l}=Oe(),f=()=>{W&&(x=x.filter(u=>u!==e),a())},g=()=>n(Ve,z(i,{onClosed:f,"onUpdate:show":l}),null);return X(t,u=>{i.message=u}),pe().render=g,{open:o,clear:r,message:t}}});return e}function pt(){if(!x.length||W){const e=_t();x.push(e)}return x[x.length-1]}function p(e={}){if(!ie)return{};const a=pt(),t=Ae(e);return a.open(C({},Y,G.get(t.type||Y.type),t)),a}const ne=e=>a=>p(C({type:e},Ae(a)));p.loading=ne("loading");p.success=ne("success");p.fail=ne("fail");p.clear=e=>{var a;x.length&&(e?(x.forEach(t=>{t.clear()}),x=[]):W?(a=x.shift())==null||a.clear():x[0].clear())};function kt(e,a){typeof e=="string"?G.set(e,a):C(Y,e)}p.setDefaultOptions=kt;p.resetDefaultOptions=e=>{typeof e=="string"?G.delete(e):(Y=C({},$e),G.clear())};p.allowMultiple=(e=!0)=>{W=e};p.install=e=>{e.use(A(Ve)),e.config.globalProperties.$toast=p};const[Bt,ae]=$("switch"),xt={size:O,loading:Boolean,disabled:Boolean,modelValue:M,activeColor:String,inactiveColor:String,activeValue:{type:M,default:!0},inactiveValue:{type:M,default:!1}};var yt=I({name:Bt,props:xt,emits:["change","update:modelValue"],setup(e,{emit:a}){const t=()=>e.modelValue===e.activeValue,o=()=>{if(!e.disabled&&!e.loading){const r=t()?e.inactiveValue:e.activeValue;a("update:modelValue",r),a("change",r)}},i=()=>{if(e.loading){const r=t()?e.activeColor:e.inactiveColor;return n(be,{class:ae("loading"),color:r},null)}};return Ye(()=>e.modelValue),()=>{const{size:r,loading:l,disabled:f,activeColor:g,inactiveColor:u}=e,s=t(),d={fontSize:re(r),backgroundColor:s?g:u};return n("div",{role:"switch",class:ae({on:s,loading:l,disabled:f}),style:d,tabindex:f?void 0:0,"aria-checked":s,onClick:o},[n("div",{class:ae("node")},[i()])])}}});const wt=A(yt),Pt=e=>{const a=T();return _e(()=>nt(()=>{a.value=Ge(e).height})),a},[St,y,Z]=$("dialog"),Ot=C({},Qe,{title:String,theme:String,width:O,message:[String,Function],callback:Function,allowHtml:Boolean,className:M,transition:U("van-dialog-bounce"),messageAlign:String,closeOnPopstate:D,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showConfirmButton:D,closeOnClickOverlay:Boolean}),Tt=[...Xe,"transition","closeOnPopstate"];var Ie=I({name:St,props:Ot,emits:["confirm","cancel","update:show"],setup(e,{emit:a,slots:t}){const o=Ce({confirm:!1,cancel:!1}),i=c=>a("update:show",c),r=c=>{var m;i(!1),(m=e.callback)==null||m.call(e,c)},l=c=>()=>{!e.show||(a(c),e.beforeClose?(o[c]=!0,Se(e.beforeClose,{args:[c],done(){r(c),o[c]=!1},canceled(){o[c]=!1}})):r(c))},f=l("cancel"),g=l("confirm"),u=()=>{const c=t.title?t.title():e.title;if(c)return n("div",{class:y("header",{isolated:!e.message&&!t.default})},[c])},s=c=>{const{message:m,allowHtml:S,messageAlign:v}=e,B=y("message",{"has-title":c,[v]:v}),N=Ze(m)?m():m;return S&&typeof N=="string"?n("div",{class:B,innerHTML:N},null):n("div",{class:B},[N])},d=()=>{if(t.default)return n("div",{class:y("content")},[t.default()]);const{title:c,message:m,allowHtml:S}=e;if(m){const v=!!(c||t.title);return n("div",{key:S?1:0,class:y("content",{isolated:!v})},[s(v)])}},b=()=>n("div",{class:[ft,y("footer")]},[e.showCancelButton&&n(we,{size:"large",text:e.cancelButtonText||Z("cancel"),class:y("cancel"),style:{color:e.cancelButtonColor},loading:o.cancel,onClick:f},null),e.showConfirmButton&&n(we,{size:"large",text:e.confirmButtonText||Z("confirm"),class:[y("confirm"),{[dt]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:o.confirm,onClick:g},null)]),k=()=>n(ut,{class:y("footer")},{default:()=>[e.showCancelButton&&n(ye,{type:"warning",text:e.cancelButtonText||Z("cancel"),class:y("cancel"),color:e.cancelButtonColor,loading:o.cancel,onClick:f},null),e.showConfirmButton&&n(ye,{type:"danger",text:e.confirmButtonText||Z("confirm"),class:y("confirm"),color:e.confirmButtonColor,loading:o.confirm,onClick:g},null)]}),_=()=>t.footer?t.footer():e.theme==="round-button"?k():b();return()=>{const{width:c,title:m,theme:S,message:v,className:B}=e;return n(Q,z({role:"dialog",class:[y([S]),B],style:{width:re(c)},"aria-labelledby":m||v,"onUpdate:show":i},se(e,Tt)),{default:()=>[u(),d(),_()]})}}});let H;function Vt(){({instance:H}=Te({setup(){const{state:a,toggle:t}=Oe();return()=>n(Ie,z(a,{"onUpdate:show":t}),null)}}))}function h(e){return ie?new Promise((a,t)=>{H||Vt(),H.open(C({},h.currentOptions,e,{callback:o=>{(o==="confirm"?a:t)(o)}}))}):Promise.resolve()}h.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};h.currentOptions=C({},h.defaultOptions);h.alert=h;h.confirm=e=>h(C({showCancelButton:!0},e));h.close=()=>{H&&H.toggle(!1)};h.setDefaultOptions=e=>{C(h.currentOptions,e)};h.resetDefaultOptions=()=>{h.currentOptions=C({},h.defaultOptions)};h.Component=A(Ie);h.install=e=>{e.use(h.Component),e.config.globalProperties.$dialog=h};function Ne(e,a){const t=Pt(e);return o=>n("div",{class:a("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[o()])}const[$t,V]=$("nav-bar"),At={title:String,fixed:Boolean,zIndex:O,border:D,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var It=I({name:$t,props:At,emits:["click-left","click-right"],setup(e,{emit:a,slots:t}){const o=T(),i=Ne(o,V),r=s=>a("click-left",s),l=s=>a("click-right",s),f=()=>t.left?t.left():[e.leftArrow&&n(K,{class:V("arrow"),name:"arrow-left"},null),e.leftText&&n("span",{class:V("text")},[e.leftText])],g=()=>t.right?t.right():n("span",{class:V("text")},[e.rightText]),u=()=>{const{title:s,fixed:d,border:b,zIndex:k}=e,_=ue(k),c=e.leftArrow||e.leftText||t.left,m=e.rightText||t.right;return n("div",{ref:o,style:_,class:[V({fixed:d,"safe-area-inset-top":e.safeAreaInsetTop}),{[mt]:b}]},[n("div",{class:V("content")},[c&&n("div",{class:[V("left"),Pe],onClick:r},[f()]),n("div",{class:[V("title"),"van-ellipsis"]},[t.title?t.title():s]),m&&n("div",{class:[V("right"),Pe],onClick:l},[g()])])])};return()=>e.fixed&&e.placeholder?i(u):u()}});const Nt=A(It),[Le,Lt]=$("sidebar"),Re=Symbol(Le),Rt={modelValue:de(0)};var Mt=I({name:Le,props:Rt,emits:["change","update:modelValue"],setup(e,{emit:a,slots:t}){const{linkChildren:o}=fe(Re),i=()=>+e.modelValue;return o({getActive:i,setActive:l=>{l!==i()&&(a("update:modelValue",l),a("change",l))}}),()=>{var l;return n("div",{role:"tablist",class:Lt()},[(l=t.default)==null?void 0:l.call(t)])}}});const zt=A(Mt),[jt,Me]=$("sidebar-item"),Dt=C({},ge,{dot:Boolean,title:String,badge:O,disabled:Boolean,badgeProps:Object});var Et=I({name:jt,props:Dt,emits:["click"],setup(e,{emit:a,slots:t}){const o=ve(),{parent:i,index:r}=me(Re);if(!i)return;const l=()=>{e.disabled||(a("click",r.value),i.setActive(r.value),o())};return()=>{const{dot:f,badge:g,title:u,disabled:s}=e,d=r.value===i.getActive();return n("div",{role:"tab",class:Me({select:d,disabled:s}),tabindex:s?void 0:0,"aria-selected":d,onClick:l},[n(he,z({dot:f,class:Me("text"),content:g},e.badgeProps),{default:()=>[t.title?t.title():u]})])}}});const Ft=A(Et),[ze,je]=$("tabbar"),Ht={route:Boolean,fixed:D,border:D,zIndex:O,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:de(0),safeAreaInsetBottom:{type:Boolean,default:null}},De=Symbol(ze);var Ut=I({name:ze,props:Ht,emits:["change","update:modelValue"],setup(e,{emit:a,slots:t}){const o=T(),{linkChildren:i}=fe(De),r=Ne(o,je),l=()=>{var u;return(u=e.safeAreaInsetBottom)!=null?u:e.fixed},f=()=>{var u;const{fixed:s,zIndex:d,border:b}=e;return n("div",{ref:o,role:"tablist",style:ue(d),class:[je({fixed:s}),{[gt]:b,"van-safe-area-bottom":l()}]},[(u=t.default)==null?void 0:u.call(t)])};return i({props:e,setActive:(u,s)=>{Se(e.beforeChange,{args:[u],done(){a("update:modelValue",u),a("change",u),s()}})}}),()=>e.fixed&&e.placeholder?r(f):f()}});const Kt=A(Ut),[qt,oe]=$("tabbar-item"),Wt=C({},ge,{dot:Boolean,icon:String,name:O,badge:O,badgeProps:Object,iconPrefix:String});var Yt=I({name:qt,props:Wt,emits:["click"],setup(e,{emit:a,slots:t}){const o=ve(),i=pe().proxy,{parent:r,index:l}=me(De);if(!r)return;const f=q(()=>{var s;const{route:d,modelValue:b}=r.props;if(d&&"$route"in i){const{$route:k}=i,{to:_}=e,c=ce(_)?_:{path:_};return!!k.matched.find(m=>{const S="path"in c&&c.path===m.path,v="name"in c&&c.name===m.name;return S||v})}return((s=e.name)!=null?s:l.value)===b}),g=s=>{var d;f.value||r.setActive((d=e.name)!=null?d:l.value,o),a("click",s)},u=()=>{if(t.icon)return t.icon({active:f.value});if(e.icon)return n(K,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var s;const{dot:d,badge:b}=e,{activeColor:k,inactiveColor:_}=r.props,c=f.value?k:_;return n("div",{role:"tab",class:oe({active:f.value}),style:{color:c},tabindex:0,"aria-selected":f.value,onClick:g},[n(he,z({dot:d,class:oe("icon"),content:b},e.badgeProps),{default:u}),n("div",{class:oe("text")},[(s=t.default)==null?void 0:s.call(t,{active:f.value})])])}}});const Gt=A(Yt);const Zt={class:"container"},Jt={class:"user-info"},Qt={class:"avatar"},Xt=["innerHTML"],en=P("div",{class:"user-name"},"txb406",-1),tn=P("div",{class:"achieve"},null,-1),nn={class:"group"},an={class:"group"},on=P("span",null,"\u5B66\u4E60\u63D0\u9192",-1),ln=P("span",null,"\u591C\u95F4\u6A21\u5F0F",-1),sn=te("\u5B66\u4E60\u4E2D\u5FC3"),cn=te("\u521B\u610F\u533A"),rn=te("\u8BA8\u8BBA\u533A"),Bn={setup(e){let a=T(rt("txb406")),t=T(!1),o=T(!1);const i=T(-1),r=v=>{i.value=-1,v==0?k():v==1?_():v==2||(v==3?h.alert({message:`\u786E\u5B9A\u8981\u91CD\u7F6E\u8BB0\u5F55\u5417\uFF1F
 \u91CD\u7F6E\u540E\u4E0D\u53EF\u6062\u590D\uFF01`}).then(()=>{p.loading({message:"\u6E05\u7406\u4E2D...",forbidClick:!0,onClose:()=>{p.success("\u91CD\u7F6E\u6210\u529F"),m.value=!1}})}):v==4?t.value=!t.value:v==5&&(o.value=!o.value))},l=at();let f=q(()=>l.state.pageTitle);q(()=>l.state.showBackBtn);const g=ot();let u=q(()=>{switch(console.log(g.fullPath),g.fullPath){case"/study/studyList":l.commit("changePageName","\u5B66\u4E60\u4E2D\u5FC3");break;case"/study/studyPage":l.commit("changePageName",l.state.activeLesson);break;case"/creationCenter/creation":l.commit("changePageName","\u521B\u610F\u533A");break;case"/creationCenter/addCreation":l.commit("changePageName","\u65B0\u521B\u4F5C");break;case"/creationCenter/creationCompete":l.commit("changePageName","\u7ADE\u8D5B");break;case"/discussCenter/discuss":l.commit("changePageName","\u8BA8\u8BBA\u533A");break;case"/discussCenter/topicDetail":l.commit("changePageName","\u8BE6\u60C5");break;case"/discussCenter/addTopic":l.commit("changePageName","\u6DFB\u52A0\u8BA8\u8BBA");break;case"/discussCenter/msgList":l.commit("changePageName","\u65B0\u6D88\u606F");break;case"/collectionCenter/cardList":l.commit("changePageName","\u6536\u96C6\u7BB1");break;case"/collectionCenter/cardPage":l.commit("changePageName","\u5361\u7247\u8BE6\u60C5");break;case"/statisticCenter/statistic":l.commit("changePageName","\u5B66\u4E60\u7EDF\u8BA1");break}return g.fullPath==="/study/studyList"||g.fullPath==="/creationCenter/creation"||g.fullPath==="/discussCenter/discuss"});const s=lt();function d(){s.go(-1),l.commit("createEleIDClear")}function b(){s.push({name:"CardList"})}function k(){m.value=!1,s.push({name:"Statistic"})}function _(){m.value=!1,s.push({name:"MsgList"})}const c=v=>{m.value=!1},m=T(!1),S=()=>{m.value=!0};return(v,B)=>{const N=K,Ee=Nt,Fe=st("router-view"),R=Ft,le=wt,He=zt,Ue=Q,J=Gt,Ke=Kt;return ee(),it(ct,null,[n(Ee,{title:j(f),"safe-area-inset-top":""},{left:w(()=>[j(u)?Be("",!0):(ee(),ke(N,{key:0,class:"big-icon blue",name:"arrow-left",onClick:d})),j(u)?(ee(),ke(N,{key:1,class:"big-icon blue",name:"smile-o",onClick:S})):Be("",!0)]),right:w(()=>[n(N,{class:"big-icon yellow",name:"diamond",onClick:b})]),_:1},8,["title"]),P("div",Zt,[n(Fe),n(Ue,{show:m.value,position:"left",style:{height:"100%",width:"150px"},onClickOverlay:c},{default:w(()=>[P("div",Jt,[P("div",Qt,[P("span",{innerHTML:j(a)},null,8,Xt)]),en,tn]),n(He,{modelValue:i.value,"onUpdate:modelValue":B[2]||(B[2]=L=>i.value=L),onChange:r},{default:w(()=>[P("div",nn,[n(R,{title:"\u6570\u636E\u7EDF\u8BA1",dot:""}),n(R,{title:"\u65B0\u6D88\u606F",badge:"5"}),n(R,{title:"\u5185\u5BB9\u6536\u85CF"})]),P("div",an,[n(R,{title:"\u91CD\u7F6E\u5B66\u4E60\u8BB0\u5F55"}),n(R,null,{title:w(()=>[on,n(le,{modelValue:j(t),"onUpdate:modelValue":B[0]||(B[0]=L=>xe(t)?t.value=L:t=L),size:"16px","active-color":"#ee0a24","inactive-color":"#dcdee0",style:{"vertical-align":"sub","margin-left":"20px"}},null,8,["modelValue"])]),_:1}),n(R,null,{title:w(()=>[ln,n(le,{modelValue:j(o),"onUpdate:modelValue":B[1]||(B[1]=L=>xe(o)?o.value=L:o=L),size:"16px","active-color":"#ee0a24","inactive-color":"#dcdee0",style:{"vertical-align":"sub","margin-left":"20px"}},null,8,["modelValue"])]),_:1})])]),_:1},8,["modelValue"])]),_:1},8,["show"])]),n(Ke,{route:"","safe-area-inset-bottom":"","active-color":"#73c0de"},{default:w(()=>[n(J,{replace:"",to:"/study",icon:"home-o",name:"\u5B66\u4E60\u4E2D\u5FC3"},{default:w(()=>[sn]),_:1}),n(J,{replace:"",to:"/creationCenter",icon:"flower-o",name:"\u521B\u610F\u533A"},{default:w(()=>[cn]),_:1}),n(J,{replace:"",to:"/discussCenter",icon:"friends-o",name:"\u8BA8\u8BBA\u533A",badge:"5"},{default:w(()=>[rn]),_:1})]),_:1})],64)}}};export{Bn as default};