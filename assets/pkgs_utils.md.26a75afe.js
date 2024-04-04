import{_ as t,o as e,c as a,Q as l}from"./chunks/framework.bf0d9ef3.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pkgs/utils.md","filePath":"pkgs/utils.md","lastUpdated":1709033088000}'),r={name:"pkgs/utils.md"},d=l('<p><a href="./">Home</a> &gt; <a href="./utils.html">@jview/utils</a></p><h2 id="utils-package" tabindex="-1">utils package <a class="header-anchor" href="#utils-package" aria-label="Permalink to &quot;utils package&quot;">​</a></h2><p><code>@jview/utils</code>封装了 JView UI 产品中常用的一些工具函数。这些工具函数也不仅限于 JView UI 产品中使用。</p><h2 id="enumerations" tabindex="-1">Enumerations <a class="header-anchor" href="#enumerations" aria-label="Permalink to &quot;Enumerations&quot;">​</a></h2><table><thead><tr><th>Enumeration</th><th>Description</th></tr></thead><tbody><tr><td><a href="./utils.datatype.html">DataType</a></td><td>数据类型枚举</td></tr></tbody></table><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><a href="./utils.camelize.html">camelize(str)</a></td><td>中横线写法转驼峰写法</td></tr><tr><td><a href="./utils.capitalize.html">capitalize(str)</a></td><td>首字母大写</td></tr><tr><td><a href="./utils.enterfullscreen.html">enterFullscreen(element, options)</a></td><td>进入全屏，可参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen%E3%80%82" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen。</a> 存在 top-layer 叠加问题，如果要规避叠加顺序带来的问题，需要手动判断全屏状态，如果当前已经是全屏状态，可以先退出全屏，再让目标元素进入全屏。</td></tr><tr><td><a href="./utils.exitfullscreen.html">exitFullscreen()</a></td><td>退出全屏，可参考 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen" target="_blank" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen</a></td></tr><tr><td><a href="./utils.getdescentdantkeysbykey.html">getDescentdantKeysByKey(nodes, key, mapper, results)</a></td><td></td></tr><tr><td><a href="./utils.getdescentdantsbykey.html">getDescentdantsByKey(nodes, key, mapper, results)</a></td><td></td></tr><tr><td><a href="./utils.getdescentdantsbynode.html">getDescentdantsByNode(node, mapper, results)</a></td><td></td></tr><tr><td><a href="./utils.getfullscreenelement.html">getFullscreenElement()</a></td><td>获取全屏元素</td></tr><tr><td><a href="./utils.getoffset.html">getOffset(el, relativeNode)</a></td><td>获取一个元素的 offset 信息</td></tr><tr><td><a href="./utils.gettreenodebykey.html">getTreeNodeByKey(nodes, key, mapper)</a></td><td>根据目标 key 值找到</td></tr><tr><td><a href="./utils.gettype.html">getType(val)</a></td><td>判断变量的数据类型</td></tr><tr><td><a href="./utils.installall.html">installAll(app, comps)</a></td><td>注册多个全局组件</td></tr><tr><td><a href="./utils.isarray.html">isArray(val)</a></td><td>是否是数组类型</td></tr><tr><td><a href="./utils.isbasictype.html">isBasicType(val)</a></td><td>是否是基础类型</td></tr><tr><td><a href="./utils.isblob.html">isBlob(val)</a></td><td>是否是 Blob 类型</td></tr><tr><td><a href="./utils.isbool.html">isBool(val)</a></td><td>是否是布尔类型</td></tr><tr><td><a href="./utils.isdefined.html">isDefined(val)</a></td><td>判断变量是否有具体定义，即非null,非undefined</td></tr><tr><td><a href="./utils.isfile.html">isFile(val)</a></td><td>是否是 File 类型，File 类型也是 Blob 的子类型</td></tr><tr><td><a href="./utils.isfullscreen.html">isFullscreen()</a></td><td>判断当前是否是全屏状态</td></tr><tr><td><a href="./utils.isfullscreenenabled.html">isFullscreenEnabled()</a></td><td>判断浏览器当前状态是否允许进入全屏</td></tr><tr><td><a href="./utils.isfunction.html">isFunction(val)</a></td><td>是否是函数类型</td></tr><tr><td><a href="./utils.isjsonarraystring.html">isJSONArrayString(val)</a></td><td>是否是JSON数组字符串</td></tr><tr><td><a href="./utils.isjsonobjectstring.html">isJSONObjectString(val)</a></td><td>是否是JSON对象字符串</td></tr><tr><td><a href="./utils.isjsonstring.html">isJSONString(val)</a></td><td>是否是JSON字符串，空字符串也认为是合法的</td></tr><tr><td><a href="./utils.ismap.html">isMap(val)</a></td><td>是否是 map 类型</td></tr><tr><td><a href="./utils.isnull.html">isNull(val)</a></td><td>是否是 null 类型</td></tr><tr><td><a href="./utils.isnumber.html">isNumber(val)</a></td><td>是否是数值类型</td></tr><tr><td><a href="./utils.isobject.html">isObject(val)</a></td><td>是否是对象 object 类型</td></tr><tr><td><a href="./utils.ispromise.html">isPromise(val)</a></td><td>是否是 Promise 类型</td></tr><tr><td><a href="./utils.issameurl.html">isSameUrl(url1, url2)</a></td><td>判断两个 url 是否指向相同的资源，会自动去掉协议部分再比较</td></tr><tr><td><a href="./utils.isset.html">isSet(val)</a></td><td>是否是 set 类型</td></tr><tr><td><a href="./utils.isstring.html">isString(val)</a></td><td>是否是字符串类型</td></tr><tr><td><a href="./utils.issymbol.html">isSymbol(val)</a></td><td>是否是 symbol 类型</td></tr><tr><td><a href="./utils.isundefined.html">isUndefined(val)</a></td><td>是否是 undefined 类型</td></tr><tr><td><a href="./utils.isundefornull.html">isUndefOrNull(val)</a></td><td>是否是 undefined 或 null 类型</td></tr><tr><td><a href="./utils.kebablize.html">kebablize(str)</a></td><td>转为中横线写法</td></tr><tr><td><a href="./utils.listenfullscreen.html">listenFullscreen(callback, options)</a></td><td>监听全屏变化事件</td></tr><tr><td><a href="./utils.loadscript.html">loadScript(options)</a></td><td>加载一个脚本</td></tr><tr><td><a href="./utils.pascalize.html">pascalize(str)</a></td><td>转为 Pascal 写法，即大驼峰写法</td></tr><tr><td><a href="./utils.patchf11defaultaction.html">patchF11DefaultAction()</a></td><td>阻止F11按键的默认行为，并根据当前的全屏状态调用进入/退出全屏，解决通过F11按键和API两种方式进入全屏时出现的状态不一致问题。</td></tr><tr><td><a href="./utils.sleep.html">sleep(seconds)</a></td><td>睡眠等待</td></tr><tr><td><a href="./utils.unlistenfullscreen.html">unlistenFullscreen(callback, options)</a></td><td>移除监听全屏变化事件</td></tr><tr><td><a href="./utils.withinstall.html">withInstall(comp, onAfterInstall)</a></td><td>给一个组件加上 install 方法，让它能够作为插件被使用</td></tr></tbody></table><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><table><thead><tr><th>Interface</th><th>Description</th></tr></thead><tbody><tr><td><a href="./utils.enhanceddocument.html">EnhancedDocument</a></td><td>增强 Document，加上一些全屏类方法</td></tr><tr><td><a href="./utils.enhancedhtmlelement.html">EnhancedHTMLElement</a></td><td>增强 HTMLElement，加上一些全屏类方法</td></tr><tr><td><a href="./utils.enhancescriptelement.html">EnhanceScriptElement</a></td><td>补足 script 元素的一些属性和方法</td></tr><tr><td><a href="./utils.loadscriptoption.html">LoadScriptOption</a></td><td>loadScript 函数支持的参数类型</td></tr><tr><td><a href="./utils.offsetresponse.html">OffsetResponse</a></td><td>getOffset 函数的返回类型，表示偏移量</td></tr></tbody></table><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><table><thead><tr><th>Type Alias</th><th>Description</th></tr></thead><tbody><tr><td><a href="./utils.basictype.html">BasicType</a></td><td>一个类型别名，代表基础类型</td></tr><tr><td><a href="./utils.fieldmapper.html">FieldMapper</a></td><td>字段映射配置</td></tr><tr><td><a href="./utils.generalfunction.html">GeneralFunction</a></td><td>通用的函数类型</td></tr><tr><td><a href="./utils.sfcwithinstall.html">SFCWithInstall</a></td><td>SFC组件类型的基础上加上install方法，使之成为一个标准的插件</td></tr><tr><td><a href="./utils.treenode.html">TreeNode</a></td><td>树节点基本类型</td></tr></tbody></table>',11),s=[d];function i(n,h,o,u,c,f){return e(),a("div",null,s)}const b=t(r,[["render",i]]);export{p as __pageData,b as default};