import{p as P}from"./pick.d40e2c96.js";import{b,u as C,a as N,F as j}from"./mounted.9144c7ef.js";import{c as m}from"./type.8d15feec.js";import{d as l,H as t,L as F,a4 as u,F as h}from"./framework.bf0d9ef3.js";import{w}from"./install.519a88e0.js";const y={...b,title:{type:[String,Object]},content:{type:[String,Object]}},O=["update:open","openChange"],f=l({props:y,emits:O,setup(a,{slots:e,emit:p}){const g=n=>{p("update:open",n),p("openChange",n)},s=()=>{var i,d;const{title:n,content:o}=a,r=u(n)||m(n)?n:(i=e.title)==null?void 0:i.call(e),c=u(o)||m(o)?o:(d=e.content)==null?void 0:d.call(e);return t(h,null,[r?t("div",{class:"j-popover-title"},[r]):null,c?t("div",{class:"j-popover-content"},[c]):null])},{mounted:v}=C();return()=>{var n;return v.value?t(j,F({widgetName:"popover"},P(a,N),{content:s(),"onUpdate:open":g}),{default:e.default}):(n=e.default)==null?void 0:n.call(e)}}});f.name="JPopover";const H=w(f);export{H as P};
