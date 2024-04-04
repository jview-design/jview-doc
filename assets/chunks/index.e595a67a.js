import{U as T}from"./index.633615fe.js";import{o as M}from"./omit.dc85ab0f.js";import{u as R}from"./media.fa8a04f3.js";import{i as p,a as $}from"./type.8d15feec.js";import{d as v,M as F,g as m,H as o,L as f,a2 as J,a3 as V,x as E,W as U,a as Z,a4 as H,F as x}from"./framework.bf0d9ef3.js";import{P as L}from"./index.6805644d.js";import{S as W}from"./index.c6681f3c.js";import{w as y}from"./install.519a88e0.js";const g={src:{type:String},shape:{type:String},size:{type:[String,Number,Object]},fontSize:{type:[String,Number,Object]}},q={max:{type:Number},maxStyle:{type:Object},maxAttrs:{type:Object},maxPopoverProps:{type:Object},size:g.size,shape:g.shape,fontSize:g.fontSize},O=Symbol("avatarGroupContext"),S=v({props:g,inheritAttrs:!1,setup(a,{attrs:t,slots:s}){const{mediaSize:u}=R(),n=F(O,{}),i=m(()=>a.shape||(n==null?void 0:n.shape)||"circle"),e=m(()=>a.size||(n==null?void 0:n.size)||"default"),r=m(()=>a.fontSize||(n==null?void 0:n.fontSize)),l=()=>{var d;const c=((d=s.default)==null?void 0:d.call(s))||[];return c.length===1&&c[0].type===J?o("span",{class:"j-avatar-string"},[c[0]]):c};return()=>{const{src:c}=a,d=M(t,["class","style"]),b=p(e.value)?`${e.value}px`:$(e.value)?`${e.value[u.value]}px`:"",j=p(r.value)?`${r.value}px`:$(r.value)?`${r.value[u.value]}px`:r.value,C=c===void 0&&!s.default;return o("span",f(c!==void 0?{}:t,{class:{"j-avatar":!0,"j-avatar-img":!!c,"j-avatar-ico":C,"j-avatar-circle":i.value==="circle","j-avatar-lg":e.value==="large","j-avatar-sm":e.value==="small",[t.class]:!!t.class},style:{width:b,height:b,fontSize:j}}),[c!==void 0?o("img",f(d,{src:c}),null):s.default?l():o(T,null,null)])}}}),k=v({props:q,setup(a,{slots:t}){const s=V({shape:a.shape,size:a.size,fontSize:a.fontSize});Object.keys(s).forEach(n=>{E(()=>a[n],i=>{s[n]=i})}),U(O,s);const u=m(()=>a.max||1/0);return()=>{var l;const n=((l=t.default)==null?void 0:l.call(t))||[],i=n.length>u.value,e=i?n.slice(0,u.value):n,r=i?n.slice(u.value):[];return o("div",{class:"j-avatar-group"},[e,i?o(L,f({placement:"top"},a.maxPopoverProps||{}),{default:()=>[o(S,f(a.maxAttrs||{},{style:a.maxStyle}),{default:()=>[Z("+"),r.length]})],content:()=>o(W,{class:"j-avatar-group-more-wrapper"},{default:()=>[...r]})}):null])}}});k.name="JAvatarGroup";const h=y(k);S.name="JAvatar";S.Group=h;const ne=y(S,a=>{a.component(h.name,h)}),K={color:{type:String},count:{type:[Number,Object]},showZero:{type:Boolean},overflowCount:{type:Number,default:99},dot:{type:Boolean},status:{type:String},statusText:{type:String},title:{type:String},badgeStyle:{type:Object},size:{type:String,default:"default"}},Q={color:{type:String},placement:{type:String,default:"end"},text:{type:[String,Object]}},A=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],w=v({props:K,setup(a,{slots:t}){const s=()=>{const{color:e}=a;return e&&A.includes(e)?`var(--j-badge-color-preset-${e})`:e},u=()=>{var N,B;const{count:e,overflowCount:r,showZero:l,title:c,badgeStyle:d,size:b}=a,j=H(e)?e:(N=t.count)==null?void 0:N.call(t),G=t.default===void 0?"span":"sup";return o(x,null,[(B=t.default)==null?void 0:B.call(t),p(e)&&e===0&&l===!1?null:o(G,{class:{"j-badge-count":!0,"j-badge-count-small":b==="small","j-badge-count-multiple-words":p(e)&&(e>9||e<0)},style:{backgroundColor:s(),...d||{}},title:c},{default:()=>[p(e)?r!==void 0&&e>r?`${r}+`:e:j]})])},n=()=>{var l;const{title:e,badgeStyle:r}=a;return o(x,null,[(l=t.default)==null?void 0:l.call(t),o("span",{class:{"j-badge-dot":!0},style:{backgroundColor:s(),...r||{}},title:e},null)])},i=()=>{const{title:e,badgeStyle:r,status:l,statusText:c}=a;return o(x,null,[o("span",{class:{"j-badge-status":!0,[`j-badge-status-${l}`]:!0},style:{backgroundColor:s(),...r||{}},title:e},null),c?o("span",{class:"j-badge-status-text"},[c]):null])};return()=>{const{status:e,statusText:r,dot:l}=a,c=t.default===void 0,d=!!e;return o("div",{class:{"j-badge":!0,"j-badge-no-content":c,"j-badge-with-status":d,"j-badge-with-status-text":!!r}},[d?i():l?n():u()])}}}),P=v({props:Q,setup(a,{slots:t}){const s=()=>{const{color:u}=a;return u&&A.includes(u)?`var(--j-ribbon-color-preset-${u})`:u};return()=>{var e,r;const{text:u,placement:n}=a,i=((e=t.count)==null?void 0:e.call(t))||u;return o("div",{class:"j-ribbon-wrapper"},[(r=t.default)==null?void 0:r.call(t),o("sup",{class:{"j-ribbon":!0,[`j-ribbon-${n}`]:!0},style:{"--j-ribbon-color":s()}},[o("span",{class:"j-ribbon-text"},[i])])])}}});P.name="JBadgeRibbon";const z=y(P);w.name="JBadge";w.Ribbon=z;const re=y(w,a=>{a.component(z.name,z)});export{ne as A,re as B,h as a,z as b};
