import{_ as e,o as s,c as n,Q as t}from"./chunks/framework.c15ea7b3.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pkgs/utils.enterfullscreen.md","filePath":"pkgs/utils.enterfullscreen.md","lastUpdated":1699013381000}'),a={name:"pkgs/utils.enterfullscreen.md"},l=t('<p><a href="./">Home</a> &gt; <a href="./utils.html">@jview/utils</a> &gt; <a href="./utils.enterfullscreen.html">enterFullscreen</a></p><h2 id="enterfullscreen-function" tabindex="-1">enterFullscreen() function <a class="header-anchor" href="#enterfullscreen-function" aria-label="Permalink to &quot;enterFullscreen() function&quot;">​</a></h2><p>进入全屏，可参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen%E3%80%82" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen。</a> 存在 top-layer 叠加问题，如果要规避叠加顺序带来的问题，需要手动判断全屏状态，如果当前已经是全屏状态，可以先退出全屏，再让目标元素进入全屏。</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">enterFullscreen</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">element</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EnhancedHTMLElement</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FullscreenOptions</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">&gt;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">enterFullscreen</span><span style="color:#24292E;">(</span><span style="color:#E36209;">element</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EnhancedHTMLElement</span><span style="color:#24292E;">, </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FullscreenOptions</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">void</span><span style="color:#24292E;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>element</td><td><a href="./utils.enhancedhtmlelement.html">EnhancedHTMLElement</a></td><td><em>(Optional)</em> 全屏目标元素，默认是 body</td></tr><tr><td>options</td><td>FullscreenOptions</td><td><em>(Optional)</em> 全屏选项，可选</td></tr></tbody></table><p><strong>Returns:</strong></p><p>Promise&lt;void&gt;</p>',9),o=[l];function r(p,c,i,d,y,E){return s(),n("div",null,o)}const m=e(a,[["render",r]]);export{h as __pageData,m as default};