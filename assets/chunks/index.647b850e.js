import{u as x,f as s,M as y}from"./media.99061ab4.js";import{i as d,a as l}from"./type.8d15feec.js";import{W as w,M as N,d as m,a3 as h,H as g,g as C}from"./framework.c15ea7b3.js";import{w as b}from"./install.519a88e0.js";const O={gutter:{type:[Number,Object],default:0},align:{type:String,default:"flex-start"},justify:{type:String,default:"flex-start"},wrap:{type:[Boolean,String],default:!0}},j=Symbol("rowContext"),v=e=>{w(j,e)},S=()=>N(j,{gutter:0,mediaSize:"xxl"}),p=m({props:O,setup(e,{slots:u}){const{mediaSize:a}=x({cb:()=>{Object.assign(t,{gutter:o(),mediaSize:a.value})}}),o=()=>d(e.gutter)?e.gutter:l(e.gutter)&&s(e.gutter,a.value)||0,t=h({gutter:o(),mediaSize:a.value});return v(t),()=>{var r;const n={marginLeft:`-${t.gutter/2}px`,marginRight:`-${t.gutter/2}px`,alignItems:e.align,justifyContent:e.justify,flexWrap:typeof e.wrap=="boolean"?e.wrap?"wrap":"nowrap":e.wrap};return g("div",{class:"j-row",style:n},[(r=u.default)==null?void 0:r.call(u)])}}});p.name="JRow";const D=b(p),R={span:{type:Number},offset:{type:Number,default:0},order:{type:Number},push:{type:Number},pull:{type:Number},xs:{type:[Number,Object]},sm:{type:[Number,Object]},md:{type:[Number,Object]},lg:{type:[Number,Object]},xl:{type:[Number,Object]},xxl:{type:[Number,Object]}},$=m({props:R,setup(e,{slots:u}){const a=S(),o=C(()=>{const t={"j-col":!0,[`j-col-${e.span}`]:!!e.span,[`j-col-offset-${e.offset}`]:!!e.offset,[`j-col-push-${e.push}`]:!!e.push,[`j-col-pull-${e.pull}`]:!!e.pull};return Object.keys(y).forEach(n=>{if(e[n]){if(d(e[n]))t[`j-col-${n}-${e[n]}`]=!0;else if(l(e[n])){const{span:r,offset:i,push:c,pull:f}=e[n];r!==void 0&&(t[`j-col-${n}-${r}`]=!0),i!==void 0&&(t[`j-col-${n}-offset-${i}`]=!0),c!==void 0&&(t[`j-col-${n}-push-${c}`]=!0),f!==void 0&&(t[`j-col-${n}-pull-${f}`]=!0)}}}),t});return()=>{var i;const t=s(e,a.mediaSize);let n="";t?(t===0||l(t)&&t.span===0)&&(n="none"):e.span===0&&(n="none");const r={paddingLeft:`${a.gutter/2}px`,paddingRight:`${a.gutter/2}px`,display:n,order:t&&t.order||e.order||""};return g("div",{class:o.value,style:r},[(i=u.default)==null?void 0:i.call(u)])}}});$.name="JCol";const E=b($);export{E as C,D as R};