import{_ as s,u as r,o,c as n,a as e,t,d as c,e as d}from"./app.22fee913.js";const i={computed:{frontmatter(){return r().value}}},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from json --objects</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--objects</code>: treat each line as a separate value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts json formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1 }&#39;</span> <span class="token operator">|</span> from json
</code></pre></div><p>Converts json formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1, &quot;b&quot;: [1, 2] }&#39;</span> <span class="token operator">|</span> from json
</code></pre></div>`,9);function _(f,g,b,x,v,a){return o(),n("div",null,[e("h1",l,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var k=s(i,[["render",_],["__file","from_json.html.vue"]]);export{k as default};
