import{_ as s,o as a,c as t,Q as l}from"./chunks/framework.bf0d9ef3.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pkgs/utils.withinstall.md","filePath":"pkgs/utils.withinstall.md","lastUpdated":1701620986000}'),n={name:"pkgs/utils.withinstall.md"},p=l('<p><a href="./">Home</a> &gt; <a href="./utils.html">@jview/utils</a> &gt; <a href="./utils.withinstall.html">withInstall</a></p><h2 id="withinstall-function" tabindex="-1">withInstall() function <a class="header-anchor" href="#withinstall-function" aria-label="Permalink to &quot;withInstall() function&quot;">​</a></h2><p>给一个组件加上 install 方法，让它能够作为插件被使用</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">withInstall</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">comp</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">onAfterInstall</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">app</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SFCWithInstall</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">withInstall</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;(</span><span style="color:#E36209;">comp</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">onAfterInstall</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">app</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SFCWithInstall</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>comp</td><td>T</td><td>组件对象</td></tr><tr><td>onAfterInstall</td><td>(app: App) =&gt; void</td><td><em>(Optional)</em></td></tr></tbody></table><p><strong>Returns:</strong></p><p><a href="./utils.sfcwithinstall.html">SFCWithInstall</a>&lt;T&gt;</p>',9),o=[p];function e(r,c,i,y,E,d){return a(),t("div",null,o)}const F=s(n,[["render",e]]);export{u as __pageData,F as default};
