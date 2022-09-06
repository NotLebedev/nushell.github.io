import{_ as t,o as n,c as p,a,t as s,d as o,e as r}from"./app.57288ba9.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path parse --columns --extension</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li><li><code>--extension {string}</code>: Manually supply the extension (without the dot)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Each path is split into a table with &#39;parent&#39;, &#39;stem&#39; and &#39;extension&#39; fields.
On Windows, an extra &#39;prefix&#39; column is added.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Parse a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking/spam.txt&#39;</span> <span class="token operator">|</span> path parse
</code></pre></div><p>Replace a complex extension</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking/spam.tar.gz&#39;</span> <span class="token operator">|</span> path parse <span class="token parameter variable">-e</span> tar.gz <span class="token operator">|</span> upsert extension <span class="token punctuation">{</span> <span class="token string">&#39;txt&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Ignore the extension</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/etc/conf.d&#39;</span> <span class="token operator">|</span> path parse <span class="token parameter variable">-e</span> <span class="token string">&#39;&#39;</span>
</code></pre></div><p>Parse all paths under the &#39;name&#39; column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path parse <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div>`,15);function g(e,m){return n(),p("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const k=t(c,[["render",g],["__file","path_parse.html.vue"]]);export{k as default};