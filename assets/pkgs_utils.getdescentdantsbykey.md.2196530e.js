import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.bf0d9ef3.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pkgs/utils.getdescentdantsbykey.md","filePath":"pkgs/utils.getdescentdantsbykey.md","lastUpdated":1709033088000}'),p={name:"pkgs/utils.getdescentdantsbykey.md"},o=l('<p><a href="./">Home</a> &gt; <a href="./utils.html">@jview/utils</a> &gt; <a href="./utils.getdescentdantsbykey.html">getDescentdantsByKey</a></p><h2 id="getdescentdantsbykey-function" tabindex="-1">getDescentdantsByKey() function <a class="header-anchor" href="#getdescentdantsbykey-function" aria-label="Permalink to &quot;getDescentdantsByKey() function&quot;">​</a></h2><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getDescentdantsByKey</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">C</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;children&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">C</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TreeNode</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">C</span><span style="color:#E1E4E8;">&gt;&gt;(</span><span style="color:#FFAB70;">nodes</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[], </span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">mapper</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FieldMapper</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">C</span><span style="color:#E1E4E8;">&gt;, </span><span style="color:#FFAB70;">results</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[])</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getDescentdantsByKey</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;key&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">C</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;children&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">C</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TreeNode</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">C</span><span style="color:#24292E;">&gt;&gt;(</span><span style="color:#E36209;">nodes</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">[], </span><span style="color:#E36209;">key</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">, </span><span style="color:#E36209;">mapper</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FieldMapper</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">C</span><span style="color:#24292E;">&gt;, </span><span style="color:#E36209;">results</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">[])</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">[];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>nodes</td><td>T[]</td><td></td></tr><tr><td>key</td><td>string | number</td><td></td></tr><tr><td>mapper</td><td><a href="./utils.fieldmapper.html">FieldMapper</a>&lt;K, C&gt;</td><td></td></tr><tr><td>results</td><td>T[]</td><td><em>(Optional)</em></td></tr></tbody></table><p><strong>Returns:</strong></p><p>T[]</p>',8),t=[o];function e(r,c,y,E,d,i){return a(),n("div",null,t)}const h=s(p,[["render",e]]);export{g as __pageData,h as default};
