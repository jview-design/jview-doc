import{S as D}from"./chunks/index.c6681f3c.js";import{a as X,C as K,S as Q,M as Y}from"./chunks/index.6630b9ed.js";import{p as Z}from"./chunks/pick.d40e2c96.js";import{c as $,a as G,I as ss}from"./chunks/index.e83fb00a.js";import{d as q,h,x as ns,g as R,j as as,H as u,L as ls,a4 as U,o as C,b as j,w as f,a as M,l as z,c as ps,Q as A}from"./chunks/framework.bf0d9ef3.js";import{w as os}from"./chunks/install.519a88e0.js";import"./chunks/type.8d15feec.js";import"./chunks/BaseIcon.e11fb5fd.js";import"./chunks/commonjsHelpers.725317a4.js";import"./chunks/omit.dc85ab0f.js";import"./chunks/index.ba7e9b05.js";import"./chunks/utils.3b1ca0bf.js";import"./chunks/format-input.fdf4fd2b.js";import"./chunks/index.c50c6d0e.js";var es=20,ts=1,B=1e6,O=1e6,rs=-7,cs=21,Es=!1,S="[big.js] ",w=S+"Invalid ",P=w+"decimal places",is=w+"rounding mode",J=S+"Division by zero",i={},g=void 0,ys=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function L(){function s(n){var l=this;if(!(l instanceof s))return n===g?L():new s(n);if(n instanceof s)l.s=n.s,l.e=n.e,l.c=n.c.slice();else{if(typeof n!="string"){if(s.strict===!0&&typeof n!="bigint")throw TypeError(w+"value");n=n===0&&1/n<0?"-0":String(n)}us(l,n)}l.constructor=s}return s.prototype=i,s.DP=es,s.RM=ts,s.NE=rs,s.PE=cs,s.strict=Es,s.roundDown=0,s.roundHalfUp=1,s.roundHalfEven=2,s.roundUp=3,s}function us(s,n){var l,a,p;if(!ys.test(n))throw Error(w+"number");for(s.s=n.charAt(0)=="-"?(n=n.slice(1),-1):1,(l=n.indexOf("."))>-1&&(n=n.replace(".","")),(a=n.search(/e/i))>0?(l<0&&(l=a),l+=+n.slice(a+1),n=n.substring(0,a)):l<0&&(l=n.length),p=n.length,a=0;a<p&&n.charAt(a)=="0";)++a;if(a==p)s.c=[s.e=0];else{for(;p>0&&n.charAt(--p)=="0";);for(s.e=l-a-1,s.c=[],l=0;a<=p;)s.c[l++]=+n.charAt(a++)}return s}function k(s,n,l,a){var p=s.c;if(l===g&&(l=s.constructor.RM),l!==0&&l!==1&&l!==2&&l!==3)throw Error(is);if(n<1)a=l===3&&(a||!!p[0])||n===0&&(l===1&&p[0]>=5||l===2&&(p[0]>5||p[0]===5&&(a||p[1]!==g))),p.length=1,a?(s.e=s.e-n+1,p[0]=1):p[0]=s.e=0;else if(n<p.length){if(a=l===1&&p[n]>=5||l===2&&(p[n]>5||p[n]===5&&(a||p[n+1]!==g||p[n-1]&1))||l===3&&(a||!!p[0]),p.length=n,a){for(;++p[--n]>9;)if(p[n]=0,n===0){++s.e,p.unshift(1);break}}for(n=p.length;!p[--n];)p.pop()}return s}function x(s,n,l){var a=s.e,p=s.c.join(""),o=p.length;if(n)p=p.charAt(0)+(o>1?"."+p.slice(1):"")+(a<0?"e":"e+")+a;else if(a<0){for(;++a;)p="0"+p;p="0."+p}else if(a>0)if(++a>o)for(a-=o;a--;)p+="0";else a<o&&(p=p.slice(0,a)+"."+p.slice(a));else o>1&&(p=p.charAt(0)+"."+p.slice(1));return s.s<0&&l?"-"+p:p}i.abs=function(){var s=new this.constructor(this);return s.s=1,s};i.cmp=function(s){var n,l=this,a=l.c,p=(s=new l.constructor(s)).c,o=l.s,t=s.s,e=l.e,c=s.e;if(!a[0]||!p[0])return a[0]?o:p[0]?-t:0;if(o!=t)return o;if(n=o<0,e!=c)return e>c^n?1:-1;for(t=(e=a.length)<(c=p.length)?e:c,o=-1;++o<t;)if(a[o]!=p[o])return a[o]>p[o]^n?1:-1;return e==c?0:e>c^n?1:-1};i.div=function(s){var n=this,l=n.constructor,a=n.c,p=(s=new l(s)).c,o=n.s==s.s?1:-1,t=l.DP;if(t!==~~t||t<0||t>B)throw Error(P);if(!p[0])throw Error(J);if(!a[0])return s.s=o,s.c=[s.e=0],s;var e,c,r,v,y,F=p.slice(),N=e=p.length,V=a.length,d=a.slice(0,e),m=d.length,_=s,T=_.c=[],E=0,b=t+(_.e=n.e-s.e)+1;for(_.s=o,o=b<0?0:b,F.unshift(0);m++<e;)d.push(0);do{for(r=0;r<10;r++){if(e!=(m=d.length))v=e>m?1:-1;else for(y=-1,v=0;++y<e;)if(p[y]!=d[y]){v=p[y]>d[y]?1:-1;break}if(v<0){for(c=m==e?p:F;m;){if(d[--m]<c[m]){for(y=m;y&&!d[--y];)d[y]=9;--d[y],d[m]+=10}d[m]-=c[m]}for(;!d[0];)d.shift()}else break}T[E++]=v?r:++r,d[0]&&v?d[m]=a[N]||0:d=[a[N]]}while((N++<V||d[0]!==g)&&o--);return!T[0]&&E!=1&&(T.shift(),_.e--,b--),E>b&&k(_,b,l.RM,d[0]!==g),_};i.eq=function(s){return this.cmp(s)===0};i.gt=function(s){return this.cmp(s)>0};i.gte=function(s){return this.cmp(s)>-1};i.lt=function(s){return this.cmp(s)<0};i.lte=function(s){return this.cmp(s)<1};i.minus=i.sub=function(s){var n,l,a,p,o=this,t=o.constructor,e=o.s,c=(s=new t(s)).s;if(e!=c)return s.s=-c,o.plus(s);var r=o.c.slice(),v=o.e,y=s.c,F=s.e;if(!r[0]||!y[0])return y[0]?s.s=-c:r[0]?s=new t(o):s.s=1,s;if(e=v-F){for((p=e<0)?(e=-e,a=r):(F=v,a=y),a.reverse(),c=e;c--;)a.push(0);a.reverse()}else for(l=((p=r.length<y.length)?r:y).length,e=c=0;c<l;c++)if(r[c]!=y[c]){p=r[c]<y[c];break}if(p&&(a=r,r=y,y=a,s.s=-s.s),(c=(l=y.length)-(n=r.length))>0)for(;c--;)r[n++]=0;for(c=n;l>e;){if(r[--l]<y[l]){for(n=l;n&&!r[--n];)r[n]=9;--r[n],r[l]+=10}r[l]-=y[l]}for(;r[--c]===0;)r.pop();for(;r[0]===0;)r.shift(),--F;return r[0]||(s.s=1,r=[F=0]),s.c=r,s.e=F,s};i.mod=function(s){var n,l=this,a=l.constructor,p=l.s,o=(s=new a(s)).s;if(!s.c[0])throw Error(J);return l.s=s.s=1,n=s.cmp(l)==1,l.s=p,s.s=o,n?new a(l):(p=a.DP,o=a.RM,a.DP=a.RM=0,l=l.div(s),a.DP=p,a.RM=o,this.minus(l.times(s)))};i.neg=function(){var s=new this.constructor(this);return s.s=-s.s,s};i.plus=i.add=function(s){var n,l,a,p=this,o=p.constructor;if(s=new o(s),p.s!=s.s)return s.s=-s.s,p.minus(s);var t=p.e,e=p.c,c=s.e,r=s.c;if(!e[0]||!r[0])return r[0]||(e[0]?s=new o(p):s.s=p.s),s;if(e=e.slice(),n=t-c){for(n>0?(c=t,a=r):(n=-n,a=e),a.reverse();n--;)a.push(0);a.reverse()}for(e.length-r.length<0&&(a=r,r=e,e=a),n=r.length,l=0;n;e[n]%=10)l=(e[--n]=e[n]+r[n]+l)/10|0;for(l&&(e.unshift(l),++c),n=e.length;e[--n]===0;)e.pop();return s.c=e,s.e=c,s};i.pow=function(s){var n=this,l=new n.constructor("1"),a=l,p=s<0;if(s!==~~s||s<-O||s>O)throw Error(w+"exponent");for(p&&(s=-s);s&1&&(a=a.times(n)),s>>=1,!!s;)n=n.times(n);return p?l.div(a):a};i.prec=function(s,n){if(s!==~~s||s<1||s>B)throw Error(w+"precision");return k(new this.constructor(this),s,n)};i.round=function(s,n){if(s===g)s=0;else if(s!==~~s||s<-B||s>B)throw Error(P);return k(new this.constructor(this),s+this.e+1,n)};i.sqrt=function(){var s,n,l,a=this,p=a.constructor,o=a.s,t=a.e,e=new p("0.5");if(!a.c[0])return new p(a);if(o<0)throw Error(S+"No square root");o=Math.sqrt(a+""),o===0||o===1/0?(n=a.c.join(""),n.length+t&1||(n+="0"),o=Math.sqrt(n),t=((t+1)/2|0)-(t<0||t&1),s=new p((o==1/0?"5e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+t)):s=new p(o+""),t=s.e+(p.DP+=4);do l=s,s=e.times(l.plus(a.div(l)));while(l.c.slice(0,t).join("")!==s.c.slice(0,t).join(""));return k(s,(p.DP-=4)+s.e+1,p.RM)};i.times=i.mul=function(s){var n,l=this,a=l.constructor,p=l.c,o=(s=new a(s)).c,t=p.length,e=o.length,c=l.e,r=s.e;if(s.s=l.s==s.s?1:-1,!p[0]||!o[0])return s.c=[s.e=0],s;for(s.e=c+r,t<e&&(n=p,p=o,o=n,r=t,t=e,e=r),n=new Array(r=t+e);r--;)n[r]=0;for(c=e;c--;){for(e=0,r=t+c;r>c;)e=n[r]+o[c]*p[r-c-1]+e,n[r--]=e%10,e=e/10|0;n[r]=e}for(e?++s.e:n.shift(),c=n.length;!n[--c];)n.pop();return s.c=n,s};i.toExponential=function(s,n){var l=this,a=l.c[0];if(s!==g){if(s!==~~s||s<0||s>B)throw Error(P);for(l=k(new l.constructor(l),++s,n);l.c.length<s;)l.c.push(0)}return x(l,!0,!!a)};i.toFixed=function(s,n){var l=this,a=l.c[0];if(s!==g){if(s!==~~s||s<0||s>B)throw Error(P);for(l=k(new l.constructor(l),s+l.e+1,n),s=s+l.e+1;l.c.length<s;)l.c.push(0)}return x(l,!1,!!a)};i[Symbol.for("nodejs.util.inspect.custom")]=i.toJSON=i.toString=function(){var s=this,n=s.constructor;return x(s,s.e<=n.NE||s.e>=n.PE,!!s.c[0])};i.toNumber=function(){var s=Number(x(this,!0,!0));if(this.constructor.strict===!0&&!this.eq(s.toString()))throw Error(S+"Imprecise conversion");return s};i.toPrecision=function(s,n){var l=this,a=l.constructor,p=l.c[0];if(s!==g){if(s!==~~s||s<1||s>B)throw Error(w+"precision");for(l=k(new a(l),s,n);l.c.length<s;)l.c.push(0)}return x(l,s<=l.e||l.e<=a.NE||l.e>=a.PE,!!p)};i.valueOf=function(){var s=this,n=s.constructor;if(n.strict===!0)throw Error(S+"valueOf disallowed");return x(s,s.e<=n.NE||s.e>=n.PE,!0)};var H=L();const ds={defaultValue:{type:Number},value:{type:Number},disabled:{type:Boolean},...$,...G,controls:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},max:{type:Number,default:1/0},min:{type:Number,default:-1/0},step:{type:Number,default:1},precision:{type:Number},autofocus:{type:Boolean},upIcon:{type:Object},downIcon:{type:Object},size:{type:String,default:"default"}},ms=["disabled","size",...Object.keys(G),...Object.keys($)],bs=s=>parseFloat(s),W=q({name:"JInputNumber",props:ds,emits:["update:value"],setup(s,{emit:n,attrs:l,slots:a}){const p=h(),o=h(),t=E=>{o.value=E===void 0?"":s.precision?E.toFixed(s.precision):String(E)};ns(()=>s.value,E=>{t(E)},{immediate:!0});const e=E=>{o.value=E},c=E=>{n("update:value",E),t(E)},r=E=>{if(E){const b=bs(E);Number.isNaN(b)?c(void 0):b>s.max?c(s.max):b<s.min?c(s.min):c(b)}else c(void 0)},v=E=>{r(E.target.value)},y=()=>{const E=s.value||0;if(E<s.max){const b=Math.min(H(E).plus(s.step).toNumber(),s.max);c(b)}},F=()=>{const E=s.value||0;if(E>s.min){const b=Math.max(H(E).minus(s.step).toNumber(),s.min);c(b)}},N=E=>{s.keyboard&&(E.key==="ArrowUp"?y():E.key==="ArrowDown"&&F())},V=()=>{y()},d=()=>{F()},m=()=>{n("update:value",void 0)},_=R(()=>(s.value||0)===s.max),T=R(()=>(s.value||0)===s.min);return as(()=>{s.autofocus&&p.value.focus()}),()=>u("div",{class:{"j-input-number":!0,"j-input-number-with-controls":s.controls&&!s.disabled}},[u(ss,ls(l,Z(s,ms),{value:o.value,defaultValue:s.defaultValue?String(s.defaultValue):void 0,"onUpdate:value":e,onBlur:v,onKeydown:N,onClear:m,ref:p}),{...a,suffix:s.controls&&!s.disabled?()=>u("div",{class:"j-input-number-control-wrapper"},[u("div",{class:{"j-input-number-control-item":!0,"j-input-number-control-item-up":!0,"j-input-number-control-item-disabled":_.value},onClick:V},[U(s.upIcon)?s.upIcon:a.upIcon?a.upIcon():u(X,null,null)]),u("div",{class:{"j-input-number-control-item":!0,"j-input-number-control-item-down":!0,"j-input-number-control-item-disabled":T.value},onClick:d},[U(s.downIcon)?s.downIcon:a.downIcon?a.downIcon():u(K,null,null)])]):void 0})])}});W.name="JInputNumber";const I=os(W);const fs=q({__name:"basic",setup(s){const n=h();return(l,a)=>{const p=I,o=D;return C(),j(o,null,{default:f(()=>[u(p,{value:n.value,"onUpdate:value":a[0]||(a[0]=t=>n.value=t),min:-5,max:5,placeholder:"请输入数值"},null,8,["value"])]),_:1})}}}),vs=q({__name:"addon",setup(s){const n=h();return(l,a)=>{const p=I,o=D;return C(),j(o,null,{default:f(()=>[u(p,{value:n.value,"onUpdate:value":a[0]||(a[0]=t=>n.value=t)},{prefix:f(()=>[M("￥")]),addonBefore:f(()=>[u(z(Q))]),addonAfter:f(()=>[u(z(Y))]),_:1},8,["value"])]),_:1})}}}),Fs=q({__name:"size",setup(s){const n=h(6);return(l,a)=>{const p=I,o=D;return C(),j(o,null,{default:f(()=>[u(p,{value:n.value,"onUpdate:value":a[0]||(a[0]=t=>n.value=t),size:"small"},null,8,["value"]),u(p,{value:n.value,"onUpdate:value":a[1]||(a[1]=t=>n.value=t)},null,8,["value"]),u(p,{value:n.value,"onUpdate:value":a[2]||(a[2]=t=>n.value=t),size:"large"},null,8,["value"])]),_:1})}}}),gs=q({__name:"controls",setup(s){const n=h();return(l,a)=>{const p=I,o=D;return C(),j(o,null,{default:f(()=>[u(p,{value:n.value,"onUpdate:value":a[0]||(a[0]=t=>n.value=t),controls:!1},null,8,["value"])]),_:1})}}}),hs=q({__name:"keyboard",setup(s){const n=h();return(l,a)=>{const p=I,o=D;return C(),j(o,null,{default:f(()=>[u(p,{value:n.value,"onUpdate:value":a[0]||(a[0]=t=>n.value=t),placeholder:"支持键盘控制"},null,8,["value"]),u(p,{value:n.value,"onUpdate:value":a[1]||(a[1]=t=>n.value=t),keyboard:!1,placeholder:"不支持键盘控制"},null,8,["value"])]),_:1})}}}),_s=q({__name:"step-precision",setup(s){const n=h();return(l,a)=>{const p=I,o=D;return C(),j(o,null,{default:f(()=>[u(p,{value:n.value,"onUpdate:value":a[0]||(a[0]=t=>n.value=t),step:.001,max:5,placeholder:"step=0.001"},null,8,["value"]),u(p,{value:n.value,"onUpdate:value":a[1]||(a[1]=t=>n.value=t),step:.001,max:5,precision:4,placeholder:"precision=4"},null,8,["value"])]),_:1})}}}),qs=q({__name:"up-down-render",setup(s){const n=h();return(l,a)=>{const p=I,o=D;return C(),j(o,null,{default:f(()=>[u(p,{value:n.value,"onUpdate:value":a[0]||(a[0]=t=>n.value=t)},{upIcon:f(()=>[M("+")]),downIcon:f(()=>[M("-")]),_:1},8,["value"])]),_:1})}}}),Cs=A("",4),As=A("",3),Bs=A("",3),Ds=A("",3),js=A("",3),ws=A("",4),ks=A("",5),Is=A("",3),Ls=JSON.parse('{"title":"InputNumber 数字输入框","description":"","frontmatter":{"title":"InputNumber 数字输入框"},"headers":[],"relativePath":"components/input-number/index.md","filePath":"components/input-number/index.md","lastUpdated":1698291891000}'),xs={name:"components/input-number/index.md"},Ws=Object.assign(xs,{setup(s){return(n,l)=>(C(),ps("div",null,[Cs,u(fs),As,u(vs),Bs,u(Fs),Ds,u(gs),js,u(hs),ws,u(_s),ks,u(qs),Is]))}});export{Ls as __pageData,Ws as default};
