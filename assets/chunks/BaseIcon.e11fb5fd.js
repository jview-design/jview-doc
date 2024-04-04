import{j as l,d as m,H as d}from"./framework.bf0d9ef3.js";const f={size:{type:Number},color:{type:String},spin:{type:Boolean},rotate:{type:Number},onClick:{type:Function}},o=`
@keyframes iconSpin {
    from {
        transform: rotate(0);
        -webkit-transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

.j-icon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.j-icon svg {
    display: inline-block;
}

.j-icon--spinning {
    -webkit-animation: iconSpin 1s infinite linear;
    animation: iconSpin 1s infinite linear;
}
`;let s=!1;const y=()=>{s||(s=!0,l(()=>{const e=document.createElement("style");e.setAttribute("type","text/css"),e.styleSheet?e.styleSheet.cssText+=o:e.textContent+=o,document.getElementsByTagName("head")[0].appendChild(e)}))},p=m({name:"BaseIcon",props:f,emits:["click"],setup(e,{slots:t,emit:a}){y();const c=n=>{a("click",n)};return()=>{var i;const n={"j-icon":!0,"j-icon--spinning":e.spin},r={fontSize:e.size?`${e.size}px`:void 0,color:e.color,transform:e.rotate?`rotateZ(${e.rotate}deg)`:void 0};return d("span",{class:n,style:r,role:"img",onClick:c},[(i=t.default)==null?void 0:i.call(t)])}}});export{p as B,f as p};
