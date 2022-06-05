import{_ as n,u as t,o,c,a,t as e,d as p,e as r}from"./app.22fee913.js";const i={computed:{frontmatter(){return t().value}}},l={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),h={style:{"white-space":"pre-wrap"}},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; view-source (item)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>item</code>: name or block to view</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>View the source of a code block</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> abc <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source <span class="token variable">$abc</span>
</code></pre></div><p>View the source of a custom command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def hi <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source hi
</code></pre></div><p>View the source of a custom command, which participates in the caller environment</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def-env foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env BAR <span class="token operator">=</span> <span class="token string">&#39;BAZ&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source foo
</code></pre></div><p>View the source of a module</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module mod-foo <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> <span class="token function">env</span> FOO_ENV <span class="token punctuation">{</span> <span class="token string">&#39;BAZ&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> view-source mod-foo
</code></pre></div>`,13);function m(g,f,v,_,b,s){return o(),c("div",null,[a("h1",l,[u,d,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),k])}var w=n(i,[["render",m],["__file","view-source.html.vue"]]);export{w as default};
