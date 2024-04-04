import{_ as s,o as a,c as t,Q as o}from"./chunks/framework.bf0d9ef3.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pkgs/utils.loadscript.md","filePath":"pkgs/utils.loadscript.md","lastUpdated":1699501631000}'),n={name:"pkgs/utils.loadscript.md"},p=o('<p><a href="./">Home</a> &gt; <a href="./utils.html">@jview/utils</a> &gt; <a href="./utils.loadscript.html">loadScript</a></p><h2 id="loadscript-function" tabindex="-1">loadScript() function <a class="header-anchor" href="#loadscript-function" aria-label="Permalink to &quot;loadScript() function&quot;">​</a></h2><p>加载一个脚本</p><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadScript</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LoadScriptOption</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Promise</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">unknown</span><span style="color:#E1E4E8;">&gt;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadScript</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LoadScriptOption</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Promise</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">unknown</span><span style="color:#24292E;">&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>options</td><td><a href="./utils.loadscriptoption.html">LoadScriptOption</a></td><td></td></tr></tbody></table><p><strong>Returns:</strong></p><p>Promise&lt;unknown&gt;</p><p>返回 Promise，existed 代表已经存在，loaded 代表加载完成。</p>',10),e=[p];function l(r,c,i,d,y,h){return a(),t("div",null,e)}const m=s(n,[["render",l]]);export{u as __pageData,m as default};