import{e as C,c as g,g as c,n as d,m as l,t as V,i as x,r as B,w as P,s as O}from"./base.8cd46ad1.js";import{y as h,m,A as v,v as i,K as _,J as w,x as E}from"./vendor.006c88a1.js";function W(e){const t=h();t&&C(t.proxy,e)}const Y={to:[String,Object],url:String,replace:Boolean};function N({to:e,url:t,replace:r,$router:o}){e&&o?o[r?"replace":"push"](e):t&&(r?location.replace(t):location.href=t)}function q(){const e=h().proxy;return()=>N(e)}const[k,y]=g("badge"),z={dot:Boolean,max:d,tag:l("div"),color:String,offset:Array,content:d,showZero:V,position:l("top-right")};var R=m({name:k,props:z,setup(e,{slots:t}){const r=()=>{if(t.content)return!0;const{content:n,showZero:a}=e;return x(n)&&n!==""&&(a||n!==0)},o=()=>{const{dot:n,max:a,content:s}=e;if(!n&&r())return t.content?t.content():x(a)&&B(s)&&+s>a?`${a}+`:s},f=v(()=>{const n={background:e.color};if(e.offset){const[a,s]=e.offset;t.default?(n.top=c(s),typeof a=="number"?n.right=c(-a):n.right=a.startsWith("-")?a.replace("-",""):`-${a}`):(n.marginTop=c(s),n.marginLeft=c(a))}return n}),u=()=>{if(r()||e.dot)return i("div",{class:y([e.position,{dot:e.dot,fixed:!!t.default}]),style:f.value},[o()])};return()=>{if(t.default){const{tag:n}=e;return i(n,{class:y("wrapper")},{default:()=>[t.default(),u()]})}return u()}}});const T=P(R),[S,A]=g("config-provider"),$=Symbol(S),D={tag:l("div"),themeVars:Object,iconPrefix:String};function K(e){const t={};return Object.keys(e).forEach(r=>{t[`--van-${O(r)}`]=e[r]}),t}m({name:S,props:D,setup(e,{slots:t}){const r=v(()=>{if(e.themeVars)return K(e.themeVars)});return _($,e),()=>i(e.tag,{class:A(),style:r.value},{default:()=>{var o;return[(o=t.default)==null?void 0:o.call(t)]}})}});const[Z,I]=g("icon"),F=e=>e==null?void 0:e.includes("/"),G={dot:Boolean,tag:l("i"),name:String,size:d,badge:d,color:String,badgeProps:Object,classPrefix:String};var J=m({name:Z,props:G,setup(e,{slots:t}){const r=w($,null),o=v(()=>e.classPrefix||(r==null?void 0:r.iconPrefix)||I());return()=>{const{tag:f,dot:u,name:n,size:a,badge:s,color:j}=e,b=F(n);return i(T,E({dot:u,tag:f,class:[o.value,b?"":`${o.value}-${n}`],style:{color:j,fontSize:c(a)},content:s},e.badgeProps),{default:()=>{var p;return[(p=t.default)==null?void 0:p.call(t),b&&i("img",{class:I("image"),src:n},null)]}})}}});const H=P(J);export{T as B,H as I,q as a,N as b,Y as r,W as u};