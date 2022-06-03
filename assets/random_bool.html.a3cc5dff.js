import{_ as r,u as o,o as s,c as n,a as e,t,d,e as c}from"./app.31037174.js";const l={computed:{frontmatter(){return o().value}}},i={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=d(),p={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random bool --bias</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--bias {number}</code>: Adjusts the probability of a &quot;true&quot; outcome</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate a random boolean value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random bool
</code></pre></div><p>Generate a random boolean value with a 75% chance of &quot;true&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random bool --bias <span class="token number">0.75</span>
</code></pre></div>`,9);function _(b,f,g,x,v,a){return s(),n("div",null,[e("h1",i,[h,u,e("code",null,t(a.frontmatter.title),1)]),e("div",p,t(a.frontmatter.usage),1),m])}var q=r(l,[["render",_],["__file","random_bool.html.vue"]]);export{q as default};