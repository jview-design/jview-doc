import{S as j}from"./index.d57837cf.js";import{d as m,H as a}from"./framework.c15ea7b3.js";import{w as v}from"./install.519a88e0.js";const f={title:{type:[String,Object]},bordered:{type:Boolean,default:!0},loading:{type:Boolean},hoverable:{type:Boolean},headActions:{type:Object}},o=m({props:f,setup(c,{slots:e}){return()=>{var r,t;const{title:i,headActions:p,bordered:l,loading:h,hoverable:u}=c,b=i||((r=e.title)==null?void 0:r.call(e)),d=p||((t=e.headActions)==null?void 0:t.call(e));return a("div",{class:{"j-card":!0,"j-card-bordered":l,"j-card-hoverable":u}},[a("div",{class:"j-card-head"},[a("div",{class:"j-card-title"},[b]),d?a("div",{class:"j-card-head-actions"},[d]):null]),a("div",{class:"j-card-body"},[a(j,{loading:h,active:!0},{default:()=>{var n;return[(n=e.default)==null?void 0:n.call(e)]}})])])}}});o.name="JCard";const A=v(o);export{A as C};