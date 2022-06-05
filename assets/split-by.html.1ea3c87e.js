import{_ as t,u as e,o as p,c as o,a,t as n,d as r,e as c}from"./app.22fee913.js";const l={computed:{frontmatter(){return e().value}}},i={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split-by (splitter)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>splitter</code>: the splitter value to use</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>split items by column named &quot;lang&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&#39;2019&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;andres&#39;</span>, lang: <span class="token string">&#39;rb&#39;</span>, year: <span class="token string">&#39;2019&#39;</span> <span class="token punctuation">}</span>,
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;jt&#39;</span>, lang: <span class="token string">&#39;rs&#39;</span>, year: <span class="token string">&#39;2019&#39;</span> <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>,
                    <span class="token string">&#39;2021&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;storm&#39;</span>, lang: <span class="token string">&#39;rs&#39;</span>, <span class="token string">&#39;year&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;2021&#39;</span> <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span> <span class="token operator">|</span> split-by lang

</code></pre></div>`,7);function g(m,_,f,b,x,s){return p(),o("div",null,[a("h1",i,[u,d,a("code",null,n(s.frontmatter.title),1)]),a("div",h,n(s.frontmatter.usage),1),k])}var v=t(l,[["render",g],["__file","split-by.html.vue"]]);export{v as default};
