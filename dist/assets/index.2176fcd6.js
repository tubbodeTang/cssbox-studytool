import{r as E,o as _,c as C,a as A,b as k,d as x,H as u,u as P,e as T,f as D,g as b,t as w,F as j,h as R,n as N,i as V,j as W,w as S,k as z}from"./vendor.006c88a1.js";const B=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}};B();const M={setup(n){return(o,e)=>{const i=E("router-view");return _(),C(i)}}},H="modulepreload",L={},$="/",c=function(o,e){return!e||e.length===0?o():Promise.all(e.map(i=>{if(i=`${$}${i}`,i in L)return;L[i]=!0;const r=i.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${t}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":H,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((s,m)=>{a.addEventListener("load",s),a.addEventListener("error",m)})})).then(()=>o())},q=A(),F=k({history:q,routes:[{path:"/",name:"Home",redirect:"/study"},{path:"/study",name:"Study",redirect:"/study/studyList",component:()=>c(()=>import("./index.3129cc8a.js"),["assets/index.3129cc8a.js","assets/index.10c31587.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.b5f7e56f.js","assets/index.55e2151d.css","assets/use-touch.abe69874.js","assets/use-lazy-render.f7e708c4.js","assets/on-popup-reopen.15a0f405.js","assets/constant.50ba7d8c.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.08dc9ccc.js","assets/index.75529f66.js","assets/index.e7214b8a.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css"]),children:[{path:"studyList",name:"StudyList",component:()=>c(()=>import("./studyList.c0cca829.js"),["assets/studyList.c0cca829.js","assets/studyList.6465b1a3.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.c6cb9799.js","assets/index.803e12c6.css","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/use-tab-status.aafe5ade.js","assets/index.5cf6a02c.js","assets/index.af5d3ea0.css","assets/getLessonData.0cbe8379.js"])},{path:"studyPage",name:"StudyPage",component:()=>c(()=>import("./studyPage.e321fbc1.js"),["assets/studyPage.e321fbc1.js","assets/studyPage.87da4258.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.b5f7e56f.js","assets/index.55e2151d.css","assets/use-touch.abe69874.js","assets/use-lazy-render.f7e708c4.js","assets/on-popup-reopen.15a0f405.js","assets/constant.50ba7d8c.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css","assets/getLessonData.0cbe8379.js","assets/index.390f3268.js","assets/index.c52a6b89.css","assets/use-refs.26beffad.js","assets/getCardsData.965411a8.js"])}]},{path:"/creationCenter",name:"CreationCenter",redirect:"/creationCenter/creation",component:()=>c(()=>import("./index.3129cc8a.js"),["assets/index.3129cc8a.js","assets/index.10c31587.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.b5f7e56f.js","assets/index.55e2151d.css","assets/use-touch.abe69874.js","assets/use-lazy-render.f7e708c4.js","assets/on-popup-reopen.15a0f405.js","assets/constant.50ba7d8c.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.08dc9ccc.js","assets/index.75529f66.js","assets/index.e7214b8a.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css"]),children:[{path:"creation",name:"Creation",component:()=>c(()=>import("./index.6539043f.js"),["assets/index.6539043f.js","assets/index.9381446c.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.c3e14898.js","assets/index.6d23c47a.css","assets/index.b0ed8658.js","assets/index.01702944.css","assets/on-popup-reopen.15a0f405.js","assets/use-id.e0f8e9c4.js","assets/use-refs.26beffad.js","assets/use-touch.abe69874.js","assets/constant.50ba7d8c.js","assets/use-tab-status.aafe5ade.js"])},{path:"addCreation",name:"AddCreation",component:()=>c(()=>import("./addCreation.aac4ff87.js"),["assets/addCreation.aac4ff87.js","assets/addCreation.8a4826ef.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.75529f66.js","assets/index.e7214b8a.css","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/constant.50ba7d8c.js","assets/index.6bb76d16.js","assets/index.13f9802b.css","assets/index.7aa464a1.js","assets/index.b779ba7b.css","assets/index.b5f7e56f.js","assets/index.55e2151d.css","assets/use-touch.abe69874.js","assets/use-lazy-render.f7e708c4.js","assets/on-popup-reopen.15a0f405.js","assets/index.c3e14898.js","assets/index.6d23c47a.css","assets/getCardsData.965411a8.js"])},{path:"creationCompete",name:"CreationCompete",component:()=>c(()=>import("./creationCompete.23fb78b7.js"),["assets/creationCompete.23fb78b7.js","assets/creationCompete.25a49420.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css","assets/constant.50ba7d8c.js","assets/index.b0ed8658.js","assets/index.01702944.css"])}]},{path:"/discussCenter",name:"DiscussCenter",redirect:"/discussCenter/discuss",component:()=>c(()=>import("./index.3129cc8a.js"),["assets/index.3129cc8a.js","assets/index.10c31587.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.b5f7e56f.js","assets/index.55e2151d.css","assets/use-touch.abe69874.js","assets/use-lazy-render.f7e708c4.js","assets/on-popup-reopen.15a0f405.js","assets/constant.50ba7d8c.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.08dc9ccc.js","assets/index.75529f66.js","assets/index.e7214b8a.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css"]),children:[{path:"discuss",name:"Discuss",component:()=>c(()=>import("./discuss.475cb406.js"),["assets/discuss.475cb406.js","assets/discuss.e0588c90.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.c6cb9799.js","assets/index.803e12c6.css","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/use-tab-status.aafe5ade.js","assets/index.75a64952.js","assets/index.656bb26e.css","assets/constant.50ba7d8c.js","assets/index.7aa464a1.js","assets/index.b779ba7b.css","assets/index.5cf6a02c.js","assets/index.af5d3ea0.css","assets/index.0be78dc2.js","assets/index.12939bf8.css","assets/use-id.e0f8e9c4.js","assets/getCardsData.965411a8.js","assets/index.08dc9ccc.js","assets/index.b9a70a69.js"])},{path:"topicDetail",name:"TopicDetail",component:()=>c(()=>import("./topicDetail.eeb80095.js"),["assets/topicDetail.eeb80095.js","assets/topicDetail.c29e0814.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.c6cb9799.js","assets/index.803e12c6.css","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/use-tab-status.aafe5ade.js","assets/index.75a64952.js","assets/index.656bb26e.css","assets/constant.50ba7d8c.js","assets/index.5cf6a02c.js","assets/index.af5d3ea0.css"])},{path:"addTopic",name:"AddTopic",component:()=>c(()=>import("./addTopic.78dc6452.js"),["assets/addTopic.78dc6452.js","assets/addTopic.fdb699aa.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.75529f66.js","assets/index.e7214b8a.css","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/constant.50ba7d8c.js","assets/index.6bb76d16.js","assets/index.13f9802b.css","assets/index.5cf6a02c.js","assets/index.af5d3ea0.css","assets/index.0be78dc2.js","assets/index.12939bf8.css","assets/use-id.e0f8e9c4.js"])},{path:"msgList",name:"MsgList",component:()=>c(()=>import("./msgList.cd965af5.js"),["assets/msgList.cd965af5.js","assets/msgList.3636d8f1.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.c6cb9799.js","assets/index.803e12c6.css","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/use-tab-status.aafe5ade.js","assets/index.75a64952.js","assets/index.656bb26e.css","assets/constant.50ba7d8c.js","assets/index.5cf6a02c.js","assets/index.af5d3ea0.css","assets/getCardsData.965411a8.js","assets/index.08dc9ccc.js","assets/index.b9a70a69.js"])}]},{path:"/collectionCenter",name:"CollectionCenter",redirect:"/collectionCenter/cardList",component:()=>c(()=>import("./index.3129cc8a.js"),["assets/index.3129cc8a.js","assets/index.10c31587.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.b5f7e56f.js","assets/index.55e2151d.css","assets/use-touch.abe69874.js","assets/use-lazy-render.f7e708c4.js","assets/on-popup-reopen.15a0f405.js","assets/constant.50ba7d8c.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.08dc9ccc.js","assets/index.75529f66.js","assets/index.e7214b8a.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css"]),children:[{path:"cardList",name:"CardList",component:()=>c(()=>import("./index.ec081272.js"),["assets/index.ec081272.js","assets/index.ce0abeb4.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.c3e14898.js","assets/index.6d23c47a.css","assets/getCardsData.965411a8.js"])},{path:"cardPage",name:"CardPage",component:()=>c(()=>import("./cardPage.8762c2c2.js"),["assets/cardPage.8762c2c2.js","assets/cardPage.fea6f5af.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.5cf6a02c.js","assets/index.af5d3ea0.css","assets/index.390f3268.js","assets/index.c52a6b89.css","assets/use-refs.26beffad.js","assets/use-touch.abe69874.js","assets/getCardsData.965411a8.js","assets/constant.50ba7d8c.js","assets/use-lazy-render.f7e708c4.js"])}]},{path:"/statisticCenter",name:"StatisticCenter",redirect:"/statisticCenter/statistic",component:()=>c(()=>import("./index.3129cc8a.js"),["assets/index.3129cc8a.js","assets/index.10c31587.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.5a3fded9.js","assets/index.cac7032b.css","assets/index.b5f7e56f.js","assets/index.55e2151d.css","assets/use-touch.abe69874.js","assets/use-lazy-render.f7e708c4.js","assets/on-popup-reopen.15a0f405.js","assets/constant.50ba7d8c.js","assets/index.adda227c.js","assets/index.3a357bc1.css","assets/index.08dc9ccc.js","assets/index.75529f66.js","assets/index.e7214b8a.css","assets/index.7c2cb9b8.js","assets/index.21b9f426.css"]),children:[{path:"statistic",name:"Statistic",component:()=>c(()=>import("./statistic.2aef724f.js"),["assets/statistic.2aef724f.js","assets/statistic.178dd7a3.css","assets/base.8cd46ad1.js","assets/base.c7e18514.css","assets/vendor.006c88a1.js","assets/index.c3e14898.js","assets/index.6d23c47a.css"])}]}]});let I=[{id:1,workName:"\u6D4B\u8BD51",likeNum:0,img:"/src/assets/demoImg/3-1.png"},{id:2,workName:"\u6D4B\u8BD52",likeNum:0,img:"/src/assets/demoImg/3-2.png"}],y=[{id:3,workName:"\u6D4B\u8BD51\u6D4B\u8BD51\u6D4B\u8BD51",userId:"txb406",myLike:!1,likeNum:0,img:"/src/assets/demoImg/3-1.png"},{id:4,workName:"\u6D4B\u8BD52",userId:"txb406",likeNum:0,img:"/src/assets/demoImg/3-2.png"},{id:5,workName:"\u6D4B\u8BD51",userId:"txbdev",myLike:!1,likeNum:0,img:"/src/assets/demoImg/3-3.png"},{id:6,workName:"\u6D4B\u8BD52",userId:"txbdev",likeNum:12,img:"/src/assets/demoImg/3-4.png"}];function Z(){return y}function ee(){const n=y.filter(e=>e.userId===O.state.userId);n.map(e=>e.status=1);const o=JSON.parse(JSON.stringify(I));return o.map(e=>e.status=0),o.concat(n)}const O=x({state(){return{pageTitle:"\u5B66\u4E60\u4E2D\u5FC3",activeModule:"",activeLesson:"",activeCardList:[],selectedTopic:null,worldList:y,mydraftList:I,createEleID:1,createActiveEleID:null,userId:"txb406"}},mutations:{changePageName(n,o){n.pageTitle=o},changeActiveModule(n,o){n.activeModule=o},changeActiveLesson(n,o){n.activeLesson=o},updateCardProgress(n,o){const e=n.activeCardList.find(i=>i.attr==o.card.attr);e.curRankNum=o.cardRank},pushActiveCard(n,o){n.activeCardList.push(o)},selectTopic(n,o){n.selectedTopic=o},saveList(n,o){n.mydraftList.push({id:2,workName:"\u6D4B\u8BD52",likeNum:0,img:o})},createEleIDPlus(n){n.createEleID=n.createEleID+1},createEleIDClear(n){n.createEleID=1},changeCreateActiveEleID(n,o){n.createActiveEleID=o},clearCreateActiveEleID(n){n.createActiveEleID=null}}}),G=["tap","pan","pinch","press","rotate","swipe"],h=["panstart","panend","panmove","pancancel","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout","pressup","rotatestart","rotatemove","rotateend","rotatecancel"],J=["up","down","left","right","horizontal","vertical","all"],U={install(n,o={}){n.directive("hammer",{beforeMount:(e,i)=>{var f;e.hammer||(e.hammer=new u.Manager(e));const r=e.hammer,t=i.arg;t||console.warn("[vue-hammer] event type argument is required."),e.__hammerConfig=e.__hammerConfig||{},e.__hammerConfig[t]={};const a=i.modifiers;e.__hammerConfig[t].direction=e.__hammerConfig[t].direction||[],Object.keys(a).length&&Object.keys(a).filter(d=>i.modifiers[d]).forEach(d=>{const l=e.__hammerConfig[t].direction;l.indexOf(d)===-1&&l.push(String(d))});let s,m;if((f=o.customEvents)==null?void 0:f[t]){const d=o.customEvents[t];s=d.type,m=new u[this.capitalize(s)](d),m.recognizeWith(r.recognizers),r.add(m)}else{s=G.find(g=>g===t);const d=h.find(g=>g===t);if(!s&&!d){console.warn("[vue-hammer] invalid event type: "+t);return}if(d&&e.__hammerConfig[d].direction.length!==0&&console.warn("[vue-hammer] "+d+" should not have directions"),!s)return;if((s==="tap"||s==="pinch"||s==="press"||s==="rotate")&&e.__hammerConfig[s].direction.length!==0)throw Error("[vue-hammer] "+s+" should not have directions");m=r.get(s),m||(m=new u[this.capitalize(s)],m.recognizeWith(r.recognizers),r.add(m));const l=o[s];l&&(this.guardDirections(l),m.set(l));const v=e.hammerOptions&&e.hammerOptions[s];v&&(this.guardDirections(v),m.set(v))}},mounted:(e,i)=>{const r=e.hammer,t=i.arg,a=h.find(s=>s===t)?t:this.buildEventWithDirections(t,e.__hammerConfig[t].direction);r.handler&&r.off(a,r.handler),typeof i.value!="function"?(r.handler=null,console.warn("[vue-hammer] invalid handler function for v-hammer: "+i.arg)):r.on(a,r.handler=i.value)},updated:(e,i)=>{const r=e.hammer,t=i.arg,a=h.find(s=>s===t)?t:this.buildEventWithDirections(t,e.__hammerConfig[t].direction);r.handler&&r.off(a,r.handler),typeof i.value!="function"?(r.handler=null,console.warn("[vue-hammer] invalid handler function for v-hammer: "+i.arg)):r.on(a,r.handler=i.value)},unmounted:(e,i)=>{const r=e.hammer,t=i.arg,a=h.find(s=>s===t)?t:this.buildEventWithDirections(t,e.__hammerConfig[t].direction);r.handler&&e.hammer.off(a,r.handler),Object.keys(r.handlers).length||(e.hammer.destroy(),e.hammer=null)}})},guardDirections(n){const o=n.direction;if(typeof o=="string"){const e="DIRECTION_"+o.toUpperCase();J.indexOf(o)>-1&&Object.prototype.hasOwnProperty.call(u,e)?n.direction=u[e]:console.warn("[vue-hammer] invalid direction: "+o)}},buildEventWithDirections(n,o){const e={};o.forEach(t=>{t=t.toLowerCase(),t==="horizontal"?(e.left=1,e.right=1):t==="vertical"?(e.up=1,e.down=1):t==="all"?(e.left=1,e.right=1,e.up=1,e.down=1):e[t]=1});const i=Object.keys(e);return i.length===0?n:i.map(t=>n+t).join(" ")},capitalize(n){return n.charAt(0).toUpperCase()+n.slice(1)}};var K=(n,o)=>{const e=n.__vccOpts||n;for(const[i,r]of o)e[i]=r;return e};const Q={props:{boxItem:{type:Object,default:()=>null}},setup(n){const o=n,e=P(),i=T(o.boxItem);function r(t){e.commit("changeCreateActiveEleID",t)}return(t,a)=>{const s=E("CommonBox",!0);return _(),D("div",{class:N(["boxD",{active:V(e).state.createActiveEleID===i.value.id}]),style:W(i.value.styleObject)},[b(" This is a commonBox:"+w(i.value.id)+" ",1),(_(!0),D(j,null,R(i.value.children,m=>(_(),C(s,{key:m,boxItem:m,onClick:S(f=>r(m.id),["stop"])},null,8,["boxItem","onClick"]))),128))],6)}}};var X=K(Q,[["__scopeId","data-v-4db57f90"]]);const p=z(M);p.use(F);p.use(O);p.use(U,{threshold:0});p.component("CommonBox",X);p.mount("#app");export{K as _,Z as a,X as b,ee as g,F as r};
