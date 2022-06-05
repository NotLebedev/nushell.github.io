import{_ as n,u as t,o as p,c as o,a,t as e,d as c,e as r}from"./app.22fee913.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; all? (predicate)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>predicate</code>: the predicate that must match</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Find if services are running</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>UP<span class="token punctuation">]</span> <span class="token punctuation">[</span>UP<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> all? status <span class="token operator">==</span> UP
</code></pre></div><p>Check that all values are even</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> all? <span class="token punctuation">(</span><span class="token variable">$it</span> mod <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
</code></pre></div>`,9);function m(_,g,b,f,v,s){return p(),o("div",null,[a("h1",i,[u,d,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),k])}var P=n(l,[["render",m],["__file","all.html.vue"]]);export{P as default};
