import{_ as s,u as n,o,c as r,a,t,d as c,e as i}from"./app.22fee913.js";const p={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),g={style:{"white-space":"pre-wrap"}},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date format (format string) --list</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>format string</code>: the desired date format</li><li><code>--list</code>: lists strftime cheatsheet</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Format a given date using the default format (RFC 2822).</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2021-10-22 20:00:12 +01:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span>
</code></pre></div><p>Format a given date using a given format string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y-%m-%d&#39;</span>
</code></pre></div><p>Format a given date using a given format string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div><p>Format a given date using a given format string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2021-10-22 20:00:12 +01:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&quot;%Y-%m-%d&quot;</span>
</code></pre></div>`,13);function m(f,_,k,v,x,e){return o(),r("div",null,[a("h1",d,[l,u,a("code",null,t(e.frontmatter.title),1)]),a("div",g,t(e.frontmatter.usage),1),h])}var q=s(p,[["render",m],["__file","date_format.html.vue"]]);export{q as default};
