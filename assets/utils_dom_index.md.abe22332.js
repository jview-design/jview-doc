import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.bf0d9ef3.js";const m=JSON.parse('{"title":"dom","description":"","frontmatter":{"title":"dom"},"headers":[],"relativePath":"utils/dom/index.md","filePath":"utils/dom/index.md","lastUpdated":1698907388000}'),l={name:"utils/dom/index.md"},r=o('<h1 id="module-dom" tabindex="-1">Module: dom <a class="header-anchor" href="#module-dom" aria-label="Permalink to &quot;Module: dom&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="/jview-doc/utils/dom/interfaces/EnhanceScriptElement.html">EnhanceScriptElement</a></li><li><a href="/jview-doc/utils/dom/interfaces/LoadScriptOption.html">LoadScriptOption</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="#getoffset">getOffset</a></li><li><a href="#issameurl">isSameUrl</a></li><li><a href="#loadscript">loadScript</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="getoffset" tabindex="-1">getOffset <a class="header-anchor" href="#getoffset" aria-label="Permalink to &quot;getOffset&quot;">​</a></h3><p>▸ <strong>getOffset</strong>(<code>el</code>, <code>relativeNode?</code>): <code>OffsetResponse</code></p><p>获取一个元素的 offset 信息</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>el</code></td><td style="text-align:left;"><code>HTMLElement</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">目标元素</td></tr><tr><td style="text-align:left;"><code>relativeNode</code></td><td style="text-align:left;"><code>HTMLElement</code></td><td style="text-align:left;"><code>document.body</code></td><td style="text-align:left;">参考元素</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>OffsetResponse</code></p><p>目标元素相对参考元素的偏移信息</p><p>Defined in <a href="https://github.com/jview-design/jview/blob/dfe9002/packages/utils/src/dom.ts#L99" target="_blank" rel="noreferrer">dom.ts:99</a></p><hr><h3 id="issameurl" tabindex="-1">isSameUrl <a class="header-anchor" href="#issameurl" aria-label="Permalink to &quot;isSameUrl&quot;">​</a></h3><p>▸ <strong>isSameUrl</strong>(<code>url1</code>, <code>url2</code>): <code>boolean</code></p><p>判断两个 url 是否指向相同的资源，会自动去掉协议部分再比较</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>url1</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">第一个 url</td></tr><tr><td style="text-align:left;"><code>url2</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">第二个 url</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><p>是否相同的布尔标识</p><p>Defined in <a href="https://github.com/jview-design/jview/blob/dfe9002/packages/utils/src/dom.ts#L9" target="_blank" rel="noreferrer">dom.ts:9</a></p><hr><h3 id="loadscript" tabindex="-1">loadScript <a class="header-anchor" href="#loadscript" aria-label="Permalink to &quot;loadScript&quot;">​</a></h3><p>▸ <strong>loadScript</strong>(<code>param0?</code>): <code>Promise</code>&lt;<code>&quot;existed&quot;</code> | <code>&quot;loaded&quot;</code>&gt;</p><p>加载一个脚本</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>param0</code></td><td style="text-align:left;"><a href="/jview-doc/utils/dom/interfaces/LoadScriptOption.html"><code>LoadScriptOption</code></a></td><td style="text-align:left;">支持的参数见 LoadScriptOption</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>&quot;existed&quot;</code> | <code>&quot;loaded&quot;</code>&gt;</p><p>Promise&lt;&#39;existed&#39; | &#39;loaded&#39;&gt;</p><p>Defined in <a href="https://github.com/jview-design/jview/blob/dfe9002/packages/utils/src/dom.ts#L40" target="_blank" rel="noreferrer">dom.ts:40</a></p>',36),d=[r];function i(s,n,c,h,f,u){return t(),a("div",null,d)}const b=e(l,[["render",i]]);export{m as __pageData,b as default};
