import{Q as u,c as r,m,f as p,t as S,R as h,w as v}from"./base.fd59f32f.js";import{a as w}from"./index.c59f0326.js";import{q as D,x,N as H,p as f}from"./vendor.f9b4ed9a.js";function C(e,i){const{days:n}=i;let{hours:s,minutes:c,seconds:l,milliseconds:t}=i;if(e.includes("DD")?e=e.replace("DD",u(n)):s+=n*24,e.includes("HH")?e=e.replace("HH",u(s)):c+=s*60,e.includes("mm")?e=e.replace("mm",u(c)):l+=c*60,e.includes("ss")?e=e.replace("ss",u(l)):t+=l*1e3,e.includes("S")){const a=u(t,3);e.includes("SSS")?e=e.replace("SSS",a):e.includes("SS")?e=e.replace("SS",a.slice(0,2)):e=e.replace("S",a.charAt(0))}return e}const[g,N]=r("count-down"),P={time:m(0),format:p("HH:mm:ss"),autoStart:S,millisecond:Boolean};var b=D({name:g,props:P,emits:["change","finish"],setup(e,{emit:i,slots:n}){const{start:s,pause:c,reset:l,current:t}=h({time:+e.time,millisecond:e.millisecond,onChange:o=>i("change",o),onFinish:()=>i("finish")}),a=x(()=>C(e.format,t.value)),d=()=>{l(+e.time),e.autoStart&&s()};return H(()=>e.time,d,{immediate:!0}),w({start:s,pause:c,reset:d}),()=>f("div",{role:"timer",class:N()},[n.default?n.default(t.value):a.value])}});const q=v(b);export{q as C};
