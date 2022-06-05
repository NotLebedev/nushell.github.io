import{_ as t,u as r,o as n,c as o,a as e,t as s,d as c,e as i}from"./app.22fee913.js";const d={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),m=c(),h={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ssv --noheaders --aligned-columns --minimum-spaces</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--noheaders</code>: don&#39;t treat the first row as column names</li><li><code>--aligned-columns</code>: assume columns are aligned</li><li><code>--minimum-spaces {int}</code>: the minimum spaces to separate columns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ssv formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FOO   BAR
1   2&#39;</span> <span class="token operator">|</span> from ssv
</code></pre></div><p>Converts ssv formatted string to table but not treating the first row as column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FOO   BAR
1   2&#39;</span> <span class="token operator">|</span> from ssv -n
</code></pre></div>`,9);function f(g,_,v,x,b,a){return n(),o("div",null,[e("h1",l,[p,m,e("code",null,s(a.frontmatter.title),1)]),e("div",h,s(a.frontmatter.usage),1),u])}var B=t(d,[["render",f],["__file","from_ssv.html.vue"]]);export{B as default};
