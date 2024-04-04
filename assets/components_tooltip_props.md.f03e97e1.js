import{_ as t,o as d,c as e,Q as o}from"./chunks/framework.bf0d9ef3.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip/props.md","filePath":"components/tooltip/props.md","lastUpdated":1709033088000}'),c={name:"components/tooltip/props.md"},r=o("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必填</th></tr></thead><tbody><tr><td>title</td><td>提示文字，支持字符串/属性/插槽</td><td><code>string</code> | <code>VNode</code></td><td>无</td><td>否</td></tr><tr><td>disabled</td><td>禁止弹出浮层</td><td><code>boolean</code></td><td>无</td><td>否</td></tr><tr><td>placement</td><td>浮层位置，可选<code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, <code>top-start</code>, <code>top-end</code>, <code>bottom-start</code>, <code>bottom-end</code>, <code>left-start</code>, <code>left-end</code>, <code>right-start</code>, <code>right-end</code></td><td><code>Placement</code></td><td><code>&#39;bottom&#39;</code></td><td>否</td></tr><tr><td>open</td><td>控制浮层显隐，支持 v-model，仅在必要时使用 <code>open</code></td><td><code>boolean</code></td><td><code>undefined</code></td><td>否</td></tr><tr><td>getPopupContainer</td><td>指定浮层的容器，默认渲染到 body 下；如需渲染到父级元素下，可返回 null</td><td><code>() =&gt; null | HTMLElement</code></td><td><code>() =&gt; document.body</code></td><td>否</td></tr><tr><td>destroyWhenHide</td><td>控制隐藏后是否销毁浮层</td><td><code>boolean</code></td><td>无</td><td>否</td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时多少才显示 Tooltip，单位：秒</td><td><code>number</code></td><td><code>0.1</code></td><td>否</td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时多少才隐藏 Tooltip，单位：秒</td><td><code>number</code></td><td><code>0.1</code></td><td>否</td></tr><tr><td>overlayClassName</td><td>浮层class</td><td><code>string</code></td><td>无</td><td>否</td></tr><tr><td>overlayStyle</td><td>浮层style</td><td><code>CSSProperties</code></td><td>无</td><td>否</td></tr><tr><td>overlayInnerStyle</td><td>浮层内容区style</td><td><code>CSSProperties</code></td><td>无</td><td>否</td></tr><tr><td>overlayColor</td><td>浮层背景颜色</td><td><code>string</code></td><td>无</td><td>否</td></tr><tr><td>trigger</td><td>触发方式</td><td><code>&quot;click&quot;</code> | <code>&quot;hover&quot;</code></td><td><code>&#39;hover&#39;</code></td><td>否</td></tr><tr><td>arrowVisible</td><td>是否显示箭头</td><td><code>boolean</code></td><td><code>true</code></td><td>否</td></tr><tr><td>offsetOption</td><td>offset 配置</td><td><code>OffsetOptions</code></td><td><code>12</code></td><td>否</td></tr></tbody></table>",1),n=[r];function s(a,l,p,i,_,m){return d(),e("div",null,n)}const b=t(c,[["render",s]]);export{u as __pageData,b as default};
