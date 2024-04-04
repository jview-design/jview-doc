import{_ as t,o as d,c as e,Q as o}from"./chunks/framework.c15ea7b3.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/skeleton/props.md","filePath":"components/skeleton/props.md","lastUpdated":1709033088000}'),a={name:"components/skeleton/props.md"},r=o('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必填</th></tr></thead><tbody><tr><td>loading</td><td>值为<code>true</code>时，代表加载状态，展示骨架屏，否则直接展示子组件。</td><td><code>boolean</code></td><td>无</td><td>否</td></tr><tr><td>active</td><td>是否激活动画效果，如果开启，会对 Skeleton 下的其他占位组件生效，但不会覆盖各组件另行指定的 active 属性值。</td><td><code>boolean</code></td><td>无</td><td>否</td></tr><tr><td>avatar</td><td>头像配置</td><td>boolean | <a href="#skeletonavatarprops">SkeletonAvatarProps</a></td><td>无</td><td>否</td></tr><tr><td>paragraph</td><td>段落配置</td><td>boolean | <a href="#skeletonparagraphprops">SkeletonParagraphProps</a></td><td><code>true</code></td><td>否</td></tr><tr><td>title</td><td>标题配置</td><td>boolean | <a href="#skeletontitleprops">SkeletonTitleProps</a></td><td><code>true</code></td><td>否</td></tr><tr><td>customNodes</td><td>自定义骨架屏元素</td><td><code>VNode</code></td><td>无</td><td>否</td></tr></tbody></table>',1),s=[r];function n(c,p,l,_,h,i){return d(),e("div",null,s)}const f=t(a,[["render",n]]);export{k as __pageData,f as default};