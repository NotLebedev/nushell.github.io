import{_ as t,u as e,o as p,c as o,a as s,t as a,d as c,e as u}from"./app.aa868a80.js";const l={computed:{frontmatter(){return e().value}}},i={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=c(),d={style:{"white-space":"pre-wrap"}},h=u(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to xml --pretty</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pretty {int}</code>: Formats the XML text with the provided indentation setting</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an XML string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token string">&quot;note&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;children&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string">&quot;remember&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;attributes&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token string">&quot;children&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>Event<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>, <span class="token string">&quot;attributes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">|</span> to xml
</code></pre></div><p>Optionally, formats the text with a custom indentation setting</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token string">&quot;note&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;children&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string">&quot;remember&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;attributes&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token string">&quot;children&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>Event<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>, <span class="token string">&quot;attributes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">|</span> to xml -p <span class="token number">3</span>
</code></pre></div>`,9);function m(g,b,q,_,x,n){return p(),o("div",null,[s("h1",i,[r,k,s("code",null,a(n.frontmatter.title),1)]),s("div",d,a(n.frontmatter.usage),1),h])}var v=t(l,[["render",m],["__file","to_xml.html.vue"]]);export{v as default};