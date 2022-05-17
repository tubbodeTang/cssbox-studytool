import{L as C,J as U,N as b,q as g,p as r,T as z,P as L,Q as A,e as B,x as V,l as Z,K as J,I as Q,R as W,F as X,s as ee}from"./vendor.f9b4ed9a.js";import{n as w,t as y,l as j,o as oe,p as te,q as E,c as T,e as D,g as ne,h as _,r as ae,w as R,f as k,s as se}from"./base.fd59f32f.js";import{a as le,I as ce}from"./index.c59f0326.js";import{u as re}from"./use-touch.f540989d.js";import{u as $}from"./use-lazy-render.01417c4d.js";import{P as ie,c as ue}from"./on-popup-reopen.4964c803.js";import{H as de}from"./constant.26cafd46.js";const K={show:Boolean,zIndex:w,overlay:y,duration:w,teleport:[String,Object],lockScroll:y,lazyRender:y,beforeClose:Function,overlayStyle:Object,overlayClass:j,transitionAppear:Boolean,closeOnClickOverlay:y},ze=Object.keys(K);let h=0;const N="van-overflow-hidden";function fe(e,o){const s=re(),l=i=>{s.move(i);const S=s.deltaY.value>0?"10":"01",I=te(i.target,e.value),{scrollHeight:u,offsetHeight:P,scrollTop:v}=I;let f="11";v===0?f=P>=u?"00":"01":v+P>=u&&(f="10"),f!=="11"&&s.isVertical()&&!(parseInt(f,2)&parseInt(S,2))&&E(i,!0)},n=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",l,{passive:!1}),h||document.body.classList.add(N),h++},a=()=>{h&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",l),h--,h||document.body.classList.remove(N))},c=()=>o()&&n(),d=()=>o()&&a();oe(c),C(d),U(d),b(o,i=>{i?n():a()})}const[ve,me]=T("overlay"),ye={show:Boolean,zIndex:w,duration:w,className:j,lockScroll:y,customStyle:Object};var he=g({name:ve,props:ye,setup(e,{slots:o}){const s=$(()=>e.show),l=a=>{E(a,!0)},n=s(()=>{var a;const c=D(ne(e.zIndex),e.customStyle);return _(e.duration)&&(c.animationDuration=`${e.duration}s`),L(r("div",{style:c,class:[me(),e.className],onTouchmove:e.lockScroll?l:ae},[(a=o.default)==null?void 0:a.call(o)]),[[A,e.show]])});return()=>r(z,{name:"van-fade",appear:!0},{default:n})}});const Ie=R(he),Pe=D({},K,{round:Boolean,position:k("center"),closeIcon:k("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:k("top-right"),safeAreaInsetBottom:Boolean}),[pe,F]=T("popup");let H=2e3;var we=g({name:pe,inheritAttrs:!1,props:Pe,emits:["open","close","opened","closed","update:show","click-overlay","click-close-icon"],setup(e,{emit:o,attrs:s,slots:l}){let n,a;const c=B(),d=B(),i=$(()=>e.show||!e.lazyRender),S=V(()=>{const t={zIndex:c.value};if(_(e.duration)){const m=e.position==="center"?"animationDuration":"transitionDuration";t[m]=`${e.duration}s`}return t}),I=()=>{n||(e.zIndex!==void 0&&(H=+e.zIndex),n=!0,c.value=++H,o("open"))},u=()=>{n&&ue(e.beforeClose,{done(){n=!1,o("close"),o("update:show",!1)}})},P=t=>{o("click-overlay",t),e.closeOnClickOverlay&&u()},v=()=>{if(e.overlay)return r(Ie,{show:e.show,class:e.overlayClass,zIndex:c.value,duration:e.duration,customStyle:e.overlayStyle,onClick:P},{default:l["overlay-content"]})},f=t=>{o("click-close-icon",t),u()},M=()=>{if(e.closeable)return r(ce,{role:"button",tabindex:0,name:e.closeIcon,class:[F("close-icon",e.closeIconPosition),de],classPrefix:e.iconPrefix,onClick:f},null)},Y=()=>o("opened"),q=()=>o("closed"),G=i(()=>{var t;const{round:m,position:p,safeAreaInsetBottom:x}=e;return L(r("div",ee({ref:d,style:S.value,class:[F({round:m,[p]:p}),{"van-safe-area-bottom":x}]},s),[(t=l.default)==null?void 0:t.call(l),M()]),[[A,e.show]])}),O=()=>{const{position:t,transition:m,transitionAppear:p}=e,x=t==="center"?"van-fade":`van-popup-slide-${t}`;return r(z,{name:m||x,appear:p,onAfterEnter:Y,onAfterLeave:q},{default:G})};return b(()=>e.show,t=>{t&&!n&&I(),!t&&n&&(n=!1,o("close"))}),le({popupRef:d}),fe(d,()=>e.show&&e.lockScroll),se("popstate",()=>{e.closeOnPopstate&&(u(),a=!1)}),Z(()=>{e.show&&I()}),J(()=>{a&&(o("update:show",!0),a=!1)}),C(()=>{e.show&&(u(),a=!0)}),Q(ie,()=>e.show),()=>e.teleport?r(W,{to:e.teleport},{default:()=>[v(),O()]}):r(X,null,[v(),O()])}});const Le=R(we);export{Le as P,ze as a,K as p};
