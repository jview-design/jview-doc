import{_ as t,o as e,c as o,Q as n}from"./chunks/framework.bf0d9ef3.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pkgs/hooks.useelementcontentrectoption.md","filePath":"pkgs/hooks.useelementcontentrectoption.md","lastUpdated":1707214740000}'),s={name:"pkgs/hooks.useelementcontentrectoption.md"},a=n('<p><a href="./">Home</a> &gt; <a href="./hooks.html">@jview/hooks</a> &gt; <a href="./hooks.useelementcontentrectoption.html">UseElementContentRectOption</a></p><h2 id="useelementcontentrectoption-interface" tabindex="-1">UseElementContentRectOption interface <a class="header-anchor" href="#useelementcontentrectoption-interface" aria-label="Permalink to &quot;UseElementContentRectOption interface&quot;">​</a></h2><p>useElementContentRect 选项</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UseElementContentRectOption</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UseElementContentRectOption</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./hooks.useelementcontentrectoption.autocalconactivated.html">autoCalcOnActivated</a></td><td></td><td>boolean</td><td>是否在onActivated钩子中自动计算 ContentRect</td></tr><tr><td><a href="./hooks.useelementcontentrectoption.autocalconmounted.html">autoCalcOnMounted</a></td><td></td><td>boolean</td><td>是否在onMounted钩子中自动计算 ContentRect</td></tr><tr><td><a href="./hooks.useelementcontentrectoption.autocalconwinresize.html">autoCalcOnWinResize</a></td><td></td><td>boolean</td><td>是否在窗口 resize 时自动计算 ContentRect</td></tr><tr><td><a href="./hooks.useelementcontentrectoption.getelement.html">getElement</a></td><td></td><td><a href="./types.generalfunction.html">GeneralFunction</a>&lt;Element&gt;</td><td>函数，返回一个Element</td></tr><tr><td><a href="./hooks.useelementcontentrectoption.immediate.html">immediate</a></td><td></td><td>boolean</td><td>是否立即计算 ContentRect</td></tr><tr><td><a href="./hooks.useelementcontentrectoption.observe.html">observe</a></td><td></td><td>boolean</td><td>是否启用 useResizeObserver，启用则会实时观察计算 ContentRect</td></tr><tr><td><a href="./hooks.useelementcontentrectoption.observeoptions.html">observeOptions</a></td><td></td><td>Exclude&lt;Partial&lt;<a href="./hooks.useresizeobserveroption.html">UseResizeObserverOption</a>&gt;, &#39;getElement&#39;&gt;</td><td>对应 UseResizeObserverOption</td></tr></tbody></table>',7),r=[a];function l(c,d,i,p,h,m){return e(),o("div",null,r)}const b=t(s,[["render",l]]);export{f as __pageData,b as default};
