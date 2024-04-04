import{_ as t,o as e,c as a,Q as l}from"./chunks/framework.bf0d9ef3.js";const b=JSON.parse('{"title":"install","description":"","frontmatter":{"title":"install"},"headers":[],"relativePath":"utils/install/index.md","filePath":"utils/install/index.md","lastUpdated":1698907388000}'),s={name:"utils/install/index.md"},i=l('<h1 id="module-install" tabindex="-1">Module: install <a class="header-anchor" href="#module-install" aria-label="Permalink to &quot;Module: install&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h3><ul><li><a href="#sfcwithinstall">SFCWithInstall</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="#installall">installAll</a></li><li><a href="#withinstall">withInstall</a></li></ul><h2 id="type-aliases-1" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases-1" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="sfcwithinstall" tabindex="-1">SFCWithInstall <a class="header-anchor" href="#sfcwithinstall" aria-label="Permalink to &quot;SFCWithInstall&quot;">​</a></h3><p>Ƭ <strong>SFCWithInstall</strong>&lt;<code>T</code>&gt;: <code>T</code> &amp; <code>Plugin</code> &amp; { <code>displayName</code>: <code>string</code> ; <code>name</code>: <code>string</code> }</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><p>Defined in <a href="https://github.com/jview-design/jview/blob/dfe9002/packages/utils/src/install.ts#L7" target="_blank" rel="noreferrer">install.ts:7</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="installall" tabindex="-1">installAll <a class="header-anchor" href="#installall" aria-label="Permalink to &quot;installAll&quot;">​</a></h3><p>▸ <strong>installAll</strong>(<code>app</code>, <code>comps</code>): <code>void</code></p><p>注册多个全局组件</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>app</code></td><td style="text-align:left;"><code>App</code>&lt;<code>any</code>&gt;</td><td style="text-align:left;">Vue App 实例</td></tr><tr><td style="text-align:left;"><code>comps</code></td><td style="text-align:left;"><code>any</code>[]</td><td style="text-align:left;">组件列表</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><p>Defined in <a href="https://github.com/jview-design/jview/blob/dfe9002/packages/utils/src/install.ts#L31" target="_blank" rel="noreferrer">install.ts:31</a></p><hr><h3 id="withinstall" tabindex="-1">withInstall <a class="header-anchor" href="#withinstall" aria-label="Permalink to &quot;withInstall&quot;">​</a></h3><p>▸ <strong>withInstall</strong>&lt;<code>T</code>&gt;(<code>comp</code>): <a href="#sfcwithinstall"><code>SFCWithInstall</code></a>&lt;<code>T</code>&gt;</p><p>给一个组件加上 install 方法，让它能够作为插件被使用</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>comp</code></td><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">组件对象</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="#sfcwithinstall"><code>SFCWithInstall</code></a>&lt;<code>T</code>&gt;</p><p>Defined in <a href="https://github.com/jview-design/jview/blob/dfe9002/packages/utils/src/install.ts#L17" target="_blank" rel="noreferrer">install.ts:17</a></p>',32),r=[i];function n(o,d,h,c,p,f){return e(),a("div",null,r)}const m=t(s,[["render",n]]);export{b as __pageData,m as default};