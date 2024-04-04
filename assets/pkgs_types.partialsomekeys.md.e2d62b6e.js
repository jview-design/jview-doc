import{_ as s,o as a,c as p,Q as l}from"./chunks/framework.bf0d9ef3.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pkgs/types.partialsomekeys.md","filePath":"pkgs/types.partialsomekeys.md","lastUpdated":1707041260000}'),o={name:"pkgs/types.partialsomekeys.md"},n=l('<p><a href="./">Home</a> &gt; <a href="./types.html">@jview/types</a> &gt; <a href="./types.partialsomekeys.html">PartialSomeKeys</a></p><h2 id="partialsomekeys-type" tabindex="-1">PartialSomeKeys type <a class="header-anchor" href="#partialsomekeys-type" aria-label="Permalink to &quot;PartialSomeKeys type&quot;">​</a></h2><p><strong>Signature:</strong></p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PartialSomeKeys</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">keyof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Pick</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">keyof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Omit</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">&gt;&gt; </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Partial</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Pick</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">K</span><span style="color:#E1E4E8;">&gt;&gt;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PartialSomeKeys</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">K</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Pick</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">keyof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Omit</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">&gt;&gt; </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Partial</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Pick</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">K</span><span style="color:#24292E;">&gt;&gt;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',4),e=[n];function t(r,c,y,E,i,d){return a(),p("div",null,e)}const _=s(o,[["render",t]]);export{F as __pageData,_ as default};
