import{c as R,e as S,m as E,t as A,p as I,y as B,w as $}from"./base.8cd46ad1.js";import"./index.adda227c.js";import{L as H}from"./index.c6cb9799.js";import{C as U}from"./index.75a64952.js";import{u as W}from"./index.5a3fded9.js";import{T as q}from"./index.7aa464a1.js";import{C as z}from"./index.5cf6a02c.js";import{f as P,F as K}from"./index.0be78dc2.js";import{m as O,e as k,v as i,x as G,C as Y,u as J,o as N,f as V,D as u,E as d,F as Q,h as X,c as Z,t as C,g as ee}from"./vendor.006c88a1.js";import{c as ae}from"./getCardsData.965411a8.js";import{m as F}from"./index.08dc9ccc.js";import{d as te}from"./index.b9a70a69.js";import{_ as ne}from"./index.2176fcd6.js";import{u as oe}from"./use-id.e0f8e9c4.js";import"./use-tab-status.aafe5ade.js";import"./constant.50ba7d8c.js";const[se,_,ce]=R("search"),re=S({},P,{label:String,shape:E("square"),leftIcon:E("search"),clearable:A,actionText:String,background:String,showAction:Boolean});var le=O({name:se,props:re,emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(r,{emit:o,slots:s,attrs:m}){const v=oe(),f=k(),y=()=>{s.action||(o("update:modelValue",""),o("cancel"))},j=e=>{const g=13;e.keyCode===g&&(B(e),o("search",r.modelValue))},p=()=>r.id||`${v}-input`,b=()=>{if(s.label||r.label)return i("label",{class:_("label"),for:p()},[s.label?s.label():r.label])},x=()=>{if(r.showAction){const e=r.actionText||ce("cancel");return i("div",{class:_("action"),role:"button",tabindex:0,onClick:y},[s.action?s.action():e])}},D=()=>{var e;return(e=f.value)==null?void 0:e.blur()},M=()=>{var e;return(e=f.value)==null?void 0:e.focus()},T=e=>o("blur",e),w=e=>o("focus",e),L=e=>o("clear",e),a=e=>o("click-input",e),t=e=>o("click-left-icon",e),n=e=>o("click-right-icon",e),l=Object.keys(P),h=()=>{const e=S({},m,I(r,l),{id:p()}),g=c=>o("update:modelValue",c);return i(K,G({ref:f,type:"search",class:_("field"),border:!1,onBlur:T,onFocus:w,onClear:L,onKeypress:j,"onClick-input":a,"onClick-left-icon":t,"onClick-right-icon":n,"onUpdate:modelValue":g},e),I(s,["left-icon","right-icon"]))};return W({focus:M,blur:D}),()=>{var e;return i("div",{class:_({"show-action":r.showAction}),style:{background:r.background}},[(e=s.left)==null?void 0:e.call(s),i("div",{class:_("content",r.shape)},[b(),h()]),x()])}}});const ie=$(le);const de={class:"list-container"},ue={class:"title"},me={class:"info"},fe={class:"update-time"},pe={class:"avatar",style:""},he=["innerHTML"],ge={class:"name"},_e={setup(r){const o=new te.LoremIpsum({sentencesPerParagraph:{max:5,min:1},wordsPerSentence:{max:8,min:4}}),s=k([]),m=k(!1),v=k(!1),f=ae(),y=()=>{setTimeout(()=>{for(let a=0;a<10;a++)s.value.push({id:s.value.length+1,title:o.generateSentences(1),content:o.generateParagraphs(Math.floor(Math.random()*10)),zanNum:Math.floor(Math.random()*10),avatar:F(s.value.length+1),userName:o.generateWords(1),updateDate:x(p,b),topicLabel:f[a],showTransaction:!1,myLike:!1});m.value=!1,s.value.length>=40&&(v.value=!0)},1e3)},j=a=>{const t=Math.floor(Math.random()*10);a.comment=[];for(let n=0;n<t;n++)a.comment.push({id:n,content:o.generateWords(Math.floor(Math.random()*10))||o.generateParagraphs(Math.floor(Math.random()*10)),zanNum:Math.floor(Math.random()*10),avatar:F(n),userName:o.generateWords(1),updateDate:x(p,b),myLike:!1})},p=new Date("2021-10-25"),b=new Date,x=(a,t)=>{let n=new Date(+a+Math.random()*(t-a)),l=0+Math.random()*(23-0)|0,h=0+Math.random()*(59-0)|0,e=0+Math.random()*(59-0)|0;return n.setHours(l),n.setMinutes(h),n.setSeconds(e),D("yyyy-MM-dd hh:mm:ss",n)};function D(a,t){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var l in n)new RegExp("("+l+")").test(a)&&(a=a.replace(RegExp.$1,RegExp.$1.length==1?n[l]:("00"+n[l]).substr((""+n[l]).length)));return a}const M=Y(),T=J();function w(a){M.push({name:"TopicDetail"}),j(a),T.commit("selectTopic",a)}function L(){M.push({name:"AddTopic"})}return(a,t)=>{const n=ie,l=z,h=q,e=U,g=H;return N(),V("div",de,[i(n,{class:"search",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=c=>a.value=c),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"},null,8,["modelValue"]),i(g,{loading:m.value,"onUpdate:loading":t[1]||(t[1]=c=>m.value=c),finished:v.value,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:y},{default:u(()=>[(N(!0),V(Q,null,X(s.value,c=>(N(),Z(e,{inset:"",key:c,class:"discuss-item",onClick:ve=>w(c)},{default:u(()=>[i(l,{class:"title-info"},{title:u(()=>[d("span",ue,C(c.title),1)]),_:2},1024),i(l,{class:"other-info"},{title:u(()=>[d("div",me,[i(h,{plain:"",color:"#666"},{default:u(()=>[ee(C(c.topicLabel),1)]),_:2},1024),d("div",fe,C(c.updateDate),1)])]),value:u(()=>[d("div",pe,[d("span",{innerHTML:c.avatar},null,8,he)]),d("div",ge,[d("span",null,C(c.userName),1)])]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1},8,["loading","finished"]),d("button",{class:"add-btn",onClick:L},"+")])}}};var Ve=ne(_e,[["__scopeId","data-v-4e63fe7c"]]);export{Ve as default};
