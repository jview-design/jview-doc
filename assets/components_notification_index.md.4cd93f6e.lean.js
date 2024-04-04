import{S as f}from"./chunks/index.c6681f3c.js";import{B as h}from"./chunks/index.e7815610.js";import"./chunks/index.4ed993c7.js";import{d as m,j as S,a6 as v,O as q,H as n,ae as w,h as _,af as T,L as I,a4 as N,o as g,b as D,w as r,a as E,c as O,k as d,Q as B}from"./chunks/framework.bf0d9ef3.js";import{o as x}from"./chunks/omit.dc85ab0f.js";import{b as P,I as V,C as K,E as $,a as U}from"./chunks/index.06f8fae6.js";import{d as A}from"./chunks/type.8d15feec.js";import"./chunks/install.519a88e0.js";import"./chunks/index.6119473d.js";import"./chunks/BaseIcon.e11fb5fd.js";import"./chunks/utils.3b1ca0bf.js";import"./chunks/format-input.fdf4fd2b.js";import"./chunks/commonjsHelpers.725317a4.js";const W={duration:{type:Number,default:4.5},onClose:{type:Function},onClick:{type:Function},icon:{type:Object},closeIcon:{type:Object},title:{type:[String,Object,Function]},content:{type:[String,Object,Function]},key:{type:[String,Symbol,Number]},contentClass:{type:String},contentStyle:{type:Object}},Z=m({props:W,setup(s,{expose:p}){let c=null;const l=()=>{c&&(clearTimeout(c),c=null)},y=()=>{l(),s.duration!==0&&(c=setTimeout(()=>{var e;(e=s.onClose)==null||e.call(s)},s.duration*1e3))};S(()=>{y()}),v(()=>{l()});const u=()=>{var e;(e=s.onClose)==null||e.call(s)},t=()=>{var e;l(),(e=s.onClick)==null||e.call(s)},a=()=>{l()},o=()=>{y()};return p({update:()=>{q(()=>{y()})}}),()=>n("div",{class:{"j-notification":!0,"j-notification-with-icon":!!s.icon,[s.contentClass||""]:!!s.contentClass},style:s.contentStyle,onClick:t,onMouseenter:a,onMousemove:a,onMouseleave:o},[s.icon?n("span",{class:"j-notification-icon"},[s.icon]):null,n("div",{class:"j-notification-body"},[n("div",{class:"j-notification-title"},[A(s.title)?s.title():s.title,n("span",{class:"j-notification-close"},[s.closeIcon||n(P,{onClick:u},null)])]),n("div",{class:"j-notification-content"},[A(s.content)?s.content():s.content])])])}});function M(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!N(s)}const j={duration:3};let C=null,F=null,R=1;const L=()=>new Promise(s=>{if(C)setTimeout(()=>{F!==null&&s(F)},0);else{C=document.createElement("div"),C.className="j-notification-container",document.body.appendChild(C);const c=n(m({name:"NotificationContainer",setup(){const l=_([]),y=new Map;F={add:({openOptions:t})=>{const a=l.value.findIndex(o=>o.options.key===t.key);if(a===-1){const o={options:{...j,...t}};l.value.push(o)}else l.value[a]={...l.value[a],options:{...l.value[a].options,...t}},y.get(l.value[a].options.key).update()},remove:t=>{var o,e;const a=l.value.findIndex(b=>b.options.key===t);if(a!==-1){const b=l.value[a];l.value.splice(a,1),(e=(o=b.options).onClose)==null||e.call(o)}},destroy:()=>{l.value.forEach(t=>{var a,o;(o=(a=t.options).onClose)==null||o.call(a)}),l.value=[]}},s(F);const u=(t,a)=>{var o,e;l.value.splice(a,1),(e=(o=t.options).onClose)==null||e.call(o)};return()=>{let t;return n("div",null,[n(T,{name:"j-notification-fade-in-right"},M(t=l.value.map((a,o)=>n(Z,I(x(a.options,"onClose"),{onClose:()=>u(a,o),key:a.options.key,ref:e=>y.set(a.options.key,e)}),null)))?t:{default:()=>[t]})])}}}));w(c,C)}}),G=s=>{const p={...s,key:s.key||String(R++)},c=new Promise(y=>{const{onClose:u}=p;p.onClose=()=>{u==null||u(),y()},L().then(t=>{t.add({openOptions:p})})}),l=()=>{F&&F.remove(p.key)};return l.then=(y,u)=>c.then(y,u),l},i={config:s=>{Object.assign(j,s)},open:G,info:s=>{const p={icon:n(V,null,null),contentClass:s.contentClass?`j-notification-info ${s.contentClass}`:"j-notification-info"};return i.open({...s,...p})},success:s=>{const p={icon:n(K,null,null),contentClass:s.contentClass?`j-notification-success ${s.contentClass}`:"j-notification-success"};return i.open({...s,...p})},warning:s=>{const p={icon:n($,null,null),contentClass:s.contentClass?`j-notification-warning ${s.contentClass}`:"j-notification-warning"};return i.open({...s,...p})},error:s=>{const p={icon:n(U,null,null),contentClass:s.contentClass?`j-notification-error ${s.contentClass}`:"j-notification-error"};return i.open({...s,...p})},destroy:()=>{F&&F.destroy()}};const H=m({__name:"basic",setup(s){const p=()=>{i.info({title:"Info Title",content:"信则有，不信则无"})},c=()=>{i.success({title:"Success Title",content:"成功是迟早的事情"})},l=()=>{i.warning({title:"Warning Title",content:"切忌急功近利"})},y=()=>{i.error({title:"Error Title",content:"凡事三思，否则追悔莫及"})};return(u,t)=>{const a=h,o=f;return g(),D(o,{wrap:""},{default:r(()=>[n(a,{onClick:p},{default:r(()=>[E("信息")]),_:1}),n(a,{onClick:c},{default:r(()=>[E("成功")]),_:1}),n(a,{onClick:l},{default:r(()=>[E("警告")]),_:1}),n(a,{onClick:y},{default:r(()=>[E("错误")]),_:1})]),_:1})}}}),J=m({__name:"duration",setup(s){let p=0,c;const l=Symbol("key"),y=()=>{c=i.info({title:"通知标题",content:`我不会消失，除非你主动关闭${p>0?`，这是第${p}次更新`:""}`,duration:0,key:l}),p++},u=()=>{c&&(c(),p=0)},t=()=>{i.info({title:"我很快就会消失",content:"1秒消失",duration:1})},a=()=>{i.info({title:"我会显示十秒",content:"10秒消失",duration:10})};return(o,e)=>{const b=h,k=f;return g(),D(k,{wrap:""},{default:r(()=>[n(b,{onClick:y},{default:r(()=>[E("duration=0")]),_:1}),n(b,{onClick:u},{default:r(()=>[E("←关闭它")]),_:1}),n(b,{onClick:t},{default:r(()=>[E("duration=1")]),_:1}),n(b,{onClick:a},{default:r(()=>[E("duration=10")]),_:1})]),_:1})}}}),Q=m({__name:"content",setup(s){const p=_("通知标题"),c=_("内容等待更新中..."),l=Symbol("key"),y=()=>{p.value="通知标题",c.value="内容等待更新中...",i.info({title:()=>p.value,content:()=>c.value,duration:0,key:l})},u=()=>{p.value="标题变了",c.value="请耐心等待..."},t=()=>{i.success({title:"换成成功类型",content:"更新完毕，3秒后关闭",duration:3,key:l})};return(a,o)=>{const e=h,b=f;return g(),D(b,{wrap:""},{default:r(()=>[n(e,{onClick:y},{default:r(()=>[E("显示通知")]),_:1}),n(e,{onClick:u},{default:r(()=>[E("通过 title 和 content 更新")]),_:1}),n(e,{onClick:t},{default:r(()=>[E("通过 key 更新")]),_:1})]),_:1})}}}),z=m({__name:"destroy",setup(s){const p=()=>{i.info({title:"信息通知",content:"这是一条普通的信息通知"})},c=()=>{i.success({title:"成功通知",content:"阳光总在风雨后！",duration:0})},l=()=>{i.warning({title:"警告通知",content:"防患于未然！"})},y=()=>{i.error({title:"系统错误",content:"出错了，请稍后重试！"})},u=()=>{i.destroy()};return(t,a)=>{const o=h,e=f;return g(),D(e,{wrap:""},{default:r(()=>[n(o,{onClick:p},{default:r(()=>[E("信息")]),_:1}),n(o,{onClick:c},{default:r(()=>[E("成功")]),_:1}),n(o,{onClick:l},{default:r(()=>[E("警告")]),_:1}),n(o,{onClick:y},{default:r(()=>[E("错误")]),_:1}),n(o,{onClick:u},{default:r(()=>[E("全部关闭")]),_:1})]),_:1})}}}),X=d("p",null,"Notification 组件，用于弹出醒目的通知提醒框。",-1),Y=d("p",null,"与 Message 组件类似，也内置了几种基本的通知类型。",-1),ss=d("h2",{id:"四种内置类型",tabindex:"-1"},[E("四种内置类型 "),d("a",{class:"header-anchor",href:"#四种内置类型","aria-label":'Permalink to "四种内置类型"'},"​")],-1),ns=d("p",null,[E("我们提供了 API 形式的通知调用方式，传参是对象式的选项，具体见下方"),d("a",{href:"#属性"},"属性"),E("。")],-1),as=B("",4),ls=B("",5),ps=B("",8),os=B("",3),fs=JSON.parse('{"title":"Notification","description":"","frontmatter":{"title":"Notification"},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md","lastUpdated":1704727292000}'),ts={name:"components/notification/index.md"},hs=Object.assign(ts,{setup(s){return(p,c)=>(g(),O("div",null,[X,Y,ss,ns,n(H),as,n(J),ls,n(Q),ps,n(z),os]))}});export{fs as __pageData,hs as default};