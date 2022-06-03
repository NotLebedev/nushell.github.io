import{_ as e,u as t,o,c as p,a,t as n,d as c,e as r}from"./app.aa868a80.js";const u={computed:{frontmatter(){return t().value}}},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),k={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr with-column ...series or expressions --name</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...series or expressions</code>: series to be added or expressions used to define the new columns</li><li><code>--name {string}</code>: new column name</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Adds a series to the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr to-df
    <span class="token operator">|</span> dfr with-column <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span> --name c
</code></pre></div><p>Adds a series to the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> dfr to-df
    <span class="token operator">|</span> dfr to-lazy
    <span class="token operator">|</span> dfr with-column <span class="token punctuation">((</span>dfr col a<span class="token punctuation">)</span> * <span class="token number">2</span> <span class="token operator">|</span> dfr as <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> dfr collect
</code></pre></div>`,9);function m(f,_,b,g,x,s){return o(),p("div",null,[a("h1",l,[i,d,a("code",null,n(s.frontmatter.title),1)]),a("div",k,n(s.frontmatter.usage),1),h])}var w=e(u,[["render",m],["__file","dfr_with-column.html.vue"]]);export{w as default};