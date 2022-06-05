import{_ as n,u as t,o,c as p,a,t as e,d as r,e as c}from"./app.22fee913.js";const l={computed:{frontmatter(){return t().value}}},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=r(),h={style:{"white-space":"pre-wrap"}},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr get-second </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns second from a date</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> dt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;2020-08-04T16:39:18+00:00&#39;</span> <span class="token operator">|</span> into datetime -z <span class="token string">&#39;UTC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$dt</span> <span class="token variable">$dt</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> dfr get-second
</code></pre></div>`,5);function k(_,m,g,x,b,s){return o(),p("div",null,[a("h1",d,[i,u,a("code",null,e(s.frontmatter.title),1)]),a("div",h,e(s.frontmatter.usage),1),f])}var $=n(l,[["render",k],["__file","dfr_get-second.html.vue"]]);export{$ as default};
