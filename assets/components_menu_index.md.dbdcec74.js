import{u as ns,F as as}from"./chunks/mounted.9144c7ef.js";import{b as ls,d as ps}from"./chunks/type.8d15feec.js";import{d as T,M as v,g as q,h as i,H as n,n as es,a3 as J,W,x as j,T as ys,a0 as us,a1 as ms,L as h,o as f,c as w,w as I,a as $,b as bs,Q as _}from"./chunks/framework.bf0d9ef3.js";import{R as Fs,A as B,C as u,a as g,b as m}from"./chunks/index.b65439b0.js";import{w as N}from"./chunks/install.519a88e0.js";import{S as os}from"./chunks/index.c6681f3c.js";import{S as ts}from"./chunks/index.73d25e5c.js";import"./chunks/omit.dc85ab0f.js";import"./chunks/commonjsHelpers.725317a4.js";import"./chunks/dom.c77f962b.js";import"./chunks/BaseIcon.e11fb5fd.js";import"./chunks/utils.3b1ca0bf.js";import"./chunks/format-input.fdf4fd2b.js";import"./chunks/index.6119473d.js";function cs(p,l,s){for(let a=0;a<p.length;a++){const e=p[a];if(e[s.key]===l)return e;if(ls(e[s.children])&&e[s.children].length>0){const o=cs(e[s.children],l,s);if(o)return o}}return null}function rs(p,l,s=[]){return p&&ls(p[l.children])&&p[l.children].length>0?(s.push(...p[l.children]),p[l.children].forEach(a=>{rs(a,l,s)}),s):[]}function ds(p,l,s,a=[]){const e=cs(p,l,s);return(e?rs(e,s,a):[]).map(t=>t[s.key])}const Cs={title:{type:[String,Object]},icon:{type:[Object,Function]},itemKey:{type:[String,Number],required:!0}},Bs={title:{type:[String,Object]},icon:{type:[Object,Function]},itemKey:{type:[String,Number],required:!0},items:{type:Array},theme:{type:String}},gs={title:{type:[String,Object]},itemKey:{type:[String,Number],required:!0},items:{type:Array}},Ks={type:{type:String,default:"vertical"},items:{type:Array},theme:{type:String,default:"light"},popupSubMenuTrigger:{type:String,default:"hover"},openKeys:{type:Array,required:!0},selectedKeys:{type:Array,required:!0},inlineIndent:{type:Number,default:24},inlineCollapsed:{type:Boolean}},P=Symbol("menuContext"),M=Symbol("menuStateContext"),O=T({props:Cs,setup(p,{slots:l}){const s=v(P),a=v(M),{mounted:e}=ns(),o=q(()=>(s==null?void 0:s.type)==="inline"&&(s==null?void 0:s.inlineCollapsed)),t=i(!1),c=()=>{var E;(E=s==null?void 0:s.select)==null||E.call(s,p.itemKey)},r=()=>{var x,y,C;const{title:E,icon:b,itemKey:F}=p,V=((x=l.default)==null?void 0:x.call(l))||E,k=((y=l.icon)==null?void 0:y.call(l))||(ps(b)?b(p):b);let A=a==null?void 0:a.indentLevel;return(s==null?void 0:s.type)==="inline"&&(s!=null&&s.inlineCollapsed)&&!(a!=null&&a.inFloating)&&(A=void 0),n("li",{class:{"j-menu-item":!0,"j-menu-item-selected":(C=s==null?void 0:s.selectedKeys)==null?void 0:C.includes(F)},onClick:c},[n("div",{class:"j-menu-item-inner",style:{paddingLeft:A?`${A*((s==null?void 0:s.inlineIndent)||24)+16}px`:void 0}},[k?n("span",{class:"j-menu-item-icon"},[k]):null,n("span",{class:"j-menu-item-content"},[V])])])};return()=>e.value?n(as,{widgetName:"menu-item-popup",overlayClassName:es({[`j-menu-item-popup-${(s==null?void 0:s.theme)||"light"}`]:!0}),disabled:!o.value,open:t.value,placement:"right",offsetOption:9,"onUpdate:open":E=>{t.value=E}},{default:()=>r(),content:()=>{var E;return((E=l.default)==null?void 0:E.call(l))||p.title}}):r()}}),S=T({props:gs,setup(p,{slots:l}){const s=v(P),a=v(M),e=J({indentLevel:((a==null?void 0:a.indentLevel)||0)+1,inFloating:a==null?void 0:a.inFloating});return W(M,e),j(()=>a==null?void 0:a.inFloating,o=>{e.inFloating=o}),()=>{var r,E;const{title:o,items:t}=p,c=((r=l.title)==null?void 0:r.call(l))||o;return n("li",{class:"j-menu-item-group"},[n("div",{class:"j-menu-item-group-title"},[n("div",{class:"j-menu-item-group-title-inner",style:{paddingLeft:a!=null&&a.indentLevel?`${a.indentLevel*((s==null?void 0:s.inlineIndent)||24)+16}px`:void 0}},[c])]),t&&t.length>0?n("div",{class:"j-menu-item-group-list"},[t.map(b=>n(O,b,null))]):(E=l.default)==null?void 0:E.call(l)])}}}),Es=(p,l)=>{let s=0;for(let a=0;a<p.length;a++){const e=p[a];"items"in e&&e.items.length>0?"type"in e&&e.type==="group"?s+=1+e.items.length:l.includes(e.itemKey)&&(s+=1+Es(e.items,l)):s+=1}return s},ss=p=>{const{rowHeight:l,openKeys:s,items:a,subMenuKey:e}=p;return s.includes(e)?`${Es(a,s)*l}px`:"0px"},U=T({props:Bs,setup(p,{slots:l}){const s=v(P),a=v(M),e=q(()=>(s==null?void 0:s.type)==="inline"&&!(s!=null&&s.inlineCollapsed)),o=q(()=>(s==null?void 0:s.type)==="horizontal"&&!(a!=null&&a.inFloating)),t=J({indentLevel:e.value?((a==null?void 0:a.indentLevel)||0)+1:0,inFloating:!e.value});j(e,y=>{Object.assign(t,{indentLevel:y?((a==null?void 0:a.indentLevel)||0)+1:0,inFloating:!y})}),W(M,t);const c=i(!1),{mounted:r}=ns(),E=q(()=>ds([{itemKey:p.itemKey,items:p.items}],p.itemKey,{key:"itemKey",children:"items"})),b=q(()=>((s==null?void 0:s.selectedKeys)||[]).find(y=>E.value.includes(y))),F=q(()=>{var y;return!((y=s==null?void 0:s.openKeys)!=null&&y.includes(p.itemKey))}),V=y=>{var C;y.preventDefault(),(s==null?void 0:s.type)==="inline"&&!(s!=null&&s.inlineCollapsed)&&((C=s==null?void 0:s.changeFold)==null||C.call(s,p.itemKey,!F.value))},k=i(ss({rowHeight:44,openKeys:(s==null?void 0:s.openKeys)||[],subMenuKey:p.itemKey,items:p.items||[]}));j(()=>s==null?void 0:s.openKeys,y=>{y!=null&&y.includes(p.itemKey)&&(k.value=ss({rowHeight:44,openKeys:(s==null?void 0:s.openKeys)||[],subMenuKey:p.itemKey,items:p.items||[]}))});const A=()=>{var Y;const{title:y,icon:C,items:d}=p,L=((Y=l.title)==null?void 0:Y.call(l))||y,X=ps(C)?C(p):C,is=(s==null?void 0:s.theme)||"light";return n("li",{class:{"j-menu-submenu":!0,"j-menu-submenu-horizontal":(s==null?void 0:s.type)==="horizontal"&&!(a!=null&&a.indentLevel),"j-menu-submenu-inline":(s==null?void 0:s.type)==="inline","j-menu-submenu-selected":b.value,"j-menu-submenu-unfolded":(s==null?void 0:s.type)==="inline"&&!F.value}},[n("div",{class:{"j-menu-submenu-title":!0},onClick:V},[n("div",{class:"j-menu-submenu-title-inner",style:{paddingLeft:a!=null&&a.indentLevel?`${a.indentLevel*((s==null?void 0:s.inlineIndent)||24)+16}px`:void 0}},[X?n("span",{class:"j-menu-item-icon"},[X]):null,n("span",{class:"j-menu-item-content"},[L]),(s==null?void 0:s.type)==="horizontal"&&!(a!=null&&a.inFloating)?null:n(Fs,{class:{"j-menu-submenu-arrow":!0,"j-menu-submenu-arrow-unfolded":(s==null?void 0:s.type)==="inline"&&!F.value}},null)])]),(s==null?void 0:s.type)==="inline"?n(ys,{name:"j-menu-sub-show"},{default:()=>{var Z;return[us(n("ul",{class:{"j-menu":!0,"j-menu-sub":!0,"j-menu-inline":!0,[`j-menu-theme-${is}`]:!0},style:{"--j-menu-sub-height":k.value}},[d&&d.length>0?d.map(K=>"type"in K&&K.type==="group"?n(S,h({key:K.itemKey},K),null):"items"in K&&K.items.length>0?n(U,h({key:K.itemKey},K),null):n(O,h({key:K.itemKey},K),null)):(Z=l.default)==null?void 0:Z.call(l)]),[[ms,!F.value&&!s.inlineCollapsed]])]}}):null])},x=()=>{var C;const{items:y}=p;return y&&y.length>0?y.map(d=>"type"in d&&d.type==="group"?n(S,h({key:d.itemKey},d),null):"items"in d&&d.items.length>0?n(U,h({key:d.itemKey},d),null):n(O,h({key:d.itemKey},d),null)):(C=l.default)==null?void 0:C.call(l)};return()=>{const{theme:y}=p,d=(s==null?void 0:s.type)==="inline"&&(s==null?void 0:s.inlineCollapsed);return r.value?n(as,{widgetName:"submenu-popup",overlayClassName:es({"j-menu":!0,[`j-menu-theme-${y||(s==null?void 0:s.theme)||"light"}`]:!0}),disabled:e.value,open:c.value,"onUpdate:open":L=>{c.value=L},placement:o.value?"bottom-start":"right-start",arrowVisible:!1,offsetOption:9,trigger:d?"hover":(s==null?void 0:s.popupSubMenuTrigger)||"hover",useReferenceWidth:o.value},{default:()=>A(),content:()=>x()}):A()}}}),Q=U,hs=["update:selectedKeys","update:openKeys","select"],G=T({props:Ks,emits:hs,setup(p,{emit:l,slots:s}){const a=J({type:p.type,theme:p.theme,popupSubMenuTrigger:p.popupSubMenuTrigger,selectedKeys:p.selectedKeys,openKeys:p.openKeys,inlineIndent:p.inlineIndent,inlineCollapsed:p.inlineCollapsed,select:o=>{o!==void 0&&(l("update:selectedKeys",[o]),l("select",{key:o,selectedKeys:[o]}))},changeFold:(o,t)=>{const c=[...p.openKeys];if(t){const r=c.findIndex(E=>E===o);r!==-1&&c.splice(r,1)}else c.push(o);l("update:openKeys",c)}});return["type","theme","popupSubMenuTrigger","selectedKeys","openKeys","inlineIndent","inlineCollapsed"].forEach(o=>{j(()=>p[o],t=>{a[o]=t})}),W(P,a),()=>{var E;const{type:o,items:t,theme:c,inlineCollapsed:r}=p;return n("ul",{class:{"j-menu":!0,[`j-menu-${o}`]:o==="inline"?!r:!0,[`j-menu-theme-${c}`]:!0,"j-menu-inline-collapsed":o==="inline"&&r}},[t?t.map(b=>"type"in b&&b.type==="group"?n(S,h({key:b.itemKey},b),null):"items"in b&&b.items.length>0?n(Q,h({key:b.itemKey},b),null):n(O,h({key:b.itemKey},b),null)):(E=s.default)==null?void 0:E.call(s)])}}});O.name="JMenuItem";const z=N(O);Q.name="JSubMenu";const R=N(Q);S.name="JMenuItemGroup";const H=N(S);G.name="JMenu";G.Item=z;G.SubMenu=R;G.ItemGroup=H;const D=N(G,p=>{p.component(z.name,z),p.component(R.name,R),p.component(H.name,H)});const As={__name:"basic",setup(p){const l=i("light"),s=i([]),a=i([]),e=i([{itemKey:"1",title:"Menu Item 1",icon:n(B,null,null)},{itemKey:"2",title:"Menu Item 2 我的名字很长 我的名字很长 我的名字很长",icon:n(u,null,null)},{itemKey:"3",title:"Sub Menu 1",icon:n(g,null,null),items:[{itemKey:"3-1",title:"3-1",icon:n(m,null,null)},{itemKey:"3-2",title:"3-2",icon:n(u,null,null),items:[{itemKey:"3-2-1",title:"3-2-1",icon:n(m,null,null),items:[{itemKey:"3-2-1-1",title:"3-2-1-1",icon:n(m,null,null)},{itemKey:"3-2-1-2",title:"3-2-1-2",icon:n(g,null,null)},{type:"group",itemKey:"3-2-1-3",title:"Group In SubMenu 3-2-1",items:[{itemKey:"3-2-1-3-1",title:"3-2-1-3-1",icon:n(m,null,null)},{itemKey:"3-2-1-3-2",title:"3-2-1-3-2",icon:n(B,null,null)}]}]},{itemKey:"3-2-2",title:"3-2-2",icon:n(g,null,null)}]},{type:"group",itemKey:"3-3",title:"Group 1 In SubMenu",items:[{itemKey:"3-3-1",title:"3-3-1",icon:n(u,null,null)},{itemKey:"3-3-2",title:"3-3-2",icon:n(B,null,null)}]}]},{type:"group",itemKey:"4",title:"Item Group",items:[{itemKey:"4-1",title:"Item 1 in Group",icon:n(m,null,null)},{itemKey:"4-2",title:"Item 2 in Group",icon:n(u,null,null)}]}]);return(o,t)=>{const c=D;return f(),w("div",null,[n(c,{selectedKeys:a.value,"onUpdate:selectedKeys":t[0]||(t[0]=r=>a.value=r),openKeys:s.value,"onUpdate:openKeys":t[1]||(t[1]=r=>s.value=r),items:e.value,theme:l.value,style:{width:"256px"}},null,8,["selectedKeys","openKeys","items","theme"])])}}},qs={__name:"inline",setup(p){const l=i("light"),s=i([]),a=i([]),e=i([{itemKey:"1",title:"Menu Item 1",icon:n(B,null,null)},{itemKey:"2",title:"Menu Item 2",icon:n(u,null,null)},{itemKey:"3",title:"Sub Menu 1",icon:n(g,null,null),items:[{itemKey:"3-1",title:"3-1",icon:n(m,null,null)},{itemKey:"3-2",title:"3-2",icon:n(u,null,null),items:[{itemKey:"3-2-1",title:"3-2-1",icon:n(m,null,null),items:[{itemKey:"3-2-1-1",title:"3-2-1-1",icon:n(m,null,null)},{itemKey:"3-2-1-2",title:"3-2-1-2",icon:n(g,null,null)},{type:"group",itemKey:"3-2-1-3",title:"Group In SubMenu 3-2-1",items:[{itemKey:"3-2-1-3-1",title:"3-2-1-3-1",icon:n(m,null,null)},{itemKey:"3-2-1-3-2",title:"3-2-1-3-2",icon:n(B,null,null)}]}]},{itemKey:"3-2-2",title:"3-2-2",icon:n(g,null,null)}]},{type:"group",itemKey:"3-3",title:"Group 1 In SubMenu",items:[{itemKey:"3-3-1",title:"3-3-1",icon:n(u,null,null)},{itemKey:"3-3-2",title:"3-3-2",icon:n(B,null,null)}]}]},{type:"group",itemKey:"4",title:"Item Group",items:[{itemKey:"4-1",title:"Item 1 in Group",icon:n(m,null,null)},{itemKey:"4-2",title:"Item 2 in Group",icon:n(u,null,null)}]}]);return(o,t)=>{const c=D;return f(),w("div",null,[n(c,{type:"inline",selectedKeys:a.value,"onUpdate:selectedKeys":t[0]||(t[0]=r=>a.value=r),openKeys:s.value,"onUpdate:openKeys":t[1]||(t[1]=r=>s.value=r),items:e.value,theme:l.value,style:{width:"256px"}},null,8,["selectedKeys","openKeys","items","theme"])])}}},vs={style:{width:"256px"}},Os={__name:"collapsed",setup(p){const l=i(!0),s=i("light"),a=i([]),e=i([]),o=i([{itemKey:"1",title:"Menu Item 1",icon:n(B,null,null)},{itemKey:"2",title:"Menu Item 2",icon:n(u,null,null)},{itemKey:"3",title:"Sub Menu 1",icon:n(g,null,null),items:[{itemKey:"3-1",title:"3-1",icon:n(m,null,null)},{itemKey:"3-2",title:"3-2",icon:n(u,null,null),items:[{itemKey:"3-2-1",title:"3-2-1",icon:n(m,null,null),items:[{itemKey:"3-2-1-1",title:"3-2-1-1",icon:n(m,null,null)},{itemKey:"3-2-1-2",title:"3-2-1-2",icon:n(g,null,null)},{type:"group",itemKey:"3-2-1-3",title:"Group In SubMenu 3-2-1",items:[{itemKey:"3-2-1-3-1",title:"3-2-1-3-1",icon:n(m,null,null)},{itemKey:"3-2-1-3-2",title:"3-2-1-3-2",icon:n(B,null,null)}]}]},{itemKey:"3-2-2",title:"3-2-2",icon:n(g,null,null)}]},{type:"group",itemKey:"3-3",title:"Group 1 In SubMenu",items:[{itemKey:"3-3-1",title:"3-3-1",icon:n(u,null,null)},{itemKey:"3-3-2",title:"3-3-2",icon:n(B,null,null)}]}]},{type:"group",itemKey:"4",title:"Item Group",items:[{itemKey:"4-1",title:"Item 1 in Group",icon:n(m,null,null)},{itemKey:"4-2",title:"Item 2 in Group",icon:n(u,null,null)}]}]);return(t,c)=>{const r=ts,E=os,b=D;return f(),w("div",vs,[n(E,{align:"center"},{default:I(()=>[$(" 收起 "),n(r,{checked:l.value,"onUpdate:checked":c[0]||(c[0]=F=>l.value=F)},null,8,["checked"])]),_:1}),n(b,{type:"inline",selectedKeys:e.value,"onUpdate:selectedKeys":c[1]||(c[1]=F=>e.value=F),openKeys:a.value,"onUpdate:openKeys":c[2]||(c[2]=F=>a.value=F),inlineCollapsed:l.value,items:o.value,theme:s.value,style:{"margin-top":"20px"}},null,8,["selectedKeys","openKeys","inlineCollapsed","items","theme"])])}}},fs={__name:"horizontal",setup(p){const l=i("light"),s=i([]),a=i([]),e=i([{itemKey:"1",title:"Menu Item 1",icon:n(B,null,null)},{itemKey:"2",title:"Menu Item 2",icon:n(u,null,null)},{itemKey:"3",title:"Sub Menu 1",icon:n(g,null,null),items:[{itemKey:"3-1",title:"3-1",icon:n(m,null,null)},{itemKey:"3-2",title:"3-2",icon:n(u,null,null),items:[{itemKey:"3-2-1",title:"3-2-1",icon:n(m,null,null),items:[{itemKey:"3-2-1-1",title:"3-2-1-1",icon:n(m,null,null)},{itemKey:"3-2-1-2",title:"3-2-1-2",icon:n(u,null,null)},{type:"group",itemKey:"3-2-1-3",title:"Group 1 in 3-2-1",items:[{itemKey:"3-2-1-3-1",title:"Item 1 in Group 1",icon:n(u,null,null)},{itemKey:"3-2-1-3-2",title:"Item 2 in Group 1",icon:n(u,null,null)}]}]},{itemKey:"3-2-2",title:"3-2-2",icon:n(u,null,null)}]},{type:"group",itemKey:"3-3",title:"Group 3-3",items:[{itemKey:"3-3-1",title:"Item 1 in Group 3-3",icon:n(u,null,null)},{itemKey:"3-3-2",title:"Item 2 in Group 3-3",icon:n(u,null,null)}]}]}]);return(o,t)=>{const c=D;return f(),bs(c,{selectedKeys:a.value,"onUpdate:selectedKeys":t[0]||(t[0]=r=>a.value=r),openKeys:s.value,"onUpdate:openKeys":t[1]||(t[1]=r=>s.value=r),items:e.value,theme:l.value,type:"horizontal",style:{margin:"0 0 40px"}},null,8,["selectedKeys","openKeys","items","theme"])}}},_s={style:{width:"256px"}},ks={__name:"theme",setup(p){const l=i(!0),s=i("dark"),a=i([]),e=i([]),o=i([{itemKey:"1",title:"Menu Item 1",icon:n(B,null,null)},{itemKey:"2",title:"Menu Item 2",icon:n(u,null,null)},{itemKey:"3",title:"Sub Menu 1",icon:n(g,null,null),items:[{itemKey:"3-1",title:"3-1",icon:n(m,null,null)},{itemKey:"3-2",title:"3-2",icon:n(u,null,null),items:[{itemKey:"3-2-1",title:"3-2-1",icon:n(m,null,null),items:[{itemKey:"3-2-1-1",title:"3-2-1-1",icon:n(m,null,null)},{itemKey:"3-2-1-2",title:"3-2-1-2",icon:n(g,null,null)},{type:"group",itemKey:"3-2-1-3",title:"Group In SubMenu 3-2-1",items:[{itemKey:"3-2-1-3-1",title:"3-2-1-3-1",icon:n(m,null,null)},{itemKey:"3-2-1-3-2",title:"3-2-1-3-2",icon:n(B,null,null)}]}]},{itemKey:"3-2-2",title:"3-2-2",icon:n(g,null,null)}]},{type:"group",itemKey:"3-3",title:"Group 1 In SubMenu",items:[{itemKey:"3-3-1",title:"3-3-1",icon:n(u,null,null)},{itemKey:"3-3-2",title:"3-3-2",icon:n(B,null,null)}]}]},{type:"group",itemKey:"4",title:"Item Group",items:[{itemKey:"4-1",title:"Item 1 in Group",icon:n(m,null,null)},{itemKey:"4-2",title:"Item 2 in Group",icon:n(u,null,null)}]}]);return(t,c)=>{const r=ts,E=os,b=D;return f(),w("div",_s,[n(E,{align:"center"},{default:I(()=>[n(E,{align:"center"},{default:I(()=>[$(" 收起 "),n(r,{checked:l.value,"onUpdate:checked":c[0]||(c[0]=F=>l.value=F)},null,8,["checked"])]),_:1}),n(E,{align:"center"},{default:I(()=>[$(" 主题 "),n(r,{"checked-children":"D","unchecked-children":"L","checked-value":"dark","unchecked-value":"light",checked:s.value,"onUpdate:checked":c[1]||(c[1]=F=>s.value=F)},null,8,["checked"])]),_:1})]),_:1}),n(b,{type:"inline",selectedKeys:e.value,"onUpdate:selectedKeys":c[2]||(c[2]=F=>e.value=F),openKeys:a.value,"onUpdate:openKeys":c[3]||(c[3]=F=>a.value=F),inlineCollapsed:l.value,items:o.value,theme:s.value,style:{"margin-top":"20px"}},null,8,["selectedKeys","openKeys","inlineCollapsed","items","theme"])])}}},Ms=_('<p>Menu 组件，适用于平台导航等场景，分为垂直菜单，水平菜单，内嵌菜单等类型。</p><h2 id="垂直菜单" tabindex="-1">垂直菜单 <a class="header-anchor" href="#垂直菜单" aria-label="Permalink to &quot;垂直菜单&quot;">​</a></h2><p>在使用菜单导航，最常见的莫过于位于侧边的垂直菜单，其对应的<code>type</code>属性值为<code>&quot;vertical&quot;</code>。</p><p>你可以通过<code>items</code>配置按需组合<code>MenuItem</code>, <code>SubMenu</code>, <code>MenuItemGroup</code>等组件，具体效果如下：</p>',4),Ss=_(`<details class="details custom-block"><summary>展开查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">j-menu</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:selectedKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedKeys&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:openKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openKeys&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;items&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:theme</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;theme&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 256px&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">j-menu</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;jsx&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AccountBookOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CalendarOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ApartmentOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AppstoreOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">openKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">selectedKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">items</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 2 我的名字很长 我的名字很长 我的名字很长&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Sub Menu 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;Group In SubMenu 3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Group 1 In SubMenu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Item Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;4-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Item 1 in Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;4-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Item 2 in Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">j-menu</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:selectedKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedKeys&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:openKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openKeys&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;items&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:theme</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;theme&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 256px&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">j-menu</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;jsx&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AccountBookOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CalendarOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ApartmentOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AppstoreOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;light&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">openKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">selectedKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">items</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 2 我的名字很长 我的名字很长 我的名字很长&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Sub Menu 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                        items: [</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;Group In SubMenu 3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                items: [</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        ],</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Group 1 In SubMenu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Item Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;4-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Item 1 in Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;4-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Item 2 in Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br></div></div></details><h2 id="内嵌菜单" tabindex="-1">内嵌菜单 <a class="header-anchor" href="#内嵌菜单" aria-label="Permalink to &quot;内嵌菜单&quot;">​</a></h2><p>如果你不希望子菜单是弹出的形式，可以考虑使用内嵌菜单，仅仅需要设置<code>type</code>属性为<code>inline</code>即可。</p>`,3),ws=_(`<details class="details custom-block"><summary>展开查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">j-menu</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inline&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">v-model:selectedKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedKeys&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">v-model:openKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openKeys&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;items&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:theme</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 256px&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;&lt;/</span><span style="color:#85E89D;">j-menu</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;jsx&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AccountBookOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CalendarOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ApartmentOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AppstoreOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">openKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">selectedKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">items</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Sub Menu 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;Group In SubMenu 3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Group 1 In SubMenu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Item Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;4-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Item 1 in Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;4-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Item 2 in Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">j-menu</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inline&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">v-model:selectedKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedKeys&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">v-model:openKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openKeys&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;items&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:theme</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 256px&quot;</span></span>
<span class="line"><span style="color:#24292E;">        &gt;&lt;/</span><span style="color:#22863A;">j-menu</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;jsx&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AccountBookOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CalendarOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ApartmentOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AppstoreOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;light&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">openKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">selectedKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">items</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Sub Menu 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                        items: [</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;Group In SubMenu 3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                items: [</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        ],</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Group 1 In SubMenu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Item Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;4-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Item 1 in Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;4-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Item 2 in Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br></div></div></details><h2 id="可收起的内嵌菜单" tabindex="-1">可收起的内嵌菜单 <a class="header-anchor" href="#可收起的内嵌菜单" aria-label="Permalink to &quot;可收起的内嵌菜单&quot;">​</a></h2><p>使用<code>inlineCollapsed</code>属性可以实现菜单的收起效果。</p>`,3),Gs=_(`<details class="details custom-block"><summary>展开查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 256px&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">j-space</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">align</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            收起</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">j-switch</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:checked</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inlineCollapsed&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">j-space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">j-menu</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inline&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">v-model:selectedKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedKeys&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">v-model:openKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openKeys&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:inlineCollapsed</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inlineCollapsed&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;items&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:theme</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;margin-top: 20px&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;&lt;/</span><span style="color:#85E89D;">j-menu</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;jsx&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AccountBookOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CalendarOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ApartmentOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AppstoreOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">inlineCollapsed</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">openKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">selectedKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">items</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Sub Menu 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;Group In SubMenu 3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Group 1 In SubMenu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Item Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;4-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Item 1 in Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;4-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Item 2 in Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 256px&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">j-space</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">align</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            收起</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">j-switch</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:checked</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inlineCollapsed&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">j-space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">j-menu</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inline&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">v-model:selectedKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedKeys&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">v-model:openKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openKeys&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:inlineCollapsed</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inlineCollapsed&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;items&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:theme</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;margin-top: 20px&quot;</span></span>
<span class="line"><span style="color:#24292E;">        &gt;&lt;/</span><span style="color:#22863A;">j-menu</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;jsx&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AccountBookOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CalendarOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ApartmentOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AppstoreOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">inlineCollapsed</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;light&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">openKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">selectedKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">items</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Sub Menu 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                        items: [</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;Group In SubMenu 3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                items: [</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        ],</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Group 1 In SubMenu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Item Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;4-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Item 1 in Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;4-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Item 2 in Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br></div></div></details><h2 id="水平菜单" tabindex="-1">水平菜单 <a class="header-anchor" href="#水平菜单" aria-label="Permalink to &quot;水平菜单&quot;">​</a></h2><p>水平菜单，适用于网站顶部导航，设置<code>type</code>属性为<code>horizontal</code>即可。</p>`,3),Ds=_(`<details class="details custom-block"><summary>展开查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">j-menu</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">v-model:selectedKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedKeys&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">v-model:openKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openKeys&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;items&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:theme</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;horizontal&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;margin: 0 0 40px&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;&lt;/</span><span style="color:#85E89D;">j-menu</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;jsx&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AccountBookOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CalendarOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ApartmentOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AppstoreOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">openKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">selectedKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">items</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Sub Menu 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;Group 1 in 3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;Item 1 in Group 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;Item 2 in Group 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Group 3-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;Item 1 in Group 3-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;Item 2 in Group 3-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">j-menu</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">v-model:selectedKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedKeys&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">v-model:openKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openKeys&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;items&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:theme</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;horizontal&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;margin: 0 0 40px&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;&lt;/</span><span style="color:#22863A;">j-menu</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;jsx&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AccountBookOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CalendarOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ApartmentOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AppstoreOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;light&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">openKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">selectedKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">items</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Sub Menu 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                        items: [</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;Group 1 in 3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                items: [</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;Item 1 in Group 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;Item 2 in Group 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        ],</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Group 3-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;Item 1 in Group 3-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;Item 2 in Group 3-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br></div></div></details><h2 id="切换主题" tabindex="-1">切换主题 <a class="header-anchor" href="#切换主题" aria-label="Permalink to &quot;切换主题&quot;">​</a></h2><p>通过<code>theme</code>属性为切换主题，支持<code>&quot;light&quot;</code>和<code>&quot;dark&quot;</code>两种类型。</p>`,3),xs=_(`<details class="details custom-block"><summary>展开查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 256px&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">j-space</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">align</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">j-space</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">align</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                收起</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">j-switch</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:checked</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inlineCollapsed&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">j-space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">j-space</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">align</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;center&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                主题</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">j-switch</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">checked-children</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;D&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">unchecked-children</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;L&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">checked-value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dark&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">unchecked-value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;light&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">v-model:checked</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">j-space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">j-space</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">j-menu</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inline&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">v-model:selectedKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedKeys&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">v-model:openKeys</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;openKeys&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:inlineCollapsed</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;inlineCollapsed&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;items&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">:theme</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;margin-top: 20px&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &gt;&lt;/</span><span style="color:#85E89D;">j-menu</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;jsx&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AccountBookOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CalendarOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ApartmentOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { AppstoreOutlined } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">inlineCollapsed</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dark&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">openKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">selectedKeys</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">items</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Menu Item 2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Sub Menu 1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;3-2-1-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                title: </span><span style="color:#9ECBFF;">&#39;Group In SubMenu 3-2-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        title: </span><span style="color:#9ECBFF;">&#39;3-2-1-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-2-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">ApartmentOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;3-3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Group 1 In SubMenu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-3-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        itemKey: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        title: </span><span style="color:#9ECBFF;">&#39;3-3-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        icon: &lt;</span><span style="color:#79B8FF;">AccountBookOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemKey: </span><span style="color:#9ECBFF;">&#39;4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Item Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;4-1&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Item 1 in Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">AppstoreOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                itemKey: </span><span style="color:#9ECBFF;">&#39;4-2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;Item 2 in Group&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: &lt;</span><span style="color:#79B8FF;">CalendarOutlined</span><span style="color:#E1E4E8;"> /&gt;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 256px&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">j-space</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">align</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">j-space</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">align</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                收起</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">j-switch</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:checked</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inlineCollapsed&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">j-space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">j-space</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">align</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;center&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                主题</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">j-switch</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">checked-children</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;D&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">unchecked-children</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;L&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">checked-value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dark&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">unchecked-value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;light&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">v-model:checked</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#24292E;">                /&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">j-space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">j-space</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">j-menu</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inline&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">v-model:selectedKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedKeys&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">v-model:openKeys</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;openKeys&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:inlineCollapsed</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;inlineCollapsed&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;items&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">:theme</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;theme&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;margin-top: 20px&quot;</span></span>
<span class="line"><span style="color:#24292E;">        &gt;&lt;/</span><span style="color:#22863A;">j-menu</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;jsx&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AccountBookOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AccountBookOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CalendarOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/CalendarOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ApartmentOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/ApartmentOutlined&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { AppstoreOutlined } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@jview/icons-antd/es/AppstoreOutlined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">inlineCollapsed</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dark&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">openKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">selectedKeys</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">items</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Menu Item 2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Sub Menu 1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                        items: [</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;3-2-1-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                            {</span></span>
<span class="line"><span style="color:#24292E;">                                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                title: </span><span style="color:#032F62;">&#39;Group In SubMenu 3-2-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                items: [</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;3-2-1-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                    {</span></span>
<span class="line"><span style="color:#24292E;">                                        itemKey: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        title: </span><span style="color:#032F62;">&#39;3-2-1-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                                    },</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        ],</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-2-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">ApartmentOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;3-3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Group 1 In SubMenu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-3-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        itemKey: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        title: </span><span style="color:#032F62;">&#39;3-3-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        icon: &lt;</span><span style="color:#005CC5;">AccountBookOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        itemKey: </span><span style="color:#032F62;">&#39;4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Item Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;4-1&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Item 1 in Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">AppstoreOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                itemKey: </span><span style="color:#032F62;">&#39;4-2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;Item 2 in Group&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                icon: &lt;</span><span style="color:#005CC5;">CalendarOutlined</span><span style="color:#24292E;"> /&gt;,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br></div></div></details><h2 id="menu-属性" tabindex="-1">Menu 属性 <a class="header-anchor" href="#menu-属性" aria-label="Permalink to &quot;Menu 属性&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必填</th></tr></thead><tbody><tr><td>type</td><td>菜单类型，支持 &quot;vertical&quot;, &quot;inline&quot;, &quot;horizontal&quot;，默认是 &quot;vertical&quot;</td><td><code>&quot;inline&quot;</code> | <code>&quot;horizontal&quot;</code> | <code>&quot;vertical&quot;</code></td><td><code>&#39;vertical&#39;</code></td><td>否</td></tr><tr><td>items</td><td>菜单子项配置</td><td><code>Array&lt;MenuItem | SubMenuItem | ItemGroup&gt;</code></td><td>无</td><td>否</td></tr><tr><td>theme</td><td>主题配置，支持 &quot;light&quot; 和 &quot;dark&quot; 两种。</td><td><code>&quot;light&quot; | &quot;dark&quot;</code></td><td><code>&#39;light&#39;</code></td><td>否</td></tr><tr><td>popupSubMenuTrigger</td><td>弹出式子菜单的触发方式，默认 hover，即鼠标悬停时显示弹出的子菜单</td><td><code>&quot;click&quot;</code> | <code>&quot;hover&quot;</code></td><td><code>&#39;hover&#39;</code></td><td>否</td></tr><tr><td>openKeys</td><td>当前展开的菜单 key 组成的数组</td><td><code>Array&lt;string | number&gt;</code></td><td>无</td><td>是</td></tr><tr><td>selectedKeys</td><td>当前选中的菜单 keys</td><td><code>Array&lt;string | number&gt;</code></td><td>无</td><td>是</td></tr><tr><td>inlineIndent</td><td>inline 模式下子菜单的缩进值</td><td><code>number</code></td><td><code>24</code></td><td>否</td></tr><tr><td>inlineCollapsed</td><td>inline 模式下菜单是否收起到侧边</td><td><code>boolean</code></td><td>无</td><td>否</td></tr></tbody></table><h2 id="menu-事件" tabindex="-1">Menu 事件 <a class="header-anchor" href="#menu-事件" aria-label="Permalink to &quot;Menu 事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>回调类型</th></tr></thead><tbody><tr><td>select</td><td>菜单选中时触发</td><td><code>(key: string | number, selectedKeys: (string | number)[]) =&gt; void</code></td></tr></tbody></table><h2 id="menuitem-属性" tabindex="-1">MenuItem 属性 <a class="header-anchor" href="#menuitem-属性" aria-label="Permalink to &quot;MenuItem 属性&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必填</th></tr></thead><tbody><tr><td>title</td><td>菜单标题</td><td><code>string</code> | <code>VNode</code></td><td>无</td><td>否</td></tr><tr><td>icon</td><td>菜单图标</td><td><code>VNode | ((item: MenuItem) =&gt; VNode)</code></td><td>无</td><td>否</td></tr><tr><td>itemKey</td><td>唯一标识</td><td><code>string</code> | <code>number</code></td><td>无</td><td>是</td></tr></tbody></table><h2 id="submenu-属性" tabindex="-1">SubMenu 属性 <a class="header-anchor" href="#submenu-属性" aria-label="Permalink to &quot;SubMenu 属性&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必填</th></tr></thead><tbody><tr><td>title</td><td>菜单标题</td><td><code>string</code> | <code>VNode</code></td><td>无</td><td>否</td></tr><tr><td>icon</td><td>菜单图标</td><td><code>VNode | ((item: SubMenuItem) =&gt; VNode)</code></td><td>无</td><td>否</td></tr><tr><td>itemKey</td><td>唯一标识</td><td><code>string</code> | <code>number</code></td><td>无</td><td>是</td></tr><tr><td>items</td><td>菜单子项配置</td><td><code>Array&lt;MenuItem | SubMenuItem | ItemGroup&gt;</code></td><td>无</td><td>否</td></tr><tr><td>theme</td><td>主题配置，默认继承自 menu。</td><td><code>&quot;light&quot; | &quot;dark&quot;</code></td><td>无</td><td>否</td></tr></tbody></table><h2 id="menuitemgroup-属性" tabindex="-1">MenuItemGroup 属性 <a class="header-anchor" href="#menuitemgroup-属性" aria-label="Permalink to &quot;MenuItemGroup 属性&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必填</th></tr></thead><tbody><tr><td>title</td><td>分组标题</td><td><code>string</code> | <code>VNode</code></td><td>无</td><td>否</td></tr><tr><td>itemKey</td><td>唯一标识</td><td><code>string</code> | <code>number</code></td><td>无</td><td>是</td></tr><tr><td>items</td><td>菜单组配置</td><td><code>Array&lt;MenuItem&gt;</code></td><td>无</td><td>否</td></tr></tbody></table>`,11),Xs=JSON.parse('{"title":"Menu","description":"","frontmatter":{"title":"Menu"},"headers":[],"relativePath":"components/menu/index.md","filePath":"components/menu/index.md","lastUpdated":1709033088000}'),Is={name:"components/menu/index.md"},Ys=Object.assign(Is,{setup(p){return(l,s)=>(f(),w("div",null,[Ms,n(As),Ss,n(qs),ws,n(Os),Gs,n(fs),Ds,n(ks),xs]))}});export{Xs as __pageData,Ys as default};
