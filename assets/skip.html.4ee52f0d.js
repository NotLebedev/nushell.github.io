import{_ as e,u as t,o as p,c as o,a,t as n,d as c,e as r}from"./app.22fee913.js";const i={computed:{frontmatter(){return t().value}}},l={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; skip (n)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>n</code>: the number of elements to skip</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Skip two elements</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>editions<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">2015</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2018</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2021</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> skip <span class="token number">2</span>
</code></pre></div><p>Skip the first value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> skip
</code></pre></div>`,9);function m(_,b,f,g,x,s){return p(),o("div",null,[a("h1",l,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),k])}var S=e(i,[["render",m],["__file","skip.html.vue"]]);export{S as default};
